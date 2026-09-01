export type CaseStudyMetric = {
  value: string;
  label: string;
  context?: string;
};

export type CaseStudyEvidence = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  name: string;
  url: string;
  market: string;
  industry: string;
  serviceLine: string;
  eyebrow: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string;
  work: readonly string[];
  outcome: string;
  period: string;
  accent: string;
  featured?: boolean;
  metrics: readonly CaseStudyMetric[];
  evidence: readonly CaseStudyEvidence[];
  evidenceNote: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "forensic-psychology",
    name: "Forensic Psychology",
    url: "https://forensicpsychology.pro/",
    market: "Global",
    industry: "Education & Professional Knowledge",
    serviceLine: "Strategy, Content, Design & Custom Astro Development",
    eyebrow: "Featured launch story",
    headline: "From a blank canvas to search and AI visibility in 21 days.",
    summary:
      "SitesBrand planned, designed, wrote, and developed ForensicPsychology.pro as a custom Astro website—then built its SEO, AEO, and GEO foundations into the launch instead of treating discoverability as an afterthought.",
    challenge:
      "The project needed more than a polished publishing site. It needed a fast, technically clean knowledge platform that could explain a specialist subject clearly, earn early search visibility, and remain easy for search and generative systems to interpret.",
    approach:
      "We treated content, information architecture, design, performance, and search visibility as one system. The result was a custom build rather than a WordPress theme, with every page and technical decision shaped around clarity, speed, and discoverability.",
    work: [
      "Defined the site strategy, information architecture, and publishing structure.",
      "Created the visual direction, responsive experience, and original website copy.",
      "Built the site as a custom Astro implementation rather than a theme or WordPress installation.",
      "Implemented technical SEO, structured content, and AEO/GEO foundations from launch.",
      "Optimized the experience for mobile performance, accessibility, best practices, and SEO.",
    ],
    outcome:
      "Within the first 21 days shown in Search Console, the new site generated measurable search demand and a clear upward visibility trend. It also began appearing in Google's generative AI reporting while maintaining near-perfect PageSpeed scores on mobile and desktop.",
    period: "First 21 days shown: 9–30 August 2026",
    accent: "#2563eb",
    featured: true,
    metrics: [
      { value: "6.45K", label: "Google impressions", context: "early launch window" },
      { value: "34", label: "Organic clicks", context: "early launch window" },
      { value: "293", label: "Generative AI impressions", context: "Google Search reporting" },
      { value: "99 / 100", label: "Mobile / desktop performance", context: "PageSpeed test" },
    ],
    evidence: [
      {
        src: "/assets/case-studies/forensic-gsc-performance.webp",
        alt: "Google Search Console performance for ForensicPsychology.pro showing 34 clicks and 6.45 thousand impressions",
        caption: "Google Search Console: 34 clicks and 6.45K impressions during the early launch window.",
        width: 2132,
        height: 1256,
      },
      {
        src: "/assets/case-studies/forensic-generative-ai.webp",
        alt: "Google generative AI search report for ForensicPsychology.pro showing 293 impressions",
        caption: "Google generative AI reporting: 293 impressions with a visible late-period rise.",
        width: 2140,
        height: 956,
      },
      {
        src: "/assets/case-studies/forensic-pagespeed-mobile.webp",
        alt: "Mobile PageSpeed results for ForensicPsychology.pro showing 99 performance, 96 accessibility, 100 best practices, and 100 SEO",
        caption: "Mobile PageSpeed: 99 Performance, 96 Accessibility, 100 Best Practices, and 100 SEO.",
        width: 1520,
        height: 1280,
      },
      {
        src: "/assets/case-studies/forensic-pagespeed-desktop.webp",
        alt: "Desktop PageSpeed results for ForensicPsychology.pro showing perfect performance, best practices, and SEO scores",
        caption: "Desktop PageSpeed: 100 Performance, 96 Accessibility, 100 Best Practices, and 100 SEO.",
        width: 1492,
        height: 1280,
      },
    ],
    evidenceNote:
      "Search Console had a 28-day filter selected, while the visible plotted activity spans approximately 9–30 August 2026. We therefore describe the result as a 21-day visible launch window rather than claiming a full 28 days of active performance.",
  },
  {
    slug: "corrisoft",
    name: "Corrisoft",
    url: "https://corrisoft.com/",
    market: "United States",
    industry: "Technology & Public-Sector Solutions",
    serviceLine: "Website Recovery & Organic Search Growth",
    eyebrow: "Search recovery story",
    headline: "Rebuilding visibility after a site-wide collapse.",
    summary:
      "Corrisoft came to SitesBrand after a reported website hack had severely damaged its digital presence. The priority was to restore a viable search foundation and rebuild the visibility the business had lost.",
    challenge:
      "A compromised website creates two problems at once: the technical platform becomes unstable, and the search signals built around it can deteriorate. The recovery needed to focus on a sustainable return—not a temporary traffic spike.",
    approach:
      "We treated the engagement as a recovery program: re-establish a dependable website and search foundation, strengthen the signals Google could use, and measure progress against the previous six-month period.",
    work: [
      "Assessed the damaged website and the search visibility baseline reported by the client.",
      "Prioritized recovery work around technical stability, crawlability, and indexable content.",
      "Rebuilt organic visibility through a sustained search-growth program.",
      "Tracked clicks, impressions, CTR, and average position against the previous six months.",
    ],
    outcome:
      "The latest six-month Search Console comparison shows a major recovery across every reported search metric: clicks and impressions multiplied, CTR nearly doubled, and average position moved into the top ten.",
    period: "Latest 6 months vs previous 6 months",
    accent: "#00a6b6",
    metrics: [
      { value: "71.5K", label: "Clicks", context: "up from 2.4K" },
      { value: "1.44M", label: "Impressions", context: "up from 89.6K" },
      { value: "5%", label: "Average CTR", context: "up from 2.7%" },
      { value: "8.7", label: "Average position", context: "improved from 11.8" },
    ],
    evidence: [
      {
        src: "/assets/case-studies/corrisoft-gsc-comparison.webp",
        alt: "Google Search Console six-month comparison for Corrisoft showing 71.5 thousand clicks and 1.44 million impressions",
        caption: "Verified GSC comparison: latest six months against the preceding six months.",
        width: 1383,
        height: 549,
      },
    ],
    evidenceNote:
      "The performance metrics come directly from the supplied Google Search Console comparison. The security incident is client-reported and is not independently demonstrated by this GSC screenshot.",
  },
  {
    slug: "accessify",
    name: "Accessify",
    url: "https://accessify.app/",
    market: "Global",
    industry: "Accessibility Technology",
    serviceLine: "SEO, AEO & GEO Recovery",
    eyebrow: "Algorithm recovery story",
    headline: "Restoring search momentum after an algorithm hit.",
    summary:
      "Accessify had lost search momentum after a Google update. SitesBrand combined SEO, AEO, and GEO work to rebuild the site's discoverability across traditional and generative search surfaces.",
    challenge:
      "The site was no longer earning the visibility it needed. The work had to go beyond chasing a single keyword or update: Accessify needed clearer search foundations, stronger content signals, and a structure that modern discovery systems could interpret.",
    approach:
      "We connected conventional SEO recovery with answer-engine and generative-search readiness, so the site could rebuild Google visibility while becoming easier for AI-driven discovery systems to understand.",
    work: [
      "Reviewed the post-update search performance and visibility pattern.",
      "Strengthened technical and on-page SEO foundations.",
      "Improved content structure and answer-focused clarity for AEO.",
      "Developed entity and retrieval signals to support GEO visibility.",
    ],
    outcome:
      "The supplied Search Console evidence shows renewed activity and a rising impression trend, with 17.1K impressions and 428 clicks in the reported performance window. Google's generative AI report recorded a further 730 impressions.",
    period: "Search Console windows supplied through 28 August 2026",
    accent: "#6240bd",
    metrics: [
      { value: "17.1K", label: "Google impressions", context: "reported GSC window" },
      { value: "428", label: "Organic clicks", context: "reported GSC window" },
      { value: "2.5%", label: "Average CTR", context: "reported GSC window" },
      { value: "730", label: "Generative AI impressions", context: "separate GSC report" },
    ],
    evidence: [
      {
        src: "/assets/case-studies/accessify-gsc-performance.webp",
        alt: "Google Search Console performance for Accessify showing 428 clicks and 17.1 thousand impressions",
        caption: "GSC performance: 428 clicks, 17.1K impressions, 2.5% CTR, and 18.3 average position.",
        width: 1600,
        height: 647,
      },
      {
        src: "/assets/case-studies/accessify-generative-ai.webp",
        alt: "Google generative AI search impressions report for Accessify showing 730 impressions",
        caption: "Google generative AI reporting: 730 impressions with recurring visibility and a late-period peak.",
        width: 1600,
        height: 626,
      },
    ],
    evidenceNote:
      "The screenshots verify search and generative-AI visibility, but they do not independently verify leads or revenue. This case study therefore avoids unsubstantiated business-growth claims.",
  },
  {
    slug: "mi-locker-room",
    name: "MI Locker Room",
    url: "https://milockerroom.biz/",
    market: "United States",
    industry: "Retail & Team Apparel",
    serviceLine: "AEO & GEO Expansion",
    eyebrow: "AI visibility expansion",
    headline: "Extending a strong SEO base into answer and generative search.",
    summary:
      "MI Locker Room already had a healthy traditional SEO foundation. The brief was not to replace what worked, but to layer SitesBrand's AEO and GEO service onto it for stronger modern-search readiness.",
    challenge:
      "When traditional SEO is already productive, unnecessary reinvention creates risk. The opportunity was to preserve the existing search equity while improving how clearly the brand, products, and expertise could be understood and retrieved in answer-led experiences.",
    approach:
      "We treated AEO and GEO as an extension of SEO rather than a separate shortcut—building on the site's existing performance while improving answer clarity and generative-search signals.",
    work: [
      "Reviewed the existing organic-search foundation and protected its strongest signals.",
      "Improved answer-focused content structure and retrieval clarity.",
      "Strengthened brand and entity signals for generative discovery.",
      "Measured the broader search baseline rather than presenting AI visibility as a replacement for SEO.",
    ],
    outcome:
      "Across the supplied 16-month Search Console view, MI Locker Room generated 794 clicks from 7.11K impressions, with an 11.2% CTR and an average position of 14.6—evidence of a productive search foundation supporting the expanded AEO/GEO work.",
    period: "16-month Google Search Console view",
    accent: "#ea6f00",
    metrics: [
      { value: "794", label: "Organic clicks", context: "16-month view" },
      { value: "7.11K", label: "Google impressions", context: "16-month view" },
      { value: "11.2%", label: "Average CTR", context: "16-month view" },
      { value: "14.6", label: "Average position", context: "16-month view" },
    ],
    evidence: [
      {
        src: "/assets/case-studies/mi-locker-room-gsc.webp",
        alt: "Google Search Console performance for MI Locker Room showing 794 clicks and 7.11 thousand impressions",
        caption: "The supplied 16-month GSC baseline: 794 clicks, 7.11K impressions, 11.2% CTR, and 14.6 average position.",
        width: 2136,
        height: 934,
      },
    ],
    evidenceNote:
      "This screenshot establishes the overall organic-search baseline. It does not isolate a before-and-after AEO/GEO lift, so the case study does not claim a specific percentage increase from that service alone.",
  },
] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
