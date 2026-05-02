import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

// ============ NEURAL BACKGROUND ============
function NeuralBackground({ density = 0.6, intensity = 1 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    const setSize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    setSize();

    const particles = [];
    const particleCount = Math.floor(window.innerWidth * window.innerHeight * density / 5000);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const drawFrame = () => {
      ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        const dx = p.x - mouseRef.current.x * window.innerWidth;
        const dy = p.y - mouseRef.current.y * window.innerHeight;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.vx -= (dx / dist) * force * 0.5;
          p.vy -= (dy / dist) * force * 0.5;
        }

        ctx.fillStyle = `rgba(100, 200, 255, ${Math.max(0, 1 - dist / 300) * intensity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(100, 150, 255, ${(1 - dist / 150) * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };

    const handleResize = () => setSize();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, intensity]);

  return <canvas ref={canvasRef} className="neural-bg" />;
}

// ============ NAVIGATION ============
function NeuralNav({ active, onNav }) {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-brand-dot"></div>
        <span className="nav-brand-name">Hassam Shabbir</span>
      </div>
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={`nav-link ${active === l.id ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            onNav(l.id);
          }}
        >
          {l.label}
        </a>
      ))}
      <a href="assets/cv-final.pdf" download className="nav-cta">
        Download CV ↓
      </a>
    </nav>
  );
}

// ============ HERO SECTION ============
function Hero() {
  return (
    <section className="section hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Hassam Shabbir</span>
          <br />
          <span className="highlight">SXO & Growth Architect</span>
        </h1>
        <p className="hero-subtitle">
          Combining psychology, AI, and strategic optimization to unlock digital potential
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-visual">
        <img src="uploads/Yellow and Black Simple Professional LinkedIn Profile Picture.png" alt="Hassam" />
      </div>
    </section>
  );
}

// ============ ABOUT SECTION ============
function AboutSection() {
  return (
    <section className="section about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a digital strategist specializing in Search Experience Optimization (SXO) and AI-driven growth.
          With expertise in psychology and behavioral design, I help brands create meaningful connections with their audiences.
        </p>
        <div className="about-stats">
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Keywords Optimized</div>
          </div>
          <div className="stat">
            <div className="stat-number">200+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES SECTION ============
function ServicesSection() {
  const services = [
    { title: 'SXO Strategy', desc: 'Search experience optimization for maximum visibility' },
    { title: 'AI Integration', desc: 'Leveraging AI for smarter marketing and growth' },
    { title: 'Brand Psychology', desc: 'Understanding user behavior and motivations' },
    { title: 'Growth Hacking', desc: 'Rapid experimentation for sustainable growth' },
  ];

  return (
    <section className="section services" id="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ EXPERIENCE SECTION ============
function ExperienceSection() {
  return (
    <section className="section experience" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>SXO Strategist</h3>
          <p>Leading search optimization and AI integration initiatives</p>
        </div>
        <div className="timeline-item">
          <h3>Growth Consultant</h3>
          <p>Helping brands scale through psychology-driven strategies</p>
        </div>
        <div className="timeline-item">
          <h3>Digital Expert</h3>
          <p>Pioneering innovative approaches to digital marketing</p>
        </div>
      </div>
    </section>
  );
}

// ============ MAIN APP ============
function App() {
  const [active, setActive] = useState('hero');

  const goTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <NeuralBackground density={0.6} intensity={1} />
      <NeuralNav active={active} onNav={goTo} />
      <main className="main">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Hassam Shabbir. All rights reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/hassam-shabbir-sxo">LinkedIn</a>
          <a href="https://instagram.com/hassam_shabbir_official">Instagram</a>
          <a href="https://facebook.com/hassamshabirofficial">Facebook</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
