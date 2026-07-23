import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { author, blogPosts, getBlogPost, getBlogPostPrimaryImage } from "@/content/blog-posts";
import { siteConfig } from "@/config/site";
import "./article.css";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

type BlogPost = NonNullable<ReturnType<typeof getBlogPost>>;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const path = `/resources/blog/${post.slug}`;
  const primaryImage = getBlogPostPrimaryImage(post);
  const image = absoluteImageUrl(primaryImage.src);

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated,
      images: [{ url: image, width: 1400, height: 900, alt: primaryImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

function absoluteImageUrl(src: string) {
  return src.startsWith("http") ? src : `${siteConfig.siteUrl}${src}`;
}

function articleSchema(post: BlogPost) {
  const url = `${siteConfig.siteUrl}/resources/blog/${post.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      image: absoluteImageUrl(getBlogPostPrimaryImage(post).src),
      datePublished: post.published,
      dateModified: post.updated,
      author: {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role,
        image: `${siteConfig.siteUrl}${author.image}`,
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
          url: `${siteConfig.siteUrl}/assets/sitesbrand-wordmark-transparent.webp`,
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

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function sectionId(index: number) {
  return `section-${index + 1}`;
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return part;

        const [, label, href] = match;
        if (href.startsWith("/")) {
          return (
            <Link key={`${href}-${index}`} href={href}>
              {label}
            </Link>
          );
        }

        return (
          <a key={`${href}-${index}`} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      })}
    </>
  );
}

function ArticleCta({ variant }: { variant: "audit" | "strategy" }) {
  const isAudit = variant === "audit";

  return (
    <aside className="sb-article-cta">
      <div>
        <p>{isAudit ? "Find the biggest growth blockers" : "Turn the roadmap into execution"}</p>
        <h2>{isAudit ? "Get a free SEO, AI search, and SXO audit." : "Book a strategy call with SitesBrand."}</h2>
      </div>
      <div>
        <Link className="sb-cta-primary" href={isAudit ? "/free-audit" : siteConfig.calendlyUrl} target={isAudit ? undefined : "_blank"} rel={isAudit ? undefined : "noopener noreferrer"}>
          {isAudit ? "Get Free Audit" : "Book Strategy Call"}
        </Link>
        <Link className="sb-cta-secondary" href="/services/ai-search-optimization">
          View AI Search Service
        </Link>
      </div>
    </aside>
  );
}

const fallbackSources = [
  {
    label: "Google Search Central: optimizing for generative AI features",
    href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
  },
  {
    label: "Google Search Central: AI features and your website",
    href: "https://developers.google.com/search/docs/appearance/ai-features",
  },
  {
    label: "Google Search Central: build and submit a sitemap",
    href: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
  },
  {
    label: "StoryBrand official website",
    href: "https://storybrand.com/",
  },
];

function SourcesList({ post }: { post: BlogPost }) {
  const sources = post.sources?.length ? post.sources : fallbackSources;

  return (
    <ul>
      {sources.map((source) => (
        <li key={source.href}>
          <a href={source.href} target="_blank" rel="noopener noreferrer">
            {source.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const schemas = articleSchema(post);
  const primaryImage = getBlogPostPrimaryImage(post);

  return (
    <div className="sb-article-page">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <header className="sb-article-hero">
          <div className="sb-article-wrap">
            <div className="sb-article-kicker">
              <Link href="/resources/blog">Blog</Link> » {post.category}
            </div>
            <h1>{post.title}</h1>
            <p className="sb-article-dek">{post.description}</p>
            <div className="sb-article-byline">
              <span>
                By <Link href="#author">{author.name}</Link>
              </span>
              <span>
                Published <time dateTime={post.published}>{formatDate(post.published)}</time>
              </span>
              <span>
                Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </span>
              <span className="sb-reviewed">
                <span className="sb-check" aria-hidden="true">✓</span>
                Reviewed by <Link href="#author">SitesBrand Growth Strategy</Link>
              </span>
            </div>
            <div className="sb-article-hero-image">
              <Image
                src={primaryImage.src}
                alt={primaryImage.alt}
                width={1400}
                height={900}
                preload
                quality={60}
                unoptimized={primaryImage.src.endsWith(".svg") || primaryImage.src.startsWith("http")}
                sizes="(min-width: 1180px) 1120px, 100vw"
              />
            </div>
          </div>
        </header>

        <section className="sb-article-content-band">
          <div className="sb-article-wrap sb-article-grid">
            <aside className="sb-toc" aria-label="Article table of contents">
              <p>On this page</p>
              {post.sections.map((section, index) => (
                <a key={section.heading} href={`#${sectionId(index)}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.heading}
                </a>
              ))}
              <a href="#faqs">
                <span>{String(post.sections.length + 1).padStart(2, "0")}</span>
                Frequently asked questions
              </a>
            </aside>

            <article className="sb-article-column">
              <section className="sb-short-version">
                <h2>The short version</h2>
                <p>{post.intro}</p>
              </section>

              <div className="sb-article-content">
                {post.sections.map((section, index) => (
                  <section key={section.heading} id={sectionId(index)}>
                    <p className="sb-section-number">{String(index + 1).padStart(2, "0")}</p>
                    <h2>{section.heading}</h2>
                    {section.officialLinks ? (
                      <div className="sb-official-links" aria-label="Official tool links">
                        {section.officialLinks.map((link) => (
                          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label} official site
                          </a>
                        ))}
                      </div>
                    ) : null}
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>
                        <RichText text={paragraph} />
                      </p>
                    ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.table ? (
                    <div className="sb-article-table-wrap">
                      <table>
                        <thead>
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row.join("|")}>
                              {row.map((cell) => (
                                <td key={cell}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                  {section.image ? (
                    <figure className="sb-section-image">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        width={1400}
                        height={900}
                        quality={60}
                        unoptimized={section.image.src.startsWith("http") || section.image.src.endsWith(".svg")}
                        sizes="(min-width: 1180px) 820px, 100vw"
                      />
                      <figcaption>{section.image.alt}</figcaption>
                    </figure>
                  ) : null}
                  {index === 2 ? <ArticleCta variant="audit" /> : null}
                  </section>
                ))}

                <ArticleCta variant="strategy" />

                <section id="faqs">
                  <p className="sb-section-number">{String(post.sections.length + 1).padStart(2, "0")}</p>
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
                <SourcesList post={post} />
              </aside>

              <aside id="author" className="sb-author-box">
                <div className="sb-author-photo">
                  <Image src={author.image} alt={`${author.name}, SitesBrand author`} width={220} height={220} sizes="110px" />
                </div>
                <div>
                  <p className="sb-author-label">Written and reviewed for SitesBrand</p>
                  <h2>{author.name}</h2>
                  <h3>{author.role}</h3>
                  <p>{author.bio}</p>
                  <div className="sb-author-socials">
                    {author.sameAs.map((item) => (
                      <a key={item.href} href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </article>
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
