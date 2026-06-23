import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";
import "./case-studies.css";

export const metadata: Metadata = {
  title: "Case Studies | Growth Systems Built by SitesBrand",
  description:
    "Explore how SitesBrand combines strategy, psychology, design, automation, and development to solve complex growth challenges.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | SitesBrand",
    description:
      "Three stories about turning fragmented journeys, manual workflows, and conversion friction into focused growth systems.",
    url: "/case-studies",
    type: "website",
  },
};

const caseStudies = [
  {
    id: "trackora",
    number: "01",
    name: "Trackora",
    industry: "Logistics & Supply Chain",
    duration: "10 weeks",
    accent: "#00e5ff",
    image: "/assets/service-ai-automation.png",
    imageAlt: "AI automation system visualization",
    headline: "From scattered updates to one living view of every shipment.",
    opening:
      "Trackora was growing across regional hubs, but its information was not growing with it. Dispatch teams worked from calls and spreadsheets. Exceptions appeared after they had already become delays. Leadership could see activity, but not the full story.",
    challenge:
      "The real problem was not a shortage of data. It was that every team held a different fragment of it. Without a shared operating picture, small issues travelled quietly through the network until they became expensive promises to recover.",
    turningPoint:
      "We reframed the brief from “build a dashboard” to “create one version of operational truth.” That changed what had to be designed: not another reporting screen, but a system that helped people notice, decide, and act earlier.",
    strategy: [
      "Mapped the shipment journey across dispatch, driver, hub, and leadership touchpoints.",
      "Designed a real-time operations dashboard around exceptions rather than passive reporting.",
      "Automated alerts so the right team could respond while an issue was still recoverable.",
      "Created regional comparison views without exposing confidential carrier or hub data.",
    ],
    services: ["Product strategy", "Dashboard UX", "Web development", "Workflow automation"],
    results: [
      ["+142%", "Traffic growth"],
      ["+28%", "On-time delivery"],
      ["-37%", "Delivery exceptions"],
      ["96.2%", "On-time rate"],
    ],
    proof:
      "8,347 shipments were brought into a real-time view, replacing delayed check-ins with a shared picture of what needed attention now.",
    clientQuote:
      "SitesBrand gave our team the visibility we had been missing. We can now see issues earlier, act faster, and keep every region working from the same operational picture.",
    clientName: "Trackora Operations Team",
    clientRole: "Logistics & Supply Chain",
    privacy: "Internal platform. Exact volumes, hub locations, and carrier identities remain confidential.",
  },
  {
    id: "finovo",
    number: "02",
    name: "Finovo",
    industry: "Fintech / SaaS",
    duration: "8 weeks",
    accent: "#7b7bff",
    image: "/assets/about-logo-platform.png",
    imageAlt: "Connected digital platform visualization",
    headline: "A billing workflow that stopped chasing numbers and started revealing momentum.",
    opening:
      "Finovo's finance team knew the business was moving, but the evidence arrived late. Invoices lived across spreadsheets, collection status required manual follow-up, and cash-flow visibility depended on stitching together reports from several systems.",
    challenge:
      "The friction was emotional as much as operational. When leaders cannot see which invoices are healthy, delayed, or at risk, every forecast carries uncertainty—and the team spends its best attention chasing information instead of improving outcomes.",
    turningPoint:
      "We made visibility the foundation and automation the follow-through. The system first had to explain the state of the business clearly; only then could reminders and workflows act intelligently on that information.",
    strategy: [
      "Audited the complete journey from invoice creation to payment and reconciliation.",
      "Unified revenue, paid invoices, and collection time inside one reporting experience.",
      "Connected CRM and billing signals to identify at-risk invoices earlier.",
      "Automated contextual reminders while preserving a human, professional client experience.",
    ],
    services: ["Workflow audit", "Billing automation", "Reporting UX", "CRM integration"],
    results: [
      ["+45%", "Revenue growth"],
      ["-26%", "Collection time"],
      ["+32%", "Paid invoices"],
      ["18 days", "Average collection"],
    ],
    proof:
      "The new system tracked 1,246 invoices in a single workflow and turned a delayed reporting habit into an always-current financial picture.",
    clientQuote:
      "The new workflow changed how our finance team operates. Reporting is clearer, follow-ups happen on time, and we finally have confidence in what the numbers are telling us.",
    clientName: "Finovo Finance Team",
    clientRole: "Fintech / SaaS",
    privacy: "Private SaaS platform. Client lists and exact financial records are not shown publicly.",
  },
  {
    id: "healthify",
    number: "03",
    name: "Healthify",
    industry: "Healthcare",
    duration: "12 weeks",
    accent: "#ff6f59",
    image: "/assets/service-uiux.png",
    imageAlt: "Human-centered digital experience visualization",
    headline: "Turning patient hesitation into a clearer, kinder path to care.",
    opening:
      "Healthify had traffic, services, and capable providers—but too many visitors disappeared before booking. The experience answered clinical questions while overlooking the quieter ones patients carry: Can I trust this? Will this be difficult? What happens after I begin?",
    challenge:
      "The booking flow asked for commitment before it created confidence. Too many steps amplified uncertainty, while the content described services without helping patients feel understood. Acquisition and retention were being treated as separate problems.",
    turningPoint:
      "We rebuilt the journey around patient psychology. Reassurance came before instruction, choices became simpler, and follow-up became part of the experience instead of an afterthought.",
    strategy: [
      "Rewrote key content to address uncertainty before presenting treatment or service details.",
      "Reduced the booking journey to the few decisions a patient genuinely needed to make.",
      "Introduced automated, privacy-conscious follow-up sequences after the first visit.",
      "Created a reporting view for acquisition, appointments, and retention without exposing patient data.",
    ],
    services: ["Content strategy", "Booking UX", "Patient automation", "Conversion optimization"],
    results: [
      ["+67%", "New patients"],
      ["+38%", "Appointments"],
      ["91%", "Patient retention"],
      ["+54%", "Revenue growth"],
    ],
    proof:
      "The redesigned journey supported 3,892 appointments and 2,341 new-patient actions while keeping all patient-identifying information outside the public story.",
    clientQuote:
      "SitesBrand understood that patients need reassurance before they need another sales message. The new experience feels simpler, more human, and much easier for our care team to support.",
    clientName: "Healthify Care Team",
    clientRole: "Healthcare",
    privacy: "Patient data, clinic identifiers, and all PHI-adjacent information are excluded.",
  },
] as const;

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SitesBrand Case Studies",
  url: `${siteConfig.siteUrl}/case-studies`,
  description:
    "A collection of SitesBrand project stories across logistics, fintech, and healthcare.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: `${study.name} — ${study.headline}`,
        description: study.opening,
        industry: study.industry,
        creator: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.siteUrl,
        },
      },
    })),
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="cases-page">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="cases-hero">
          <div className="cases-wrap cases-hero-grid">
            <div>
              <p className="cases-label">
                <span aria-hidden="true">+</span>
                Selected Case Studies
              </p>
              <h1>
                The work behind the numbers<span>.</span>
              </h1>
              <p className="cases-hero-copy">
                Growth rarely begins with a perfect brief. It begins with a knot: scattered
                information, hesitant customers, or a system that asks people to work harder
                than it should. These are three stories about finding that knot—and designing
                a clearer way forward.
              </p>
              <div className="cases-actions">
                <a href="#trackora" className="cases-btn cases-btn-primary">
                  Explore the stories <span aria-hidden="true">↓</span>
                </a>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cases-btn cases-btn-secondary"
                >
                  Discuss a similar project
                </a>
              </div>
            </div>

            <div className="cases-index" aria-label="Case study index">
              <p>Three industries. One method.</p>
              {caseStudies.map((study) => (
                <a key={study.id} href={`#${study.id}`}>
                  <span>{study.number}</span>
                  <strong>{study.name}</strong>
                  <small>{study.industry}</small>
                  <i aria-hidden="true">↘</i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cases-principle">
          <div className="cases-wrap cases-principle-grid">
            <p>Our case-study lens</p>
            <h2>
              We do not begin with deliverables. We begin with the moment growth gets
              stuck.
            </h2>
            <div className="cases-method">
              <span>Understand the tension</span>
              <span>Design the turning point</span>
              <span>Build the system</span>
              <span>Measure the change</span>
            </div>
          </div>
        </section>

        {caseStudies.map((study, index) => (
          <article
            key={study.id}
            id={study.id}
            className={`case-story ${index % 2 === 0 ? "case-story-dark" : "case-story-light"}`}
            style={{ "--case-accent": study.accent } as React.CSSProperties}
          >
            <div className="cases-wrap">
              <header className="case-story-head">
                <div>
                  <p className="case-kicker">
                    <span>{study.number}</span>
                    {study.industry}
                  </p>
                  <h2>
                    {study.name}
                    <span>.</span>
                  </h2>
                </div>
                <div className="case-meta">
                  <span>Project duration</span>
                  <strong>{study.duration}</strong>
                  <small>{study.privacy}</small>
                </div>
              </header>

              <div className="case-opening-grid">
                <div className="case-opening-copy">
                  <h3>{study.headline}</h3>
                  <p>{study.opening}</p>
                  <div className="case-service-list" aria-label={`${study.name} services`}>
                    {study.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                </div>
                <div className="case-visual" aria-hidden="true">
                  <span className="case-visual-number">{study.number}</span>
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    width={1254}
                    height={1254}
                    sizes="(max-width: 900px) 88vw, 42vw"
                    quality={75}
                  />
                  <p>{study.name} system</p>
                </div>
              </div>

              <div className="case-narrative">
                <section>
                  <p className="case-section-label">The tension</p>
                  <h3>What was really getting in the way.</h3>
                  <p>{study.challenge}</p>
                </section>
                <section>
                  <p className="case-section-label">The turning point</p>
                  <h3>The question that changed the brief.</h3>
                  <p>{study.turningPoint}</p>
                </section>
              </div>

              <div className="case-build-grid">
                <section>
                  <p className="case-section-label">The system we built</p>
                  <h3>From insight to an experience people could act on.</h3>
                  <ol>
                    {study.strategy.map((step, stepIndex) => (
                      <li key={step}>
                        <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                        <p>{step}</p>
                      </li>
                    ))}
                  </ol>
                </section>
                <aside>
                  <p className="case-section-label">What the client said</p>
                  <blockquote>“{study.clientQuote}”</blockquote>
                  <div>
                    <span>{study.name.slice(0, 1)}</span>
                    <p>
                      <strong>{study.clientName}</strong>
                      <small>{study.clientRole}</small>
                    </p>
                  </div>
                </aside>
              </div>

              <section className="case-results">
                <div className="case-results-intro">
                  <p className="case-section-label">The outcome</p>
                  <h3>A clearer system created measurable movement.</h3>
                  <p>{study.proof}</p>
                </div>
                <div className="case-metrics">
                  {study.results.map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </article>
        ))}

        <section className="cases-next">
          <div className="cases-wrap cases-next-card">
            <div>
              <p className="cases-label">
                <span aria-hidden="true">+</span>
                Your story could be next
              </p>
              <h2>
                Bring us the knot. We will help you find the thread<span>.</span>
              </h2>
              <p>
                Tell us where growth feels unclear, slow, or unnecessarily complicated.
                We will map the opportunity and show you the first practical move.
              </p>
              <div className="cases-actions">
                <Link href="/contact#audit" className="cases-btn cases-btn-primary">
                  Request a free audit <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cases-btn cases-btn-ink"
                >
                  Book a strategy call
                </a>
              </div>
            </div>
            <div className="cases-next-mark">
              <Image
                src="/assets/sitesbrand-icon-transparent.png"
                alt="SitesBrand"
                width={420}
                height={505}
                sizes="(max-width: 900px) 44vw, 280px"
              />
              <span>Psychology</span>
              <span>Design</span>
              <span>Technology</span>
            </div>
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
