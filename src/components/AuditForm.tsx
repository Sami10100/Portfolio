"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { GeoChecklistGate } from "@/components/geo-checklist-gate";
import type { AuditFormData, AuditResult } from "@/types/audit";

const AUDIT_STEPS = [
  { id: "fetch", label: "Fetching your website…", duration: 3000 },
  { id: "seo", label: "Analysing SEO signals…", duration: 5000 },
  { id: "speed", label: "Running PageSpeed analysis…", duration: 10000 },
  { id: "design", label: "Checking design & UX heuristics…", duration: 4000 },
  { id: "aeo", label: "Evaluating AI / AEO / GEO readiness…", duration: 5000 },
  { id: "pdf", label: "Generating your PDF report…", duration: 3000 },
];

type FormState = "idle" | "loading" | "success" | "error";

function ScoreRing({ score, label }: { score: number | null; label: string }) {
  if (score === null) return null;
  const color =
    score >= 90 ? "#16b364" : score >= 50 ? "#FF6F59" : "#ef4444";
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-1">
      <svg width="88" height="88" viewBox="0 0 88 88">
        <circle cx="44" cy="44" r={r} fill="none" stroke="#dfe3ee" strokeWidth="8" />
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 44 44)"
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
        <text x="44" y="48" textAnchor="middle" fontSize="18" fontWeight="700" fill={color}>
          {score}
        </text>
      </svg>
      <span className="text-xs text-[#5b5d77] font-medium">{label}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Present: "bg-green-100 text-green-700",
    Pass: "bg-green-100 text-green-700",
    Missing: "bg-red-100 text-red-700",
    Fail: "bg-red-100 text-red-700",
    Warning: "bg-amber-100 text-amber-700",
    "Not Verified": "bg-slate-100 text-slate-500",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${map[status] ?? "bg-slate-100 text-slate-500"}`}>
      {status}
    </span>
  );
}

function SeoSection({ seo }: { seo: AuditResult["seo"] }) {
  const rows = [
    { label: "Title Tag", status: seo.title.status, detail: seo.title.value ? `"${seo.title.value.slice(0, 60)}" (${seo.title.length} chars)` : "Not found" },
    { label: "Meta Description", status: seo.metaDescription.status, detail: seo.metaDescription.value ? `${seo.metaDescription.length} chars` : "Not found" },
    { label: "H1 Tag", status: seo.h1Tags.status, detail: `${seo.h1Tags.count} found${seo.h1Tags.values[0] ? ` — "${seo.h1Tags.values[0].slice(0, 50)}"` : ""}` },
    { label: "Canonical Tag", status: seo.canonical.present ? "Present" : "Missing", detail: seo.canonical.value ?? "—" },
    { label: "Meta Robots", status: seo.metaRobots.isNoIndex ? "Fail" : (seo.metaRobots.present ? "Pass" : "Warning"), detail: seo.metaRobots.isNoIndex ? "⚠ NOINDEX detected!" : (seo.metaRobots.value ?? "Not set (defaults to index)") },
    { label: "Schema Markup", status: seo.schemaTypes.length > 0 ? "Present" : "Missing", detail: seo.schemaTypes.length > 0 ? seo.schemaTypes.join(", ") : "No JSON-LD schema found" },
    { label: "Image Alt Coverage", status: seo.imageAltCoverage.percentage >= 80 ? "Pass" : seo.imageAltCoverage.percentage >= 50 ? "Warning" : "Fail", detail: `${seo.imageAltCoverage.withAlt}/${seo.imageAltCoverage.total} images have alt text (${seo.imageAltCoverage.percentage}%)` },
    { label: "Links", status: "Pass", detail: `${seo.links.internal} internal, ${seo.links.external} external` },
  ] as { label: string; status: string; detail: string }[];

  return (
    <div>
      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">S</span>
        SEO Analysis
      </h3>
      <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
        {rows.map((r) => (
          <div key={r.label} className="flex items-start gap-3 px-4 py-2.5 bg-white">
            <StatusBadge status={r.status} />
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-slate-700">{r.label}</span>
              {r.detail && <p className="text-xs text-slate-400 truncate">{r.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpeedSection({ speed }: { speed: AuditResult["speed"] }) {
  const hasScores = speed.mobileScore !== null || speed.desktopScore !== null;
  return (
    <div>
      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-[#fff0ed] text-[#FF6F59] text-xs flex items-center justify-center font-bold">⚡</span>
        Page Speed
      </h3>
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        {hasScores ? (
          <>
            <div className="flex justify-center gap-8 mb-4">
              <ScoreRing score={speed.mobileScore} label="Mobile" />
              <ScoreRing score={speed.desktopScore} label="Desktop" />
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-sm">
              {[
                { label: "LCP", value: speed.lcp.value ? `${(speed.lcp.value / 1000).toFixed(1)}s` : "—", status: speed.lcp.status },
                { label: "CLS", value: speed.cls.value !== null ? speed.cls.value.toFixed(3) : "—", status: speed.cls.status },
                { label: "INP", value: speed.inp.value ? `${speed.inp.value}ms` : "—", status: speed.inp.status },
                { label: "FCP", value: speed.fcp.value ? `${(speed.fcp.value / 1000).toFixed(1)}s` : "—", status: speed.fcp.status },
              ].map((m) => (
                <div key={m.label} className="rounded-lg bg-slate-50 p-2">
                  <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                  <div className="font-bold text-slate-800">{m.value}</div>
                  {m.status && <StatusBadge status={m.status} />}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-sm text-slate-400 py-4">
            PageSpeed data unavailable — the Google PageSpeed API did not return results for this site.
          </p>
        )}
      </div>
    </div>
  );
}

function AeoSection({ aeo }: { aeo: AuditResult["aeo"] }) {
  return (
    <div>
      <h3 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center font-bold">AI</span>
        AEO / GEO / AI Readiness
      </h3>
      <p className="text-xs text-slate-400 mb-3">
        These are verified signals only. No fabricated AI-visibility score.
      </p>
      <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
        {aeo.checks.map((c) => (
          <div key={c.label} className="flex items-start gap-3 px-4 py-2.5 bg-white">
            <StatusBadge status={c.status} />
            <div className="flex-1">
              <span className="text-sm font-medium text-slate-700">{c.label}</span>
              {c.detail && <p className="text-xs text-slate-400">{c.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignSection({ design }: { design: AuditResult["design"] }) {
  const rows = [
    { label: "Viewport Meta Tag", status: design.viewportMeta ? "Present" : "Missing", detail: "Signals mobile-responsive layout" },
    { label: "Responsive CSS Signals", status: design.hasResponsiveClasses ? "Present" : "Not Verified", detail: "Heuristic only — not a definitive score" },
  ] as { label: string; status: string; detail: string }[];

  return (
    <div>
      <h3 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs flex items-center justify-center font-bold">D</span>
        Design / UX (Heuristic)
      </h3>
      <p className="text-xs text-slate-400 mb-3">Automated heuristics — not a visual design review.</p>
      <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
        {rows.map((r) => (
          <div key={r.label} className="flex items-start gap-3 px-4 py-2.5 bg-white">
            <StatusBadge status={r.status} />
            <div>
              <span className="text-sm font-medium text-slate-700">{r.label}</span>
              <p className="text-xs text-slate-400">{r.detail}</p>
            </div>
          </div>
        ))}
        {design.notes.length > 0 && (
          <div className="px-4 py-2.5 bg-white">
            <p className="text-xs text-slate-500 font-medium mb-1">Notes:</p>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5">
              {design.notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AuditForm() {
  const [form, setForm] = useState<AuditFormData>({ url: "", name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Partial<AuditFormData>>({});
  const [state, setState] = useState<FormState>("idle");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const stepTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const pdfBlobUrl = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      stepTimers.current.forEach(clearTimeout);
      if (pdfBlobUrl.current) URL.revokeObjectURL(pdfBlobUrl.current);
    };
  }, []);

  const fetchPdf = useCallback(async (auditData: AuditResult) => {
    setPdfLoading(true);
    try {
      const res = await fetch("/api/audit/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(auditData),
      });
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      if (pdfBlobUrl.current) URL.revokeObjectURL(pdfBlobUrl.current);
      pdfBlobUrl.current = url;
      setPdfUrl(url);
    } catch {
      // PDF is optional — audit results are still shown
    } finally {
      setPdfLoading(false);
    }
  }, []);

  function validate(): boolean {
    const e: Partial<AuditFormData> = {};
    if (!form.url.trim()) {
      e.url = "Website URL is required";
    } else {
      try {
        const u = new URL(form.url.startsWith("http") ? form.url : `https://${form.url}`);
        if (!u.hostname.includes(".")) e.url = "Enter a valid URL (e.g. https://example.com)";
      } catch {
        e.url = "Enter a valid URL (e.g. https://example.com)";
      }
    }
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function startFakeProgress() {
    let elapsed = 0;
    AUDIT_STEPS.forEach((step, idx) => {
      const t = setTimeout(() => {
        setCurrentStep(idx);
        const doneAfter = setTimeout(() => {
          setCompletedSteps((prev) => [...prev, step.id]);
        }, step.duration - 500);
        stepTimers.current.push(doneAfter);
      }, elapsed);
      stepTimers.current.push(t);
      elapsed += step.duration;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setState("loading");
    setCompletedSteps([]);
    setCurrentStep(0);
    startFakeProgress();

    const normalizedUrl = form.url.startsWith("http") ? form.url : `https://${form.url}`;

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, url: normalizedUrl }),
      });

      stepTimers.current.forEach(clearTimeout);
      stepTimers.current = [];

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Server error ${res.status}`);
      }

      const data: AuditResult = await res.json();
      setCompletedSteps(AUDIT_STEPS.map((s) => s.id));
      setResult(data);
      setState("success");
      fetchPdf(data);
    } catch (err) {
      setResult({ error: (err as Error).message } as AuditResult);
      setState("error");
    }
  }

  function reset() {
    setState("idle");
    setResult(null);
    setCompletedSteps([]);
    setCurrentStep(0);
    setPdfUrl(null);
    setPdfLoading(false);
    setForm({ url: "", name: "", email: "", phone: "" });
  }

  if (state === "loading") {
    return (
      <div className="sb-audit-loading min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00E5FF]/15 mb-4">
              <svg className="w-8 h-8 text-[#00E5FF] animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">Running Your Audit</h2>
            <p className="text-[#b6badd] text-sm">Analysing <span className="text-[#00E5FF] font-medium">{form.url}</span></p>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 mb-4">
            {/* Progress bar */}
            <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-gradient-to-r from-[#00E5FF] via-[#5B5BF0] to-[#FF6F59] rounded-full progress-animate" />
            </div>

            <div className="space-y-3 text-left">
              {AUDIT_STEPS.map((step, idx) => {
                const done = completedSteps.includes(step.id);
                const active = idx === currentStep && !done;
                return (
                  <div key={step.id} className={`flex items-center gap-3 transition-opacity ${idx > currentStep && !done ? "opacity-30" : "opacity-100"}`}>
                    <div className="w-5 h-5 flex-shrink-0">
                      {done ? (
                        <svg className="w-5 h-5 text-green-400 check-pop" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : active ? (
                        <div className="w-5 h-5 rounded-full border-2 border-[#00E5FF] border-t-transparent animate-spin" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-white/20" />
                      )}
                    </div>
                    <span className={`text-sm ${done ? "text-green-400" : active ? "text-white font-medium" : "text-slate-400"}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-[#9aa0c4] text-xs">This usually takes 15–30 seconds. Please don&apos;t close this page.</p>
        </div>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="sb-audit-error-state min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md text-center bg-white rounded-2xl shadow-sm border border-slate-100 p-10">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Audit Failed</h2>
          <p className="text-slate-500 text-sm mb-1">{result?.error ?? "An unexpected error occurred."}</p>
          <p className="text-slate-400 text-xs mb-6">This may be because the site is unreachable, blocked our crawler, or an API limit was hit.</p>
          <button
            onClick={reset}
            className="px-6 py-2.5 bg-[#1A1B41] text-white rounded-xl text-sm font-semibold hover:bg-[#252a78] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (state === "success" && result) {
    return (
      <div className="sb-audit-results min-h-screen">
        {/* Header */}
        <div className="sb-audit-success-hero py-10 px-4 text-center">
          <p className="text-[#00E5FF] text-sm font-medium mb-1">Your Free Audit Report</p>
          <h1 className="text-2xl font-bold text-white mb-1">{result.url}</h1>
          <p className="text-[#b6badd] text-xs">Generated {new Date(result.timestamp).toLocaleString()}</p>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
          {/* Download / PDF */}
          <div className={`rounded-2xl p-4 flex items-center justify-between gap-4 ${pdfUrl ? "bg-[#e9fbff] border border-[#9af4ff]" : "bg-slate-50 border border-slate-200"}`}>
            <div>
              <p className={`font-semibold text-sm ${pdfUrl ? "text-[#1A1B41]" : "text-slate-700"}`}>
                {pdfUrl ? "Your PDF report is ready" : pdfLoading ? "Generating your PDF report…" : "PDF report unavailable"}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {pdfUrl ? "Click to download your full branded PDF" : pdfLoading ? "This takes a few seconds" : "The audit data above is still complete"}
              </p>
            </div>
            {pdfUrl ? (
              <a
                href={pdfUrl}
                download={`sitesbrand-audit-${result.url.replace(/https?:\/\/(www\.)?/, "").split("/")[0]}.pdf`}
                className="flex-shrink-0 px-4 py-2 bg-[#1A1B41] text-white rounded-xl text-sm font-semibold hover:bg-[#252a78] transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download PDF
              </a>
            ) : pdfLoading ? (
              <div className="flex-shrink-0 w-6 h-6 border-2 border-[#00E5FF] border-t-transparent rounded-full animate-spin" />
            ) : null}
          </div>

          {/* Results sections */}
          <SeoSection seo={result.seo} />
          <SpeedSection speed={result.speed} />
          <DesignSection design={result.design} />
          <AeoSection aeo={result.aeo} />

          {/* CTA */}
          <div className="sb-audit-result-cta rounded-2xl p-6 text-center">
            <p className="text-white font-bold text-lg mb-1">Want a human expert to fix these issues?</p>
            <p className="text-[#b6badd] text-sm mb-4">Book a free 30-min strategy call with the SitesBrand team.</p>
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/hassamshabbir/30min"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#00E5FF] text-[#0a0b1e] rounded-xl font-semibold hover:bg-[#3ad8ff] transition-colors"
            >
              Book a Strategy Call →
            </a>
          </div>

          <div className="text-center">
            <button onClick={reset} className="text-sm text-slate-400 hover:text-slate-600 underline">
              Audit another website
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Idle — show the form
  return (
    <div className="sb-audit-page min-h-screen">
      {/* Hero */}
      <div className="sb-audit-hero pt-16 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, rgba(0,229,255,.42) 0%, transparent 44%), radial-gradient(circle at 75% 46%, rgba(255,111,89,.32) 0%, transparent 44%)" }} />
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/25 rounded-full px-4 py-1.5 text-[#00E5FF] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-pulse" />
            Free · No credit card · Instant results
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Is Your Website<br />
            <span className="text-[#00E5FF]">Holding You Back?</span>
          </h1>
          <p className="text-[#d7daf1] text-lg max-w-xl mx-auto mb-2">
            Get a comprehensive audit of your SEO, page speed, design, and AI visibility — in under 30 seconds.
          </p>
          <p className="text-[#9aa0c4] text-sm">
            Real data only. No fake scores. Delivered as a PDF to your inbox.
          </p>
        </div>
      </div>

      {/* Form card — overlapping hero */}
      <div className="max-w-xl mx-auto px-4 -mt-12 pb-16 relative z-10">
        <div className="sb-audit-form-card bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
          <h2 className="text-xl font-bold text-[#1A1B41] mb-1">Enter your website details</h2>
          <p className="text-[#5b5d77] text-sm mb-6">We&apos;ll run the audit and deliver your PDF report instantly.</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* URL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Website URL <span className="text-[#00E5FF]">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </span>
                <input
                  type="url"
                  inputMode="url"
                  placeholder="https://yourwebsite.com"
                  value={form.url}
                  onChange={(e) => { setForm((f) => ({ ...f, url: e.target.value })); setErrors((err) => ({ ...err, url: undefined })); }}
                  className={`w-full pl-9 pr-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-[#00E5FF]/20 ${errors.url ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50 focus:border-[#00E5FF]"}`}
                />
              </div>
              {errors.url && <p className="text-red-500 text-xs mt-1">{errors.url}</p>}
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((err) => ({ ...err, email: undefined })); }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-[#00E5FF]/20 ${errors.email ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50 focus:border-[#00E5FF]"}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Phone <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="sb-audit-submit w-full py-4 text-[#0a0b1e] rounded-xl font-bold text-base transition-all active:scale-[0.99] mt-2"
            >
              Get My Free Audit →
            </button>

            <p className="text-center text-xs text-slate-400">
              We respect your privacy. No spam, no sales calls unless you ask.
            </p>
          </form>
        </div>

        {/* What we check */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          {[
            { icon: "🔍", title: "SEO Signals", desc: "Title, meta, H1, schema, canonicals" },
            { icon: "⚡", title: "Page Speed", desc: "LCP, CLS, INP via PageSpeed API" },
            { icon: "📱", title: "Design / UX", desc: "Mobile readiness heuristics" },
            { icon: "🤖", title: "AEO / AI / GEO", desc: "Schema, Q&A structure, NAP" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="font-semibold text-[#1A1B41] text-sm">{item.title}</div>
              <div className="text-[#5b5d77] text-xs mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Powered by <span className="font-semibold text-[#1A1B41]">SitesBrand</span> · Real data only · No fabricated scores
        </p>

        <GeoChecklistGate />

        <section className="mt-8 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[.16em] text-[#0077ff]">GEO accountability</p>
          <h2 className="mt-2 text-xl font-bold text-[#1A1B41]">How should you vet a GEO or AI-search agency?</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-[#5b5d77]">
            <details className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <summary className="cursor-pointer font-semibold text-[#1A1B41]">What is GEO accountability?</summary>
              <p className="mt-2">GEO accountability means an agency can connect AI-search recommendations to verifiable work: crawlable content, entity clarity, structured answers, trustworthy sources, internal links, and lead or reply-rate outcomes.</p>
            </details>
            <details className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <summary className="cursor-pointer font-semibold text-[#1A1B41]">What should not count as proof?</summary>
              <p className="mt-2">Generic lines like “we optimized for AI” or “your visibility improved” do not prove anything unless they are tied to URLs, queries, source mentions, crawlable page changes, and business metrics.</p>
            </details>
            <details className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <summary className="cursor-pointer font-semibold text-[#1A1B41]">Which metric should this checklist support?</summary>
              <p className="mt-2">For this resource, the useful metric is email captures and qualified replies from outreach, not vanity views or social shares.</p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
