import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About SitesBrand | Psychology, Design & Technology",
  description:
    "About SitesBrand, a growth agency started in 2023 to blend psychology, design, SEO, AI search optimization, automation, and web development.",
  alternates: {
    canonical: "/about",
  },
};

const navServices = [
  "AI Search Optimization",
  "SEO & Content Strategy",
  "AI Automation",
  "UI/UX & Brand Design",
  "Web Development",
];

const whyCards = [
  ["Psychology-Led Strategy", "We blend behavioral insight with data to shape strategies that resonate and perform."],
  ["Search Built for AI", "We optimize for how people and AI discover, evaluate, and choose brands today."],
  ["Design That Converts", "Beautiful, intuitive experiences crafted to engage, build trust, and drive action."],
  ["Systems That Scale", "We engineer scalable, automated systems that grow with your brand and goals."],
];

const expertise = [
  ["AI Search Optimization", "Optimize for visibility across AI search and next-gen discovery.", "FLAGSHIP"],
  ["SEO & Content Strategy", "Rank higher with content that connects and converts.", ""],
  ["AI Automation", "Automate workflows and scale operations with AI.", ""],
  ["UI/UX & Brand Design", "Design experiences that build trust and drive action.", ""],
  ["Web Development", "Fast, modern websites built for performance and scale.", ""],
  ["Sales & Lead Generation", "Attract, engage, and convert high-intent leads into customers.", ""],
];

const values = [
  ["Mission", "Help ambitious brands grow through intelligent digital systems."],
  ["Vision", "Build a future where psychology, design, and technology work together for measurable growth."],
  ["Values", "Clarity, trust, innovation, and performance."],
];

const principles = [
  ["Clarity", "We make complex growth simple and actionable."],
  ["Trust", "We build relationships on transparency and reliability."],
  ["Innovation", "We challenge norms and create what is next."],
  ["Performance", "We focus on outcomes that drive real growth."],
];

const team = [
  ["Hassam Shabbir", "Founder & CEO", ["SEO", "Content Strategy", "AI Search"]],
  ["Warda Ali", "Head of Sales & Business Development", ["Sales", "Outreach", "CRM"]],
  ["Umaima Nabeel", "Creative Director & Lead Developer", ["UI/UX", "Automation", "Development"]],
  ["Saba Amjad", "Business Development Executive", ["Lead Gen", "B2B Growth", "Qualification"]],
] as const;

type GlyphName = "brain" | "pen" | "code" | "blocks" | "search" | "target" | "growth" | "trust" | "sun" | "funnel" | "vision" | "diamond";

function Glyph({ name }: { name: GlyphName }) {
  const common = {
    className: "sb-icon-svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<GlyphName, React.ReactNode> = {
    brain: <><path d="M8.6 4.2A3 3 0 0 0 5 7.1a3.2 3.2 0 0 0-1.5 5.6A3.3 3.3 0 0 0 7 18.5" /><path d="M15.4 4.2A3 3 0 0 1 19 7.1a3.2 3.2 0 0 1 1.5 5.6 3.3 3.3 0 0 1-3.5 5.8" /><path d="M9 4v16M15 4v16M9 9h2.2M12.8 14H15" /></>,
    pen: <><path d="M14.5 4.5 19.5 9.5 9.2 19.8 4 20l.2-5.2L14.5 4.5Z" /><path d="m13 6 5 5" /></>,
    code: <><path d="m8.2 8-4 4 4 4" /><path d="m15.8 8 4 4-4 4" /><path d="m13.5 5-3 14" /></>,
    blocks: <><path d="M9 3h6v6H9z" /><path d="M4 15h6v6H4z" /><path d="M14 15h6v6h-6z" /><path d="M12 9v3M7 15v-3h10v3" /></>,
    search: <><circle cx="10.5" cy="10.5" r="5.8" /><path d="m15 15 4.5 4.5" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.8" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
    growth: <><path d="M4 19h16" /><path d="M6 15l4-4 3 3 5-7" /><path d="M16 7h2v2" /></>,
    trust: <><path d="M12 3 19 6v5c0 4.4-2.8 7.6-7 10-4.2-2.4-7-5.6-7-10V6l7-3Z" /><path d="m8.8 12.2 2.1 2.1 4.5-5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    funnel: <><path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" /><path d="M9 5v3M15 5v3" /></>,
    vision: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="3" /></>,
    diamond: <><path d="M6.5 3.5h11L22 9l-10 12L2 9l4.5-5.5Z" /><path d="M2 9h20M8 3.5 12 9l4-5.5" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function TechMark({ label }: { label: "AI" | "SEO" }) {
  return <span className="icon-text">{label}</span>;
}

function LogoLink() {
  return (
    <Link className="sb-about-logo" href="/" aria-label="SitesBrand home">
      <Image
        src="/assets/sitesbrand-wordmark-transparent.png"
        alt="SitesBrand"
        width={181}
        height={48}
        priority
      />
    </Link>
  );
}

function SiteHeader() {
  return (
    <header className="sb-about-header">
      <nav className="sb-about-nav" aria-label="Main navigation">
        <LogoLink />
        <div className="sb-about-links">
          <details className="sb-about-menu">
            <summary>Services <span aria-hidden="true">v</span></summary>
            <div className="sb-about-menu-panel">
              {navServices.map((item) => (
                <Link key={item} href="/#services">{item}</Link>
              ))}
            </div>
          </details>
          <Link href="/#cases">Case Studies</Link>
          <Link className="active" href="/about" aria-current="page">About</Link>
          <details className="sb-about-menu">
            <summary>Resources <span aria-hidden="true">v</span></summary>
            <div className="sb-about-menu-panel right">
              <Link href="/#faq">FAQs</Link>
              <Link href="/#footer">Blog</Link>
              <Link href="/#footer">Guides</Link>
              <Link href="/#footer">Tools</Link>
            </div>
          </details>
        </div>
        <div className="sb-about-actions">
          <a className="sb-btn outline" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book a Strategy Call
          </a>
          <Link className="sb-btn cyan header-audit" href="/#cta">Get a Free Audit</Link>
      <button className="sb-theme-dot" type="button" aria-label="Theme toggle"><Glyph name="sun" /></button>
        </div>
        <details className="sb-mobile">
          <summary aria-label="Menu"><span className="menu-lines" aria-hidden="true" /></summary>
          <div className="sb-mobile-panel">
            <Link href="/#services">Services</Link>
            <Link href="/#cases">Case Studies</Link>
            <Link href="/about">About</Link>
            <Link href="/#faq">Resources</Link>
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
          </div>
        </details>
      </nav>
    </header>
  );
}

function OrbitGraphic({ mode = "hero" }: { mode?: "hero" | "wide" | "light" }) {
  return (
    <div className={`sb-orbit ${mode}`} aria-hidden="true">
      <div className="orbit-line one" />
      <div className="orbit-line two" />
      <div className="orbit-line three" />
      <div className="logo-platform">
        <div className="platform-glow" />
        <Image src="/assets/sitesbrand-icon-transparent.png" alt="" width={148} height={178} />
      </div>
      <div className="orbit-chip chip-top"><span><Glyph name="brain" /></span><b>Psychology</b></div>
      <div className="orbit-chip chip-left"><span><Glyph name="pen" /></span><b>Design</b></div>
      <div className="orbit-chip chip-right"><span><Glyph name="code" /></span><b>Technology</b></div>
      <div className="orbit-chip chip-bottom"><span><Glyph name="blocks" /></span><b>Systems</b></div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="sb-label"><span>+</span>{children}</div>;
}

export default function AboutPage() {
  return (
    <div className="sb-about-page">
      <SiteHeader />
      <main>
        <section className="sb-dark sb-hero">
          <div className="sb-wrap sb-hero-grid">
            <div className="hero-copy">
              <SectionLabel>About SitesBrand</SectionLabel>
              <h1>Where Psychology Meets Design and Technology<span>.</span></h1>
              <p>
                We help ambitious brands grow through strategy, SEO, AI search optimization,
                automation, and high-converting digital experiences.
              </p>
              <p>We do not just build websites. We engineer growth systems.</p>
              <div className="sb-button-row">
                <a className="sb-btn cyan large" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call <span aria-hidden="true">-&gt;</span>
                </a>
                <Link className="sb-btn ghost large" href="#story">See Our Story</Link>
              </div>
              <div className="hero-points">
                <div><span><Glyph name="target" /></span><b>Strategy-Led</b></div>
                <div><span><Glyph name="blocks" /></span><b>AI-Driven</b></div>
                <div><span><Glyph name="growth" /></span><b>Conversion-Focused</b></div>
              </div>
            </div>
            <OrbitGraphic />
          </div>
        </section>

        <section id="story" className="sb-light sb-story">
          <div className="sb-wrap sb-story-grid">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2>Built to turn insight into growth<span>.</span></h2>
              <p>
                SitesBrand started in 2023 with a clear belief: most brands do not need
                more noise. They need clearer strategy, stronger trust, and smarter systems.
              </p>
              <p>
                We combine psychology, design, SEO, AI search optimization, automation,
                and development to help ambitious brands grow with clarity.
              </p>
              <div className="story-cards">
                <article><span><Glyph name="brain" /></span><h3>Psychology-Driven</h3><p>We start with insight to understand your audience and influence what matters.</p></article>
                <article><span><Glyph name="pen" /></span><h3>Design-Led</h3><p>We design experiences that build trust, boost engagement, and convert.</p></article>
                <article><span><Glyph name="code" /></span><h3>Technology-Powered</h3><p>We use AI, automation, and modern development to build, optimize, and scale.</p></article>
              </div>
            </div>
            <div className="light-visual">
              <OrbitGraphic mode="light" />
            </div>
          </div>
        </section>

        <section className="sb-dark sb-choose">
          <div className="sb-wrap sb-two">
            <div>
              <SectionLabel>Why Brands Choose Us</SectionLabel>
              <h2>Built around human behavior and business outcomes<span>.</span></h2>
              <div className="choose-grid">
                {whyCards.map(([title, text], index) => (
                  <article key={title}>
                    <div className="iso-icon"><Glyph name={(["brain", "search", "pen", "blocks"] as const)[index]} /></div>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mini-proof">
                <div><span><Glyph name="target" /></span><b>Strategy-Led</b><p>Built on insight, aligned with goals.</p></div>
                <div><span><Glyph name="blocks" /></span><b>AI-Driven</b><p>Optimized for the future of search and discovery.</p></div>
                <div><span><Glyph name="growth" /></span><b>Conversion-Focused</b><p>Every decision designed to drive measurable growth.</p></div>
              </div>
            </div>
            <OrbitGraphic mode="wide" />
          </div>
        </section>

        <section className="sb-dark sb-expertise">
          <div className="sb-wrap">
            <div className="section-top">
              <div>
                <SectionLabel>What We Bring</SectionLabel>
                <h2>Expertise that blends growth, design, and automation<span>.</span></h2>
              </div>
              <div className="top-mark"><Image src="/assets/sitesbrand-icon-transparent.png" alt="" width={120} height={144} /></div>
            </div>
            <div className="expertise-grid">
              {expertise.map(([title, text, badge], index) => (
                <article className={index === 0 ? "featured" : ""} key={title}>
                  <div className="iso-icon large">
                    {index === 0 ? <TechMark label="AI" /> : index === 1 ? <TechMark label="SEO" /> : <Glyph name={(["blocks", "pen", "code", "funnel"] as const)[index - 2]} />}
                  </div>
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

        <section className="sb-dark sb-values">
          <div className="sb-wrap sb-two">
            <div>
              <SectionLabel>Mission, Vision & Values</SectionLabel>
              <h2>The principles behind every growth system we build<span>.</span></h2>
              <div className="values-grid">
                {values.map(([title, text], index) => (
                  <article key={title}>
                    <div className="iso-icon large"><Glyph name={(["target", "vision", "diamond"] as const)[index]} /></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <OrbitGraphic mode="wide" />
          </div>
          <div className="sb-wrap principle-row">
            {principles.map(([title, text], index) => (
              <article key={title}>
                <span><Glyph name={(["search", "trust", "sun", "growth"] as const)[index]} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="sb-light sb-team">
          <div className="sb-wrap">
            <div className="team-top">
              <div>
                <SectionLabel>Meet The Team</SectionLabel>
                <h2>The people behind SitesBrand<span>.</span></h2>
                <p>
                  Our team blends strategy, creativity, technology, and business development
                  to deliver digital solutions that drive measurable growth.
                </p>
              </div>
              <div className="team-mark"><OrbitGraphic mode="light" /></div>
            </div>
            <div className="team-grid">
              {team.map(([name, role, tags], index) => (
                <article key={name}>
                  <div className="avatar"><span>{["HS", "WA", "UN", "SA"][index]}</span></div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                  <div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sb-light sb-final">
          <div className="sb-wrap final-card">
            <div>
              <h2>Ready to build smarter growth<span>?</span></h2>
              <p>Let us turn strategy, design, and technology into measurable momentum for your brand.</p>
              <div className="sb-button-row">
                <a className="sb-btn cyan large" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">Book a Strategy Call <span>-&gt;</span></a>
                <Link className="sb-btn white large" href="/#cta">Get a Free Audit</Link>
              </div>
            </div>
            <div className="growth-window" aria-hidden="true">
              <div className="window-dots"><span /><span /><span /></div>
              <div className="window-body">
                <div className="window-sidebar"><span>Home</span><span>Growth</span><span>Blocks</span><span>&lt;/&gt;</span><span>Search</span></div>
                <div className="window-center"><Image src="/assets/sitesbrand-icon-transparent.png" alt="" width={120} height={144} /></div>
                <div className="window-panel">
                  <h3>Growth Engine</h3>
                  <p>Strategy. Design. Technology.</p>
                  <span>Strategic Insights</span>
                  <span>Smart Automation</span>
                  <span>Measurable Results</span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
      <a className="about-whatsapp" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M6.4 26.2L7.8 21.3C6.9 19.8 6.5 18.1 6.5 16.4C6.5 11 10.9 6.7 16.3 6.7C18.9 6.7 21.4 7.7 23.2 9.6C25.1 11.4 26.1 13.9 26.1 16.5C26.1 21.9 21.7 26.2 16.3 26.2C14.7 26.2 13.1 25.8 11.7 25L6.4 26.2Z" fill="white" opacity=".95" />
          <path d="M12.1 11.5C11.9 11 11.7 11 11.4 11H10.8C10.6 11 10.2 11.1 9.9 11.5C9.6 11.9 8.8 12.6 8.8 14.1C8.8 15.6 9.9 17.1 10.1 17.3C10.2 17.5 12.3 20.8 15.6 22C18.3 23.1 18.9 22.9 19.5 22.8C20.1 22.7 21.5 22 21.8 21.3C22.1 20.6 22.1 20 22 19.9C21.9 19.7 21.7 19.6 21.3 19.4C20.9 19.2 18.9 18.2 18.5 18.1C18.1 17.9 17.9 17.9 17.6 18.3C17.3 18.7 16.6 19.5 16.4 19.8C16.2 20 16 20 15.6 19.8C15.2 19.6 13.9 19.2 12.4 17.8C11.2 16.8 10.4 15.5 10.2 15.1C10 14.7 10.2 14.5 10.4 14.3C10.5 14.1 10.8 13.8 11 13.6C11.2 13.4 11.3 13.2 11.4 12.9C11.5 12.7 11.5 12.5 11.4 12.3C11.3 12.1 12.3 12.1 12.1 11.5Z" fill="#25D366" />
        </svg>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="about-footer" id="footer">
      <div className="footer-grid">
        <div>
          <Image src="/assets/sitesbrand-wordmark-transparent.png" alt="SitesBrand" width={176} height={47} />
          <p>Where Psychology Meets Design and Technology</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">{siteConfig.phone}</a>
        </div>
        <div><h3>Services</h3><Link href="/#services">SEO Optimization</Link><Link href="/#services">AI Automation</Link><Link href="/#services">Web Development</Link><Link href="/#services">Conversion Optimization</Link></div>
        <div><h3>Company</h3><Link href="/about">About Us</Link><Link href="/#cases">Case Studies</Link><Link href="/#cta">Careers</Link><Link href="/#cta">Contact Us</Link></div>
        <div><h3>Resources</h3><Link href="/#footer">Blog</Link><Link href="/#footer">Guides</Link><Link href="/#faq">FAQs</Link><Link href="/#footer">Tools</Link></div>
      </div>
      <div className="footer-bottom">
        <span>(c) 2026 SitesBrand. All rights reserved.</span>
        <div><Link href="/#footer">Privacy Policy</Link><span>-</span><Link href="/#footer">Terms of Service</Link></div>
        <div className="socials"><a href={siteConfig.social.linkedin} aria-label="LinkedIn">in</a><a href={siteConfig.social.facebook} aria-label="Facebook">f</a></div>
      </div>
    </footer>
  );
}
