import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type DetailPair = {
  term: string;
  description: string;
};

type DetailItem = {
  title: string;
  text: string;
};

type ProcessStep = {
  title: string;
  text: string;
};

type TableRow = {
  signal: string;
  before: string;
  after: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type ServiceDetailData = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  supportImage: string;
  supportImageAlt: string;
  ctaImage: string;
  ctaImageAlt: string;
  proof: string[];
  outcomes: DetailItem[];
  includes: DetailItem[];
  process: ProcessStep[];
  definitions: DetailPair[];
  comparison: TableRow[];
  faqs: Faq[];
  ctaTitle: string;
  ctaText: string;
};

export const serviceDetailPages = {
  "ai-search-optimization": {
    slug: "ai-search-optimization",
    eyebrow: "AI Search Optimization",
    title: "AI Search Optimization for",
    titleAccent: "Answer Engines",
    description:
      "Make your brand easier for Google AI Overviews, ChatGPT, Gemini, Perplexity, and traditional search systems to understand, trust, and recommend.",
    metaTitle: "AI Search Optimization Service",
    metaDescription:
      "AI Search Optimization for AEO, GEO, LLM SEO, schema, entity clarity, and answer-ready service pages built for modern discovery.",
    heroImage: "/assets/services/15.webp",
    heroImageAlt: "3D AI search dashboard with magnifier and search interface",
    supportImage: "/assets/services/cards/ai-search.webp",
    supportImageAlt: "3D AI search card showing modern discovery signals",
    ctaImage: "/assets/services/19.webp",
    ctaImageAlt: "3D rocket and growth dashboard for AI search growth",
    proof: ["AEO and GEO strategy", "Entity and schema mapping", "Answer-ready content", "AI visibility roadmap"],
    outcomes: [
      {
        title: "Clearer brand entities",
        text: "Your services, locations, proof, and expertise become easier for search systems to connect.",
      },
      {
        title: "Stronger answer eligibility",
        text: "Pages are structured around concise answers, definitions, comparisons, FAQs, and proof signals.",
      },
      {
        title: "Better citation paths",
        text: "Trust signals, authoritativeness, and internal links support how AI systems interpret the brand.",
      },
    ],
    includes: [
      { title: "AEO strategy", text: "Buyer questions are mapped into answer-first content modules." },
      { title: "GEO optimization", text: "Content is shaped for generative discovery and AI summarization." },
      { title: "LLM SEO", text: "Entity, intent, and passage clarity are improved for assistant-style answers." },
      { title: "Structured data", text: "Service, FAQ, breadcrumb, organization, and proof schema are planned." },
      { title: "Content architecture", text: "Service pages are organized so humans and crawlers find the same answer quickly." },
      { title: "Measurement plan", text: "Queries, pages, leads, and AI-search opportunities are tracked with priorities." },
    ],
    process: [
      { title: "Audit", text: "Review crawlability, index signals, schema, existing answers, and competitor coverage." },
      { title: "Map", text: "Define buyer questions, service entities, proof gaps, and topical clusters." },
      { title: "Build", text: "Rewrite sections, add structured data, tighten links, and publish answer-ready assets." },
      { title: "Improve", text: "Monitor discovery patterns and update pages as AI and search results change." },
    ],
    definitions: [
      {
        term: "AEO",
        description: "Answer Engine Optimization makes pages easier to quote, summarize, and select for direct answers.",
      },
      {
        term: "GEO",
        description: "Generative Engine Optimization improves how AI systems understand and explain your offer.",
      },
      {
        term: "LLM SEO",
        description: "LLM SEO aligns content, entities, and proof so language models can represent the brand accurately.",
      },
    ],
    comparison: [
      {
        signal: "Service clarity",
        before: "Broad copy with unclear buyer fit",
        after: "Specific offer, audience, outcome, and proof",
      },
      {
        signal: "Answer format",
        before: "Long paragraphs only",
        after: "Definitions, FAQs, lists, tables, and concise summaries",
      },
      {
        signal: "Trust evidence",
        before: "Proof hidden or disconnected",
        after: "Visible credentials, examples, schema, and internal references",
      },
    ],
    faqs: [
      {
        question: "What is AI Search Optimization?",
        answer:
          "AI Search Optimization helps a website become easier for AI answer engines and search systems to understand, summarize, cite, and recommend.",
      },
      {
        question: "Is AI Search Optimization different from SEO?",
        answer:
          "Yes. SEO is still the foundation, but AI Search Optimization adds entity clarity, answer formatting, structured data, and citation-ready proof.",
      },
      {
        question: "Which platforms does this help with?",
        answer:
          "It supports visibility work for Google AI Overviews, ChatGPT, Gemini, Perplexity, and traditional organic search.",
      },
    ],
    ctaTitle: "Ready to make your site answer-engine friendly?",
    ctaText: "We can audit your current visibility and turn the highest-impact fixes into a practical AI-search roadmap.",
  },
  "seo-growth-engine": {
    slug: "seo-growth-engine",
    eyebrow: "SEO Growth Engine",
    title: "SEO Systems Built for",
    titleAccent: "Qualified Demand",
    description:
      "Build a technical and content system that helps buyers find, understand, trust, and choose your brand through organic search.",
    metaTitle: "SEO Growth Engine Service",
    metaDescription:
      "SEO growth systems for technical SEO, search intent, content strategy, internal links, schema, and organic conversion.",
    heroImage: "/assets/services/cards/seo-content.webp",
    heroImageAlt: "3D SEO content dashboard with search and growth elements",
    supportImage: "/assets/services/19.webp",
    supportImageAlt: "3D rocket and analytics dashboard for SEO growth",
    ctaImage: "/assets/services/20.webp",
    ctaImageAlt: "3D trust shield and checklist for SEO quality control",
    proof: ["Technical SEO cleanup", "Keyword and intent map", "Content growth plan", "Conversion tracking"],
    outcomes: [
      {
        title: "Cleaner crawl and index signals",
        text: "Search engines get clearer metadata, canonical, sitemap, linking, and technical quality signals.",
      },
      {
        title: "Content mapped to intent",
        text: "Pages and resources match what buyers are actually searching before they contact a provider.",
      },
      {
        title: "Organic growth tied to leads",
        text: "SEO decisions connect to calls, form submissions, demo requests, and real pipeline movement.",
      },
    ],
    includes: [
      { title: "Technical audit", text: "Crawl, indexability, metadata, redirects, sitemap, robots, and page health review." },
      { title: "Intent strategy", text: "Keyword clusters are mapped to service pages, resources, and buyer stages." },
      { title: "On-page SEO", text: "Titles, headings, internal links, copy depth, and answer modules are improved." },
      { title: "Content planning", text: "A practical roadmap prioritizes pages with demand, relevance, and conversion value." },
      { title: "Authority signals", text: "Proof, case studies, local signals, and backlinks are organized into a growth plan." },
      { title: "Reporting", text: "Ranking, traffic, lead, and conversion insights are translated into next actions." },
    ],
    process: [
      { title: "Diagnose", text: "Find technical, content, and authority blockers using crawl and report evidence." },
      { title: "Prioritize", text: "Rank fixes by impact, speed, confidence, and connection to revenue pages." },
      { title: "Publish", text: "Improve existing pages and create new assets around buyer intent." },
      { title: "Compound", text: "Use data to refine links, content depth, CTAs, and authority building." },
    ],
    definitions: [
      {
        term: "Technical SEO",
        description: "The crawl, index, metadata, performance, and site-architecture work that helps search engines access pages.",
      },
      {
        term: "Search intent",
        description: "The reason behind a query, such as researching, comparing, buying, or solving a specific problem.",
      },
      {
        term: "Organic conversion",
        description: "A visitor action from unpaid search, such as booking a call, submitting a form, or starting a chat.",
      },
    ],
    comparison: [
      {
        signal: "Technical health",
        before: "Pages compete, duplicate, or lack crawl clarity",
        after: "Canonical, sitemap, metadata, and link signals align",
      },
      {
        signal: "Content coverage",
        before: "Pages target broad terms without depth",
        after: "Service and resource pages answer complete buyer questions",
      },
      {
        signal: "Business impact",
        before: "Traffic reported without next steps",
        after: "SEO priorities tied to leads, calls, and qualified demand",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take?",
        answer:
          "Technical improvements can help quickly, while meaningful organic growth usually compounds over several months depending on competition, site health, and content depth.",
      },
      {
        question: "Do you only write content?",
        answer:
          "No. The growth engine combines technical SEO, content strategy, internal linking, schema, proof, reporting, and conversion improvements.",
      },
      {
        question: "Can this work with AI Search Optimization?",
        answer:
          "Yes. Strong SEO foundations make AI-search work more effective because search systems need crawlable, credible, and well-structured content.",
      },
    ],
    ctaTitle: "Need SEO fixes that actually move demand?",
    ctaText: "We can turn your audit issues into a prioritized roadmap for rankings, content, and conversion.",
  },
  "web-automation-system": {
    slug: "web-automation-system",
    eyebrow: "Web + Automation System",
    title: "Web and Automation Systems",
    titleAccent: "Built to Convert",
    description:
      "Launch a fast, conversion-focused website connected to forms, CRM workflows, reporting, and AI-assisted follow-up.",
    metaTitle: "Web Automation System Service",
    metaDescription:
      "Conversion-focused websites, landing pages, AI automations, CRM flows, dashboards, and follow-up systems built by SitesBrand.",
    heroImage: "/assets/services/hero-growth-system.webp",
    heroImageAlt: "3D digital growth system with connected automation elements",
    supportImage: "/assets/services/cards/ai-automation.webp",
    supportImageAlt: "3D automation dashboard with workflow elements",
    ctaImage: "/assets/services/cards/web-dev.webp",
    ctaImageAlt: "3D web development interface for conversion-focused sites",
    proof: ["Fast websites", "CRM-ready forms", "AI-assisted workflows", "Conversion dashboards"],
    outcomes: [
      {
        title: "A website that explains fast",
        text: "Visitors understand the offer, proof, and next action without digging through clutter.",
      },
      {
        title: "Less manual lead handling",
        text: "Forms, chat, routing, follow-up, and reporting connect so your team spends less time moving data.",
      },
      {
        title: "A measurable conversion path",
        text: "Events and dashboards show which pages, CTAs, and sources create qualified opportunities.",
      },
    ],
    includes: [
      { title: "Website builds", text: "Modern service sites, landing pages, and resource pages with responsive UI." },
      { title: "UI/UX design", text: "Clear hierarchy, premium visuals, and journeys built around buyer confidence." },
      { title: "Lead capture", text: "Forms, CTAs, booking links, and chat handoff designed for qualified inquiries." },
      { title: "CRM workflows", text: "Lead routing, stage updates, notifications, and follow-up triggers." },
      { title: "AI automation", text: "Assistant-style workflows for qualification, summaries, reporting, and repetitive tasks." },
      { title: "Analytics", text: "Conversion events and dashboards that make performance easier to improve." },
    ],
    process: [
      { title: "Map", text: "Document the offer, audience, lead journey, tool stack, and operational gaps." },
      { title: "Design", text: "Build a clean page system with strong CTAs, proof, and conversion structure." },
      { title: "Connect", text: "Integrate forms, booking, CRM, email, WhatsApp, automation, and reporting." },
      { title: "Optimize", text: "Improve speed, clarity, event tracking, and workflows after launch." },
    ],
    definitions: [
      {
        term: "Conversion system",
        description: "A website structure that guides visitors from problem awareness to a measurable action.",
      },
      {
        term: "Workflow automation",
        description: "Rules and integrations that move lead data, trigger follow-up, and reduce repetitive admin tasks.",
      },
      {
        term: "AI-assisted follow-up",
        description: "AI-supported summaries, qualification, messages, and routing that help teams respond faster.",
      },
    ],
    comparison: [
      {
        signal: "Website role",
        before: "Static brochure with scattered CTAs",
        after: "Clear conversion path with analytics and lead capture",
      },
      {
        signal: "Lead handoff",
        before: "Manual copy-paste between tools",
        after: "Automated routing, notifications, and CRM updates",
      },
      {
        signal: "Optimization",
        before: "Little visibility into what works",
        after: "Tracked events, dashboards, and improvement priorities",
      },
    ],
    faqs: [
      {
        question: "Can you build the website and automation together?",
        answer:
          "Yes. That is the point of this service: the website, lead capture, CRM handoff, follow-up, and reporting are planned as one system.",
      },
      {
        question: "Which tools can be connected?",
        answer:
          "The stack depends on your business, but common options include forms, Calendly, WhatsApp, email, HubSpot, ClickUp, Slack, analytics, and custom APIs.",
      },
      {
        question: "Is this only for new websites?",
        answer:
          "No. Existing sites can be improved with landing pages, better CTAs, analytics, CRM flows, and automation layers.",
      },
    ],
    ctaTitle: "Want the website and workflow to work as one?",
    ctaText: "We can map your current lead journey and show what to build, connect, and automate first.",
  },
} satisfies Record<string, ServiceDetailData>;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="sb-detail-icon">
      <path d="M4 10h10.5M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="sb-detail-check-icon">
      <path d="m4.5 10.4 3.3 3.2 7.7-8.1" />
    </svg>
  );
}

export function buildServiceDetailSchemas(page: ServiceDetailData) {
  const url = `${siteConfig.siteUrl}/services/${page.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${page.title} ${page.titleAccent}`,
      description: page.description,
      url,
      image: `${siteConfig.siteUrl}${page.heroImage}`,
      serviceType: page.eyebrow,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        email: siteConfig.email,
        telephone: siteConfig.phone,
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${page.eyebrow} deliverables`,
        itemListElement: page.includes.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.title,
            description: item.text,
          },
        })),
      },
      dateModified: "2026-06-25",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.siteUrl}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.eyebrow,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export function ServiceDetailPage({ page }: { page: ServiceDetailData }) {
  return (
    <main className="sb-detail-page">
      <section className="sb-detail-hero" aria-labelledby="service-detail-title">
        <div className="sb-detail-hero-copy">
          <nav className="sb-detail-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{page.eyebrow}</span>
          </nav>
          <span className="sb-detail-pill">{page.eyebrow}</span>
          <h1 id="service-detail-title">
            {page.title} <span>{page.titleAccent}</span>
          </h1>
          <p>{page.description}</p>
          <div className="sb-detail-actions">
            <Link className="sb-detail-btn sb-detail-btn-primary" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
              <ArrowIcon />
            </Link>
            <Link className="sb-detail-btn sb-detail-btn-ghost" href="/contact#audit">
              Get a Free Audit
            </Link>
          </div>
          <ul className="sb-detail-proof" aria-label={`${page.eyebrow} proof points`}>
            {page.proof.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="sb-detail-hero-visual">
          <Image src={page.heroImage} alt={page.heroImageAlt} width={1188} height={1188} priority sizes="(max-width: 900px) 92vw, 48vw" />
        </div>
      </section>

      <section className="sb-detail-outcomes" aria-labelledby="service-outcomes-title">
        <div className="sb-detail-section-head">
          <span className="sb-detail-kicker">Outcomes</span>
          <h2 id="service-outcomes-title">What this fixes first</h2>
          <p>Each priority is chosen for clarity, trust, and conversion impact.</p>
        </div>
        <div className="sb-detail-outcome-grid">
          {page.outcomes.map((item) => (
            <article className="sb-detail-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sb-detail-split" aria-labelledby="service-includes-title">
        <div className="sb-detail-split-visual">
          <Image src={page.supportImage} alt={page.supportImageAlt} width={720} height={620} sizes="(max-width: 900px) 92vw, 42vw" />
        </div>
        <div className="sb-detail-split-copy">
          <span className="sb-detail-kicker">Scope</span>
          <h2 id="service-includes-title">What is included</h2>
          <div className="sb-detail-include-grid">
            {page.includes.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sb-detail-process" aria-labelledby="service-process-title">
        <div className="sb-detail-section-head">
          <span className="sb-detail-kicker">Process</span>
          <h2 id="service-process-title">How we move from audit to growth</h2>
        </div>
        <ol className="sb-detail-process-list">
          {page.process.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sb-detail-ai" aria-labelledby="service-ai-title">
        <div>
          <span className="sb-detail-kicker">AI-Friendly Structure</span>
          <h2 id="service-ai-title">Built for people, crawlers, and answer systems</h2>
          <p>
            Last refined on <time dateTime="2026-06-25">June 25, 2026</time>. The page structure uses definitions, comparisons, FAQs, service schema,
            and clear internal actions so the offer is easier to understand.
          </p>
          <dl className="sb-detail-definitions">
            {page.definitions.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="sb-detail-table-wrap">
          <table className="sb-detail-table">
            <caption>Priority improvements for {page.eyebrow}</caption>
            <thead>
              <tr>
                <th scope="col">Signal</th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
              </tr>
            </thead>
            <tbody>
              {page.comparison.map((row) => (
                <tr key={row.signal}>
                  <th scope="row">{row.signal}</th>
                  <td>{row.before}</td>
                  <td>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="sb-detail-faq" aria-labelledby="service-faq-title">
        <div className="sb-detail-section-head">
          <span className="sb-detail-kicker">FAQ</span>
          <h2 id="service-faq-title">Common questions</h2>
        </div>
        <div className="sb-detail-faq-list">
          {page.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sb-detail-cta" aria-labelledby="service-cta-title">
        <div>
          <span className="sb-detail-kicker">Next Step</span>
          <h2 id="service-cta-title">{page.ctaTitle}</h2>
          <p>{page.ctaText}</p>
          <div className="sb-detail-actions">
            <Link className="sb-detail-btn sb-detail-btn-light" href="/contact#audit">
              Start With a Free Audit
              <ArrowIcon />
            </Link>
            <Link className="sb-detail-btn sb-detail-btn-dark" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Message SitesBrand
            </Link>
          </div>
        </div>
        <Image src={page.ctaImage} alt={page.ctaImageAlt} width={1188} height={1188} sizes="(max-width: 900px) 80vw, 32vw" />
      </section>
    </main>
  );
}
