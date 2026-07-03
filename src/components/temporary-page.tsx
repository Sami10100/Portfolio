import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";

type TemporaryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  summary?: string;
  sections?: Array<{
    title: string;
    text: string;
    points?: string[];
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

export function TemporaryPage({ eyebrow, title, description, summary, sections = [], faqs = [] }: TemporaryPageProps) {
  return (
    <div className="min-h-screen bg-[var(--lsurface)] text-[var(--ltext)]">
      <ExactSitesBrandFragment part="nav" />
      <main className="px-7 py-24">
        <section className="mx-auto max-w-[980px] overflow-hidden rounded-[28px] border border-[var(--lborder)] bg-[var(--lcard)] px-8 py-16 text-center shadow-[var(--lshadow)] sm:px-14">
          <span className="eyebrow text-[#b94435]">✦ {eyebrow}</span>
          <h1 className="font-display mx-auto mt-5 max-w-[720px] text-[clamp(40px,7vw,72px)] font-extrabold leading-[1.02] tracking-[-.035em]">
            {title}<span className="text-[#00bcd4]">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-7 text-[var(--lmuted)]">{description}</p>
          {summary ? (
            <p className="mx-auto mt-5 max-w-[680px] rounded-[18px] border border-[rgba(0,229,255,.22)] bg-[rgba(0,229,255,.06)] px-5 py-4 text-[15px] leading-7 text-[var(--ltext)]">
              {summary}
            </p>
          ) : null}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link className="btn-cyan" href="/free-audit">
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

        {sections.length ? (
          <section className="mx-auto mt-8 grid max-w-[980px] gap-4 lg:grid-cols-3">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[22px] border border-[var(--lborder)] bg-[var(--lcard)] p-6 shadow-[var(--lshadow)]">
                <h2 className="font-display text-[22px] font-bold tracking-[-.02em] text-[var(--ltext)]">{section.title}</h2>
                <p className="mt-3 text-[14px] leading-7 text-[var(--lmuted)]">{section.text}</p>
                {section.points?.length ? (
                  <ul className="mt-5 space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[13px] leading-6 text-[var(--ltext)]">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00E5FF] text-[10px] font-black text-[#071022]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </section>
        ) : null}

        {faqs.length ? (
          <section className="mx-auto mt-8 max-w-[980px] rounded-[26px] border border-[var(--lborder)] bg-[var(--lcard)] p-7 shadow-[var(--lshadow)]">
            <span className="eyebrow text-[#006f7c]">Answer-first FAQ</span>
            <h2 className="font-display mt-3 text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-.03em]">
              Quick answers for AI search and real buyers<span className="text-[#00bcd4]">.</span>
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[18px] border border-[var(--lborder)] bg-[var(--lchip)] p-5">
                  <h3 className="font-display text-[17px] font-bold text-[var(--ltext)]">{faq.question}</h3>
                  <p className="mt-2 text-[13.5px] leading-7 text-[var(--lmuted)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <ExactSitesBrandFragment part="footer" />
    </div>
  );
}
