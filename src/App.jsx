// CTA + Nav + Footer + Side rail + WhatsApp + main App

const SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/hassam-shabbir-sxo/',
  instagram: 'https://www.instagram.com/hassam_shabbir_official/',
  facebook: 'https://web.facebook.com/hassamshabirofficial',
  email: 'mailto:hassamshabbir75@gmail.com',
  whatsapp: 'https://wa.me/923208090559',
};

function NeuralNav({ active, onNav }) {
  const links = [
    { id: 'about', label: 'Approach' },
    { id: 'services', label: 'Services' },
    { id: 'lab', label: 'SXO/AIO' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'experience', label: 'Experience' },
  ];
  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-brand-dot"></div>
        <span className="nav-brand-name">Hassam Shabbir</span>
      </div>
      {links.map((l) => (
        <a key={l.id} href={`#${l.id}`} className={`nav-link ${active === l.id ? 'active' : ''}`}
           onClick={(e) => { e.preventDefault(); onNav(l.id); }}>
          {l.label}
        </a>
      ))}
      <a href="assets/cv-final.pdf" download="Hassam_Shabbir_CV.pdf" className="nav-cta">Download CV ↓</a>
    </nav>
  );
}

function SideRail() {
  return (
    <div className="side-rail">
      <a href={SOCIALS.linkedin} target="_blank" rel="noopener" title="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.339 18.337v-8.27H5.667v8.27h2.672zM7.003 8.91a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm11.335 9.427v-4.529c0-2.487-1.32-3.642-3.083-3.642-1.421 0-2.057.78-2.412 1.327V10.067h-2.672c.035.755 0 8.27 0 8.27h2.672v-4.616c0-.24.017-.48.088-.652.193-.48.633-.978 1.371-.978.967 0 1.354.736 1.354 1.815v4.431h2.682z"/></svg>
      </a>
      <a href={SOCIALS.instagram} target="_blank" rel="noopener" title="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
      </a>
      <a href={SOCIALS.facebook} target="_blank" rel="noopener" title="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.99 22 12z"/></svg>
      </a>
      <a href={SOCIALS.email} title="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    </div>
  );
}

function WhatsappFab() {
  return (
    <a className="whatsapp-fab" href={SOCIALS.whatsapp} target="_blank" rel="noopener">
      <span className="wa-pulse"></span>
      <span className="wa-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </span>
      WhatsApp
    </a>
  );
}

function CtaSection() {
  return (
    <section className="section" id="contact" style={{ paddingBottom: 40 }}>
      <div className="shell">
        <div className="cta-block reveal">
          <span className="cta-eyebrow mono">Step · Action</span>
          <h2 className="display cta-title">
            Stop searching. Start <em>scaling</em>.<br />
            Let's build your AI-first future.
          </h2>
          <p className="cta-sub">
            One 60-minute strategy intensive. You leave with a written SXO/AIO map, a content engine spec, and the next 30 days planned.
          </p>
          <div className="cta-buttons">
            <a href={SOCIALS.whatsapp} target="_blank" rel="noopener" className="btn-primary">
              Message on WhatsApp <span className="arrow">→</span>
            </a>
            <a href={SOCIALS.email} className="btn-ghost">Email Hassam</a>
            <a href="assets/cv-final.pdf" download="Hassam_Shabbir_CV.pdf" className="btn-ghost">Download CV ↓</a>
          </div>

          <div className="cta-contact-row">
            <div className="cta-contact-item">
              <div className="l mono">WhatsApp</div>
              <a href={SOCIALS.whatsapp} target="_blank" rel="noopener" className="v">+92 320 8090 559</a>
            </div>
            <div className="cta-contact-item">
              <div className="l mono">Email</div>
              <a href={SOCIALS.email} className="v">hassamshabbir75@gmail.com</a>
            </div>
            <div className="cta-contact-item">
              <div className="l mono">LinkedIn</div>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener" className="v">/in/hassam-shabbir-sxo</a>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-row">
            <div className="footer-brand">
              <span className="nav-brand-dot" style={{ width: 8, height: 8 }}></span>
              Hassam Shabbir
              <span className="footer-meta" style={{ marginLeft: 12 }}>· SEO · SXO · AIO Strategist</span>
            </div>
            <div className="footer-links">
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              <a href={SOCIALS.instagram} target="_blank" rel="noopener">Instagram</a>
              <a href={SOCIALS.facebook} target="_blank" rel="noopener">Facebook</a>
              <a href={SOCIALS.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
              <a href={SOCIALS.email}>Email</a>
            </div>
          </div>
          <div className="footer-row" style={{ marginTop: 24 }}>
            <div className="footer-meta">© 2026 Hassam Shabbir · Built with intent</div>
            <div className="footer-meta">Pakistan · Remote · International</div>
          </div>
        </footer>
      </div>
    </section>
  );
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = React.useState('hero');
  React.useEffect(() => {
    const ids = ['hero', 'about', 'services', 'lab', 'automation', 'ventures', 'psych', 'skills', 'experience', 'certs', 'contact'];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let cur = 'hero';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return [active, setActive];
}

function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "particleDensity": 0.6,
    "kineticIntensity": 1
  }/*EDITMODE-END*/;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active] = useActiveSection();
  useReveal();
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };
  return (
    <>
      <NeuralBackground density={t.particleDensity} intensity={1} />
      <NeuralNav active={active} onNav={goTo} />
      <SideRail />
      <WhatsappFab />
      <div className="shell">
        <Hero intensity={t.kineticIntensity} />
      </div>
      <AboutSection />
      <ServicesSection />
      <MarqueeBand />
      <LabSection />
      <AutomationSection />
      <VenturesSection />
      <PsychSection />
      <SkillsSection />
      <ExperienceSection />
      <CertsSection />
      <CtaSection />

      <TweaksPanel title="Portfolio Tweaks">
        <TweakSection label="Neural background" />
        <TweakSlider label="Particle density" value={t.particleDensity} min={0} max={1.4} step={0.1}
          onChange={(v) => setTweak('particleDensity', v)} />
        <TweakSection label="Hero" />
        <TweakSlider label="3D tilt intensity" value={t.kineticIntensity} min={0} max={2} step={0.1} unit="×"
          onChange={(v) => setTweak('kineticIntensity', v)} />
      </TweaksPanel>
    </>
  );
}

export default App;
