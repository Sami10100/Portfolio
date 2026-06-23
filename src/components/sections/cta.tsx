import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function CTA() {
  return (
    <section id="cta" className="bg-[#F4F5F6] px-7 pb-10 pt-12 text-[#1A1B41]">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[rgba(26,27,65,.1)] bg-white px-[60px] py-14 shadow-[0_20px_60px_-20px_rgba(26,27,65,.15)]">
            <div className="absolute -right-10 -top-10 h-[220px] w-[220px] rounded-full border border-[rgba(0,229,255,.22)]" />
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="eyebrow text-[#FF6F59]">✦ Ready To Grow Smarter?</span>
                <h2 className="section-title mt-5 text-[58px] leading-[1.02] tracking-[-.03em]">
                  Ready to Build
                  <br />
                  Smarter Growth<span className="text-[#00E5FF]">?</span>
                </h2>
                <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-[#5b5d77]">
                  Let&apos;s turn strategy, design, technology, and AI into a growth engine built around your business goals.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#cta" className="inline-flex items-center gap-[10px] rounded-[12px] bg-[#1A1B41] px-[26px] py-[15px] text-[14.5px] font-semibold text-white no-underline">
                    Book a Strategy Call →
                  </a>
                  <a href="#cta" className="btn-cyan px-[26px] py-[15px] text-[14.5px]">
                    Get a Free Audit →
                  </a>
                </div>
              </div>

              <div className="hide-mobile" style={{ perspective: "1400px" }}>
                <div className="rotate-[2deg] rounded-[22px] border border-[rgba(26,27,65,.1)] bg-white p-5 shadow-[0_18px_60px_-24px_rgba(26,27,65,.28)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[12px] font-bold text-[#5b5d77]">Growth Dashboard</span>
                    <span className="rounded-[6px] bg-[#eafffd] px-2 py-1 text-[10px] font-bold text-[#00a8bd]">Live</span>
                  </div>
                  <div className="mb-4 grid grid-cols-3 gap-3">
                    {["Leads", "Revenue", "ROI"].map((item, index) => (
                      <div key={item} className="rounded-[12px] bg-[#f4f5f6] p-3">
                        <div className="text-[10px] text-[#5b5d77]">{item}</div>
                        <div className="font-display text-[20px] font-extrabold text-[#1A1B41]">+{[42, 68, 210][index]}%</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex h-[150px] items-end gap-2 rounded-[16px] bg-[linear-gradient(180deg,#f7f8fb,#fff)] p-4">
                    {[36, 52, 48, 68, 84, 96, 124].map((height, index) => (
                      <span key={height} className="bar flex-1 rounded-t-[8px] bg-[linear-gradient(180deg,#00E5FF,#5b5bf0)]" style={{ height, animationDelay: `${index * 0.08}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
