"use client";

import { useState, type FormEvent } from "react";
import { NEWSLETTER_ENDPOINT, normalizeNewsletterEmail, validateNewsletterEmail } from "@/lib/newsletter";
import { trackAnalyticsEvent } from "@/lib/analytics";

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

export function NewsletterSignupForm() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionState>({ message: "", tone: "idle" });

  const submitSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = String(formData.get("company") || "");
    const normalizedEmail = normalizeNewsletterEmail(email);
    const validationError = validateNewsletterEmail(normalizedEmail);

    if (validationError) {
      setStatus({ message: validationError, tone: "error" });
      return;
    }

    setSubmitting(true);
    setStatus({ message: "Saving your request...", tone: "idle" });

    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        body: JSON.stringify({
          company: honeypot,
          email: normalizedEmail,
          intent: "growth_insights",
          page: window.location.pathname,
          source: "footer_signup",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = (await response.json().catch(() => ({}))) as NewsletterResponse;

      if (!response.ok) throw new Error(result.message || "We could not save that email. Try again in a moment.");

      setEmail("");
      setStatus({
        message: result.message || "Thanks. You are on the list for the next growth note.",
        tone: "success",
      });
      trackAnalyticsEvent("generate_lead", {
        form_name: "footer_newsletter",
        lead_type: "newsletter",
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
    <form className="grid gap-2" noValidate onSubmit={submitSignup}>
      <div className="flex overflow-hidden rounded-[12px] border border-[rgba(26,27,65,.12)] bg-white">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          autoComplete="email"
          className="min-w-0 flex-1 border-0 bg-transparent px-[14px] py-[11px] text-[13px] text-[#1A1B41] outline-0"
          onChange={(event) => {
            setEmail(event.target.value);
            if (status.tone === "error") setStatus({ message: "", tone: "idle" });
          }}
          placeholder="Enter your email"
          type="email"
          value={email}
        />
        <input className="hidden" name="company" tabIndex={-1} type="text" autoComplete="off" />
        <button
          className="border-0 bg-[#1A1B41] px-4 py-[11px] text-[13px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          disabled={submitting}
          type="submit"
        >
          {submitting ? "Sending..." : "Subscribe"}
        </button>
      </div>
      <p aria-live="polite" className={`min-h-[18px] text-[12px] leading-[1.5] ${statusClassName[status.tone]}`}>
        {status.message}
      </p>
    </form>
  );
}
