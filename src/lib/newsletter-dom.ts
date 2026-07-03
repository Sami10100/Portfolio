"use client";

import { NEWSLETTER_ENDPOINT, normalizeNewsletterEmail, validateNewsletterEmail } from "@/lib/newsletter";
import { trackAnalyticsEvent } from "@/lib/analytics";

type CleanupRegistrar = (cleanup: () => void) => void;

type NewsletterResponse = {
  message?: string;
};

type SignupControls = {
  emailInput: HTMLInputElement;
  form?: HTMLFormElement;
  source: string;
  status: HTMLElement | null;
  submitButton: HTMLButtonElement;
};

const statusColors = {
  error: "#9f1239",
  idle: "#5b5d77",
  success: "#17663d",
};

function setStatus(element: HTMLElement | null, message: string, tone: keyof typeof statusColors) {
  if (!element) return;
  element.textContent = message;
  element.style.color = statusColors[tone];
  element.style.fontWeight = tone === "idle" ? "500" : "700";
}

function getOrCreateStatus(anchor: HTMLElement) {
  const existing = anchor.parentElement?.querySelector<HTMLElement>("[data-newsletter-status]");
  if (existing) return existing;

  const status = document.createElement("p");
  status.dataset.newsletterStatus = "";
  status.setAttribute("aria-live", "polite");
  status.setAttribute("role", "status");
  status.style.minHeight = "18px";
  status.style.margin = "8px 0 0";
  status.style.fontSize = "12px";
  status.style.lineHeight = "1.5";
  status.style.color = statusColors.idle;
  anchor.parentElement?.insertAdjacentElement("afterend", status);
  return status;
}

function bindSignupControls(controls: SignupControls, registerCleanup: CleanupRegistrar) {
  const { emailInput, form, source, status, submitButton } = controls;
  const initialButtonText = submitButton.textContent || "Subscribe";

  const onInput = () => {
    emailInput.setCustomValidity("");
    if (status?.dataset.newsletterTone === "error") setStatus(status, "", "idle");
  };

  const submit = async () => {
    const email = normalizeNewsletterEmail(emailInput.value);
    const validationError = validateNewsletterEmail(email);
    if (validationError) {
      emailInput.setCustomValidity(validationError);
      emailInput.reportValidity();
      emailInput.setCustomValidity("");
      setStatus(status, validationError, "error");
      if (status) status.dataset.newsletterTone = "error";
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    setStatus(status, "Saving your request...", "idle");
    if (status) status.dataset.newsletterTone = "idle";

    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        body: JSON.stringify({
          email,
          intent: "growth_insights",
          page: window.location.pathname,
          source,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = (await response.json().catch(() => ({}))) as NewsletterResponse;

      if (!response.ok) throw new Error(result.message || "We could not save that email. Try again in a moment.");

      if (form) form.reset();
      else emailInput.value = "";
      setStatus(status, result.message || "Thanks. You are on the list for the next growth note.", "success");
      if (status) status.dataset.newsletterTone = "success";
      trackAnalyticsEvent("generate_lead", {
        form_name: "footer_newsletter",
        lead_type: "newsletter",
      });
    } catch (error) {
      setStatus(status, error instanceof Error ? error.message : "Something went wrong. Please try again.", "error");
      if (status) status.dataset.newsletterTone = "error";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = initialButtonText;
    }
  };

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    void submit();
  };
  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    void submit();
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    void submit();
  };

  emailInput.addEventListener("input", onInput);
  if (form) form.addEventListener("submit", onSubmit);
  else {
    submitButton.addEventListener("click", onClick);
    emailInput.addEventListener("keydown", onKeyDown);
  }

  registerCleanup(() => {
    emailInput.removeEventListener("input", onInput);
    if (form) form.removeEventListener("submit", onSubmit);
    else {
      submitButton.removeEventListener("click", onClick);
      emailInput.removeEventListener("keydown", onKeyDown);
    }
  });
}

export function attachNewsletterSignup(root: ParentNode, registerCleanup: CleanupRegistrar) {
  const forms = Array.from(root.querySelectorAll<HTMLFormElement>("[data-newsletter-form]"));

  forms.forEach((form) => {
    const emailInput = form.querySelector<HTMLInputElement>("[data-newsletter-email]");
    const submitButton = form.querySelector<HTMLButtonElement>("[data-newsletter-submit]");
    const status = form.querySelector<HTMLElement>("[data-newsletter-status]");

    if (!emailInput || !submitButton) return;

    bindSignupControls({
      emailInput,
      form,
      source: form.dataset.newsletterSource || "footer_signup",
      status,
      submitButton,
    }, registerCleanup);
  });

  const looseSubmitButtons = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-newsletter-submit]")).filter(
    (button) => !button.closest("[data-newsletter-form]"),
  );

  looseSubmitButtons.forEach((submitButton) => {
    const container = submitButton.parentElement;
    const emailInput =
      container?.querySelector<HTMLInputElement>("[data-newsletter-email]") ||
      root.querySelector<HTMLInputElement>("[data-newsletter-email]");

    if (!emailInput) return;

    bindSignupControls({
      emailInput,
      source: submitButton.dataset.newsletterSource || "footer_signup",
      status: getOrCreateStatus(submitButton),
      submitButton,
    }, registerCleanup);
  });
}
