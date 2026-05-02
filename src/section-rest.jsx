// SXO/AIO Lab — search → intent decode

function LabSection() {
  const [activeQuery, setActiveQuery] = React.useState(0);
  const queries = [
    'best b2b lead gen agency 2026',
    'how to optimize for ai search',
    'reduce CAC saas startup',
    'top healthcare seo strategist',
  ];
  React.useEffect(() => {
    const id = setInterval(() => setActiveQuery((q) => (q + 1) % queries.length), 3200);
    return () => clearInterval(id);
  }, []);

  const intents = [
    { label: 'Surface intent', text: '"best seo strategist 2026"', weight: 22 },
    { label: 'Decision anxiety', text: 'Comparing 9 vendors. Risk-averse.', weight: 71 },
    { label: 'Trust gap', text: 'Wants proof, not promises.', weight: 88 },
    { label: 'Time pressure', text: 'Q1 board metrics due.', weight: 64 },
    { label: 'Hidden objection', text: '"Will this work without my team?"', weight: 92 },
  ];

  return (
    <section className="section" id="lab">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">04</span>
            <span>SXO / AIO Lab</span>
          </div>
          <h2 className="display section-title">
            Search engines surface results.<br />I decode the <em>human</em> behind the query.
          </h2>
          <p className="section-lede">
            In 2026, AI overviews answer questions before clicks happen. Winning means optimizing for the intent layer above the keyword — what the searcher actually fears, wants, and hesitates over.
          </p>
        </div>

        <div className="lab-grid">
          <div className="glass lab-main reveal">
            <div className="lab-search">
              <div className="lab-search-icon"></div>
              <span className="lab-search-text mono">{queries[activeQuery]}</span>
              <span className="lab-search-cursor"></span>
            </div>
            <div className="lab-intent-stack">
              {intents.map((it, i) => (
                <div className="lab-intent" key={i}>
                  <span className="lab-intent-num mono">0{i + 1}</span>
                  <div>
                    <div className="lab-intent-text">
                      <span className="highlight">{it.label}</span> &nbsp;·&nbsp; {it.text}
                    </div>
                  </div>
                  <div className="lab-intent-bar" style={{ '--w': `${it.weight}%` }}></div>
                </div>
              ))}
            </div>
          </div>

          <div className="lab-side">
            <div className="glass lab-card reveal">
              <div className="lab-card-eyebrow mono">AIO Readiness</div>
              <h3 className="lab-card-title">Built for the answer engine.</h3>
              <p className="lab-card-body">
                Schema, entity graphs, conversational anchors that get your brand cited inside ChatGPT, Perplexity, and Google AI Overviews — not buried on page two.
              </p>
              <div className="lab-card-meter">
                <span className="lab-card-meter-num">35%</span>
                <span className="lab-card-meter-label mono">Avg. organic lift</span>
              </div>
            </div>
            <div className="glass lab-card reveal">
              <div className="lab-card-eyebrow mono">Content engine</div>
              <h3 className="lab-card-title">1,000+ articles shipped.</h3>
              <p className="lab-card-body">
                Across healthcare, tech, B2B, and e-commerce. Top-3 rankings for 15+ medical keywords, 50+ competitive top-10 wins, 45% time-on-page lift.
              </p>
              <div className="lab-card-meter">
                <span className="lab-card-meter-num">+45%</span>
                <span className="lab-card-meter-label mono">Time on page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomationSection() {
  const flow = [
    { num: '01', title: 'Signal capture', desc: 'GSC + GA4 + competitor scrape unified.', glyph: '◇' },
    { num: '02', title: 'Brief gen', desc: 'AI-assisted briefs from intent + entity graph.', glyph: '◈' },
    { num: '03', title: 'Draft', desc: 'Claude/GPT-4 + human editor in Notion loop.', glyph: '◉' },
    { num: '04', title: 'SXO Master', desc: 'Pre-publish audit across AIO/SEO/GEO/SXO.', glyph: '◊' },
    { num: '05', title: 'Track', desc: 'GA4 + GSC dashboards. Re-optimize monthly.', glyph: '◎' },
  ];
  const stack = [
    { tag: 'AUDIT', name: 'SXO Master', desc: 'Proprietary 4-framework content audit', status: 'Live' },
    { tag: 'SEO', name: 'Semrush · Ahrefs · Surfer · Clearscope', desc: 'Keyword + competitor + on-page', status: 'Live' },
    { tag: 'LLM', name: 'Claude · GPT · Grok', desc: 'Drafting, prompt engineering, research', status: 'Live' },
    { tag: 'ORCH', name: 'n8n', desc: 'Workflow automation + AI agents', status: 'Live' },
    { tag: 'CMS', name: 'WordPress · WooCommerce · Shopify', desc: 'Build + on-page implementation', status: 'Live' },
  ];

  return (
    <section className="section" id="automation">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">05</span>
            <span>Automation Hub</span>
          </div>
          <h2 className="display section-title">
            Content engines that run while you <em>sleep</em>.
          </h2>
          <p className="section-lede">
            Five years of working with AI tools — Claude, GPT, n8n, Surfer, Semrush — wired into one publishing system. Not theoretical. This is what produces the 1,000+ articles.
          </p>
        </div>

        <div className="glass auto-hub reveal">
          <div className="auto-flow">
            {flow.map((f) => (
              <div className="auto-node" key={f.num}>
                <div className="auto-node-glyph display" style={{ fontSize: 18, color: 'var(--signal)' }}>{f.glyph}</div>
                <div className="auto-node-num mono">{f.num} · STAGE</div>
                <div className="auto-node-title">{f.title}</div>
                <div className="auto-node-desc">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="auto-stack">
            <div>
              <div className="lab-card-eyebrow mono" style={{ marginBottom: 20 }}>Stack · production-grade</div>
              <div className="auto-stack-list">
                {stack.map((s, i) => (
                  <div className="auto-stack-item" key={i}>
                    <span className="auto-stack-tag">{s.tag}</span>
                    <div>
                      <div className="auto-stack-name">{s.name}</div>
                      <div className="auto-stack-desc">{s.desc}</div>
                    </div>
                    <span className="auto-stack-status mono">{s.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="auto-side-panel">
              <div className="lab-card-eyebrow mono">Case · Healthcare SEO</div>
              <h3 className="lab-card-title" style={{ marginBottom: 16 }}>
                ANTH Hospital · <em style={{ fontStyle: 'italic', color: 'var(--signal)' }}>+35%.</em>
              </h3>
              <p className="lab-card-body" style={{ marginBottom: 24 }}>
                Built the SEO content engine for Dr. Akbar Niazi Teaching Hospital. 35% organic lift, top-3 rankings on 15+ medical keywords, +25% appointment conversions.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <div><div className="lab-card-meter-num" style={{ fontSize: 32 }}>+35%</div><div className="lab-card-meter-label mono">Traffic</div></div>
                <div><div className="lab-card-meter-num" style={{ fontSize: 32 }}>+25%</div><div className="lab-card-meter-label mono">Conv.</div></div>
                <div><div className="lab-card-meter-num" style={{ fontSize: 32 }}>15+</div><div className="lab-card-meter-label mono">Top-3</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PsychSection() {
  const cards = [
    { n: '01', name: "Cognitive Load", title: 'A confused mind says no.', body: 'Every removed choice is a conversion gained. We map the decision path and prune ruthlessly — fewer fields, fewer paths, more revenue.', tag: "Hick's Law · Miller's 7±2" },
    { n: '02', name: 'Anchoring', title: 'The first number wins.', body: 'Pricing pages, proposals, hero copy — all framed against an anchor that makes the actual ask feel inevitable. Not manipulative. Just honest math.', tag: 'Tversky · Kahneman' },
    { n: '03', name: 'Loss Aversion', title: 'Pain of missing > joy of gaining.', body: "Buyers don't buy outcomes — they buy the avoidance of regret. Copy that surfaces what they stand to lose by waiting outperforms benefit-led messaging 2.4×.", tag: 'Prospect Theory' },
  ];
  return (
    <section className="section" id="psych">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">06</span>
            <span>Psychology Corner</span>
          </div>
          <h2 className="display section-title">
            Strategy is downstream of <em>behavior</em>.
          </h2>
          <p className="section-lede">
            Three principles I rely on every engagement. Drawn from the BSc Psychology curriculum I'm completing — Consumer Behavior, Research Methodology, Communication Psychology.
          </p>
        </div>
        <div className="psych-grid">
          {cards.map((c) => (
            <div className="glass psych-card reveal" key={c.n}>
              <div className="psych-card-num display">{c.n}</div>
              <div className="psych-card-name mono">{c.name}</div>
              <h3 className="psych-card-title">{c.title}</h3>
              <p className="psych-card-body">{c.body}</p>
              <div className="psych-card-tag mono">{c.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const cats = [
    { title: 'SEO + SXO + AIO', items: ['SEO Strategy', 'SXO', 'AIO', 'GEO', 'On-Page SEO', 'Technical SEO', 'Off-Page SEO', 'Keyword Research', 'Search Intent Mapping', 'Schema Markup', 'Core Web Vitals', 'XML Sitemaps', 'Internal Linking', 'SEO Audits', 'SERP Optimization', 'Featured Snippets'] },
    { title: 'Content + Conversion', items: ['Content Strategy', 'SEO Content Writing', 'Copywriting', 'UX Writing', 'Conversion Optimization', 'Editorial Calendars', 'Brand Voice', 'Brief Writing', 'Editing & QA'] },
    { title: 'AI + Automation', items: ['Prompt Engineering', 'Claude AI', 'ChatGPT', 'Grok', 'OpenClaw', 'Moltbot', 'AI Agents', 'n8n', 'Workflow Automation', 'AI Video / Audio Gen', 'AI Research'] },
    { title: 'Tools + Platforms', items: ['Semrush', 'Ahrefs', 'Surfer SEO', 'Clearscope', 'Screaming Frog', 'Google Search Console', 'GA4', 'Google Data Studio', 'WordPress', 'Elementor', 'WPBakery', 'WooCommerce', 'Shopify', 'Canva', 'Notion', 'Trello', 'Asana'] },
  ];
  return (
    <section className="section" id="skills">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">07</span>
            <span>Skills + Tooling</span>
          </div>
          <h2 className="display section-title">The full stack — strategy, words, code, AI.</h2>
        </div>
        <div className="skills-wrap">
          {cats.map((c, i) => (
            <div key={i} className="glass skills-cat reveal">
              <div className="skills-cat-title mono">{c.title}</div>
              <div className="skills-list">
                {c.items.map((s, j) => <div key={j} className="skill-pill">{s}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const rows = [
    { role: 'SEO Content Strategist', co: 'Dr. Akbar Niazi Teaching Hospital', place: 'Remote · Healthcare', when: '2025 — Present' },
    { role: 'Content Marketing Specialist', co: 'ArdentThrive', place: 'Remote', when: '2024 — 2025' },
    { role: 'SEO Content Writer', co: 'FIL', place: 'Remote · UK', when: '2023 — 2025' },
    { role: 'Founder + Director', co: 'Rise Above Minds (RAM)', place: 'Pakistan · Non-profit', when: '2022 — Present' },
    { role: 'SEO Writer + Content Specialist', co: 'FOX Corporation Ltd', place: 'Remote · Australia', when: '2019 — 2023' },
    { role: 'Freelance SEO Content Strategist', co: 'Self-Employed', place: 'International', when: '2019 — Present' },
    { role: 'AI Instructor + Seminar Speaker', co: 'Independent', place: '400+ trained', when: '2023 — Present' },
  ];
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">08</span>
            <span>Experience · 7+ Years</span>
          </div>
          <h2 className="display section-title">From Australia to the UK to ANTH.</h2>
          <p className="section-lede">
            Healthcare. Tech. B2B. E-commerce. Niche stores. The journey behind 1,000+ articles and 50+ top-10 keywords.
          </p>
        </div>
        <div className="timeline reveal">
          {rows.map((r, i) => (
            <div className="timeline-row" key={i}>
              <div className="timeline-role">{r.role}</div>
              <div className="timeline-company">{r.co}<span className="place">· {r.place}</span></div>
              <div className="timeline-when mono">{r.when}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertsSection() {
  const certs = [
    'Google Prompting Essentials · Google',
    'AI For Everyone · DeepLearning.AI',
    'Semrush SEO Toolkit Certification',
    'Semrush On-Page & Technical SEO',
    'Semrush Keyword Research Certification',
    'Google Analytics Certification',
    'SEO with Squarespace',
    'Increase SEO Traffic with WordPress',
    'SEO + Blog Writing Certification',
    'Certified Copywriter & Content Writer',
  ];
  return (
    <section className="section" id="certs">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">09</span>
            <span>Certifications + Authorship</span>
          </div>
          <h2 className="display section-title">Credentialed. Published.</h2>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
          {certs.map((c, i) => (
            <div key={i} className="glass" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12, fontSize: 13 }}>
              <span className="mono" style={{ color: 'var(--signal)', fontSize: 11 }}>0{i < 9 ? i + 1 : i + 1}</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 32, padding: '28px 32px' }} className="glass">
          <div className="lab-card-eyebrow mono" style={{ marginBottom: 14 }}>Authorship</div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div><div className="lab-card-title" style={{ fontSize: 18 }}>The Thesis Master Class</div><div style={{ fontSize: 12, color: 'var(--mute)' }}>Comprehensive thesis guide</div></div>
            <div><div className="lab-card-title" style={{ fontSize: 18 }}>Best Professional Prompts for Everyone</div><div style={{ fontSize: 12, color: 'var(--mute)' }}>Practical AI prompt library</div></div>
            <div><div className="lab-card-title" style={{ fontSize: 18 }}>Soch Say Sajjday Tak</div><div style={{ fontSize: 12, color: 'var(--mute)' }}>Ongoing literary work</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeBand() {
  const items = ['Search Experience Optimization', 'AI Search Optimization', 'Generative Engine Optimization', 'Behavioral Conversion', 'Founder · Rise Above Minds', 'Creator · SXO Master', '1,000+ articles shipped'];
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((it, i) => <span className="marquee-item" key={i}>{it}</span>)}
      </div>
    </div>
  );
}

window.LabSection = LabSection;
window.AutomationSection = AutomationSection;
window.PsychSection = PsychSection;
window.SkillsSection = SkillsSection;
window.ExperienceSection = ExperienceSection;
window.CertsSection = CertsSection;
window.MarqueeBand = MarqueeBand;
