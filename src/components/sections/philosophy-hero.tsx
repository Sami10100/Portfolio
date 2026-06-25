import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/primitives";
import { Logo } from "@/components/logo";
import Link from "next/link";

export function PhilosophyHero() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden px-7 pb-0 pt-[70px] text-white"
      style={{ background: "radial-gradient(110% 100% at 50% 0%,#0e1240 0%,#070a1e 65%)" }}
    >
      <Container>
        <div className="grid items-center gap-7 lg:grid-cols-[1fr_1.4fr_1fr]">
          <Reveal>
            <span className="eyebrow text-[#FF6F59]">✦ Our Philosophy</span>
            <h1 className="font-display mt-4 text-[48px] font-extrabold leading-[1.04] tracking-[-.025em]">
              Where Psychology Meets Design and Technology<span className="text-[#FF6F59]">.</span>
            </h1>
            <p className="mt-[18px] text-[14.5px] leading-[1.72] text-[#b6badd]">
              At SitesBrand, we believe growth isn&apos;t accidental - it&apos;s engineered at the intersection of human behavior, beautiful design, and intelligent technology.
            </p>
            <div className="mt-[18px] flex items-start gap-3 rounded-[13px] border border-white/[.08] bg-white/[.04] p-[15px]">
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[rgba(0,229,255,.12)] text-[16px]">🚀</span>
              <p className="m-0 text-[13px] leading-[1.65] text-[#b6badd]">
                We combine psychology-driven strategy, conversion-focused design, and AI-powered development to build digital experiences that attract, engage, and scale.
              </p>
            </div>
            <div className="mt-[22px] grid grid-cols-4 border-t border-white/[.08] pt-[18px]">
              {[
                [250, "+", "Brands Scaled"],
                [98, "%", "Client Retention"],
                [45, "+", "AI Automations"],
                [3.6, "M+", "Leads Generated"],
              ].map(([value, suffix, label]) => (
                <div key={label.toString()}>
                  <CountUp value={Number(value)} suffix={String(suffix)} className="stat-value text-[22px] text-[#00E5FF]" />
                  <div className="mt-0.5 text-[10px] text-[#9aa0c4]">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative flex h-[510px] items-center justify-center">
            <div className="spin-slow absolute h-[390px] w-[390px] rounded-full border border-[rgba(0,229,255,.14)]" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-[rgba(0,229,255,.07)]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 510" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <line x1="210" y1="255" x2="66" y2="255" stroke="rgba(255,111,89,.55)" strokeWidth="1.5" strokeDasharray="6,5" />
              <circle cx="138" cy="255" r="4.5" fill="#FF6F59" />
              <line x1="210" y1="255" x2="354" y2="255" stroke="rgba(160,90,255,.55)" strokeWidth="1.5" strokeDasharray="6,5" />
              <circle cx="282" cy="255" r="4.5" fill="#a05aff" />
              <line x1="210" y1="255" x2="210" y2="400" stroke="rgba(0,229,255,.5)" strokeWidth="1.5" strokeDasharray="6,5" />
              <circle cx="210" cy="328" r="4.5" fill="#00E5FF" />
            </svg>

            <div className="relative z-[4] flex h-[124px] w-[124px] items-center justify-center">
              <div className="absolute inset-0 rotate-[30deg] rounded-[20px] border border-[rgba(0,229,255,.32)] bg-[linear-gradient(160deg,#1e309e,#0e1a6e)] shadow-[0_0_55px_rgba(0,229,255,.38),inset_0_1px_0_rgba(255,255,255,.14)]" />
              <Logo showText={false} accent="cyan" markClassName="relative z-[1] h-[58px] w-[54px]" />
            </div>

            <HeroNode className="float-y top-[26px] left-1/2 -translate-x-1/2" label="Growth" color="#00E5FF" shape="↑" />
            <HeroBubble className="float-y2 left-1 top-1/2 -translate-y-1/2" label="Psychology" color="#FF6F59" icon="person" />
            <HeroBubble className="float-y right-1 top-1/2 -translate-y-1/2" label="Technology" color="#00E5FF" icon="code" />
            <HeroBubble className="float-y2 bottom-4 left-1/2 -translate-x-1/2" label="Design" color="#b07aff" icon="pen" />
          </Reveal>

          <Reveal className="grid gap-[14px]">
            {[
              ["Psychology", "We study human behavior, motivations, and decision-making to craft strategies that connect and convert.", "INSIGHT THAT DRIVES ACTION", "#FF6F59"],
              ["Design", "We design experiences that are beautiful, intuitive, and built to guide users toward the right action.", "EXPERIENCES THAT INSPIRE", "#b07aff"],
              ["Technology", "We build fast, secure, and scalable solutions powered by modern tech and AI automation.", "TECH THAT SUPERCHARGES GROWTH", "#00E5FF"],
            ].map(([title, text, tag, color]) => (
              <div key={title} className="glass rounded-[16px] p-[18px]">
                <h3 className="font-display mb-[5px] text-[15px] font-bold" style={{ color }}>
                  {title}
                </h3>
                <p className="mb-[10px] text-[12px] leading-[1.55] text-[#9aa0c4]">{text}</p>
                <span className="inline-block rounded-[6px] border px-[9px] py-1 text-[9px] font-bold tracking-[.08em]" style={{ color, borderColor: color, background: "rgba(255,255,255,.04)" }}>
                  {tag}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-4 flex flex-wrap items-center justify-between gap-5 border-t border-white/[.08] py-6">
          <p className="m-0 text-[15px] text-[#b6badd]">
            Three disciplines. One mission: <span className="font-bold text-[#00E5FF]">Sustainable, scalable growth</span> for ambitious brands.
          </p>
          <Link href="/free-audit" className="btn-cyan rounded-[13px] px-[26px] py-[14px] text-[15px]">
            Let&apos;s Build Your Growth Engine →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

function HeroNode({ className, label, color, shape }: { className: string; label: string; color: string; shape: string }) {
  return (
    <div className={`absolute z-[5] ${className}`}>
      <div className="flex items-center gap-[9px] whitespace-nowrap rounded-[12px] border px-5 py-[10px] shadow-[0_0_22px_rgba(0,229,255,.18)]" style={{ borderColor: color, color, background: "linear-gradient(135deg,rgba(0,200,230,.18),rgba(0,100,150,.1))" }}>
        <span className="text-[15px]">{shape}</span>
        <span className="font-display text-[13px] font-bold uppercase tracking-[.14em]">{label}</span>
      </div>
    </div>
  );
}

function HeroBubble({ className, label, color, icon }: { className: string; label: string; color: string; icon: "person" | "code" | "pen" }) {
  return (
    <div className={`absolute z-[5] text-center ${className}`}>
      <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 shadow-[0_0_30px_rgba(0,229,255,.24)]" style={{ borderColor: color, background: "radial-gradient(circle at 38% 32%,rgba(0,185,220,.62),rgba(0,80,130,.3))" }}>
        {icon === "code" ? <span className="font-mono text-[24px] font-extrabold text-[#8ff8ff]">&lt;/&gt;</span> : <span className="text-[30px]" style={{ color }}>{icon === "person" ? "◉" : "✎"}</span>}
      </div>
      <div className="font-display mt-[7px] text-[10px] font-bold uppercase tracking-[.1em]" style={{ color }}>
        {label}
      </div>
    </div>
  );
}
