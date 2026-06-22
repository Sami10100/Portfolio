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

export default function Home() {
  return (
    <>
      <ExactSitesBrand />
      {[organizationSchema, websiteSchema, faqSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
