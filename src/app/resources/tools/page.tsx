import type { Metadata } from "next";
import { ResourceHubPage, type ResourceHubPageProps, resourceHubSchema } from "@/components/resource-hub-page";

const path = "/resources/tools";
const updated = "2026-07-04";

const page: ResourceHubPageProps = {
  eyebrow: "Templates and Checklists",
  title: "Tools and Templates for SEO, AI Search, and Growth Operations",
  description:
    "Useful checklists, templates, and calculators for auditing SEO health, AI search readiness, content depth, conversion paths, and automation opportunities.",
  updated,
  primaryTopic: "Practical SEO, AEO/GEO, CRO, and automation tools",
  summary: [
    "Key takeaway: tools make audits repeatable, measurable, and easier to prioritize.",
    "Best starting point: use SXO Master to score pages for SEO, AEO, GEO, AIO, UX, and conversion readiness.",
    "Measurement focus: track fixes by page type, impact, effort, confidence, and owner.",
  ],
  definitions: [
    [
      "SEO audit template",
      "A structured worksheet that records titles, descriptions, H1s, canonical tags, schema, internal links, indexability, and priority fixes.",
    ],
    [
      "AI readiness score",
      "A practical score that checks whether a page has definitions, answer blocks, FAQs, schema, proof, dates, and clean crawlable HTML.",
    ],
    [
      "Automation map",
      "An automation map documents what happens after a lead submits a form, including routing, CRM updates, follow-up, and reporting.",
    ],
  ],
  steps: [
    "Run the SEO audit template on the homepage, service pages, resource hubs, and case-study pages.",
    "Use the AI readiness checklist on any page that should be cited or summarized by answer engines.",
    "Use the automation map after the website has clear lead forms and tracking events.",
  ],
  items: [
    {
      title: "SXO Master",
      description:
        "A WordPress plugin for SEO, AEO, GEO, AIO, user experience, and conversion readiness audits in one dashboard.",
      href: "/resources/tools/sxo-master",
      type: "WordPress Plugin",
      updated,
      points: ["SEO + AI visibility", "SXO scoring", "WordPress audit dashboard"],
    },
    {
      title: "SEO issue priority matrix",
      description:
        "A scoring table for ranking fixes by impact, effort, confidence, and implementation owner.",
      href: "/resources/tools#seo-priority-matrix",
      type: "Template",
      updated,
      points: ["Impact scoring", "Effort planning", "Developer handoff"],
    },
    {
      title: "AI search readiness checklist",
      description:
        "A page-level checklist for definitions, summaries, Q&A blocks, schema, source citations, freshness, and expert signals.",
      href: "/resources/tools#ai-readiness-checklist",
      type: "Checklist",
      updated,
      points: ["AEO/GEO QA", "Schema coverage", "Freshness signals"],
    },
    {
      title: "Lead automation mapping sheet",
      description:
        "A simple map for documenting lead source, form fields, CRM routing, notifications, follow-up timing, and reporting.",
      href: "/resources/tools#lead-automation-map",
      type: "Worksheet",
      updated,
      points: ["CRM handoff", "Lead quality", "Reporting clarity"],
    },
  ],
  faqs: [
    [
      "What tools should a site audit include?",
      "A useful audit includes indexability checks, metadata review, schema coverage, content depth scoring, internal-link checks, and conversion-path notes.",
    ],
    [
      "How do tools help SEO execution?",
      "Tools turn repeated issues into a tracked workflow so the team can fix high-impact pages before lower-value polish.",
    ],
    [
      "Can AI search readiness be measured?",
      "It can be scored directionally by checking answer formatting, entity clarity, citations, schema, dates, examples, and trust proof.",
    ],
    [
      "When should automation be mapped?",
      "Map automation after the form and CTA strategy is clear, because routing weak leads faster does not improve growth.",
    ],
  ],
};

export const metadata: Metadata = {
  title: "Tools",
  description: page.description,
  alternates: { canonical: path },
  openGraph: {
    title: `${page.title} | SitesBrand`,
    description: page.description,
    url: path,
    type: "website",
  },
};

export default function ToolsResourcesPage() {
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
