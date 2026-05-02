// Neural network particle background — canvas, connected nodes, parallax-aware
function NeuralBackground({ density = 0.6, intensity = 1 }) {
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const mouseRef = React.useRef({ x: 0.5, y: 0.5 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();

    // Build node grid based on density
    const targetCount = Math.floor((w * h) / 18000 * density);
    const nodes = Array.from({ length: targetCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.4 + 0.6,
      pulse: Math.random() * Math.PI * 2,
      isHub: Math.random() < 0.08,
    }));

    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('resize', resize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.008;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw connections first
      const linkDist = 140;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * 0.18 * intensity;
            // mouse proximity glow
            const cx = (a.x + b.x) / 2;
            const cy = (a.y + b.y) / 2;
            const mdx = cx - mx, mdy = cy - my;
            const md = Math.sqrt(mdx * mdx + mdy * mdy);
            const mouseBoost = md < 200 ? (1 - md / 200) * 0.7 : 0;
            const isYellow = a.isHub || b.isHub || mouseBoost > 0.1;
            ctx.strokeStyle = isYellow
              ? `rgba(252, 208, 41, ${alpha + mouseBoost * 0.6})`
              : `rgba(180, 200, 230, ${alpha * 0.6})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;

        // Mouse repulsion (very subtle)
        const mdx = n.x - mx;
        const mdy = n.y - my;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 120 && md > 0.1) {
          n.x += (mdx / md) * 0.4;
          n.y += (mdy / md) * 0.4;
        }

        // Wrap edges
        if (n.x < -10) n.x = w + 10;
        if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10;
        if (n.y > h + 10) n.y = -10;

        const r = n.r * (1 + Math.sin(n.pulse) * 0.2);
        if (n.isHub) {
          // Glowing hub node
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 8);
          grad.addColorStop(0, 'rgba(252, 208, 41, 0.7)');
          grad.addColorStop(0.4, 'rgba(252, 208, 41, 0.15)');
          grad.addColorStop(1, 'rgba(252, 208, 41, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#fcd029';
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 1.6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(220, 230, 245, ${0.5 * intensity})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', resize);
    };
  }, [density, intensity]);

  return <canvas ref={canvasRef} className="neural-bg" />;
}

window.NeuralBackground = NeuralBackground;
