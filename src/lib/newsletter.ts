export const NEWSLETTER_ENDPOINT = "/api/newsletter";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeNewsletterEmail(value: unknown) {
  return String(value || "").trim().toLowerCase();
}

export function validateNewsletterEmail(value: string) {
  const email = normalizeNewsletterEmail(value);

  if (!email) return "Enter your email address.";
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) return "Enter a valid email address.";

  return "";
}
