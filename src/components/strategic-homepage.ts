import { caseStudies } from "@/content/case-studies";

const markers = {
  hero: "<!-- ===== 1. PHILOSOPHY (dark, opener) ===== -->",
  services: "<!-- ===== 2. SERVICES BUILT FOR SMARTER GROWTH (light) ===== -->",
  process: "<!-- ===== 3. PROCESS (dark) ===== -->",
  caseStudies: "<!-- ===== 6. CASE STUDIES (light) ===== -->",
  testimonials: "<!-- ===== 7. TESTIMONIALS (dark) ===== -->",
  faq: "<!-- ===== 8. FAQ (light) ===== -->",
  finalCta: "<!-- ===== 9. HERO / FINAL CTA (light) ===== -->",
  footer: "<!-- ===== FOOTER ===== -->",
};

const exactCaseStudiesPlaceholder = "<!-- ===== EXACT LIVE CASE STUDIES ===== -->";
const latestBlogsPlaceholder = "<!-- ===== LATEST BLOG POSTS ===== -->";
const exactFaqPlaceholder = "<!-- ===== EXACT LIVE FAQ ===== -->";
const exactFinalCtaPlaceholder = "<!-- ===== EXACT LIVE FINAL CTA ===== -->";

export type HomepageBlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readTime: string;
  image: string;
  imageAlt: string;
};

export type HomepageFaq = readonly [question: string, answer: string];

const strategicHero = `
  <!-- ===== 1. STRATEGIC HERO ===== -->
  <section class="sbh-hero" aria-labelledby="homepage-heading">
    <div class="sbh-wrap sbh-hero-grid">
      <div class="sbh-hero-copy" data-reveal>
        <span class="sbh-eyebrow">SEO, AI SEARCH, AUTOMATION &amp; CONVERSION</span>
        <h1 id="homepage-heading" aria-label="Be Easier to Find, Understand, and Choose Across Search and AI"><span aria-hidden="true">Be Easier to Find,</span><span aria-hidden="true">Understand, and Choose</span><span aria-hidden="true">Across Search and AI</span></h1>
        <p>SitesBrand helps growth-focused businesses strengthen technical SEO, clarify their expertise for AI-driven discovery, automate critical workflows, and build conversion-focused websites.</p>
        <p>We start with the business problem, connect the right services, and measure what changes, so you get a practical growth system instead of disconnected marketing activity.</p>
        <div class="sbh-actions">
          <a class="sbh-btn sbh-btn-call" href="https://calendly.com/hassamshabbir/30min" target="_blank" rel="noopener noreferrer">Book a Strategy Call <span aria-hidden="true">→</span></a>
          <a class="sbh-btn sbh-btn-audit" href="/free-audit">Get a Free Audit</a>
        </div>
        <ul class="sbh-proof-list" aria-label="How SitesBrand works">
          <li>People-first strategy</li>
          <li>Technical and entity clarity</li>
          <li>Measurable implementation</li>
        </ul>
      </div>

      <div class="sbh-orbit" data-reveal aria-label="SitesBrand four-step growth system">
        <div class="sbh-orbit-canvas">
          <div class="sbh-orbit-ring sbh-orbit-ring-outer"></div>
          <div class="sbh-orbit-ring sbh-orbit-ring-inner"></div>
          <span class="sbh-orbit-line sbh-orbit-line-vertical"></span>
          <span class="sbh-orbit-line sbh-orbit-line-horizontal"></span>

          <div class="sbh-orbit-logo">
            <span class="sbh-orbit-glow"></span>
            <img src="/assets/sitesbrand-icon-transparent.webp" width="118" height="142" fetchpriority="high" decoding="async" alt="SitesBrand">
          </div>

          <div class="sbh-orbit-node sbh-orbit-top">
            <span class="sbh-orbit-number">01</span>
            <div><strong>Search Foundation</strong><span>Audit · Architecture · Entity clarity</span></div>
          </div>
          <div class="sbh-orbit-node sbh-orbit-left">
            <span class="sbh-orbit-number">02</span>
            <div><strong>Customer Journey</strong><span>Messaging · UX · Conversion paths</span></div>
          </div>
          <div class="sbh-orbit-node sbh-orbit-right">
            <span class="sbh-orbit-number">03</span>
            <div><strong>Workflow Systems</strong><span>Lead routing · Follow-up · Reporting</span></div>
          </div>
          <div class="sbh-orbit-node sbh-orbit-bottom">
            <span class="sbh-orbit-number">04</span>
            <div><strong>Measurement Plan</strong><span>Events · Ownership · QA</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const strategicServicesTop = `
      <!-- TOP: service introduction + four connected services -->
      <div class="sbh-services-intro" data-reveal>
        <div>
          <span class="sbh-services-eyebrow">WHAT WE DO</span>
          <h2>Four Connected Services.<br>One Clear Growth System<span>.</span></h2>
          <p>SitesBrand helps businesses build qualified visibility and stronger digital journeys through four connected services: Search Growth &amp; AI Visibility, AI Automation &amp; Integrations, Conversion-Focused Web Design &amp; Development, and Conversion &amp; Growth Strategy.</p>
        </div>
        <div class="sbh-services-action">
          <a href="/services" data-secondary-cta>View All Services →</a>
          <div class="sbh-services-trust">
            <img src="/assets/ambitious-teams-portraits-178.avif" width="178" height="80" loading="lazy" decoding="async" alt="A diverse group of business leaders">
            <span>Built for teams that want search, automation, web, and conversion working as one connected system.</span>
          </div>
        </div>
      </div>

      <div class="sbh-core-services-grid" aria-label="SitesBrand core services">
        <article class="svc-light sbh-core-card" data-reveal>
          <div class="sbh-core-visual sbh-search-visual" aria-hidden="true">
            <div class="sbh-search-bars"><i></i><i></i><i></i><i></i><i></i></div>
            <div class="sbh-search-lens">
              <svg width="72" height="72" viewBox="0 0 80 80" fill="none"><circle cx="34" cy="34" r="26" fill="rgba(26,27,65,.9)" stroke="#22244a" stroke-width="3"></circle><circle cx="34" cy="34" r="16" stroke="#00E5FF" stroke-width="2.5" fill="rgba(0,229,255,.06)"></circle><path d="M53 53 L70 70" stroke="#1A1B41" stroke-width="9" stroke-linecap="round"></path></svg>
            </div>
          </div>
          <h3>Search Growth &amp; AI Visibility</h3>
          <p>Improve how clearly Google Search and AI-driven discovery systems can crawl, understand, and retrieve your brand without treating AEO or GEO as shortcuts.</p>
          <ul>
            <li>Technical SEO and search architecture</li>
            <li>Content systems and topical authority</li>
            <li>Structured data and entity clarity</li>
            <li>AI visibility baselines and implementation QA</li>
          </ul>
          <a class="sbh-core-link" href="/services/seo-growth-engine">Explore Search Growth <span>→</span></a>
        </article>

        <article class="svc-light sbh-core-card" data-reveal>
          <div class="sbh-core-visual" aria-hidden="true">
            <svg width="110" height="120" viewBox="0 0 110 120" fill="none">
              <line x1="55" y1="8" x2="55" y2="24" stroke="#1A1B41" stroke-width="2.5" stroke-linecap="round"></line>
              <circle cx="55" cy="5" r="4.5" fill="#00E5FF"></circle>
              <rect x="18" y="24" width="74" height="52" rx="13" fill="#1a1c50"></rect>
              <circle cx="38" cy="48" r="10" fill="rgba(0,229,255,.12)" stroke="#00E5FF" stroke-width="2"></circle>
              <circle cx="38" cy="48" r="4.5" fill="#00E5FF"></circle>
              <circle cx="72" cy="48" r="10" fill="rgba(0,229,255,.12)" stroke="#00E5FF" stroke-width="2"></circle>
              <circle cx="72" cy="48" r="4.5" fill="#00E5FF"></circle>
              <rect x="34" y="65" width="42" height="5" rx="2.5" fill="#00E5FF" opacity=".45"></rect>
              <rect x="30" y="76" width="50" height="30" rx="9" fill="#0e1030"></rect>
              <rect x="40" y="83" width="30" height="4" rx="2" fill="rgba(0,229,255,.35)"></rect>
              <rect x="40" y="91" width="22" height="4" rx="2" fill="rgba(0,229,255,.2)"></rect>
              <rect x="24" y="106" width="22" height="9" rx="4.5" fill="#1a1c50"></rect>
              <rect x="64" y="106" width="22" height="9" rx="4.5" fill="#1a1c50"></rect>
            </svg>
          </div>
          <h3>AI Automation &amp; Integrations</h3>
          <p>Turn repetitive lead, CRM, reporting, and onboarding work into documented workflows with clear ownership, error handling, and human review.</p>
          <ul>
            <li>Lead capture and qualification</li>
            <li>CRM and follow-up workflows</li>
            <li>Reporting and onboarding automation</li>
            <li>n8n, APIs, and maintenance documentation</li>
          </ul>
          <a class="sbh-core-link" href="/services/data-automation">Explore AI Automation <span>→</span></a>
        </article>

        <article class="svc-light sbh-core-card" data-reveal>
          <div class="sbh-core-visual" aria-hidden="true">
            <svg width="140" height="115" viewBox="0 0 140 115" fill="none">
              <rect x="4" y="4" width="132" height="96" rx="10" fill="#0e1030"></rect>
              <rect x="4" y="4" width="132" height="22" rx="10" fill="#1a1c50"></rect>
              <rect x="4" y="15" width="132" height="11" fill="#1a1c50"></rect>
              <circle cx="18" cy="15" r="4" fill="rgba(255,100,80,.7)"></circle>
              <circle cx="30" cy="15" r="4" fill="rgba(255,200,0,.7)"></circle>
              <circle cx="42" cy="15" r="4" fill="rgba(50,200,80,.7)"></circle>
              <rect x="12" y="32" width="116" height="60" rx="5" fill="#131540"></rect>
              <text x="18" y="72" font-family="monospace" font-size="30" font-weight="900" fill="#00E5FF" opacity=".9">&lt;/&gt;</text>
              <rect x="84" y="40" width="34" height="20" rx="5" fill="#00E5FF"></rect>
              <text x="90" y="54" font-family="monospace" font-size="10" font-weight="800" fill="#0a0b1e">&lt;/&gt;</text>
              <rect x="84" y="65" width="34" height="4" rx="2" fill="rgba(255,255,255,.14)"></rect>
              <rect x="84" y="73" width="26" height="4" rx="2" fill="rgba(255,255,255,.09)"></rect>
            </svg>
          </div>
          <h3>Conversion-Focused Web Design &amp; Development</h3>
          <p>Create fast, accessible pages that make your offer easier to understand and the next action easier to take, built with search, mobile, and conversion in mind.</p>
          <ul>
            <li>Positioning-led information architecture</li>
            <li>UI/UX and conversion-focused page structure</li>
            <li>Mobile-first performance</li>
            <li>Technical SEO, tracking, and launch QA</li>
          </ul>
          <a class="sbh-core-link" href="/services/web-automation-system">Explore Web Development <span>→</span></a>
        </article>

        <article class="svc-light sbh-core-card" data-reveal>
          <div class="sbh-core-visual sbh-growth-visual" aria-hidden="true">
            <img src="/assets/services/cards/conversion-growth-strategy-icon-170-v2.avif" width="170" height="170" loading="lazy" decoding="async" alt="">
          </div>
          <h3>Conversion &amp; Growth Strategy</h3>
          <p>Find the highest-impact gaps across visibility, messaging, user journeys, tracking, and sales before spending more on execution.</p>
          <ul>
            <li>Website and funnel audits</li>
            <li>Messaging and positioning</li>
            <li>Conversion and analytics review</li>
            <li>Prioritized growth roadmap</li>
          </ul>
          <a class="sbh-core-link" href="/services">Explore Growth Strategy <span>→</span></a>
        </article>
      </div>
`;

const strategicSections = `
  <!-- ===== OUR PROCESS ===== -->
  <section class="sbh-live-process" id="process" aria-labelledby="process-heading">
    <div class="sbh-wrap">
      <div class="sbh-live-process-heading" data-reveal>
        <span>OUR PROCESS</span>
        <i aria-hidden="true"></i>
        <h2 id="process-heading">How Does SitesBrand<br> Build Smarter Growth<span>?</span></h2>
        <p>We move from evidence to execution through a six-step system that connects search visibility, AI readiness, automation, web experience, conversion, and measurement.</p>
      </div>

      <ol class="sbh-live-process-grid" aria-label="SitesBrand six-step growth process">
        <svg class="sbh-live-process-arrow" width="28" height="18" viewBox="0 0 28 18" fill="none" aria-hidden="true"><path d="M0 9H24M18 3L25 9L18 15" stroke="#00E5FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <li class="step sbh-live-process-step" data-reveal>
          <span class="sbh-live-process-number">01</span>
          <i class="sbh-live-process-stem" aria-hidden="true"></i>
          <article>
            <div class="sbh-live-process-icon" aria-hidden="true">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none"><circle cx="30" cy="30" r="22" fill="rgba(8,12,50,.9)" stroke="#00E5FF" stroke-width="2.5"></circle><circle cx="30" cy="30" r="13" stroke="rgba(0,229,255,.3)" stroke-width="1.5" fill="rgba(0,229,255,.04)"></circle><path d="M47 47L60 60" stroke="#2a2c80" stroke-width="8" stroke-linecap="round"></path><path d="M46 46L58 58" stroke="#4444c0" stroke-width="5" stroke-linecap="round"></path></svg>
            </div>
            <h3>Discover</h3>
            <p>We align business goals, audience needs, priority offers, and meaningful conversion actions.</p>
            <i aria-hidden="true"></i>
          </article>
        </li>

        <li class="step sbh-live-process-step" data-reveal>
          <span class="sbh-live-process-number">02</span>
          <i class="sbh-live-process-stem" aria-hidden="true"></i>
          <article>
            <div class="sbh-live-process-icon sbh-live-process-bars" aria-hidden="true">
              <b></b><b></b><b></b><b></b>
            </div>
            <h3>Diagnose</h3>
            <p>We audit technical SEO, AEO and GEO readiness, entity signals, journeys, data, and workflows.</p>
            <i aria-hidden="true"></i>
          </article>
        </li>

        <li class="step sbh-live-process-step" data-reveal>
          <span class="sbh-live-process-number">03</span>
          <i class="sbh-live-process-stem" aria-hidden="true"></i>
          <article>
            <div class="sbh-live-process-icon" aria-hidden="true">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="30" stroke="rgba(0,229,255,.2)" stroke-width="2" fill="rgba(0,229,255,.03)"></circle><circle cx="35" cy="35" r="20" stroke="#5b5bf0" stroke-width="2" fill="rgba(91,91,240,.05)"></circle><circle cx="35" cy="35" r="10" stroke="#00E5FF" stroke-width="2.5" fill="rgba(0,229,255,.1)"></circle><path d="M52 14L37 33" stroke="#FF6F59" stroke-width="3" stroke-linecap="round"></path><path d="M52 14L45 16L48 22Z" fill="#FF6F59"></path></svg>
            </div>
            <h3>Prioritize</h3>
            <p>We rank opportunities by impact, evidence, effort, dependencies, and risk.</p>
            <i aria-hidden="true"></i>
          </article>
        </li>

        <li class="step sbh-live-process-step" data-reveal>
          <span class="sbh-live-process-number">04</span>
          <i class="sbh-live-process-stem" aria-hidden="true"></i>
          <article>
            <div class="sbh-live-process-icon" aria-hidden="true">
              <svg width="80" height="64" viewBox="0 0 80 64" fill="none"><rect x="2" y="2" width="76" height="52" rx="8" fill="#0a0f2e" stroke="#1e2060" stroke-width="2"></rect><rect x="2" y="2" width="76" height="16" rx="8" fill="#141850"></rect><rect x="2" y="10" width="76" height="8" fill="#141850"></rect><circle cx="12" cy="10" r="3" fill="rgba(255,100,80,.6)"></circle><circle cx="22" cy="10" r="3" fill="rgba(255,200,0,.6)"></circle><circle cx="32" cy="10" r="3" fill="rgba(50,200,80,.6)"></circle><rect x="10" y="22" width="60" height="26" rx="4" fill="#070a20"></rect><text x="14" y="42" font-family="monospace" font-size="18" font-weight="800" fill="#00E5FF">&lt;/&gt;</text><rect x="50" y="28" width="16" height="9" rx="3" fill="#00E5FF"></rect></svg>
            </div>
            <h3>Build &amp; Implement</h3>
            <p>We create fast, accessible, crawlable experiences with structured content and clear paths.</p>
            <i aria-hidden="true"></i>
          </article>
        </li>

        <li class="step sbh-live-process-step" data-reveal>
          <span class="sbh-live-process-number">05</span>
          <i class="sbh-live-process-stem" aria-hidden="true"></i>
          <article>
            <div class="sbh-live-process-icon" aria-hidden="true">
              <svg width="64" height="78" viewBox="0 0 64 78" fill="none"><line x1="32" y1="6" x2="32" y2="20" stroke="#1a1b41" stroke-width="2.5" stroke-linecap="round"></line><circle cx="32" cy="4" r="4" fill="#00E5FF"></circle><rect x="8" y="20" width="48" height="36" rx="10" fill="#0e1040"></rect><circle cx="22" cy="35" r="7.5" fill="rgba(0,229,255,.1)" stroke="#00E5FF" stroke-width="2"></circle><circle cx="22" cy="35" r="3.5" fill="#00E5FF"></circle><circle cx="42" cy="35" r="7.5" fill="rgba(0,229,255,.1)" stroke="#00E5FF" stroke-width="2"></circle><circle cx="42" cy="35" r="3.5" fill="#00E5FF"></circle><rect x="20" y="48" width="24" height="4" rx="2" fill="rgba(0,229,255,.3)"></rect><rect x="12" y="56" width="40" height="18" rx="7" fill="#080a25"></rect><rect x="20" y="62" width="24" height="3" rx="1.5" fill="rgba(0,229,255,.22)"></rect></svg>
            </div>
            <h3>Automate</h3>
            <p>We connect repetitive workflows with clear ownership, safeguards, and human review.</p>
            <i aria-hidden="true"></i>
          </article>
        </li>

        <li class="step sbh-live-process-step" data-reveal>
          <span class="sbh-live-process-number">06</span>
          <i class="sbh-live-process-stem" aria-hidden="true"></i>
          <article>
            <div class="sbh-live-process-icon sbh-live-process-scale" aria-hidden="true">
              <b></b><b></b><b></b><b></b>
              <svg width="22" height="34" viewBox="0 0 22 34" fill="none"><path d="M11 30L11 4M11 4L4 12M11 4L18 12" stroke="#00BFD8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <h3>Verify &amp; Improve</h3>
            <p>We check implementation, measure qualified outcomes, and improve from real data.</p>
            <i aria-hidden="true"></i>
          </article>
        </li>
      </ol>

      <div class="sbh-live-process-values" data-reveal>
        <div>
          <span aria-hidden="true"><svg width="34" height="34" viewBox="0 0 34 34" fill="none"><rect x="1" y="1" width="32" height="32" rx="15" stroke="rgba(0,229,255,.45)" stroke-width="1.8" fill="rgba(0,229,255,.06)"></rect><path d="M17 9L11 13L11 19C11 23 14 26 17 27C20 26 23 23 23 19L23 13Z" stroke="#00E5FF" stroke-width="1.8" fill="none" stroke-linejoin="round"></path></svg></span>
          <p><strong>Transparent</strong><small>Clear communication, zero surprises.</small></p>
        </div>
        <div>
          <span aria-hidden="true"><svg width="34" height="34" viewBox="0 0 34 34" fill="none"><rect x="1" y="1" width="32" height="32" rx="15" stroke="rgba(0,229,255,.45)" stroke-width="1.8" fill="rgba(0,229,255,.06)"></rect><path d="M17 7L13 17H17L13 27" stroke="#00E5FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg></span>
          <p><strong>Agile</strong><small>Fast iterations, real-time adaptability.</small></p>
        </div>
        <div>
          <span aria-hidden="true"><svg width="34" height="34" viewBox="0 0 34 34" fill="none"><rect x="1" y="1" width="32" height="32" rx="15" stroke="rgba(0,229,255,.45)" stroke-width="1.8" fill="rgba(0,229,255,.06)"></rect><rect x="10" y="15" width="14" height="11" rx="2.5" stroke="#00E5FF" stroke-width="1.8" fill="none"></rect><path d="M13 15L13 11.5C13 9.6 14.8 8 17 8C19.2 8 21 9.6 21 11.5L21 15" stroke="#00E5FF" stroke-width="1.8" stroke-linecap="round" fill="none"></path><circle cx="17" cy="20" r="1.8" fill="#00E5FF"></circle></svg></span>
          <p><strong>Secure</strong><small>Enterprise-grade security &amp; privacy.</small></p>
        </div>
        <div>
          <span aria-hidden="true"><svg width="34" height="34" viewBox="0 0 34 34" fill="none"><rect x="1" y="1" width="32" height="32" rx="15" stroke="rgba(0,229,255,.45)" stroke-width="1.8" fill="rgba(0,229,255,.06)"></rect><path d="M9 25L15 17L19 21L25 11" stroke="#00E5FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M23 11L27 11L27 15" stroke="#00E5FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg></span>
          <p><strong>Results-Driven</strong><small>Focus on impact, growth, and ROI.</small></p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== WHY SITESBRAND ===== -->
  <section class="sbh-section sbh-compare" id="why-sitesbrand" aria-labelledby="why-sitesbrand-heading">
    <div class="sbh-wrap">
      <div class="sbh-compare-heading" data-reveal>
        <span class="sbh-eyebrow">WHY SITESBRAND</span>
        <h2 id="why-sitesbrand-heading">Not All Growth <span>Agencies</span><br> Are The Same</h2>
      </div>

      <div class="sbh-compare-layout">
        <div class="sbh-compare-table" role="table" aria-label="Typical agency and SitesBrand comparison" data-reveal>
          <div class="sbh-compare-row sbh-compare-head" role="row">
            <span role="columnheader">Capability</span>
            <span role="columnheader">Typical Agency</span>
            <span role="columnheader">SitesBrand</span>
          </div>
          <div class="sbh-compare-row" role="row">
            <strong role="rowheader">Starting point</strong>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-neutral" src="/assets/icons/comparison/minus.svg" width="22" height="22" alt="Varies"></span>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-positive" src="/assets/icons/comparison/check.svg" width="22" height="22" alt="Included"></span>
          </div>
          <div class="sbh-compare-row" role="row">
            <strong role="rowheader">Search and AI visibility</strong>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-negative" src="/assets/icons/comparison/x.svg" width="22" height="22" alt="Not standard"></span>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-positive" src="/assets/icons/comparison/check.svg" width="22" height="22" alt="Included"></span>
          </div>
          <div class="sbh-compare-row" role="row">
            <strong role="rowheader">Web, automation and conversion</strong>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-negative" src="/assets/icons/comparison/x.svg" width="22" height="22" alt="Not standard"></span>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-positive" src="/assets/icons/comparison/check.svg" width="22" height="22" alt="Included"></span>
          </div>
          <div class="sbh-compare-row" role="row">
            <strong role="rowheader">Implementation ownership</strong>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-neutral" src="/assets/icons/comparison/minus.svg" width="22" height="22" alt="Varies"></span>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-positive" src="/assets/icons/comparison/check.svg" width="22" height="22" alt="Included"></span>
          </div>
          <div class="sbh-compare-row" role="row">
            <strong role="rowheader">Documentation and QA</strong>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-negative" src="/assets/icons/comparison/x.svg" width="22" height="22" alt="Not standard"></span>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-positive" src="/assets/icons/comparison/check.svg" width="22" height="22" alt="Included"></span>
          </div>
          <div class="sbh-compare-row" role="row">
            <strong role="rowheader">Measurement</strong>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-neutral" src="/assets/icons/comparison/minus.svg" width="22" height="22" alt="Varies"></span>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-positive" src="/assets/icons/comparison/check.svg" width="22" height="22" alt="Included"></span>
          </div>
          <div class="sbh-compare-row" role="row">
            <strong role="rowheader">Recommendations</strong>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-negative" src="/assets/icons/comparison/x.svg" width="22" height="22" alt="Not standard"></span>
            <span role="cell"><img class="sbh-compare-status sbh-compare-status-positive" src="/assets/icons/comparison/check.svg" width="22" height="22" alt="Included"></span>
          </div>
        </div>

        <div class="sbh-compare-reasons" aria-label="Why teams choose SitesBrand">
          <article class="sbh-compare-reason" data-reveal>
            <span><img src="/assets/icons/comparison/target.svg" width="28" height="28" alt=""></span>
            <div><h3>Problem-First Strategy</h3><p>Every recommendation starts with the business problem, audience, and meaningful growth goals.</p></div>
          </article>
          <article class="sbh-compare-reason" data-reveal>
            <span><img src="/assets/icons/comparison/layers-3.svg" width="28" height="28" alt=""></span>
            <div><h3>Connected Growth System</h3><p>Search, automation, web, and conversion work from one prioritized roadmap.</p></div>
          </article>
          <article class="sbh-compare-reason" data-reveal>
            <span><img src="/assets/icons/comparison/file-check-2.svg" width="28" height="28" alt=""></span>
            <div><h3>Documented Execution</h3><p>Ownership, dependencies, safeguards, and implementation QA stay clear throughout delivery.</p></div>
          </article>
          <article class="sbh-compare-reason" data-reveal>
            <span><img src="/assets/icons/comparison/chart-no-axes-combined.svg" width="28" height="28" alt=""></span>
            <div><h3>Honest Measurement</h3><p>Verified results remain separate from projections, with assumptions and limitations explained.</p></div>
          </article>
        </div>
      </div>
    </div>
  </section>

  ${exactCaseStudiesPlaceholder}

  ${latestBlogsPlaceholder}

  ${exactFaqPlaceholder}

  ${exactFinalCtaPlaceholder}
`;

function rebuildCoreServicesTop(section: string) {
  const sectionWithAnchor = section.replace(
    '<section data-screen-label="Services Built"',
    '<section id="services" data-screen-label="Services Built"',
  );
  const topStart = sectionWithAnchor.indexOf("<!-- TOP: left heading + 3 cards -->");
  const bottomStart = sectionWithAnchor.indexOf("<!-- BOTTOM: 4 feature metrics -->");
  if (topStart < 0 || bottomStart < 0 || bottomStart <= topStart) return sectionWithAnchor;
  return `${sectionWithAnchor.slice(0, topStart)}${strategicServicesTop}\n\n      ${sectionWithAnchor.slice(bottomStart)}`;
}

function prepareExactCaseStudies(section: string) {
  if (!section) return section;
  const cards = caseStudies.map((study, index) => {
    const metricOne = study.metrics[0];
    const metricTwo = study.metrics[1];
    return `
        <article class="case sbh-real-case" data-reveal style="--home-case-accent:${study.accent}">
          <a class="sbh-real-case-image" href="/case-studies/${study.slug}" aria-label="Read ${escapeHtml(study.name)} case study">
            <img src="${study.evidence[0].src}" width="${study.evidence[0].width}" height="${study.evidence[0].height}" loading="lazy" decoding="async" alt="${escapeHtml(study.evidence[0].alt)}">
            <span>${index === 0 ? "Featured" : escapeHtml(study.market)}</span>
          </a>
          <div class="sbh-real-case-copy">
            <div class="sbh-real-case-meta"><span>${escapeHtml(study.name)}</span><span>${escapeHtml(study.serviceLine)}</span></div>
            <h3>${escapeHtml(study.headline)}</h3>
            <p>${escapeHtml(study.summary)}</p>
            <div class="sbh-real-case-stats">
              <div><strong>${escapeHtml(metricOne.value)}</strong><span>${escapeHtml(metricOne.label)}</span></div>
              <div><strong>${escapeHtml(metricTwo.value)}</strong><span>${escapeHtml(metricTwo.label)}</span></div>
            </div>
            <a class="sbh-real-case-link" href="/case-studies/${study.slug}">Read the case study <span aria-hidden="true">→</span></a>
          </div>
        </article>`;
  }).join("");

  return `
  <!-- ===== 6. REAL CASE STUDIES ===== -->
  <section id="cases" class="sbh-real-cases" aria-labelledby="real-case-studies-title">
    <div class="sbh-wrap">
      <div class="sbh-real-cases-heading" data-reveal>
        <div>
          <span class="sbh-eyebrow">REAL CLIENT WORK</span>
          <h2 id="real-case-studies-title">Proof you can inspect<span>.</span></h2>
          <p>Real search recovery, AI visibility, and custom development stories backed by supplied Search Console and PageSpeed evidence.</p>
        </div>
        <a class="sbh-btn sbh-btn-call sbh-case-studies-cta" href="/case-studies">View All Case Studies <span aria-hidden="true">→</span></a>
      </div>
      <div class="sbh-real-cases-grid" data-cases>${cards}
      </div>
    </div>
  </section>`;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function formatBlogDate(published: string) {
  const date = new Date(`${published}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return published;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function renderLatestBlogs(posts: HomepageBlogPost[]) {
  const cards = posts.slice(0, 3).map((post) => {
    const href = `/resources/blog/${encodeURIComponent(post.slug)}`;

    return `
        <article class="sbh-blog-card" data-reveal>
          <a class="sbh-blog-image" href="${href}" aria-label="Read ${escapeHtml(post.title)}">
            <img src="${escapeHtml(post.image)}" width="720" height="405" loading="lazy" decoding="async" alt="${escapeHtml(post.imageAlt)}">
          </a>
          <div class="sbh-blog-card-body">
            <div class="sbh-blog-meta">
              <span>${escapeHtml(post.category)}</span>
              <time datetime="${escapeHtml(post.published)}">${escapeHtml(formatBlogDate(post.published))}</time>
              <small>${escapeHtml(post.readTime)}</small>
            </div>
            <h3><a href="${href}">${escapeHtml(post.title)}</a></h3>
            <p>${escapeHtml(post.description)}</p>
            <a class="sbh-blog-read" href="${href}">Read Article <span aria-hidden="true">→</span></a>
          </div>
        </article>`;
  }).join("");

  if (!cards) return "";

  return `
  <!-- ===== LATEST INSIGHTS ===== -->
  <section class="sbh-latest-blogs" id="latest-insights" aria-labelledby="latest-insights-heading">
    <div class="sbh-wrap">
      <div class="sbh-blog-heading" data-reveal>
        <div>
          <span class="sbh-eyebrow">LATEST INSIGHTS</span>
          <h2 id="latest-insights-heading">Ideas to Make Growth<br>Clearer and Smarter<span>.</span></h2>
          <p>Explore practical thinking on SEO, AI search, automation, conversion, and digital growth.</p>
        </div>
        <a class="sbh-btn sbh-btn-call sbh-blog-all" href="/resources/blog">View All Blogs <span aria-hidden="true">→</span></a>
      </div>
      <div class="sbh-blog-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}

function renderFaqItems(faqs: readonly HomepageFaq[]) {
  return faqs.map(([question, answer]) => `
        <div class="faq-item" data-reveal style="background:var(--lcard);border:1px solid var(--lborder);border-radius:18px;box-shadow:var(--lshadow);overflow:hidden">
          <button class="faq-q" style="width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;background:none;border:none;cursor:pointer;padding:22px 26px;text-align:left;font:inherit;color:var(--ltext)"><span style="font-family:'Poppins';font-weight:600;font-size:17px">${escapeHtml(question)}</span><span class="faq-ic" style="flex:none;width:30px;height:30px;border-radius:50%;background:var(--lchip);display:flex;align-items:center;justify-content:center;color:#00bcd4;font-size:18px;transition:transform .3s">+</span></button>
          <div class="faq-a" style="max-height:0;overflow:hidden;transition:max-height .4s ease"><p style="font-size:14.5px;line-height:1.7;color:var(--lmuted);margin:0;padding:0 26px 24px">${escapeHtml(answer)}</p></div>
        </div>`).join("");
}

function prepareExactFaqs(section: string, faqs: readonly HomepageFaq[]) {
  const listStart = section.indexOf("data-faq-list");
  if (listStart < 0) return section;

  const listOpenEnd = section.indexOf(">", listStart) + 1;
  const listClose = section.lastIndexOf("\n      </div>");
  if (listOpenEnd <= 0 || listClose <= listOpenEnd) return section;

  return `${section.slice(0, listOpenEnd)}${renderFaqItems(faqs)}${section.slice(listClose)}`;
}

function prepareExactFooter(section: string) {
  return section.replace(
    'src="/assets/sitesbrand-wordmark-transparent.webp"',
    'src="/assets/sitesbrand-full-logo-white-s-transparent-final-220.avif"',
  );
}

export function buildStrategicHomepageHtml(
  html: string,
  latestBlogPosts: HomepageBlogPost[] = [],
  homepageFaqs: readonly HomepageFaq[] = [],
) {
  const heroStart = html.indexOf(markers.hero);
  const servicesStart = html.indexOf(markers.services);
  const processStart = html.indexOf(markers.process);
  const caseStudiesStart = html.indexOf(markers.caseStudies);
  const testimonialsStart = html.indexOf(markers.testimonials, caseStudiesStart);
  const faqStart = html.indexOf(markers.faq, testimonialsStart);
  const finalCtaStart = html.indexOf(markers.finalCta, testimonialsStart);
  const footerStart = html.indexOf(markers.footer, processStart);
  const rootClose = html.lastIndexOf("\n</div>");

  if (
    [
      heroStart,
      servicesStart,
      processStart,
      caseStudiesStart,
      testimonialsStart,
      faqStart,
      finalCtaStart,
      footerStart,
    ].some((index) => index < 0)
    || rootClose <= footerStart
  ) {
    return html;
  }

  const preservedServices = rebuildCoreServicesTop(html.slice(servicesStart, processStart));
  const exactCaseStudies = prepareExactCaseStudies(
    html.slice(caseStudiesStart, testimonialsStart),
  );
  const exactFaqs = prepareExactFaqs(
    html.slice(faqStart, finalCtaStart),
    homepageFaqs,
  );
  const exactFinalCta = html.slice(finalCtaStart, footerStart);
  const exactFooter = prepareExactFooter(html.slice(footerStart, rootClose));
  const homepageSections = strategicSections
    .replace(exactCaseStudiesPlaceholder, exactCaseStudies)
    .replace(latestBlogsPlaceholder, renderLatestBlogs(latestBlogPosts))
    .replace(exactFaqPlaceholder, exactFaqs)
    .replace(exactFinalCtaPlaceholder, exactFinalCta);

  return [
    html.slice(0, heroStart),
    strategicHero,
    preservedServices,
    homepageSections,
    "\n  </main>\n\n",
    exactFooter,
    "\n</div>",
  ].join("");
}

export const strategicHomepageCss = `
  :root{
    --brand-navy:#0B1F33;
    --brand-blue:#2563EB;
    --brand-blue-hover:#1D4ED8;
    --brand-teal:#0F9F8F;
    --brand-cyan:#00E5FF;
    --text-primary:#172033;
    --text-secondary:#5B677A;
    --text-light:#CFD9E6;
    --background-white:#FFFFFF;
    --background-soft:#F5F8FC;
    --border-light:#DCE5EF;
    --blue-soft:#E8F1FF;
    --footer-dark:#071727;
  }
  .sbh-wrap{width:100%;max-width:1280px;margin:0 auto}
  .sbh-section{padding:96px 28px}
  .sbh-white{background:#fff;color:var(--text-primary)}
  .sbh-soft{background:var(--background-soft);color:var(--text-primary)}
  .sbh-eyebrow{display:inline-flex;color:#00788A;font-size:11px;font-weight:800;letter-spacing:.17em;text-transform:uppercase}
  .sbh-hero{padding:84px 28px 72px;background:linear-gradient(135deg,#F7FAFD 0%,#EEF5FC 55%,#F3FAF8 100%);color:var(--text-primary)}
  .sbh-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
  .sbh-hero-copy{grid-column:1;grid-row:1}
  .sbh-hero h1{max-width:720px;margin:18px 0 0;color:var(--brand-navy);font-family:'Poppins',sans-serif;font-size:clamp(40px,3.4vw,48px);font-weight:800;line-height:1.04;letter-spacing:-.045em}
  .sbh-hero h1 span{display:block}
  @media(min-width:981px){.sbh-hero h1 span{white-space:nowrap}}
  .sbh-hero-copy>p{max-width:680px;margin:20px 0 0;color:var(--text-secondary);font-size:16px;line-height:1.75}
  .sbh-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
  .sbh-btn{display:inline-flex;min-height:50px;align-items:center;justify-content:center;gap:10px;border-radius:12px;padding:14px 22px;font-size:14px;font-weight:750;text-decoration:none}
  .sbh-btn-call,.sbh-btn-audit{min-height:52px;border-radius:999px;padding:14px 25px}
  .sbh-btn-call{border:1px solid var(--brand-navy);background:var(--brand-navy);color:#fff!important;box-shadow:0 14px 28px -16px rgba(11,31,51,.75)}
  .sbh-btn-call span{color:#00E5FF;font-size:17px}
  .sbh-btn-audit{background:linear-gradient(135deg,#00E5FF,#35D4FF);color:#071022!important;box-shadow:0 14px 30px -17px rgba(0,229,255,.9)}
  .sbh-btn-call:hover,.sbh-btn-audit:hover{opacity:1;transform:translateY(-2px)}
  .sbh-btn-primary{background:var(--brand-blue);color:#fff!important;box-shadow:0 12px 28px -14px rgba(37,99,235,.7)}
  .sbh-btn-primary:hover{background:var(--brand-blue-hover);opacity:1}
  .sbh-btn-secondary{border:1px solid var(--brand-navy);background:#fff;color:var(--brand-navy)!important}
  .sbh-proof-list{display:flex;flex-wrap:wrap;gap:10px 22px;margin:26px 0 0;padding:0;list-style:none}
  .sbh-proof-list li{display:flex;align-items:center;gap:8px;color:#455267;font-size:12.5px;font-weight:650}
  .sbh-proof-list li:before{content:'✓';display:grid;width:20px;height:20px;place-items:center;border-radius:50%;background:#E8FBFE;color:var(--brand-cyan);font-size:11px;font-weight:900}
  .sbh-services-intro{display:grid;grid-template-columns:minmax(0,820px) minmax(260px,1fr);gap:56px;align-items:end;margin-bottom:42px}
  .sbh-services-eyebrow{display:inline-flex;color:#00788A;font-size:11px;font-weight:800;letter-spacing:.18em}
  .sbh-services-intro h2{max-width:780px;margin:14px 0 0;color:var(--brand-navy);font-family:'Poppins';font-size:clamp(38px,4vw,54px);font-weight:800;line-height:1.06;letter-spacing:-.038em}
  .sbh-services-intro h2>span{color:#00E5FF}
  .sbh-services-intro p{max-width:820px;margin:18px 0 0;color:var(--text-secondary);font-size:14.5px;line-height:1.75}
  .sbh-services-action{display:flex;align-items:flex-start;flex-direction:column;justify-self:end;gap:14px;max-width:320px}
  .sbh-services-trust{display:flex;align-items:center;gap:12px}
  .sbh-services-trust img{width:150px;height:auto;flex:none}
  .sbh-services-trust span{display:block;color:var(--text-secondary);font-size:11.5px;line-height:1.55}
  [data-screen-label="Services Built"] [data-secondary-cta]{
    display:inline-flex;
    min-height:52px;
    align-items:center;
    justify-content:center;
    gap:8px;
    margin-top:0;
    border:1px solid var(--brand-navy)!important;
    border-radius:999px!important;
    background:var(--brand-navy)!important;
    color:#fff!important;
    padding:14px 24px!important;
    box-shadow:none!important;
    font-size:14px;
    font-weight:750;
    text-decoration:none;
    white-space:nowrap;
  }
  [data-screen-label="Services Built"] [data-secondary-cta]:hover{transform:translateY(-2px);box-shadow:none!important}
  .sbh-core-services-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;align-items:stretch}
  .sbh-core-card{display:flex;min-width:0;flex-direction:column;border:1px solid rgba(0,229,255,.24);border-radius:20px;background:#fff;padding:22px}
  .sbh-core-visual{display:flex;height:120px;align-items:center;justify-content:center;margin:2px 0 18px}
  .sbh-search-visual{position:relative;align-items:flex-end;overflow:hidden}
  .sbh-search-bars{position:relative;z-index:1;display:flex;align-items:flex-end;gap:8px}
  .sbh-search-bars i{display:block;width:18px;border-radius:4px 4px 0 0;background:linear-gradient(180deg,#3b3be0,#1A1B41)}
  .sbh-search-bars i:nth-child(1){height:45px}
  .sbh-search-bars i:nth-child(2){height:62px}
  .sbh-search-bars i:nth-child(3){height:80px}
  .sbh-search-bars i:nth-child(4){height:100px;background:linear-gradient(180deg,#5b5bf0,#3b3be0)}
  .sbh-search-bars i:nth-child(5){height:120px;background:linear-gradient(180deg,#00E5FF,#3b3be0);box-shadow:0 0 16px rgba(0,229,255,.5)}
  .sbh-search-lens{position:absolute;left:50%;top:0;z-index:2;transform:translateX(-55%)}
  .sbh-growth-visual{overflow:hidden}
  .sbh-growth-visual img{display:block;width:170px;height:170px;max-width:none;object-fit:contain;transform:translateY(-2px)}
  .sbh-core-card h3{min-height:52px;margin:0;color:var(--brand-navy);font-family:'Poppins';font-size:16px;font-weight:750;line-height:1.35}
  .sbh-core-card>p{min-height:104px;margin:10px 0 0;color:var(--text-secondary);font-size:12.3px;line-height:1.62}
  .sbh-core-card ul{display:flex;flex:1;flex-direction:column;gap:8px;margin:18px 0 20px;padding:0;list-style:none}
  .sbh-core-card li{position:relative;padding-left:23px;color:var(--text-primary);font-size:11.7px;line-height:1.45}
  .sbh-core-card li:before{content:'✓';position:absolute;left:0;top:0;display:grid;width:16px;height:16px;place-items:center;border-radius:50%;background:#00E5FF;color:#071022;font-size:9px;font-weight:900}
  .sbh-core-link{display:flex;min-height:48px;align-items:center;justify-content:space-between;gap:10px;margin-top:auto;border-radius:11px;background:#F4F5F6;color:var(--brand-navy)!important;padding:12px 13px;font-size:11.5px;font-weight:750;text-decoration:none}
  .sbh-core-link span{color:var(--brand-teal);font-size:15px}
  [data-screen-label="Services Built"] .svc-light{
    border-color:rgba(0,229,255,.24)!important;
    box-shadow:0 16px 36px -24px rgba(0,229,255,.7),0 10px 30px -22px rgba(11,31,51,.34)!important;
  }
  [data-screen-label="Services Built"] .svc-light:hover{
    border-color:rgba(0,229,255,.46)!important;
    box-shadow:0 20px 42px -24px rgba(0,229,255,.82),0 14px 34px -22px rgba(11,31,51,.38)!important;
  }
  [data-screen-label="Services Built"] [data-sbuilt-bot]{
    border-color:rgba(0,229,255,.22)!important;
    box-shadow:0 16px 38px -26px rgba(0,229,255,.72),0 10px 30px -24px rgba(11,31,51,.28)!important;
  }
  [data-screen-label="Services Built"] [data-sbuilt-bot]>div{border-color:rgba(0,229,255,.14)!important}
  .sbh-live-process{overflow:hidden;scroll-margin-top:108px;background:#fff;color:var(--text-primary);padding:96px 28px}
  .sbh-live-process-heading{max-width:760px;margin:0 auto;text-align:center}
  .sbh-live-process-heading>span{color:#00788A;font-size:12px;font-weight:800;letter-spacing:.24em}
  .sbh-live-process-heading>i{display:block;width:46px;height:3px;margin:14px auto 0;border-radius:2px;background:#00E5FF}
  .sbh-live-process-heading h2{margin:18px 0 0;color:#1A1B41;font-family:'Poppins';font-size:clamp(38px,4vw,52px);font-weight:800;line-height:1.05;letter-spacing:-.03em}
  .sbh-live-process-heading h2 span{color:#00BFD8}
  .sbh-live-process-heading p{margin:18px 0 0;color:rgba(26,27,65,.76);font-size:16px;line-height:1.7}
  .sbh-live-process-grid{position:relative;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin:52px 0 0;padding:0;list-style:none}
  .sbh-live-process-grid:before{content:'';position:absolute;top:22px;left:3%;right:48px;height:2px;background:linear-gradient(90deg,rgba(0,229,255,.28),#00E5FF 85%)}
  .sbh-live-process-arrow{position:absolute;top:14px;right:10px;z-index:3}
  .sbh-live-process-step{position:relative;z-index:1;display:flex;min-width:0;flex-direction:column;text-align:center;transition:transform .25s ease}
  .sbh-live-process-step:hover{transform:translateY(-6px)!important}
  .sbh-live-process-number{position:relative;z-index:2;display:flex;width:44px;height:44px;align-items:center;justify-content:center;margin:0 auto;border:2px solid #00E5FF;border-radius:50%;background:#070A1E;color:#00E5FF;font-size:12px;font-weight:800}
  .sbh-live-process-stem{display:block;width:2px;height:14px;margin:0 auto;background:rgba(0,191,216,.48)}
  .sbh-live-process-step article{display:flex;width:100%;height:244px;flex-direction:column;align-items:center;border:1px solid rgba(26,27,65,.9);border-radius:16px;background:#070A1E;padding:18px 12px}
  .sbh-live-process-step:hover article{border-color:#00BFD8}
  .sbh-live-process-icon{display:flex;width:100%;height:88px;align-items:center;justify-content:center}
  .sbh-live-process-step h3{margin:8px 0 5px;color:#fff;font-family:'Poppins';font-size:15px;font-weight:750;line-height:1.35}
  .sbh-live-process-step p{margin:0 0 10px;color:#9AA0C4;font-size:11.5px;line-height:1.55}
  .sbh-live-process-step article>i{display:block;width:24px;height:3px;margin:auto auto 0;border-radius:2px;background:#00E5FF}
  .sbh-live-process-bars,.sbh-live-process-scale{align-items:flex-end;gap:7px;padding-bottom:4px}
  .sbh-live-process-bars b,.sbh-live-process-scale b{display:block;width:14px;border-radius:3px 3px 0 0;background:linear-gradient(180deg,#3B3BE0,#1A1B50)}
  .sbh-live-process-bars b:nth-child(1){height:38px}
  .sbh-live-process-bars b:nth-child(2){height:56px;background:linear-gradient(180deg,#4C4CE8,#1A1B50)}
  .sbh-live-process-bars b:nth-child(3){height:72px;background:linear-gradient(180deg,#5B5BF0,#2A2B60)}
  .sbh-live-process-bars b:nth-child(4){height:84px;background:linear-gradient(180deg,#00E5FF,#3B3BE0)}
  .sbh-live-process-scale{position:relative;gap:6px}
  .sbh-live-process-scale b{width:12px}
  .sbh-live-process-scale b:nth-child(1){height:32px}
  .sbh-live-process-scale b:nth-child(2){height:50px;background:linear-gradient(180deg,#4C4CE8,#1A1B50)}
  .sbh-live-process-scale b:nth-child(3){height:64px;background:linear-gradient(180deg,#5B5BF0,#2A2B60)}
  .sbh-live-process-scale b:nth-child(4){height:78px;background:linear-gradient(180deg,#00E5FF,#3B3BE0)}
  .sbh-live-process-scale svg{position:absolute;right:13px;top:4px}
  .sbh-live-process-values{display:grid;grid-template-columns:repeat(4,1fr);margin-top:28px;overflow:hidden;border:1px solid rgba(26,27,65,.9);border-radius:18px;background:#070A1E}
  .sbh-live-process-values>div{display:flex;min-width:0;align-items:center;gap:14px;border-right:1px solid rgba(255,255,255,.08);padding:20px 22px}
  .sbh-live-process-values>div:last-child{border-right:0}
  .sbh-live-process-values>div>span{display:grid;width:34px;height:34px;flex:none;place-items:center}
  .sbh-live-process-values p,.sbh-live-process-values strong,.sbh-live-process-values small{display:block;margin:0}
  .sbh-live-process-values strong{color:#fff;font-size:14px}
  .sbh-live-process-values small{margin-top:2px;color:#9AA0C4;font-size:11.5px;line-height:1.45}
  .sbh-orbit{position:relative;grid-column:2;grid-row:1;width:100%;max-width:590px;height:560px;margin:0 auto}
  .sbh-orbit-canvas{position:absolute;inset:0;width:590px;height:560px;transform-origin:top center}
  .sbh-orbit-ring{position:absolute;left:50%;top:50%;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none}
  .sbh-orbit-ring-outer{width:390px;height:390px;border:1.5px solid rgba(37,99,235,.2);box-shadow:0 0 70px rgba(37,99,235,.08)}
  .sbh-orbit-ring-inner{width:265px;height:265px;border:1px solid rgba(15,159,143,.18);background:radial-gradient(circle,rgba(255,255,255,.75),rgba(255,255,255,0) 68%)}
  .sbh-orbit-line{position:absolute;left:50%;top:50%;z-index:0;border-top:1px dashed rgba(37,99,235,.34);transform:translate(-50%,-50%);pointer-events:none}
  .sbh-orbit-line-horizontal{width:420px}
  .sbh-orbit-line-vertical{width:420px;transform:translate(-50%,-50%) rotate(90deg)}
  .sbh-orbit-logo{position:absolute;left:50%;top:50%;z-index:3;display:grid;width:146px;height:146px;place-items:center;transform:translate(-50%,-50%)}
  .sbh-orbit-logo img{position:relative;z-index:2;width:118px;height:auto;filter:drop-shadow(0 16px 24px rgba(11,31,51,.2))}
  .sbh-orbit-glow{position:absolute;inset:-18px;border-radius:50%;background:radial-gradient(circle,rgba(0,229,255,.2),rgba(37,99,235,.06) 46%,transparent 72%)}
  .sbh-orbit-node{position:absolute;z-index:4;display:flex;min-width:222px;align-items:center;gap:10px;border:1px solid var(--border-light);border-radius:16px;background:rgba(255,255,255,.96);padding:12px 14px;box-shadow:0 18px 38px -25px rgba(11,31,51,.38)}
  .sbh-orbit-node div strong,.sbh-orbit-node div span{display:block}
  .sbh-orbit-node div strong{color:var(--brand-navy);font-family:'Poppins';font-size:12px}
  .sbh-orbit-node div span{margin-top:3px;color:var(--text-secondary);font-size:9.5px;white-space:nowrap}
  .sbh-orbit-number{display:grid;width:34px;height:34px;flex:none;place-items:center;border-radius:10px;background:var(--brand-navy);color:#00E5FF;font-size:10px;font-weight:850}
  .sbh-orbit-top{left:50%;top:12px;transform:translateX(-50%)}
  .sbh-orbit-bottom{left:50%;bottom:12px;transform:translateX(-50%)}
  .sbh-orbit-left{left:-4px;top:50%;transform:translateY(-50%)}
  .sbh-orbit-right{right:-4px;top:50%;transform:translateY(-50%)}
  .sbh-deliverable{overflow:hidden;border:1px solid var(--border-light);border-radius:24px;background:#fff;box-shadow:0 24px 60px rgba(11,31,51,.1)}
  .sbh-deliverable-top{display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid var(--border-light);padding:22px 24px}
  .sbh-deliverable-top div span,.sbh-deliverable-top div strong{display:block}
  .sbh-deliverable-top div span{color:var(--text-secondary);font-size:10px;letter-spacing:.12em;text-transform:uppercase}
  .sbh-deliverable-top div strong{margin-top:5px;color:var(--brand-navy);font-family:'Poppins';font-size:17px}
  .sbh-status{border-radius:999px;background:var(--blue-soft);color:var(--brand-blue);padding:6px 10px;font-size:9px;font-weight:800;letter-spacing:.08em}
  .sbh-roadmap{padding:10px 24px}
  .sbh-roadmap-row{display:grid;grid-template-columns:38px 1fr auto;gap:12px;align-items:center;border-bottom:1px solid #E7EDF4;padding:16px 0}
  .sbh-roadmap-row:last-child{border-bottom:0}
  .sbh-step-number{display:grid;width:34px;height:34px;place-items:center;border-radius:10px;background:var(--brand-navy);color:#fff;font-size:10px;font-weight:800}
  .sbh-roadmap-row div strong,.sbh-roadmap-row div span{display:block}
  .sbh-roadmap-row div strong{color:var(--text-primary);font-size:13px}
  .sbh-roadmap-row div span{margin-top:3px;color:var(--text-secondary);font-size:10.5px}
  .sbh-priority{border-radius:999px;background:var(--blue-soft);color:var(--brand-blue);padding:6px 8px;font-size:9px;font-weight:750}
  .sbh-priority-teal{background:#E7F7F4;color:var(--brand-teal)}
  .sbh-deliverable-note{display:flex;gap:12px;align-items:flex-start;background:#F5F8FC;padding:18px 24px}
  .sbh-deliverable-note>span{display:grid;width:26px;height:26px;flex:none;place-items:center;border-radius:50%;background:var(--brand-teal);color:#fff;font-size:12px}
  .sbh-deliverable-note p{margin:0;color:var(--text-secondary);font-size:11.5px;line-height:1.6}
  .sbh-section-heading{max-width:760px;margin-bottom:44px}
  .sbh-section-heading h2{margin:14px 0 0;color:var(--brand-navy);font-family:'Poppins';font-size:clamp(34px,4vw,54px);font-weight:800;line-height:1.08;letter-spacing:-.035em}
  .sbh-section-heading>p{margin:18px 0 0;color:var(--text-secondary);font-size:15px;line-height:1.75}
  .sbh-compare{overflow:hidden;background:linear-gradient(180deg,#fff 0%,#F7FBFF 100%)}
  .sbh-compare-heading{max-width:940px;margin:0 auto 78px;text-align:center}
  .sbh-compare-heading h2{margin:14px 0 0;color:var(--brand-navy);font-family:'Poppins';font-size:clamp(38px,4.2vw,58px);font-weight:800;line-height:1.06;letter-spacing:-.04em}
  .sbh-compare-heading h2 span{color:var(--brand-cyan)}
  .sbh-compare-layout{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(360px,.88fr);gap:62px;align-items:center}
  .sbh-compare-table{position:relative;top:-8px;overflow:hidden;border:1px solid rgba(7,10,30,.16);border-radius:22px;background:#fff;box-shadow:0 1px 0 rgba(255,255,255,.95) inset,0 8px 0 rgba(7,10,30,.08),0 26px 42px -22px rgba(7,10,30,.3)}
  .sbh-compare-row{display:grid;grid-template-columns:minmax(210px,1.28fr) minmax(135px,.86fr) minmax(135px,.86fr)}
  .sbh-compare-row>*{display:flex;min-width:0;min-height:72px;align-items:center;justify-content:center;border-right:1px solid #E7EDF4;padding:18px 16px;text-align:center}
  .sbh-compare-row>*:last-child{border-right:0}
  .sbh-compare-row:not(.sbh-compare-head){border-bottom:1px solid #E7EDF4}
  .sbh-compare-row:last-child{border-bottom:0}
  .sbh-compare-row:not(.sbh-compare-head)>*:last-child{background:rgba(0,229,255,.055)}
  .sbh-compare-row strong{color:var(--brand-navy);font-family:'Poppins';font-size:13.5px;font-weight:700}
  .sbh-compare-head{background:#070A1E;color:#fff}
  .sbh-compare-head span{min-height:72px;border-color:rgba(255,255,255,.1);font-family:'Poppins';font-size:13.5px;font-weight:750;letter-spacing:.01em}
  .sbh-compare-head span:last-child{background:#00E5FF;color:#071022}
  .sbh-compare-status{display:block;width:23px;height:23px}
  .sbh-compare-status-positive{filter:brightness(0) saturate(100%) invert(76%) sepia(100%) saturate(1905%) hue-rotate(130deg) brightness(103%) contrast(101%)}
  .sbh-compare-status-negative{filter:brightness(0) saturate(100%) invert(44%) sepia(86%) saturate(2279%) hue-rotate(330deg) brightness(104%) contrast(103%)}
  .sbh-compare-status-neutral{filter:brightness(0) saturate(100%) invert(14%) sepia(20%) saturate(1938%) hue-rotate(199deg) brightness(87%) contrast(98%)}
  .sbh-compare-reasons{display:grid;grid-template-columns:1fr;gap:34px}
  .sbh-compare-reason{display:grid;grid-template-columns:62px 1fr;gap:22px;align-items:center;min-height:105px}
  .sbh-compare-reason>span{display:grid;width:62px;height:62px;place-items:center;border-radius:16px;background:#E9FBFE}
  .sbh-compare-reason>span img{display:block;width:28px;height:28px;filter:brightness(0) saturate(100%) invert(70%) sepia(95%) saturate(1579%) hue-rotate(138deg) brightness(92%) contrast(101%)}
  .sbh-compare-reason>div{text-align:center}
  .sbh-compare-reason h3{margin:0;color:var(--brand-navy);font-family:'Poppins';font-size:18px;font-weight:750;line-height:1.3}
  .sbh-compare-reason p{margin:8px 0 0;color:var(--text-secondary);font-size:13px;line-height:1.65}
  [data-case-studies-header-action]{justify-self:end;padding-bottom:4px}
  .sbh-case-studies-cta{white-space:nowrap}
  .sbh-latest-blogs{scroll-margin-top:108px;background:var(--background-soft);color:var(--text-primary);padding:96px 28px}
  .sbh-blog-heading{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:40px;align-items:end;margin-bottom:44px}
  .sbh-blog-heading h2{margin:14px 0 0;color:var(--brand-navy);font-family:'Poppins';font-size:clamp(36px,4vw,54px);font-weight:800;line-height:1.07;letter-spacing:-.038em}
  .sbh-blog-heading h2 span{color:var(--brand-cyan)}
  .sbh-blog-heading p{max-width:660px;margin:18px 0 0;color:var(--text-secondary);font-size:14.5px;line-height:1.75}
  .sbh-blog-all{align-self:end;white-space:nowrap}
  .sbh-blog-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
  .sbh-blog-card{display:flex;min-width:0;overflow:hidden;flex-direction:column;border:1px solid var(--border-light);border-radius:22px;background:#fff;box-shadow:0 18px 38px -28px rgba(11,31,51,.4);transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease}
  .sbh-blog-card:hover{transform:translateY(-7px)!important;border-color:rgba(0,229,255,.48);box-shadow:0 28px 48px -28px rgba(11,31,51,.38)}
  .sbh-blog-image{display:block;overflow:hidden;aspect-ratio:16/9;background:#E8EEF5}
  .sbh-blog-image:hover{opacity:1}
  .sbh-blog-image img{width:100%;height:100%;object-fit:cover;transition:transform .45s cubic-bezier(.2,.7,.2,1)}
  .sbh-blog-card:hover .sbh-blog-image img{transform:scale(1.045)}
  .sbh-blog-card-body{display:flex;flex:1;flex-direction:column;padding:24px}
  .sbh-blog-meta{display:flex;flex-wrap:wrap;align-items:center;gap:7px 10px;color:var(--text-secondary);font-size:10.5px;line-height:1.4}
  .sbh-blog-meta span{border-radius:999px;background:#E7FBFE;color:#006F7C;padding:6px 9px;font-weight:800;letter-spacing:.03em}
  .sbh-blog-meta time,.sbh-blog-meta small{font:inherit}
  .sbh-blog-meta time:after{content:'·';margin-left:10px;color:#A8B4C3}
  .sbh-blog-card h3{margin:18px 0 0;font-family:'Poppins';font-size:19px;font-weight:750;line-height:1.36;letter-spacing:-.016em}
  .sbh-blog-card h3 a{color:var(--brand-navy);text-decoration:none}
  .sbh-blog-card h3 a:hover{opacity:1;color:#006F7C}
  .sbh-blog-card p{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:3;margin:12px 0 20px;color:var(--text-secondary);font-size:12.5px;line-height:1.72}
  .sbh-blog-read{display:inline-flex;align-items:center;gap:9px;margin-top:auto;color:var(--brand-navy)!important;font-size:12px;font-weight:800;text-decoration:none}
  .sbh-blog-read span{color:#00BFD8;font-size:16px;transition:transform .2s ease}
  .sbh-blog-read:hover{opacity:1}
  .sbh-blog-read:hover span{transform:translateX(4px)}
  section[data-screen-label="Hero CTA"] [data-secondary-cta]{
    border:1px solid var(--brand-navy)!important;
    border-radius:999px!important;
    background:var(--brand-navy)!important;
    color:#fff!important;
    padding:15px 26px!important;
    box-shadow:0 14px 28px -16px rgba(11,31,51,.75)!important;
  }
  section[data-screen-label="Hero CTA"] [data-primary-audit-cta]{
    border:0!important;
    border-radius:999px!important;
    background:linear-gradient(135deg,#00E5FF,#35D4FF)!important;
    color:#071022!important;
    padding:15px 26px!important;
    box-shadow:0 14px 30px -17px rgba(0,229,255,.9)!important;
  }
  section[data-screen-label="Hero CTA"] [data-secondary-cta]:hover,
  section[data-screen-label="Hero CTA"] [data-primary-audit-cta]:hover{opacity:1;transform:translateY(-2px)}
  section[data-screen-label="Hero CTA"] [style*="color:#a0a4ba" i],
  section[data-screen-label="Hero CTA"] [style*="color:#a0a4b8" i],
  section[data-screen-label="Hero CTA"] [style*="color:#9aa0c4" i]{color:#5B5D77!important}
  section[data-screen-label="Hero CTA"] [style*="color:#16b364" i]{color:#087A43!important}
  .sbh-three-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
  .sbh-light-card,.sbh-work-card{border:1px solid var(--border-light);border-radius:18px;background:#fff;padding:24px;box-shadow:0 12px 32px rgba(11,31,51,.06)}
  .sbh-light-card>span{color:var(--brand-navy);font-family:'Poppins';font-size:16px;font-weight:700}
  .sbh-light-card p{margin:10px 0 0;color:var(--text-secondary);font-size:13px;line-height:1.7}
  .sbh-fit-note{margin-top:24px;border:1px solid #C8D7E8;border-radius:16px;background:#fff;padding:18px 22px;color:var(--text-secondary);font-size:13px;line-height:1.65}
  .sbh-fit-note strong{color:var(--brand-navy)}
  .sbh-tag{display:inline-flex;border-radius:999px;background:var(--blue-soft);color:var(--brand-blue);padding:7px 10px;font-size:9px;font-weight:800;letter-spacing:.08em}
  .sbh-tag-teal{background:#E7F7F4;color:var(--brand-teal)}
  .sbh-work-card h3{margin:20px 0 0;color:var(--brand-navy);font-family:'Poppins';font-size:21px}
  .sbh-work-card p{margin:14px 0 0;color:var(--text-secondary);font-size:13px;line-height:1.65}
  .sbh-work-card p strong{display:block;margin-bottom:4px;color:var(--text-primary)}
  .sbh-work-card ul{margin:16px 0 0;padding-left:18px;color:var(--text-secondary);font-size:12.5px;line-height:1.8}
  .sbh-work-card a{display:inline-flex;margin-top:20px;color:var(--brand-blue);font-size:13px;font-weight:750;text-decoration:none}
  .sbh-disclosure{margin:24px 0 0;border-left:3px solid var(--brand-teal);padding:4px 0 4px 16px;color:var(--text-secondary);font-size:12px;line-height:1.65}
  .sbh-process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:0;padding:0;list-style:none}
  .sbh-process-grid li{position:relative;border:1px solid var(--border-light);border-radius:18px;background:#fff;padding:24px}
  .sbh-process-grid li>span{display:grid;width:40px;height:40px;place-items:center;border-radius:50%;background:var(--blue-soft);color:var(--brand-blue);font-size:11px;font-weight:800}
  .sbh-process-grid h3{margin:20px 0 0;color:var(--brand-navy);font-family:'Poppins';font-size:18px}
  .sbh-process-grid p{margin:9px 0 0;color:var(--text-secondary);font-size:13px;line-height:1.65}
  .sbh-quality{background:#EEF5FC}
  .sbh-quality-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:start}
  .sbh-quality-list{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:0;padding:0;list-style:none}
  .sbh-quality-list li{display:flex;gap:11px;align-items:flex-start;border:1px solid var(--border-light);border-radius:14px;background:#fff;padding:16px;color:#455267;font-size:12.5px;line-height:1.55}
  .sbh-quality-list li:before{content:'✓';display:grid;width:22px;height:22px;flex:none;place-items:center;border-radius:50%;background:#E7F7F4;color:var(--brand-teal);font-weight:900}
  .sbh-faq-grid{display:grid;grid-template-columns:.72fr 1.28fr;gap:70px;align-items:start}
  .sbh-faqs{border-top:1px solid var(--border-light)}
  .sbh-faqs details{border-bottom:1px solid var(--border-light);padding:0}
  .sbh-faqs summary{position:relative;cursor:pointer;list-style:none;padding:20px 44px 20px 0;color:var(--text-primary);font-family:'Poppins';font-size:15px;font-weight:650}
  .sbh-faqs summary::-webkit-details-marker{display:none}
  .sbh-faqs summary:after{content:'+';position:absolute;right:4px;top:18px;color:var(--brand-blue);font-size:22px;font-weight:500}
  .sbh-faqs details[open]{background:#F8FAFD}
  .sbh-faqs details[open] summary{padding-left:16px}
  .sbh-faqs details[open] summary:after{content:'−';right:16px}
  .sbh-faqs details p{margin:0;padding:0 44px 20px 16px;color:var(--text-secondary);font-size:13px;line-height:1.75}
  footer[data-screen-label="Footer"]{
    background:var(--footer-dark)!important;
    color:#fff!important;
    border-top:1px solid rgba(0,229,255,.12)!important;
  }
  footer[data-screen-label="Footer"] [data-footer-grid] img[alt="SitesBrand"]{
    width:210px!important;
    height:auto!important;
    filter:none!important;
  }
  footer[data-screen-label="Footer"] h3,
  footer[data-screen-label="Footer"] h4{color:#fff!important}
  footer[data-screen-label="Footer"] p,
  footer[data-screen-label="Footer"] span{color:#AEBAC8!important}
  footer[data-screen-label="Footer"][style*="background:#F4F5F6" i] [style*="color:#a0a4ba" i]{color:#C8D1DC!important}
  footer[data-screen-label="Footer"] [data-footer-grid] a{color:#D8E1EB!important}
  footer[data-screen-label="Footer"] [data-footer-grid]>div:first-child a{color:#8FF8FF!important}
  footer[data-screen-label="Footer"] [data-footer-grid]>div:first-child svg *{stroke:#00E5FF!important}
  footer[data-screen-label="Footer"] [data-newsletter-form]>div{
    border-color:rgba(255,255,255,.14)!important;
    background:#0B1F33!important;
  }
  footer[data-screen-label="Footer"] [data-newsletter-email]{
    color:#fff!important;
    background:transparent!important;
  }
  footer[data-screen-label="Footer"] [data-newsletter-email]::placeholder{color:#8999AA}
  footer[data-screen-label="Footer"] [data-newsletter-submit]{
    background:linear-gradient(135deg,#00E5FF,#35D4FF)!important;
    color:#071022!important;
  }
  footer[data-screen-label="Footer"] a[aria-label]{
    border-color:rgba(255,255,255,.14)!important;
    background:rgba(255,255,255,.06)!important;
    color:#fff!important;
  }
  footer[data-screen-label="Footer"] a[aria-label="SitesBrand home"]{
    border:0!important;
    background:transparent!important;
    box-shadow:none!important;
  }
  footer[data-screen-label="Footer"] [style*="border-top:1px solid rgba(26,27,65,.1)"]{
    border-top-color:rgba(255,255,255,.12)!important;
  }
  footer[data-screen-label="Footer"] [style*="border-top:1px solid rgba(26,27,65,.1)"] a{
    color:#D8E1EB!important;
  }
  .sbh-real-cases{background:#F4F7FB;padding:90px 28px;color:var(--text-primary)}
  .sbh-real-cases-heading{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:40px;align-items:end;margin-bottom:42px}
  .sbh-real-cases-heading h2{margin:14px 0 0;color:var(--brand-navy);font-family:'Poppins';font-size:clamp(38px,4.4vw,60px);font-weight:800;letter-spacing:-.045em;line-height:1.06}
  .sbh-real-cases-heading h2 span{color:#FF6F59}
  .sbh-real-cases-heading p{max-width:760px;margin:16px 0 0;color:var(--text-secondary);font-size:14px;line-height:1.72}
  .sbh-real-cases-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
  .sbh-real-case{overflow:hidden;border:1px solid #DFE7EF;border-radius:22px;background:#fff;box-shadow:0 24px 60px -48px rgba(11,31,51,.6)}
  .sbh-real-case-image{position:relative;display:grid;aspect-ratio:1.9;place-items:center;overflow:hidden;background:#EAF0F6;padding:14px}
  .sbh-real-case-image img{width:100%;height:100%;border-radius:10px;object-fit:contain}
  .sbh-real-case-image>span{position:absolute;top:14px;right:14px;border:1px solid rgba(255,255,255,.7);border-radius:999px;background:rgba(7,16,31,.85);color:#fff;padding:7px 10px;font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
  .sbh-real-case-copy{padding:26px}
  .sbh-real-case-meta{display:flex;flex-wrap:wrap;gap:8px;color:#718096;font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
  .sbh-real-case-meta span:first-child{color:var(--home-case-accent)}
  .sbh-real-case-meta span+span:before{content:'•';margin-right:8px;color:#A6B1BF}
  .sbh-real-case h3{margin:15px 0 0;color:var(--brand-navy);font-family:'Poppins';font-size:clamp(23px,2.3vw,32px);font-weight:800;letter-spacing:-.03em;line-height:1.13}
  .sbh-real-case-copy>p{margin:13px 0 0;color:var(--text-secondary);font-size:12.5px;line-height:1.7}
  .sbh-real-case-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:20px}
  .sbh-real-case-stats>div{border-top:2px solid var(--home-case-accent);background:#F5F8FC;padding:13px}
  .sbh-real-case-stats strong,.sbh-real-case-stats span{display:block}
  .sbh-real-case-stats strong{color:var(--brand-navy);font-family:'Poppins';font-size:22px}
  .sbh-real-case-stats span{margin-top:3px;color:var(--text-secondary);font-size:10px;font-weight:700}
  .sbh-real-case-link{display:inline-flex;gap:8px;margin-top:20px;color:var(--brand-navy);font-size:12px;font-weight:800;text-decoration:none}
  @media(max-width:1120px){
    .sbh-hero-grid{grid-template-columns:1fr}
    .sbh-hero-copy{grid-column:1;grid-row:1}
    .sbh-orbit{grid-column:1;grid-row:2}
    .sbh-core-services-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
    .sbh-core-card h3,.sbh-core-card>p{min-height:0}
  }
  @media(max-width:980px){
    .sbh-hero-grid,.sbh-quality-grid,.sbh-faq-grid{grid-template-columns:1fr}
    .sbh-hero-copy{grid-column:1;grid-row:1}
    .sbh-orbit{grid-column:1;grid-row:2}
    .sbh-hero-grid{gap:48px}
    .sbh-four-grid{grid-template-columns:1fr 1fr}
    .sbh-three-grid,.sbh-process-grid{grid-template-columns:1fr 1fr}
    .sbh-live-process-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:22px 14px}
    .sbh-live-process-grid:before,.sbh-live-process-arrow{display:none}
    .sbh-live-process-values{grid-template-columns:1fr 1fr}
    .sbh-live-process-values>div:nth-child(2){border-right:0}
    .sbh-live-process-values>div:nth-child(-n+2){border-bottom:1px solid rgba(255,255,255,.08)}
    .sbh-compare-layout{grid-template-columns:1fr}
    .sbh-compare-reasons{grid-template-columns:1fr 1fr}
    [data-case-studies-header]{grid-template-columns:1fr!important}
    [data-case-studies-header-action]{justify-self:start}
    .sbh-blog-heading{grid-template-columns:1fr}
    .sbh-blog-all{justify-self:start}
    .sbh-blog-grid{grid-template-columns:1fr 1fr}
    .sbh-real-cases-heading{grid-template-columns:1fr}
    .sbh-real-cases-heading>a{justify-self:start}
  }
  @media(max-width:640px){
    .sbh-hero,.sbh-section{padding:70px 18px}
    .sbh-hero h1{font-size:clamp(38px,11vw,52px)}
    .sbh-four-grid,.sbh-three-grid,.sbh-process-grid,.sbh-quality-list{grid-template-columns:1fr}
    .sbh-roadmap-row{grid-template-columns:38px 1fr}
    .sbh-priority{grid-column:2;width:max-content}
    .sbh-proof-list{display:grid}
    .sbh-actions,.sbh-actions .sbh-btn{width:100%}
    .sbh-services-intro{grid-template-columns:1fr;gap:24px;margin-bottom:32px}
    .sbh-services-action{justify-self:stretch;max-width:none}
    .sbh-services-action [data-secondary-cta]{width:100%}
    .sbh-core-services-grid{grid-template-columns:1fr}
    .sbh-core-card{padding:22px}
    .sbh-live-process{padding:70px 18px}
    .sbh-live-process-heading h2 br{display:none}
    .sbh-live-process-heading p{font-size:14px}
    .sbh-live-process-grid{grid-template-columns:1fr 1fr;gap:18px 12px;margin-top:40px}
    .sbh-live-process-step article{height:252px;padding:16px 10px}
    .sbh-live-process-icon{height:82px}
    .sbh-live-process-step h3{font-size:14px}
    .sbh-live-process-step p{font-size:10.8px}
    .sbh-live-process-values{grid-template-columns:1fr;margin-top:24px}
    .sbh-live-process-values>div{border-right:0;border-bottom:1px solid rgba(255,255,255,.08);padding:17px 18px}
    .sbh-live-process-values>div:last-child{border-bottom:0}
    .sbh-compare-heading{margin-bottom:36px}
    .sbh-compare-table{top:-4px;box-shadow:0 1px 0 rgba(255,255,255,.95) inset,0 5px 0 rgba(7,10,30,.07),0 20px 34px -22px rgba(7,10,30,.28)}
    .sbh-compare-heading h2 br{display:none}
    .sbh-compare-reasons{grid-template-columns:1fr}
    .sbh-compare-row{grid-template-columns:1fr 1fr}
    .sbh-compare-head span:first-child{display:none}
    .sbh-compare-head span{min-height:54px;padding:14px 10px;font-size:11.5px}
    .sbh-compare-row:not(.sbh-compare-head)>strong{grid-column:1/-1;justify-content:center;border-right:0;border-bottom:1px solid #E7EDF4;background:#F8FAFD;padding:13px 14px;text-align:center}
    .sbh-compare-row:not(.sbh-compare-head)>span{padding:14px 8px}
    .sbh-compare-row>*{min-height:54px}
    .sbh-compare-reason{grid-template-columns:54px 1fr;gap:16px;min-height:92px}
    .sbh-compare-reason>span{width:54px;height:54px;border-radius:14px}
    .sbh-compare-reason>div{text-align:left}
    .sbh-compare-reason h3{font-size:16px}
    .sbh-compare-reason p{font-size:12px}
    [data-case-studies-header-action],.sbh-case-studies-cta{width:100%}
    .sbh-latest-blogs{padding:70px 18px}
    .sbh-blog-heading{gap:24px;margin-bottom:32px}
    .sbh-blog-heading h2 br{display:none}
    .sbh-blog-all{width:100%}
    .sbh-blog-grid{grid-template-columns:1fr}
    .sbh-blog-card-body{padding:21px}
    .sbh-real-cases{padding:70px 18px}
    .sbh-real-cases-heading{gap:22px;margin-bottom:30px}
    .sbh-real-cases-grid{grid-template-columns:1fr}
    .sbh-real-case-copy{padding:21px}
    .sbh-real-case-image{aspect-ratio:1.65;padding:9px}
    .sbh-real-cases-heading>a{width:100%}
    section[data-screen-label="Hero CTA"] [data-hero-grid]>div:first-child>div:first-of-type{align-items:stretch;flex-direction:column}
    section[data-screen-label="Hero CTA"] [data-secondary-cta],
    section[data-screen-label="Hero CTA"] [data-primary-audit-cta]{width:100%!important}
  }
  @media(max-width:630px){
    .sbh-orbit{height:532px}
    .sbh-orbit-canvas{left:50%;transform:translateX(-50%) scale(.95)}
  }
  @media(max-width:600px){
    .sbh-orbit{height:498px}
    .sbh-orbit-canvas{transform:translateX(-50%) scale(.89)}
  }
  @media(max-width:560px){
    .sbh-orbit{height:459px}
    .sbh-orbit-canvas{transform:translateX(-50%) scale(.82)}
  }
  @media(max-width:520px){
    .sbh-orbit{height:420px}
    .sbh-orbit-canvas{transform:translateX(-50%) scale(.75)}
  }
  @media(max-width:480px){
    .sbh-orbit{height:381px}
    .sbh-orbit-canvas{transform:translateX(-50%) scale(.68)}
  }
  @media(max-width:440px){
    .sbh-orbit{height:342px}
    .sbh-orbit-canvas{transform:translateX(-50%) scale(.61)}
  }
  @media(max-width:400px){
    .sbh-orbit{height:314px}
    .sbh-orbit-canvas{transform:translateX(-50%) scale(.56)}
  }
  @media(max-width:370px){
    .sbh-orbit{height:286px}
    .sbh-orbit-canvas{transform:translateX(-50%) scale(.51)}
  }
  @media(max-width:340px){
    .sbh-orbit{height:269px}
    .sbh-orbit-canvas{transform:translateX(-50%) scale(.48)}
  }
`;
