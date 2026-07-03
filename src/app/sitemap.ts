import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog-posts";
import { siteConfig } from "@/config/site";

const lastModified = new Date("2026-07-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/case-studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.siteUrl}/free-audit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/services/ai-search-optimization`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.siteUrl}/services/seo-growth-engine`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.siteUrl}/services/web-automation-system`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.siteUrl}/services/data-automation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.siteUrl}/services/ui-ux-design`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.siteUrl}/services/sales-business-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.siteUrl}/resources/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    ...blogPosts.map((post) => ({
      url: `${siteConfig.siteUrl}/resources/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.78,
    })),
    {
      url: `${siteConfig.siteUrl}/resources/guides`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${siteConfig.siteUrl}/resources/tools`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.siteUrl}/resources/tools/sxo-master`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${siteConfig.siteUrl}/legal/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.siteUrl}/legal/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.siteUrl}/legal/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
