import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";
import "./free-audit.css";

export const metadata: Metadata = {
  title: "Free Website Audit + GEO Checklist | SitesBrand",
  description:
    "Get an instant free website audit and the GEO Accountability Checklist for vetting AI-search, SEO, AEO, and GEO agency claims with measurable proof.",
  alternates: { canonical: "/free-audit" },
  openGraph: {
    title: "Free Website Audit + GEO Accountability Checklist | SitesBrand",
    description: "Instant SEO, speed, AI-readiness audit plus a buyer checklist for vetting GEO and AI-search agency claims.",
    type: "website",
  },
};

export default function FreeAuditPage() {
  const url = `${siteConfig.siteUrl}/free-audit`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: "Free Website Audit and GEO Accountability Checklist",
      description: metadata.description,
      url,
      isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      mainEntity: { "@id": `${url}#geo-accountability-checklist` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Free Website Audit",
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "DigitalDocument",
      "@id": `${url}#geo-accountability-checklist`,
      name: "The GEO Accountability Checklist",
      description:
        "A buyer's guide for checking whether an agency's AI search, GEO, and answer-engine claims are measurable, verifiable, and tied to business outcomes.",
      author: { "@type": "Person", name: "Hassam Shabbir" },
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      inLanguage: "en",
      numberOfPages: 22,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is GEO accountability?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GEO accountability means an agency can connect AI-search recommendations to verifiable work such as crawlable content, entity clarity, structured answers, trustworthy sources, internal links, and measurable lead outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "What should not count as proof in a GEO report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generic lines like 'we optimized for AI' or 'your visibility improved' do not prove anything unless they are tied to URLs, queries, source mentions, crawlable page changes, and business metrics.",
          },
        },
        {
          "@type": "Question",
          name: "Which metric matters for this checklist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The useful metric is email captures and qualified replies from outreach, not vanity views or social shares.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <ExactSitesBrandFragment part="nav" />
      <AuditForm />
      <ExactSitesBrandFragment part="footer" />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
    </>
  );
}
