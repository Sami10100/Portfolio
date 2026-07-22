import { blogPosts } from "@/content/blog-posts";
import { siteConfig } from "@/config/site";

const updated = "Fri, 10 Jul 2026 00:00:00 GMT";

const items = [
  {
    title: "SitesBrand Blog for SEO, AEO, GEO, and Digital Growth",
    path: "/resources/blog",
    description:
      "Practical articles on AI search optimization, answer engine optimization, SEO strategy, automation, and conversion-focused web growth.",
  },
  ...blogPosts.map((post) => ({
    title: post.title,
    path: `/resources/blog/${post.slug}`,
    description: post.description,
  })),
  {
    title: "SitesBrand Guides and eBooks for GEO, SEO, and AI Search",
    path: "/resources/guides",
    description:
      "Published SitesBrand resources including The GEO Accountability Checklist and the modern search optimization eBook for SEO, AEO, GEO, AIO, and SXO.",
  },
  {
    title: "SitesBrand Tools for SEO, AI Search, and Growth Operations",
    path: "/resources/tools",
    description:
      "Published SitesBrand tools for SEO, AI search readiness, conversion, and growth operations.",
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
