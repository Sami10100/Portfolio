import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About SitesBrand | Psychology, Design & Technology",
  description:
    "SitesBrand is a digital growth agency started in 2023, blending psychology, design, SEO, AI search optimization, automation, and development.",
  alternates: {
    canonical: "/about",
  },
};

const storyCards = [
  ["brain", "Psychology-Driven", "We start with audience intent, trust signals, and behavior before any design decision."],
  ["pen", "Design-Led", "We shape clean, premium experiences that make decisions easier and action feel natural."],
  ["code", "Technology-Powered", "We build fast systems with SEO, automation, analytics, and scalable code."],
] as const;

const whyCards = [
  ["brain", "Psychology-Led Strategy", "Messages, journeys, and offers shaped around how people evaluate brands."],
  ["search", "Search Built for AI", "Content and structure optimized for Google, AI Overviews, ChatGPT, Gemini, and Perplexity."],
  ["pen", "Design That Converts", "Interfaces that feel premium, reduce friction, and make trust easier to earn."],
  ["blocks", "Systems That Scale", "Automation, tracking, and technical foundations built to grow with the business."],
] as const;

const expertise = [
  ["AI", "AI Search Optimization", "Improve visibility across AI search and answer engines.", "FLAGSHIP"],
  ["SEO", "SEO & Content Strategy", "Rank with useful content, clean structure, and real authority.", ""],
  ["blocks", "AI Automation", "Automate workflows, lead handling, reporting, and operations.", ""],
  ["pen", "UI/UX & Brand Design", "Design experiences that build confidence and convert attention.", ""],
  ["code", "Web Development", "Fast, responsive, maintainable websites built for performance.", ""],
  ["funnel", "Sales & Lead Generation", "Turn high-intent visitors into qualified conversations.", ""],
] as const;

const values = [
  ["target", "Mission", "Help ambitious brands grow through intelligent digital systems."],
  ["vision", "Vision", "Build a future where psychology, design, and technology work together for measurable growth."],
  ["diamond", "Values", "Clarity, trust, innovation, and performance in every decision."],
] as const;

const principles = [
  ["search", "Clarity", "Simple thinking, sharp strategy, clear next steps."],
  ["trust", "Trust", "Transparent work, reliable delivery, honest communication."],
  ["sun", "Innovation", "Modern systems without unnecessary complexity."],
  ["growth", "Performance", "Every build tied to outcomes that matter."],
] as const;

type GlyphName =
  | "brain"
  | "pen"
  | "code"
  | "blocks"
  | "search"
  | "target"
  | "growth"
  | "trust"
  | "sun"
  | "funnel"
  | "vision"
  | "diamond";

function Glyph({ name }: { name: GlyphName }) {
  const props = {
    className: "sb-icon-svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<GlyphName, React.ReactNode> = {
    brain: <><path d="M8.7 4A3 3 0 0 0 5 7a3.1 3.1 0 0 0-1.4 5.5A3.4 3.4 0 0 0 7.2 18.6" /><path d="M15.3 4A3 3 0 0 1 19 7a3.1 3.1 0 0 1 1.4 5.5 3.4 3.4 0 0 1-3.6 6.1" /><path d="M9 4v16M15 4v16M9 9h2.2M12.8 14H15" /></>,
    pen: <><path d="M14.5 4.5 19.5 9.5 9.2 19.8 4 20l.2-5.2L14.5 4.5Z" /><path d="m13 6 5 5" /></>,
    code: <><path d="m8.2 8-4 4 4 4" /><path d="m15.8 8 4 4-4 4" /><path d="m13.5 5-3 14" /></>,
    blocks: <><path d="M9 3h6v6H9z" /><path d="M4 15h6v6H4z" /><path d="M14 15h6v6h-6z" /><path d="M12 9v3M7 15v-3h10v3" /></>,
    search: <><circle cx="10.5" cy="10.5" r="5.8" /><path d="m15 15 4.5 4.5" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
    growth: <><path d="M4 19h16" /><path d="M6 15l4-4 3 3 5-7" /><path d="M16 7h2v2" /></>,
    trust: <><path d="M12 3 19 6v5c0 4.4-2.8 7.6-7 10-4.2-2.4-7-5.6-7-10V6l7-3Z" /><path d="m8.8 12.2 2.1 2.1 4.5-5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    funnel: <><path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" /><path d="M9 5v3M15 5v3" /></>,
    vision: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="3" /></>,
    diamond: <><path d="M6.5 3.5h11L22 9l-10 12L2 9l4.5-5.5Z" /><path d="M2 9h20M8 3.5 12 9l4-5.5" /></>,
  };

  return <svg {...props}>{paths[name]}</svg>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="about-label">
      <span>+</span>
      {children}
    </p>
  );
}

function OrbitGraphic({ light = false }: { light?: boolean }) {
  return (
    <div className={`about-orbit ${light ? "light" : ""}`} aria-hidden="true">
      <span className="ring ring-a" />
      <span className="ring ring-b" />
      <span className="ring ring-c" />
      <div className="orbit-logo">
        <span />
        <Image src="/assets/sitesbrand-icon-transparent.png" alt="" width={148} height={178} priority />
      </div>
      <div className="orbit-node top"><Glyph name="brain" /><b>Psychology</b></div>
      <div className="orbit-node left"><Glyph name="pen" /><b>Design</b></div>
      <div className="orbit-node right"><Glyph name="code" /><b>Technology</b></div>
      <div className="orbit-node bottom"><Glyph name="blocks" /><b>Systems</b></div>
    </div>
  );
}

function FeatureIcon({ item }: { item: string }) {
  if (item === "AI" || item === "SEO") return <span className="text-mark">{item}</span>;
  return <Glyph name={item as GlyphName} />;
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="about-dark about-hero">
          <div className="about-wrap hero-grid">
            <div className="hero-copy">
              <SectionLabel>About SitesBrand</SectionLabel>
              <h1>Where Psychology Meets Design and Technology<span>.</span></h1>
              <p>
                SitesBrand helps ambitious brands grow with clearer positioning,
                smarter search visibility, better user experience, and systems that scale.
              </p>
              <p>We do not just build websites. We build growth engines.</p>
              <div className="hero-cta">
                <a className="primary-cta" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call <span aria-hidden="true">-&gt;</span>
                </a>
                <Link className="secondary-cta" href="#story">See Our Story</Link>
              </div>
              <div className="proof-row">
                <div><Glyph name="target" /><span>Strategy-Led</span></div>
                <div><Glyph name="blocks" /><span>AI-Driven</span></div>
                <div><Glyph name="growth" /><span>Conversion-Focused</span></div>
              </div>
            </div>
            <OrbitGraphic />
          </div>
        </section>

        <section id="story" className="about-light story-section">
          <div className="about-wrap story-grid">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2>Built to turn insight into growth<span>.</span></h2>
              <p>
                SitesBrand started in 2023 with a simple belief: digital growth works best
                when strategy, design, and technology move together.
              </p>
              <p>
                We help brands clarify their message, earn trust faster, improve visibility,
                and convert attention into measurable momentum.
              </p>
              <div className="story-cards">
                {storyCards.map(([icon, title, text]) => (
                  <article key={title}>
                    <div className="light-icon"><Glyph name={icon} /></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <OrbitGraphic light />
          </div>
        </section>

        <section className="about-dark choose-section">
          <div className="about-wrap split-grid">
            <div>
              <SectionLabel>Why Brands Choose Us</SectionLabel>
              <h2>Built around human behavior and business outcomes<span>.</span></h2>
              <div className="choose-cards">
                {whyCards.map(([icon, title, text]) => (
                  <article key={title}>
                    <div className="dark-icon"><Glyph name={icon} /></div>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <OrbitGraphic />
          </div>
          <div className="about-wrap proof-strip">
            {principles.slice(0, 3).map(([icon, title, text]) => (
              <article key={title}>
                <Glyph name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-dark expertise-section">
          <div className="about-wrap">
            <div className="section-head">
              <div>
                <SectionLabel>What We Bring</SectionLabel>
                <h2>Expertise that blends growth, design, and automation<span>.</span></h2>
              </div>
              <Image src="/assets/sitesbrand-icon-transparent.png" alt="" width={112} height={135} />
            </div>
            <div className="expertise-grid">
              {expertise.map(([icon, title, text, badge], index) => (
                <article className={index === 0 ? "featured" : ""} key={title}>
                  <div className="dark-icon large"><FeatureIcon item={icon} /></div>
                  <div>
                    {badge ? <span className="badge">+ {badge}</span> : null}
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="section-note">Built for brands that want more than visibility. They want momentum<span>.</span></p>
          </div>
        </section>

        <section className="about-dark values-section">
          <div className="about-wrap split-grid">
            <div>
              <SectionLabel>Mission, Vision & Values</SectionLabel>
              <h2>The principles behind every growth system we build<span>.</span></h2>
              <div className="values-grid">
                {values.map(([icon, title, text]) => (
                  <article key={title}>
                    <div className="dark-icon large"><Glyph name={icon} /></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <OrbitGraphic />
          </div>
          <div className="about-wrap value-row">
            {principles.map(([icon, title, text]) => (
              <article key={title}>
                <Glyph name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ExactSitesBrandFragment part="team" />

        <ExactSitesBrandFragment part="cta" />
      </main>
      <ExactSitesBrandFragment part="footer" />
    </div>
  );
}
