import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";

export type LegalSection = {
  title: string;
  paragraphs?: React.ReactNode[];
  items?: React.ReactNode[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, introduction, sections }: LegalPageProps) {
  return (
    <div className="legal-page">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <header className="legal-hero">
          <div className="legal-wrap">
            <p className="legal-label">
              <span aria-hidden="true">+</span>
              {eyebrow}
            </p>
            <h1>
              {title}<span>.</span>
            </h1>
            <p className="legal-intro">{introduction}</p>
            <div className="legal-meta">
              <span>Last updated: June 23, 2026</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>
        </header>

        <section className="legal-content">
          <div className="legal-wrap legal-grid">
            <aside aria-label="Legal page navigation">
              <p>On this page</p>
              {sections.map((section, index) => (
                <a key={section.title} href={`#section-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </aside>

            <div className="legal-sections">
              {sections.map((section, index) => (
                <section key={section.title} id={`section-${index + 1}`}>
                  <p className="legal-section-number">{String(index + 1).padStart(2, "0")}</p>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                  {section.items ? (
                    <ul>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <div className="legal-contact-card">
                <p className="legal-label">
                  <span aria-hidden="true">+</span>
                  Questions or requests
                </p>
                <h2>Talk to a real person.</h2>
                <p>
                  Email us about privacy, cookies, website terms, or information associated with
                  your inquiry. We may need to verify your identity before completing a request.
                </p>
                <div>
                  <a href={`mailto:${siteConfig.email}`}>Email {siteConfig.email}</a>
                  <Link href="/contact">Contact options</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
    </div>
  );
}
