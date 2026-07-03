import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { NewsletterSignupForm } from "@/components/newsletter-signup-form";
import { siteConfig } from "@/config/site";

const path = "/resources/blog";
const updated = "2026-07-03";

type BlogArticle = {
  title: string;
  description: string;
  href: string;
  category: string;
  updated: string;
  readTime: string;
  image: string;
  imageAlt: string;
  author: string;
  reviewer: string;
  questions: string[];
  tags: string[];
};

type Topic = {
  title: string;
  description: string;
  href: string;
  accent: string;
};

const articles: BlogArticle[] = [
  {
    title: "Best Search Engine Optimization Tools for 2026",
    description:
      "A practical guide to choosing SEO tools for keyword research, technical audits, reporting, content optimization, and AI search visibility.",
    href: "/resources/blog/best-search-engine-optimization-tools-for-2026",
    category: "SEO Strategy",
    updated,
    readTime: "12 min read",
    image: "/assets/services/cards/seo-content.webp",
    imageAlt: "SEO content strategy dashboard illustration",
    author: "SitesBrand SEO Team",
    reviewer: "Reviewed by Growth Strategy",
    questions: [
      "Which SEO tools are worth paying for in 2026?",
      "What should an AI-search-ready SEO stack include?",
      "How should teams compare audit, content, and reporting tools?",
      "Which tools support technical SEO and content optimization?",
    ],
    tags: ["SEO tools", "Technical SEO", "AI search visibility"],
  },
];

const topics: Topic[] = [
  {
    title: "AI Search",
    description: "Optimize pages for AI Overviews, ChatGPT, Gemini, Perplexity, and LLM discovery.",
    href: "/search?q=ai%20search",
    accent: "#0067ff",
  },
  {
    title: "AEO / GEO",
    description: "Create answer-ready definitions, FAQs, entity signals, and citation-worthy proof.",
    href: "/search?q=aeo%20geo",
    accent: "#ff6f59",
  },
  {
    title: "SEO Strategy",
    description: "Plan keyword maps, service pages, internal links, authority signals, and reports.",
    href: "/search?q=seo",
    accent: "#006f7c",
  },
  {
    title: "Technical SEO",
    description: "Improve crawlability, indexation, schema, speed, canonicals, and clean HTML.",
    href: "/search?q=technical%20seo",
    accent: "#00a58a",
  },
  {
    title: "Conversion",
    description: "Turn organic traffic into clearer CTAs, better journeys, and qualified leads.",
    href: "/search?q=conversion",
    accent: "#7a4cff",
  },
  {
    title: "Automation",
    description: "Connect forms, CRM, reporting, follow-up, and AI-assisted workflows.",
    href: "/search?q=automation",
    accent: "#0f8bd9",
  },
];

const startHere = [
  {
    question: "What is AEO?",
    answer: "Answer Engine Optimization formats content so answer systems can extract a clear, trusted response.",
    href: "/services/ai-search-optimization",
  },
  {
    question: "What is GEO?",
    answer: "Generative Engine Optimization helps AI systems understand, summarize, and recommend your brand.",
    href: "/services/ai-search-optimization",
  },
  {
    question: "How do service pages win AI search?",
    answer: "They need definitions, proof, schema, examples, FAQs, author signals, and internal links.",
    href: "/resources/guides",
  },
  {
    question: "How should success be measured?",
    answer: "Track rankings, citations, resource engagement, qualified leads, and conversion events together.",
    href: "/resources/tools",
  },
];

const faqs = [
  [
    "What does the SitesBrand blog cover?",
    "The blog covers SEO, AEO, GEO, AIO, AI search optimization, technical SEO, automation, conversion design, and digital growth systems.",
  ],
  [
    "How is this blog optimized for AI search?",
    "The blog uses clear topic clusters, answer-first summaries, crawlable links, article metadata, FAQ schema, ItemList schema, and consistent entity signals.",
  ],
  [
    "Will new articles appear on this page?",
    "Yes. New published articles should be added to the article list so they appear in Latest articles, schema, search, and internal-link paths.",
  ],
  [
    "Why include updated dates and reviewer signals?",
    "Dates and review signals help readers judge freshness and trust, while also giving search systems clearer quality context.",
  ],
] as const;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read SitesBrand articles on SEO, AEO, GEO, AIO, AI search optimization, automation, technical SEO, conversion, and digital growth.",
  alternates: { canonical: path },
  openGraph: {
    title: "SitesBrand Blog | SEO, AEO, GEO, AI Search and Growth",
    description:
      "Practical articles and topic clusters for SEO, answer engines, generative search, automation, conversion, and web growth.",
    url: path,
    type: "website",
  },
};

function absoluteUrl(href: string) {
  return `${siteConfig.siteUrl}${href}`;
}

function blogSchemas() {
  const url = absoluteUrl(path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${url}#blog`,
      name: "SitesBrand Blog",
      description: metadata.description,
      url,
      dateModified: updated,
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
      blogPost: articles.map((article) => ({
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        url: absoluteUrl(article.href),
        dateModified: article.updated,
        author: { "@type": "Organization", name: siteConfig.name },
        reviewedBy: { "@type": "Organization", name: siteConfig.name },
      })),
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      name: "SitesBrand Blog",
      description: metadata.description,
      url,
      dateModified: updated,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Article",
            name: article.title,
            description: article.description,
            url: absoluteUrl(article.href),
            dateModified: article.updated,
          },
        })),
      },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: url },
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

function ArticleCard({ article, featured = false }: { article: BlogArticle; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? "grid overflow-hidden rounded-[8px] border border-[rgba(26,27,65,.12)] bg-white shadow-[0_18px_60px_-36px_rgba(26,27,65,.38)] lg:grid-cols-[.78fr_1.25fr]"
          : "overflow-hidden rounded-[8px] border border-[rgba(26,27,65,.12)] bg-white shadow-[0_16px_50px_-36px_rgba(26,27,65,.34)]"
      }
    >
      <Link className="block bg-[#071126] no-underline" href={article.href} aria-label={`Read ${article.title}`}>
        <Image
          className={featured ? "h-full min-h-[280px] w-full object-cover" : "h-[210px] w-full object-cover"}
          src={article.image}
          alt={article.imageAlt}
          width={720}
          height={620}
          priority={featured}
          sizes={featured ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"}
        />
      </Link>
      <div className={featured ? "grid gap-5 p-6 sm:p-8" : "grid gap-4 p-5"}>
        <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[.08em]">
          <span className="text-[#0067ff]">{article.category}</span>
          <span className="h-1 w-1 rounded-full bg-[rgba(26,27,65,.28)]" />
          <time className="text-[var(--lmuted)]" dateTime={article.updated}>
            Updated {article.updated}
          </time>
          <span className="text-[var(--lmuted)]">{article.readTime}</span>
        </div>
        <div>
          <h2 className={featured ? "font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-.03em]" : "font-display text-[22px] font-bold leading-[1.18] tracking-[-.02em]"}>
            <Link className="text-[var(--ltext)] no-underline" href={article.href}>
              {article.title}
            </Link>
          </h2>
          <p className="mt-3 text-[14.5px] leading-7 text-[var(--lmuted)]">{article.description}</p>
        </div>
        {featured ? (
          <div>
            <p className="text-[13px] font-bold text-[var(--ltext)]">Key questions answered</p>
            <ul className="mt-3 grid gap-2 text-[13.5px] leading-6 text-[var(--lmuted)] sm:grid-cols-2">
              {article.questions.map((question) => (
                <li key={question} className="flex gap-2">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#00bcd4]" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(26,27,65,.09)] pt-4">
          <div className="text-[12.5px] leading-5 text-[var(--lmuted)]">
            <p className="font-bold text-[var(--ltext)]">By {article.author}</p>
            <p>{article.reviewer}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                className="rounded-[8px] bg-[rgba(26,27,65,.055)] px-3 py-2 text-[12px] font-semibold text-[var(--lmuted)] no-underline"
                href={`/search?q=${encodeURIComponent(tag)}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogResourcesPage() {
  const [featuredArticle] = articles;
  const schemas = blogSchemas();

  return (
    <div className="min-h-screen bg-[#ffffff] text-[var(--ltext)]">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="border-b border-[rgba(26,27,65,.09)] px-7 pb-10 pt-14 sm:pt-20">
          <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[.9fr_.55fr] lg:items-end">
            <div>
              <h1 className="font-display max-w-[760px] text-[clamp(44px,7vw,88px)] font-extrabold leading-[1.01] tracking-[-.035em]">
                SitesBrand Blog<span className="text-[#00bcd4]">.</span>
              </h1>
              <p className="mt-5 max-w-[650px] text-[17px] leading-8 text-[var(--lmuted)]">
                Expert answers on SEO, AEO, GEO, AIO, AI search, automation, UX, and conversion growth. Use the filters, search, or topic clusters to find the article that matches your next growth problem.
              </p>
              <form
                action="/search"
                className="mt-7 flex max-w-[680px] flex-col gap-3 rounded-[8px] border border-[rgba(26,27,65,.14)] bg-white p-2 shadow-[0_16px_44px_-34px_rgba(26,27,65,.4)] sm:flex-row"
                role="search"
              >
                <label className="sr-only" htmlFor="blog-search">
                  Search articles, topics, or questions
                </label>
                <input
                  id="blog-search"
                  className="min-h-12 min-w-0 flex-1 rounded-[6px] border-0 bg-[rgba(26,27,65,.04)] px-4 text-[15px] text-[var(--ltext)] outline-none"
                  name="q"
                  placeholder="Search articles, topics, or questions..."
                  type="search"
                />
                <button className="rounded-[6px] bg-[#0067ff] px-6 py-3 text-[14px] font-bold text-white" type="submit">
                  Search
                </button>
              </form>
              <nav className="mt-5 flex flex-wrap gap-2" aria-label="Blog topics">
                <Link className="rounded-[8px] bg-[#070819] px-4 py-2 text-[12.5px] font-bold text-white no-underline" href="/resources/blog">
                  All topics
                </Link>
                {topics.map((topic) => (
                  <Link
                    key={topic.title}
                    className="rounded-[8px] border border-[rgba(26,27,65,.12)] px-4 py-2 text-[12.5px] font-bold text-[var(--ltext)] no-underline"
                    href={topic.href}
                  >
                    {topic.title}
                  </Link>
                ))}
              </nav>
            </div>
            <aside className="rounded-[8px] border border-[rgba(26,27,65,.12)] bg-[rgba(0,188,212,.08)] p-6">
              <p className="text-[12px] font-black uppercase tracking-[.14em] text-[#006f7c]">Answer-first hub</p>
              <h2 className="font-display mt-3 text-[28px] font-extrabold leading-[1.12] tracking-[-.025em]">
                Built for readers first, then search and AI systems.
              </h2>
              <dl className="mt-5 grid gap-4 text-[13.5px] leading-6 text-[var(--lmuted)]">
                <div>
                  <dt className="font-bold text-[var(--ltext)]">Primary topic</dt>
                  <dd>AI-search-ready SEO and digital growth strategy</dd>
                </div>
                <div>
                  <dt className="font-bold text-[var(--ltext)]">Last updated</dt>
                  <dd>
                    <time dateTime={updated}>{updated}</time>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="px-7 py-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[.14em] text-[#ff6f59]">Featured</p>
                <h2 className="font-display mt-2 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-.03em]">
                  Start with the most useful current guide
                </h2>
              </div>
              <Link className="text-[14px] font-bold text-[#0067ff] no-underline" href="#latest-articles">
                View latest articles
              </Link>
            </div>
            <ArticleCard article={featuredArticle} featured />
          </div>
        </section>

        <section id="latest-articles" className="px-7 py-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-.03em]">Latest articles</h2>
              <Link className="text-[14px] font-bold text-[#0067ff] no-underline" href="/rss.xml">
                RSS feed
              </Link>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.href} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-7 py-8">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="font-display text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-.03em]">Explore by topic</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {topics.map((topic) => (
                <Link
                  key={topic.title}
                  className="rounded-[8px] border border-[rgba(26,27,65,.12)] bg-white p-5 text-[var(--ltext)] no-underline shadow-[0_14px_44px_-34px_rgba(26,27,65,.38)]"
                  href={topic.href}
                >
                  <span className="block h-1.5 w-10 rounded-full" style={{ backgroundColor: topic.accent }} />
                  <h3 className="font-display mt-5 text-[18px] font-bold">{topic.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[var(--lmuted)]">{topic.description}</p>
                  <span className="mt-5 inline-flex text-[13px] font-bold text-[#0067ff]">Explore</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-7 py-8">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="font-display text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-.03em]">Start here</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {startHere.map((item) => (
                <Link
                  key={item.question}
                  className="rounded-[8px] border border-[rgba(26,27,65,.12)] bg-[rgba(26,27,65,.025)] p-5 text-[var(--ltext)] no-underline"
                  href={item.href}
                >
                  <h3 className="font-display text-[18px] font-bold">{item.question}</h3>
                  <p className="mt-3 text-[13.5px] leading-6 text-[var(--lmuted)]">{item.answer}</p>
                  <span className="mt-5 inline-flex text-[13px] font-bold text-[#0067ff]">Read answer</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-7 py-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-7 rounded-[8px] border border-[rgba(26,27,65,.12)] bg-white p-6 shadow-[0_18px_60px_-38px_rgba(26,27,65,.34)] lg:grid-cols-[.7fr_1fr] lg:p-8">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[.14em] text-[#006f7c]">Frequently asked questions</p>
                <h2 className="font-display mt-3 text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.08] tracking-[-.03em]">
                  Quick answers for readers and answer engines
                </h2>
              </div>
              <div className="grid gap-3">
                {faqs.map(([question, answer]) => (
                  <details key={question} className="rounded-[8px] border border-[rgba(26,27,65,.1)] bg-[rgba(26,27,65,.025)] p-4">
                    <summary className="cursor-pointer font-display text-[16px] font-bold">{question}</summary>
                    <p className="mt-3 text-[13.5px] leading-7 text-[var(--lmuted)]">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[rgba(0,188,212,.08)] px-7 py-10">
          <div className="mx-auto grid max-w-[980px] gap-5 md:grid-cols-[.75fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-[28px] font-extrabold leading-[1.1] tracking-[-.025em]">
                Get actionable growth insights in your inbox
              </h2>
              <p className="mt-2 text-[13.5px] leading-6 text-[var(--lmuted)]">No fluff. SEO, AI search, CRO, and automation notes worth acting on.</p>
            </div>
            <NewsletterSignupForm />
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
    </div>
  );
}
