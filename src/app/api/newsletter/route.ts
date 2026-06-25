import { NextResponse, type NextRequest } from "next/server";
import { normalizeNewsletterEmail, validateNewsletterEmail } from "@/lib/newsletter";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;
const WEBHOOK_ERROR_MESSAGE = "We could not reach the signup list. Please try again in a moment.";

type NewsletterLead = {
  email: string;
  intent: string;
  leadId: string;
  page: string;
  referrer: string;
  source: string;
  submittedAt: string;
  userAgent: string;
};

class NewsletterWebhookError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly body: string,
  ) {
    super(message);
  }
}

function createLeadId() {
  return typeof crypto.randomUUID === "function" ? `newsletter-${crypto.randomUUID()}` : `newsletter-${Date.now()}`;
}

function isRateLimited(key: string) {
  const now = Date.now();

  for (const [entryKey, timestamp] of recentSubmissions) {
    if (now - timestamp > RATE_LIMIT_MS) recentSubmissions.delete(entryKey);
  }

  const lastSubmission = recentSubmissions.get(key);
  if (lastSubmission && now - lastSubmission < RATE_LIMIT_MS) return true;

  recentSubmissions.set(key, now);
  return false;
}

async function captureLead(lead: NewsletterLead) {
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL?.trim();

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      body: JSON.stringify(lead),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) {
      const body = (await response.text().catch(() => "")).slice(0, 500);
      throw new NewsletterWebhookError(`Newsletter webhook failed with ${response.status}`, response.status, body);
    }
    return "webhook";
  }

  console.info("SITESBRAND_NEWSLETTER_LEAD", JSON.stringify(lead));
  return "function_log";
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Send a valid signup request." }, { status: 400 });
  }

  if (String(payload.company || "").trim()) {
    return NextResponse.json({ message: "Thanks. You are on the list for the next growth note." });
  }

  const email = normalizeNewsletterEmail(payload.email);
  const validationError = validateNewsletterEmail(email);
  if (validationError) return NextResponse.json({ message: validationError }, { status: 400 });

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`${forwardedFor}:${email}`)) {
    return NextResponse.json({ message: "You are already on our follow-up list. Thanks." }, { status: 429 });
  }

  const lead: NewsletterLead = {
    email,
    intent: String(payload.intent || "growth_insights").slice(0, 80),
    leadId: createLeadId(),
    page: String(payload.page || "/").slice(0, 200),
    referrer: request.headers.get("referer") || "",
    source: String(payload.source || "footer_signup").slice(0, 80),
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") || "",
  };

  try {
    const storage = await captureLead(lead);
    return NextResponse.json({
      leadId: lead.leadId,
      message: "Thanks. You are on the list for the next growth note.",
      storage,
    });
  } catch (error) {
    if (error instanceof NewsletterWebhookError) {
      console.error("SITESBRAND_NEWSLETTER_WEBHOOK_FAILED", {
        body: error.body,
        leadId: lead.leadId,
        status: error.status,
      });
      return NextResponse.json({ message: WEBHOOK_ERROR_MESSAGE }, { status: 502 });
    }

    console.error("SITESBRAND_NEWSLETTER_CAPTURE_FAILED", {
      error,
      leadId: lead.leadId,
    });
    return NextResponse.json({ message: "We could not save that email. Try again in a moment." }, { status: 502 });
  }
}
