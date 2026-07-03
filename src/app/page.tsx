import type { Metadata } from "next";
import { ExactSitesBrand } from "@/components/exact-sitesbrand";
import { faqs, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.siteUrl}/#organization`,
  name: siteConfig.name,
  legalName: "SitesBrand",
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/assets/sitesbrand-wordmark-transparent.png`,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  foundingDate: "2023",
  slogan: "Where Psychology Meets Design and Technology",
  description:
    "SitesBrand is a digital growth agency that builds SEO, AI search optimization, AI automation, web development, conversion design, and sales systems for ambitious brands.",
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
  sameAs: [siteConfig.social.linkedin, siteConfig.social.facebook],
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
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  url: siteConfig.siteUrl,
  name: siteConfig.name,
  publisher: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.siteUrl}/about#hassam-shabbir`,
  name: "Hassam Shabbir",
  jobTitle: "Founder & CEO",
  url: `${siteConfig.siteUrl}/about`,
  sameAs: ["https://www.linkedin.com/in/hassam-shabbir-sxo/"],
  worksFor: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
  knowsAbout: [
    "AI Search Optimization",
    "Search Engine Optimization",
    "Digital Growth Strategy",
    "AI Automation",
    "Conversion Optimization",
  ],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/#service-ai-search`,
    name: "AI Search Optimization",
    serviceType: "AI Search Optimization (AEO and GEO)",
    description:
      "Content, schema, technical SEO, and entity optimization that helps brands become discoverable across Google AI Overviews, ChatGPT, Gemini, and Perplexity.",
    url: `${siteConfig.siteUrl}/services/ai-search-optimization`,
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: "Worldwide",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/#service-seo-growth`,
    name: "SEO Growth Engine",
    serviceType: "SEO Strategy and Organic Growth",
    description:
      "Technical SEO, content strategy, authority building, and conversion-focused optimization designed to attract qualified organic demand.",
    url: `${siteConfig.siteUrl}/services/seo-growth-engine`,
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: "Worldwide",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/#service-web-automation`,
    name: "Web Development",
    serviceType: "Conversion-Focused Web Development",
    description:
      "Fast, modern, conversion-focused websites, landing pages, technical SEO foundations, analytics, and scalable digital infrastructure.",
    url: `${siteConfig.siteUrl}/services/web-automation-system`,
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: "Worldwide",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/#service-data-automation`,
    name: "Data & Automation",
    serviceType: "Workflow Automation and Reporting",
    description:
      "CRM workflows, lead routing, AI-assisted handoff, reporting dashboards, tool integrations, and operational automation.",
    url: `${siteConfig.siteUrl}/services/data-automation`,
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: "Worldwide",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/#service-ui-ux-design`,
    name: "UI/UX & Design",
    serviceType: "UI/UX and Conversion Design",
    description:
      "Premium UI, UX audits, wireframes, design systems, brand-led interfaces, and conversion-focused digital experiences.",
    url: `${siteConfig.siteUrl}/services/ui-ux-design`,
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: "Worldwide",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/#service-sales-business-development`,
    name: "Sales & Business Development",
    serviceType: "Lead Generation and Pipeline Development",
    description:
      "Lead generation, outbound strategy, sales qualification, CRM pipeline support, follow-up systems, and reporting.",
    url: `${siteConfig.siteUrl}/services/sales-business-development`,
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: "Worldwide",
  },
];

export default function Home() {
  const schemas = [organizationSchema, websiteSchema, faqSchema, founderSchema, ...serviceSchemas];

  return (
    <>
      <ExactSitesBrand />
      {schemas.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
