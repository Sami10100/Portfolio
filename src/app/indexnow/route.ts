import { siteConfig } from "@/config/site";

export function GET() {
  return Response.json({
    host: "www.sitesbrand.com",
    key: siteConfig.indexNowKey,
    keyLocation: `${siteConfig.siteUrl}/${siteConfig.indexNowKey}.txt`,
    urls: [
      siteConfig.siteUrl,
      `${siteConfig.siteUrl}/services`,
      `${siteConfig.siteUrl}/resources/blog`,
      `${siteConfig.siteUrl}/resources/blog/best-search-engine-optimization-tools-for-2026`,
      `${siteConfig.siteUrl}/resources/guides`,
      `${siteConfig.siteUrl}/resources/tools`,
    ],
  });
}
