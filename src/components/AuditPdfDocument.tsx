import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type {
  AuditResult,
  SeoReport,
  SpeedReport,
  DesignReport,
  AeoReport,
} from "@/types/audit";

// ─── Brand colours ────────────────────────────────────────────────────────────
const C = {
  navy: "#1A1B41",
  cyan: "#00E5FF",
  purple: "#5B5BF0",
  coral: "#FF6F59",
  green: "#16a34a",
  red: "#dc2626",
  amber: "#d97706",
  slate: "#5b5d77",
  lightBg: "#F4F5F6",
  border: "#dfe3ee",
  text: "#1A1B41",
  white: "#ffffff",
} as const;

function statusColor(status: string): string {
  switch (status) {
    case "Pass":
    case "Present":
      return C.green;
    case "Fail":
    case "Missing":
      return C.red;
    case "Warning":
      return C.amber;
    default:
      return C.slate;
  }
}

function scoreColor(score: number | null): string {
  if (score === null) return C.slate;
  if (score >= 90) return C.green;
  if (score >= 50) return C.amber;
  return C.red;
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: C.text,
    paddingBottom: 50,
  },
  // Header
  header: {
    backgroundColor: C.navy,
    padding: 32,
    paddingBottom: 28,
    marginBottom: 22,
  },
  brand: { fontFamily: "Helvetica-Bold", fontSize: 15, color: C.cyan, marginBottom: 6 },
  reportTitle: { fontFamily: "Helvetica-Bold", fontSize: 21, color: C.white, marginBottom: 8 },
  headerUrl: { fontSize: 10, color: "#9af4ff", marginBottom: 2 },
  headerDate: { fontSize: 8.5, color: "#b6badd" },
  // Body
  body: { paddingHorizontal: 32 },
  section: { marginBottom: 22 },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
    color: C.navy,
    borderBottomWidth: 2,
    borderBottomColor: C.navy,
    paddingBottom: 5,
    marginBottom: 9,
  },
  // Check rows
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  badge: {
    width: 72,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
    marginRight: 8,
    alignItems: "center",
  },
  badgeText: { fontFamily: "Helvetica-Bold", fontSize: 7.5, color: C.white },
  rowLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: C.text,
    width: 130,
    marginRight: 8,
  },
  rowDetail: { fontSize: 8.5, color: C.slate, flex: 1 },
  // Speed scores
  scoreRow: { flexDirection: "row", marginBottom: 10 },
  scoreBox: {
    flex: 1,
    backgroundColor: C.lightBg,
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    marginRight: 8,
  },
  scoreBoxLast: {
    flex: 1,
    backgroundColor: C.lightBg,
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
  },
  scoreNum: { fontFamily: "Helvetica-Bold", fontSize: 28, marginBottom: 2 },
  scoreLabel: { fontSize: 8.5, color: C.slate },
  cwvRow: { flexDirection: "row", marginBottom: 8 },
  cwvBox: {
    flex: 1,
    backgroundColor: C.lightBg,
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
    marginRight: 6,
  },
  cwvBoxLast: {
    flex: 1,
    backgroundColor: C.lightBg,
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
  },
  cwvMetric: { fontSize: 8, color: C.slate, marginBottom: 2 },
  cwvValue: { fontFamily: "Helvetica-Bold", fontSize: 12, marginBottom: 3 },
  // Recommended fixes
  fixesBox: {
    backgroundColor: "#eefbff",
    borderLeftWidth: 3,
    borderLeftColor: C.cyan,
    padding: 10,
    marginTop: 8,
    borderRadius: 2,
  },
  fixesTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: C.navy,
    marginBottom: 5,
  },
  fixRow: { flexDirection: "row", marginBottom: 3 },
  fixDot: { fontSize: 9, color: C.cyan, marginRight: 5, marginTop: 0.5 },
  fixText: { fontSize: 8.5, color: C.text, flex: 1 },
  noIssues: { fontFamily: "Helvetica-Bold", fontSize: 9, color: C.green, marginTop: 6 },
  // CTA
  cta: {
    backgroundColor: C.navy,
    padding: 28,
    alignItems: "center",
    marginTop: 28,
  },
  ctaTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    color: C.white,
    marginBottom: 5,
    textAlign: "center",
  },
  ctaSub: { fontSize: 9.5, color: "#b6badd", marginBottom: 14, textAlign: "center" },
  ctaBtn: {
    backgroundColor: C.cyan,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  ctaBtnText: { fontFamily: "Helvetica-Bold", fontSize: 11, color: "#0a0b1e" },
  // Page number
  pageNum: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 8,
    color: C.slate,
  },
  // Disclaimer
  disclaimer: { fontSize: 8, color: C.slate, fontStyle: "italic", marginTop: 6 },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ status }: { status: string }) {
  return (
    <View style={[s.badge, { backgroundColor: statusColor(status) }]}>
      <Text style={s.badgeText}>{status}</Text>
    </View>
  );
}

function CheckRow({
  status,
  label,
  detail,
}: {
  status: string;
  label: string;
  detail?: string;
}) {
  return (
    <View style={s.row}>
      <Badge status={status} />
      <Text style={s.rowLabel}>{label}</Text>
      {detail ? <Text style={s.rowDetail}>{detail}</Text> : null}
    </View>
  );
}

function Fixes({ items }: { items: string[] }) {
  if (items.length === 0) {
    return <Text style={s.noIssues}>No critical issues found in this section.</Text>;
  }
  return (
    <View style={s.fixesBox}>
      <Text style={s.fixesTitle}>Recommended Fixes</Text>
      {items.map((fix, i) => (
        <View key={i} style={s.fixRow}>
          <Text style={s.fixDot}>•</Text>
          <Text style={s.fixText}>{fix}</Text>
        </View>
      ))}
    </View>
  );
}

function CwvBadge({ status }: { status: string | null }) {
  if (!status) return null;
  return (
    <View style={[{ borderRadius: 3, paddingVertical: 2, paddingHorizontal: 4, backgroundColor: statusColor(status) }]}>
      <Text style={s.badgeText}>{status}</Text>
    </View>
  );
}

// ─── Fix generators ───────────────────────────────────────────────────────────

function getSeoFixes(seo: SeoReport): string[] {
  const fixes: string[] = [];
  if (seo.title.status === "Fail") {
    fixes.push("Add a <title> tag (aim for 50–60 characters)");
  } else if (seo.title.status === "Warning") {
    fixes.push(
      seo.title.length < 30
        ? `Title is too short (${seo.title.length} chars) — expand to 50–60 characters`
        : `Title is too long (${seo.title.length} chars) — trim to under 60 characters`
    );
  }
  if (seo.metaDescription.status === "Fail") {
    fixes.push("Add a meta description (120–160 characters) to improve click-through rates");
  } else if (seo.metaDescription.status === "Warning") {
    fixes.push(`Meta description is ${seo.metaDescription.length} chars — optimal is 120–160`);
  }
  if (seo.h1Tags.count === 0) {
    fixes.push("Add exactly one H1 tag — it is your primary keyword signal");
  } else if (seo.h1Tags.count > 1) {
    fixes.push(`You have ${seo.h1Tags.count} H1 tags — reduce to one per page`);
  }
  if (!seo.canonical.present) {
    fixes.push('Add <link rel="canonical"> to prevent duplicate content penalties');
  }
  if (seo.metaRobots.isNoIndex) {
    fixes.push(
      "CRITICAL: Remove noindex from meta robots — this page is hidden from all search engines!"
    );
  }
  if (seo.schemaTypes.length === 0) {
    fixes.push(
      "Add JSON-LD schema markup (minimum: Organization + FAQPage) to improve rich results"
    );
  }
  if (seo.imageAltCoverage.percentage < 80 && seo.imageAltCoverage.total > 0) {
    const missing = seo.imageAltCoverage.total - seo.imageAltCoverage.withAlt;
    fixes.push(
      `Add alt text to ${missing} image(s) — currently ${seo.imageAltCoverage.percentage}% coverage`
    );
  }
  return fixes;
}

function getSpeedFixes(speed: SpeedReport): string[] {
  const fixes: string[] = [];
  if (speed.mobileScore === null) {
    fixes.push("PageSpeed data unavailable — run Google PageSpeed Insights manually");
    return fixes;
  }
  if (speed.mobileScore < 50) {
    fixes.push("Critical: mobile performance score is poor — prioritise Core Web Vitals fixes immediately");
  } else if (speed.mobileScore < 90) {
    fixes.push("Improve mobile performance: reduce unused JS/CSS, optimise images, enable caching");
  }
  if (speed.lcp.value !== null && speed.lcp.status !== "Pass") {
    const lcp = (speed.lcp.value / 1000).toFixed(1);
    fixes.push(
      `LCP is ${lcp}s (target ≤ 2.5s) — optimise hero images, reduce server response time (TTFB)`
    );
  }
  if (speed.cls.value !== null && speed.cls.status !== "Pass") {
    fixes.push(
      `CLS is ${speed.cls.value} (target ≤ 0.1) — add size attributes to images/iframes, avoid inserting content above the fold`
    );
  }
  if (speed.inp.value !== null && speed.inp.status !== "Pass") {
    fixes.push(
      `INP/TBT is ${speed.inp.value}ms (target ≤ 200ms) — reduce long JavaScript tasks, defer non-critical scripts`
    );
  }
  return fixes;
}

function getAeoFixes(aeo: AeoReport): string[] {
  const fixes: string[] = [];
  const missing = aeo.checks.filter((c) => c.status === "Missing");
  for (const m of missing) {
    switch (m.label) {
      case "FAQPage Schema":
        fixes.push("Add FAQPage JSON-LD with 5+ Q&As to qualify for AI-generated answer snippets");
        break;
      case "Organization Schema":
        fixes.push("Add Organization JSON-LD with name, URL, logo, and sameAs links for brand entity recognition");
        break;
      case "LocalBusiness Schema":
        fixes.push("Add LocalBusiness JSON-LD with address and phone for local AI/GEO visibility");
        break;
      case "Q&A Heading Structure":
        fixes.push(
          "Add a FAQ section with question-format headings (How…? What…? Why…?) to signal Q&A content to AI"
        );
        break;
    }
  }
  if (!aeo.napPresent) {
    fixes.push("Ensure your phone number appears visibly in the page content for NAP consistency");
  }
  return fixes;
}

function getDesignFixes(design: DesignReport): string[] {
  const fixes: string[] = [];
  if (!design.viewportMeta) {
    fixes.push(
      'Add <meta name="viewport" content="width=device-width, initial-scale=1"> to enable mobile rendering'
    );
  }
  return fixes;
}

// ─── Section renderers ────────────────────────────────────────────────────────

function SeoSection({ seo }: { seo: SeoReport }) {
  const fixes = getSeoFixes(seo);
  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>SEO Analysis</Text>
      <CheckRow
        status={seo.title.status}
        label="Title Tag"
        detail={
          seo.title.value
            ? `"${seo.title.value.slice(0, 55)}${seo.title.value.length > 55 ? "…" : ""}" (${seo.title.length} chars)`
            : "Not found"
        }
      />
      <CheckRow
        status={seo.metaDescription.status}
        label="Meta Description"
        detail={seo.metaDescription.value ? `${seo.metaDescription.length} characters` : "Not found"}
      />
      <CheckRow
        status={seo.h1Tags.status}
        label="H1 Tag"
        detail={
          seo.h1Tags.count === 0
            ? "None found"
            : `${seo.h1Tags.count} found — "${seo.h1Tags.values[0]?.slice(0, 50) ?? ""}"`
        }
      />
      <CheckRow
        status={seo.canonical.present ? "Present" : "Missing"}
        label="Canonical Tag"
        detail={seo.canonical.value ?? "Not set"}
      />
      <CheckRow
        status={seo.metaRobots.isNoIndex ? "Fail" : seo.metaRobots.present ? "Pass" : "Warning"}
        label="Meta Robots"
        detail={
          seo.metaRobots.isNoIndex
            ? "NOINDEX detected — page excluded from search engines!"
            : seo.metaRobots.value ?? "Not set (defaults to index,follow)"
        }
      />
      <CheckRow
        status={seo.schemaTypes.length > 0 ? "Present" : "Missing"}
        label="Schema Markup"
        detail={seo.schemaTypes.length > 0 ? seo.schemaTypes.join(", ") : "No JSON-LD schema found"}
      />
      <CheckRow
        status={
          seo.imageAltCoverage.percentage >= 80
            ? "Pass"
            : seo.imageAltCoverage.percentage >= 50
            ? "Warning"
            : "Fail"
        }
        label="Image Alt Text"
        detail={`${seo.imageAltCoverage.withAlt}/${seo.imageAltCoverage.total} images (${seo.imageAltCoverage.percentage}%)`}
      />
      <CheckRow
        status="Pass"
        label="Link Structure"
        detail={`${seo.links.internal} internal, ${seo.links.external} external`}
      />
      <Fixes items={fixes} />
    </View>
  );
}

function SpeedSection({ speed }: { speed: SpeedReport }) {
  const fixes = getSpeedFixes(speed);
  const mColor = scoreColor(speed.mobileScore);
  const dColor = scoreColor(speed.desktopScore);

  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>Page Speed (Google PageSpeed Insights)</Text>
      {speed.mobileScore === null ? (
        <Text style={s.rowDetail}>
          PageSpeed data unavailable — check GOOGLE_PAGESPEED_API_KEY configuration.
        </Text>
      ) : (
        <>
          <View style={s.scoreRow}>
            <View style={s.scoreBox}>
              <Text style={[s.scoreNum, { color: mColor }]}>{speed.mobileScore}</Text>
              <Text style={s.scoreLabel}>Mobile Score</Text>
            </View>
            <View style={s.scoreBoxLast}>
              <Text style={[s.scoreNum, { color: dColor }]}>{speed.desktopScore ?? "—"}</Text>
              <Text style={s.scoreLabel}>Desktop Score</Text>
            </View>
          </View>
          <View style={s.cwvRow}>
            {[
              {
                label: "LCP",
                value: speed.lcp.value ? `${(speed.lcp.value / 1000).toFixed(1)}s` : "—",
                status: speed.lcp.status,
                hint: "≤ 2.5s",
              },
              {
                label: "CLS",
                value: speed.cls.value !== null ? speed.cls.value.toFixed(3) : "—",
                status: speed.cls.status,
                hint: "≤ 0.1",
              },
              {
                label: "INP/TBT",
                value: speed.inp.value ? `${speed.inp.value}ms` : "—",
                status: speed.inp.status,
                hint: "≤ 200ms",
              },
              {
                label: "FCP",
                value: speed.fcp.value ? `${(speed.fcp.value / 1000).toFixed(1)}s` : "—",
                status: speed.fcp.status,
                hint: "≤ 1.8s",
              },
            ].map((m, i, arr) => (
              <View key={m.label} style={i === arr.length - 1 ? s.cwvBoxLast : s.cwvBox}>
                <Text style={s.cwvMetric}>{m.label} ({m.hint})</Text>
                <Text style={[s.cwvValue, { color: scoreColor(speed.mobileScore) }]}>
                  {m.value}
                </Text>
                <CwvBadge status={m.status} />
              </View>
            ))}
          </View>
        </>
      )}
      <Fixes items={fixes} />
    </View>
  );
}

function DesignSection({ design }: { design: DesignReport }) {
  const fixes = getDesignFixes(design);
  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>Design / UX (Automated Heuristics)</Text>
      <Text style={s.disclaimer}>
        Automated checks only — not a visual design review. Results are indicative.
      </Text>
      <View style={{ marginTop: 8 }}>
        <CheckRow
          status={design.viewportMeta ? "Present" : "Missing"}
          label="Viewport Meta Tag"
          detail="Signals mobile-responsive layout to browsers"
        />
        <CheckRow
          status={design.hasResponsiveClasses ? "Present" : "Not Verified"}
          label="Responsive CSS Signals"
          detail="Detected @media queries, flex, or grid in page source"
        />
        {design.notes.slice(1).map((note, i) => (
          <CheckRow key={i} status="Warning" label="Note" detail={note} />
        ))}
      </View>
      <Fixes items={fixes} />
    </View>
  );
}

function AeoSection({ aeo }: { aeo: AeoReport }) {
  const fixes = getAeoFixes(aeo);
  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>AEO / GEO / AI Readiness</Text>
      <Text style={s.disclaimer}>
        Confirmed signals only - no fabricated AI-visibility score. Status is &quot;Confirmed&quot; or
        &quot;Not Verified&quot;.
      </Text>
      <View style={{ marginTop: 8 }}>
        {aeo.checks.map((check) => (
          <CheckRow
            key={check.label}
            status={check.status}
            label={check.label}
            detail={check.detail}
          />
        ))}
      </View>
      <Fixes items={fixes} />
    </View>
  );
}

// ─── Main PDF Document ────────────────────────────────────────────────────────

export default function AuditPdfDocument({ data }: { data: AuditResult }) {
  const domain = (() => {
    try {
      return new URL(data.url).hostname;
    } catch {
      return data.url;
    }
  })();

  const generatedAt = new Date(data.timestamp).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <Document
      title={`SitesBrand Audit — ${domain}`}
      author="SitesBrand"
      subject="Free Website Audit Report"
    >
      <Page size="A4" style={s.page}>
        {/* ── Header ── */}
        <View style={s.header}>
          <Text style={s.brand}>SitesBrand</Text>
          <Text style={s.reportTitle}>Free Website Audit Report</Text>
          <Text style={s.headerUrl}>{data.url}</Text>
          <Text style={s.headerDate}>
            Generated: {generatedAt}
            {data.name ? `  |  Prepared for: ${data.name}` : ""}
          </Text>
        </View>

        {/* ── Body ── */}
        <View style={s.body}>
          <SeoSection seo={data.seo} />
          <SpeedSection speed={data.speed} />
          <DesignSection design={data.design} />
          <AeoSection aeo={data.aeo} />

          {/* ── CTA ── */}
          <View style={s.cta}>
            <Text style={s.ctaTitle}>Want an expert to fix these issues?</Text>
            <Text style={s.ctaSub}>
              Book a free 30-minute strategy call with the SitesBrand team.
            </Text>
            <Link src={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/hassamshabbir/30min"}>
              <View style={s.ctaBtn}>
                <Text style={s.ctaBtnText}>Book a Free Strategy Call →</Text>
              </View>
            </Link>
          </View>
        </View>

        {/* ── Page number ── */}
        <Text
          style={s.pageNum}
          render={({ pageNumber, totalPages }) =>
            `SitesBrand Audit Report  |  Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
