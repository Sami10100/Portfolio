import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import "../case-studies.css";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const path = `/case-studies/${study.slug}`;
  const primaryEvidence = study.evidence[0];

  return {
    title: `${study.name} Case Study — ${study.serviceLine}`,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${study.name} Case Study | SitesBrand`,
      description: study.summary,
      url: path,
      type: "article",
      images: [{
        url: `${siteConfig.siteUrl}${primaryEvidence.src}`,
        width: primaryEvidence.width,
        height: primaryEvidence.height,
        alt: primaryEvidence.alt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.name} Case Study | SitesBrand`,
      description: study.summary,
      images: [`${siteConfig.siteUrl}${primaryEvidence.src}`],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);
  const pageUrl = `${siteConfig.siteUrl}/case-studies/${study.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#case-study`,
        headline: `${study.name}: ${study.headline}`,
        description: study.summary,
        url: pageUrl,
        image: study.evidence.map((item) => `${siteConfig.siteUrl}${item.src}`),
        about: { "@type": "Organization", name: study.name, url: study.url },
        author: { "@id": `${siteConfig.siteUrl}/#organization` },
        publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
        mainEntityOfPage: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${siteConfig.siteUrl}/case-studies` },
          { "@type": "ListItem", position: 3, name: study.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="case-site-shell" style={{ "--story-accent": study.accent } as React.CSSProperties}>
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="case-detail-hero">
          <div className="case-page-wrap">
            <nav className="case-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/case-studies">Case Studies</Link><span>/</span><span>{study.name}</span>
            </nav>
            <div className="case-detail-hero-grid">
              <div>
                <p className="case-eyebrow">{study.eyebrow}</p>
                <h1>{study.headline}</h1>
                <p className="case-detail-summary">{study.summary}</p>
                <div className="case-actions">
                  <a className="case-button case-button-primary" href={study.url} target="_blank" rel="noopener noreferrer">Visit {study.name} <span aria-hidden="true">↗</span></a>
                  <Link className="case-button case-button-secondary" href="/free-audit">Discuss a similar project</Link>
                </div>
              </div>
              <aside className="case-project-facts">
                <div><span>Brand</span><strong>{study.name}</strong></div>
                <div><span>Market</span><strong>{study.market}</strong></div>
                <div><span>Industry</span><strong>{study.industry}</strong></div>
                <div><span>Engagement</span><strong>{study.serviceLine}</strong></div>
                <div><span>Evidence window</span><strong>{study.period}</strong></div>
              </aside>
            </div>
          </div>
        </section>

        <section className="case-metric-band">
          <div className="case-page-wrap case-detail-metrics">
            {study.metrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.context ? <small>{metric.context}</small> : null}</div>
            ))}
          </div>
        </section>

        <section className="case-story-section">
          <div className="case-page-wrap">
            <figure className="case-lead-evidence">
              <Image src={study.evidence[0].src} alt={study.evidence[0].alt} width={study.evidence[0].width} height={study.evidence[0].height} sizes="(max-width: 900px) 94vw, 1180px" priority />
              <figcaption><span>01</span>{study.evidence[0].caption}</figcaption>
            </figure>

            <div className="case-story-grid">
              <article><p className="case-eyebrow case-eyebrow-dark">The challenge</p><h2>What had to change.</h2><p>{study.challenge}</p></article>
              <article><p className="case-eyebrow case-eyebrow-dark">The approach</p><h2>One connected system.</h2><p>{study.approach}</p></article>
            </div>

            <div className="case-work-grid">
              <div><p className="case-eyebrow case-eyebrow-dark">What SitesBrand delivered</p><h2>The work behind the result.</h2></div>
              <ol>{study.work.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
            </div>

            <section className="case-outcome-card">
              <div><p className="case-eyebrow">The outcome</p><h2>Evidence before adjectives<span>.</span></h2></div>
              <p>{study.outcome}</p>
            </section>

            <section className="case-evidence-section">
              <div className="case-section-heading">
                <div><p className="case-eyebrow case-eyebrow-dark">Supplied evidence</p><h2>What the platforms report.</h2></div>
                <p>Images are displayed as supplied and described without adding outcomes they do not verify.</p>
              </div>
              <div className={`case-evidence-grid ${study.evidence.length === 1 ? "case-evidence-grid-single" : ""}`}>
                {study.evidence.map((evidence, index) => (
                  <figure key={evidence.src}>
                    <div><Image src={evidence.src} alt={evidence.alt} width={evidence.width} height={evidence.height} sizes="(max-width: 760px) 92vw, 48vw" /></div>
                    <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{evidence.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="case-evidence-disclaimer"><strong>Evidence note:</strong> {study.evidenceNote}</p>
            </section>
          </div>
        </section>

        <section className="case-related-section">
          <div className="case-page-wrap">
            <div className="case-section-heading"><div><p className="case-eyebrow case-eyebrow-dark">Explore more</p><h2>More real project stories.</h2></div><Link href="/case-studies" className="case-text-link">View all case studies <span>→</span></Link></div>
            <div className="case-related-grid">
              {related.map((item) => (
                <Link href={`/case-studies/${item.slug}`} key={item.slug} style={{ "--related-accent": item.accent } as React.CSSProperties}>
                  <span>{item.serviceLine}</span><strong>{item.name}</strong><p>{item.headline}</p><i>Read story →</i>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
