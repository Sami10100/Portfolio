import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { author, blogPosts, getBlogPostPrimaryImage, type BlogPost } from "@/content/blog-posts";
import { siteConfig } from "@/config/site";

const path = "/resources/blog";
const updated = "2026-07-03";
const articles = blogPosts;

const faqs = [
  ["What does the SitesBrand blog cover?", "The blog covers SEO, AEO, GEO, AIO, AI search optimization, technical SEO, automation, conversion design, and digital growth systems."],
  ["Which image is used for each blog card?", "Each blog card uses the first image defined inside that article. If an article has no internal image, it falls back to the article feature image."],
  ["Does the blog include structured data?", "Yes. The blog page includes Blog, CollectionPage, BreadcrumbList, and FAQPage schema. Individual articles include Article and FAQ schema."],
  ["How often will new articles appear?", "New articles should be added only when they are real published resources with their own article content, image, metadata, and schema signals."],
] as const;

export const metadata: Metadata = {
  title: { absolute: "SEO, AEO & AI Growth Blog | SitesBrand" },
  description:
    "Articles on SEO, AEO, GEO, AIO, AI search optimization, automation, technical SEO, and conversion strategy from the SitesBrand team.",
  alternates: { canonical: path },
  openGraph: {
    title: "SEO, AEO & AI Growth Blog | SitesBrand",
    description:
      "Articles on SEO, AEO, GEO, AIO, AI search optimization, automation, technical SEO, and conversion strategy from the SitesBrand team.",
    url: path,
    type: "website",
  },
};

function absoluteUrl(href: string) {
  return `${siteConfig.siteUrl}${href}`;
}

function absoluteImageUrl(src: string) {
  return src.startsWith("http") ? src : `${siteConfig.siteUrl}${src}`;
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
      blogPost: articles.map((article) => {
        const image = getBlogPostPrimaryImage(article);
        return {
          "@type": "BlogPosting",
          headline: article.title,
          description: article.description,
          image: absoluteImageUrl(image.src),
          url: absoluteUrl(`/resources/blog/${article.slug}`),
          datePublished: article.published,
          dateModified: article.updated,
          author: { "@type": "Person", name: author.name, url: author.sameAs[0].href },
          reviewedBy: { "@type": "Organization", name: siteConfig.name },
        };
      }),
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
        itemListElement: articles.map((article, index) => {
          const image = getBlogPostPrimaryImage(article);
          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Article",
              name: article.title,
              description: article.description,
              image: absoluteImageUrl(image.src),
              url: absoluteUrl(`/resources/blog/${article.slug}`),
              dateModified: article.updated,
            },
          };
        }),
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
  const image = getBlogPostPrimaryImage(article);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#dfe5f0] bg-white shadow-[0_24px_70px_-52px_rgba(26,27,65,.48)] transition hover:-translate-y-1 hover:border-[#00b7d6]/45">
      <Link className="relative block overflow-hidden bg-[#070819] no-underline" href={href} aria-label={`Read ${article.title}`}>
        <Image
          className="aspect-[16/9] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          src={image.src}
          alt={image.alt}
          width={920}
          height={520}
          priority
          unoptimized={image.src.endsWith(".svg") || image.src.startsWith("http")}
          sizes="(min-width: 1024px) 430px, 100vw"
        />
        <div className="absolute left-4 top-4 rounded-[8px] border border-[#00e5ff]/30 bg-[#071026]/85 px-3 py-1 text-[12px] font-black uppercase tracking-[.08em] text-[#00e5ff]">
          Article
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-[#656984]">
          <span className="text-[#0077ff]">{article.category}</span>
          <span aria-hidden="true">|</span>
          <time dateTime={article.updated}>{article.updated}</time>
          <span aria-hidden="true">|</span>
          <span>{article.readTime}</span>
        </div>
        <h2 className="font-display mt-3 text-[22px] font-bold leading-[1.2] text-[#1a1b41]">
          <Link className="text-[#1a1b41] no-underline" href={href}>
            {article.title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 text-[14.5px] leading-7 text-[#5b5d77]">{article.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-[13px] text-[#656984]">By {author.name}</span>
          <Link className="inline-flex min-h-10 items-center justify-center rounded-[10px] bg-[#1a1b41] px-4 text-[13px] font-black text-white no-underline shadow-[0_16px_34px_-22px_rgba(26,27,65,.9)] transition hover:-translate-y-0.5 hover:bg-[#101735]" href={href}>
            View Article
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogResourcesPage() {
  const schemas = blogSchemas();

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#1a1b41]">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,.13),transparent_34%),linear-gradient(180deg,#090d1e_0%,#070819_100%)] px-5 py-16 sm:px-7 sm:py-24">
          <div className="mx-auto max-w-[1180px] text-center">
            <p className="text-[12px] font-black uppercase tracking-[.18em] text-[#00e5ff]">SitesBrand Resources</p>
            <h1 className="font-display mt-4 text-[clamp(44px,7vw,76px)] font-extrabold leading-[.96]">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#ff6f59] bg-clip-text text-transparent">Blog</span>
              <br />
              Articles
            </h1>
            <p className="mx-auto mt-5 max-w-[720px] text-[17px] leading-8 text-[#aeb6d5]">
              Practical SEO, AEO, GEO, AIO, SXO, automation, and conversion articles from the SitesBrand team.
            </p>
          </div>
        </section>

        <section className="border-y border-[#dde4ef] bg-white px-5 py-8 sm:px-7">
          <div className="mx-auto max-w-[760px]">
            <form action="/search" className="grid gap-3 sm:grid-cols-[190px_1fr]" role="search">
              <label className="sr-only" htmlFor="blog-category">Article category</label>
              <select id="blog-category" className="min-h-12 rounded-[10px] border border-[#d8e0ec] bg-[#f8fafd] px-4 text-[14px] text-[#1a1b41] outline-none">
                <option>All article categories</option>
              </select>
              <label className="sr-only" htmlFor="blog-search">Search articles</label>
              <input id="blog-search" suppressHydrationWarning className="min-h-12 rounded-[10px] border border-[#d8e0ec] bg-[#f8fafd] px-4 text-[14px] text-[#1a1b41] outline-none placeholder:text-[#7a8098]" name="q" placeholder="Search blog articles..." type="search" />
            </form>
            <div className="mt-4 flex flex-wrap gap-2 rounded-[12px] bg-[#eef3f9] p-1 text-[14px] text-[#5b5d77]">
              <span className="rounded-[9px] bg-[#1a1b41] px-5 py-2 text-white">All ({articles.length})</span>
              <span className="px-5 py-2">Articles ({articles.length})</span>
            </div>
            <p className="mt-6 text-center text-[14px] text-[#656984]">Showing 1-{articles.length} of {articles.length} articles</p>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-7 sm:py-14">
          <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="px-5 pb-14 sm:px-7">
          <div className="mx-auto grid max-w-[1180px] gap-6 rounded-[22px] border border-[#00e5ff]/24 bg-[radial-gradient(circle_at_88%_18%,rgba(0,229,255,.2),transparent_32%),linear-gradient(135deg,#1a1b41_0%,#071026_100%)] p-7 text-white shadow-[0_34px_90px_-56px_rgba(26,27,65,.9)] md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[.16em] text-[#00e5ff]">Need execution?</p>
              <h2 className="font-display mt-2 text-[clamp(26px,4vw,42px)] font-extrabold">Turn article insights into shipped growth work.</h2>
              <p className="mt-3 max-w-[680px] text-[15px] leading-7 text-[#aeb6d5]">Get a practical SEO, AI search, and conversion audit before publishing more content.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-gradient-to-r from-[#00e5ff] to-[#35d4ff] px-6 text-[14px] font-black text-[#070819] no-underline shadow-[0_18px_38px_-18px_rgba(0,229,255,.8)] transition hover:-translate-y-0.5" href="/free-audit">
                Get a Free Audit
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-[12px] border border-white/[.18] bg-white/10 px-6 text-[14px] font-black text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/[.16]" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-7">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="font-display text-[34px] font-extrabold text-[#1a1b41]">Blog FAQ</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-[12px] border border-[#dfe5f0] bg-white p-5 shadow-[0_18px_50px_-42px_rgba(26,27,65,.45)]">
                  <summary className="cursor-pointer font-display text-[17px] font-bold text-[#1a1b41]">{question}</summary>
                  <p className="mt-3 text-[14px] leading-7 text-[#5b5d77]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
    </div>
  );
}
