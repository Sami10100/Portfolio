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

type BlogPost = NonNullable<ReturnType<typeof getBlogPost>>;

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
      images: [{ url: post.image, width: 1400, height: 900, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
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
      image: `${siteConfig.siteUrl}${post.image}`,
      datePublished: post.updated,
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

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function sectionId(index: number) {
  return `section-${index + 1}`;
}

function TopicVisual({ post, index }: { post: BlogPost; index: number }) {
  const labels = [
    ["Intent", "Page", "Proof", "CTA"],
    ["Crawl", "Answer", "Entity", "Trust"],
    ["Query", "Content", "Schema", "Lead"],
  ];
  const selected = labels[index % labels.length];

  return (
    <figure className="sb-topic-visual">
      <svg viewBox="0 0 920 430" role="img" aria-label={`${post.category} article visual ${index + 1}`}>
        <defs>
          <linearGradient id={`visual-${post.slug}-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00e5ff" />
            <stop offset="1" stopColor="#5b5bf0" />
          </linearGradient>
        </defs>
        <rect width="920" height="430" rx="26" fill="#070819" />
        <g opacity=".18" stroke="#fff">
          <path d="M80 86h760M80 172h760M80 258h760M80 344h760" />
          <path d="M180 56v318M360 56v318M540 56v318M720 56v318" />
        </g>
        <text x="54" y="70" fill="#00e5ff" fontFamily="Inter, Arial" fontSize="18" fontWeight="800" letterSpacing="2">
          {post.category.toUpperCase()}
        </text>
        <text x="54" y="118" fill="#fff" fontFamily="Poppins, Arial" fontSize="42" fontWeight="800" letterSpacing="-1.5">
          {post.primaryKeyword}
        </text>
        <path d="M115 308C228 184 314 348 442 216C568 86 654 286 810 132" fill="none" stroke={`url(#visual-${post.slug}-${index})`} strokeWidth="14" strokeLinecap="round" />
        {selected.map((label, labelIndex) => (
          <g key={label} transform={`translate(${110 + labelIndex * 190} 296)`}>
            <circle cx="0" cy="0" r="24" fill={labelIndex % 2 ? "#5b5bf0" : "#00e5ff"} />
            <text x="-28" y="58" fill="#c6cbed" fontFamily="Inter, Arial" fontSize="18" fontWeight="800">
              {label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>{post.questions[index % post.questions.length]}</figcaption>
    </figure>
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

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const schemas = articleSchema(post);

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
                Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </span>
              <span className="sb-reviewed">
                <span className="sb-check" aria-hidden="true">✓</span>
                Reviewed by <Link href="#author">SitesBrand Growth Strategy</Link>
              </span>
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
              <div className="sb-article-featured">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={1400}
                  height={900}
                  priority
                  unoptimized={post.image.endsWith(".svg")}
                  sizes="(min-width: 1180px) 820px, 100vw"
                />
              </div>

              <section className="sb-short-version">
                <h2>The short version</h2>
                <p>{post.intro}</p>
              </section>

              <div className="sb-article-content">
                {post.sections.map((section, index) => (
                  <section key={section.heading} id={sectionId(index)}>
                    <p className="sb-section-number">{String(index + 1).padStart(2, "0")}</p>
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
                    {index < 3 ? <TopicVisual post={post} index={index} /> : null}
                    {index === 1 ? <ArticleCta variant="audit" /> : null}
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

              <aside id="author" className="sb-author-box">
                <div className="sb-author-photo">
                  <Image src={author.image} alt={author.name} width={220} height={220} loading="eager" unoptimized />
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
