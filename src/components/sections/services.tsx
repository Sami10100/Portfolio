import { serviceCards } from "@/config/site";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="border-t border-white/[.05] bg-[linear-gradient(180deg,#0a0b1e,#060713)] px-7 py-24 text-white">
      <Container>
        <div className="grid gap-[18px] lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <Reveal>
            <span className="eyebrow text-[#FF6F59]">✦ Solutions</span>
            <h2 className="section-title mt-[14px] text-[52px] leading-[1.04]">
              Solutions That
              <br />
              Drive Growth<span className="text-[#FF6F59]">.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#9aa0c4]">
              End-to-end digital solutions tailored to your business goals. We combine strategy, creativity, and technology to deliver measurable results.
            </p>
            <Link href="/services" className="mt-6 inline-flex items-center gap-[10px] rounded-[12px] border border-[rgba(0,229,255,.4)] px-[22px] py-3 text-[14px] font-semibold text-[#00E5FF] no-underline">
              View All Services →
            </Link>
            <div className="mt-6 grid gap-4">
              {["Result Driven", "Future Ready", "Dedicated Support"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(160deg,#1a1c4a,#0e1032)] text-[#00E5FF]">✦</div>
                  <div>
                    <b className="text-[13px]">{item}</b>
                    <div className="mt-[3px] text-[12px] leading-[1.5] text-[#9aa0c4]">Focused on measurable growth & ROI.</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-1">
            <div className="svc-flag h-full rounded-[22px] border border-[rgba(0,229,255,.35)] bg-[linear-gradient(160deg,rgba(0,229,255,.12),rgba(91,91,240,.08))] p-6 shadow-[0_0_45px_-22px_rgba(0,229,255,.7)]">
              <div className="flex items-center gap-[14px]">
                <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[16px] border border-[rgba(0,229,255,.4)] bg-[radial-gradient(circle,rgba(0,229,255,.35),rgba(0,229,255,.05))] font-display text-[20px] font-extrabold text-[#00E5FF]">AI</span>
                <div>
                  <h3 className="font-display m-0 text-[23px] font-bold">AI Search Optimization</h3>
                  <div className="text-[13px] font-semibold text-[#00E5FF]">AEO / GEO / LLM SEO</div>
                </div>
              </div>
              <p className="my-[18px] text-[14px] leading-[1.7] text-[#b6badd]">
                Be the answer people get inside Google AI Overviews, ChatGPT, Gemini, and Perplexity. We make your brand the source AI engines quote, recommend, and trust.
              </p>
              <div className="grid gap-[10px] text-[12px] text-[#dfe2f4]">
                {["AI-ready content architecture", "Entity and schema strategy", "LLM visibility optimization"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="h-[7px] w-[7px] rounded-full bg-[#00E5FF]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {[
            ["Data & Automation", "Automate workflows, extract data, and turn raw information into decisions that move the needle."],
            ["UI/UX & Design", "Intuitive experiences that connect, engage, and quietly guide users to say yes."],
            ["Development", "Custom websites and web apps built with clean code and modern technologies."],
          ].map(([title, text]) => (
            <Reveal key={title}>
              <TopService title={title} text={text} />
            </Reveal>
          ))}
        </div>

        <div className="mt-[18px] grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map(([icon, title, text]) => (
            <Reveal key={title}>
              <SmallService icon={icon} title={title} text={text} />
            </Reveal>
          ))}
          <Reveal className="md:col-span-2">
            <div className="svc h-full rounded-[18px] border border-white/[.07] bg-white/[.025] p-6 transition-transform">
              <div className="flex items-center gap-[14px]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-[linear-gradient(160deg,#2a2c66,#16183a)] text-[20px]">📈</span>
                <div>
                  <h3 className="font-display m-0 text-[17px] font-bold">Strategy & Growth</h3>
                  <p className="mt-[5px] text-[13px] leading-[1.6] text-[#9aa0c4]">Data-driven strategy that takes your business to its next level - and the one after.</p>
                </div>
              </div>
              <Link href="/services" className="mt-[14px] inline-block text-[13px] font-semibold text-[#00E5FF] no-underline">
                Learn More →
              </Link>
            </div>
          </Reveal>
          <Reveal className="md:col-span-2">
            <div className="h-full rounded-[18px] border border-[rgba(0,229,255,.25)] bg-[linear-gradient(160deg,rgba(0,229,255,.1),rgba(91,91,240,.06))] p-6">
              <h3 className="font-display mb-[6px] text-[18px] font-bold">Need something tailored?</h3>
              <p className="mb-4 text-[13px] text-[#9aa0c4]">Tell us where you want to go and we&apos;ll architect the exact stack of services to get you there.</p>
              <Link href="/free-audit" className="btn-cyan">
                Get a Free Audit →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function TopService({ title, text }: { title: string; text: string }) {
  return (
    <div className="svc h-full rounded-[18px] border border-white/[.07] bg-white/[.025] p-6 transition-transform">
      <span className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[linear-gradient(160deg,#2a2c66,#16183a)] text-[20px] text-[#00E5FF]">✦</span>
      <h3 className="font-display mt-4 text-[19px] font-bold">{title}</h3>
      <p className="mb-4 mt-2 text-[13px] leading-[1.65] text-[#9aa0c4]">{text}</p>
      <Link href="/services" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#00E5FF] no-underline">
        Learn More →
      </Link>
    </div>
  );
}

function SmallService({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="svc h-full rounded-[18px] border border-white/[.07] bg-white/[.025] p-6 transition-transform">
      <span className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[linear-gradient(160deg,#2a2c66,#16183a)] text-[20px]">{icon}</span>
      <h3 className="font-display my-[7px] mt-[14px] text-[17px] font-bold">{title}</h3>
      <p className="mb-[14px] text-[13px] leading-[1.6] text-[#9aa0c4]">{text}</p>
      <Link href="/services" className="text-[13px] font-semibold text-[#00E5FF] no-underline">
        Learn More →
      </Link>
    </div>
  );
}
