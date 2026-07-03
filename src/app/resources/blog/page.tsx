import type { Metadata } from "next";
import { ResourceHubPage, type ResourceHubPageProps, resourceHubSchema } from "@/components/resource-hub-page";

const path = "/resources/blog";
const updated = "2026-07-03";

const page: ResourceHubPageProps = {
  eyebrow: "SEO and AI Search Insights",
  title: "SitesBrand Blog for SEO, AEO, GEO, and Digital Growth",
  description:
    "Practical articles on AI search optimization, answer engine optimization, SEO strategy, automation, and conversion-focused web growth.",
  updated,
  primaryTopic: "AI-search-ready SEO and digital growth strategy",
  summary: [
    "Key takeaway: AI visibility depends on crawlable pages, clear entities, helpful answers, and proof.",
    "Best starting point: service pages need definitions, FAQs, examples, structured data, and credible author signals.",
    "Measurement focus: track organic leads, branded searches, resource engagement, and qualified audit requests.",
  ],
  definitions: [
    [
      "AEO",
      "Answer Engine Optimization is the practice of formatting content so answer engines can extract a clear, trustworthy response.",
    ],
    [
      "GEO",
      "Generative Engine Optimization improves how well AI systems understand, summarize, and recommend a brand or service.",
    ],
    [
      "Entity clarity",
      "Entity clarity means your brand, people, services, locations, proof, and social profiles are consistent across crawlable pages and schema.",
    ],
  ],
  steps: [
    "Start with the AI search articles if your service pages are not appearing in AI answers.",
    "Use the SEO strategy articles when pages have thin copy, weak titles, or unclear internal links.",
    "Move to automation and conversion topics when traffic exists but leads are not qualified.",
  ],
  items: [
    {
      title: "Best Search Engine Optimization Tools for 2026",
      description:
        "A practical guide to choosing SEO tools for keyword research, technical audits, reporting, content optimization, and AI search visibility.",
      href: "/resources/blog/best-search-engine-optimization-tools-for-2026",
      type: "SEO tools guide",
      updated,
      points: ["SEO software stack", "Technical and content tools", "AI search visibility"],
    },
    {
      title: "AEO vs GEO: what growth teams need to know",
      description:
        "A plain-English breakdown of answer engines, generative engines, and the on-page signals that help content become citation-ready.",
      href: "/resources/blog#aeo-vs-geo",
      type: "Explainer",
      updated,
      points: ["AI search visibility", "Definitions and examples", "Service-page improvements"],
    },
    {
      title: "How to make service pages easier for AI to understand",
      description:
        "A checklist for headings, summaries, FAQs, schema, author signals, examples, and proof blocks on commercial pages.",
      href: "/resources/blog#ai-service-pages",
      type: "Checklist",
      updated,
      points: ["Service SEO", "FAQ and schema structure", "Entity consistency"],
    },
    {
      title: "Why technical SEO still matters in AI search",
      description:
        "A practical look at crawlability, indexation, headers, sitemaps, feeds, page speed, and clean canonical signals.",
      href: "/resources/blog#technical-seo",
      type: "Technical guide",
      updated,
      points: ["Indexation health", "Security headers", "Resource discovery"],
    },
  ],
  faqs: [
    [
      "What topics does the SitesBrand blog cover?",
      "The blog covers SEO, AEO, GEO, AI search optimization, automation, conversion design, and web growth systems.",
    ],
    [
      "Why does the blog matter for AI search visibility?",
      "A blog creates crawlable support content that explains services, answers buyer questions, and internally links to money pages.",
    ],
    [
      "How often should SEO content be updated?",
      "Commercial and educational SEO content should be reviewed at least quarterly or whenever search behavior, tools, or service details change.",
    ],
    [
      "Does SitesBrand publish case-study content?",
      "Case-study content is part of the resource roadmap because specific examples and measurable outcomes strengthen trust and AI citation potential.",
    ],
  ],
};

export const metadata: Metadata = {
  title: "Blog",
  description: page.description,
  alternates: { canonical: path },
  openGraph: {
    title: `${page.title} | SitesBrand`,
    description: page.description,
    url: path,
    type: "website",
  },
};

export default function BlogResourcesPage() {
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
