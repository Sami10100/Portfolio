const updated = "2026-07-04";

export const ebook = {
  title: "The Ultimate 2026 Guide to Modern Search Optimization",
  description:
    "A 58-page SitesBrand eBook for mastering SEO, AEO, GEO, AIO, and SXO as one modern search growth system.",
  href: "/downloads/the-ultimate-2026-guide-to-modern-search-optimization-sitesbrand.pdf",
  image: "/assets/guides/modern-search-optimization-cover.png",
  imageAlt: "Cover of The Ultimate 2026 Guide to Modern Search Optimization by SitesBrand",
  type: "PDF",
  pages: 58,
  updated,
};

export const books = [ebook];

export const faqs = [
  ["What is this eBook about?", "It explains modern search optimization across SEO, AEO, GEO, AIO, and SXO so teams can plan visibility for Google, AI answers, and conversion-focused user journeys."],
  ["Is this a real published resource?", "Yes. This page lists only the actual SitesBrand eBook available for download."],
  ["Does the eBook page include structured data?", "Yes. The page includes CollectionPage, Book, BreadcrumbList, and FAQPage JSON-LD for Google and AI crawler context."],
  ["Can I use this before requesting an audit?", "Yes. Use the eBook to understand the framework, then request an audit when you need a site-specific priority list."],
] as const;

export { updated };
