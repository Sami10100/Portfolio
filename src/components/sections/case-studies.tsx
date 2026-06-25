import { cases } from "@/config/site";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export function CaseStudies() {
  return (
    <section id="cases" className="bg-white px-7 py-20 text-[#1A1B41]">
      <Container>
        <Reveal>
          <span className="eyebrow text-[#FF6F59]">✦ Featured Work</span>
          <h2 className="section-title mt-4 text-[52px] leading-[1.05]">
            Featured Case Studies<span className="text-[#00E5FF]">.</span>
          </h2>
          <p className="mt-[14px] max-w-[520px] text-[15px] leading-[1.7] text-[#5b5d77]">
            We partner with ambitious brands to solve complex challenges, engineer digital systems, and drive measurable growth at every stage.
          </p>
        </Reveal>

        <Reveal className="mt-5 flex flex-wrap items-center gap-6">
          {["NEXORA", "LUMEN", "arcly", "Northline", "stacked"].map((brand) => (
            <span key={brand} className="flex items-center gap-[6px] text-[13px] font-bold tracking-[.06em] text-[#b0b4c8]">
              <span>◇</span>
              {brand}
            </span>
          ))}
        </Reveal>

        <div className="mt-9 grid gap-[18px] lg:grid-cols-3">
          {cases.map((item) => (
            <Reveal key={item.name}>
              <article className="case overflow-hidden rounded-[20px] border border-[rgba(26,27,65,.1)] bg-white shadow-[0_8px_40px_-16px_rgba(26,27,65,.2)] transition-transform">
                <CaseMockup name={item.name} color={item.color} />
                <div className="p-5">
                  <div className="mb-[10px] flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#0e1240]" style={{ color: item.color }}>
                      ↗
                    </div>
                    <b className="font-display text-[16px] text-[#1A1B41]">{item.name}</b>
                    <span className="text-[rgba(26,27,65,.2)]">|</span>
                    <span className="text-[12px] text-[#5b5d77]">{item.industry}</span>
                  </div>
                  <p className="mb-[14px] text-[12.5px] leading-[1.6] text-[#5b5d77]">{item.description}</p>
                  <div className="grid grid-cols-3 gap-[10px]">
                    {item.stats.map(([label, value]) => (
                      <div key={label}>
                        <span className="text-[9.5px] leading-[1.2] text-[#5b5d77]">{label}</span>
                        <div className="font-display text-[20px] font-extrabold leading-none text-[#1A1B41]">{value}</div>
                        <div className="text-[9px] text-[#9aa0c4]">vs last 6 months</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/case-studies" className="mt-[14px] inline-flex items-center gap-[6px] text-[13px] font-bold text-[#1A1B41] no-underline">
                    View Project <span>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center text-[14.5px] text-[#5b5d77]">
          More results, more impact. Explore all case studies to see how we drive growth across industries.
          <Link href="/case-studies" className="ml-1 font-bold text-[#00bcd4] no-underline">
            Explore All Case Studies →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

function CaseMockup({ name, color }: { name: string; color: string }) {
  return (
    <div className="bg-[linear-gradient(160deg,#080a1c,#11143c)] p-5">
      <div className="flex h-[190px] overflow-hidden rounded-[16px] border border-white/[.08] bg-[#0a0d28]">
        <div className="w-[78px] border-r border-white/[.08] bg-[#070819] p-3">
          <div className="mb-[10px] flex items-center gap-[5px]">
            <span className="h-[14px] w-[14px] rounded-[4px]" style={{ background: color }} />
            <span className="text-[7px] font-bold text-white">{name}</span>
          </div>
          {["Overview", "Reports", "Clients", "Settings"].map((label, index) => (
            <div key={label} className={`mb-1 rounded px-[6px] py-1 text-[7px] ${index === 0 ? "bg-white/[.08]" : ""}`} style={{ color: index === 0 ? color : "#9aa0c4" }}>
              {label}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="mb-3 flex justify-between text-[8px] text-[#9aa0c4]">
            <span>Dashboard</span>
            <span>Export · This Month ▾</span>
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-[8px] bg-white/[.05] p-2">
                <div className="mb-2 h-2 w-10 rounded bg-white/[.14]" />
                <div className="font-display text-[14px] font-bold text-white">+{item * 24}%</div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 220 52" className="h-12 w-full">
            <polyline points="0,44 20,40 40,42 65,34 90,36 115,26 140,30 168,20 195,16 220,6" fill="none" stroke={color} strokeLinecap="round" strokeWidth="2" />
            <circle cx="220" cy="6" r="4" fill={color} />
          </svg>
        </div>
      </div>
    </div>
  );
}
