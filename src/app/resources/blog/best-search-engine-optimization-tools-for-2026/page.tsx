import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";
import "./article.css";

const slug = "best-search-engine-optimization-tools-for-2026";
const path = `/resources/blog/${slug}`;
const title = "Best Search Engine Optimization Tools for 2026";
const description =
  "A practical guide to the best SEO tools for 2026, including keyword research, technical SEO, reporting, content optimization, and AI search visibility platforms.";
const publishedDate = "2026-07-03";
const mainImage =
  "https://kccqmbkylzrrhibpxtbk.supabase.co/storage/v1/object/public/public-user-assets/4e2eb3c2-72e5-419b-a9ef-6e11e7c1960c/9e561b09-3622-4db2-8ad7-5ef06adf1ba3/main-image.webp";

function getArticleHtml() {
  return readFileSync(join(process.cwd(), "src/content/articles/best-search-engine-optimization-tools-for-2026.html"), "utf8");
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
    images: [{ url: mainImage, width: 1200, height: 675, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [mainImage],
  },
};

export default function BestSeoToolsArticlePage() {
  const articleHtml = getArticleHtml();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: mainImage,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/assets/sitesbrand-wordmark-transparent.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.siteUrl}${path}`,
    articleBody: stripHtml(articleHtml),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.siteUrl}/resources/blog` },
      { "@type": "ListItem", position: 3, name: title, item: `${siteConfig.siteUrl}${path}` },
    ],
  };

  return (
    <>
      <ExactSitesBrandFragment part="nav" />
      <main className="sb-article-page">
        <article className="sb-article-shell">
          <div className="sb-article-meta">
            <Link href="/resources/blog">SitesBrand Blog</Link>
            <span>Updated July 3, 2026</span>
            <span>SEO tools</span>
          </div>
          <div className="sb-article-content" dangerouslySetInnerHTML={{ __html: articleHtml }} />
        </article>
      </main>
      <ExactSitesBrandFragment part="footer" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
