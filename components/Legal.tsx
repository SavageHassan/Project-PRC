import type { ReactNode } from "react";

export default function Legal({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <header className="page-hero">
        <div className="container stack">
          <h1 className="h1">{title}</h1>
          {updated ? <p className="muted">{updated}</p> : null}
        </div>
      </header>
      <section className="section section--white" style={{ paddingTop: "clamp(40px,5vw,72px)" }}>
        <div className="container"><div className="prose">{children}</div></div>
      </section>
    </>
  );
}
