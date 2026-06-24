"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/config/site";

type Service = {
  id: string;
  title: string;
  short: string;
  audience: string;
  image: string;
  accent: "cyan" | "purple" | "orange" | "teal";
  href: string;
  includes: string[];
  outcomes: string[];
  modalCopy: string;
};

const asset = (name: string) => `/assets/services/${name}.webp`;
const cardAsset = (name: string) => `/assets/services/cards/${name}.webp`;

const services: Service[] = [
  {
    id: "ai-search",
    title: "AI Search Optimization",
    short: "Get discovered in AI answers, Google AI Overviews, and modern search experiences.",
    audience: "For brands that want visibility beyond traditional Google rankings.",
    image: cardAsset("ai-search"),
    accent: "cyan",
    href: "/services/ai-search-optimization",
    includes: ["AEO strategy", "GEO optimization", "LLM SEO", "Google AI Overview readiness", "Schema and entity mapping", "AI-friendly content structure"],
    outcomes: ["Clearer entity signals", "Answer-ready service pages", "Stronger trust and citation paths", "Search visibility built for humans and AI"],
    modalCopy:
      "We structure your content, schema, entities, proof, and topical authority so search engines and AI answer systems can understand what you do, who you help, and why your brand should be recommended.",
  },
  {
    id: "seo-content",
    title: "SEO & Content Strategy",
    short: "Rank higher with intent-driven content, technical SEO, and organic growth systems.",
    audience: "For brands that want qualified organic traffic and stronger authority.",
    image: cardAsset("seo-content"),
    accent: "purple",
    href: "/services/seo-growth-engine",
    includes: ["Technical SEO audit", "Keyword and intent strategy", "Content planning", "On-page SEO", "Internal linking", "Authority building"],
    outcomes: ["Better crawl and index clarity", "Content mapped to buyer intent", "More useful organic landing pages", "Organic growth tied to conversion"],
    modalCopy:
      "We connect technical SEO, search intent, content depth, internal linking, and credibility signals into one practical organic growth system.",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    short: "Automate workflows, CRM tasks, lead handling, reporting, and repetitive team processes.",
    audience: "For teams that want to save time and scale smarter.",
    image: cardAsset("ai-automation"),
    accent: "cyan",
    href: "/services/web-automation-system",
    includes: ["CRM automation", "Lead qualification flows", "AI chatbot systems", "Workflow automation", "Reporting dashboards", "Process optimization"],
    outcomes: ["Faster response times", "Less manual follow-up", "Cleaner lead routing", "Operational time saved every month"],
    modalCopy:
      "We identify repetitive work, then connect tools, forms, CRM stages, reporting, and AI-assisted workflows so your team spends less time moving data and more time closing opportunities.",
  },
  {
    id: "web-dev",
    title: "Web Development",
    short: "Build fast, modern, secure, and conversion-focused websites that scale.",
    audience: "For businesses that need fast, modern, conversion-focused websites.",
    image: cardAsset("web-dev"),
    accent: "teal",
    href: "/services/web-automation-system",
    includes: ["Custom websites", "Landing pages", "WordPress development", "Performance optimization", "Mobile-first development", "Conversion-focused structure"],
    outcomes: ["Faster page experiences", "Clearer service architecture", "Better CTA flow", "Web systems that support SEO and analytics"],
    modalCopy:
      "We build websites as growth infrastructure: fast, searchable, persuasive, measurable, and easy for users to navigate from first impression to qualified action.",
  },
  {
    id: "uiux-brand",
    title: "UI/UX & Brand Design",
    short: "Design digital experiences that build trust, guide users, and improve conversions.",
    audience: "For brands that want users to understand, trust, and act faster.",
    image: cardAsset("uiux-brand"),
    accent: "purple",
    href: "/services/web-automation-system",
    includes: ["Website UI design", "Landing page design", "Wireframing", "Figma prototyping", "Brand identity", "Social media design"],
    outcomes: ["Lower user doubt", "Cleaner visual hierarchy", "More confident decisions", "Brand systems that feel premium and usable"],
    modalCopy:
      "We use psychology-led design, visual hierarchy, UX structure, and brand consistency to make your offer easier to understand and easier to choose.",
  },
  {
    id: "sales-growth",
    title: "Sales & Lead Generation",
    short: "Create outreach systems that attract, qualify, and convert high-intent prospects.",
    audience: "For businesses that want stronger pipelines and qualified leads.",
    image: cardAsset("sales-growth"),
    accent: "orange",
    href: "/contact#audit",
    includes: ["B2B lead generation", "Cold outreach", "LinkedIn outreach", "CRM management", "Lead qualification", "Sales pipeline support"],
    outcomes: ["Sharper prospect targeting", "Better qualification", "Cleaner pipeline visibility", "Sales activity connected to your website"],
    modalCopy:
      "We build lead-generation systems that combine positioning, targeting, outreach, follow-up, and CRM hygiene so your pipeline becomes easier to manage and improve.",
  },
];

const processSteps = [
  ["Discover", "We understand your audience, business model, competitors, and current search presence.", asset("18")],
  ["Structure", "We map positioning, content architecture, schema opportunities, and conversion paths.", asset("7")],
  ["Design", "We create pages and experiences that build trust before asking users to act.", asset("16")],
  ["Automate", "We connect forms, CRM, reporting, follow-up, and repetitive workflows.", asset("5")],
  ["Optimize", "We improve visibility, conversions, and performance using real behavior data.", asset("20")],
] as const;

const problems = [
  ["Your website looks good but does not convert.", "We improve messaging, structure, UX, trust signals, and conversion flow."],
  ["Your content exists but does not rank.", "We build SEO and AI-search-friendly content architecture around buyer intent."],
  ["Your team wastes time on manual tasks.", "We automate workflows, reporting, CRM, and lead handling."],
  ["Buyers visit but do not trust fast enough.", "We use psychology-led design and clear positioning to reduce doubt."],
  ["Your brand is missing from AI answers.", "We optimize for AEO, GEO, LLM SEO, entity clarity, and AI discovery."],
] as const;

const whyCards = [
  ["Psychology-Led Strategy", "We start with human behavior, decision friction, and the questions buyers need answered."],
  ["AI Search Readiness", "Your pages are structured for Google, AI Overviews, ChatGPT, Gemini, and answer engines."],
  ["Conversion-Focused Design", "Every section earns trust, clarifies value, and guides users toward the next step."],
  ["Scalable Technology Systems", "We build fast, measurable systems that can connect with automation and reporting."],
] as const;

const trustPoints = [
  ["AI Search Ready", "/assets/services/trust/22.webp"],
  ["Conversion Focused", "/assets/services/trust/23.webp"],
  ["Automation Powered", "/assets/services/trust/24.webp"],
] as const;

const brandLogos = [
  ["Whirlpool", "/assets/services/logos/whirlpool.webp"],
  ["Herbalife", "/assets/services/logos/herbalife.webp"],
  ["Stripe", "/assets/services/logos/stripe.webp"],
  ["HubSpot", "/assets/services/logos/hubspot.webp"],
  ["Meta", "/assets/services/logos/meta.webp"],
  ["Google", "/assets/services/logos/google.webp"],
  ["AWS", "/assets/services/logos/aws.webp"],
  ["Shopify", "/assets/services/logos/shopify.webp"],
  ["Slack", "/assets/services/logos/slack.webp"],
  ["ClickUp", "/assets/services/logos/clickup.webp"],
  ["Zoom", "/assets/services/logos/zoom.webp"],
  ["Honeywell", "/assets/services/logos/honeywell.webp"],
] as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="sb-services-arrow-icon">
      <path d="M4 10h10.5M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="sb-services-search-icon">
      <circle cx="8.8" cy="8.8" r="5.2" />
      <path d="m12.7 12.7 3.8 3.8" />
    </svg>
  );
}

function CheckDot() {
  return <span className="sb-services-check" aria-hidden="true" />;
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="sb-services-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        aria-labelledby="service-modal-title"
        aria-modal="true"
        className="sb-services-modal"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button aria-label="Close service details" className="sb-services-modal-close" type="button" onClick={onClose}>
          <span />
          <span />
        </button>
        <div className="sb-services-modal-grid">
          <div className="sb-services-modal-visual">
            <Image src={service.image} alt="" width={520} height={520} />
          </div>
          <div>
            <p className="sb-services-kicker">Service Detail</p>
            <h2 id="service-modal-title">{service.title}</h2>
            <p className="sb-services-modal-lead">{service.modalCopy}</p>
            <div className="sb-services-modal-columns">
              <div>
                <h3>Includes</h3>
                <ul>
                  {service.includes.map((item) => (
                    <li key={item}>
                      <CheckDot />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Outcomes</h3>
                <ul>
                  {service.outcomes.map((item) => (
                    <li key={item}>
                      <CheckDot />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="sb-services-modal-actions">
              <Link className="sb-services-btn sb-services-btn-primary" href="/contact#audit">
                Get a Free Audit
                <ArrowIcon />
              </Link>
              <Link className="sb-services-btn sb-services-btn-ghost" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const activeService = useMemo(() => services.find((service) => service.id === activeServiceId) ?? null, [activeServiceId]);

  return (
    <main className="sb-services-page">
      <section className="sb-services-hero" aria-labelledby="services-hero-title">
        <div className="sb-services-hero-copy">
          <span className="sb-services-pill">Services</span>
          <h1 id="services-hero-title">
            Digital Growth Systems Built for <span>Search, AI, and Conversion.</span>
          </h1>
          <p>
            We combine psychology, SEO, AI search optimization, automation, design, and development to help ambitious brands get found, trusted, and chosen.
          </p>
          <div className="sb-services-actions">
            <Link className="sb-services-btn sb-services-btn-primary" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
              <ArrowIcon />
            </Link>
            <Link className="sb-services-btn sb-services-btn-dark" href="/contact#audit">
              Get a Free Audit
              <SearchIcon />
            </Link>
          </div>
          <div className="sb-services-trust-points" aria-label="Service trust points">
            {trustPoints.map(([point, image]) => (
              <div key={point}>
                <span>
                  <Image src={image} alt="" width={112} height={112} />
                </span>
                <strong>{point}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="sb-services-hero-art" aria-hidden="true">
          <Image className="sb-services-hero-orbit" src="/assets/services/hero-growth-system.webp" alt="" width={1080} height={1080} priority />
        </div>
      </section>

      <section id="trusted-logos" className="sb-services-brand-strip" aria-label="Trusted brands">
        <p>Trusted by ambitious brands worldwide</p>
        <div className="sb-services-logo-marquee" aria-hidden="true">
          <div className="sb-services-logo-track">
            {[0, 1].map((group) => (
              <div key={group} className="sb-services-logo-group">
                {brandLogos.map(([brand, image]) => (
                  <span key={`${brand}-${group}`} className="sb-services-logo-item">
                    <Image src={image} alt="" width={220} height={84} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sb-services-flagship" aria-labelledby="flagship-title">
        <div className="sb-services-flagship-copy">
          <span className="sb-services-pill">Flagship Service</span>
          <h2 id="flagship-title">AI Search Optimization</h2>
          <p className="sb-services-section-lead">Be the brand AI can understand, trust, and recommend.</p>
          <p>
            Search is changing. Buyers are no longer only using Google. They ask AI tools, answer engines, and AI-powered search experiences before making decisions.
          </p>
          <p>
            SitesBrand helps your website become easier for search engines, AI Overviews, and LLMs to understand, structure, cite, and trust.
          </p>
          <ul className="sb-services-feature-list">
            {["AEO - Answer Engine Optimization", "GEO - Generative Engine Optimization", "LLM SEO and entity clarity", "Google AI Overview visibility", "Schema markup and proof signals", "AI-ready content that converts"].map((point) => (
              <li key={point}>
                <CheckDot />
                {point}
              </li>
            ))}
          </ul>
          <button className="sb-services-btn sb-services-btn-primary" type="button" onClick={() => setActiveServiceId("ai-search")}>
            Explore AI Search Optimization
            <ArrowIcon />
          </button>
        </div>
        <div className="sb-services-flagship-art">
          <Image src={asset("15")} alt="AI search optimization dashboard with magnifier and recommendation card" width={1188} height={1188} />
        </div>
      </section>

      <section className="sb-services-core" aria-labelledby="core-services-title">
        <div className="sb-services-section-heading">
          <span className="sb-services-pill">Our Core Services</span>
          <h2 id="core-services-title">Everything You Need for <span>Modern Digital Growth.</span></h2>
          <p>Each service supports visibility, trust, conversion, and scalable growth. Click any arrow to see what is included.</p>
        </div>
        <div className="sb-services-grid">
          {services.map((service) => (
            <article key={service.id} className={`sb-services-card sb-services-card-${service.accent}`}>
              <Image src={service.image} alt="" width={420} height={420} loading="eager" unoptimized />
              <div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </div>
              <button aria-label={`View ${service.title} details`} type="button" onClick={() => setActiveServiceId(service.id)}>
                <ArrowIcon />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="sb-services-process" aria-labelledby="process-title">
        <div className="sb-services-process-copy">
          <span className="sb-services-pill">How It Works</span>
          <h2 id="process-title">One System. <span>Multiple Growth Layers.</span></h2>
          <p>We do not treat SEO, design, development, and automation as separate tasks. We connect them into one growth engine.</p>
          <Link className="sb-services-btn sb-services-btn-dark" href="/contact#audit">
            See How We Work
            <ArrowIcon />
          </Link>
        </div>
        <div className="sb-services-process-steps">
          {processSteps.map(([title, text, image], index) => (
            <article key={title}>
              <Image src={image} alt="" width={240} height={240} loading="eager" unoptimized />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sb-services-problems" aria-labelledby="problems-title">
        <div className="sb-services-section-heading">
          <span className="sb-services-pill">Problems We Solve</span>
          <h2 id="problems-title">Your Growth Problem Is Usually <span>Not One Thing.</span></h2>
          <p>Most brands do not struggle because they lack effort. They struggle because their digital system is disconnected.</p>
        </div>
        <div className="sb-services-problem-grid">
          {problems.map(([problem, solution]) => (
            <article key={problem}>
              <p>Problem</p>
              <h3>{problem}</h3>
              <p>Solution</p>
              <strong>{solution}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="sb-services-detail-blocks" aria-labelledby="details-title">
        <div className="sb-services-section-heading">
          <span className="sb-services-pill">Service Depth</span>
          <h2 id="details-title">Built for AEO, GEO, SEO, E-E-A-T, and <span>Real Buyer Confidence.</span></h2>
          <p>Every service block is structured to improve findability, credibility, usability, and qualified action.</p>
        </div>
        <div className="sb-services-detail-list">
          {services.map((service) => (
            <article key={service.id}>
              <div>
                <Image src={service.image} alt="" width={190} height={190} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.audience}</p>
                </div>
              </div>
              <ul>
                {service.includes.map((item) => (
                  <li key={item}>
                    <CheckDot />
                    {item}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => setActiveServiceId(service.id)}>
                View full detail
                <ArrowIcon />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="sb-services-why" aria-labelledby="why-title">
        <div className="sb-services-why-copy">
          <span className="sb-services-pill">Why Choose SitesBrand</span>
          <h2 id="why-title">Built Around Human Behavior and <span>Business Outcomes.</span></h2>
          <p>We help brands move from attention to trust, and from trust to measurable growth.</p>
        </div>
        <div className="sb-services-why-grid">
          {whyCards.map(([title, text], index) => (
            <article key={title}>
              <Image src={asset(["4", "15", "17", "16"][index])} alt="" width={260} height={260} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sb-services-final" aria-labelledby="final-title">
        <div>
          <h2 id="final-title">Ready to Build a Smarter Growth System?</h2>
          <p>Let us turn your website, content, automation, and search visibility into one connected growth engine.</p>
          <div className="sb-services-actions">
            <Link className="sb-services-btn sb-services-btn-primary" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
              <ArrowIcon />
            </Link>
            <Link className="sb-services-btn sb-services-btn-dark" href="/contact#audit">
              Get a Free Audit
              <SearchIcon />
            </Link>
          </div>
        </div>
        <Image src={asset("20")} alt="Growth dashboard with launch visual and rising chart" width={1188} height={1188} />
      </section>

      {activeService ? <ServiceModal service={activeService} onClose={() => setActiveServiceId(null)} /> : null}
    </main>
  );
}
