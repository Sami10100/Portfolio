"use client";

import { useMemo, useState } from "react";
import { testimonials } from "@/config/site";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { MiniStats } from "./services-built";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const maxIndex = 1;
  const dots = useMemo(() => Array.from({ length: maxIndex + 1 }, (_, i) => i), []);

  return (
    <section className="bg-[radial-gradient(120%_90%_at_80%_0%,#101238_0%,#070819_70%)] px-7 py-20 text-white">
      <Container>
        <div className="grid gap-9 lg:grid-cols-[.62fr_1.38fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[.14] px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#00E5FF]">
              <span className="text-[#FF6F59]">✦</span> Proof That Performs
            </span>
            <h2 className="section-title mt-[18px] text-[58px] leading-[1.02]">
              Proof &
              <br />
              Testimonials<span className="text-[#FF6F59]">.</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-[#9aa0c4]">
              Real results. Real partners. Real growth. See how ambitious brands trust SitesBrand to build, optimize, and scale with confidence.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="font-display text-[28px] font-extrabold">
                4.9<span className="text-[14px] text-[#9aa0c4]">/5</span>
              </div>
              <div className="h-[52px] w-[52px] rounded-full border-[6px] border-[#00E5FF] bg-white/[.04]" />
              <div className="text-center text-[8px] leading-[1.3] text-[#9aa0c4]">
                Would
                <br />
                recommend
              </div>
            </div>
          </Reveal>

          <Reveal className="relative overflow-hidden">
            <div className="flex gap-5 transition-transform duration-500" style={{ transform: `translateX(-${index * 33.33}%)` }}>
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className={`tcard flex min-h-[300px] flex-[0_0_calc(33.33%-11px)] flex-col items-center rounded-[20px] p-[26px_20px] text-center md:flex-[0_0_calc(33.33%-11px)] ${
                    item.featured
                      ? "border-[1.5px] border-[rgba(0,229,255,.45)] bg-[rgba(14,18,56,.85)] shadow-[0_0_36px_-8px_rgba(0,229,255,.3)]"
                      : "border border-white/[.1] bg-white/[.04]"
                  }`}
                >
                  <div className={`flex rounded-full ${item.featured ? "h-[50px] w-[50px] bg-[#00E5FF] text-[#0a0b1e]" : "h-[46px] w-[46px] bg-[#5b5bf0] text-white"} items-center justify-center text-[28px] leading-none`}>
                    “
                  </div>
                  <p className={`my-4 flex-1 text-[13.5px] leading-[1.65] ${item.featured ? "text-white" : "text-[#dfe2f4]"}`}>{item.quote}</p>
                  <div className="flex items-center gap-[10px]">
                    <div className="h-[34px] w-[34px] rounded-full bg-[linear-gradient(135deg,#00E5FF,#5b5bf0)]" />
                    <div className="text-left">
                      <b className="text-[13px]">{item.name}</b>
                      <div className="text-[11px] text-[#9aa0c4]">{item.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2">
                {dots.map((dot) => (
                  <button
                    key={dot}
                    aria-label={`Show testimonial set ${dot + 1}`}
                    aria-pressed={index === dot}
                    className="h-[9px] w-[9px] rounded-full"
                    style={{ background: index === dot ? "#00E5FF" : "rgba(255,255,255,.25)", boxShadow: index === dot ? "0 0 10px rgba(0,229,255,.6)" : "none" }}
                    type="button"
                    onClick={() => setIndex(dot)}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[.2] bg-white/[.04] text-[18px] text-white" type="button" onClick={() => setIndex((value) => Math.max(0, value - 1))}>
                  ‹
                </button>
                <button aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[rgba(0,229,255,.5)] bg-[rgba(0,229,255,.08)] text-[18px] text-[#00E5FF]" type="button" onClick={() => setIndex((value) => Math.min(maxIndex, value + 1))}>
                  ›
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-[18px] border border-white/[.08] bg-white/[.02]">
          <MiniStats />
        </Reveal>
      </Container>
    </section>
  );
}
