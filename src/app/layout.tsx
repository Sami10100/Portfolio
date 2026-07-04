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

const trustpilotInviteSnippet = `
  (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
  var a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;var f=d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(a,f)})(window,document,'script','https://invitejs.trustpilot.com/tp.min.js','tp');
  tp('register','xJ0AXhefrEelKG5O');
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "SitesBrand | AI Search, SEO & GEO Growth Agency",
    template: "%s | SitesBrand",
  },
  description:
    "SitesBrand builds AI-ready growth systems across SEO, GEO, AEO, automation, and conversion design — so your brand ranks, gets cited by AI, and converts.",
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
    title: "SitesBrand | AI Search, SEO & GEO Growth Agency",
    description:
      "SitesBrand builds AI-ready growth systems across SEO, GEO, AEO, automation, and conversion design — so your brand ranks, gets cited by AI, and converts.",
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
    title: "SitesBrand | AI Search, SEO & GEO Growth Agency",
    description:
      "SitesBrand builds AI-ready growth systems across SEO, GEO, AEO, automation, and conversion design — so your brand ranks, gets cited by AI, and converts.",
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
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title="SitesBrand resources RSS" href="/rss.xml" />
        <link rel="preconnect" href="https://widget.trustpilot.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://invitejs.trustpilot.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://widget.trustpilot.com" />
        <link rel="dns-prefetch" href="https://invitejs.trustpilot.com" />
        <link
          rel="preload"
          href="/assets/sitesbrand-wordmark-transparent.png"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/sitesbrand-icon-transparent.png"
          as="image"
        />
        <script dangerouslySetInnerHTML={{ __html: trustpilotInviteSnippet }} />
        <script
          type="text/javascript"
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        {children}
        <ConsentAnalytics />
        <CookieConsent />
      </body>
    </html>
  );
}
