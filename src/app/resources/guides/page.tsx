import type { Metadata } from "next";
import { ResourceHubPage, type ResourceHubPageProps, resourceHubSchema } from "@/components/resource-hub-page";

const path = "/resources/guides";
const updated = "2026-06-25";

const page: ResourceHubPageProps = {
  eyebrow: "Growth Playbooks",
  title: "Guides and eBooks for AI-Ready Digital Growth",
  description:
    "Structured guides for planning SEO, AI search readiness, conversion-focused websites, CRM automation, and measurable growth systems.",
  updated,
  primaryTopic: "Step-by-step growth planning for SEO, AI visibility, and automation",
  summary: [
    "Key takeaway: guides turn scattered SEO tasks into a prioritized sequence your team can execute.",
    "Best starting point: audit indexation, metadata, schema, content depth, and conversion tracking before publishing more content.",
    "Measurement focus: every guide should connect to a service page, CTA, or lead-quality metric.",
  ],
  definitions: [
    [
      "Growth system",
      "A growth system connects positioning, SEO, design, development, analytics, and automation into one measurable buyer journey.",
    ],
    [
      "Content hub",
      "A content hub groups related resources around one topic and links them to the service page that can solve the buyer's problem.",
    ],
    [
      "Conversion path",
      "A conversion path is the route from search query to useful answer, service proof, CTA, and qualified contact.",
    ],
  ],
  steps: [
    "Use the SEO foundation guide to fix crawl, index, metadata, and security issues first.",
    "Use the AI search guide to add definitions, FAQs, schema, examples, and citation-worthy proof.",
    "Use the automation guide after form, CRM, and lead handoff friction becomes clear.",
  ],
  items: [
    {
      title: "30-day SEO foundation guide",
      description:
        "A practical sequence for fixing sitemap coverage, robots directives, canonical tags, page titles, descriptions, and content gaps.",
      href: "/resources/guides#seo-foundation",
      type: "Guide",
      updated,
      points: ["Technical SEO", "Indexation cleanup", "Metadata QA"],
    },
    {
      title: "AI Search Readiness playbook",
      description:
        "A page-by-page framework for turning service content into answer-ready, schema-supported, entity-clear pages.",
      href: "/resources/guides#ai-search-readiness",
      type: "Playbook",
      updated,
      points: ["AEO/GEO", "FAQ structure", "Author and proof signals"],
    },
    {
      title: "Conversion-focused website checklist",
      description:
        "A guide for aligning hero copy, proof, service sections, forms, chat, analytics events, and follow-up automation.",
      href: "/resources/guides#conversion-checklist",
      type: "Checklist",
      updated,
      points: ["CTA clarity", "Lead quality", "Analytics events"],
    },
  ],
  faqs: [
    [
      "Who should use these guides?",
      "Founders, marketers, and growth teams can use the guides to prioritize SEO, AI visibility, website, and automation work.",
    ],
    [
      "Are these guides a replacement for an audit?",
      "No. They help teams understand the work, but a site-specific audit is still needed to prioritize fixes accurately.",
    ],
    [
      "What should be fixed before publishing new guides?",
      "Indexation, sitemap coverage, metadata, schema, security headers, and core resource pages should be fixed before scaling content.",
    ],
    [
      "How do guides support service pages?",
      "Guides answer informational questions and internally link to service pages where buyers can request a specific solution.",
    ],
  ],
};

export const metadata: Metadata = {
  title: "Guides",
  description: page.description,
  alternates: { canonical: path },
  openGraph: {
    title: `${page.title} | SitesBrand`,
    description: page.description,
    url: path,
    type: "website",
  },
};

export default function GuidesResourcesPage() {
  const schemas = resourceHubSchema({ ...page, path });

  return (
    <>
      <ResourceHubPage {...page} />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
