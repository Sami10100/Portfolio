import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { siteConfig } from "@/config/site";

const path = "/resources/tools";
const updated = "2026-07-04";
const toolScreenshot = "/assets/tools/sxo-master-dashboard.webp";

const tool = {
  title: "SXO Master",
  description:
    "A SitesBrand WordPress tool for checking SEO, AEO, GEO, AIO, user experience, and conversion readiness in one audit dashboard.",
  href: "/resources/tools/sxo-master",
  image: toolScreenshot,
  imageAlt: "SXO Master WordPress dashboard showing SEO, AEO, GEO, AIO, and SXO audit scores",
  type: "WordPress Plugin",
  updated,
};

const tools = [tool];

const faqs = [
  ["What is SXO Master?", "SXO Master is a SitesBrand tool page for a WordPress plugin that audits SEO, AEO, GEO, AIO, SXO, UX, technical signals, and conversion readiness."],
  ["Why does the tools card use this image?", "The tools card uses the actual SXO Master dashboard screenshot from the tool page, not a generic blog image."],
  ["Does this page include tool schema?", "Yes. It includes CollectionPage, SoftwareApplication, BreadcrumbList, and FAQPage JSON-LD for search engines and AI crawlers."],
  ["Is SXO Master available as a public download?", "The current page presents the product and early access path. Users can open the tool page or request access through SitesBrand."],
] as const;

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Free SitesBrand tools for SEO, AEO, GEO, AIO, SXO, AI search readiness, and growth operations.",
  alternates: { canonical: path },
  openGraph: {
    title: "SitesBrand Tools",
    description:
      "Practical tools for modern search optimization, AI visibility, technical SEO, conversion, and lead automation.",
    url: path,
    type: "website",
    images: [{ url: tool.image, width: 1600, height: 1110, alt: tool.imageAlt }],
  },
};

function schemas() {
  const url = `${siteConfig.siteUrl}${path}`;
  const toolUrl = `${siteConfig.siteUrl}${tool.href}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      name: "SitesBrand Tools",
      description: metadata.description,
      url,
      dateModified: updated,
      isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: tools.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": `${toolUrl}#software` },
        })),
      },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${toolUrl}#software`,
      name: tool.title,
      applicationCategory: "SEO Plugin",
      applicationSubCategory: "Search Experience Optimization",
      operatingSystem: "WordPress",
      description: tool.description,
      image: `${siteConfig.siteUrl}${tool.image}`,
      screenshot: `${siteConfig.siteUrl}${tool.image}`,
      url: toolUrl,
      author: { "@id": `${siteConfig.siteUrl}/#organization` },
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        url: `${siteConfig.siteUrl}/contact`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "Tools", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];
}

function ToolCard() {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#dfe5f0] bg-white shadow-[0_24px_70px_-52px_rgba(26,27,65,.48)] transition hover:-translate-y-1 hover:border-[#00b7d6]/45">
      <Link className="relative block overflow-hidden bg-[#070819] no-underline" href={tool.href} aria-label={tool.title}>
        <Image
          className="aspect-[16/9] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          src={tool.image}
          alt={tool.imageAlt}
          width={1600}
          height={1110}
          sizes="(min-width: 1024px) 430px, 100vw"
        />
        <div className="absolute left-4 top-4 rounded-[8px] border border-[#00e5ff]/30 bg-[#071026]/85 px-3 py-1 text-[12px] font-black uppercase tracking-[.08em] text-[#00e5ff]">
          Tool
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-[#656984]">
          <span className="text-[#0077ff]">{tool.type}</span>
          <span aria-hidden="true">|</span>
          <time dateTime={tool.updated}>{tool.updated}</time>
        </div>
        <h2 className="font-display mt-3 text-[22px] font-bold leading-[1.2] text-[#1a1b41]">
          <Link className="text-[#1a1b41] no-underline" href={tool.href}>
            {tool.title}
          </Link>
        </h2>
        <p className="mt-3 text-[14.5px] leading-7 text-[#5b5d77]">{tool.description}</p>
        <div className="mt-5">
          <Link className="inline-flex min-h-10 items-center justify-center rounded-[10px] bg-[#1a1b41] px-4 text-[13px] font-black text-white no-underline shadow-[0_16px_34px_-22px_rgba(26,27,65,.9)] transition hover:-translate-y-0.5 hover:bg-[#101735]" href={tool.href}>
            View Tool
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ToolsResourcesPage() {
  const pageSchemas = schemas();

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#1a1b41]">
      <ExactSitesBrandFragment part="nav" />
      <main>
        <section className="bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,.13),transparent_34%),linear-gradient(180deg,#090d1e_0%,#070819_100%)] px-5 py-16 sm:px-7 sm:py-24">
          <div className="mx-auto max-w-[1180px] text-center">
            <p className="text-[12px] font-black uppercase tracking-[.18em] text-[#00e5ff]">SitesBrand Resources</p>
            <h1 className="font-display mt-4 text-[clamp(44px,7vw,76px)] font-extrabold leading-[.96]">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#ff6f59] bg-clip-text text-transparent">Growth</span>
              <br />
              Tools
            </h1>
            <p className="mx-auto mt-5 max-w-[720px] text-[17px] leading-8 text-[#aeb6d5]">
              SitesBrand tools for SEO, AI search, WordPress, conversion, and modern search experience optimization.
            </p>
          </div>
        </section>

        <section className="border-y border-[#dde4ef] bg-white px-5 py-8 sm:px-7">
          <div className="mx-auto max-w-[760px]">
            <form action="/search" className="grid gap-3 sm:grid-cols-[190px_1fr]" role="search">
              <label className="sr-only" htmlFor="tool-category">Tool category</label>
              <select id="tool-category" className="min-h-12 rounded-[10px] border border-[#d8e0ec] bg-[#f8fafd] px-4 text-[14px] text-[#1a1b41] outline-none">
                <option>All tool categories</option>
              </select>
              <label className="sr-only" htmlFor="tool-search">Search tools</label>
              <input id="tool-search" suppressHydrationWarning className="min-h-12 rounded-[10px] border border-[#d8e0ec] bg-[#f8fafd] px-4 text-[14px] text-[#1a1b41] outline-none placeholder:text-[#7a8098]" name="q" placeholder="Search tools..." type="search" />
            </form>
            <div className="mt-4 flex flex-wrap gap-2 rounded-[12px] bg-[#eef3f9] p-1 text-[14px] text-[#5b5d77]">
              <span className="rounded-[9px] bg-[#1a1b41] px-5 py-2 text-white">All ({tools.length})</span>
              <span className="px-5 py-2">WordPress ({tools.length})</span>
            </div>
            <p className="mt-6 text-center text-[14px] text-[#656984]">Showing 1-{tools.length} of {tools.length} tools</p>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-7 sm:py-14">
          <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ToolCard />
          </div>
        </section>

        <section className="px-5 pb-14 sm:px-7">
          <div className="mx-auto grid max-w-[1180px] gap-6 rounded-[22px] border border-[#00e5ff]/24 bg-[radial-gradient(circle_at_88%_18%,rgba(0,229,255,.2),transparent_32%),linear-gradient(135deg,#1a1b41_0%,#071026_100%)] p-7 text-white shadow-[0_34px_90px_-56px_rgba(26,27,65,.9)] md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[.16em] text-[#00e5ff]">Need a real audit?</p>
              <h2 className="font-display mt-2 text-[clamp(26px,4vw,42px)] font-extrabold">Use tools, then prioritize what matters.</h2>
              <p className="mt-3 max-w-[680px] text-[15px] leading-7 text-[#aeb6d5]">Get a free SitesBrand audit to turn SXO findings into a practical growth roadmap.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-gradient-to-r from-[#00e5ff] to-[#35d4ff] px-6 text-[14px] font-black text-[#070819] no-underline shadow-[0_18px_38px_-18px_rgba(0,229,255,.8)] transition hover:-translate-y-0.5" href="/free-audit">
                Get a Free Audit
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-[12px] border border-white/[.18] bg-white/10 px-6 text-[14px] font-black text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/[.16]" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-7">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="font-display text-[34px] font-extrabold text-[#1a1b41]">Tools FAQ</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-[12px] border border-[#dfe5f0] bg-white p-5 shadow-[0_18px_50px_-42px_rgba(26,27,65,.45)]">
                  <summary className="cursor-pointer font-display text-[17px] font-bold text-[#1a1b41]">{question}</summary>
                  <p className="mt-3 text-[14px] leading-7 text-[#5b5d77]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
      {pageSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
    </div>
  );
}
