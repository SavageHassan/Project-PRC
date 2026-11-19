import type React from "react";
import { giveFormUrl, org, PREVIEW } from "@/lib/site";
import ReviewsSlider from "./ReviewsSlider";
import { Button, ContactDetails, Downloads } from "./ui";
import { HubSpotForm } from "./interactive";
import type { ReactNode } from "react";

/* Donation ladder — wording verbatim from the live site. */
export const ladder = [
  { amount: "$20", text: "a month can help prevent utility shut off for students or families." },
  { amount: "$50", text: "a month can help cover transportation or document costs." },
  { amount: "$100", text: "a month can help stabilize a family during an emergency" },
  { amount: "$500", text: "a month can help prevent eviction escalation." },
];

export function DonationLadder({ light }: { light?: boolean }) {
  return (
    <ul className={`ladder${light ? " ladder--light" : ""}`}>
      {ladder.map((l) => (
        <li key={l.amount}>
          <span className="ladder__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.3-9.2C1.4 8.3 3.6 5 7 5c2 0 3.6 1.1 5 2.8C13.4 6.1 15 5 17 5c3.4 0 5.6 3.3 4.3 6.8C19.5 16.4 12 21 12 21z" fill="currentColor" /></svg></span>
          <strong>{l.amount}<small> /mo</small></strong>
          <span>{l.text}</span>
        </li>
      ))}
    </ul>
  );
}

export function GiveForm() {
  if (PREVIEW) {
    return (
      <div className="embed-preview embed-preview--give" role="note">
        <strong>The donation form loads here on the live site.</strong>
        <span>It's Project PRC's existing GiveWP form (Stripe): one-time, monthly or yearly gifts of $10, $20, $50, $100, $500, $1,000 or a custom amount. Payment forms can't run inside this preview.</span>
      </div>
    );
  }
  return (
    <iframe
      className="give-frame"
      src={giveFormUrl}
      title="Donation form: choose an amount and frequency"
      loading="lazy"
      allow="payment"
    />
  );
}

/** Band reused at the end of program pages: "Your gift makes a real difference." */
export function DonateBand({ heading = "Your gift makes a real difference." }: { heading?: string }) {
  const rise = [0, 40, 80, 130];
  return (
    <section className="section section--ink on-dark gscale" aria-labelledby="donate-band">
      <div className="container">
        <div className="gscale__head">
          <h2 className="h2" id="donate-band">{heading}</h2>
          <div className="gscale__meta">
            <p className="lead">All donations are tax-deductible.</p>
            <p className="small muted">EIN: {org.ein}. {org.status}</p>
          </div>
        </div>
        <ol className="gscale__steps">
          {ladder.map((l, i) => (
            <li key={l.amount} style={{ "--rise": rise[i] } as React.CSSProperties}>
              <span className="gscale__bar" aria-hidden="true" />
              <strong>{l.amount}<small> /mo</small></strong>
              <span>{l.text}</span>
            </li>
          ))}
        </ol>
        <div className="btn-row gscale__actions">
          <Button href="/donate-now/">Donate now</Button>
          <Button href="/rent-subsidy-program/" variant="outline">Where your donation goes</Button>
        </div>
      </div>
    </section>
  );
}

/* Google reviews: the live site's Trustindex layout, rebuilt as a light slider. */
export function Reviews() {
  return <ReviewsSlider />;
}

export function ReviewsBand({ title = "What people say about Project PRC" }: { title?: string }) {
  return (
    <section className="section reviews-band" aria-labelledby="reviews-band">
      <div className="container">
        <h2 className="h2 reviews-band__title" id="reviews-band">{title}</h2>
        <ReviewsSlider />
      </div>
    </section>
  );
}

/** "Contact Us & Resources" block used on program and application pages. */
export function ContactAndResources({
  heading = "Contact us & resources",
  formTitle = "Have questions?",
  downloads = ["rentalAssistanceGuide", "evictionAvoidanceGuide", "nocPartnershipGuide"],
  form,
}: {
  heading?: string;
  formTitle?: string;
  downloads?: Parameters<typeof Downloads>[0]["keys"];
  form?: ReactNode;
}) {
  return (
    <section className="section section--white" aria-labelledby="contact-resources">
      <div className="container">
        <div className="split">
          <div className="span-5 stack stack--lg">
            <div className="stack">
              <h2 className="h2" id="contact-resources">{heading}</h2>
              <p className="muted">For more information or assistance, please reach out to our support team.</p>
            </div>
            <ContactDetails />
            <div className="stack stack--sm">
              <h3 className="h3">Downloadable resources</h3>
              <Downloads keys={downloads} />
            </div>
          </div>
          <div className="span-7 panel stack">
            <h3 className="h3">{formTitle}</h3>
            <p className="muted">We’re here to help! Fill out the form below, and our team will get back to you as soon as possible.</p>
            {form ?? <HubSpotForm formId="contact" title="Question form" />}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, children, actions, note }: { title: string; children?: ReactNode; actions: ReactNode; note?: ReactNode }) {
  return (
    <section className="cta2" aria-label={title}>
      <svg className="cta2__lines" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <path d="M-20 380 L300 120 L620 380" />
        <path d="M480 380 L820 70 L1160 380" />
        <path d="M900 380 L1100 210 L1300 380" />
      </svg>
      <div className="container cta2__inner" data-reveal="panel">
        <div className="cta2__copy">
          <h2 className="h2">{title}</h2>
          {children ? <p>{children}</p> : null}
          {note ? <p className="cta2__note">{note}</p> : null}
        </div>
        <div className="cta2__actions">{actions}</div>
      </div>
    </section>
  );
}
