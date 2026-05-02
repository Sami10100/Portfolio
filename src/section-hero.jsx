// Hero — kinetic 3D headline + portrait with yellow split + 3D tilt

function HeroPortrait() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      el.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return (
    <div className="hero-portrait">
      <div className="hero-portrait-orbit"></div>
      <div ref={ref} className="hero-portrait-frame" style={{ transition: 'transform 0.3s ease-out' }}>
        <div className="hero-portrait-bg">
          <div className="hero-portrait-bg-l"></div>
          <div className="hero-portrait-bg-r"></div>
        </div>
        <img className="hero-portrait-img" src="assets/hassam-smoke.webp" alt="Hassam Shabbir" />
        <div className="hero-portrait-tag hero-portrait-tag-1">
          <span className="dot"></span>
          <span>SXO · AIO · GEO</span>
        </div>
        <div className="hero-portrait-tag hero-portrait-tag-2">
          <span className="dot"></span>
          <span>BSc PSYCHOLOGY</span>
        </div>
        <div className="hero-portrait-tag hero-portrait-tag-3">
          <span className="dot"></span>
          <span>7+ YRS · 1,000+ ARTICLES</span>
        </div>
      </div>
    </div>
  );
}

function KineticHeadline({ intensity }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || intensity === 0) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      const max = 5 * intensity;
      el.style.transform = `rotateX(${-dy * max}deg) rotateY(${dx * max}deg)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [intensity]);
  return (
    <h1 ref={ref} className="display hero-headline"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out' }}>
      <span className="word strike">Algorithms</span>{' '}
      <span className="word">don't</span>{' '}
      <span className="word">buy</span>{' '}
      <span className="word strike">products.</span>
      <br />
      <span className="word">Humans</span>{' '}
      <span className="word accent">do.</span>
      <br />
      <span className="word">I optimize for the</span>{' '}
      <span className="word accent">Human Intent</span>{' '}
      <span className="word">behind the search.</span>
    </h1>
  );
}

function Hero({ intensity }) {
  return (
    <section className="hero" id="hero">
      <div>
        <div className="hero-eyebrow">
          <span>SEO · SXO · AIO · GEO Strategist</span>
        </div>
        <KineticHeadline intensity={intensity} />
        <p className="hero-sub">
          I'm <strong>Hassam Shabbir</strong> — a content strategist with <strong>7+ years</strong> turning
          search intent into pipeline. I've authored <strong>1,000+ SEO articles</strong>, ranked in
          top‑10 for 50+ competitive keywords, and built <strong>SXO Master</strong>, a tool that
          audits content across AIO/SEO/GEO/SXO frameworks before you ever hit publish.
        </p>
        <div className="hero-meta">
          <a href="#contact" className="btn-primary">
            Book a strategy call
            <span className="arrow">→</span>
          </a>
          <a href="assets/cv-final.pdf" download="Hassam_Shabbir_CV.pdf" className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      <HeroPortrait />

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">7<span className="unit">+</span></div>
          <div className="hero-stat-label">Years strategy + content</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">1,000<span className="unit">+</span></div>
          <div className="hero-stat-label">SEO articles authored</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">50<span className="unit">+</span></div>
          <div className="hero-stat-label">Top‑10 keywords</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">400<span className="unit">+</span></div>
          <div className="hero-stat-label">Pros trained · AI seminars</div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll · Approach below</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
