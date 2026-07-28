import type { Metadata } from "next";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { ServicesPage } from "@/components/services-page";
import { siteConfig } from "@/config/site";
import "./services.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SitesBrand services for AI Search Optimization, GEO, AEO, SEO, automation, web development, UI/UX design, and lead generation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "SitesBrand Services | AI Search, SEO, Automation & Web Growth",
    description:
      "Digital growth systems built for search visibility, AI discovery, conversion, automation, and scalable business outcomes.",
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

const services = [
  ["AI Search Optimization", "/services/ai-search-optimization"],
  ["SEO and Content Strategy", "/services/seo-growth-engine"],
  ["AI Automation", "/services/data-automation"],
  ["Web Development", "/services/web-automation-system"],
  ["UI/UX and Brand Design", "/services/ui-ux-design"],
  ["Sales and Lead Generation", "/services/sales-business-development"],
] as const;

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteConfig.siteUrl}/services#webpage`,
      name: "SitesBrand Services",
      url: `${siteConfig.siteUrl}/services`,
      description: metadata.description,
      isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
      about: { "@id": `${siteConfig.siteUrl}/#organization` },
      breadcrumb: { "@id": `${siteConfig.siteUrl}/services#breadcrumb` },
      mainEntity: { "@id": `${siteConfig.siteUrl}/services#service-list` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.siteUrl}/services#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.siteUrl}/services`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.siteUrl}/services#service-list`,
      name: "SitesBrand Services",
      url: `${siteConfig.siteUrl}/services`,
      itemListElement: services.map(([name, href], index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          "@id": `${siteConfig.siteUrl}${href}#service`,
          name,
          url: `${siteConfig.siteUrl}${href}`,
          provider: {
            "@id": `${siteConfig.siteUrl}/#organization`,
          },
          areaServed: "Worldwide",
        },
      })),
    },
  ],
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
