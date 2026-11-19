"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode, type FormEvent } from "react";
import { hubspot, org, PREVIEW } from "@/lib/site";
import { media, type Img } from "@/lib/media";

/* ---------------- Tabs ---------------- */
export function Tabs({ tabs, label }: { label: string; tabs: { id: string; title: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();
  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };
  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { refs.current[i] = el; }}
            role="tab"
            id={`${base}-tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`${base}-panel-${t.id}`}
            tabIndex={active === i ? 0 : -1}
            className="tabs__tab"
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.title}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${base}-panel-${t.id}`}
          aria-labelledby={`${base}-tab-${t.id}`}
          hidden={active !== i}
          className="tabs__panel"
          tabIndex={0}
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}

/* ---------------- HubSpot embed (existing client forms) ---------------- */
declare global {
  interface Window {
    hbspt?: { forms: { create: (o: Record<string, unknown>) => void } };
  }
}
let hsScript: Promise<void> | null = null;
function loadHubSpot() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.hbspt) return Promise.resolve();
  if (!hsScript) {
    hsScript = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://js.hsforms.net/forms/embed/v2.js";
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("HubSpot failed to load"));
      document.head.appendChild(s);
    });
  }
  return hsScript;
}

export function HubSpotForm({ formId, title }: { formId: keyof typeof hubspot.forms; title: string }) {
  if (PREVIEW) {
    return (
      <div className="embed-preview" role="note">
        <strong>The {title.toLowerCase()} loads here on the live site.</strong>
        <span>It's the existing HubSpot form (portal {hubspot.portalId}), so every submission lands in the same HubSpot account as today. Third-party forms can't run inside this preview.</span>
      </div>
    );
  }
  return <HubSpotEmbed formId={formId} title={title} />;
}

function HubSpotEmbed({ formId, title }: { formId: keyof typeof hubspot.forms; title: string }) {
  const id = `hs-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const start = () => {
      setState("loading");
      loadHubSpot()
        .then(() => {
          if (cancelled || !window.hbspt) return;
          window.hbspt.forms.create({
            portalId: hubspot.portalId,
            formId: hubspot.forms[formId],
            region: hubspot.region,
            target: `#${id}`,
            onFormReady: () => setState("ready"),
          });
          setTimeout(() => !cancelled && setState((s) => (s === "loading" ? "ready" : s)), 4000);
        })
        .catch(() => !cancelled && setState("error"));
    };
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        start();
      }
    }, { rootMargin: "400px" });
    io.observe(el);
    return () => { cancelled = true; io.disconnect(); };
  }, [formId, id]);

  return (
    <div className="embed" aria-label={title}>
      <div id={id} ref={ref} />
      {state !== "ready" && state !== "error" ? <p className="embed__fallback small">Loading the {title.toLowerCase()}…</p> : null}
      {state === "error" ? (
        <p className="embed__fallback">
          The form couldn&apos;t load. Call <a className="text-link" href={org.phone.href}>{org.phone.display}</a> or email{" "}
          <a className="text-link" href={`mailto:${org.email}`}>{org.email}</a> and we&apos;ll help you apply.
        </p>
      ) : null}
    </div>
  );
}

/* ---------------- Native forms → /api/forms ---------------- */
export type Field =
  | { name: string; label: string; type: "text" | "email" | "tel" | "number"; required?: boolean; autoComplete?: string; hint?: string; inputMode?: "numeric" | "text" | "tel" | "email"; pattern?: string; half?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean; hint?: string }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean; half?: boolean }
  | { name: string; label: string; type: "choice"; options: string[]; required?: boolean };

export function NativeForm({ form, fields, submitLabel, successMessage }: { form: string; fields: Field[]; submitLabel: string; successMessage: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const base = useId();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { data[k] = String(v); });
    if (data.company_website) return; // honeypot
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form, page: window.location.pathname, data }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Request failed");
      setStatus("ok");
      e.currentTarget?.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Request failed");
    }
  }

  if (status === "ok") {
    return <p className="form__status form__status--ok" role="status">{successMessage}</p>;
  }

  // group half-width fields in pairs
  const rows: Field[][] = [];
  for (const f of fields) {
    const last = rows[rows.length - 1];
    const half = "half" in f && f.half;
    if (half && last && last.length === 1 && "half" in last[0] && last[0].half) last.push(f);
    else rows.push([f]);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      {rows.map((row, ri) => (
        <div className={`form__row${row.length === 2 ? " form__row--2" : ""}`} key={ri}>
          {row.map((f) => {
            const fid = `${base}-${f.name}`;
            if (f.type === "choice") {
              return (
                <fieldset className="field" key={f.name} style={{ border: 0, padding: 0, margin: 0 }}>
                  <legend>{f.label}{f.required ? "" : <span className="field__hint"> (optional)</span>}</legend>
                  <div className="choice-group">
                    {f.options.map((o, oi) => (
                      <label className="choice" key={o}>
                        <input type="radio" name={f.name} value={o} required={f.required && oi === 0} />
                        <span>{o}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              );
            }
            return (
              <div className="field" key={f.name}>
                <label htmlFor={fid}>
                  {f.label}
                  {f.required ? "" : <span className="field__hint"> (optional)</span>}
                </label>
                {f.type === "textarea" ? (
                  <textarea id={fid} name={f.name} className="input" required={f.required} />
                ) : f.type === "select" ? (
                  <select id={fid} name={f.name} className="input" required={f.required} defaultValue="">
                    <option value="" disabled>Select one</option>
                    {f.options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                ) : (
                  <input
                    id={fid}
                    name={f.name}
                    type={f.type}
                    className="input"
                    required={f.required}
                    autoComplete={f.autoComplete}
                    inputMode={f.inputMode}
                    pattern={f.pattern}
                  />
                )}
                {"hint" in f && f.hint ? <span className="field__hint">{f.hint}</span> : null}
              </div>
            );
          })}
        </div>
      ))}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label>Company website<input name="company_website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {status === "error" ? (
        <p className="form__status form__status--error" role="alert">
          Your message wasn&apos;t sent ({error}). Try again, or email {org.email}.
        </p>
      ) : null}
      <div>
        <button type="submit" className="btn btn--dark" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}

/* ---------------- Click-to-load video (keeps third-party players off the critical path) ---------------- */
export function Video({ provider, id, title }: { provider: "vimeo" | "youtube"; id: string; title: string }) {
  const [play, setPlay] = useState(false);
  if (PREVIEW) {
    const page = provider === "vimeo" ? `https://vimeo.com/${id}` : `https://www.youtube.com/watch?v=${id}`;
    return (
      <div className="video">
        <a href={page} target="_blank" rel="noopener noreferrer" className="video__link" aria-label={`${title} (opens ${provider === "vimeo" ? "Vimeo" : "YouTube"} in a new tab)`}>
          <span className="video__play">
            <svg viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="27" fill="#219CDF" /><path d="M23 18l15 10-15 10z" fill="#24272D" /></svg>
            {title}
          </span>
        </a>
      </div>
    );
  }
  const src = provider === "vimeo"
    ? `https://player.vimeo.com/video/${id}?autoplay=1&badge=0&autopause=0&dnt=1`
    : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  return (
    <div className="video">
      {play ? (
        <iframe src={src} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" />
      ) : (
        <button type="button" onClick={() => setPlay(true)} aria-label={`Play video: ${title}`}>
          <span className="video__play">
            <svg viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="27" fill="#219CDF" /><path d="M23 18l15 10-15 10z" fill="#24272D" /></svg>
            {title}
          </span>
        </button>
      )}
    </div>
  );
}

/* ---------------- Gallery + lightbox ---------------- */
export function Gallery({ images, title }: { images: Img[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <>
      <ul className="gallery" style={{ listStyle: "none" }}>
        {images.map((img, i) => (
          <li className="gallery__item" key={img.path}>
            <button
              type="button"
              className="gallery__btn"
              onClick={(e) => { lastFocus.current = e.currentTarget; setIndex(i); }}
              aria-label={`Open photo ${i + 1} of ${images.length}: ${title}`}
            >
              <span className="photo" style={{ aspectRatio: `${img.w} / ${img.h}`, display: "block" }}>
                <Image src={media(img.path)} alt="" fill sizes="(min-width: 1000px) 33vw, (min-width: 600px) 50vw, 100vw" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {index !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title}, photo ${index + 1} of ${images.length}`} onClick={(e) => e.target === e.currentTarget && close()}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={media(images[index].path)} alt={images[index].alt} />
          <button ref={closeRef} type="button" className="lightbox__close" onClick={close} aria-label="Close">×</button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous photo">‹</button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Next photo">›</button>
          <p className="lightbox__count">{index + 1} / {images.length}</p>
        </div>
      ) : null}
    </>
  );
}

/* ---------------- Eviction cost estimator (uses only figures published on the site) ---------------- */
const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function EvictionEstimator() {
  const [units, setUnits] = useState(120);
  const [evictions, setEvictions] = useState(3);
  // From /join-noc-apartments/: $3,500 one-time + $3.50/month per participating resident.
  const membershipYear1 = 3500 + 3.5 * units * 12;
  // From /network-of-communities/: evicting a tenant costs $3,500 – $10,000 per case.
  const low = evictions * 3500;
  const high = evictions * 10000;
  return (
    <div className="estimator">
      <div className="estimator__field">
        <label htmlFor="est-units">Participating residents</label>
        <div className="estimator__row">
          <input id="est-units" type="range" min={10} max={600} step={10} value={units} onChange={(e) => setUnits(+e.target.value)} />
          <output htmlFor="est-units">{units}</output>
        </div>
      </div>
      <div className="estimator__field">
        <label htmlFor="est-ev">Evictions in a typical year</label>
        <div className="estimator__row">
          <input id="est-ev" type="range" min={0} max={30} step={1} value={evictions} onChange={(e) => setEvictions(+e.target.value)} />
          <output htmlFor="est-ev">{evictions}</output>
        </div>
      </div>
      <div className="estimator__result" aria-live="polite">
        <div>
          <strong>{fmt(low)} – {fmt(high)}</strong>
          <span>What those evictions can cost each year, at $3,500 – $10,000 per case</span>
        </div>
        <div>
          <strong>{fmt(membershipYear1)}</strong>
          <span>First-year Network cost: $3,500 one-time fee plus $3.50 a month per participating resident</span>
        </div>
      </div>
      <p className="small muted">
        An illustration using the cost ranges published on this site. It isn&apos;t a quote or a guarantee of results. Ask our team for figures for your property.
      </p>
    </div>
  );
}
