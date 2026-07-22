import type { Metadata } from "next";
import Link from "next/link";
import { ExactSitesBrandFragment } from "@/components/exact-sitesbrand-fragments";
import { blogPosts } from "@/content/blog-posts";

const coreSearchablePages = [
  {
    title: "AI Search Optimization",
    description: "AEO, GEO, LLM SEO, entity clarity, and AI-search-ready service content.",
    href: "/services/ai-search-optimization",
    tags: ["ai search", "aeo", "geo", "llm seo", "answer engine"],
  },
  {
    title: "SEO Growth Engine",
    description: "Technical SEO, content strategy, authority building, and organic growth systems.",
    href: "/services/seo-growth-engine",
    tags: ["seo", "organic growth", "technical seo", "content strategy"],
  },
  {
    title: "Web Development",
    description: "Conversion-focused websites, landing pages, technical SEO, performance, and tracking.",
    href: "/services/web-automation-system",
    tags: ["web development", "landing pages", "conversion", "performance"],
  },
  {
    title: "Data & Automation",
    description: "CRM workflows, lead routing, reporting dashboards, AI-assisted handoff, and tool integrations.",
    href: "/services/data-automation",
    tags: ["automation", "crm", "data", "workflows", "dashboard"],
  },
  {
    title: "UI/UX & Design",
    description: "Premium UI, UX audits, wireframes, design systems, and conversion-focused digital experiences.",
    href: "/services/ui-ux-design",
    tags: ["ui", "ux", "design", "wireframes", "brand"],
  },
  {
    title: "Sales & Business Development",
    description: "Lead generation, outreach, qualification, CRM pipeline support, and sales reporting.",
    href: "/services/sales-business-development",
    tags: ["sales", "lead generation", "business development", "outreach", "pipeline"],
  },
  {
    title: "Services",
    description: "The full SitesBrand services hub for search, AI, design, automation, and growth.",
    href: "/services",
    tags: ["services", "digital growth", "design", "lead generation"],
  },
  {
    title: "Free Website Audit",
    description: "Instant SEO, speed, design, and AI-readiness audit with a branded PDF report.",
    href: "/free-audit",
    tags: ["free audit", "seo audit", "website audit", "page speed", "ai readiness"],
  },
  {
    title: "Blog",
    description: "SEO, AEO, GEO, automation, conversion, and AI search insights.",
    href: "/resources/blog",
    tags: ["blog", "resources", "seo", "ai search"],
  },
  {
    title: "Guides",
    description: "Step-by-step growth guides for GEO accountability, SEO foundations, AI search readiness, and conversion.",
    href: "/resources/guides",
    tags: ["guides", "ebooks", "playbooks", "checklists", "seo", "geo", "ai search accountability"],
  },
  {
    title: "Tools",
    description: "Templates and checklists for SEO audits, AI readiness, and lead automation.",
    href: "/resources/tools",
    tags: ["tools", "templates", "audit", "checklist"],
  },
  {
    title: "Case Studies",
    description: "Examples of growth systems, automation, web development, and conversion work.",
    href: "/case-studies",
    tags: ["case studies", "proof", "results"],
  },
];

const searchablePages = [
  ...blogPosts.map((post) => ({
    title: post.title,
    description: post.description,
    href: `/resources/blog/${post.slug}`,
    tags: [post.primaryKeyword, ...post.secondaryKeywords, ...post.tags, post.category],
  })),
  ...coreSearchablePages,
];

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export const metadata: Metadata = {
  title: "Search",
  description: "Search SitesBrand services, resources, guides, tools, and case studies.",
  alternates: { canonical: "/search" },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params?.q ?? "").trim().toLowerCase();
  const queryTokens = normalizeSearchText(query).split(" ").filter(Boolean);
  const results = query
    ? searchablePages.filter((page) =>
        queryTokens.every((token) => normalizeSearchText([page.title, page.description, ...page.tags].join(" ")).includes(token)),
      )
    : searchablePages;

  return (
    <div className="min-h-screen bg-[var(--lsurface)] text-[var(--ltext)]">
      <ExactSitesBrandFragment part="nav" />
      <main className="mx-auto max-w-[980px] px-7 py-20">
        <span className="eyebrow text-[#006f7c]">Site search</span>
        <h1 className="font-display mt-4 text-[clamp(38px,6vw,70px)] font-extrabold leading-[1.04] tracking-[-.035em]">
          Search SitesBrand resources<span className="text-[#00bcd4]">.</span>
        </h1>
        <form className="mt-8 flex flex-col gap-3 rounded-[22px] border border-[var(--lborder)] bg-[var(--lcard)] p-4 shadow-[var(--lshadow)] sm:flex-row" action="/search">
          <input
            aria-label="Search query"
            className="min-h-12 flex-1 rounded-[14px] border border-[var(--lborder)] bg-[var(--lchip)] px-4 text-[15px] outline-none"
            defaultValue={query}
            name="q"
            placeholder="Try AI search, SEO, automation, tools..."
            type="search"
          />
          <button className="btn-cyan" type="submit">
            Search
          </button>
        </form>

        <section className="mt-8 grid gap-4" aria-label="Search results">
          {results.length ? (
            results.map((result) => (
              <article key={result.href} className="rounded-[20px] border border-[var(--lborder)] bg-[var(--lcard)] p-6 shadow-[var(--lshadow)]">
                <h2 className="font-display text-[24px] font-bold tracking-[-.02em]">
                  <Link className="text-[var(--ltext)] no-underline" href={result.href}>
                    {result.title}
                  </Link>
                </h2>
                <p className="mt-2 text-[14px] leading-7 text-[var(--lmuted)]">{result.description}</p>
              </article>
            ))
          ) : (
            <article className="rounded-[20px] border border-[var(--lborder)] bg-[var(--lcard)] p-6 shadow-[var(--lshadow)]">
              <h2 className="font-display text-[24px] font-bold tracking-[-.02em]">No exact matches found</h2>
              <p className="mt-2 text-[14px] leading-7 text-[var(--lmuted)]">
                Try a broader term like SEO, AI search, automation, services, guides, or tools.
              </p>
            </article>
          )}
        </section>
      </main>
      <ExactSitesBrandFragment part="footer" />
    </div>
  );
}
