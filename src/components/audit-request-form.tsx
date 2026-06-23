"use client";

import { useState, type FormEvent } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";

export function AuditRequestForm() {
  const [sent, setSent] = useState(false);

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const website = String(data.get("website") || "").trim();
    const service = String(data.get("service") || "").trim();
    const challenge = String(data.get("challenge") || "").trim();
    const message = [
      "Hi SitesBrand, I would like a free growth audit.",
      `Website: ${website}`,
      `Focus: ${service}`,
      `Main challenge: ${challenge}`,
    ].join("\n");

    trackAnalyticsEvent("generate_lead", {
      form_name: "free_growth_audit",
      service_interest: service,
      contact_method: "whatsapp",
    });
    window.open(`${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form
      className="rounded-[24px] border border-[var(--lborder)] bg-[var(--lcard)] p-6 shadow-[var(--lshadow)] sm:p-8"
      onSubmit={submitRequest}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-[13px] font-semibold">
          Website or business URL
          <input
            required
            name="website"
            placeholder="https://yourwebsite.com"
            className="rounded-[12px] border border-[var(--lborder)] bg-[var(--lsurface)] px-4 py-3 text-[14px] text-[var(--ltext)] outline-none"
          />
        </label>
        <label className="grid gap-2 text-[13px] font-semibold">
          What should we focus on?
          <select
            required
            name="service"
            defaultValue=""
            className="rounded-[12px] border border-[var(--lborder)] bg-[var(--lsurface)] px-4 py-3 text-[14px] text-[var(--ltext)] outline-none"
          >
            <option value="" disabled>Select a focus area</option>
            <option>AI Search & SEO</option>
            <option>Website & Conversion</option>
            <option>Automation & Integrations</option>
            <option>Full growth system</option>
          </select>
        </label>
        <label className="grid gap-2 text-[13px] font-semibold">
          What feels stuck right now?
          <textarea
            required
            name="challenge"
            rows={4}
            placeholder="A short description is enough."
            className="resize-y rounded-[12px] border border-[var(--lborder)] bg-[var(--lsurface)] px-4 py-3 text-[14px] leading-6 text-[var(--ltext)] outline-none"
          />
        </label>
      </div>
      <button className="btn-cyan mt-6 w-full border-0 py-4" type="submit">
        Send audit request on WhatsApp →
      </button>
      <p className="mt-4 text-[11px] leading-5 text-[var(--lmuted)]">
        Submitting opens WhatsApp with your answers. Nothing is stored on this website.
      </p>
      {sent ? (
        <p role="status" className="mt-4 rounded-[10px] bg-[#e8fbf1] px-4 py-3 text-[12px] font-semibold text-[#17663d]">
          Your request is ready in WhatsApp. Send the message there to complete it.
        </p>
      ) : null}
    </form>
  );
}
