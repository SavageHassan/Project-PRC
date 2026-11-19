"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* The seven Google reviews shown by the live site's Trustindex widget, newest first. */
const reviews = [
  { name: "Desayn C", date: "September 2, 2025", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXzntfdV5TmFXoS0l9WanuGk6U76UtChJYHkzql_XSJdWyNmSvp=w80-h80-c-rp-mo-br100", text: "I worked with PRC on projects through Upwork and it was a really great experience. Communication was clear, the process went smoothly, and everything felt easy to collaborate on. Reccomended!" },
  { name: "Solomon g", date: "August 26, 2025", avatar: "https://lh3.googleusercontent.com/a/ACg8ocKpsNT9eQlLp65wbPmuegizQZYtZBRbCCZX_IZe6mEY0vfZoQ=w80-h80-c-rp-mo-br100", text: "" },
  { name: "Carlos H", date: "August 26, 2025", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVHdEaQSd7evx8EF54Njuf7KrdXAYlbWXNr8giZ_qBET4qe5rJuvw=w80-h80-c-rp-mo-br100", text: "Fantastic folks who are dedicated to making things better." },
  { name: "Hcj", date: "August 26, 2025", avatar: "https://lh3.googleusercontent.com/a/ACg8ocKSKkYHnjoO7uQ7ESxDlF9kCipH4eTLYYe8Ymuuzdpfkxiu1g=w80-h80-c-rp-mo-br100", text: "I truly admire Project PRC’s commitment to building affordable housing and revitalizing neighborhoods. Their partnerships with schools and local organizations show a real dedication to long-term solutions. They are making a lasting difference." },
  { name: "Georgi D", date: "August 26, 2025", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXofFx9HNda9poGXECB3vyJDsdbyXPshMTP-yy71899Iq0ShQw=w80-h80-c-rp-mo-br100", text: "I worked with PRC on a couple of projects and they were always professional and friendly throughout. I would happily collaborate again in the future. Highly recommend!" },
  { name: "Teresa T", date: "July 17, 2025", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVaM-h9uowtYQTB7beEwg33Vr5lYRIgqrK09WhHBJAKufAFZec=w80-h80-c-rp-mo-ba2-br100", text: "They are doing good work!" },
  { name: "Linda R", date: "January 30, 2023", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVU2yt6d4Z997dAftu6mtLIefLJ4zoAHXZpw1TEfQjZl6DQ25a6=w80-h80-c-rp-mo-br100", text: "When looking to align our mutual interests, connecting with the non-profit organization, PROJECT PRC Corp, we find ourselves happily jumping up and down, as we applaud their vision in making the world a better place, committing to building affordable housing for local communities. Kudos!" },
];

const GOOGLE_PROFILE = "https://www.google.com/search?q=Project+PRC+Corporation+Dallas+reviews";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function GoldStars({ size = 18 }: { size?: number }) {
  return (
    <span className="gstars" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" aria-hidden="true"><path fill="#F6BB06" d="M10 1.5l2.6 5.5 6 .8-4.4 4.1 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" /></svg>
      ))}
    </span>
  );
}

function Card({ r }: { r: (typeof reviews)[number] }) {
  const [open, setOpen] = useState(false);
  const long = r.text.length > 140;
  const [failed, setFailed] = useState(false);
  return (
    <article className="rcard">
      <header className="rcard__head">
        {failed ? (
          <span className="rcard__initial" aria-hidden="true">{r.name[0]}</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="rcard__avatar" src={r.avatar} alt="" width={40} height={40} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
        )}
        <span className="rcard__who">
          <strong>{r.name}</strong>
          <span>{r.date}</span>
        </span>
        <GoogleG className="rcard__g" />
      </header>
      <div className="rcard__rating">
        <GoldStars />
        <svg className="rcard__verified" viewBox="0 0 24 24" role="img" aria-label="Verified review"><circle cx="12" cy="12" r="11" fill="#229CE0" /><path d="M7 12.5l3.2 3L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      {r.text ? (
        <>
          <p className={`rcard__text${long && !open ? " rcard__text--clamp" : ""}`}>{r.text}</p>
          {long ? (
            <button type="button" className="rcard__more" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? "Hide" : "Read more"}
            </button>
          ) : null}
        </>
      ) : (
        <p className="rcard__text rcard__text--empty">Rated Project PRC 5 stars on Google.</p>
      )}
    </article>
  );
}

export default function ReviewsSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const paused = useRef(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth > el.scrollWidth - 8);
  }, []);

  const go = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".rcard");
    const step = card ? card.offsetWidth + 20 : el.clientWidth;
    if (dir === 1 && el.scrollLeft + el.clientWidth > el.scrollWidth - 8) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    update();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setInterval(() => { if (!paused.current && document.visibilityState === "visible") go(1); }, 5500);
    return () => window.clearInterval(t);
  }, [go, update]);

  return (
    <div className="greviews">
      <div className="greviews__summary">
        <strong className="greviews__excellent">Excellent</strong>
        <GoldStars size={30} />
        <span className="greviews__based">Based on <strong>7 reviews</strong></span>
        <a className="greviews__google" href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer" aria-label="Read Project PRC reviews on Google (opens in a new tab)">
          <svg viewBox="0 0 272 92" aria-hidden="true"><text x="0" y="72" fontFamily="Arial, Helvetica, sans-serif" fontSize="84" fontWeight="500"><tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan></text></svg>
        </a>
      </div>
      <div
        className="greviews__viewport"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onFocus={() => (paused.current = true)}
        onBlur={() => (paused.current = false)}
      >
        <button type="button" className="greviews__nav greviews__nav--prev" onClick={() => go(-1)} disabled={atStart} aria-label="Previous reviews">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="greviews__track" ref={track} onScroll={update} role="region" aria-label="Google reviews" tabIndex={0}>
          {reviews.map((r) => <Card key={r.name} r={r} />)}
        </div>
        <button type="button" className="greviews__nav greviews__nav--next" onClick={() => go(1)} aria-label={atEnd ? "Back to first review" : "Next reviews"}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
