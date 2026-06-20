import { processSteps } from "@/config/site";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  return (
    <section
      id="process"
      className="px-7 py-24 text-white"
      style={{ background: "radial-gradient(120% 90% at 50% 0%,#12143a 0%,#080a1c 70%)" }}
    >
      <Container>
        <Reveal className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow text-[#00E5FF]">✦ Our Process</span>
          <h2 className="section-title mt-[18px] text-[52px] leading-[1.05]">
            How We Build
            <br />
            Smarter Growth<span className="text-[#00E5FF]">.</span>
          </h2>
          <p className="mt-[18px] text-[16px] leading-[1.7] text-[#9aa0c4]">
            A proven, AI-enhanced process that turns insight into impact - and builds momentum that compounds, month after month.
          </p>
        </Reveal>

        <div className="relative mt-[52px] grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          <div className="hide-mobile absolute left-[8%] right-[8%] top-[42px] h-px bg-[linear-gradient(90deg,transparent,rgba(0,229,255,.45),transparent)]" />
          {processSteps.map(([number, title, text]) => (
            <Reveal key={number}>
              <div className="step relative h-full rounded-[18px] border border-white/[.08] bg-white/[.025] p-4 text-center transition-transform">
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[rgba(0,229,255,.28)] bg-[rgba(0,229,255,.04)] text-[#00E5FF]">
                  <span className="font-display text-[18px] font-extrabold">{number}</span>
                </div>
                <h3 className="font-display mt-2 text-[15px] font-bold">{title}</h3>
                <p className="mb-[10px] mt-[5px] text-[11.5px] leading-[1.55] text-[#9aa0c4]">{text}</p>
                <span className="inline-block h-[5px] w-[36px] rounded-full bg-[#00E5FF]" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-7 grid overflow-hidden rounded-[18px] border border-white/[.08] bg-white/[.02] md:grid-cols-4">
          {[
            ["Transparent", "Clear communication, zero surprises."],
            ["Agile", "Fast iterations, real-time adaptability."],
            ["Secure", "Enterprise-grade security & privacy."],
            ["Results-Driven", "Focus on impact, growth, and ROI."],
          ].map(([title, text]) => (
            <div key={title} className="flex items-center gap-[14px] border-white/[.06] p-5 md:border-r md:last:border-r-0">
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-[rgba(0,229,255,.45)] bg-[rgba(0,229,255,.06)] text-[#00E5FF]">✦</span>
              <div>
                <b className="text-[14px]">{title}</b>
                <div className="mt-0.5 text-[11.5px] text-[#9aa0c4]">{text}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
