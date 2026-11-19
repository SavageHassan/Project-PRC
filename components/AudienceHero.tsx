"use client";

import Image from "next/image";
import Link from "next/link";
import { images, media } from "@/lib/media";
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
    document.fonts?.ready.then(place);
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
      <div className="ahero__photo" aria-hidden="true">
        <Image src={media(images.impact.path)} alt="" fill priority sizes="(min-width: 900px) 58vw, 100vw" />
      </div>
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

        <div className="ahero__side">
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
