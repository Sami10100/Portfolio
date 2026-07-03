import { siteConfig } from "@/config/site";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  updated: string;
  readTime: string;
  image: string;
  imageAlt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  questions: string[];
  tags: string[];
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
    bullets?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }>;
  faqs: Array<[string, string]>;
};

const updated = "2026-07-03";

export const queryClusters = [
  {
    label: "SEO tools",
    queries: ["best search engine optimization tools 2026", "SEO tools", "technical SEO tools"],
    target: "/resources/blog/best-search-engine-optimization-tools-for-2026",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "best-search-engine-optimization-tools-for-2026",
    title: "Best Search Engine Optimization Tools for 2026",
    description:
      "A practical guide to choosing SEO tools for keyword research, technical audits, reporting, content optimization, and AI search visibility.",
    category: "SEO Strategy",
    updated,
    readTime: "12 min read",
    image: "/assets/blog/best-search-engine-optimization-tools-for-2026-feature.svg",
    imageAlt: "SEO tools and AI visibility stack illustration",
    primaryKeyword: "best search engine optimization tools 2026",
    secondaryKeywords: ["SEO tools", "technical SEO tools", "AI search visibility tools"],
    questions: [
      "Which SEO tools are worth paying for in 2026?",
      "What should an AI-search-ready SEO stack include?",
      "How should teams compare audit, content, and reporting tools?",
      "Which tools support technical SEO and content optimization?",
    ],
    tags: ["SEO tools", "Technical SEO", "AI search visibility"],
    intro:
      "The best search engine optimization tools for 2026 are not just keyword databases or rank trackers. They help you understand demand, diagnose technical barriers, improve content quality, measure business impact, and adapt to AI-driven search experiences.",
    sections: [
      {
        heading: "What makes an SEO tool worth using in 2026?",
        body: [
          "A tool is only useful if it improves decisions. Reliable data, search intent mapping, implementation support, AI-search awareness, and team fit matter more than feature count.",
          "Start with free first-party data, add one strong all-in-one SEO platform, use a crawler for technical depth, layer in content optimization where it improves editorial quality, and consider AI search visibility tools if answer engines influence your buyer journey.",
        ],
      },
      {
        heading: "Tools to shortlist by use case",
        body: [
          "Google Search Console and Bing Webmaster Tools are baseline sources for search performance and indexation. GA4 connects SEO to outcomes. Semrush and Ahrefs support competitor and keyword research. Screaming Frog and Sitebulb support technical audits. PageSpeed Insights and Lighthouse support performance diagnostics.",
          "Content optimization tools such as Clearscope, Surfer, and Frase can help with topical coverage, but they should support expert judgment rather than replace it.",
        ],
      },
      {
        heading: "How to choose the right stack",
        body: [
          "The right stack depends on site size, business model, team skill, and implementation capacity. A small service business does not need the same platform mix as an enterprise marketplace.",
          "Most businesses need tools for five jobs: search performance, analytics, keyword and competitor research, technical auditing, and reporting. Add content optimization, local SEO, enterprise crawling, or AI visibility tools only when your strategy requires them.",
        ],
      },
    ],
    faqs: [
      [
        "What is the best SEO tool for 2026?",
        "There is no single best tool for every business. A strong baseline is Google Search Console, GA4, Bing Webmaster Tools, PageSpeed Insights, and one all-in-one platform if SEO is a serious growth channel.",
      ],
      [
        "Are free SEO tools enough?",
        "Free tools are enough for many new or small websites. Paid tools become useful when competitor research, content gaps, rank tracking, backlink analysis, or technical audits need scale.",
      ],
      [
        "Do AI tools replace SEO tools?",
        "No. AI tools can speed up research and drafting, but they do not replace first-party data, technical crawling, analytics, editorial expertise, or strategic judgment.",
      ],
      [
        "How many SEO tools does a business need?",
        "Most businesses need a small stack that covers measurement, research, technical audits, implementation, and reporting.",
      ],
    ],
  },
];

export const author = {
  name: "Hassam Shabbir",
  role: "Founder & CEO, SitesBrand",
  credential: "SXO, SEO, AI search optimization, automation, and conversion growth strategist",
  image: "/assets/authors/hassam-shabbir.jpg",
  bio:
    "Hassam Shabbir leads SitesBrand, a digital growth agency focused on SEO, AI search optimization, automation, conversion-focused design, and scalable web systems for ambitious brands.",
  sameAs: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hassam-shabbir-sxo/" },
    { label: "SitesBrand LinkedIn", href: siteConfig.social.linkedin },
    { label: "Facebook", href: siteConfig.social.facebook },
    { label: "WhatsApp", href: siteConfig.whatsappUrl },
    { label: "Email", href: `mailto:${siteConfig.email}` },
  ],
};

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost() {
  return blogPosts[0];
}
