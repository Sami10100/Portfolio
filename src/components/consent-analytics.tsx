"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  analyticsGranted,
  loadGoogleAnalytics,
  trackAnalyticsEvent,
  updateGoogleConsent,
} from "@/lib/analytics";
import { loadTrustpilotInvite } from "@/lib/trustpilot";

type ConsentDetail = {
  analytics: boolean;
  marketing: boolean;
};

function getTrackedAction(anchor: HTMLAnchorElement) {
  const href = anchor.href;

  if (href.includes("calendly.com")) return ["strategy_call_click", "calendly"];
  if (href.includes("wa.me")) return ["whatsapp_click", "whatsapp"];
  if (href.includes("/contact#audit")) return ["audit_cta_click", "free_audit"];
  if (href.startsWith("mailto:")) return ["email_click", "email"];
  if (href.startsWith("tel:")) return ["phone_click", "phone"];
  if (href.includes("linkedin.com")) return ["linkedin_click", "linkedin"];
  return null;
}

export function ConsentAnalytics() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const onConsent = (event: Event) => {
      const consent = (event as CustomEvent<ConsentDetail>).detail;
      updateGoogleConsent(Boolean(consent.analytics), Boolean(consent.marketing));
      if (consent.marketing) loadTrustpilotInvite();
      if (!consent.analytics) return;
      loadGoogleAnalytics(Boolean(consent.marketing));
      trackAnalyticsEvent("page_view", {
        page_title: document.title,
        page_path: window.location.pathname,
      });
      lastPath.current = window.location.pathname;
    };

    window.addEventListener("sitesbrand:consent", onConsent);

    if (analyticsGranted()) {
      const marketingGranted = document.documentElement.dataset.marketingConsent === "granted";
      loadGoogleAnalytics(marketingGranted);
    }

    loadTrustpilotInvite();

    return () => window.removeEventListener("sitesbrand:consent", onConsent);
  }, []);

  useEffect(() => {
    if (!analyticsGranted() || lastPath.current === pathname) return;
    trackAnalyticsEvent("page_view", {
      page_title: document.title,
      page_path: pathname,
    });
    lastPath.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const action = getTrackedAction(anchor);
      if (!action) return;

      trackAnalyticsEvent(action[0], {
        link_url: anchor.href,
        link_text: anchor.textContent?.replace(/\s+/g, " ").trim(),
        contact_method: action[1],
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
