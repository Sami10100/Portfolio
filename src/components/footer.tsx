import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-[rgba(26,27,65,.08)] bg-[#F4F5F6] px-7 pb-8 pt-[52px] text-[#1A1B41]">
      <div className="sb-container">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.5fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[280px] text-[13px] leading-[1.7] text-[#5b5d77]">
              SitesBrand builds psychology-led, design-forward, AI-powered growth systems for ambitious brands.
            </p>
          </div>

          <FooterColumn title="Services" links={siteConfig.footer.services} href="#services" />
          <FooterColumn title="Company" links={siteConfig.footer.company} href="#team" />
          <FooterColumn title="Resources" links={siteConfig.footer.resources} href="#footer" />

          <div>
            <h3 className="font-display mb-3 text-[14px] font-bold">Stay Ahead of the Curve</h3>
            <p className="mb-4 text-[12.5px] leading-[1.6] text-[#5b5d77]">Get growth insights, AI search tips, and conversion strategies.</p>
            <form className="flex overflow-hidden rounded-[12px] border border-[rgba(26,27,65,.12)] bg-white">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input id="newsletter-email" className="min-w-0 flex-1 border-0 bg-transparent px-[14px] py-[11px] text-[13px] text-[#1A1B41] outline-0" placeholder="Enter your email" type="email" />
              <button className="border-0 bg-[#1A1B41] px-4 py-[11px] text-[13px] font-semibold text-white" type="button">
                Subscribe
              </button>
            </form>
            <div className="mt-4 flex gap-[10px]">
              {["LinkedIn", "X / Twitter", "Facebook", "TikTok"].map((label) => (
                <a key={label} aria-label={label} className="footer-social flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(26,27,65,.14)] bg-white text-[#1A1B41] no-underline" href="#">
                  {label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(26,27,65,.08)] pt-5">
          <p className="m-0 text-[13px] text-[#5b5d77]">© 2026 SitesBrand. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <a key={label} className="text-[13px] text-[#5b5d77] no-underline" href="#">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, href }: { title: string; links: string[]; href: string }) {
  return (
    <div>
      <h3 className="font-display mb-3 text-[14px] font-bold">{title}</h3>
      <div className="grid gap-[10px]">
        {links.map((link) => (
          <a key={link} className="text-[13px] text-[#5b5d77] no-underline" href={href}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
