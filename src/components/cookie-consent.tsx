"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentState = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "sitesbrand-consent-v1";

function publishConsent(consent: ConsentState) {
  document.documentElement.dataset.analyticsConsent = consent.analytics ? "granted" : "denied";
  document.documentElement.dataset.marketingConsent = consent.marketing ? "granted" : "denied";
  window.dispatchEvent(new CustomEvent("sitesbrand:consent", { detail: consent }));
}

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const initialize = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as ConsentState;
          setAnalytics(Boolean(parsed.analytics));
          setMarketing(Boolean(parsed.marketing));
          publishConsent({
            essential: true,
            analytics: Boolean(parsed.analytics),
            marketing: Boolean(parsed.marketing),
            updatedAt: parsed.updatedAt,
          });
        } else {
          setShowBanner(true);
          publishConsent({
            essential: true,
            analytics: false,
            marketing: false,
            updatedAt: new Date().toISOString(),
          });
        }
      } catch {
        setShowBanner(true);
      } finally {
        setReady(true);
      }
    }, 0);

    return () => window.clearTimeout(initialize);
  }, []);

  const save = (nextAnalytics: boolean, nextMarketing: boolean) => {
    const consent: ConsentState = {
      essential: true,
      analytics: nextAnalytics,
      marketing: nextMarketing,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    setShowBanner(false);
    setShowPreferences(false);
    publishConsent(consent);
  };

  if (!ready) return null;

  return (
    <>
      {showBanner ? (
        <section className="cookie-banner" aria-label="Cookie consent" aria-live="polite">
          <div>
            <p>YOUR PRIVACY CHOICE</p>
            <h2>Cookies, without the mystery.</h2>
            <span>
              Essential storage keeps the site secure and remembers your choice. Optional
              analytics and marketing are currently inactive and stay off unless you allow them.{" "}
              <Link href="/legal/cookies">Read the Cookie Policy</Link>.
            </span>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => save(false, false)}>
              Essential only
            </button>
            <button type="button" onClick={() => setShowPreferences(true)}>
              Choose preferences
            </button>
            <button type="button" onClick={() => save(true, true)}>
              Allow optional
            </button>
          </div>
        </section>
      ) : (
        <button
          type="button"
          className="cookie-reopen"
          onClick={() => setShowPreferences(true)}
          aria-label="Open cookie preferences"
        >
          Cookie preferences
        </button>
      )}

      {showPreferences ? (
        <div className="cookie-modal-backdrop" role="presentation">
          <section
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
          >
            <button
              className="cookie-close"
              type="button"
              aria-label="Close cookie preferences"
              onClick={() => setShowPreferences(false)}
            >
              ×
            </button>
            <p>PRIVACY CONTROLS</p>
            <h2 id="cookie-preferences-title">Choose what this site may use.</h2>
            <div className="cookie-option">
              <div>
                <strong>Essential</strong>
                <span>Security, page delivery, and remembering this preference.</span>
              </div>
              <input aria-label="Essential cookies always enabled" type="checkbox" checked disabled />
            </div>
            <label className="cookie-option">
              <div>
                <strong>Analytics</strong>
                <span>Aggregated measurement if analytics is introduced later.</span>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
            </label>
            <label className="cookie-option">
              <div>
                <strong>Marketing</strong>
                <span>Advertising or cross-site measurement if introduced later.</span>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
              />
            </label>
            <div className="cookie-modal-actions">
              <button type="button" onClick={() => save(false, false)}>
                Use essential only
              </button>
              <button type="button" onClick={() => save(analytics, marketing)}>
                Save preferences
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
