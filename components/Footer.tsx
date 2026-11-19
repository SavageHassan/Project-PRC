import Link from "next/link";
import { footerPrograms, footerQuick, org } from "@/lib/site";

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
    <svg className="site-footer__ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[d]}
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <svg className="site-footer__roof" viewBox="0 0 600 420" aria-hidden="true" focusable="false">
        <path d="M30 400 L300 60 L570 400" />
        <path d="M170 400 V250 H430 V400" />
      </svg>
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-reversed.svg" alt="Project PRC" width={203} height={40} />
            <p>
              Headquartered in Dallas, Texas, Project PRC Corporation focuses on developing apartment communities, student housing,
              low to moderate income housing, workforce housing, and more. Our goal is to create new homes for Americans and help
              communities grow and prosper. Please make an annual tax deductible donation today to help us fight homelessness in
              America and change lives.
            </p>
            <Link href="/donate-now/" className="btn btn--primary btn--sm">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M14.5 9.2c-.4-.8-1.3-1.2-2.5-1.2-1.5 0-2.5.7-2.5 1.8 0 2.6 5.2 1.3 5.2 4.2 0 1.1-1.1 1.9-2.7 1.9-1.3 0-2.3-.5-2.7-1.4M12 6.5V8m0 8v1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              Donate Now
            </Link>
          </div>

          <div>
            <h2>Quick links</h2>
            <ul>
              {footerQuick.map((l) => (
                <li key={l.href}>
                  {l.external ? <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a> : <Link href={l.href}>{l.label}</Link>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Programs</h2>
            <ul>
              {footerPrograms.map((l) => (
                <li key={l.href + l.label}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <ul className="site-footer__contact">
              <li><Ico d="pin" /><a href={org.address.mapUrl} target="_blank" rel="noopener noreferrer">{org.address.street} {org.address.city}, {org.address.region} {org.address.postal}</a></li>
              <li><Ico d="phone" /><a href={org.phone.href}>{org.phone.display}</a></li>
              <li><Ico d="clock" /><span>{org.hours}</span></li>
              <li><Ico d="mail" /><a href={`mailto:${org.email}`}>{org.email}</a></li>
            </ul>
            <ul className="site-footer__social" aria-label="Social media">
              {org.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">{icons[s.label]}</svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <ul>
            <li>© {year} Project PRC Corporation</li>
            <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
            <li><Link href="/refund-and-returns-policy/">Returns</Link></li>
            <li><Link href="/terms-and-conditions/">Terms</Link></li>
          </ul>
          <p>Proudly Developed by: Project PRC Corporation, a not-for-profit, section 501(c)(3). EIN: {org.ein}.</p>
        </div>
      </div>
    </footer>
  );
}
