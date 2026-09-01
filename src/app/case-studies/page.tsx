import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import "./case-studies.css";

export const metadata: Metadata = {
  title: "Real SEO, AEO, GEO & Web Development Case Studies",
  description: "Explore verified SitesBrand case studies across SEO recovery, AI search visibility, custom Astro development, and measurable organic growth.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Real Growth Case Studies | SitesBrand",
    description: "Real project stories backed by supplied Google Search Console and PageSpeed evidence.",
    url: "/case-studies",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.siteUrl}/case-studies#webpage`,
  name: "SitesBrand Case Studies",
  url: `${siteConfig.siteUrl}/case-studies`,
  description: "Verified SitesBrand project stories across SEO, AEO, GEO, recovery, design, and development.",
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.siteUrl}/case-studies/${study.slug}`,
      name: study.name,
    })),
  },
};

export default function CaseStudiesPage() {
  const featured = caseStudies.find((study) => study.featured) ?? caseStudies[0];
  const remaining = caseStudies.filter((study) => study.slug !== featured.slug);

  return (
    <div className="case-site-shell">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="case-collection-hero">
          <div className="case-page-wrap case-collection-grid">
            <div className="case-hero-copy">
              <p className="case-eyebrow">Real work. Verifiable evidence.</p>
              <h1>Case studies built around what the data can actually prove<span>.</span></h1>
              <p>Search recovery, AI visibility, custom development, and technical performance—shown through real client projects and supplied platform evidence, without invented testimonials or inflated outcomes.</p>
              <div className="case-actions">
                <Link href={`/case-studies/${featured.slug}`} className="case-button case-button-primary">Read the featured story <span aria-hidden="true">→</span></Link>
                <Link href="/free-audit" className="case-button case-button-secondary">Request a free audit</Link>
              </div>
            </div>
            <nav className="case-brand-index" aria-label="Case study brands">
              <span>Jump to a brand</span>
              {caseStudies.map((study, index) => (
                <Link href={`/case-studies/${study.slug}`} key={study.slug}>
                  <small>{String(index + 1).padStart(2, "0")}</small><strong>{study.name}</strong><i aria-hidden="true">↗</i>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="case-featured-section">
          <div className="case-page-wrap">
            <p className="case-eyebrow case-eyebrow-dark">Featured case study</p>
            <article className="case-featured-card" style={{ "--story-accent": featured.accent } as React.CSSProperties}>
              <div className="case-featured-copy">
                <div className="case-card-meta"><span>{featured.industry}</span><span>{featured.period}</span></div>
                <h2>{featured.headline}</h2><p>{featured.summary}</p>
                <div className="case-card-metrics">
                  {featured.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
                </div>
                <Link href={`/case-studies/${featured.slug}`} className="case-text-link">Read {featured.name} case study <span aria-hidden="true">→</span></Link>
              </div>
              <div className="case-featured-proof">
                <Image src={featured.evidence[0].src} alt={featured.evidence[0].alt} width={featured.evidence[0].width} height={featured.evidence[0].height} sizes="(max-width: 900px) 92vw, 48vw" priority />
                <span>Supplied platform evidence</span>
              </div>
            </article>
          </div>
        </section>

        <section className="case-library-section">
          <div className="case-page-wrap">
            <div className="case-section-heading">
              <div><p className="case-eyebrow case-eyebrow-dark">More client stories</p><h2>Different starting points. Measurable progress.</h2></div>
              <p>Each story separates verified platform metrics from context supplied by the client.</p>
            </div>
            <div className="case-library-grid">
              {remaining.map((study) => (
                <article className="case-library-card" key={study.slug} style={{ "--story-accent": study.accent } as React.CSSProperties}>
                  <div className="case-library-image"><Image src={study.evidence[0].src} alt={study.evidence[0].alt} width={study.evidence[0].width} height={study.evidence[0].height} sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 31vw" /></div>
                  <div className="case-library-copy">
                    <div className="case-card-meta"><span>{study.name}</span><span>{study.market}</span></div>
                    <h3>{study.headline}</h3><p>{study.summary}</p>
                    <div className="case-card-metrics case-card-metrics-compact">{study.metrics.slice(0, 2).map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
                    <Link href={`/case-studies/${study.slug}`} className="case-text-link">View the evidence <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-final-cta">
          <div className="case-page-wrap case-final-card">
            <div><p className="case-eyebrow">Your challenge is the starting point</p><h2>Let’s find the result worth measuring<span>.</span></h2><p>Share the website, the problem, and the data you already have. We will identify the clearest next move.</p></div>
            <div className="case-actions"><Link href="/free-audit" className="case-button case-button-primary">Get a free audit</Link><a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="case-button case-button-secondary">Book a strategy call</a></div>
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
