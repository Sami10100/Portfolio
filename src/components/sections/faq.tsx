"use client";

import { useState } from "react";
import { faqs } from "@/config/site";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white px-7 py-20 text-[#1A1B41]">
      <Container>
        <Reveal className="mx-auto max-w-[680px] text-center">
          <span className="eyebrow text-[#FF6F59]">✦ Questions</span>
          <h2 className="section-title mt-[18px] text-[48px]">
            Frequently Asked Questions<span className="text-[#00E5FF]">.</span>
          </h2>
        </Reveal>

        <div className="mt-11 flex flex-col gap-[14px]">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <Reveal key={question}>
                <div className="overflow-hidden rounded-[18px] border bg-[var(--lcard)] shadow-[var(--lshadow)]" style={{ borderColor: isOpen ? "rgba(0,229,255,.4)" : "var(--lborder)" }}>
                  <button
                    aria-controls={`faq-panel-${index}`}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-[26px] py-[22px] text-left text-[var(--ltext)]"
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="font-display text-[17px] font-semibold">{question}</span>
                    <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[var(--lchip)] text-[18px] text-[#00bcd4]">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div id={`faq-panel-${index}`} className="overflow-hidden transition-[max-height] duration-300" style={{ maxHeight: isOpen ? 220 : 0 }}>
                    <p className="m-0 px-[26px] pb-6 text-[14.5px] leading-[1.7] text-[var(--lmuted)]">{answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
