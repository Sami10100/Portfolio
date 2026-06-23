import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemporaryPage } from "@/components/temporary-page";
import { siteConfig } from "@/config/site";

type HoldingPageData = {
  eyebrow: string;
  title: string;
  description: string;
  index?: boolean;
  summary?: string;
  sections?: Array<{
    title: string;
    text: string;
    points?: string[];
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

const pages: Record<string, HoldingPageData> = {
  "services/ai-search-optimization": {
    eyebrow: "Flagship Service",
    title: "AI Search Optimization for answer engines",
    description:
      "SitesBrand helps ambitious brands become easier for Google AI Overviews, ChatGPT, Gemini, Perplexity, and traditional search engines to understand, trust, and recommend.",
    index: true,
    summary:
      "AI Search Optimization combines SEO, entity clarity, structured data, answer-first content, and authority signals so your brand can show up when buyers ask AI tools who to trust.",
    sections: [
      {
        title: "What we optimize",
        text: "We make your expertise easier to parse at page, passage, entity, and schema level.",
        points: ["Answer-first service copy", "FAQ and Service schema", "Entity and brand consistency", "Crawlable proof and trust signals"],
      },
      {
        title: "Why it matters",
        text: "Buyers are researching through search engines and AI assistants before they ever contact a business.",
        points: ["Stronger discoverability", "Clearer brand positioning", "Better topical authority", "More confident buyer journeys"],
      },
      {
        title: "How we deliver it",
        text: "We audit the current site, map buyer questions, restructure content, and improve the technical signals that help engines interpret your offer.",
        points: ["Search and AI visibility audit", "Question-led content architecture", "Structured data implementation", "Ongoing optimization roadmap"],
      },
    ],
    faqs: [
      {
        question: "What is AI Search Optimization?",
        answer:
          "AI Search Optimization helps a brand become clear and trustworthy enough to be understood by AI answer engines and search systems.",
      },
      {
        question: "Is this different from SEO?",
        answer:
          "Yes. SEO remains important, but AI Search Optimization adds entity clarity, answer formatting, schema, and citation-ready trust signals.",
      },
    ],
  },
  "services/seo-growth-engine": {
    eyebrow: "Organic Growth",
    title: "SEO systems built for qualified demand",
    description:
      "SitesBrand builds SEO systems that connect technical health, content strategy, authority signals, and conversion-focused landing pages into one growth engine.",
    index: true,
    summary:
      "Our SEO work is designed to attract buyers with intent, answer their questions clearly, and move them toward a practical next step instead of chasing traffic for its own sake.",
    sections: [
      {
        title: "Technical foundation",
        text: "We identify the crawl, indexation, metadata, internal linking, and performance issues that limit organic visibility.",
        points: ["Technical SEO audits", "Metadata and canonical checks", "Sitemap and robots QA", "Core Web Vitals recommendations"],
      },
      {
        title: "Content that ranks and converts",
        text: "We shape content around buyer questions, service intent, and the trust signals needed to move from search to action.",
        points: ["Keyword and intent mapping", "Service-page copy", "FAQ content", "Case-study proof integration"],
      },
      {
        title: "Authority and measurement",
        text: "We connect SEO activity to business outcomes with clearer reporting and conversion tracking.",
        points: ["Authority-building roadmap", "GA4/GTM event tracking", "Lead-source clarity", "Monthly optimization priorities"],
      },
    ],
    faqs: [
      {
        question: "Who is SEO best for?",
        answer:
          "SEO is best for brands that want compounding visibility from buyers already searching for their problem, service, or solution category.",
      },
      {
        question: "How long does SEO take?",
        answer:
          "Technical and conversion improvements can show quickly, while organic growth usually compounds over several months depending on competition and content depth.",
      },
    ],
  },
  "services/web-automation-system": {
    eyebrow: "Web + Automation",
    title: "Websites and automations that turn attention into action",
    description:
      "SitesBrand designs and develops fast, trustworthy web experiences connected to the automations, forms, CRM flows, and reporting systems that help teams scale.",
    index: true,
    summary:
      "We do not treat websites as static brochures. We build digital systems that clarify your offer, guide visitors, capture demand, and reduce manual work behind the scenes.",
    sections: [
      {
        title: "Conversion-focused websites",
        text: "We combine psychology-driven copy, premium UI, responsive development, and clear CTAs to create websites that feel credible and easy to act on.",
        points: ["Landing pages and websites", "UI/UX and brand design", "Responsive Next.js builds", "CTA and form optimization"],
      },
      {
        title: "Automation that supports growth",
        text: "We connect the website to workflows that qualify leads, route conversations, trigger follow-ups, and reduce repetitive admin work.",
        points: ["Lead capture flows", "CRM and tool integrations", "WhatsApp/email handoff", "AI-assisted workflows"],
      },
      {
        title: "Reporting and iteration",
        text: "We connect analytics and conversion events so teams can see what is working and where to improve next.",
        points: ["GA4/GTM event setup", "Conversion dashboards", "Funnel diagnostics", "Ongoing CRO recommendations"],
      },
    ],
    faqs: [
      {
        question: "What makes a website a growth system?",
        answer:
          "A growth system combines clear positioning, conversion-focused design, analytics, and automation so visitors can become qualified leads more easily.",
      },
      {
        question: "Can you connect the website to our tools?",
        answer:
          "Yes. We can plan and build integrations for CRM, forms, email, WhatsApp, reporting, and other tools depending on your stack.",
      },
    ],
  },
  "resources/blog": {
    eyebrow: "Insights",
    title: "The SitesBrand blog is taking shape",
    description: "Fresh thinking on SEO, AI search, automation, conversion, and digital growth is on the way.",
  },
  "resources/guides": {
    eyebrow: "Resources",
    title: "Practical growth guides are coming soon",
    description: "We are preparing concise playbooks and eBooks designed to help ambitious teams make smarter growth decisions.",
  },
  "resources/tools": {
    eyebrow: "Toolkit",
    title: "Useful tools are on the workbench",
    description: "Templates, checklists, and calculators are being prepared. In the meantime, we can build a tailored plan with you.",
  },
  "resources/news": {
    eyebrow: "Updates",
    title: "News and updates are coming soon",
    description: "This space will hold SitesBrand announcements, launches, partnerships, and useful industry updates.",
  },
  "company/careers": {
    eyebrow: "Careers",
    title: "Build ambitious work with us",
    description: "We are always interested in thoughtful strategists, designers, developers, and growth operators. Send us an introduction.",
  },
  "company/pricing": {
    eyebrow: "Pricing",
    title: "Every growth system starts with the right scope",
    description: "Our engagements are tailored to your goals, current systems, and growth stage. A short strategy call is the fastest route to a useful estimate.",
  },
  "social/x": {
    eyebrow: "Social",
    title: "Our X profile is not live yet",
    description: "Follow SitesBrand on LinkedIn for current insights and announcements, or contact us directly to start a conversation.",
  },
  "social/tiktok": {
    eyebrow: "Social",
    title: "Our TikTok profile is not live yet",
    description: "Follow SitesBrand on LinkedIn for current insights and announcements, or contact us directly to start a conversation.",
  },
};

type HoldingPageProps = {
  params: Promise<{ section: string; slug: string }>;
};

export async function generateMetadata({ params }: HoldingPageProps): Promise<Metadata> {
  const { section, slug } = await params;
  const page = pages[`${section}/${slug}`];
  if (!page) notFound();

  return {
    title: page.index ? page.title : page.eyebrow,
    description: page.description,
    alternates: {
      canonical: `/${section}/${slug}`,
    },
    openGraph: page.index
      ? {
          title: `${page.title} | SitesBrand`,
          description: page.description,
          url: `/${section}/${slug}`,
          type: "website",
        }
      : undefined,
    robots: {
      index: page.index ?? false,
      follow: true,
    },
  };
}

export default async function HoldingPage({ params }: HoldingPageProps) {
  const { section, slug } = await params;
  const page = pages[`${section}/${slug}`];
  if (!page) notFound();
  const serviceSchema = page.index
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.title,
        description: page.summary ?? page.description,
        url: `${siteConfig.siteUrl}/${section}/${slug}`,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.siteUrl,
          email: siteConfig.email,
          telephone: siteConfig.phone,
        },
        areaServed: "Worldwide",
      }
    : null;

  return (
    <>
      <TemporaryPage {...page} />
      {serviceSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
    </>
  );
}
