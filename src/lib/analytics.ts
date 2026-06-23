"use client";

export type AnalyticsEventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const SCRIPT_ID = "sitesbrand-google-analytics";

export function analyticsGranted() {
  return document.documentElement.dataset.analyticsConsent === "granted";
}

function initializeDataLayer() {
  window.dataLayer = window.dataLayer || [];
  document.documentElement.dataset.analyticsReady = "true";
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
}

export function updateGoogleConsent(analytics: boolean, marketing: boolean) {
  initializeDataLayer();
  window.gtag?.("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag?.("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}

export function loadGoogleAnalytics(marketingGranted: boolean) {
  if (!analyticsGranted()) return;
  updateGoogleConsent(true, marketingGranted);
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;

  if (GTM_ID) {
    window.dataLayer?.push({
      "gtm.start": Date.now(),
      event: "gtm.js",
    });
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  } else if (GA_ID) {
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
    window.gtag?.("js", new Date());
    window.gtag?.("config", GA_ID, { send_page_view: false });
  } else {
    document.documentElement.dataset.analyticsConfigured = "missing-id";
    return;
  }

  document.head.appendChild(script);
}

export function trackAnalyticsEvent(name: string, parameters: AnalyticsEventParameters = {}) {
  if (!analyticsGranted()) return;
  initializeDataLayer();
  document.documentElement.dataset.lastAnalyticsEvent = name;

  const payload = {
    event: name,
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...parameters,
  };

  if (GTM_ID || !GA_ID) window.dataLayer?.push(payload);
  if (GA_ID && !GTM_ID) window.gtag?.("event", name, parameters);
}
