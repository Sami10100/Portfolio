import type { AuditResult } from "@/types/audit";
import { Resend } from "resend";

const FROM = process.env.RESEND_FROM ?? "SitesBrand Reports <reports@sitesbrand.com>";
const CALENDLY = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/hassamshabbir/30min";

function statusLabel(status: string): string {
  const icons: Record<string, string> = {
    Pass: "✅", Present: "✅",
    Fail: "❌", Missing: "❌",
    Warning: "⚠️", "Not Verified": "—",
  };
  return `${icons[status] ?? "—"} ${status}`;
}

function buildHtml(result: AuditResult): string {
  const domain = (() => { try { return new URL(result.url).hostname; } catch { return result.url; } })();
  const date = new Date(result.timestamp).toLocaleDateString("en-US", { dateStyle: "long" });

  const seoRows = [
    ["Title Tag", result.seo.title.status, result.seo.title.value ? `${result.seo.title.length} chars` : "Missing"],
    ["Meta Description", result.seo.metaDescription.status, result.seo.metaDescription.value ? `${result.seo.metaDescription.length} chars` : "Missing"],
    ["H1 Tag", result.seo.h1Tags.status, `${result.seo.h1Tags.count} found`],
    ["Canonical Tag", result.seo.canonical.present ? "Present" : "Missing", ""],
    ["Meta Robots", result.seo.metaRobots.isNoIndex ? "Fail" : (result.seo.metaRobots.present ? "Pass" : "Warning"), result.seo.metaRobots.isNoIndex ? "⚠ NOINDEX!" : (result.seo.metaRobots.value ?? "defaults to index")],
    ["Schema Markup", result.seo.schemaTypes.length > 0 ? "Present" : "Missing", result.seo.schemaTypes.join(", ") || "None"],
    ["Image Alt Text", result.seo.imageAltCoverage.percentage >= 80 ? "Pass" : "Fail", `${result.seo.imageAltCoverage.percentage}% coverage`],
  ]
    .map(([label, status, detail]) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #dfe3ee;font-size:13px;color:#1A1B41;">${label}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #dfe3ee;font-size:13px;">${statusLabel(status)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #dfe3ee;font-size:13px;color:#5b5d77;">${detail}</td>
      </tr>`)
    .join("");

  const speedRow = result.speed.mobileScore !== null
    ? `<p style="color:#5b5d77;font-size:14px;">📱 Mobile: <strong>${result.speed.mobileScore}</strong> &nbsp;|&nbsp; 🖥 Desktop: <strong>${result.speed.desktopScore}</strong> &nbsp;|&nbsp; LCP: <strong>${result.speed.lcp.value ? (result.speed.lcp.value / 1000).toFixed(1) + "s" : "—"}</strong> &nbsp;|&nbsp; CLS: <strong>${result.speed.cls.value ?? "—"}</strong></p>`
    : `<p style="color:#9aa0c4;font-size:14px;font-style:italic;">PageSpeed data unavailable — add a valid Google PageSpeed API key to enable this.</p>`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F4F5F6;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F5F6;">
<tr><td align="center" style="padding:32px 16px;">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#1A1B41;padding:32px;border-radius:12px 12px 0 0;text-align:center;">
    <div style="color:#00E5FF;font-size:20px;font-weight:bold;margin-bottom:6px;">SitesBrand</div>
    <div style="color:#ffffff;font-size:22px;font-weight:bold;margin-bottom:4px;">Your Free Audit Report is Ready</div>
    <div style="color:#9af4ff;font-size:13px;">${domain}</div>
    <div style="color:#b6badd;font-size:12px;margin-top:4px;">Generated ${date}</div>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#ffffff;padding:32px;">
    <p style="color:#1A1B41;font-size:16px;margin:0 0 16px;">Hi ${result.name || "there"},</p>
    <p style="color:#5b5d77;font-size:14px;margin:0 0 24px;">Your free website audit for <strong>${result.url}</strong> is attached as a PDF. Here's a quick summary:</p>

    <!-- SEO -->
    <h3 style="color:#1A1B41;font-size:15px;margin:0 0 10px;border-bottom:2px solid #00E5FF;padding-bottom:6px;">SEO Analysis</h3>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <thead><tr>
        <th style="padding:8px 12px;background:#F4F5F6;text-align:left;font-size:12px;color:#5b5d77;">Check</th>
        <th style="padding:8px 12px;background:#F4F5F6;text-align:left;font-size:12px;color:#5b5d77;">Status</th>
        <th style="padding:8px 12px;background:#F4F5F6;text-align:left;font-size:12px;color:#5b5d77;">Detail</th>
      </tr></thead>
      <tbody>${seoRows}</tbody>
    </table>

    <!-- Speed -->
    <h3 style="color:#1A1B41;font-size:15px;margin:0 0 10px;border-bottom:2px solid #00E5FF;padding-bottom:6px;">⚡ Page Speed</h3>
    ${speedRow}

    <!-- AEO -->
    <h3 style="color:#1A1B41;font-size:15px;margin:24px 0 10px;border-bottom:2px solid #00E5FF;padding-bottom:6px;">🤖 AEO / AI Readiness</h3>
    ${result.aeo.checks.map(c => `<p style="margin:4px 0;font-size:13px;color:#5b5d77;">${statusLabel(c.status)} <strong>${c.label}</strong>${c.detail ? ` — ${c.detail}` : ""}</p>`).join("")}

    <!-- CTA -->
    <div style="background:#1A1B41;border-radius:10px;padding:28px;text-align:center;margin:32px 0 0;">
      <div style="color:#ffffff;font-size:17px;font-weight:bold;margin-bottom:6px;">Want an expert to fix these issues?</div>
      <div style="color:#b6badd;font-size:13px;margin-bottom:18px;">Book a free 30-minute strategy call with the SitesBrand team.</div>
      <a href="${CALENDLY}" style="background:#00E5FF;color:#0a0b1e;text-decoration:none;padding:13px 28px;border-radius:8px;font-weight:bold;font-size:15px;display:inline-block;">Book a Free Strategy Call →</a>
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:16px;text-align:center;border-radius:0 0 12px 12px;background:#F4F5F6;">
    <p style="color:#9aa0c4;font-size:11px;margin:0;">SitesBrand · Real data only · No fabricated scores<br>
    The full report is attached as a PDF.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

export async function sendAuditEmail(result: AuditResult, pdfBuffer: Buffer): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Email send failed: RESEND_API_KEY is not configured");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const domain = (() => { try { return new URL(result.url).hostname.replace(/^www\./, ""); } catch { return "audit"; } })();
  const filename = `sitesbrand-audit-${domain}-${new Date().toISOString().split("T")[0]}.pdf`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: result.email,
    subject: `Your Free Website Audit — ${domain}`,
    html: buildHtml(result),
    attachments: [
      {
        filename,
        content: pdfBuffer,
      },
    ],
  });

  if (error) {
    console.error("[sendAuditEmail] Resend error:", error);
    throw new Error(`Email send failed: ${JSON.stringify(error)}`);
  }
}
