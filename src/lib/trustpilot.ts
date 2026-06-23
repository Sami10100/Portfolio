"use client";

declare global {
  interface Window {
    TrustpilotObject?: string;
    tp?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

const TRUSTPILOT_SCRIPT_ID = "sitesbrand-trustpilot-invite";
const TRUSTPILOT_INVITE_URL = "https://invitejs.trustpilot.com/tp.min.js";
const TRUSTPILOT_BUSINESS_UNIT_ID = "xJ0AXhefrEelKG5O";

function marketingGranted() {
  return document.documentElement.dataset.marketingConsent === "granted";
}

function initializeTrustpilotQueue() {
  window.TrustpilotObject = "tp";
  window.tp =
    window.tp ||
    function tp(...args: unknown[]) {
      window.tp!.q = window.tp!.q || [];
      window.tp!.q.push(args);
    };
}

export function loadTrustpilotInvite() {
  if (!marketingGranted()) return;

  initializeTrustpilotQueue();

  if (!document.getElementById(TRUSTPILOT_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = TRUSTPILOT_SCRIPT_ID;
    script.async = true;
    script.src = TRUSTPILOT_INVITE_URL;
    script.type = "text/javascript";
    document.head.appendChild(script);
  }

  if (document.documentElement.dataset.trustpilotInviteRegistered === "true") return;

  window.tp?.("register", TRUSTPILOT_BUSINESS_UNIT_ID);
  document.documentElement.dataset.trustpilotInviteRegistered = "true";
}
