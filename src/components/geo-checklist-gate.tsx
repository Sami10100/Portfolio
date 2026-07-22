"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";
import { NEWSLETTER_ENDPOINT, normalizeNewsletterEmail, validateNewsletterEmail } from "@/lib/newsletter";

const CHECKLIST_DOWNLOAD = "/downloads/the-geo-accountability-checklist-sitesbrand.pdf";
const CHECKLIST_COVER = "/assets/guides/the-geo-accountability-checklist-cover.png";

type SubmissionState =
  | { tone: "idle"; message: string }
  | { tone: "error"; message: string }
  | { tone: "success"; message: string };

type NewsletterResponse = {
  message?: string;
};

const statusClassName = {
  error: "text-[#9f1239]",
  idle: "text-[#5b5d77]",
  success: "text-[#17663d]",
};

export function GeoChecklistGate() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState<SubmissionState>({ message: "", tone: "idle" });

  const submitGate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const honeypot = String(formData.get("company") || "");
    const normalizedEmail = normalizeNewsletterEmail(email);
    const validationError = validateNewsletterEmail(normalizedEmail);

    if (validationError) {
      setStatus({ message: validationError, tone: "error" });
      return;
    }

    setSubmitting(true);
    setStatus({ message: "Unlocking the checklist...", tone: "idle" });

    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        body: JSON.stringify({
          company: honeypot,
          email: normalizedEmail,
          intent: "geo_accountability_checklist",
          page: window.location.pathname,
          source: "free_audit_geo_checklist_gate",
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json().catch(() => ({}))) as NewsletterResponse;

      if (!response.ok) throw new Error(result.message || "We could not unlock the checklist. Try again in a moment.");

      setUnlocked(true);
      setStatus({
        message: "Unlocked. Download the checklist below.",
        tone: "success",
      });
      trackAnalyticsEvent("generate_lead", {
        content_name: "The GEO Accountability Checklist",
        form_name: "geo_checklist_gate",
        lead_type: "lead_magnet",
      });
    } catch (error) {
      setStatus({
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        tone: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="geo-accountability-checklist" className="mt-10 scroll-mt-24 overflow-hidden rounded-2xl border border-[#dfe5f0] bg-white shadow-[0_28px_70px_-52px_rgba(26,27,65,.5)]">
      <div className="grid gap-0 md:grid-cols-[.95fr_1.05fr]">
        <div className="bg-[radial-gradient(circle_at_50%_12%,rgba(0,229,255,.18),transparent_42%),linear-gradient(180deg,#102f3d_0%,#0a1424_100%)] p-6 md:p-8">
          <Image
            alt="Cover of The GEO Accountability Checklist by SitesBrand"
            className="mx-auto h-auto w-full max-w-[245px] rounded-[12px] shadow-[0_24px_70px_-38px_rgba(0,0,0,.9)]"
            height={842}
            priority={false}
            src={CHECKLIST_COVER}
            width={595}
          />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[.16em] text-[#0077ff]">Free buyer checklist</p>
          <h2 className="mt-3 text-[clamp(26px,4vw,38px)] font-extrabold leading-[1.05] text-[#1A1B41]">
            The GEO Accountability Checklist
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#5b5d77]">
            Use this 22-page checklist before hiring an SEO, AEO, or GEO agency. It helps you separate measurable AI-search work from vanity reporting.
          </p>
          <div className="mt-5 grid gap-2 text-[14px] text-[#2f3354]">
            {["Questions to ask before buying GEO services", "The vanity lines that sound useful but prove little", "Reporting standards that connect AI visibility to real outcomes"].map((item) => (
              <div key={item} className="flex gap-2">
                <span className="mt-[3px] grid h-5 w-5 flex-none place-items-center rounded-full bg-[#e9fbff] text-[12px] font-black text-[#0077ff]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {unlocked ? (
            <a
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-[12px] bg-gradient-to-r from-[#00e5ff] to-[#35d4ff] px-6 text-[14px] font-black text-[#070819] no-underline shadow-[0_18px_38px_-18px_rgba(0,229,255,.8)] transition hover:-translate-y-0.5"
              download
              href={CHECKLIST_DOWNLOAD}
            >
              Download the Checklist
            </a>
          ) : (
            <form className="mt-6 grid gap-3" noValidate onSubmit={submitGate}>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="sr-only" htmlFor="geo-checklist-email">
                  Work email
                </label>
                <input
                  id="geo-checklist-email"
                  autoComplete="email"
                  className="min-h-12 rounded-[12px] border border-[#d8e0ec] bg-[#f8fafd] px-4 text-[14px] text-[#1a1b41] outline-none focus:border-[#00b7d6] focus:ring-2 focus:ring-[#00e5ff]/20"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (status.tone === "error") setStatus({ message: "", tone: "idle" });
                  }}
                  placeholder="Work email"
                  type="email"
                  value={email}
                />
                <input className="hidden" name="company" tabIndex={-1} type="text" autoComplete="off" />
                <button
                  className="min-h-12 rounded-[12px] bg-[#1A1B41] px-5 text-[14px] font-black text-white transition hover:bg-[#252a78] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={submitting}
                  type="submit"
                >
                  {submitting ? "Unlocking..." : "Get the PDF"}
                </button>
              </div>
            </form>
          )}
          <p aria-live="polite" className={`mt-3 min-h-[20px] text-[13px] leading-6 ${statusClassName[status.tone]}`}>
            {status.message || "No spam. Use it to vet agencies, then run the free audit when you want site-specific priorities."}
          </p>
        </div>
      </div>
    </section>
  );
}
