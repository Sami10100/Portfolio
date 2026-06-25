import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the SitesBrand website and its public content.",
  alternates: { canonical: "/legal/terms" },
};

const sections: LegalSection[] = [
  {
    title: "Agreement to these terms",
    paragraphs: [
      "By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the website. These Terms apply to the public website and do not replace a signed proposal, statement of work, or service agreement.",
    ],
  },
  {
    title: "Website information",
    paragraphs: [
      "The website describes SitesBrand, its approach, services, project stories, and ways to contact us. Content is general information and is not legal, financial, medical, or other regulated professional advice.",
      "We may update, remove, or correct website content without notice. Availability of a service, feature, audit, or meeting slot is not guaranteed.",
    ],
  },
  {
    title: "Projects, estimates, and results",
    paragraphs: [
      "A website inquiry, audit request, or strategy call does not create a client relationship. Work begins only after both parties accept written scope, fees, responsibilities, and other project terms.",
      "Case studies, dashboard visuals, testimonials, figures, and performance examples describe particular or illustrative situations. Results vary by market, starting position, implementation, budget, timing, and factors outside SitesBrand's control. They are not guarantees of future performance.",
    ],
  },
  {
    title: "Acceptable use",
    items: [
      "Do not attempt to disrupt, overload, probe, scrape at unreasonable volume, reverse engineer, or bypass the security of this website.",
      "Do not submit unlawful, harmful, deceptive, infringing, confidential, or malicious material.",
      "Do not impersonate another person or misrepresent your authority to act for a business.",
      "Do not reuse website content, brand assets, or project materials in a way that suggests endorsement or ownership.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Unless stated otherwise, the website's copy, visual design, code presentation, graphics, logos, and brand elements are owned by or licensed to SitesBrand and protected by applicable intellectual-property laws.",
      "You may view and share links to public pages for ordinary informational purposes. Any broader reproduction, modification, resale, or commercial use requires prior written permission.",
    ],
  },
  {
    title: "External services and links",
    paragraphs: [
      "The website links to services such as Calendly, WhatsApp, LinkedIn, Facebook, email, and telephone providers. SitesBrand does not control their availability, security, content, or privacy practices. Your use of those services is governed by their terms.",
    ],
  },
  {
    title: "Disclaimers and liability",
    paragraphs: [
      "The website is provided on an “as available” basis. To the extent permitted by applicable law, SitesBrand disclaims warranties that the website will always be uninterrupted, error-free, secure, or suitable for a particular purpose.",
      "To the extent permitted by law, SitesBrand will not be liable for indirect, incidental, special, consequential, or lost-profit damages arising from use of the public website. Nothing in these Terms excludes liability that cannot legally be excluded.",
    ],
  },
  {
    title: "Changes and governing terms",
    paragraphs: [
      "We may update these Terms by publishing a revised version with a new effective date. Continued use after publication means the revised Terms apply to later website use.",
      "Applicable law and jurisdiction depend on the SitesBrand entity, user location, and any signed agreement. A signed client agreement will govern disputes relating to paid services.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal · Website Terms"
      title="Terms of Service"
      introduction="The ground rules for using the SitesBrand website, reviewing public project information, and starting a business conversation with us."
      sections={sections}
    />
  );
}
