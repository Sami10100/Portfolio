import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About SitesBrand | Psychology, Design & Technology",
  description:
    "Learn how SitesBrand builds psychology-led, design-forward, AI-powered growth systems for ambitious brands.",
  alternates: {
    canonical: "/about",
  },
};

const services = [
  "AI Search Optimization",
  "SEO and Organic Growth",
  "AI Automation",
  "Web Development",
  "UI/UX and Conversion",
];

const solutions = [
  "Ecommerce Solutions",
  "SEO / ORM",
  "Social Media Marketing",
  "SEM / Paid Advertising",
  "AI and Consulting",
];

const principles = [
  {
    icon: "01",
    title: "People decide first. Data explains why.",
    text: "We study intent, friction, trust, and timing before we design anything. Better psychology creates cleaner strategy.",
  },
  {
    icon: "02",
    title: "Design should make action feel obvious.",
    text: "A beautiful page is not enough. Every section should help the visitor understand, believe, and move forward.",
  },
  {
    icon: "03",
    title: "Technology should remove drag.",
    text: "We use AI, automation, and fast code to reduce manual work, connect systems, and make growth easier to repeat.",
  },
];

const model = [
  ["Discover", "We learn the business, audience, goals, offers, and current blockers."],
  ["Diagnose", "We find the real leaks across visibility, conversion, speed, and systems."],
  ["Build", "We design, develop, automate, and connect the assets that move the business."],
  ["Improve", "We track what happens, keep what works, and keep making the system sharper."],
];

const teamNotes = [
  {
    title: "Strategy that keeps the business in view.",
    text: "We do not chase random trends. We look at the offer, market, customer journey, and revenue goal first.",
    note: "Clear thinking before execution.",
  },
  {
    title: "Execution that feels premium and practical.",
    text: "From SEO to automation to web experiences, the work is built to be fast, clean, useful, and measurable.",
    note: "Built for real-world growth.",
  },
];

function Header() {
  return (
    <header className="about-nav">
      <nav className="about-nav-inner" aria-label="Main navigation">
        <Link className="about-logo" href="/" aria-label="SitesBrand home">
          <Image
            src="/assets/sitesbrand-wordmark-transparent.png"
            alt="SitesBrand"
            width={181}
            height={48}
            priority
          />
        </Link>

        <div className="about-nav-links">
          <details className="about-menu">
            <summary>Services <span aria-hidden="true">▼</span></summary>
            <div className="about-menu-panel">
              {services.map((item) => (
                <Link href="/#services" key={item}>{item}</Link>
              ))}
            </div>
          </details>
          <details className="about-menu">
            <summary>Solutions <span aria-hidden="true">▼</span></summary>
            <div className="about-menu-panel">
              {solutions.map((item) => (
                <Link href="/#services" key={item}>{item}</Link>
              ))}
            </div>
          </details>
          <Link className="about-nav-link" href="/#cases">Case Studies</Link>
          <Link className="about-nav-link" href="/about" aria-current="page">About</Link>
          <details className="about-menu">
            <summary>Resources <span aria-hidden="true">▼</span></summary>
            <div className="about-menu-panel align-right">
              <Link href="/#faq">FAQs</Link>
              <Link href="/#footer">Blog</Link>
              <Link href="/#footer">Guides and eBooks</Link>
              <Link href="/#footer">Tools and Templates</Link>
            </div>
          </details>
        </div>

        <div className="about-nav-actions">
          <a className="about-btn dark" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book a Strategy Call <span aria-hidden="true">→</span>
          </a>
          <Link className="about-btn cyan" href="/#cta">Get a Free Audit</Link>
        </div>

        <details className="about-mobile-menu">
          <summary aria-label="Menu">☰</summary>
          <div className="about-mobile-panel">
            <Link href="/#services">Services</Link>
            <Link href="/#process">Our Process</Link>
            <Link href="/#cases">Case Studies</Link>
            <Link href="/about" aria-current="page">About</Link>
            <Link href="/#faq">FAQs</Link>
            <Link className="about-btn cyan" href="/#cta">Get a Free Audit</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer id="footer" className="about-section" style={{ paddingBottom: 32 }}>
      <div className="about-container">
        <div className="about-cta">
          <div className="about-cta-grid">
            <div>
              <h2>Ready to build a smarter growth system?</h2>
              <p>
                If your brand has a strong offer but the digital system feels scattered,
                SitesBrand can help you turn it into a clearer path from attention to revenue.
              </p>
            </div>
            <div className="about-hero-actions" style={{ marginTop: 0 }}>
              <a className="about-btn cyan" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </a>
              <a className="about-btn dark" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, marginTop: 34, flexWrap: "wrap" }}>
          <Link className="about-logo" href="/" aria-label="SitesBrand home">
            <Image src="/assets/sitesbrand-wordmark-transparent.png" alt="SitesBrand" width={176} height={47} />
          </Link>
          <div style={{ color: "#5b5d77", fontSize: 13 }}>
            {siteConfig.email} · {siteConfig.phone}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <main>
        <section className="about-hero">
          <div className="about-container about-hero-grid">
            <div>
              <div className="about-kicker">Started in 2023</div>
              <h1 className="about-h1">We build growth systems that make brands easier to trust.</h1>
              <p className="about-lede">
                SitesBrand is a digital growth agency built around one simple idea:
                when psychology, design, and technology work together, growth becomes clearer,
                faster, and easier to measure.
              </p>
              <div className="about-hero-actions">
                <a className="about-btn cyan" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                </a>
                <Link className="about-btn dark" href="/#services">Explore Services</Link>
              </div>
              <div className="about-proof-row" aria-label="SitesBrand proof points">
                <div className="about-proof">
                  <strong>2023</strong>
                  <span>The year SitesBrand began with a sharper way to build digital growth.</span>
                </div>
                <div className="about-proof">
                  <strong>3</strong>
                  <span>Core disciplines: psychology, design, and technology.</span>
                </div>
                <div className="about-proof">
                  <strong>1</strong>
                  <span>Goal: help ambitious brands turn attention into revenue.</span>
                </div>
              </div>
            </div>

            <div className="about-orbit" aria-hidden="true">
              <div className="about-orbit-ring" />
              <div className="about-orbit-ring two" />
              <div className="about-orbit-logo">
                <Image
                  src="/assets/sitesbrand-icon-transparent.png"
                  alt=""
                  width={118}
                  height={142}
                  priority
                />
              </div>
              <div className="about-node one">
                <strong>Psychology</strong>
                <span>Understand why people click, trust, and buy.</span>
              </div>
              <div className="about-node two">
                <strong>Design</strong>
                <span>Make the next action feel natural.</span>
              </div>
              <div className="about-node three">
                <strong>Technology</strong>
                <span>Build fast systems that keep scaling.</span>
              </div>
              <div className="about-node four">
                <strong>AI</strong>
                <span>Automate work and improve speed.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container about-split">
            <div>
              <h2 className="about-h2">Why SitesBrand exists.</h2>
            </div>
            <div className="about-story-panel">
              <p className="about-text">
                Many businesses do not have a traffic problem only. They have a clarity problem,
                a trust problem, a conversion problem, or a system problem. A website may look good,
                but the message is unclear. SEO may bring visits, but the page does not convert.
                Tools may be powerful, but the workflow is still manual.
              </p>
              <p className="about-text" style={{ marginTop: 18 }}>
                SitesBrand was created to connect those pieces. We help brands shape the full path:
                how people discover you, how they understand you, how they decide, and how your systems
                keep the relationship moving after the first click.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section dark">
          <div className="about-container">
            <h2 className="about-h2">What we believe.</h2>
            <p className="about-text" style={{ maxWidth: 690, marginTop: 18 }}>
              Good growth work should feel calm, sharp, and useful. It should not confuse the customer
              or overload the business.
            </p>
            <div className="about-principles">
              {principles.map((item) => (
                <article className="about-principle" key={item.title}>
                  <div className="about-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-split">
              <h2 className="about-h2">How we work.</h2>
              <p className="about-text" style={{ marginTop: 0 }}>
                We keep the process simple because simple work is easier to measure.
                Every project starts with the business goal, then moves into strategy,
                design, development, automation, and improvement.
              </p>
            </div>
            <div className="about-model-grid">
              {model.map(([title, text], index) => (
                <article className="about-model-card" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" style={{ paddingTop: 0 }}>
          <div className="about-container">
            <div className="about-split">
              <h2 className="about-h2">The kind of partner we try to be.</h2>
              <p className="about-text" style={{ marginTop: 0 }}>
                We aim to be the team that brings order to growth. Clear strategy,
                premium execution, honest communication, and work that can be judged by results.
              </p>
            </div>
            <div className="about-team-grid">
              {teamNotes.map((item) => (
                <article className="about-team-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <strong>{item.note}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a className="about-whatsapp" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M6.4 26.2L7.8 21.3C6.9 19.8 6.5 18.1 6.5 16.4C6.5 11 10.9 6.7 16.3 6.7C18.9 6.7 21.4 7.7 23.2 9.6C25.1 11.4 26.1 13.9 26.1 16.5C26.1 21.9 21.7 26.2 16.3 26.2C14.7 26.2 13.1 25.8 11.7 25L6.4 26.2Z" fill="white" opacity=".95" />
          <path d="M12.1 11.5C11.9 11 11.7 11 11.4 11H10.8C10.6 11 10.2 11.1 9.9 11.5C9.6 11.9 8.8 12.6 8.8 14.1C8.8 15.6 9.9 17.1 10.1 17.3C10.2 17.5 12.3 20.8 15.6 22C18.3 23.1 18.9 22.9 19.5 22.8C20.1 22.7 21.5 22 21.8 21.3C22.1 20.6 22.1 20 22 19.9C21.9 19.7 21.7 19.6 21.3 19.4C20.9 19.2 18.9 18.2 18.5 18.1C18.1 17.9 17.9 17.9 17.6 18.3C17.3 18.7 16.6 19.5 16.4 19.8C16.2 20 16 20 15.6 19.8C15.2 19.6 13.9 19.2 12.4 17.8C11.2 16.8 10.4 15.5 10.2 15.1C10 14.7 10.2 14.5 10.4 14.3C10.5 14.1 10.8 13.8 11 13.6C11.2 13.4 11.3 13.2 11.4 12.9C11.5 12.7 11.5 12.5 11.4 12.3C11.3 12.1 12.3 12.1 12.1 11.5Z" fill="#25D366" />
        </svg>
      </a>
    </div>
  );
}
