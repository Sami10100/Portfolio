import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import "./free-audit.css";

export const metadata: Metadata = {
  title: "Free Website Audit | SitesBrand — SEO, Speed & AI Readiness",
  description:
    "Get an instant free website audit covering SEO, Core Web Vitals, mobile design, and AI/AEO readiness. Real data, no fake scores. PDF delivered to your inbox.",
  openGraph: {
    title: "Free Website Audit | SitesBrand",
    description: "Instant SEO, Speed & AI readiness audit. PDF report delivered in under 30 seconds.",
    type: "website",
  },
};

export default function FreeAuditPage() {
  return (
    <>
      <ExactSitesBrandFragment part="nav" />
      <AuditForm />
      <ExactSitesBrandFragment part="footer" />
    </>
  );
}
