"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

type MenuKey = "services" | "solutions" | "resources";

const menuData: Record<MenuKey, { label: string; href: string; badge?: string }[]> = {
  services: siteConfig.servicesMenu,
  solutions: siteConfig.solutionsMenu,
  resources: siteConfig.resourcesMenu,
};

function Dropdown({
  id,
  label,
  align = "left",
  open,
  setOpen,
}: {
  id: MenuKey;
  label: string;
  align?: "left" | "right";
  open: MenuKey | null;
  setOpen: (value: MenuKey | null) => void;
}) {
  const isOpen = open === id;

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") setOpen(null);
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(isOpen ? null : id);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(id);
      requestAnimationFrame(() => {
        document.querySelector<HTMLAnchorElement>(`#${id}-menu a`)?.focus();
      });
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(id)}
      onMouseLeave={() => setOpen(null)}
    >
      <button
        aria-controls={`${id}-menu`}
        aria-expanded={isOpen}
        className="nav-link flex cursor-pointer items-center gap-[6px] border-0 bg-transparent"
        type="button"
        onClick={() => setOpen(isOpen ? null : id)}
        onKeyDown={onKeyDown}
      >
        {label} <span className="text-[10px] opacity-60">▼</span>
      </button>
      {isOpen ? (
        <div id={`${id}-menu`} className={`nav-menu ${align === "right" ? "right-0" : "left-0"}`}>
          {menuData[id].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(null)}>
              <span className={item.badge ? "font-semibold text-[var(--ltext)]" : ""}>{item.label}</span>
              {item.badge ? <span className="ml-[6px] text-[11px] text-[#00E5FF]">{item.badge}</span> : null}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="nav-shell" style={{ boxShadow: scrolled ? "0 10px 30px -16px rgba(26,27,65,.3)" : "none" }}>
      <nav className="sb-container flex items-center gap-7 px-7 py-[14px]">
        <a href="#top" className="shrink-0 text-inherit no-underline" aria-label="SitesBrand home">
          <Logo />
        </a>

        <div className="desktop-nav ml-auto flex items-center gap-[6px]">
          <Dropdown id="services" label="Services" open={open} setOpen={setOpen} />
          <Dropdown id="solutions" label="Solutions" open={open} setOpen={setOpen} />
          <a className="nav-link" href="#cases">
            Case Studies
          </a>
          <a className="nav-link" href="#team">
            About
          </a>
          <Dropdown id="resources" label="Resources" align="right" open={open} setOpen={setOpen} />
        </div>

        <div className="desktop-nav flex shrink-0 items-center gap-[10px]">
          <a className="rounded-[12px] border border-[var(--lborder)] px-[18px] py-[11px] text-[14px] font-semibold text-[var(--ltext)] no-underline" href="#cta">
            Book a Strategy Call
          </a>
          <a className="btn-cyan px-[18px] py-[11px]" href="#cta">
            Get a Free Audit
          </a>
          <button
            aria-label="Toggle theme"
            className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[12px] border border-[var(--lborder)] bg-[var(--lchip)] text-[17px] text-[var(--ltext)]"
            type="button"
            onClick={() => setIsDark((value) => !value)}
          >
            {isDark ? "☾" : "☀"}
          </button>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          aria-label="Menu"
          className="mobile-menu-btn ml-auto hidden h-11 w-11 cursor-pointer items-center justify-center rounded-[12px] border border-[var(--lborder)] bg-[var(--lchip)] text-[20px] text-[var(--ltext)]"
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
        >
          ☰
        </button>
      </nav>

      {mobileOpen ? (
        <div id="mobile-menu" className="border-t border-[var(--lborder)] bg-[var(--lcard)] px-7 pb-[22px] pt-4">
          {siteConfig.mobileNav.map((item) => (
            <a
              key={item.label}
              className="block border-b border-[var(--lborder)] px-1 py-3 font-semibold text-[var(--ltext)] no-underline"
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="mt-4 block rounded-[12px] bg-gradient-to-br from-[#00E5FF] to-[#3ad8ff] p-[13px] text-center font-bold text-[#0a0b1e] no-underline"
            href="#cta"
            onClick={() => setMobileOpen(false)}
          >
            Get a Free Audit
          </a>
        </div>
      ) : null}
    </header>
  );
}
