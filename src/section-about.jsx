// About / Philosophy with smoke portrait + Services + Ventures + Skills + Experience

function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">01</span>
            <span>The Approach · Psychology First</span>
          </div>
          <h2 className="display section-title">
            Where <em>behavioral science</em><br />meets the search bar.
          </h2>
        </div>

        <div className="about-wrap">
          <div className="about-portrait reveal">
            <div className="about-portrait-glow"></div>
            <img src="assets/hassam-smoke.webp" alt="Hassam Shabbir" />
            <div className="about-credentials about-cred-1">
              <b>Rise Above Minds</b><br />Founder · Non-profit<br />100+ students trained
            </div>
            <div className="about-credentials about-cred-2">
              <b>The Learning Society</b><br />Founder · Psychology + Faith<br />Community-led research
            </div>
            <div className="about-credentials about-cred-3">
              <b>BSc Psychology</b><br />University of Sargodha<br />Consumer Behavior · Research
            </div>
          </div>

          <div className="reveal">
            <p className="section-lede" style={{ marginBottom: 24 }}>
              Most strategists optimize for engines. I study the <strong style={{ color: 'var(--paper)' }}>person typing
              the query</strong> — their fear, hesitation, and unspoken objection — then build content that
              answers <em style={{ color: 'var(--signal)', fontStyle: 'italic' }}>before they finish thinking</em>.
            </p>

            <div className="about-list">
              <div className="about-list-item">
                <span className="num">01</span>
                <div>
                  <h4>Search Intent Decoded</h4>
                  <p>Every keyword has a human behind it. I map the latent emotion — anxiety, curiosity, urgency — and write to that, not to the SERP.</p>
                </div>
              </div>
              <div className="about-list-item">
                <span className="num">02</span>
                <div>
                  <h4>AI Search Native</h4>
                  <p>2026 is the year of answer engines. ChatGPT, Perplexity, Google AI Overviews. I optimize content to be <em>cited</em>, not just ranked.</p>
                </div>
              </div>
              <div className="about-list-item">
                <span className="num">03</span>
                <div>
                  <h4>Conversion Psychology</h4>
                  <p>Hick's Law. Anchoring. Loss aversion. Every page audited against the heuristics that actually move buyers.</p>
                </div>
              </div>
              <div className="about-list-item">
                <span className="num">04</span>
                <div>
                  <h4>Built · Not Theorised</h4>
                  <p>SXO Master plugin. AI seminars for 400+ pros. Rise Above Minds non-profit for 100+ kids. Theory that ships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const tiers = [
    {
      tier: 'Starter',
      title: 'SXO Audit',
      desc: 'A 5-day deep audit of your existing content stack against AIO + SEO + GEO + SXO frameworks. Walk away with a 30-day fix list.',
      price: 'On request',
      from: 'Per project · 5-day delivery',
      list: [
        'SXO Master scan (proprietary)',
        'Top 25 page intent audit',
        'AI Overview citation gaps',
        'Cognitive load score per page',
        '30-day priority roadmap',
      ],
      cta: 'Start the audit',
      featured: false,
    },
    {
      tier: 'Growth',
      title: 'Content Engine',
      desc: 'I build your monthly SXO content engine. Strategy → keyword research → briefs → optimized articles → AI-overview ready. End-to-end.',
      price: 'On request',
      from: 'Per month · 3-month minimum',
      list: [
        '8 SEO+SXO articles / month',
        'AI-overview structured for citation',
        'Internal linking + entity graph',
        'Bi-weekly performance review',
        'Direct WhatsApp access',
        'Quarterly strategy resets',
      ],
      cta: 'Reserve a slot',
      featured: true,
      badge: 'Most booked',
    },
    {
      tier: 'Executive',
      title: 'Fractional Strategist',
      desc: 'I become your part-time Head of Search. Strategy + team coaching + tool architecture. For founders scaling past $1M ARR.',
      price: 'On request',
      from: 'Per month · Retainer',
      list: [
        'Weekly strategy sessions',
        'Team training + hiring help',
        'AI workflow architecture (n8n)',
        'SXO Master plugin license',
        'Monthly board-deck reporting',
        'Priority response · 6-hour SLA',
      ],
      cta: 'Apply for retainer',
      featured: false,
    },
  ];

  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">02</span>
            <span>Services + Engagement</span>
          </div>
          <h2 className="display section-title">
            Three ways to <em>work together</em>.
          </h2>
          <p className="section-lede">
            Audit, engine, or full retainer. All built around the same idea: search experience over search rank.
          </p>
        </div>

        <div className="services-grid">
          {tiers.map((s, i) => (
            <div key={i} className={`glass service-card ${s.featured ? 'featured' : ''} reveal`}>
              {s.badge && <span className="service-card-badge">{s.badge}</span>}
              <div className="service-card-tier mono">{s.tier}</div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
              <div className="service-card-price">
                <span>{s.price}</span>
              </div>
              <div className="service-card-from mono">{s.from}</div>
              <ul className="service-card-list">
                {s.list.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
              <a href="#contact" className="service-card-cta">
                {s.cta}
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VenturesSection() {
  return (
    <section className="section" id="ventures">
      <div className="shell">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">03</span>
            <span>Ventures + Tools</span>
          </div>
          <h2 className="display section-title">
            Built, not just <em>consulted</em>.
          </h2>
          <p className="section-lede">
            I ship the tools and communities I prescribe. Here's what's running.
          </p>
        </div>

        <div className="ventures-grid">
          <div className="glass venture-card reveal">
            <div className="venture-card-badge mono">Tool · SaaS</div>
            <h3 className="venture-card-title">SXO Master</h3>
            <p className="venture-card-body">
              A proprietary content audit engine that scores pages across AIO, SEO, GEO, and SXO frameworks
              <em style={{ color: 'var(--signal)', fontStyle: 'italic' }}>before you publish</em>.
              Catches optimization gaps that human reviewers miss — and the ones LLM crawlers care about most.
            </p>
            <div className="venture-card-meta">
              <div className="venture-card-meta-item">
                <div className="v">4</div>
                <div className="l mono">Frameworks</div>
              </div>
              <div className="venture-card-meta-item">
                <div className="v">Pre+Post</div>
                <div className="l mono">Publish audit</div>
              </div>
              <div className="venture-card-meta-item">
                <div className="v">2025</div>
                <div className="l mono">Launched</div>
              </div>
            </div>
          </div>

          <div className="glass venture-card reveal">
            <div className="venture-card-badge mono">Non-profit · Education</div>
            <h3 className="venture-card-title">Rise Above Minds (RAM)</h3>
            <p className="venture-card-body">
              Free digital-skills training — SEO, content writing, graphic design, web dev — for
              underprivileged kids in Pakistan. I founded and direct it; we run psychology workshops
              and donation drives alongside the curriculum.
            </p>
            <div className="venture-card-meta">
              <div className="venture-card-meta-item">
                <div className="v">100+</div>
                <div className="l mono">Students impacted</div>
              </div>
              <div className="venture-card-meta-item">
                <div className="v">Free</div>
                <div className="l mono">Tuition</div>
              </div>
              <div className="venture-card-meta-item">
                <div className="v">PK</div>
                <div className="l mono">Based</div>
              </div>
            </div>
          </div>

          <div className="glass venture-card reveal">
            <div className="venture-card-badge mono">Community · Whatsapp</div>
            <h3 className="venture-card-title">The Learning Society</h3>
            <p className="venture-card-body">
              A WhatsApp community blending Islamic teaching with consumer psychology. Daily
              research-backed posts on faith, behavior, and personal development. The lab where
              I refine the human-intent thinking that shows up in client work.
            </p>
            <div className="venture-card-meta">
              <div className="venture-card-meta-item">
                <div className="v">Daily</div>
                <div className="l mono">Cadence</div>
              </div>
              <div className="venture-card-meta-item">
                <div className="v">Faith+</div>
                <div className="l mono">Psychology</div>
              </div>
              <div className="venture-card-meta-item">
                <div className="v">Live</div>
                <div className="l mono">Sessions</div>
              </div>
            </div>
          </div>

          <div className="glass venture-card reveal">
            <div className="venture-card-badge mono">Workshops · Training</div>
            <h3 className="venture-card-title">AI Seminars</h3>
            <p className="venture-card-body">
              Two flagship seminars on prompt engineering, AI-assisted SEO, and workflow automation
              for digital pros. 400+ trained on Claude, ChatGPT, Grok, and the n8n stack.
              Practical, not theoretical.
            </p>
            <div className="venture-card-meta">
              <div className="venture-card-meta-item">
                <div className="v">400+</div>
                <div className="l mono">Trained</div>
              </div>
              <div className="venture-card-meta-item">
                <div className="v">2</div>
                <div className="l mono">Seminars</div>
              </div>
              <div className="venture-card-meta-item">
                <div className="v">Live</div>
                <div className="l mono">Booking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AboutSection = AboutSection;
window.ServicesSection = ServicesSection;
window.VenturesSection = VenturesSection;
