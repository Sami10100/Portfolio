import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type DetailPair = {
  term: string;
  description: string;
};

type DetailItem = {
  title: string;
  text: string;
};

type ProcessStep = {
  title: string;
  text: string;
};

type TableRow = {
  signal: string;
  before: string;
  after: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type ServiceDetailData = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  supportImage: string;
  supportImageAlt: string;
  ctaImage: string;
  ctaImageAlt: string;
  proof: string[];
  outcomes: DetailItem[];
  includes: DetailItem[];
  process: ProcessStep[];
  definitions: DetailPair[];
  comparison: TableRow[];
  faqs: Faq[];
  ctaTitle: string;
  ctaText: string;
};

export const serviceDetailPages = {
  "ai-search-optimization": {
    slug: "ai-search-optimization",
    eyebrow: "AI Search Optimization",
    title: "AI Search Optimization for",
    titleAccent: "Answer Engines",
    description:
      "Make your brand easier for Google AI Overviews, ChatGPT, Gemini, Perplexity, and traditional search systems to understand, trust, and recommend.",
    metaTitle: "AI Search Optimization Service",
    metaDescription:
      "AI Search Optimization for AEO, GEO, LLM SEO, schema, entity clarity, and answer-ready service pages built for modern discovery.",
    heroImage: "/assets/services/15.webp",
    heroImageAlt: "3D AI search dashboard with magnifier and search interface",
    supportImage: "/assets/services/cards/ai-search.webp",
    supportImageAlt: "3D AI search card showing modern discovery signals",
    ctaImage: "/assets/services/19.webp",
    ctaImageAlt: "3D rocket and growth dashboard for AI search growth",
    proof: ["AEO and GEO strategy", "Entity and schema mapping", "Answer-ready content", "AI visibility roadmap"],
    outcomes: [
      {
        title: "Clearer brand entities",
        text: "Your services, locations, proof, and expertise become easier for search systems to connect.",
      },
      {
        title: "Stronger answer eligibility",
        text: "Pages are structured around concise answers, definitions, comparisons, FAQs, and proof signals.",
      },
      {
        title: "Better citation paths",
        text: "Trust signals, authoritativeness, and internal links support how AI systems interpret the brand.",
      },
    ],
    includes: [
      { title: "AEO strategy", text: "Buyer questions are mapped into answer-first content modules." },
      { title: "GEO optimization", text: "Content is shaped for generative discovery and AI summarization." },
      { title: "LLM SEO", text: "Entity, intent, and passage clarity are improved for assistant-style answers." },
      { title: "Structured data", text: "Service, FAQ, breadcrumb, organization, and proof schema are planned." },
      { title: "Content architecture", text: "Service pages are organized so humans and crawlers find the same answer quickly." },
      { title: "Measurement plan", text: "Queries, pages, leads, and AI-search opportunities are tracked with priorities." },
    ],
    process: [
      { title: "Audit", text: "Review crawlability, index signals, schema, existing answers, and competitor coverage." },
      { title: "Map", text: "Define buyer questions, service entities, proof gaps, and topical clusters." },
      { title: "Build", text: "Rewrite sections, add structured data, tighten links, and publish answer-ready assets." },
      { title: "Improve", text: "Monitor discovery patterns and update pages as AI and search results change." },
    ],
    definitions: [
      {
        term: "AEO",
        description: "Answer Engine Optimization makes pages easier to quote, summarize, and select for direct answers.",
      },
      {
        term: "GEO",
        description: "Generative Engine Optimization improves how AI systems understand and explain your offer.",
      },
      {
        term: "LLM SEO",
        description: "LLM SEO aligns content, entities, and proof so language models can represent the brand accurately.",
      },
    ],
    comparison: [
      {
        signal: "Service clarity",
        before: "Broad copy with unclear buyer fit",
        after: "Specific offer, audience, outcome, and proof",
      },
      {
        signal: "Answer format",
        before: "Long paragraphs only",
        after: "Definitions, FAQs, lists, tables, and concise summaries",
      },
      {
        signal: "Trust evidence",
        before: "Proof hidden or disconnected",
        after: "Visible credentials, examples, schema, and internal references",
      },
    ],
    faqs: [
      {
        question: "What is AI Search Optimization?",
        answer:
          "AI Search Optimization helps a website become easier for AI answer engines and search systems to understand, summarize, cite, and recommend.",
      },
      {
        question: "Is AI Search Optimization different from SEO?",
        answer:
          "Yes. SEO is still the foundation, but AI Search Optimization adds entity clarity, answer formatting, structured data, and citation-ready proof.",
      },
      {
        question: "Which platforms does this help with?",
        answer:
          "It supports visibility work for Google AI Overviews, ChatGPT, Gemini, Perplexity, and traditional organic search.",
      },
    ],
    ctaTitle: "Ready to make your site answer-engine friendly?",
    ctaText: "We can audit your current visibility and turn the highest-impact fixes into a practical AI-search roadmap.",
  },
  "seo-growth-engine": {
    slug: "seo-growth-engine",
    eyebrow: "SEO Growth Engine",
    title: "SEO Systems Built for",
    titleAccent: "Qualified Demand",
    description:
      "Build a technical and content system that helps buyers find, understand, trust, and choose your brand through organic search.",
    metaTitle: "SEO Growth Engine Service",
    metaDescription:
      "SEO growth systems for technical SEO, search intent, content strategy, internal links, schema, and organic conversion.",
    heroImage: "/assets/services/cards/seo-content.webp",
    heroImageAlt: "3D SEO content dashboard with search and growth elements",
    supportImage: "/assets/services/19.webp",
    supportImageAlt: "3D rocket and analytics dashboard for SEO growth",
    ctaImage: "/assets/services/20.webp",
    ctaImageAlt: "3D trust shield and checklist for SEO quality control",
    proof: ["Technical SEO cleanup", "Keyword and intent map", "Content growth plan", "Conversion tracking"],
    outcomes: [
      {
        title: "Cleaner crawl and index signals",
        text: "Search engines get clearer metadata, canonical, sitemap, linking, and technical quality signals.",
      },
      {
        title: "Content mapped to intent",
        text: "Pages and resources match what buyers are actually searching before they contact a provider.",
      },
      {
        title: "Organic growth tied to leads",
        text: "SEO decisions connect to calls, form submissions, demo requests, and real pipeline movement.",
      },
    ],
    includes: [
      { title: "Technical audit", text: "Crawl, indexability, metadata, redirects, sitemap, robots, and page health review." },
      { title: "Intent strategy", text: "Keyword clusters are mapped to service pages, resources, and buyer stages." },
      { title: "On-page SEO", text: "Titles, headings, internal links, copy depth, and answer modules are improved." },
      { title: "Content planning", text: "A practical roadmap prioritizes pages with demand, relevance, and conversion value." },
      { title: "Authority signals", text: "Proof, case studies, local signals, and backlinks are organized into a growth plan." },
      { title: "Reporting", text: "Ranking, traffic, lead, and conversion insights are translated into next actions." },
    ],
    process: [
      { title: "Diagnose", text: "Find technical, content, and authority blockers using crawl and report evidence." },
      { title: "Prioritize", text: "Rank fixes by impact, speed, confidence, and connection to revenue pages." },
      { title: "Publish", text: "Improve existing pages and create new assets around buyer intent." },
      { title: "Compound", text: "Use data to refine links, content depth, CTAs, and authority building." },
    ],
    definitions: [
      {
        term: "Technical SEO",
        description: "The crawl, index, metadata, performance, and site-architecture work that helps search engines access pages.",
      },
      {
        term: "Search intent",
        description: "The reason behind a query, such as researching, comparing, buying, or solving a specific problem.",
      },
      {
        term: "Organic conversion",
        description: "A visitor action from unpaid search, such as booking a call, submitting a form, or starting a chat.",
      },
    ],
    comparison: [
      {
        signal: "Technical health",
        before: "Pages compete, duplicate, or lack crawl clarity",
        after: "Canonical, sitemap, metadata, and link signals align",
      },
      {
        signal: "Content coverage",
        before: "Pages target broad terms without depth",
        after: "Service and resource pages answer complete buyer questions",
      },
      {
        signal: "Business impact",
        before: "Traffic reported without next steps",
        after: "SEO priorities tied to leads, calls, and qualified demand",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take?",
        answer:
          "Technical improvements can help quickly, while meaningful organic growth usually compounds over several months depending on competition, site health, and content depth.",
      },
      {
        question: "Do you only write content?",
        answer:
          "No. The growth engine combines technical SEO, content strategy, internal linking, schema, proof, reporting, and conversion improvements.",
      },
      {
        question: "Can this work with AI Search Optimization?",
        answer:
          "Yes. Strong SEO foundations make AI-search work more effective because search systems need crawlable, credible, and well-structured content.",
      },
    ],
    ctaTitle: "Need SEO fixes that actually move demand?",
    ctaText: "We can turn your audit issues into a prioritized roadmap for rankings, content, and conversion.",
  },
  "web-automation-system": {
    slug: "web-automation-system",
    eyebrow: "Web Development",
    title: "Web Development Systems",
    titleAccent: "Built to Convert",
    description:
      "Launch a fast, modern, conversion-focused website with clean architecture, strong CTAs, responsive UI, and measurable performance.",
    metaTitle: "Web Development Service",
    metaDescription:
      "Conversion-focused web development for fast websites, landing pages, responsive UI, technical SEO, analytics, and performance.",
    heroImage: "/assets/services/hero-growth-system.webp",
    heroImageAlt: "3D digital growth system with connected automation elements",
    supportImage: "/assets/services/cards/ai-automation.webp",
    supportImageAlt: "3D automation dashboard with workflow elements",
    ctaImage: "/assets/services/cards/web-dev.webp",
    ctaImageAlt: "3D web development interface for conversion-focused sites",
    proof: ["Fast websites", "Landing pages", "Technical SEO ready", "Conversion tracking"],
    outcomes: [
      {
        title: "A website that explains fast",
        text: "Visitors understand the offer, proof, and next action without digging through clutter.",
      },
      {
        title: "Less manual lead handling",
        text: "Forms, booking links, and contact paths are easy to use, easy to track, and easy to improve.",
      },
      {
        title: "A measurable conversion path",
        text: "Core events show which pages, CTAs, and sources create qualified opportunities.",
      },
    ],
    includes: [
      { title: "Website builds", text: "Modern service sites, landing pages, and resource pages with responsive UI." },
      { title: "UI/UX design", text: "Clear hierarchy, premium visuals, and journeys built around buyer confidence." },
      { title: "Lead capture", text: "Forms, CTAs, booking links, and chat handoff designed for qualified inquiries." },
      { title: "Technical SEO", text: "Clean markup, metadata, schema-ready sections, sitemap alignment, and indexable pages." },
      { title: "Performance", text: "Fast loading, stable layout, optimized images, and mobile-first implementation." },
      { title: "Analytics", text: "Conversion events and reporting hooks that make performance easier to improve." },
    ],
    process: [
      { title: "Map", text: "Document the offer, audience, lead journey, tool stack, and operational gaps." },
      { title: "Design", text: "Build a clean page system with strong CTAs, proof, and conversion structure." },
      { title: "Build", text: "Implement responsive sections, forms, media, SEO basics, and conversion tracking." },
      { title: "Optimize", text: "Improve speed, clarity, accessibility, event tracking, and CTA performance after launch." },
    ],
    definitions: [
      {
        term: "Conversion system",
        description: "A website structure that guides visitors from problem awareness to a measurable action.",
      },
      {
        term: "Performance-ready build",
        description: "A site foundation optimized for fast loading, stable layout, responsive behavior, and easier indexing.",
      },
      {
        term: "Conversion tracking",
        description: "Events and analytics that show which pages and calls to action generate meaningful leads.",
      },
    ],
    comparison: [
      {
        signal: "Website role",
        before: "Static brochure with scattered CTAs",
        after: "Clear conversion path with analytics and lead capture",
      },
      {
        signal: "Page quality",
        before: "Slow sections and unclear responsive behavior",
        after: "Fast, stable layouts with readable mobile journeys",
      },
      {
        signal: "Measurement",
        before: "Little visibility into what works",
        after: "Tracked CTAs, forms, sources, and improvement priorities",
      },
    ],
    faqs: [
      {
        question: "Can you build landing pages and full websites?",
        answer:
          "Yes. This service covers full websites, service pages, campaign landing pages, and conversion-focused page systems.",
      },
      {
        question: "Will the site be SEO-ready?",
        answer:
          "Yes. We build with clean structure, metadata, internal links, schema-ready sections, performance, and indexable content in mind.",
      },
      {
        question: "Is this only for new websites?",
        answer:
          "No. Existing sites can be improved with better sections, page speed, CTAs, forms, analytics, and conversion-focused layouts.",
      },
    ],
    ctaTitle: "Want a website that feels premium and converts?",
    ctaText: "We can review your current pages and show which sections, CTAs, speed fixes, and tracking updates matter first.",
  },
  "data-automation": {
    slug: "data-automation",
    eyebrow: "Data & Automation",
    title: "Automation Systems That",
    titleAccent: "Save Team Time",
    description:
      "Connect your forms, CRM, reports, notifications, and AI-assisted workflows so leads move faster and repetitive work gets handled cleanly.",
    metaTitle: "Data & Automation Service",
    metaDescription:
      "Data and automation systems for CRM workflows, lead routing, reporting dashboards, AI-assisted follow-up, and tool integrations.",
    heroImage: "/assets/services/cards/ai-automation.webp",
    heroImageAlt: "3D automation dashboard with connected workflow elements",
    supportImage: "/assets/services/5.webp",
    supportImageAlt: "3D automation workflow interface",
    ctaImage: "/assets/services/20.webp",
    ctaImageAlt: "3D checklist and shield for automation quality control",
    proof: ["CRM workflows", "Lead routing", "AI-assisted handoff", "Reporting dashboards"],
    outcomes: [
      {
        title: "Faster lead response",
        text: "New inquiries can trigger the right notifications, CRM updates, and follow-up steps without delay.",
      },
      {
        title: "Cleaner operational visibility",
        text: "Dashboards and structured data make it easier to see what is stuck, what is moving, and what needs attention.",
      },
      {
        title: "Less repetitive admin work",
        text: "Manual copy-paste, status updates, reminders, and routine summaries are replaced with reliable workflows.",
      },
    ],
    includes: [
      { title: "Workflow audit", text: "Map the current lead, sales, reporting, and internal handoff process." },
      { title: "CRM automation", text: "Route leads, update stages, assign owners, and trigger notifications." },
      { title: "AI qualification", text: "Use assistant-style flows for summaries, tagging, scoring, and handoff notes." },
      { title: "Tool integrations", text: "Connect forms, calendars, WhatsApp, email, CRM, sheets, dashboards, and APIs." },
      { title: "Reporting dashboards", text: "Turn scattered activity into practical pipeline and conversion views." },
      { title: "QA and documentation", text: "Test edge cases and document how each workflow should behave." },
    ],
    process: [
      { title: "Map", text: "Document the tools, handoffs, data fields, owners, and manual bottlenecks." },
      { title: "Design", text: "Define the workflow logic, triggers, fallbacks, and reporting outputs." },
      { title: "Connect", text: "Build the integrations and automations with clear testing checkpoints." },
      { title: "Monitor", text: "Review workflow performance, fix missed cases, and improve the system over time." },
    ],
    definitions: [
      {
        term: "Workflow automation",
        description: "Rules and integrations that move data, trigger actions, and reduce repetitive manual steps.",
      },
      {
        term: "Lead routing",
        description: "The logic that sends each inquiry to the right person, channel, CRM stage, or follow-up sequence.",
      },
      {
        term: "Operational dashboard",
        description: "A reporting view that turns activity from multiple tools into clearer decisions and priorities.",
      },
    ],
    comparison: [
      {
        signal: "Lead handling",
        before: "Manual checking and delayed replies",
        after: "Automated routing, alerts, ownership, and follow-up context",
      },
      {
        signal: "Data quality",
        before: "Scattered notes and inconsistent fields",
        after: "Structured records with cleaner stages and source visibility",
      },
      {
        signal: "Reporting",
        before: "Separate tools with unclear performance",
        after: "Dashboards showing pipeline, sources, actions, and blockers",
      },
    ],
    faqs: [
      {
        question: "What can you automate?",
        answer:
          "Common automations include lead routing, CRM updates, email or WhatsApp handoff, notifications, reporting, summaries, qualification, and repetitive admin tasks.",
      },
      {
        question: "Do we need to change our tools?",
        answer:
          "Not always. We first map your current stack and then recommend whether to connect, simplify, or replace specific tools.",
      },
      {
        question: "Can AI be included safely?",
        answer:
          "Yes. AI is used where it helps with summaries, routing, qualification, and reporting, with clear rules and review points.",
      },
    ],
    ctaTitle: "Want fewer manual tasks and faster lead handoff?",
    ctaText: "We can map your workflow and show which automations will save the most time without breaking your process.",
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    eyebrow: "UI/UX & Design",
    title: "Interfaces Designed for",
    titleAccent: "Trust and Action",
    description:
      "Design premium digital experiences that make your offer easier to understand, your brand easier to trust, and your next step easier to take.",
    metaTitle: "UI/UX Design Service",
    metaDescription:
      "UI/UX and brand design for websites, landing pages, service pages, wireframes, prototypes, design systems, and conversion-focused experiences.",
    heroImage: "/assets/services/cards/uiux-brand.webp",
    heroImageAlt: "3D UI UX design interface with premium brand elements",
    supportImage: "/assets/services/16.webp",
    supportImageAlt: "3D design system and creative interface",
    ctaImage: "/assets/services/cards/uiux-brand.webp",
    ctaImageAlt: "3D UI UX card for brand and interface design",
    proof: ["UX research", "Wireframes", "Visual systems", "Conversion design"],
    outcomes: [
      {
        title: "Clearer user decisions",
        text: "Visitors can understand what you do, who it is for, and why they should trust you faster.",
      },
      {
        title: "A more premium brand experience",
        text: "Typography, spacing, hierarchy, imagery, and interaction patterns feel intentional across the journey.",
      },
      {
        title: "Better conversion flow",
        text: "Pages guide users from first impression to proof, comparison, confidence, and action.",
      },
    ],
    includes: [
      { title: "UX audit", text: "Find friction, unclear hierarchy, weak proof, and confusing page decisions." },
      { title: "Wireframes", text: "Structure the page before visual polish so messaging and flow are solid." },
      { title: "Visual design", text: "Create polished sections, cards, forms, CTAs, and responsive states." },
      { title: "Design system", text: "Define colors, type, spacing, buttons, components, and reusable patterns." },
      { title: "Prototype support", text: "Prepare flows that make key interactions and states easier to review." },
      { title: "Developer handoff", text: "Provide practical specs and assets so implementation stays faithful." },
    ],
    process: [
      { title: "Research", text: "Understand user doubts, page goals, brand tone, and current conversion barriers." },
      { title: "Structure", text: "Plan the page hierarchy, content flow, proof placement, and CTA rhythm." },
      { title: "Design", text: "Create high-fidelity responsive UI with a consistent visual system." },
      { title: "Refine", text: "Review readability, states, spacing, accessibility, and implementation details." },
    ],
    definitions: [
      {
        term: "UX design",
        description: "The structure and decision flow that helps users understand, compare, trust, and act.",
      },
      {
        term: "UI design",
        description: "The visual system of layouts, buttons, typography, color, spacing, imagery, and components.",
      },
      {
        term: "Conversion design",
        description: "Design choices that reduce doubt and make the next action feel clear and credible.",
      },
    ],
    comparison: [
      {
        signal: "First impression",
        before: "Generic layout with weak hierarchy",
        after: "Premium visual system with clear offer and action",
      },
      {
        signal: "User journey",
        before: "Sections feel disconnected",
        after: "Flow builds understanding, proof, confidence, and conversion",
      },
      {
        signal: "Implementation",
        before: "One-off styles and inconsistent states",
        after: "Reusable components, responsive rules, and cleaner handoff",
      },
    ],
    faqs: [
      {
        question: "Do you design only websites?",
        answer:
          "No. We design websites, landing pages, service pages, dashboards, forms, marketing sections, brand systems, and reusable UI components.",
      },
      {
        question: "Can you redesign an existing page?",
        answer:
          "Yes. We can audit the current page, keep what works, remove friction, and redesign the experience around clarity and conversion.",
      },
      {
        question: "Will the design be developer-friendly?",
        answer:
          "Yes. We design with implementation in mind: responsive constraints, reusable components, realistic assets, and clear states.",
      },
    ],
    ctaTitle: "Want your site to feel premium and easier to choose?",
    ctaText: "We can review your current experience and show exactly where design is creating doubt or slowing conversions.",
  },
  "sales-business-development": {
    slug: "sales-business-development",
    eyebrow: "Sales & Business Development",
    title: "Sales Systems for",
    titleAccent: "Qualified Pipeline",
    description:
      "Build a practical outbound and follow-up engine that targets the right accounts, qualifies opportunities, and keeps your pipeline moving.",
    metaTitle: "Sales & Business Development Service",
    metaDescription:
      "Sales and business development systems for lead generation, outreach, qualification, CRM pipeline support, follow-up, and reporting.",
    heroImage: "/assets/services/cards/sales-growth.webp",
    heroImageAlt: "3D sales growth dashboard with pipeline and lead generation elements",
    supportImage: "/assets/services/19.webp",
    supportImageAlt: "3D rocket and analytics dashboard for pipeline growth",
    ctaImage: "/assets/services/cards/sales-growth.webp",
    ctaImageAlt: "3D sales growth card for qualified pipeline",
    proof: ["ICP targeting", "Outbound campaigns", "Lead qualification", "CRM pipeline support"],
    outcomes: [
      {
        title: "Sharper prospect targeting",
        text: "Outreach focuses on accounts and roles that match your offer, market, budget, and timing.",
      },
      {
        title: "Cleaner qualification",
        text: "Leads are evaluated against fit, need, urgency, authority, and next-step readiness.",
      },
      {
        title: "More visible pipeline movement",
        text: "CRM stages, notes, follow-ups, and reporting make sales activity easier to manage and improve.",
      },
    ],
    includes: [
      { title: "ICP and list strategy", text: "Define the industries, company types, roles, and buyer signals worth targeting." },
      { title: "Lead generation", text: "Build focused prospect lists with useful context for outreach." },
      { title: "Outbound messaging", text: "Create cold email, LinkedIn, and follow-up messaging aligned to your offer." },
      { title: "Qualification flows", text: "Score and route leads based on fit, intent, problem, and next-step clarity." },
      { title: "CRM hygiene", text: "Keep stages, ownership, notes, and follow-ups clean enough for decision-making." },
      { title: "Pipeline reporting", text: "Track activity, replies, meetings, opportunities, blockers, and next priorities." },
    ],
    process: [
      { title: "Position", text: "Clarify the offer, market, ideal customer, pain points, and proof." },
      { title: "Target", text: "Build prospect criteria, list sources, segmentation, and outreach angles." },
      { title: "Launch", text: "Run focused outreach and qualification with clean CRM tracking." },
      { title: "Improve", text: "Refine lists, messaging, objections, follow-ups, and reporting based on response data." },
    ],
    definitions: [
      {
        term: "ICP",
        description: "Ideal Customer Profile: the company type, role, need, and buying context most likely to convert.",
      },
      {
        term: "Lead qualification",
        description: "The process of deciding whether a prospect is a good fit and ready for a meaningful next step.",
      },
      {
        term: "Pipeline support",
        description: "The CRM, follow-up, reporting, and coordination work that keeps opportunities from going cold.",
      },
    ],
    comparison: [
      {
        signal: "Prospecting",
        before: "Broad lists and generic outreach",
        after: "Focused ICP, segmented angles, and better fit signals",
      },
      {
        signal: "Follow-up",
        before: "Missed reminders and scattered notes",
        after: "Clear stages, owners, next steps, and timely follow-ups",
      },
      {
        signal: "Pipeline",
        before: "Activity without clear opportunity view",
        after: "Qualified meetings, CRM visibility, and reporting priorities",
      },
    ],
    faqs: [
      {
        question: "Do you handle lead generation?",
        answer:
          "Yes. We help with ICP definition, prospect lists, outreach messaging, qualification, follow-up structure, and pipeline reporting.",
      },
      {
        question: "Is this only cold outreach?",
        answer:
          "No. It can include outbound, LinkedIn, lead qualification, CRM support, follow-up processes, and sales reporting.",
      },
      {
        question: "Can this connect with website leads?",
        answer:
          "Yes. Website inquiries can be routed into the same qualification and CRM process so sales has context from the first touch.",
      },
    ],
    ctaTitle: "Need a cleaner sales engine and better-qualified leads?",
    ctaText: "We can review your offer, target market, CRM flow, and outreach process to identify the fastest pipeline fixes.",
  },
} satisfies Record<string, ServiceDetailData>;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="sb-detail-icon">
      <path d="M4 10h10.5M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="sb-detail-check-icon">
      <path d="m4.5 10.4 3.3 3.2 7.7-8.1" />
    </svg>
  );
}

export function buildServiceDetailSchemas(page: ServiceDetailData) {
  const url = `${siteConfig.siteUrl}/services/${page.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${page.title} ${page.titleAccent}`,
      description: page.description,
      url,
      image: `${siteConfig.siteUrl}${page.heroImage}`,
      serviceType: page.eyebrow,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        email: siteConfig.email,
        telephone: siteConfig.phone,
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${page.eyebrow} deliverables`,
        itemListElement: page.includes.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.title,
            description: item.text,
          },
        })),
      },
      dateModified: "2026-06-25",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.siteUrl}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.eyebrow,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export function ServiceDetailPage({ page }: { page: ServiceDetailData }) {
  return (
    <main className="sb-detail-page">
      <section className="sb-detail-hero" aria-labelledby="service-detail-title">
        <div className="sb-detail-hero-copy">
          <nav className="sb-detail-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{page.eyebrow}</span>
          </nav>
          <span className="sb-detail-pill">{page.eyebrow}</span>
          <h1 id="service-detail-title">
            {page.title} <span>{page.titleAccent}</span>
          </h1>
          <p>{page.description}</p>
          <div className="sb-detail-actions">
            <Link className="sb-detail-btn sb-detail-btn-primary" href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
              <ArrowIcon />
            </Link>
            <Link className="sb-detail-btn sb-detail-btn-ghost" href="/free-audit">
              Get a Free Audit
            </Link>
          </div>
          <ul className="sb-detail-proof" aria-label={`${page.eyebrow} proof points`}>
            {page.proof.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="sb-detail-hero-visual">
          <Image src={page.heroImage} alt={page.heroImageAlt} width={1188} height={1188} preload sizes="(max-width: 900px) 92vw, 48vw" />
        </div>
      </section>

      <section className="sb-detail-outcomes" aria-labelledby="service-outcomes-title">
        <div className="sb-detail-section-head">
          <span className="sb-detail-kicker">Outcomes</span>
          <h2 id="service-outcomes-title">What this fixes first</h2>
          <p>Each priority is chosen for clarity, trust, and conversion impact.</p>
        </div>
        <div className="sb-detail-outcome-grid">
          {page.outcomes.map((item) => (
            <article className="sb-detail-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sb-detail-split" aria-labelledby="service-includes-title">
        <div className="sb-detail-split-visual">
          <Image src={page.supportImage} alt={page.supportImageAlt} width={720} height={620} sizes="(max-width: 900px) 92vw, 42vw" />
        </div>
        <div className="sb-detail-split-copy">
          <span className="sb-detail-kicker">Scope</span>
          <h2 id="service-includes-title">What is included</h2>
          <div className="sb-detail-include-grid">
            {page.includes.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sb-detail-process" aria-labelledby="service-process-title">
        <div className="sb-detail-section-head">
          <span className="sb-detail-kicker">Process</span>
          <h2 id="service-process-title">How we move from audit to growth</h2>
        </div>
        <ol className="sb-detail-process-list">
          {page.process.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sb-detail-ai" aria-labelledby="service-ai-title">
        <div>
          <span className="sb-detail-kicker">AI-Friendly Structure</span>
          <h2 id="service-ai-title">Built for people, crawlers, and answer systems</h2>
          <p>
            Last refined on <time dateTime="2026-06-25">June 25, 2026</time>. The page structure uses definitions, comparisons, FAQs, service schema,
            and clear internal actions so the offer is easier to understand.
          </p>
          <dl className="sb-detail-definitions">
            {page.definitions.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="sb-detail-table-wrap">
          <table className="sb-detail-table">
            <caption>Priority improvements for {page.eyebrow}</caption>
            <thead>
              <tr>
                <th scope="col">Signal</th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
              </tr>
            </thead>
            <tbody>
              {page.comparison.map((row) => (
                <tr key={row.signal}>
                  <th scope="row">{row.signal}</th>
                  <td>{row.before}</td>
                  <td>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="sb-detail-faq" aria-labelledby="service-faq-title">
        <div className="sb-detail-section-head">
          <span className="sb-detail-kicker">FAQ</span>
          <h2 id="service-faq-title">Common questions</h2>
        </div>
        <div className="sb-detail-faq-list">
          {page.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sb-detail-cta" aria-labelledby="service-cta-title">
        <div className="sb-detail-cta-copy">
          <span className="sb-detail-kicker">Next Step</span>
          <h2 id="service-cta-title">{page.ctaTitle}</h2>
          <p>{page.ctaText}</p>
          <ul className="sb-detail-cta-points" aria-label="Free audit includes">
            <li>
              <CheckIcon />
              Priority fixes mapped by impact
            </li>
            <li>
              <CheckIcon />
              Clear page, CTA, and SEO recommendations
            </li>
            <li>
              <CheckIcon />
              Practical next-step roadmap
            </li>
          </ul>
          <div className="sb-detail-actions">
            <Link className="sb-detail-btn sb-detail-btn-primary" href="/free-audit">
              Start With a Free Audit
              <ArrowIcon />
            </Link>
            <Link className="sb-detail-btn sb-detail-btn-ghost" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Message SitesBrand
            </Link>
          </div>
        </div>
        <div className="sb-detail-cta-visual">
          <Image src={page.ctaImage} alt={page.ctaImageAlt} width={1188} height={1188} sizes="(max-width: 900px) 80vw, 32vw" />
          <div className="sb-detail-cta-metric" aria-label="Audit promise">
            <span>48h</span>
            <p>Initial action plan after the discovery call</p>
          </div>
        </div>
      </section>
    </main>
  );
}
