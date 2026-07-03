import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { author, blogPosts, getBlogPost } from "@/content/blog-posts";
import { siteConfig } from "@/config/site";
import "./article.css";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const path = `/resources/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
      type: "article",
      publishedTime: post.updated,
      modifiedTime: post.updated,
      images: [{ url: post.image, width: 1200, height: 900, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function articleSchema(post: NonNullable<ReturnType<typeof getBlogPost>>) {
  const url = `${siteConfig.siteUrl}/resources/blog/${post.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      image: `${siteConfig.siteUrl}${post.image}`,
      datePublished: post.updated,
      dateModified: post.updated,
      author: {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role,
        url: author.sameAs[0].href,
        sameAs: author.sameAs.map((item) => item.href),
      },
      reviewedBy: {
        "@type": "Organization",
        name: "SitesBrand Growth Strategy",
        url: siteConfig.siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.siteUrl}/assets/sitesbrand-wordmark-transparent.png`,
        },
      },
      mainEntityOfPage: url,
      keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.siteUrl}/resources/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const schemas = articleSchema(post);

  return (
    <div className="sb-article-page">
      <ExactSitesBrandFragment part="nav" />
      <main className="sb-article-main">
        <header className="sb-article-hero">
          <div className="sb-article-kicker">
            <Link href="/resources/blog">Blog</Link> » {post.category}
          </div>
          <h1>{post.title}</h1>
          <p className="sb-article-dek">{post.description}</p>
          <div className="sb-article-byline">
            <div>
              By <Link href="#author">{author.name}</Link> <span aria-hidden="true">|</span>{" "}
              <strong>Updated on</strong>{" "}
              <time dateTime={post.updated}>
                {new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${post.updated}T00:00:00`))}
              </time>
            </div>
            <div className="sb-reviewed">
              <span className="sb-check" aria-hidden="true">
                ✓
              </span>
              <span>
                Reviewed by <Link href="#author">SitesBrand Growth Strategy</Link>
              </span>
            </div>
          </div>
        </header>

        <div className="sb-article-layout">
          <article>
            <div className="sb-article-featured">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={1200}
                height={900}
                priority
                sizes="(min-width: 1180px) 820px, 100vw"
              />
            </div>

            <div className="sb-answer-box">
              <strong>Direct answer</strong>
              <p>{post.intro}</p>
            </div>

            <div className="sb-article-content">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section>
                <h2>Frequently asked questions</h2>
                <div className="sb-faq-list">
                  {post.faqs.map(([question, answer]) => (
                    <details key={question}>
                      <summary>{question}</summary>
                      <p>{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="sb-sources">
              <h2>Sources and useful references</h2>
              <ul>
                <li>
                  <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">
                    Google Search Central: optimizing for generative AI features
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">
                    Google Search Central: AI features and your website
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" target="_blank" rel="noopener noreferrer">
                    Google Search Central: build and submit a sitemap
                  </a>
                </li>
                <li>
                  <a href="https://storybrand.com/" target="_blank" rel="noopener noreferrer">
                    StoryBrand official website
                  </a>
                </li>
              </ul>
            </aside>

            <div id="author" className="sb-author-tabs" aria-label="Article author information">
              <span>Reviewer</span>
              <span>Author</span>
            </div>
            <aside className="sb-author-box">
              <div className="sb-author-avatar" aria-hidden="true">
                HS
              </div>
              <div>
                <h2>{author.name}</h2>
                <h3>{author.role}</h3>
                <p>{author.credential}</p>
                <div className="sb-author-socials">
                  {author.sameAs.map((item) => (
                    <a key={item.href} href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
                      {item.label}
                    </a>
                  ))}
                </div>
                <p>{author.bio}</p>
              </div>
            </aside>
          </article>

          <aside className="sb-sidebar" aria-label="Article sidebar">
            <div className="sb-sidebar-card">
              <strong>Primary keyword</strong>
              <p>{post.primaryKeyword}</p>
            </div>
            <div className="sb-sidebar-card">
              <strong>Key questions answered</strong>
              <ul>
                {post.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
            <div className="sb-sidebar-card">
              <strong>Next step</strong>
              <Link href="/free-audit">Get a free website audit</Link>
            </div>
            <div className="sb-sidebar-card">
              <strong>Topics</strong>
              <div className="sb-chip-row">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
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
