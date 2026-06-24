import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
      <Header />
      <ServicesPage />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
