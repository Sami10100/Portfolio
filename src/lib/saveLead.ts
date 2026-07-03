import { supabase } from "@/lib/db";
import type { AuditResult } from "@/types/audit";

export async function saveLead(result: AuditResult): Promise<void> {
  if (!supabase) return; // Supabase URL not configured yet

  const { error } = await supabase.from("audit_leads").insert({
    url: result.url,
    name: result.name || null,
    email: result.email,
    phone: result.phone || null,
    mobile_score: result.speed.mobileScore,
    desktop_score: result.speed.desktopScore,
    seo_title_status: result.seo.title.status,
    has_schema: result.seo.schemaTypes.length > 0,
    aeo_faq: result.aeo.schemaTypes?.includes("FAQPage") ?? false,
    is_noindex: result.seo.metaRobots.isNoIndex,
    raw_result: result,
  });

  if (error) {
    console.error("[saveLead] Supabase insert failed:", error.message);
  }
}
