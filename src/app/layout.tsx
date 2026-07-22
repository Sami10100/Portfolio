import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import { ConsentAnalytics } from "@/components/consent-analytics";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "SitesBrand | SEO, AI Automation & Web Growth Agency",
    template: "%s | SitesBrand",
  },
  description:
    "SitesBrand builds psychology-driven, AI-powered digital growth systems across SEO, automation, web development, and conversion-focused design.",
  applicationName: "SitesBrand",
  keywords: [
    "SitesBrand",
    "AI search optimization",
    "SEO agency",
    "AI automation",
    "web development",
    "conversion optimization",
    "digital growth agency",
  ],
  authors: [{ name: "SitesBrand" }],
  creator: "SitesBrand",
  publisher: "SitesBrand",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SitesBrand",
    title: "SitesBrand | SEO, AI Automation & Web Growth Agency",
    description:
      "Premium agency website for SitesBrand, built for SEO, AI automation, web development, and smarter growth.",
    images: [
      {
        url: "/assets/sitesbrand-wordmark-transparent.png",
        width: 1334,
        height: 355,
        alt: "SitesBrand logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SitesBrand | SEO, AI Automation & Web Growth Agency",
    description:
      "Psychology-driven strategy, conversion-focused design, and AI-powered development for ambitious brands.",
    images: ["/assets/sitesbrand-wordmark-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f6" },
    { media: "(prefers-color-scheme: dark)", color: "#070819" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title="SitesBrand resources RSS" href="/rss.xml" />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        {children}
        <ConsentAnalytics />
        <CookieConsent />
      </body>
    </html>
  );
}
