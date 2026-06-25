import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";

export type ResourceItem = {
  title: string;
  description: string;
  href: string;
  type: string;
  updated: string;
  points: string[];
};

export type ResourceHubPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  primaryTopic: string;
  summary: string[];
  definitions: Array<[string, string]>;
  steps: string[];
  items: ResourceItem[];
  faqs: Array<[string, string]>;
};

export function resourceHubSchema({
  title,
  description,
  path,
  updated,
  items,
  faqs,
}: Pick<ResourceHubPageProps, "title" | "description" | "updated" | "items" | "faqs"> & { path: string }) {
  const url = `${siteConfig.siteUrl}${path}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      name: title,
      description,
      url,
      dateModified: updated,
      isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: item.title,
            description: item.description,
            url: `${siteConfig.siteUrl}${item.href}`,
            dateModified: item.updated,
          },
        })),
      },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resources",
          item: `${siteConfig.siteUrl}/resources/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ];
}

export function ResourceHubPage({
  eyebrow,
  title,
  description,
  updated,
  primaryTopic,
  summary,
  definitions,
  steps,
  items,
  faqs,
}: ResourceHubPageProps) {
  return (
    <div className="min-h-screen bg-[var(--lsurface)] text-[var(--ltext)]">
      <ExactSitesBrandFragment part="nav" />
      <main className="px-7 py-16 sm:py-24">
        <section className="mx-auto max-w-[1120px]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
            <div>
              <span className="eyebrow text-[#b94435]">✦ {eyebrow}</span>
              <h1 className="font-display mt-5 max-w-[780px] text-[clamp(40px,7vw,78px)] font-extrabold leading-[1.02] tracking-[-.035em]">
                {title}<span className="text-[#00bcd4]">.</span>
              </h1>
              <p className="mt-6 max-w-[720px] text-[17px] leading-8 text-[var(--lmuted)]">{description}</p>
            </div>
            <aside className="rounded-[22px] border border-[var(--lborder)] bg-[var(--lcard)] p-6 shadow-[var(--lshadow)]">
              <dl className="grid gap-4 text-[14px]">
                <div>
                  <dt className="font-bold text-[var(--ltext)]">Primary topic</dt>
                  <dd className="mt-1 text-[var(--lmuted)]">{primaryTopic}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[var(--ltext)]">Last updated</dt>
                  <dd className="mt-1 text-[var(--lmuted)]">
                    <time dateTime={updated}>{updated}</time>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-[var(--ltext)]">Next step</dt>
                  <dd className="mt-2">
                    <Link className="btn-cyan" href="/contact#audit">
                      Request a free audit →
                    </Link>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="mx-auto mt-10 grid max-w-[1120px] gap-5 lg:grid-cols-3">
          {summary.map((point) => (
            <article key={point} className="rounded-[22px] border border-[var(--lborder)] bg-[var(--lcard)] p-6 shadow-[var(--lshadow)]">
              <h2 className="font-display text-[18px] font-bold text-[var(--ltext)]">{point.split(":")[0]}</h2>
              <p className="mt-3 text-[14px] leading-7 text-[var(--lmuted)]">{point.includes(":") ? point.split(":").slice(1).join(":").trim() : point}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-8 grid max-w-[1120px] gap-6 lg:grid-cols-[0.85fr_1fr]">
          <article className="rounded-[26px] border border-[var(--lborder)] bg-[var(--lcard)] p-7 shadow-[var(--lshadow)]">
            <span className="eyebrow text-[#006f7c]">Definitions</span>
            <h2 className="font-display mt-3 text-[clamp(28px,4vw,46px)] font-extrabold tracking-[-.03em]">
              Terms buyers and AI systems need clarified
            </h2>
            <dl className="mt-6 grid gap-4">
              {definitions.map(([term, definition]) => (
                <div key={term} className="rounded-[18px] border border-[var(--lborder)] bg-[var(--lchip)] p-5">
                  <dt className="font-display text-[18px] font-bold">{term}</dt>
                  <dd className="mt-2 text-[14px] leading-7 text-[var(--lmuted)]">{definition}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-[26px] border border-[var(--lborder)] bg-[var(--lcard)] p-7 shadow-[var(--lshadow)]">
            <span className="eyebrow text-[#b94435]">How to use this hub</span>
            <h2 className="font-display mt-3 text-[clamp(28px,4vw,46px)] font-extrabold tracking-[-.03em]">
              Start with the page that matches your growth blocker
            </h2>
            <ol className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-[18px] border border-[var(--lborder)] bg-[var(--lchip)] p-5 text-[14px] leading-7 text-[var(--lmuted)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A1B41] text-[12px] font-black text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className="mx-auto mt-8 max-w-[1120px] rounded-[26px] border border-[var(--lborder)] bg-[var(--lcard)] p-7 shadow-[var(--lshadow)]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow text-[#006f7c]">Resource map</span>
              <h2 className="font-display mt-3 text-[clamp(30px,4vw,52px)] font-extrabold tracking-[-.03em]">
                Recommended reading and tools
              </h2>
            </div>
            <Link className="inline-flex rounded-[12px] border border-[var(--lborder)] px-5 py-3 text-[14px] font-bold no-underline" href="/services">
              View services
            </Link>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-[var(--lborder)] text-[12px] uppercase tracking-[.12em] text-[var(--lmuted)]">
                  <th className="py-3 pr-4">Resource</th>
                  <th className="py-3 pr-4">Type</th>
                  <th className="py-3 pr-4">Best for</th>
                  <th className="py-3">Updated</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.title} className="border-b border-[var(--lborder)] align-top">
                    <td className="py-5 pr-4">
                      <Link className="font-display text-[18px] font-bold text-[var(--ltext)] no-underline" href={item.href}>
                        {item.title}
                      </Link>
                      <p className="mt-2 max-w-[420px] text-[13.5px] leading-6 text-[var(--lmuted)]">{item.description}</p>
                    </td>
                    <td className="py-5 pr-4 text-[var(--lmuted)]">{item.type}</td>
                    <td className="py-5 pr-4">
                      <ul className="grid gap-2 text-[13px] leading-6 text-[var(--lmuted)]">
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-5 text-[var(--lmuted)]">
                      <time dateTime={item.updated}>{item.updated}</time>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-[1120px] rounded-[26px] border border-[var(--lborder)] bg-[var(--lcard)] p-7 shadow-[var(--lshadow)]">
          <span className="eyebrow text-[#006f7c]">Answer-first FAQ</span>
          <h2 className="font-display mt-3 text-[clamp(30px,4vw,52px)] font-extrabold tracking-[-.03em]">
            Quick answers for search and AI assistants
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-[18px] border border-[var(--lborder)] bg-[var(--lchip)] p-5">
                <summary className="cursor-pointer font-display text-[17px] font-bold">{question}</summary>
                <p className="mt-3 text-[13.5px] leading-7 text-[var(--lmuted)]">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
    </div>
  );
}
