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
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/assets/sitesbrand-wordmark-transparent.png`,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.social.linkedin, siteConfig.social.facebook],
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
    name: "Web + Automation System",
    serviceType: "Web Development and AI Automation",
    description:
      "Conversion-focused websites, workflow automation, CRM integrations, reporting systems, and scalable digital infrastructure.",
    url: `${siteConfig.siteUrl}/services/web-automation-system`,
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
