import type { Metadata } from "next";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";
import { GuidesClient } from "./guides-client";
import { books, ebook, faqs, updated } from "./guides-data";

const path = "/resources/guides";

export const metadata: Metadata = {
  title: "eBook",
  description:
    "Download the SitesBrand eBook for SEO, AEO, GEO, AIO, SXO, AI search optimization, and conversion-focused growth.",
  alternates: { canonical: path },
  openGraph: {
    title: "SitesBrand eBook | Modern Search Optimization",
    description:
      "The SitesBrand eBook for modern search optimization, AI visibility, SEO, AEO, GEO, AIO, SXO, and digital growth.",
    url: path,
    type: "website",
    images: [{ url: ebook.image, width: 595, height: 842, alt: ebook.imageAlt }],
  },
};

function schemas() {
  const url = `${siteConfig.siteUrl}${path}`;
  const ebookUrl = `${siteConfig.siteUrl}${ebook.href}`;
  const imageUrl = `${siteConfig.siteUrl}${ebook.image}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      name: "SitesBrand eBooks",
      description: metadata.description,
      url,
      dateModified: updated,
      isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: books.map((book, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": `${url}#modern-search-optimization-book` },
        })),
      },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "@id": `${url}#modern-search-optimization-book`,
      name: ebook.title,
      description: ebook.description,
      url: ebookUrl,
      image: imageUrl,
      bookFormat: "https://schema.org/EBook",
      numberOfPages: ebook.pages,
      dateModified: updated,
      author: { "@type": "Person", name: "Hassam Shabbir" },
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      inLanguage: "en",
      potentialAction: {
        "@type": "DownloadAction",
        target: ebookUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "eBook", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];
}

export default function GuidesResourcesPage() {
  const pageSchemas = schemas();

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#1a1b41]">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,.13),transparent_34%),linear-gradient(180deg,#090d1e_0%,#070819_100%)] px-5 py-16 sm:px-7 sm:py-24">
          <div className="mx-auto max-w-[1180px] text-center">
            <p className="text-[12px] font-black uppercase tracking-[.18em] text-[#00e5ff]">SitesBrand Resources</p>
            <h1 className="font-display mt-4 text-[clamp(44px,7vw,76px)] font-extrabold leading-[.96]">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#ff6f59] bg-clip-text text-transparent">Modern Search</span>
              <br />
              eBook
            </h1>
            <p className="mx-auto mt-5 max-w-[720px] text-[17px] leading-8 text-[#aeb6d5]">
              Download the published SitesBrand eBook on SEO, AEO, GEO, AIO, SXO, AI search, and sustainable growth.
            </p>
          </div>
        </section>
        <GuidesClient calendlyUrl={siteConfig.calendlyUrl} />
      </main>
      <ExactSitesBrandFragment part="footer" />
      {pageSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
    </div>
  );
}
