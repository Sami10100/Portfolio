import type { Metadata } from "next";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";
import { SxoMasterClient } from "./sxo-master-client";
import "./sxo-master.css";

const path = "/resources/tools/sxo-master";
const title = "SXO Master Plugin";
const description =
  "SXO Master is a WordPress plugin for SEO, AEO, GEO, AIO, UX, and conversion readiness audits inside the WordPress dashboard.";
const screenshot = "https://www.sitesbrand.xyz/screenshots/dashboard.png";

const faqs = [
  [
    "What is SXO Master?",
    "SXO Master is a WordPress plugin and audit tool that analyzes and improves your website for Search Experience Optimization, covering SEO, UX, CRO, AI visibility, GEO/AIO readiness, content structure, technical signals, and page experience.",
  ],
  [
    "Is SXO Master only for SEO?",
    "No. SXO Master goes beyond traditional SEO by auditing SEO content, AI search optimization, GEO readiness, AEO answer patterns, UX, conversion, technical signals, schema, page speed, clarity, and trust signals.",
  ],
  [
    "Does SXO Master work with WordPress?",
    "Yes. SXO Master is built natively for WordPress and runs audits inside the WordPress admin dashboard.",
  ],
  [
    "Can agencies use SXO Master for client audits?",
    "Yes. Agencies can use SXO Master to deliver faster client audits with scored findings and prioritized recommendations.",
  ],
  [
    "Does SXO Master help with AI search visibility?",
    "Yes. The AIO and GEO modules check answer patterns, clarity, extractability, and citation-readiness.",
  ],
];

export const metadata: Metadata = {
  title: `${title} — WordPress SEO, AEO, GEO, AIO & SXO Optimization`,
  description,
  alternates: { canonical: path },
  keywords: [
    "SXO Master",
    "SXO plugin",
    "WordPress SEO plugin",
    "AI search optimization",
    "AEO",
    "GEO",
    "AIO",
    "search experience optimization",
  ],
  openGraph: {
    title: "SXO Master — Optimize for Search, AI, and Real User Experience",
    description,
    url: path,
    type: "website",
    images: [{ url: screenshot, width: 1600, height: 900, alt: "SXO Master plugin dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SXO Master — WordPress SXO, SEO & AI Search Optimization Plugin",
    description,
    images: [screenshot],
  },
};

function schema() {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        name: "SXO Master",
        softwareVersion: "2.0.5",
        operatingSystem: "WordPress",
        applicationCategory: "SEO Plugin",
        applicationSubCategory: "Search Experience Optimization",
        description,
        image: screenshot,
        screenshot,
        url,
        author: { "@id": `${siteConfig.siteUrl}/#organization` },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          url: `${siteConfig.siteUrl}/contact`,
          description: "Early access and licensing. Contact SitesBrand for pricing.",
        },
        featureList: [
          "SEO Content Analysis",
          "AI Search Optimization",
          "GEO Readiness Scoring",
          "UX and Conversion Review",
          "Technical SEO Signals",
          "Schema Suggestions",
          "Core Web Vitals Checks",
          "Content Clarity Scoring",
          "Trust Signal Review",
          "WordPress-native Recommendations",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: metadata.title,
        description,
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        about: { "@id": `${url}#software` },
        primaryImageOfPage: screenshot,
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#hero-heading", "#hero-sub", "#what-is-sxo"] },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${siteConfig.siteUrl}/resources/tools` },
          { "@type": "ListItem", position: 3, name: "SXO Master Plugin", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}

export default function SxoMasterPage() {
  return (
    <>
      <ExactSitesBrandFragment part="nav" />
      <SxoMasterClient />
      <ExactSitesBrandFragment part="footer" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
