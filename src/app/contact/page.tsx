import type { Metadata } from "next";
import { AuditRequestForm } from "@/components/audit-request-form";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SitesBrand by Calendly, WhatsApp, email, phone, or LinkedIn.",
  alternates: {
    canonical: "/contact",
  },
};

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

const contactOptions = [
  ["Book a strategy call", "Choose a convenient 30-minute slot.", siteConfig.calendlyUrl, "Open Calendly"],
  ["Chat on WhatsApp", "Start a quick conversation with our team.", siteConfig.whatsappUrl, "Open WhatsApp"],
  ["Send an email", siteConfig.email, `mailto:${siteConfig.email}`, siteConfig.email],
  ["Call us", siteConfig.phone, phoneHref, siteConfig.phone],
  ["Connect on LinkedIn", "Follow SitesBrand and send us a message.", siteConfig.social.linkedin, "Open LinkedIn"],
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--lsurface)] text-[var(--ltext)]">
      <ExactSitesBrandFragment part="nav" />
      <main className="px-7 py-20">
        <section className="mx-auto max-w-[1080px]">
          <div className="text-center">
            <span className="eyebrow text-[#b94435]">✦ Let&apos;s Talk</span>
            <h1 className="font-display mt-5 text-[clamp(42px,7vw,76px)] font-extrabold leading-none tracking-[-.04em]">
              Pick the easiest way to reach us<span className="text-[#00bcd4]">.</span>
            </h1>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {contactOptions.map(([title, description, href, label]) => (
              <a
                key={title}
                className="group rounded-[20px] border border-[var(--lborder)] bg-[var(--lcard)] p-7 text-[var(--ltext)] no-underline shadow-[var(--lshadow)]"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <h2 className="font-display text-[22px] font-bold">{title}</h2>
                <p className="mt-2 text-[14px] leading-6 text-[var(--lmuted)]">{description}</p>
                <span className="mt-6 inline-flex font-semibold text-[#006f7c]">{label} →</span>
              </a>
            ))}
          </div>
          <section id="audit" className="mt-20 scroll-mt-28">
            <div className="grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <span className="eyebrow text-[#b94435]">✦ Free Growth Audit</span>
                <h2 className="font-display mt-5 text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-.035em]">
                  Show us what feels stuck<span className="text-[#00bcd4]">.</span>
                </h2>
                <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-[var(--lmuted)]">
                  Share your website and biggest growth challenge. We will use the first conversation to identify the clearest opportunity—not to promise results before seeing the evidence.
                </p>
              </div>
              <AuditRequestForm />
            </div>
          </section>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
    </div>
  );
}
