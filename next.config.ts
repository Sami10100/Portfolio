import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://invitejs.trustpilot.com https://widget.trustpilot.com https://*.trustpilot.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://*.trustpilot.com https://calendly.com https://wa.me",
      "frame-src 'self' https://widget.trustpilot.com https://*.trustpilot.com https://calendly.com",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  skipTrailingSlashRedirect: true,
  images: {
    qualities: [72, 75],
  },
  async redirects() {
    return [
      {
        source: "/company/pricing",
        destination: "/free-audit",
        permanent: true,
      },
      {
        source: "/company/careers",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resources/news",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/social/x",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/social/tiktok",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-01",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/#faq",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio-01",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio-category/:path*",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
