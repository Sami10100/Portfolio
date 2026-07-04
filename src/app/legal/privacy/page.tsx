import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | SitesBrand" },
  description: "How SitesBrand collects, uses, shares, and protects your information across our website and services.",
  alternates: { canonical: "/legal/privacy" },
};

const sections: LegalSection[] = [
  {
    title: "Scope of this policy",
    paragraphs: [
      "This Privacy Policy explains how SitesBrand handles information connected with this website, business inquiries, audit requests, and conversations started through our listed contact channels.",
      "A signed proposal, service agreement, or client-specific privacy notice may contain additional terms. Those documents control where they conflict with this general website policy.",
    ],
  },
  {
    title: "Information we may receive",
    items: [
      <><strong>Information you choose to provide:</strong> your name, business contact details, website URL, company information, project needs, messages, and files you send to us.</>,
      <><strong>Free Audit form:</strong> the website prepares your answers for WhatsApp. The form is not submitted to or stored in a SitesBrand website database. WhatsApp receives the information only when you continue and send the message.</>,
      <><strong>External booking and social services:</strong> Calendly, WhatsApp, LinkedIn, Facebook, email, and telephone providers process information under their own terms and privacy policies.</>,
      <><strong>Basic technical information:</strong> our hosting and security providers may process IP address, browser, device, request time, referring page, and diagnostic or security logs needed to deliver and protect the website.</>,
      <><strong>Cookie preferences:</strong> this site stores your privacy choice in your browser so the consent notice does not need to appear on every visit.</>,
    ],
  },
  {
    title: "How we use information",
    items: [
      "Respond to inquiries, audit requests, and meeting bookings.",
      "Assess project fit, prepare proposals, and provide requested services.",
      "Operate, secure, troubleshoot, and improve the website.",
      "Maintain business records and comply with applicable legal obligations.",
      "Send marketing communication only where permitted and provide an appropriate way to opt out.",
    ],
  },
  {
    title: "How information may be shared",
    paragraphs: [
      "We do not sell personal information. We may share information with vendors that help us host the website, communicate, schedule meetings, deliver contracted work, maintain security, or obtain professional advice. They receive only the information reasonably needed for their role.",
      "We may also disclose information when required by law, to protect rights or safety, in connection with a business reorganization, or with your direction or consent.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We keep information only while it is reasonably needed for the purpose collected, our business records, dispute resolution, security, or legal obligations. Retention periods vary according to the relationship and type of record.",
      "We use reasonable administrative and technical safeguards, but no internet transmission, external platform, or storage system can be guaranteed completely secure.",
    ],
  },
  {
    title: "International services",
    paragraphs: [
      "SitesBrand and the vendors linked from this website may process information in more than one country. Privacy protections may differ by location. Where required, appropriate contractual or legal safeguards should be used by the relevant provider.",
    ],
  },
  {
    title: "Your choices and requests",
    paragraphs: [
      <>Depending on applicable law, you may be able to request access, correction, deletion, restriction, objection, withdrawal of consent, or a copy of information associated with you. Contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We may need to verify your identity and may retain information where legally permitted or required.</>,
      "SitesBrand does not knowingly sell or share personal information for cross-context behavioural advertising through this website. If our practices change, this policy and the consent controls will be updated before those technologies are enabled.",
    ],
  },
  {
    title: "Children and policy updates",
    paragraphs: [
      "This business website is not directed to children under 13, and we do not knowingly request personal information from them.",
      "We may update this policy when our services, vendors, or legal obligations change. The date at the top shows the latest published version.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      introduction="Plain-language information about what this website receives, why it is used, when external services are involved, and how to contact us about your information."
      sections={sections}
    />
  );
}
