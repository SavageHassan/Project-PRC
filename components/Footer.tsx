import Link from "next/link";
import { footerPrograms, footerQuick, org } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-reversed.svg" alt="Project PRC" width={203} height={40} />
            <p>
              Headquartered in Dallas, Texas, Project PRC Corporation focuses on developing apartment communities, student housing,
              low to moderate income housing, workforce housing, and more.
            </p>
            <p className="small">EIN: {org.ein}. {org.status}.</p>
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
            <address>
              <a href={org.address.mapUrl} target="_blank" rel="noopener noreferrer">{org.address.street}<br />{org.address.city}, {org.address.region} {org.address.postal}</a>
              <a href={org.phone.href}>{org.phone.display}</a>
              <span>{org.hours}</span>
              <a href={`mailto:${org.email}`}>{org.email}</a>
            </address>
            <ul className="site-footer__social" aria-label="Social media">
              {org.social.map((s) => (
                <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {year} Project PRC Corporation, a not-for-profit, section 501(c)(3).</p>
          <ul>
            <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
            <li><Link href="/refund-and-returns-policy/">Returns</Link></li>
            <li><Link href="/terms-and-conditions/">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
