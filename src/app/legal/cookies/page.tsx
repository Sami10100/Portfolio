import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How SitesBrand uses cookies, local storage, and similar browser technologies.",
  alternates: { canonical: "/legal/cookies" },
};

const sections: LegalSection[] = [
  {
    title: "What browser storage means",
    paragraphs: [
      "Cookies are small data files stored by a website or service in a browser. Similar technologies include local storage, pixels, and software identifiers. They can support security, preferences, measurement, or advertising.",
    ],
  },
  {
    title: "What SitesBrand currently uses",
    items: [
      <><strong>Consent preference:</strong> the key <code>sitesbrand-consent-v1</code> is stored in local storage so the website remembers whether you selected essential-only or allowed optional categories.</>,
      <><strong>Hosting and security:</strong> infrastructure providers may use request logs or strictly necessary technologies to deliver pages, prevent abuse, and maintain security.</>,
      <><strong>Analytics:</strong> optional analytics is currently inactive. It will remain disabled unless a measurement tool is added and you allow the analytics category.</>,
      <><strong>Marketing:</strong> advertising and cross-site marketing technologies are currently inactive and remain disabled unless explicitly introduced and consented to.</>,
    ],
  },
  {
    title: "Cookie categories",
    items: [
      <><strong>Essential:</strong> required for security, page delivery, and remembering privacy choices. These cannot be switched off through the consent panel.</>,
      <><strong>Analytics:</strong> would help understand aggregated use and performance. This category defaults to off.</>,
      <><strong>Marketing:</strong> would support advertising measurement or cross-site personalization. This category defaults to off.</>,
    ],
  },
  {
    title: "Your consent choices",
    paragraphs: [
      "On your first visit, you can choose essential-only or allow optional categories. The two choices are presented with equal prominence. You can later reopen Cookie preferences from the fixed control at the bottom of the website.",
      "Changing your preference affects technologies controlled by SitesBrand after that change. It cannot automatically remove information already sent directly to an external service you chose to open.",
    ],
  },
  {
    title: "External websites",
    paragraphs: [
      "Calendly, WhatsApp, LinkedIn, Facebook, and other linked websites may place their own cookies after you visit them. Their cookie and privacy practices are controlled by those providers, not by the SitesBrand consent panel.",
    ],
  },
  {
    title: "Browser controls and updates",
    paragraphs: [
      "You can also delete site data or block browser storage through your browser settings. Blocking essential storage may cause the consent notice to appear again or affect certain functionality.",
      "We will update this policy and the consent categories before introducing materially different tracking technologies.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal · Cookies"
      title="Cookie Policy"
      introduction="A clear record of the browser storage this site currently uses, what remains switched off, and how you can change your choice."
      sections={sections}
    />
  );
}
