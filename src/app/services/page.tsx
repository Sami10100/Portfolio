import type { Metadata } from "next";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { ServicesPage } from "@/components/services-page";
import { siteConfig } from "@/config/site";
import "./services.css";

export const metadata: Metadata = {
  title: { absolute: "SEO, AEO, GEO & Web Growth Services | SitesBrand" },
  description:
    "Explore SitesBrand's services: AI search optimization (AEO/GEO), SEO growth systems, automation, web development, UI/UX design, and sales pipeline support.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "SEO, AEO, GEO & Web Growth Services | SitesBrand",
    description:
      "Explore SitesBrand's services: AI search optimization (AEO/GEO), SEO growth systems, automation, web development, UI/UX design, and sales pipeline support.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/assets/services/1.webp",
        width: 1188,
        height: 1188,
        alt: "SitesBrand services growth system",
      },
    ],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SitesBrand Services",
  url: `${siteConfig.siteUrl}/services`,
  itemListElement: [
    "AI Search Optimization",
    "SEO & Content Strategy",
    "AI Automation",
    "Web Development",
    "UI/UX & Brand Design",
    "Sales & Lead Generation",
  ].map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
      },
      areaServed: "Worldwide",
    },
  })),
};

export default function ServicesRoute() {
  return (
    <>
      <ExactSitesBrandFragment part="nav" />
      <ServicesPage />
      <ExactSitesBrandFragment part="footer" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
