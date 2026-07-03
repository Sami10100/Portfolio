import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { author, blogPosts, type BlogPost } from "@/content/blog-posts";
import { siteConfig } from "@/config/site";

const path = "/resources/blog";
const updated = "2026-07-03";

type Topic = {
  title: string;
  href: string;
};

const articles = blogPosts;

const topics: Topic[] = [
  {
    title: "All",
    href: "/resources/blog",
  },
  {
    title: "AI Search",
    href: "/search?q=ai%20search",
  },
  {
    title: "AEO / GEO",
    href: "/search?q=aeo%20geo",
  },
  {
    title: "SEO Strategy",
    href: "/search?q=seo",
  },
  {
    title: "Technical SEO",
    href: "/search?q=technical%20seo",
  },
  {
    title: "Conversion",
    href: "/search?q=conversion",
  },
  {
    title: "Automation",
    href: "/search?q=automation",
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
        url: absoluteUrl(`/resources/blog/${article.slug}`),
        dateModified: article.updated,
        author: { "@type": "Person", name: author.name, url: author.sameAs[0].href },
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
            url: absoluteUrl(`/resources/blog/${article.slug}`),
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

function ArticleCard({ article }: { article: BlogPost }) {
  const href = `/resources/blog/${article.slug}`;

  return (
    <article className="grid gap-4 border-b border-[rgba(26,27,65,.12)] py-6 sm:grid-cols-[168px_1fr] sm:gap-6">
      <Link className="block overflow-hidden rounded-[8px] border border-[rgba(26,27,65,.1)] bg-[#f4f5f6] no-underline" href={href} aria-label={`Read ${article.title}`}>
        <Image
          className="aspect-[4/3] h-full w-full object-cover"
          src={article.image}
          alt={article.imageAlt}
          width={336}
          height={252}
          unoptimized={article.image.endsWith(".svg")}
          sizes="(min-width: 768px) 168px, 100vw"
        />
      </Link>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 text-[12px] font-semibold text-[var(--lmuted)]">
          <Link className="text-[#0067ff] no-underline" href={`/search?q=${encodeURIComponent(article.category)}`}>
            {article.category}
          </Link>
          <span aria-hidden="true">|</span>
          <time className="text-[var(--lmuted)]" dateTime={article.updated}>
            {article.updated}
          </time>
          <span aria-hidden="true">|</span>
          <span>{article.readTime}</span>
        </div>
        <h2 className="font-display mt-2 text-[22px] font-bold leading-[1.2]">
          <Link className="text-[var(--ltext)] no-underline" href={href}>
            {article.title}
          </Link>
        </h2>
        <p className="mt-2 max-w-[760px] text-[14.5px] leading-7 text-[var(--lmuted)]">{article.description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px]">
          <span className="text-[var(--lmuted)]">By {author.name}</span>
          <Link className="font-bold text-[#0067ff] no-underline" href={href}>
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogResourcesPage() {
  const schemas = blogSchemas();

  return (
    <div className="min-h-screen bg-[#ffffff] text-[var(--ltext)]">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="border-b border-[rgba(26,27,65,.12)] px-5 py-10 sm:px-7 sm:py-14">
          <div className="mx-auto max-w-[1080px]">
            <h1 className="font-display text-[clamp(38px,7vw,64px)] font-extrabold leading-[1.05]">Blog</h1>
            <p className="mt-3 max-w-[720px] text-[16px] leading-7 text-[var(--lmuted)]">
              Simple guides on SEO, AI search, conversion, automation, and growth systems.
            </p>
            <form action="/search" className="mt-6 flex max-w-[720px] flex-col gap-2 sm:flex-row" role="search">
              <label className="sr-only" htmlFor="blog-search">
                Search blog articles
              </label>
              <input
                id="blog-search"
                className="min-h-12 min-w-0 flex-1 rounded-[8px] border border-[rgba(26,27,65,.16)] bg-white px-4 text-[15px] text-[var(--ltext)] outline-none"
                name="q"
                placeholder="Search articles..."
                type="search"
              />
              <button className="rounded-[8px] bg-[#0067ff] px-6 py-3 text-[14px] font-bold text-white" type="submit">
                Search
              </button>
            </form>
            <nav className="mt-5 flex flex-wrap gap-2" aria-label="Blog categories">
              {topics.map((topic, index) => (
                <Link
                  key={topic.title}
                  className={
                    index === 0
                      ? "rounded-[8px] bg-[#070819] px-4 py-2 text-[13px] font-bold text-white no-underline"
                      : "rounded-[8px] border border-[rgba(26,27,65,.14)] px-4 py-2 text-[13px] font-bold text-[var(--ltext)] no-underline"
                  }
                  href={topic.href}
                >
                  {topic.title}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="px-5 py-8 sm:px-7 sm:py-10">
          <div className="mx-auto grid max-w-[1080px] gap-8 lg:grid-cols-[1fr_300px] lg:items-start">
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(26,27,65,.12)] pb-3">
                <h2 className="font-display text-[26px] font-bold">Latest articles</h2>
                <Link className="text-[13px] font-bold text-[#0067ff] no-underline" href="/rss.xml">
                  RSS
                </Link>
              </div>
              <div>
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
            <aside className="rounded-[8px] border border-[rgba(26,27,65,.12)] bg-[rgba(0,103,255,.06)] p-5 lg:sticky lg:top-24">
              <p className="text-[12px] font-black uppercase tracking-[.12em] text-[#0067ff]">Free audit</p>
              <h2 className="font-display mt-2 text-[24px] font-bold leading-[1.15]">
                Find what is blocking your organic growth.
              </h2>
              <p className="mt-3 text-[13.5px] leading-6 text-[var(--lmuted)]">
                Get a practical SEO, AI search, and conversion review of your website.
              </p>
              <Link
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[8px] bg-[#0067ff] px-5 text-[14px] font-bold text-white no-underline"
                href="/free-audit"
              >
                Get free audit
              </Link>
            </aside>
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
