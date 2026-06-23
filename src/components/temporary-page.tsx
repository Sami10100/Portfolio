import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";

type TemporaryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function TemporaryPage({ eyebrow, title, description }: TemporaryPageProps) {
  return (
    <div className="min-h-screen bg-[var(--lsurface)] text-[var(--ltext)]">
      <ExactSitesBrandFragment part="nav" />
      <main className="px-7 py-24">
        <section className="mx-auto max-w-[900px] overflow-hidden rounded-[28px] border border-[var(--lborder)] bg-[var(--lcard)] px-8 py-16 text-center shadow-[var(--lshadow)] sm:px-14">
          <span className="eyebrow text-[#b94435]">✦ {eyebrow}</span>
          <h1 className="font-display mx-auto mt-5 max-w-[720px] text-[clamp(40px,7vw,72px)] font-extrabold leading-[1.02] tracking-[-.035em]">
            {title}<span className="text-[#00bcd4]">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-7 text-[var(--lmuted)]">{description}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link className="btn-cyan" href="/contact#audit">
              Get a Free Audit →
            </Link>
            <a
              className="inline-flex items-center rounded-[12px] border border-[var(--lborder)] px-6 py-3 text-[14px] font-semibold text-[var(--ltext)] no-underline"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <Link className="inline-flex items-center px-4 py-3 text-[14px] font-semibold text-[var(--lmuted)] no-underline" href="/">
              Back home
            </Link>
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
    </div>
  );
}
