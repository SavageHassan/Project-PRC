import Link from "next/link";
import { nav, org } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  Facebook: <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" fill="currentColor" />,
  "X (Twitter)": <path d="M17.8 3.5h3l-6.6 7.5 7.7 10h-6l-4.7-6.1-5.4 6.1h-3l7-8L2.4 3.5h6.2l4.3 5.6 4.9-5.6zm-1 15.7h1.7L7.4 5.2H5.6l11.2 14z" fill="currentColor" />,
  LinkedIn: <path d="M6.9 8.8H3.6V20h3.3V8.8zM5.2 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 13.6c0-3-.6-5.1-4.1-5.1-1.7 0-2.8.9-3.2 1.8h-.1V8.8H9.8V20h3.3v-5.5c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20h3.4v-6.4z" fill="currentColor" />,
  Instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </g>
  ),
};

function Ico({ d }: { d: "pin" | "phone" | "clock" | "mail" }) {
  const paths = {
    pin: <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />,
    phone: <path d="M6.6 3.5l2.8.4 1.2 4-2 1.6a12 12 0 006 6l1.6-2 4 1.2.4 2.8c0 1-.9 2-2 2A16.5 16.5 0 014.5 5.5c0-1.1 1-2 2.1-2z" />,
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
    mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="M4 7l8 6 8-6" /></>,
  };
  return (
    <svg className="foot__ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[d]}
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__lead">
          <p className="foot__statement">Everyone deserves a place to call home, regardless of their income.</p>
          <div className="foot__reach">
            <a className="foot__reach-item" href={org.phone.href}>
              <Ico d="phone" />
              <span><span className="foot__reach-label">Call us</span>{org.phone.display}</span>
            </a>
            <a className="foot__reach-item" href={`mailto:${org.email}`}>
              <Ico d="mail" />
              <span><span className="foot__reach-label">Email us</span>{org.email}</span>
            </a>
            <Link href="/donate-now/" className="btn btn--primary foot__give">Donate</Link>
          </div>
        </div>

        <nav className="foot__nav" aria-label="Footer">
          {nav.map((g) => (
            <div key={g.label}>
              <h2>{g.label}</h2>
              <ul>
                {g.items.map((l) => (
                  <li key={l.href + l.label}>
                    {l.external ? <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a> : <Link href={l.href}>{l.label}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2>Visit</h2>
            <ul className="foot__visit">
              <li><a href={org.address.mapUrl} target="_blank" rel="noopener noreferrer">{org.address.street}<br />{org.address.city}, {org.address.region} {org.address.postal}</a></li>
              <li>{org.hours}</li>
              <li><Link href="/contact/">Contact form</Link></li>
            </ul>
          </div>
        </nav>

        <div className="foot__base">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="foot__logo" src="/logo-reversed.svg" alt="Project PRC" width={160} height={32} />
          <p className="foot__legal-line">
            © {year} Project PRC Corporation, a not-for-profit, section 501(c)(3). EIN {org.ein}.
          </p>
          <ul className="foot__legal">
            <li><Link href="/privacy-policy/">Privacy</Link></li>
            <li><Link href="/refund-and-returns-policy/">Returns</Link></li>
            <li><Link href="/terms-and-conditions/">Terms</Link></li>
          </ul>
          <ul className="foot__social" aria-label="Social media">
            {org.social.map((x) => (
              <li key={x.href}>
                <a href={x.href} target="_blank" rel="noopener noreferrer" aria-label={`${x.label} (opens in a new tab)`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">{icons[x.label]}</svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
