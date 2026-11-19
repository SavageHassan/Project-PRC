import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { media, type Img } from "@/lib/media";
import { org, downloads } from "@/lib/site";

type WithChildren = { children: ReactNode; className?: string };

export function Container({ children, className = "" }: WithChildren) {
  return <div className={`container ${className}`}>{children}</div>;
}

type SectionProps = WithChildren & {
  tone?: "paper" | "white" | "ink";
  tight?: boolean;
  id?: string;
  labelledBy?: string;
};
export function Section({ children, tone = "paper", tight, id, labelledBy, className = "" }: SectionProps) {
  const cls = [
    "section",
    tight ? "section--tight" : "",
    tone === "white" ? "section--white" : "",
    tone === "ink" ? "section--ink on-dark" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <section id={id} className={cls} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHead({ label, title, id, children }: { label?: string; title: ReactNode; id?: string; children?: ReactNode }) {
  return (
    <div className="section-head">
      {label ? <span className="label">{label}</span> : null}
      <h2 className="h2" id={id}>{title}</h2>
      {children ? <div className="lead muted">{children}</div> : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "light";
  size?: "sm";
  external?: boolean;
  download?: boolean;
};
export function Button({ href, children, variant = "primary", size, external, download }: ButtonProps) {
  const cls = `btn btn--${variant}${size ? " btn--sm" : ""}`;
  const isExternal = external || /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal || download) {
    return (
      <a className={cls} href={href} {...(/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
        {/^https?:/.test(href) ? <span className="visually-hidden"> (opens in a new tab)</span> : null}
      </a>
    );
  }
  return <Link className={cls} href={href}>{children}</Link>;
}

export function Photo({
  img, ratio = "4 / 3", priority, sizes = "(min-width: 960px) 50vw, 100vw", dark, className = "", contain,
}: { img: Img; ratio?: string; priority?: boolean; sizes?: string; dark?: boolean; className?: string; contain?: boolean }) {
  return (
    <div className={`photo${dark ? " photo--dark" : ""}${contain ? " photo--contain" : ""} ${className}`} style={{ aspectRatio: ratio }}>
      <Image src={media(img.path)} alt={img.alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}

export function PageHero({
  label, title, children, img, crumbs, actions, imgRatio,
}: {
  label?: string; title: ReactNode; children?: ReactNode; img?: Img; imgRatio?: string;
  crumbs?: { href: string; label: string }[]; actions?: ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="container">
        <div className={`page-hero__grid${img ? " page-hero__grid--photo" : ""}`}>
          <div className="page-hero__copy">
            {crumbs ? (
              <nav aria-label="Breadcrumb" className="breadcrumb">
                {crumbs.map((c, i) => (
                  <span key={c.href}>
                    <Link href={c.href}>{c.label}</Link>
                    {i < crumbs.length - 1 ? " / " : ""}
                  </span>
                ))}
              </nav>
            ) : null}
            {label ? <span className="label">{label}</span> : null}
            <h1 className="h1 page-hero__title">{title}</h1>
            {children ? <div className="lead stack">{children}</div> : null}
            {actions ? <div className="btn-row" style={{ marginTop: 8 }}>{actions}</div> : null}
          </div>
          {img ? <Photo img={img} ratio={imgRatio || "16 / 11"} priority className="page-hero__photo" /> : null}
        </div>
      </div>
    </header>
  );
}

export function Checklist({ items }: { items: ReactNode[] }) {
  return <ul className="checklist">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
}
export function Bullets({ items }: { items: ReactNode[] }) {
  return <ul className="bullets">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
}

export function Steps({ items, cols = 3, start = 1 }: { items: { title: string; body: ReactNode }[]; cols?: number; start?: number }) {
  return (
    <ol className="steps" style={{ ["--cols" as string]: cols }}>
      {items.map((s, i) => (
        <li key={s.title}>
          <span className="steps__n" aria-hidden="true">{String(i + start).padStart(2, "0")}</span>
          <h3>{s.title}</h3>
          <div className="stack stack--sm">{typeof s.body === "string" ? <p>{s.body}</p> : s.body}</div>
        </li>
      ))}
    </ol>
  );
}

export function Facts({ items }: { items: { term: string; detail: ReactNode }[] }) {
  return (
    <dl className="facts">
      {items.map((f) => (
        <div key={f.term}>
          <dt>{f.term}</dt>
          <dd>{f.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Figures({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="figures" style={{ ["--cols" as string]: items.length }}>
      {items.map((f) => (
        <div className="figure" key={f.label}>
          <span className="figure__value">{f.value}</span>
          <span className="figure__label">{f.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <span className="faq__icon" aria-hidden="true" />
          </summary>
          <div className="faq__body">{typeof f.a === "string" ? <p>{f.a}</p> : f.a}</div>
        </details>
      ))}
    </div>
  );
}

export function Notice({ children, tone = "warn" }: { children: ReactNode; tone?: "warn" | "info" }) {
  return <div className={`notice${tone === "info" ? " notice--info" : ""}`} role="note">{children}</div>;
}

export function ContactDetails() {
  return (
    <ul className="contact-list">
      <li><span>Call</span><a href={org.phone.href}>{org.phone.display}</a></li>
      <li><span>Email</span><a href={`mailto:${org.email}`}>{org.email}</a></li>
      <li><span>Visit</span><a href={org.address.mapUrl} target="_blank" rel="noopener noreferrer">{org.address.oneLine}<span className="visually-hidden"> (opens map in a new tab)</span></a></li>
      <li><span>Hours</span>{org.hours}</li>
    </ul>
  );
}

type DownloadKey = keyof typeof downloads;
export function Downloads({ keys }: { keys: DownloadKey[] }) {
  return (
    <ul className="downloads">
      {keys.map((k) => (
        <li key={k}>
          <a href={media(downloads[k].path)} target="_blank" rel="noopener noreferrer">
            {downloads[k].label}
            <small>PDF</small>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Stars({ count = 5, label }: { count?: number; label?: string }) {
  return (
    <span className="stars" role="img" aria-label={label || `${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 1.5l2.6 5.5 6 .8-4.4 4.1 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" /></svg>
      ))}
    </span>
  );
}

export function RoofMark({ className = "" }: { className?: string }) {
  // The roof stroke from the Project PRC logo mark (2,31.3 → 28.1,3 → 54.2,31.3), scaled.
  return (
    <svg className={className} viewBox="0 0 72 36" aria-hidden="true" focusable="false">
      <path d="M2 34 L36 3 L70 34" />
    </svg>
  );
}
