import type { Metadata } from "next";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { buildServiceDetailSchemas, ServiceDetailPage, serviceDetailPages } from "@/components/service-detail-page";
import "../service-detail.css";

const page = serviceDetailPages["ai-search-optimization"];

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: {
    canonical: `/services/${page.slug}`,
  },
  openGraph: {
    title: `${page.title} ${page.titleAccent} | SitesBrand`,
    description: page.metaDescription,
    url: `/services/${page.slug}`,
    type: "website",
    images: [
      {
        url: page.heroImage,
        width: 1188,
        height: 1188,
        alt: page.heroImageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AiSearchOptimizationRoute() {
  const schemas = buildServiceDetailSchemas(page);

  return (
    <>
      <ExactSitesBrandFragment part="nav" />
      <ServiceDetailPage page={page} />
      <ExactSitesBrandFragment part="footer" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
