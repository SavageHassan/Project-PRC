"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
  Site-wide motion, kept in one place so pages stay plain markup.
  - Scroll reveals: content blocks rise in, sibling groups stagger, photos unmask.
  - Counters: [data-count] numbers count up once when seen.
  - Parallax: [data-parallax] images drift with scroll.
  Everything is skipped under prefers-reduced-motion, and nothing is hidden
  until this script has run, so content never depends on JavaScript.
*/

const AUTO = [
  ".section-head", ".section h2.h2", ".section .lead", ".photo", ".video", ".figure", ".steps li", ".facts > div",
  ".people li", ".project", ".post-list li", ".compare", ".faq", ".panel", ".checklist li", ".downloads li",
  ".board2__card", ".row", ".path__step", ".ladder li", ".tabs", ".gallery__item",
  ".rv-feature", ".rv-side", ".explorer", ".began__copy", ".about-hero__media", ".contact-list li", ".estimator", ".prose > *", ".grid > *",
].join(",");

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const main = document.getElementById("main");
    if (!main) return;

    const found = Array.from(main.querySelectorAll<HTMLElement>(`${AUTO}, [data-reveal]`)).filter(
      (el) => !el.closest(".hero, [data-no-reveal]") && !el.classList.contains("is-in"),
    );
    const set = new Set<Element>(found);
    // Only the outermost block of a nest animates (photos may still unmask inside a rising card)
    const els = found.filter((el) => {
      if (el.classList.contains("photo") || el.classList.contains("video")) return true;
      for (let p = el.parentElement; p && p !== main; p = p.parentElement) if (set.has(p)) return false;
      return true;
    });

    // Stagger siblings that reveal together
    const groups = new Map<Element, number>();
    els.forEach((el) => {
      if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", el.classList.contains("photo") || el.classList.contains("video") ? "mask" : "up");
      const parent = el.parentElement!;
      const n = groups.get(parent) ?? 0;
      groups.set(parent, n + 1);
      el.style.setProperty("--d", `${Math.min(n, 6) * 90}ms`);
    });

    const vh = window.innerHeight;
    // A clip-path mask hides the element from IntersectionObserver, so masks are watched through their parent
    const proxies = new Map<Element, HTMLElement[]>();
    const selfWatched = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const targets = [...(proxies.get(e.target) ?? []), ...(selfWatched.has(e.target) ? [e.target as HTMLElement] : [])];
          io.unobserve(e.target);
          targets.forEach((el) => {
            el.classList.add("is-in");
            // Hand the element back to its own hover transitions once the reveal is over
            const delay = parseInt(el.style.getPropertyValue("--d") || "0", 10);
            window.setTimeout(() => el.removeAttribute("data-reveal"), 1600 + delay);
          });
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.removeAttribute("data-reveal");
      else if (el.dataset.reveal === "mask" && el.parentElement) {
        const list = proxies.get(el.parentElement) ?? [];
        list.push(el);
        proxies.set(el.parentElement, list);
        io.observe(el.parentElement);
      } else {
        selfWatched.add(el);
        io.observe(el);
      }
    });
    root.classList.add("motion-ready");

    // Counters
    const fmt = new Intl.NumberFormat("en-US");
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          cio.unobserve(el);
          const to = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? "";
          const prefix = el.dataset.prefix ?? "";
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = `${prefix}${fmt.format(Math.round(to * eased))}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 },
    );
    main.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => cio.observe(el));

    // Parallax
    const para = Array.from(main.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        para.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) return;
          const speed = Number(el.dataset.parallax) || 0.12;
          const mid = r.top + r.height / 2 - window.innerHeight / 2;
          el.style.setProperty("--py", `${(-mid * speed).toFixed(1)}px`);
        });
      });
    };
    if (para.length) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      io.disconnect();
      cio.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
