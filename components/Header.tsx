"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, org } from "@/lib/site";

function Chevron() {
  return (
    <svg className="site-nav__chev" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showGive, setShowGive] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setShowGive(window.scrollY > 640);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const hoverOpen = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (window.matchMedia("(hover: hover)").matches) setOpen(i);
  };
  const hoverClose = () => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  };

  const onDonatePage = pathname?.startsWith("/donate");

  return (
    <>
      <header className="site-header" data-scrolled={scrolled}>
        <div className="container site-header__bar">
          <Link href="/" className="site-header__logo" aria-label="Project PRC home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Project PRC" width={203} height={40} />
          </Link>

          <nav className="site-nav" aria-label="Main" ref={navRef}>
            <ul className="site-nav__list">
              {nav.map((group, i) => (
                <li className="site-nav__item" key={group.label} onMouseEnter={() => hoverOpen(i)} onMouseLeave={hoverClose}>
                  <button
                    type="button"
                    className="site-nav__trigger"
                    aria-expanded={open === i}
                    aria-controls={`nav-panel-${i}`}
                    onClick={() => {
                      // with a mouse, hovering already opened it: a click keeps it open instead of closing it
                      const mouse = window.matchMedia("(hover: hover)").matches;
                      setOpen(mouse ? i : open === i ? null : i);
                    }}
                  >
                    {group.label}
                    <Chevron />
                  </button>
                  <ul className="site-nav__panel" id={`nav-panel-${i}`} data-open={open === i}>
                    {group.items.map((item) => (
                      <li key={item.href}>
                        {item.external ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" tabIndex={open === i ? 0 : -1}>
                            <strong>{item.label}</strong>
                            {item.description ? <span>{item.description}</span> : <span>Opens our Printify store</span>}
                          </a>
                        ) : (
                          <Link href={item.href} tabIndex={open === i ? 0 : -1} aria-current={pathname === item.href ? "page" : undefined}>
                            <strong>{item.label}</strong>
                            {item.description ? <span>{item.description}</span> : null}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <Link href="/contact/" className="site-nav__link" aria-current={pathname === "/contact/" ? "page" : undefined}>Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="site-header__actions">
            <Link href="/donate-now/" className="btn btn--primary btn--sm">Donate</Link>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="menu-toggle__bars" aria-hidden="true"><span /><span /><span /></span>
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-nav" className="mobile-nav" data-open={mobileOpen} aria-hidden={!mobileOpen} inert={!mobileOpen ? true : undefined}>
        <nav aria-label="Mobile">
          {nav.map((group) => (
            <details key={group.label}>
              <summary>{group.label}</summary>
              <ul>
                {group.items.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
                    ) : (
                      <Link href={item.href}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <Link href="/contact/" className="mobile-nav__plain">Contact</Link>
        </nav>
        <p className="mobile-nav__contact">
          <a href={org.phone.href}>{org.phone.display}</a> · <a href={`mailto:${org.email}`}>{org.email}</a>
        </p>
      </div>

      {!onDonatePage ? (
        <div className="mobile-give" data-show={showGive && !mobileOpen} aria-hidden={!showGive}>
          <Link href="/donate-now/" className="btn btn--primary" tabIndex={showGive ? 0 : -1}>Donate</Link>
          <Link href="/join-noc-tenants/" className="btn btn--outline" tabIndex={showGive ? 0 : -1}>Get help with rent</Link>
        </div>
      ) : null}
    </>
  );
}
