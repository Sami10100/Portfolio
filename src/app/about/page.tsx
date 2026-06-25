import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig, team } from "@/config/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About SitesBrand | Psychology, Design & Technology",
  description:
    "Learn how SitesBrand blends psychology, design, SEO, AI search optimization, automation, and development to build growth systems for ambitious brands.",
  alternates: {
    canonical: "/about",
  },
};

const storyCards = [
  {
    title: "Psychology-Driven",
    text: "We start with insight, understanding why people click, trust, and convert before we design a single pixel.",
    icon: "01",
  },
  {
    title: "Design-Led",
    text: "Every screen is crafted to build trust, hold attention, and move visitors one decisive step closer to action.",
    icon: "02",
  },
  {
    title: "Technology-Powered",
    text: "We use AI, automation, and modern engineering to build sites that scale faster than the markets they serve.",
    icon: "03",
  },
] as const;

const whyCards = [
  {
    title: "Psychology-Led Strategy",
    text: "We blend behavioral insights with data to shape strategies that resonate and perform.",
    image: "/assets/service-ai-search.png",
  },
  {
    title: "Search Built for AI",
    text: "We optimize for how people and AI discover, evaluate, and choose brands today.",
    image: "/assets/service-seo-content.png",
  },
  {
    title: "Design That Converts",
    text: "Beautiful, intuitive experiences crafted to engage, build trust, and drive action.",
    image: "/assets/service-uiux.png",
  },
  {
    title: "Systems That Scale",
    text: "We engineer scalable, automated systems that grow with your brand and goals.",
    image: "/assets/about-logo-platform.png",
  },
] as const;

const services = [
  {
    title: "AI Search Optimization",
    text: "Optimize for visibility across AI search and next-gen discovery.",
    image: "/assets/service-ai-search.png",
    badge: "Flagship",
  },
  {
    title: "SEO & Content Strategy",
    text: "Rank higher with content that connects and converts.",
    image: "/assets/service-seo-content.png",
    badge: "",
  },
  {
    title: "AI Automation",
    text: "Automate workflows and scale operations with AI.",
    image: "/assets/service-ai-automation.png",
    badge: "",
  },
  {
    title: "UI/UX & Brand Design",
    text: "Design experiences that build trust and drive action.",
    image: "/assets/service-uiux.png",
    badge: "",
  },
  {
    title: "Web Development",
    text: "Fast, modern websites built for performance and scale.",
    image: "/assets/service-web-dev.png",
    badge: "",
  },
  {
    title: "Sales & Lead Generation",
    text: "Attract, engage, and convert high-intent leads into customers.",
    image: "/assets/service-lead-generation.png",
    badge: "",
  },
] as const;

const values = [
  {
    title: "Mission",
    text: "Help ambitious brands grow through intelligent digital systems that combine human insight with modern technology.",
    icon: "M",
  },
  {
    title: "Vision",
    text: "Build a future where psychology, design, and technology work together as one engine for measurable growth.",
    icon: "V",
  },
  {
    title: "Values",
    text: "Clarity, trust, innovation, and performance are the constants behind every system we ship.",
    icon: "C",
  },
] as const;

const principleRow = [
  ["Clarity", "We make complex growth simple and actionable."],
  ["Trust", "We build relationships on transparency and reliability."],
  ["Innovation", "We challenge norms and create what is next."],
  ["Performance", "We focus on outcomes that drive real growth."],
] as const;

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${siteConfig.siteUrl}/about#about-page`,
      url: `${siteConfig.siteUrl}/about`,
      name: "About SitesBrand",
      description: metadata.description,
      isPartOf: {
        "@id": `${siteConfig.siteUrl}/#website`,
      },
      about: {
        "@id": `${siteConfig.siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/assets/sitesbrand-wordmark-transparent.png`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      foundingDate: "2023",
      slogan: "Where Psychology Meets Design and Technology",
      description:
        "SitesBrand blends psychology, design, SEO, AI search optimization, automation, and development to build measurable digital growth systems.",
      sameAs: [siteConfig.social.linkedin, siteConfig.social.facebook],
    },
    ...team.map(([name, role, profile]) => ({
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/about#${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
      name,
      jobTitle: role,
      url: `${siteConfig.siteUrl}/about`,
      sameAs: [profile],
      worksFor: {
        "@id": `${siteConfig.siteUrl}/#organization`,
      },
    })),
  ],
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="about-label">
      <span aria-hidden="true">+</span>
      {children}
    </p>
  );
}

function ImageStage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`about-image-stage ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1254}
        height={1254}
        priority={priority}
        sizes="(max-width: 768px) 92vw, 48vw"
        className="about-stage-img"
        quality={72}
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="about-band about-dark about-hero">
          <div className="about-wrap about-split hero-split">
            <div className="about-copy hero-copy">
              <SectionLabel>About SitesBrand</SectionLabel>
              <h1>
                Where Psychology Meets Design and Technology<span>.</span>
              </h1>
              <div className="about-rich-text">
                <p>
                  In <strong>2023</strong>, we started SitesBrand with nothing but belief,
                  no clients, no roadmap, just rejection after rejection. Every proposal
                  was ignored. Every pitch met with silence.
                </p>
                <p>
                  Those failures forced us to think deeper, and that is when we found it.
                  Growth lives at the intersection of <strong>psychology</strong>,{" "}
                  <strong>design</strong>, and <strong>technology</strong>.
                </p>
              </div>
              <div className="about-actions-row">
                <Link className="about-btn about-btn-primary" href="/free-audit">
                  Get a Free Audit <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link className="about-btn about-btn-secondary" href="#story">
                  See Our Story
                </Link>
              </div>
              <div className="about-proof-row" aria-label="SitesBrand strengths">
                <span>Strategy-Led</span>
                <span>AI-Driven</span>
                <span>Conversion-Focused</span>
              </div>
            </div>
            <ImageStage
              src="/assets/about-clean-1.png"
              alt="SitesBrand psychology, design, and technology orbit"
              priority
              className="hero-stage"
            />
          </div>
        </section>

        <section id="story" className="about-band about-light about-story">
          <div className="about-wrap about-split story-split">
            <div className="about-copy">
              <SectionLabel>Our Story</SectionLabel>
              <h2>
                Built to turn insight into growth<span>.</span>
              </h2>
              <div className="about-rich-text light-text">
                <p>
                  The early rejection did not break us. It rewired us. We stopped chasing
                  trends and started studying behavior: why people stay, why they leave,
                  and what actually moves them to act.
                </p>
                <p>
                  Today, SitesBrand combines psychology, design, SEO, AI search
                  optimization, automation, and development to help ambitious brands grow
                  with clarity.
                </p>
                <p>
                  We do not just ship websites. We build intelligent growth systems that
                  attract, convert, and scale.
                </p>
              </div>
              <div className="story-card-grid">
                {storyCards.map((card) => (
                  <article key={card.title}>
                    <span>{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <ImageStage
              src="/assets/about-clean-2.png"
              alt="SitesBrand story system with psychology, design, and technology"
              className="light-stage"
            />
          </div>
        </section>

        <section className="about-band about-dark about-choice">
          <div className="about-wrap about-split">
            <div className="about-copy">
              <SectionLabel>Why Brands Choose Us</SectionLabel>
              <h2>
                Built around human behavior and business outcomes<span>.</span>
              </h2>
              <p className="about-section-lead">
                We are not the cheapest, and we are not for everyone. We are for founders
                who understand that traffic without trust is just noise. We turn attention
                into intent, and intent into revenue.
              </p>
              <div className="choice-card-grid">
                {whyCards.map((card) => (
                  <article key={card.title}>
                    <Image src={card.image} alt="" width={210} height={210} sizes="96px" />
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <ImageStage
              src="/assets/about-clean-3.png"
              alt="SitesBrand human insight, AI search, conversion design, and scalable systems orbit"
              className="choice-stage"
            />
          </div>
          <div className="about-wrap about-mini-row">
            <span>Strategy-Led</span>
            <span>AI-Driven</span>
            <span>Conversion-Focused</span>
          </div>
        </section>

        <section className="about-band about-dark about-services">
          <div className="about-wrap">
            <div className="services-head">
              <div>
                <SectionLabel>What We Bring</SectionLabel>
                <h2>
                  Expertise that blends growth, design, and automation<span>.</span>
                </h2>
              </div>
              <div className="services-orbit-stage" aria-hidden="true">
                <span />
                <span />
                <span />
                <Image
                  src="/assets/about-logo-platform.png"
                  alt=""
                  width={420}
                  height={420}
                  sizes="(max-width: 920px) 0px, 300px"
                  className="services-head-img"
                />
              </div>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className={service.badge ? "featured" : undefined}>
                  <Image src={service.image} alt="" width={240} height={240} sizes="120px" />
                  <div>
                    {service.badge ? <span className="about-badge">{service.badge}</span> : null}
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="about-note">
              Built for brands that want more than visibility. They want momentum<span>.</span>
            </p>
          </div>
        </section>

        <section className="about-band about-dark about-values">
          <div className="about-wrap about-split">
            <div className="about-copy">
              <SectionLabel>Mission, Vision &amp; Values</SectionLabel>
              <h2>
                The principles behind every growth system we build<span>.</span>
              </h2>
              <p className="about-section-lead">
                When everything was uncertain, our principles became the compass. They are
                the reason we say no to vanity work and yes to projects where outcomes
                actually matter.
              </p>
              <div className="values-grid">
                {values.map((value) => (
                  <article key={value.title}>
                    <span>{value.icon}</span>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <ImageStage
              src="/assets/about-clean-4.png"
              alt="SitesBrand mission, values, insight, and growth system"
              className="values-stage"
            />
          </div>
          <div className="about-wrap principle-row">
            {principleRow.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <ExactSitesBrandFragment part="team" />

        <section className="about-band about-light about-final">
          <div className="about-wrap final-card">
            <div>
              <h2>
                Ready to build smarter growth<span>?</span>
              </h2>
              <p>
                The story started with rejection. Yours does not have to. Let us turn
                strategy, design, and technology into measurable momentum for your brand.
              </p>
              <div className="about-actions-row">
                <Link className="about-btn about-btn-primary" href="/free-audit">
                  Get a Free Audit <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link className="about-btn light-secondary" href="/free-audit">
                  Get a Free Audit
                </Link>
              </div>
            </div>
            <Image
              src="/assets/about-cta-dashboard.png"
              alt="SitesBrand growth engine dashboard"
              width={1448}
              height={1086}
              sizes="(max-width: 768px) 92vw, 46vw"
              className="final-img"
              quality={72}
            />
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
