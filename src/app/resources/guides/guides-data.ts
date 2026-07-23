const updated = "2026-07-04";

export type GuideBook = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  type: "PDF";
  pages: number;
  updated: string;
  useCase: string;
  badges: readonly string[];
};

export const books: GuideBook[] = [
  {
    id: "geo-accountability-checklist",
    title: "The GEO Accountability Checklist",
    description:
      "A 22-page buyer's guide for checking whether an agency's AI search, GEO, and answer-engine claims are measurable, verifiable, and tied to real business outcomes.",
    href: "/downloads/the-geo-accountability-checklist-sitesbrand.pdf",
    image: "/assets/guides/the-geo-accountability-checklist-cover.webp",
    imageAlt: "Cover of The GEO Accountability Checklist by SitesBrand",
    type: "PDF",
    pages: 22,
    updated,
    useCase: "agency evaluation and AI search accountability",
    badges: ["GEO", "AI Search", "Buyer Checklist"],
  },
  {
    id: "modern-search-optimization",
    title: "The Ultimate 2026 Guide to Modern Search Optimization",
    description:
      "A 58-page SitesBrand eBook for mastering SEO, AEO, GEO, AIO, and SXO as one modern search growth system.",
    href: "/downloads/the-ultimate-2026-guide-to-modern-search-optimization-sitesbrand.pdf",
    image: "/assets/guides/modern-search-optimization-cover.webp",
    imageAlt: "Cover of The Ultimate 2026 Guide to Modern Search Optimization by SitesBrand",
    type: "PDF",
    pages: 58,
    updated,
    useCase: "modern search planning",
    badges: ["SEO + AEO", "GEO + AIO", "SXO Growth"],
  },
];

export const ebook = books[0];

export const faqs = [
  ["What are these resources about?", "They cover modern search optimization, GEO accountability, AI search visibility, SEO, AEO, AIO, SXO, and conversion-focused growth systems."],
  ["Is the GEO Accountability Checklist a real published resource?", "Yes. It is a published SitesBrand PDF checklist. The visible download flow asks for an email first so the resource can work as a lead magnet."],
  ["Does the eBook page include structured data?", "Yes. The page includes CollectionPage, Book, BreadcrumbList, and FAQPage JSON-LD for Google and AI crawler context."],
  ["Can I use these before requesting an audit?", "Yes. Use the guides to understand the framework, then request an audit when you need a site-specific priority list."],
] as const;

export { updated };
