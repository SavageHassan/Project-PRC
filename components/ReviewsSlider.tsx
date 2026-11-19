"use client";

import { useEffect, useState } from "react";

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

const withText = reviews.filter((r) => r.text);

function Avatar({ r, size = 44 }: { r: (typeof reviews)[number]; size?: number }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="rv-avatar rv-avatar--initial" style={{ width: size, height: size }} aria-hidden="true">{r.name[0]}</span>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="rv-avatar" src={r.avatar} alt="" width={size} height={size} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />;
}

/* Reviews: one large quote that rotates, the full list beside it, and the Google score. */
export default function ReviewsSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const r = withText[i];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % withText.length), 7000);
    return () => window.clearTimeout(t);
  }, [i, paused]);

  return (
    <div className="rv" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <figure className="rv-feature" aria-live="polite">
        <svg className="rv-feature__mark" viewBox="0 0 48 40" aria-hidden="true"><path d="M0 40V22C0 9 6 1.5 18 0l2 6c-6 1.6-9 5.6-9 12h9v22H0zm28 0V22C28 9 34 1.5 46 0l2 6c-6 1.6-9 5.6-9 12h9v22H28z" fill="currentColor" /></svg>
        <blockquote key={r.name} className="rv-feature__quote">
          <p>{r.text}</p>
        </blockquote>
        <figcaption className="rv-feature__who" key={r.name + "-who"}>
          <Avatar r={r} size={48} />
          <span>
            <strong>{r.name}</strong>
            <span>Google review, {r.date}</span>
          </span>
          <GoldStars size={16} />
        </figcaption>
        <div className="rv-feature__progress" aria-hidden="true">
          {withText.map((x, n) => (
            <span key={x.name} className={n === i ? "is-on" : n < i ? "is-done" : ""} style={n === i && !paused ? undefined : { animationPlayState: "paused" }} />
          ))}
        </div>
      </figure>

      <div className="rv-side">
        <div className="rv-score">
          <span className="rv-score__n">5.0</span>
          <span className="rv-score__meta">
            <GoldStars size={20} />
            <span>Rated by 7 people on Google</span>
          </span>
          <GoogleG className="rv-score__g" />
        </div>
        <ul className="rv-list">
          {withText.map((x, n) => (
            <li key={x.name}>
              <button type="button" className="rv-item" aria-pressed={n === i} onClick={() => setI(n)}>
                <Avatar r={x} size={36} />
                <span className="rv-item__body">
                  <span className="rv-item__name">{x.name}</span>
                  <span className="rv-item__text">{x.text}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <a className="rv-all" href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer">Read all reviews on Google<span className="visually-hidden"> (opens in a new tab)</span></a>
      </div>
    </div>
  );
}
