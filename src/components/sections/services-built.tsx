import { servicesBuilt } from "@/config/site";
import { Container } from "@/components/ui/primitives";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

export function ServicesBuilt() {
  return (
    <section className="bg-[#F4F5F6] px-7 py-20 text-[#1A1B41]">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[.62fr_1fr_1fr_1fr]">
          <Reveal>
            <span className="eyebrow text-[#FF6F59]">✦ Services That Drive Results</span>
            <h2 className="section-title mt-4 text-[46px] leading-[1.05]">
              Services Built
              <br />
              for Smarter
              <br />
              Growth<span className="text-[#00E5FF]">.</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#5b5d77]">
              We combine strategy, AI, and design to build digital systems that attract, convert, and scale.
            </p>
            <a href="#cta" className="btn-cyan mt-[22px]">
              Book a Strategy Call →
            </a>
            <div className="mt-[18px] flex items-center gap-[10px]">
              <div className="flex">
                {["#5b5bf0", "#FF6F59", "#00E5FF", "#9a9aff"].map((color, index) => (
                  <span
                    key={color}
                    className="h-[30px] w-[30px] rounded-full border-2 border-[#F4F5F6]"
                    style={{
                      background: `linear-gradient(135deg,${color},${index === 1 ? "#5b5bf0" : "#1A1B41"})`,
                      marginLeft: index ? -9 : 0,
                    }}
                  />
                ))}
              </div>
              <span className="text-[12px] font-medium text-[#5b5d77]">Trusted by ambitious brands</span>
            </div>
          </Reveal>

          {servicesBuilt.map((service, index) => (
            <Reveal key={service.title}>
              <div className="svc-light light-card flex h-full flex-col rounded-[20px] p-6 transition-transform">
                <ServiceIcon index={index} />
                <h3 className="font-display mt-[14px] text-[17px] font-bold text-[#1A1B41]">{service.title}</h3>
                <p className="mb-3 mt-1 text-[12px] leading-[1.5] text-[#5b5d77]">{service.description}</p>
                <div className="grid gap-[9px]">
                  {service.features.map((feature) => (
                    <span key={feature} className="flex items-center gap-[6px] text-[12px] text-[#1A1B41]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00E5FF] text-[9px] font-bold text-[#0a0b1e]">✓</span>
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-3 pt-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#0e1030] text-[#00E5FF]">↗</span>
                  <div>
                    <div className="text-[10px] text-[#5b5d77]">{service.metricLabel}</div>
                    <div className="font-display text-[16px] font-extrabold text-[#1A1B41]">
                      {service.metric} <span className="text-[11px] text-[#16b364]">↑</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-[18px] grid gap-[18px] lg:grid-cols-4">
          {[
            ["Conversion Rate Optimization", "Turn more visitors into customers with data-driven CRO strategies."],
            ["Analytics & Insights", "Actionable data and dashboards that inform smarter decisions."],
            ["Brand Strategy", "Clear positioning and messaging that connects and converts."],
            ["Performance Design", "Beautiful design engineered for speed and conversions."],
          ].map(([title, text]) => (
            <Reveal key={title}>
              <div className="svc-light light-card h-full rounded-[18px] p-5">
                <div className="mb-[9px] flex items-center gap-3">
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#e8eaf7,#d0d4ee)] text-[#5b5bf0]">✦</div>
                  <b className="font-display text-[14px] text-[#1A1B41]">{title}</b>
                </div>
                <p className="m-0 text-[12px] leading-[1.5] text-[#5b5d77]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const icons = ["⌕", "🤖", "</>"];
  return (
    <span className="flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-[#0e1030] text-[20px] text-[#00E5FF]">
      {icons[index]}
    </span>
  );
}

export function MiniStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {[
        [250, "+", "Projects Delivered"],
        [210, "%", "Average ROI Lift"],
        [120, "+ hrs", "Time Saved Monthly"],
        [96, "%", "Client Retention Rate"],
      ].map(([value, suffix, label]) => (
        <div key={label.toString()} className="flex items-center gap-4 border-r border-white/[.06] px-6 py-[22px] last:border-r-0">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(160deg,#1a1c4a,#0e1032)] text-[#5b5bf0]">✦</div>
          <div>
            <CountUp value={Number(value)} suffix={String(suffix)} className="stat-value text-[28px] leading-none" />
            <div className="mt-0.5 text-[13px] font-semibold">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
