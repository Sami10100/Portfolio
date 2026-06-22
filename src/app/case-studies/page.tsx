import type { Metadata } from "next";
import { TemporaryPage } from "@/components/temporary-page";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "SitesBrand case studies and growth outcomes.",
  alternates: {
    canonical: "/case-studies",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CaseStudiesPage() {
  return (
    <TemporaryPage
      eyebrow="Case Studies"
      title="The full project library is being prepared"
      description="Detailed breakdowns of the strategy, design, technology, and measurable outcomes behind our work are coming soon."
    />
  );
}
