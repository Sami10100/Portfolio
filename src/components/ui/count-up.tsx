"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function CountUp({ value, suffix = "", className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const decimals = Number.isInteger(value) ? 0 : 1;

      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / 1400);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay((value * eased).toFixed(decimals));
        if (progress < 1) frame = requestAnimationFrame(step);
      };

      frame = requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
