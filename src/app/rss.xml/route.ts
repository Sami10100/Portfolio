import { siteConfig } from "@/config/site";

const updated = "Fri, 03 Jul 2026 00:00:00 GMT";

const items = [
  {
    title: "SitesBrand Blog for SEO, AEO, GEO, and Digital Growth",
    path: "/resources/blog",
    description:
      "Practical articles on AI search optimization, answer engine optimization, SEO strategy, automation, and conversion-focused web growth.",
  },
  {
    title: "Best Search Engine Optimization Tools for 2026",
    path: "/resources/blog/best-search-engine-optimization-tools-for-2026",
    description:
      "A practical guide to choosing SEO tools for keyword research, technical audits, reporting, content optimization, and AI search visibility.",
  },
  {
    title: "Guides and eBooks for AI-Ready Digital Growth",
    path: "/resources/guides",
    description:
      "Structured guides for planning SEO, AI search readiness, conversion-focused websites, CRM automation, and measurable growth systems.",
  },
  {
    title: "Tools and Templates for SEO, AI Search, and Growth Operations",
    path: "/resources/tools",
    description:
      "Useful checklists, templates, and calculators for auditing SEO health, AI search readiness, content depth, conversion paths, and automation opportunities.",
  },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} Resources</title>
    <link>${siteConfig.siteUrl}</link>
    <description>${escapeXml("SEO, AI search, automation, and conversion resources from SitesBrand.")}</description>
    <language>en-us</language>
    <lastBuildDate>${updated}</lastBuildDate>
    ${items
      .map(
        (item) => `<item>
      <title>${escapeXml(item.title)}</title>
      <link>${siteConfig.siteUrl}${item.path}</link>
      <guid>${siteConfig.siteUrl}${item.path}</guid>
      <pubDate>${updated}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`,
      )
      .join("\n    ")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
