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
    id: "search-growth",
    title: "Search Growth & AI Visibility",
    short: "Build technical SEO, content authority, entity clarity, and AI-search readiness as one connected visibility system.",
    audience: "For brands that want qualified visibility across Google and AI-driven discovery.",
    image: cardAsset("seo-content"),
    accent: "cyan",
    href: "/services/seo-growth-engine",
    includes: ["Technical SEO and architecture", "Content systems and topical authority", "Structured data and entity clarity", "AEO and GEO readiness", "Internal linking", "Implementation QA"],
    outcomes: ["Better crawl and index clarity", "Answer-ready service pages", "Stronger trust and citation paths", "Visibility built for people and AI systems"],
    modalCopy:
      "We connect technical SEO, content depth, structured data, entities, proof, and AI-search readiness so discovery systems can understand what you do and buyers can act with confidence.",
  },
  {
    id: "ai-automation",
    title: "AI Automation & Integrations",
    short: "Automate workflows, CRM tasks, lead handling, reporting, and repetitive team processes.",
    audience: "For teams that want to save time and scale smarter.",
    image: cardAsset("ai-automation"),
    accent: "cyan",
    href: "/services/data-automation",
    includes: ["CRM automation", "Lead qualification flows", "AI chatbot systems", "Workflow automation", "Reporting dashboards", "Process optimization"],
    outcomes: ["Faster response times", "Less manual follow-up", "Cleaner lead routing", "Operational time saved every month"],
    modalCopy:
      "We identify repetitive work, then connect tools, forms, CRM stages, reporting, and AI-assisted workflows so your team spends less time moving data and more time closing opportunities.",
  },
  {
    id: "web-dev",
    title: "Conversion-Focused Web Design & Development",
    short: "Create fast, accessible pages that clarify your offer and make the next action easier to take.",
    audience: "For businesses that need a website built around understanding, trust, search, and conversion.",
    image: cardAsset("web-dev"),
    accent: "teal",
    href: "/services/web-automation-system",
    includes: ["Positioning-led architecture", "UI/UX and page structure", "Custom websites", "Mobile-first performance", "Technical SEO", "Tracking and launch QA"],
    outcomes: ["Faster page experiences", "Clearer service architecture", "Better CTA flow", "Web systems that support SEO and analytics"],
    modalCopy:
      "We build websites as growth infrastructure: fast, searchable, persuasive, measurable, and easy for users to navigate from first impression to qualified action.",
  },
  {
    id: "growth-strategy",
    title: "Conversion & Growth Strategy",
    short: "Find and prioritize the highest-impact gaps across visibility, messaging, journeys, tracking, and sales.",
    audience: "For teams that need a clear, evidence-led growth roadmap before spending more on execution.",
    image: "/assets/services/cards/conversion-growth-strategy-icon-170-v2.avif",
    accent: "orange",
    href: "/free-audit",
    includes: ["Website and funnel audits", "Messaging and positioning", "Conversion review", "Analytics review", "Opportunity prioritization", "90-day roadmap"],
    outcomes: ["Sharper priorities", "Less disconnected execution", "Clearer measurement", "A roadmap tied to commercial impact"],
    modalCopy:
      "We diagnose the complete growth journey, separate evidence from assumptions, and prioritize the opportunities most likely to improve visibility, trust, conversion, and operational clarity.",
  },
];

const processSteps = [
  ["Discover", "Align goals, audiences, priority offers, and meaningful conversion actions.", asset("18")],
  ["Diagnose", "Audit search, AI readiness, entity signals, journeys, data, and workflows.", asset("7")],
  ["Prioritize", "Rank opportunities by impact, evidence, effort, dependencies, and risk.", asset("16")],
  ["Build & Implement", "Create accessible, crawlable experiences with clear content and conversion paths.", asset("5")],
  ["Integrate & Automate", "Connect forms, CRM stages, follow-up, reporting, and human review.", asset("20")],
  ["Measure & Improve", "Track agreed outcomes, validate changes, and improve the system over time.", asset("12")],
] as const;

const trustPoints = [
  ["AI Search Ready", "/assets/services/trust/22.webp"],
  ["Conversion Focused", "/assets/services/trust/23.webp"],
  ["Automation Powered", "/assets/services/trust/24.webp"],
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
              <Link className="sb-services-btn sb-services-btn-primary" href="/free-audit">
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
            <Link className="sb-services-btn sb-services-btn-dark" href="/free-audit">
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
          <div className="sb-services-system-orbit">
            <span className="sb-services-system-ring sb-services-system-ring-one" />
            <span className="sb-services-system-ring sb-services-system-ring-two" />
            <Image src="/assets/sitesbrand-icon-transparent.webp" alt="" width={190} height={228} preload />
            <strong className="sb-services-system-node sb-services-system-node-top">Search + AI</strong>
            <strong className="sb-services-system-node sb-services-system-node-right">Automation</strong>
            <strong className="sb-services-system-node sb-services-system-node-bottom">Web + UX</strong>
            <strong className="sb-services-system-node sb-services-system-node-left">Growth Strategy</strong>
          </div>
        </div>
      </section>

      <section id="services" className="sb-services-core" aria-labelledby="core-services-title">
        <div className="sb-services-section-heading">
          <span className="sb-services-pill">Our Core Services</span>
          <h2 id="core-services-title">Four Connected Services. <span>One Clear Growth System.</span></h2>
          <p>Each service supports visibility, understanding, conversion, and measurable implementation. Open any card to see the scope and outcomes.</p>
        </div>
        <div className="sb-services-grid">
          {services.map((service) => (
            <article key={service.id} className={`sb-services-card sb-services-card-${service.accent}`}>
              <Image src={service.image} alt="" width={420} height={420} sizes="(max-width: 720px) 140px, 180px" />
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

      <section id="process" className="sb-services-process" aria-labelledby="process-title">
        <div className="sb-services-process-copy">
          <span className="sb-services-pill">How It Works</span>
          <h2 id="process-title">One System. <span>Multiple Growth Layers.</span></h2>
          <p>We do not treat SEO, design, development, and automation as separate tasks. We connect them into one growth engine.</p>
          <Link className="sb-services-btn sb-services-btn-dark" href="/free-audit">
            See How We Work
            <ArrowIcon />
          </Link>
        </div>
        <div className="sb-services-process-steps">
          {processSteps.map(([title, text, image], index) => (
            <article key={title}>
              <Image src={image} alt="" width={240} height={240} sizes="96px" />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cta" className="sb-services-final" aria-labelledby="final-title">
        <div>
          <span className="sb-services-final-kicker">Talk to a real person</span>
          <h2 id="final-title">Ready to Build a Smarter Growth System?</h2>
          <p>Show us where growth feels unclear. We will map the first practical move across search, AI visibility, design, and automation.</p>
          <div className="sb-services-actions">
            <Link className="sb-services-btn sb-services-btn-primary" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
              <ArrowIcon />
            </Link>
            <Link className="sb-services-btn sb-services-btn-light" href="/free-audit">
              Get a Free Audit
              <SearchIcon />
            </Link>
          </div>
          <div className="sb-services-final-proof" aria-label="SitesBrand service strengths">
            <span>Strategy-Led</span>
            <span>AI-Ready</span>
            <span>Conversion-Focused</span>
          </div>
        </div>
        <Image src={asset("19")} alt="Rocket launch with a growth dashboard and rising chart" width={1188} height={1188} sizes="(max-width: 900px) 92vw, 42vw" />
      </section>

      {activeService ? <ServiceModal service={activeService} onClose={() => setActiveServiceId(null)} /> : null}
    </main>
  );
}
