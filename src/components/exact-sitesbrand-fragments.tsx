"use client";

import { useEffect, useMemo, useRef } from "react";
import { exactExportCss, exactStabilityCss, getExactSitesBrandHtml } from "@/components/exact-sitesbrand";

type ExactFragmentPart = "nav" | "team" | "cta" | "footer";

const marker = {
  nav: "<!-- ===== NAV ===== -->",
  team: "<!-- ===== 5. TEAM (light) ===== -->",
  caseStudies: "<!-- ===== 6. CASE STUDIES (light) ===== -->",
  cta: "<!-- ===== 9. HERO / FINAL CTA (light) ===== -->",
  footer: "<!-- ===== FOOTER ===== -->",
};

function getFragment(part: ExactFragmentPart) {
  const html = getExactSitesBrandHtml();

  if (part === "nav") {
    const start = html.indexOf(marker.nav);
    const end = html.indexOf("<a id=\"top\"></a>");
    return html.slice(start, end);
  }

  if (part === "team") {
    const start = html.indexOf(marker.team);
    const end = html.indexOf(marker.caseStudies);
    return html.slice(start, end);
  }

  if (part === "cta") {
    const start = html.indexOf(marker.cta);
    const end = html.indexOf(marker.footer);
    return html.slice(start, end);
  }

  const start = html.indexOf(marker.footer);
  const end = html.lastIndexOf("\n</div>");
  return html.slice(start, end);
}

export function ExactSitesBrandFragment({ part }: { part: ExactFragmentPart }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const html = useMemo(() => getFragment(part), [part]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanup: Array<() => void> = [];
    const addEl = (target: Element, type: string, handler: EventListener) => {
      target.addEventListener(type, handler);
      cleanup.push(() => target.removeEventListener(type, handler));
    };

    root.querySelectorAll<HTMLElement>("[data-menu-container]").forEach((container) => {
      const button = container.querySelector("button");
      const panel = container.querySelector<HTMLElement>("[data-menu-panel]");
      if (!button || !panel) return;

      const open = () => {
        panel.style.display = "block";
      };
      const close = () => {
        panel.style.display = "none";
      };

      addEl(container, "mouseenter", open);
      addEl(container, "mouseleave", close);
      addEl(button, "focus", open);
      addEl(button, "click", ((event: Event) => {
        event.preventDefault();
        panel.style.display = panel.style.display === "block" ? "none" : "block";
      }) as EventListener);
    });

    const mobileButton = root.querySelector<HTMLElement>("[data-toggle-mobile]");
    const mobileMenu = root.querySelector<HTMLElement>("[data-mobile-menu]");
    if (mobileButton && mobileMenu) {
      const toggleMobile = () => {
        const open = mobileMenu.style.display !== "block";
        mobileMenu.style.display = open ? "block" : "none";
        mobileButton.setAttribute("aria-expanded", String(open));
      };
      addEl(mobileButton, "click", toggleMobile as EventListener);
      root.querySelectorAll("[data-close-mobile]").forEach((link) => {
        addEl(link, "click", (() => {
          mobileMenu.style.display = "none";
          mobileButton.setAttribute("aria-expanded", "false");
        }) as EventListener);
      });
    }

    const themeButton = root.querySelector<HTMLElement>("[data-toggle-theme]");
    if (themeButton) {
      const toggleTheme = () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
      };
      addEl(themeButton, "click", toggleTheme as EventListener);
    }

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return (
    <div ref={rootRef} className="exact-fragment">
      <style>{`${exactExportCss}\n${exactStabilityCss}`}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
