import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import "./free-audit.css";

export const metadata: Metadata = {
  title: { absolute: "Free Website Audit | SEO, Speed & AI Readiness Check" },
  description:
    "Get a free, instant website audit covering SEO, Core Web Vitals, mobile UX, and AI/AEO readiness. Real data, no fake scores — full PDF report to your inbox.",
  openGraph: {
    title: "Free Website Audit | SEO, Speed & AI Readiness Check",
    description: "Get a free, instant website audit covering SEO, Core Web Vitals, mobile UX, and AI/AEO readiness. Real data, no fake scores — full PDF report to your inbox.",
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
