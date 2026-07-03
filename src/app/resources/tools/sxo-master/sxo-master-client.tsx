"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const screenshot = "https://www.sitesbrand.xyz/screenshots/dashboard.png";

const problemCards = [
  ["Content structure", "Pages lack the clear hierarchy, headings, and logical flow that users and search systems need."],
  ["SEO signals", "Missing metadata, thin copy, and weak page elements limit visibility before content gets a fair chance."],
  ["AI visibility", "Content that AI answer engines cannot parse clearly is harder to surface, summarize, and cite."],
  ["User experience", "Cluttered layouts, confusing paths, and friction push visitors away before they convert."],
  ["Page speed", "Heavy assets and slow templates can damage Core Web Vitals and conversion confidence."],
  ["Schema gaps", "Missing structured data makes it harder for search engines and AI systems to understand the page."],
  ["Conversion flow", "Traffic arrives, but unclear CTAs and weak trust signals stop users from taking action."],
  ["Traffic quality", "Ranking without revenue intent creates vanity traffic instead of qualified demand."],
];

const features = [
  ["SEO content analysis", "Scan keyword usage, title structure, metadata, headings, and content depth with specific fixes."],
  ["AI Search Optimization / AIO", "Prepare content for ChatGPT, Perplexity, and Google AI Overviews with clarity and extractability checks."],
  ["GEO readiness", "Score whether content is structured for generative engines, citations, and answer-ready summaries."],
  ["UX and conversion review", "Identify friction, weak CTAs, missing trust proof, and layout issues that block conversion."],
  ["Technical SEO signals", "Catch crawlability issues, redirects, robots directives, indexing problems, and broken links."],
  ["Schema and structured data", "Get markup guidance for articles, products, FAQs, services, and other page types."],
  ["Page speed and experience", "Review Core Web Vitals signals such as LCP, CLS, and INP with practical recommendations."],
  ["Content clarity scoring", "Check readability, sentence complexity, answer directness, and fact density for humans and AI."],
  ["Trust signal review", "Evaluate author authority, citations, E-E-A-T signals, and transparency elements."],
  ["Actionable recommendations", "Turn every finding into a prioritized, plain-English fix inside the WordPress workflow."],
];

const audiences = [
  ["WordPress website owners", "Take control of site performance without needing a full agency audit for every page."],
  ["SEO professionals", "Go beyond keywords and backlinks with a complete search experience audit."],
  ["Marketing agencies", "Deliver client audits faster with clearer scores and implementation-ready next steps."],
  ["SaaS founders", "Make product pages easier to rank, understand, and convert."],
  ["Ecommerce brands", "Improve product and category pages for search, AI tools, and conversion."],
  ["Bloggers and publishers", "Make content clearer, more structured, and easier for answer engines to cite."],
  ["Local businesses", "Strengthen local pages with structured, trust-building content."],
  ["Conversion-focused teams", "Turn traffic into revenue by finding UX and CRO issues hidden in the page."],
];

const faqs = [
  ["What is SXO Master?", "SXO Master is a WordPress plugin and audit tool that analyzes and improves your website for Search Experience Optimization across SEO, UX, CRO, AI visibility, GEO/AIO readiness, content structure, technical signals, and page experience."],
  ["Is SXO Master only for SEO?", "No. SXO Master goes beyond traditional SEO by auditing search experience: SEO content, AI search optimization, GEO readiness, AEO answer patterns, UX, conversion, technical signals, schema, page speed, clarity, and trust signals."],
  ["Does SXO Master work with WordPress?", "Yes. SXO Master is built natively for WordPress. Upload and activate the plugin, then run audits and recommendations inside the WordPress admin dashboard."],
  ["Can agencies use SXO Master for client audits?", "Yes. Agencies can use SXO Master to deliver faster client audits with clear scores for SEO, AEO, GEO, AIO, and SXO plus prioritized next steps."],
  ["Does it help with AI search visibility?", "Yes. The AIO and GEO modules check answer patterns, clarity, extractability, and citation-readiness so AI systems can better interpret and surface your content."],
  ["Is it beginner-friendly?", "Yes. Findings are written as prioritized, plain-English fixes that can be implemented inside WordPress without deep SEO or coding knowledge."],
];

function useSxoMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const canvas = root.querySelector<HTMLCanvasElement>("[data-sxo-canvas]");
    let animationFrame = 0;
    let cleanup = () => {};

    if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const context = canvas.getContext("2d");
      if (context) {
        const colors = ["rgba(26,27,65,.12)", "rgba(0,188,212,.18)", "rgba(255,111,89,.15)"];
        let dots: Array<{ x: number; y: number; z: number; r: number; color: string }> = [];

        const resize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          dots = Array.from({ length: Math.min(70, Math.round(window.innerWidth / 16)) }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() + 0.2,
            r: Math.random() * 3 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
          }));
        };

        const draw = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          dots.forEach((dot) => {
            dot.y -= dot.z * 0.2;
            if (dot.y < -5) dot.y = canvas.height + 5;
            context.beginPath();
            context.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
            context.fillStyle = dot.color;
            context.fill();
          });
          animationFrame = window.requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener("resize", resize);
        cleanup = () => {
          window.removeEventListener("resize", resize);
          window.cancelAnimationFrame(animationFrame);
        };
      }
    }

    const reveals = Array.from(root.querySelectorAll<HTMLElement>(".sxo-reveal"));
    const observer: IntersectionObserver | null = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        }, { threshold: 0.12 })
      : null;

    reveals.forEach((element) => {
      if (observer) observer.observe(element);
      else element.classList.add("is-visible");
    });

    const tiltElements = Array.from(root.querySelectorAll<HTMLElement>("[data-sxo-tilt]"));
    const listeners: Array<() => void> = [];
    tiltElements.forEach((element) => {
      const parent = element.parentElement;
      if (!parent) return;

      const onMove = (event: MouseEvent) => {
        const rect = parent.getBoundingClientRect();
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -14 + 10;
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
        element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      const onLeave = () => {
        element.style.transform = "rotateX(12deg) rotateY(0deg)";
      };

      parent.addEventListener("mousemove", onMove);
      parent.addEventListener("mouseleave", onLeave);
      listeners.push(() => {
        parent.removeEventListener("mousemove", onMove);
        parent.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanup();
      observer?.disconnect();
      listeners.forEach((remove) => remove());
    };
  }, []);

  return rootRef;
}

function Card({ title, text, tone = "default" }: { title: string; text: string; tone?: "default" | "problem" }) {
  return (
    <article className="sxo-card sxo-reveal">
      <div className="sxo-icon" aria-hidden="true">{tone === "problem" ? "!" : "✓"}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function SxoMasterClient() {
  const rootRef = useSxoMotion();

  return (
    <div ref={rootRef} className="sxo-master-page">
      <canvas className="sxo-canvas" data-sxo-canvas aria-hidden="true" />
      <main>
        <header className="sxo-hero">
          <div className="sxo-container">
            <span className="sxo-badge"><span className="sxo-badge-dot" /> New: SXO Master v2.0 — AI Search Optimization is here</span>
            <h1 id="hero-heading">SXO Master: Optimize for <span className="sxo-gradient-text">Search, AI,</span> and Real User Experience</h1>
            <p id="hero-sub" className="sxo-hero-sub">
              The all-in-one WordPress plugin that audits and improves your website&apos;s SEO, AI visibility, content clarity, user experience, and conversion readiness, all inside your dashboard.
            </p>
            <div className="sxo-actions">
              <Link className="sxo-button sxo-button-primary" href="/free-audit">Get a Free Audit</Link>
              <Link className="sxo-button sxo-button-ghost" href="/contact">Get Early Access</Link>
            </div>
            <div className="sxo-tags" aria-label="SXO Master capabilities">
              <span>AI-powered</span><span>SEO-ready</span><span>WordPress plugin</span><span>SXO-focused</span>
            </div>

            <div className="sxo-stage">
              <figure className="sxo-dashboard" data-sxo-tilt>
                <div className="sxo-dashboard-bar">
                  <i style={{ background: "#ff6f59" }} /><i style={{ background: "#f7b955" }} /><i style={{ background: "#16b364" }} />
                  <span>sitesbrand.com/wp-admin/admin.php?page=sxo-master</span>
                </div>
                <img src={screenshot} width="1600" height="900" alt="SXO Master WordPress dashboard showing SEO, AEO, GEO, AIO, and SXO audit scores" />
                <figcaption className="sxo-chip sxo-chip-one"><b>88/100</b> Overall SXO Score</figcaption>
                <figcaption className="sxo-chip sxo-chip-two"><b>20/20</b> SXO publish-ready</figcaption>
                <figcaption className="sxo-chip sxo-chip-three"><b>10</b> Audit modules</figcaption>
              </figure>
            </div>

            <div className="sxo-scores" aria-label="Example audit scores">
              {["88/100 Overall", "19/20 AEO", "17/20 SEO", "19/20 AIO", "13/20 GEO", "20/20 SXO"].map((score, index) => {
                const [value, ...label] = score.split(" ");
                return <div key={score} className={`sxo-score ${index === 0 ? "sxo-score-overall" : ""}`}><b>{value}</b><span>{label.join(" ")}</span></div>;
              })}
            </div>
          </div>
        </header>

        <section className="sxo-section" aria-labelledby="what-heading">
          <div className="sxo-container">
            <article className="sxo-answer-card sxo-reveal" id="what-is-sxo">
              <span className="sxo-eyebrow">What is SXO Master?</span>
              <h2 id="what-heading">SXO Master is a WordPress plugin for Search Experience Optimization.</h2>
              <p>It analyzes and improves your website across SEO, UX, CRO, AI visibility, generative engine readiness, answer engine optimization, content structure, technical signals, and page experience in a single dashboard. Built by SitesBrand.</p>
            </article>
          </div>
        </section>

        <section className="sxo-section" id="problem" aria-labelledby="problem-heading">
          <div className="sxo-container">
            <div className="sxo-section-head sxo-reveal">
              <span className="sxo-eyebrow">The problem</span>
              <h2 id="problem-heading">SEO alone is no longer enough. <span className="sxo-gradient-text">Users and AI search engines want more.</span></h2>
              <p>Modern search journeys care about experience, clarity, speed, structured content, trust signals, and conversion quality.</p>
            </div>
            <div className="sxo-grid sxo-grid-four">
              {problemCards.map(([title, text]) => <Card key={title} title={title} text={text} tone="problem" />)}
            </div>
          </div>
        </section>

        <section className="sxo-section sxo-white-band" id="features" aria-labelledby="features-heading">
          <div className="sxo-container">
            <div className="sxo-section-head sxo-reveal">
              <span className="sxo-eyebrow">Core features</span>
              <h2 id="features-heading">Everything your website needs to win <span className="sxo-gradient-text">modern search</span></h2>
              <p>Ten audit modules work together to show how a website performs across search, AI, and user experience.</p>
            </div>
            <div className="sxo-grid sxo-grid-three">
              {features.map(([title, text]) => <Card key={title} title={title} text={text} />)}
            </div>
          </div>
        </section>

        <section className="sxo-section" id="showcase" aria-labelledby="showcase-heading">
          <div className="sxo-container">
            <div className="sxo-section-head sxo-reveal">
              <span className="sxo-eyebrow">Product showcase</span>
              <h2 id="showcase-heading">See <span className="sxo-gradient-text">SXO Master</span> in action</h2>
              <p>Real plugin dashboard screens with scored modules, audited pages, and recommendations inside WordPress.</p>
            </div>
            <figure className="sxo-showcase sxo-reveal">
              <img src={screenshot} loading="lazy" width="1600" height="900" alt="SXO Master plugin dashboard overview with audited pages and average scores" />
              <figcaption className="sxo-showcase-caption"><strong>Plugin Dashboard</strong> — see audited pages, average scores, pages needing work, and last scan activity.</figcaption>
            </figure>
          </div>
        </section>

        <section className="sxo-section sxo-dark-band" id="how-it-works" aria-labelledby="how-heading">
          <div className="sxo-container">
            <div className="sxo-section-head sxo-reveal">
              <span className="sxo-eyebrow">How it works</span>
              <h2 id="how-heading">From install to insights in <span className="sxo-gradient-text">three steps</span></h2>
              <p>No steep learning curve. No juggling five different tools. SXO Master gets you from audit to action faster.</p>
            </div>
            <div className="sxo-steps">
              {[
                ["01", "Install SXO Master on WordPress", "Upload and activate the plugin. No coding or complex setup required."],
                ["02", "Scan your website or page", "Run a full-site audit or scan a single draft for SEO, AI readiness, UX, clarity, and technical signals."],
                ["03", "Get actionable recommendations", "Receive clear, prioritized fixes you can implement inside WordPress without guesswork."],
              ].map(([number, title, text]) => (
                <article key={number} className="sxo-step sxo-reveal">
                  <span className="sxo-step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="sxo-actions" style={{ marginTop: 44 }}><Link className="sxo-button sxo-button-primary" href="/contact">Get Early Access</Link></div>
          </div>
        </section>

        <section className="sxo-section" id="comparison" aria-labelledby="compare-heading">
          <div className="sxo-container">
            <div className="sxo-section-head sxo-reveal">
              <span className="sxo-eyebrow">Comparison</span>
              <h2 id="compare-heading">Traditional SEO vs <span className="sxo-gradient-text">SXO Master</span></h2>
              <p>SEO got you here. SXO takes you further with a complete search experience approach.</p>
            </div>
            <div className="sxo-compare">
              <article className="sxo-compare-card sxo-reveal">
                <h3>Traditional SEO</h3>
                <ul>
                  <li>Focuses mostly on keyword rankings</li>
                  <li>Limited UX and conversion review</li>
                  <li>Manual, time-consuming checks</li>
                  <li>Little AI-readiness focus</li>
                  <li>Requires multiple disconnected tools</li>
                </ul>
              </article>
              <article className="sxo-compare-card sxo-compare-card-win sxo-reveal">
                <h3>SXO Master</h3>
                <ul>
                  <li>SEO, UX, CRO, and AI visibility in one audit</li>
                  <li>WordPress-native recommendations</li>
                  <li>Content clarity and answer-readiness scoring</li>
                  <li>GEO and AIO checks built in</li>
                  <li>Conversion-focused insights for modern search journeys</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="sxo-section sxo-white-band" id="audience" aria-labelledby="audience-heading">
          <div className="sxo-container">
            <div className="sxo-section-head sxo-reveal">
              <span className="sxo-eyebrow">Who it is for</span>
              <h2 id="audience-heading">Built for everyone who cares about <span className="sxo-gradient-text">search growth</span></h2>
              <p>Whether you manage one website or one hundred, SXO Master adapts to your workflow.</p>
            </div>
            <div className="sxo-grid sxo-grid-four">
              {audiences.map(([title, text]) => <Card key={title} title={title} text={text} />)}
            </div>
          </div>
        </section>

        <section className="sxo-section" id="faq" aria-labelledby="faq-heading">
          <div className="sxo-container">
            <div className="sxo-section-head sxo-reveal">
              <span className="sxo-eyebrow">FAQ</span>
              <h2 id="faq-heading">Frequently asked <span className="sxo-gradient-text">questions</span></h2>
              <p>Everything you need to know about SXO Master and how it supports modern search experience optimization.</p>
            </div>
            <div className="sxo-faq sxo-reveal">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
              <details>
                <summary>How can I get early access?</summary>
                <p>Request early access through <Link href="/contact">SitesBrand contact</Link> or start with a <Link href="/free-audit">free website audit</Link>.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="sxo-section sxo-cta" aria-labelledby="cta-heading">
          <div className="sxo-container">
            <div className="sxo-cta-box sxo-reveal">
              <span className="sxo-eyebrow">Start today</span>
              <h2 id="cta-heading">Build a website that search engines understand, AI tools can read, and real users can trust.</h2>
              <p>Start with a free audit or request early access to SXO Master.</p>
              <div className="sxo-actions">
                <Link className="sxo-button sxo-button-primary" href="/free-audit">Get a Free Audit</Link>
                <Link className="sxo-button sxo-button-dark" href="/contact">Get Early Access</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
