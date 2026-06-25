import { NextRequest, NextResponse, after } from "next/server";
import React from "react";
import * as cheerio from "cheerio";
import { renderToBuffer } from "@react-pdf/renderer";
import AuditPdfDocument from "@/components/AuditPdfDocument";
import { saveLead } from "@/lib/saveLead";
import { sendAuditEmail } from "@/lib/sendAuditEmail";
import type {
  AuditResult,
  SeoReport,
  SpeedReport,
  DesignReport,
  AeoReport,
  AuditCheckItem,
} from "@/types/audit";

// Raise timeout ceiling for Vercel Pro; Hobby plan caps at 10s (PageSpeed may timeout on slow sites)
export const maxDuration = 60;

// ─── Rate limiter (in-memory, per IP) ────────────────────────────────────────
// 5 audits per IP per 10 minutes
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const rateMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

const PAGESPEED_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const HTML_FETCH_TIMEOUT = 15_000;
const PAGESPEED_TIMEOUT = 45_000;

// ─── HTML Fetcher ─────────────────────────────────────────────────────────────

async function fetchHtml(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), HTML_FETCH_TIMEOUT);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; SitesBrandAuditBot/1.0; +https://sitesbrand.com)",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    const ct = res.headers.get("content-type") ?? "";
    if (!ct.includes("html")) throw new Error(`Non-HTML content-type: ${ct}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

// ─── Schema extractor ─────────────────────────────────────────────────────────

function extractSchemaTypes($: cheerio.CheerioAPI): string[] {
  const types: string[] = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const raw = $(el).html();
      if (!raw) return;
      const data: unknown = JSON.parse(raw);
      const walk = (obj: unknown): void => {
        if (!obj || typeof obj !== "object") return;
        if (Array.isArray(obj)) { obj.forEach(walk); return; }
        const o = obj as Record<string, unknown>;
        if (o["@type"]) {
          const t = o["@type"];
          if (Array.isArray(t)) types.push(...t.map(String));
          else types.push(String(t));
        }
        Object.values(o).forEach(walk);
      };
      walk(data);
    } catch { /* malformed JSON-LD — skip */ }
  });
  return [...new Set(types)];
}

// ─── SEO Parser ───────────────────────────────────────────────────────────────

function parseSeo(html: string, pageUrl: string): SeoReport {
  const $ = cheerio.load(html);
  const base = new URL(pageUrl);

  // Title
  const titleVal = $("title").first().text().trim() || null;
  const titleLen = titleVal?.length ?? 0;
  const titleStatus =
    !titleVal ? "Fail"
    : titleLen < 30 || titleLen > 60 ? "Warning"
    : "Pass";

  // Meta description
  const metaDescVal =
    $('meta[name="description"]').attr("content")?.trim() ||
    $('meta[property="og:description"]').attr("content")?.trim() ||
    null;
  const metaDescLen = metaDescVal?.length ?? 0;
  const metaDescStatus =
    !metaDescVal ? "Fail"
    : metaDescLen < 70 || metaDescLen > 160 ? "Warning"
    : "Pass";

  // H1
  const h1Els = $("h1");
  const h1Count = h1Els.length;
  const h1Values = h1Els.map((_, el) => $(el).text().trim()).get().slice(0, 3);
  const h1Status: "Pass" | "Fail" | "Warning" =
    h1Count === 0 ? "Fail" : h1Count > 1 ? "Warning" : "Pass";

  // Canonical
  const canonicalHref = $('link[rel="canonical"]').attr("href") ?? null;

  // Meta robots
  const robotsVal =
    $('meta[name="robots"]').attr("content")?.toLowerCase() ?? null;
  const isNoIndex = !!(robotsVal && (robotsVal.includes("noindex") || robotsVal.includes("none")));

  // Schema types
  const schemaTypes = extractSchemaTypes($);

  // Image alt coverage
  const allImgs = $("img");
  const totalImgs = allImgs.length;
  const withAlt = allImgs.filter((_, el) => {
    const alt = $(el).attr("alt");
    return alt !== undefined && alt.trim() !== "";
  }).length;
  const altPct = totalImgs === 0 ? 100 : Math.round((withAlt / totalImgs) * 100);

  // Links (internal vs external)
  let internalLinks = 0;
  let externalLinks = 0;
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") ?? "";
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;
    try {
      const resolved = new URL(href, base);
      if (resolved.hostname === base.hostname) internalLinks++;
      else externalLinks++;
    } catch { /* relative or malformed */ }
  });

  return {
    title: { value: titleVal, length: titleLen, status: titleStatus },
    metaDescription: { value: metaDescVal, length: metaDescLen, status: metaDescStatus },
    h1Tags: { count: h1Count, values: h1Values, status: h1Status },
    canonical: { present: !!canonicalHref, value: canonicalHref },
    metaRobots: { present: !!robotsVal, value: robotsVal, isNoIndex },
    schemaTypes,
    imageAltCoverage: { total: totalImgs, withAlt, percentage: altPct },
    links: { internal: internalLinks, external: externalLinks },
  };
}

// ─── Design Parser ────────────────────────────────────────────────────────────

function parseDesign(html: string): DesignReport {
  const $ = cheerio.load(html);
  const viewportMeta = !!$('meta[name="viewport"]').attr("content");

  // Heuristic: check for CSS media query hints in inline styles or <style> tags
  const styleContent = $("style").map((_, el) => $(el).html()).get().join(" ");
  const hasResponsiveClasses =
    styleContent.includes("@media") ||
    html.includes("max-width") ||
    html.includes("min-width") ||
    html.includes("flex") ||
    html.includes("grid");

  const notes: string[] = ["Heuristic check only — not a visual design review"];
  if (!viewportMeta) notes.push("No viewport meta tag — mobile users may see desktop layout");

  return { viewportMeta, hasResponsiveClasses, notes };
}

// ─── AEO / GEO Parser ─────────────────────────────────────────────────────────

const QUESTION_WORDS = /^(what|why|how|when|where|who|which|is|are|can|do|does|will|should|was|were|has|have)\b/i;

function parseAeo(html: string, schemaTypes: string[]): AeoReport {
  const $ = cheerio.load(html);

  // Q&A heading check
  let qaHeadingsFound = 0;
  $("h2, h3, h4").each((_, el) => {
    const text = $(el).text().trim();
    if (QUESTION_WORDS.test(text) && text.endsWith("?")) qaHeadingsFound++;
  });

  // NAP: phone number pattern in text
  const bodyText = $("body").text();
  const phonePattern = /(\+?\d[\d\s\-().]{7,}\d)/;
  const napPresent = phonePattern.test(bodyText);

  // AEO-relevant schema types
  const TARGET_SCHEMA = ["FAQPage", "Organization", "Article", "BlogPosting", "LocalBusiness", "WebSite", "Product", "Service"];

  const checks: AuditCheckItem[] = [
    {
      label: "FAQPage Schema",
      status: schemaTypes.includes("FAQPage") ? "Present" : "Missing",
      detail: schemaTypes.includes("FAQPage")
        ? "FAQPage JSON-LD detected — good for AI snippets"
        : "No FAQPage JSON-LD found — add Q&A schema to improve AI visibility",
    },
    {
      label: "Organization Schema",
      status: schemaTypes.includes("Organization") ? "Present" : "Missing",
      detail: schemaTypes.includes("Organization")
        ? "Organization JSON-LD present"
        : "Missing — helps AI engines identify your brand entity",
    },
    {
      label: "Article / BlogPosting Schema",
      status:
        schemaTypes.includes("Article") || schemaTypes.includes("BlogPosting")
          ? "Present"
          : "Missing",
      detail:
        schemaTypes.includes("Article") || schemaTypes.includes("BlogPosting")
          ? "Article/BlogPosting JSON-LD found"
          : "Not detected on this page (may be present on blog/article pages)",
    },
    {
      label: "LocalBusiness Schema",
      status: schemaTypes.includes("LocalBusiness") ? "Present" : "Missing",
      detail: schemaTypes.includes("LocalBusiness")
        ? "LocalBusiness JSON-LD found"
        : "Missing — important for local AI/GEO results",
    },
    {
      label: "Q&A Heading Structure",
      status: qaHeadingsFound > 0 ? "Present" : "Missing",
      detail:
        qaHeadingsFound > 0
          ? `${qaHeadingsFound} question-format heading(s) found — good Q&A content signal`
          : "No question-format headings (Who/What/How/Why?) detected",
    },
    {
      label: "Other Schema Types Present",
      status: schemaTypes.filter((t) => !TARGET_SCHEMA.includes(t)).length > 0 ? "Present" : "Not Verified",
      detail:
        schemaTypes.length > 0
          ? `Found: ${schemaTypes.join(", ")}`
          : "No JSON-LD schema found on this page",
    },
    {
      label: "NAP (Phone number in content)",
      status: napPresent ? "Present" : "Not Verified",
      detail: napPresent
        ? "Phone number pattern detected in page content"
        : "No phone number pattern detected — manual review needed for full NAP consistency",
    },
  ];

  return { checks, qaHeadingsFound, schemaTypes, napPresent };
}

// ─── PageSpeed API ─────────────────────────────────────────────────────────────

type PSIScore = "Pass" | "Fail" | "Warning" | null;

function scoreFromNumeric(value: number, good: number, poor: number): PSIScore {
  if (value <= good) return "Pass";
  if (value <= poor) return "Warning";
  return "Fail";
}

interface PSIResponse {
  lighthouseResult?: {
    categories?: { performance?: { score?: number } };
    audits?: Record<string, { numericValue?: number; score?: number | null }>;
  };
  error?: { message: string };
}

async function fetchPageSpeed(url: string, strategy: "mobile" | "desktop"): Promise<PSIResponse | null> {
  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
  if (!apiKey) return null;

  const endpoint = `${PAGESPEED_URL}?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=${strategy}&category=performance`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PAGESPEED_TIMEOUT);

  try {
    const res = await fetch(endpoint, { signal: controller.signal });
    return (await res.json()) as PSIResponse;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function parseSpeedResult(
  mobile: PSIResponse | null,
  desktop: PSIResponse | null
): SpeedReport {
  const mAudits = mobile?.lighthouseResult?.audits;
  const mScore = mobile?.lighthouseResult?.categories?.performance?.score ?? null;
  const dScore = desktop?.lighthouseResult?.categories?.performance?.score ?? null;

  // LCP — good ≤ 2.5s, poor > 4s (API returns ms)
  const lcpRaw = mAudits?.["largest-contentful-paint"]?.numericValue ?? null;
  const lcpStatus: PSIScore = lcpRaw !== null ? scoreFromNumeric(lcpRaw, 2500, 4000) : null;

  // CLS — good ≤ 0.1, poor > 0.25
  const clsRaw = mAudits?.["cumulative-layout-shift"]?.numericValue ?? null;
  const clsStatus: PSIScore = clsRaw !== null ? scoreFromNumeric(clsRaw, 0.1, 0.25) : null;

  // INP — good ≤ 200ms, poor > 500ms
  const inpRaw =
    mAudits?.["interaction-to-next-paint"]?.numericValue ??
    mAudits?.["total-blocking-time"]?.numericValue ??
    null;
  const inpStatus: PSIScore = inpRaw !== null ? scoreFromNumeric(inpRaw, 200, 500) : null;
  // FCP — good ≤ 1.8s, poor > 3s
  const fcpRaw = mAudits?.["first-contentful-paint"]?.numericValue ?? null;
  const fcpStatus: PSIScore = fcpRaw !== null ? scoreFromNumeric(fcpRaw, 1800, 3000) : null;

  return {
    mobileScore: mScore !== null ? Math.round(mScore * 100) : null,
    desktopScore: dScore !== null ? Math.round(dScore * 100) : null,
    lcp: { value: lcpRaw, unit: "ms", status: lcpStatus },
    cls: { value: clsRaw !== null ? Math.round(clsRaw * 1000) / 1000 : null, status: clsStatus },
    inp: { value: inpRaw !== null ? Math.round(inpRaw) : null, unit: "ms", status: inpStatus },
    fcp: { value: fcpRaw, unit: "ms", status: fcpStatus },
  };
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // Rate limit by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests — please wait a few minutes before auditing again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { url, name, email, phone } = body as {
      url: string;
      name: string;
      email: string;
      phone: string;
    };

    if (!url || !email) {
      return NextResponse.json({ error: "url and email are required" }, { status: 400 });
    }

    // Validate URL shape
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }

    // Run HTML fetch + both PageSpeed strategies in parallel
    const [htmlResult, mobileResult, desktopResult] = await Promise.allSettled([
      fetchHtml(parsedUrl.href),
      fetchPageSpeed(parsedUrl.href, "mobile"),
      fetchPageSpeed(parsedUrl.href, "desktop"),
    ]);

    if (htmlResult.status === "rejected") {
      const msg = (htmlResult.reason as Error).message ?? "Could not fetch website";
      return NextResponse.json(
        { error: `Unable to reach ${parsedUrl.hostname}: ${msg}` },
        { status: 422 }
      );
    }

    const html = htmlResult.value;
    const mobileSpeed = mobileResult.status === "fulfilled" ? mobileResult.value : null;
    const desktopSpeed = desktopResult.status === "fulfilled" ? desktopResult.value : null;

    // Parse all checks
    const seo = parseSeo(html, parsedUrl.href);
    const speed = parseSpeedResult(mobileSpeed, desktopSpeed);
    const design = parseDesign(html);
    const aeo = parseAeo(html, seo.schemaTypes);

    const result: AuditResult = {
      url: parsedUrl.href,
      name,
      email,
      phone,
      timestamp: new Date().toISOString(),
      seo,
      speed,
      design,
      aeo,
    };

    // Return the JSON result immediately, then do email + lead storage in background
    after(async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pdfBuffer: Buffer = await (renderToBuffer as any)(
          React.createElement(AuditPdfDocument, { data: result })
        );
        await Promise.allSettled([
          saveLead(result),
          sendAuditEmail(result, pdfBuffer),
        ]);
      } catch (err) {
        console.error("[audit] background task failed:", err);
      }
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("[audit] unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
