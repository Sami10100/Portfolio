import type { Metadata } from "next";
import { ExactSitesBrand } from "@/components/exact-sitesbrand";
import type { HomepageBlogPost } from "@/components/strategic-homepage";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "SEO, AI Search, Automation & Web Growth Agency",
  description:
    "SitesBrand helps businesses grow through technical SEO, AI search optimization, workflow automation, conversion-focused websites, and practical growth strategy.",
  alternates: {
    canonical: "/",
  },
};

const organizationId = `${siteConfig.siteUrl}/#organization`;
const websiteId = `${siteConfig.siteUrl}/#website`;
const webpageId = `${siteConfig.siteUrl}/#webpage`;
const faqId = `${siteConfig.siteUrl}/#faq`;

const organizationSchema = {
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.name,
  alternateName: "Sites Brand",
  legalName: "SitesBrand",
  url: siteConfig.siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": `${siteConfig.siteUrl}/#logo`,
    url: `${siteConfig.siteUrl}/assets/sitesbrand-icon-transparent.webp`,
    contentUrl: `${siteConfig.siteUrl}/assets/sitesbrand-icon-transparent.webp`,
    width: 118,
    height: 142,
    caption: "SitesBrand",
  },
  image: {
    "@id": `${siteConfig.siteUrl}/#logo`,
  },
  email: siteConfig.email,
  telephone: siteConfig.phone,
  foundingDate: "2023",
  slogan: "Where Psychology Meets Design and Technology",
  description:
    "SitesBrand is a digital growth agency specializing in search visibility, AI search optimization, workflow automation, conversion-focused websites, and practical growth strategy.",
  areaServed: "Worldwide",
  knowsAbout: [
    "AI Search Optimization",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Search Engine Optimization",
    "AI Automation",
    "Web Development",
    "Conversion Optimization",
    "Digital Growth Strategy",
  ],
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.facebook,
    "https://www.trustpilot.com/review/sitesbrand.com",
  ],
  founder: {
    "@id": `${siteConfig.siteUrl}/about#hassam-shabbir`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    availableLanguage: ["English", "Urdu"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SitesBrand Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.siteUrl}/services/seo-growth-engine#service`,
          name: "Search Growth and AI Visibility",
          url: `${siteConfig.siteUrl}/services/seo-growth-engine`,
          provider: { "@id": organizationId },
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.siteUrl}/services/data-automation#service`,
          name: "AI Automation and Integrations",
          url: `${siteConfig.siteUrl}/services/data-automation`,
          provider: { "@id": organizationId },
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.siteUrl}/services/web-automation-system#service`,
          name: "Conversion-Focused Web Design and Development",
          url: `${siteConfig.siteUrl}/services/web-automation-system`,
          provider: { "@id": organizationId },
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.siteUrl}/services#conversion-growth-strategy`,
          name: "Conversion and Growth Strategy",
          url: `${siteConfig.siteUrl}/services`,
          provider: { "@id": organizationId },
          areaServed: "Worldwide",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteConfig.siteUrl,
  name: siteConfig.name,
  alternateName: "Sites Brand",
  inLanguage: "en",
  publisher: {
    "@id": organizationId,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const webpageSchema = {
  "@type": "WebPage",
  "@id": webpageId,
  url: siteConfig.siteUrl,
  name: "SitesBrand | SEO, AI Search, Automation & Web Growth Agency",
  description:
    "SitesBrand helps businesses grow through technical SEO, AI search optimization, workflow automation, conversion-focused websites, and practical growth strategy.",
  isPartOf: {
    "@id": websiteId,
  },
  about: {
    "@id": organizationId,
  },
  publisher: {
    "@id": organizationId,
  },
  inLanguage: "en",
  dateModified: "2026-07-28",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#homepage-heading", ".sbh-hero-copy > p"],
  },
  hasPart: {
    "@id": faqId,
  },
};

const homepageFaqs = [
  [
    "What exactly does SitesBrand do?",
    "SitesBrand is a digital growth agency focused on four connected services: Search Growth and AI Visibility, AI Automation and Integrations, Conversion-Focused Web Design and Development, and Conversion and Growth Strategy. We diagnose the business problem first, then combine only the services needed to improve qualified visibility, customer journeys, operational efficiency, and measurement.",
  ],
  [
    "How is AI Search Optimization (AEO/GEO) different from traditional SEO?",
    "Traditional SEO improves crawlability, relevance, authority, and visibility in search results. AEO and GEO focus on making accurate brand information easier to retrieve and reference in direct answers and generative experiences. The foundations overlap heavily. Strong technical SEO, people-first content, entity clarity, structured data, and credible third-party signals support both.",
  ],
  [
    "Can AI Search Optimization replace SEO?",
    "No. Google states that the same core SEO practices remain relevant for AI Overviews and AI Mode, with no special markup required. AI search work should build on an indexable, technically sound website and useful content. We treat AEO and GEO as extensions of SEO, not replacements or shortcuts.",
  ],
  [
    "How soon will I see results?",
    "Timing depends on site condition, competition, authority, implementation speed, and the work selected. Automation and conversion fixes may show operational changes sooner, while meaningful SEO and AI visibility usually compound over several months. We define baselines, leading indicators, conversion events, and review points so progress is measurable without promising a fixed ranking date.",
  ],
  [
    "What kinds of business processes can you automate?",
    "We automate repeatable processes such as lead capture, qualification, routing, CRM updates, follow-up, onboarding, reporting, notifications, data synchronization, and AI-assisted responses. Each workflow includes ownership, error handling, safeguards, and human review where judgment or sensitive information is involved. We do not automate a broken process before mapping it.",
  ],
  [
    "Do you work with my industry or business size?",
    "Most likely, if the problem matches our expertise. We work with service businesses, SaaS, ecommerce, healthcare, finance, logistics, professional services, and agencies, from growing teams to established organizations. The strategy changes by market, risk, data access, sales cycle, and implementation capacity, so every engagement starts with discovery.",
  ],
  [
    "Can SitesBrand work with our existing team?",
    "Yes. SitesBrand can lead strategy and implementation, provide specialist support, or work alongside your developers, marketers, writers, designers, sales team, and leadership. We define ownership, dependencies, review points, and documentation early so the engagement strengthens your existing team instead of creating a parallel workflow.",
  ],
  [
    "What does working with you actually look like?",
    "Every engagement follows six practical stages: Discover, Diagnose, Strategize, Build and Implement, Automate where useful, then Verify and Improve. You receive a prioritized roadmap, clear ownership, documented work, regular check-ins, and measurement tied to meaningful actions such as qualified leads, calls, booked meetings, or completed workflows.",
  ],
  [
    "Do you guarantee SEO rankings, AI citations, or revenue?",
    "No credible agency can guarantee rankings, AI citations, conversions, or revenue because search systems, competition, demand, implementation, and customer behavior remain outside one provider's control. We commit to evidence-based strategy, professional execution, transparent measurement, documented assumptions, and clear reporting on what changed, what did not, and what should happen next.",
  ],
  [
    "How much do SitesBrand services cost?",
    "Pricing depends on the problem, scope, technical complexity, number of pages or workflows, implementation responsibility, and level of ongoing support. We start with a strategy call or audit, define the highest-impact work, then provide a scoped recommendation. You should not pay for a generic package containing services your business does not need.",
  ],
  [
    "How do we get started?",
    "Book a strategy call or request a free audit. Share your goals, current bottlenecks, website or workflow context, and any useful data. We will identify the likely problem, explain the most practical next step, and tell you when SitesBrand is not the right fit. There is no obligation to buy every service.",
  ],
] as const;

const faqSchema = {
  "@type": "FAQPage",
  "@id": faqId,
  url: `${siteConfig.siteUrl}/#faq`,
  name: "SitesBrand Frequently Asked Questions",
  isPartOf: {
    "@id": webpageId,
  },
  inLanguage: "en",
  mainEntity: homepageFaqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, webpageSchema, faqSchema],
  };
  const latestBlogPosts: HomepageBlogPost[] = blogPosts
    .map((post, sourceIndex) => ({ post, sourceIndex }))
    .sort(
      (first, second) =>
        Date.parse(second.post.published) - Date.parse(first.post.published) ||
        first.sourceIndex - second.sourceIndex,
    )
    .slice(0, 3)
    .map(({ post }) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      category: post.category,
      published: post.published,
      readTime: post.readTime,
      image: post.image,
      imageAlt: post.imageAlt,
    }));

  return (
    <>
      <ExactSitesBrand
        latestBlogPosts={latestBlogPosts}
        homepageFaqs={homepageFaqs}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
