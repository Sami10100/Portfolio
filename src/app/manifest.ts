import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SitesBrand",
    short_name: "SitesBrand",
    description:
      "SitesBrand builds SEO, AI search optimization, automation, web development, and conversion-focused growth systems.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f4f5f6",
    theme_color: "#1a1b41",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
