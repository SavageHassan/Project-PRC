"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Door = { who: string; title: string; desc: string; href: string; go: string; secondary?: { label: string; href: string } };

const doors: Door[] = [
  {
    who: "Renter",
    title: "I'm a renter who needs assistance",
    desc: "Rental assistance and eviction avoidance for residents of Network of Communities properties.",
    href: "/join-noc-tenants/",
    go: "See if you qualify",
    secondary: { label: "Apply for assistance", href: "/rental-assistance-or-eviction-avoidance-application/" },
  },
  {
    who: "Property manager",
    title: "I'm a property manager looking to join",
    desc: "Reduce evictions, preserve occupancy, and protect your revenue.",
    href: "/join-noc-apartments/",
    go: "Join the Network",
    secondary: { label: "How the Network works", href: "/network-of-communities/" },
  },
  {
    who: "Donor",
    title: "I want to help fight homelessness",
    desc: "All donations are tax-deductible. $20 a month can help prevent utility shut off for students or families.",
    href: "/donate-now/",
    go: "Donate",
    secondary: { label: "What your gift funds", href: "/rent-subsidy-program/" },
  },
  {
    who: "Company",
    title: "My company wants to partner",
    desc: "Support student housing scholarships, rental assistance, and financial education.",
    href: "/corporate-partnerships/",
    go: "Explore partnerships",
    secondary: { label: "Talk to us", href: "/contact/" },
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M5 12h13m-5-5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Architectural elevation in the brand's roof shape. Lines draw in, then the windows light up. */
function Building() {
  const cols = [0, 1, 2, 3, 4, 5, 6];
  const floors = [0, 1, 2];
  return (
    <svg className="bp" viewBox="-150 0 840 470" role="img" aria-label="Line drawing of an apartment building">
      <g className="bp__lines">
        <path d="M40 214 L280 92 L520 214" />
        <path d="M84 192 L280 118 L476 192" className="bp__thin" />
        <rect x="80" y="214" width="400" height="216" />
        <path d="M80 286 H480 M80 358 H480" className="bp__thin" />
        <path d="M250 430 V376 H310 V430" />
        <path d="M-20 430 H580" />
      </g>
      <g className="bp__windows">
        {floors.map((f) =>
          cols.map((c) => {
            if (f === 2 && (c === 3)) return null;
            const x = 98 + c * 54;
            const y = 232 + f * 72;
            return <rect key={`${f}-${c}`} x={x} y={y} width="34" height="38" style={{ animationDelay: `${1.6 + ((f * 7 + c) % 9) * 0.12}s` }} />;
          }),
        )}
      </g>
      <g className="bp__dims">
        <path d="M80 452 V444 M480 452 V444 M80 448 H480" />
        <path d="M512 214 H504 M512 430 H504 M508 214 V430" />
      </g>
      <g className="bp__notes">
        <path d="M480 250 H540" />
        <text x="548" y="256">Student housing</text>
        <path d="M80 322 H20" />
        <text x="12" y="328" textAnchor="end">Low income housing</text>
        <path d="M480 394 H540" />
        <text x="548" y="400">Workforce housing</text>
      </g>
    </svg>
  );
}

export default function AudienceHero() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const [bar, setBar] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const place = () => {
      const t = tabs.current[active];
      if (t) setBar({ left: t.offsetLeft, width: t.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const n = doors.length;
    const next = e.key === "Home" ? 0 : e.key === "End" ? n - 1 : (active + (e.key === "ArrowRight" ? 1 : -1) + n) % n;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const d = doors[active];

  return (
    <section className="hero ahero" aria-labelledby="hero-title">
      <div className="ahero__grid" aria-hidden="true" />
      <div className="container ahero__inner">
        <div className="ahero__main">
          <h1 className="display ahero__title" id="hero-title">
            <span className="ahero__w">Affordable</span> <span className="ahero__w">housing</span> <span className="ahero__w">is</span>{" "}
            <span className="ahero__w">a</span> <span className="ahero__w">human</span> <span className="ahero__w">right.</span>
          </h1>

          <div className="ahero__switch">
            <p className="ahero__ask" id="ahero-ask">I&apos;m a</p>
            <div className="ahero__tabs" role="tablist" aria-labelledby="ahero-ask" onKeyDown={onKey}>
              {doors.map((x, i) => (
                <button
                  key={x.who}
                  ref={(el) => { tabs.current[i] = el; }}
                  type="button"
                  role="tab"
                  id={`ahero-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="ahero-panel"
                  tabIndex={i === active ? 0 : -1}
                  className="ahero__tab"
                  onClick={() => setActive(i)}
                >
                  {x.who}
                </button>
              ))}
              <span className="ahero__bar" aria-hidden="true" style={{ transform: `translateX(${bar.left}px)`, width: bar.width }} />
            </div>

            <div className="ahero__panel" role="tabpanel" id="ahero-panel" aria-labelledby={`ahero-tab-${active}`} key={active}>
              <h2 className="ahero__panel-title">{d.title}</h2>
              <p>{d.desc}</p>
              <div className="ahero__actions">
                <Link href={d.href} className="btn btn--primary">{d.go}<Arrow /></Link>
                {d.secondary ? <Link href={d.secondary.href} className="ahero__link">{d.secondary.label}</Link> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="ahero__drawing">
          <Building />
          <dl className="titleblock">
            <div><dt>Project</dt><dd>Project PRC Corporation</dd></div>
            <div><dt>Location</dt><dd>Dallas, Texas</dd></div>
            <div className="titleblock__wide">
              <dt>The need</dt>
              <dd>
                <span className="titleblock__n" data-count="7200000">7,200,000</span> affordable and available rental homes short for extremely
                low income renters, according to the National Low Income Housing Coalition.{" "}
                <Link href="/the-need-for-housing/">Read about the need</Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
