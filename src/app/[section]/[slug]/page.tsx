import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemporaryPage } from "@/components/temporary-page";

type HoldingPageData = {
  eyebrow: string;
  title: string;
  description: string;
};

const pages: Record<string, HoldingPageData> = {
  "resources/blog": {
    eyebrow: "Insights",
    title: "The SitesBrand blog is taking shape",
    description: "Fresh thinking on SEO, AI search, automation, conversion, and digital growth is on the way.",
  },
  "resources/guides": {
    eyebrow: "Resources",
    title: "Practical growth guides are coming soon",
    description: "We are preparing concise playbooks and eBooks designed to help ambitious teams make smarter growth decisions.",
  },
  "resources/tools": {
    eyebrow: "Toolkit",
    title: "Useful tools are on the workbench",
    description: "Templates, checklists, and calculators are being prepared. In the meantime, we can build a tailored plan with you.",
  },
  "resources/news": {
    eyebrow: "Updates",
    title: "News and updates are coming soon",
    description: "This space will hold SitesBrand announcements, launches, partnerships, and useful industry updates.",
  },
  "company/careers": {
    eyebrow: "Careers",
    title: "Build ambitious work with us",
    description: "We are always interested in thoughtful strategists, designers, developers, and growth operators. Send us an introduction.",
  },
  "company/pricing": {
    eyebrow: "Pricing",
    title: "Every growth system starts with the right scope",
    description: "Our engagements are tailored to your goals, current systems, and growth stage. A short strategy call is the fastest route to a useful estimate.",
  },
  "legal/privacy": {
    eyebrow: "Legal",
    title: "Privacy policy",
    description: "Our full privacy policy is being finalized. Until publication, contact us with any question about how SitesBrand handles your information.",
  },
  "legal/terms": {
    eyebrow: "Legal",
    title: "Terms of service",
    description: "Our public terms are being finalized. Project-specific terms remain defined in each signed proposal and service agreement.",
  },
  "legal/cookies": {
    eyebrow: "Legal",
    title: "Cookie policy",
    description: "Our cookie disclosure is being finalized. This site currently uses only the technology needed to deliver and improve the experience.",
  },
  "social/x": {
    eyebrow: "Social",
    title: "Our X profile is not live yet",
    description: "Follow SitesBrand on LinkedIn for current insights and announcements, or contact us directly to start a conversation.",
  },
  "social/tiktok": {
    eyebrow: "Social",
    title: "Our TikTok profile is not live yet",
    description: "Follow SitesBrand on LinkedIn for current insights and announcements, or contact us directly to start a conversation.",
  },
};

type HoldingPageProps = {
  params: Promise<{ section: string; slug: string }>;
};

export async function generateMetadata({ params }: HoldingPageProps): Promise<Metadata> {
  const { section, slug } = await params;
  const page = pages[`${section}/${slug}`];
  if (!page) notFound();

  return {
    title: page.eyebrow,
    description: page.description,
    alternates: {
      canonical: `/${section}/${slug}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function HoldingPage({ params }: HoldingPageProps) {
  const { section, slug } = await params;
  const page = pages[`${section}/${slug}`];
  if (!page) notFound();
  return <TemporaryPage {...page} />;
}
