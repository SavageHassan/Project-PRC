import { giveFormUrl, org, PREVIEW } from "@/lib/site";
import { Button, ContactDetails, Downloads, Stars } from "./ui";
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
  return (
    <section className="section section--ink on-dark" aria-labelledby="donate-band">
      <div className="container">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="donate-band">{heading}</h2>
            <p className="lead">All donations are tax-deductible.</p>
            <p className="small muted">EIN: {org.ein}. {org.status}</p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Button href="/donate-now/">Donate now</Button>
              <Button href="/rent-subsidy-program/" variant="outline">Where your donation goes</Button>
            </div>
          </div>
          <div className="span-7">
            <DonationLadder />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Google reviews (static copy of the 7 reviews shown by the live Trustindex widget). */
export const reviews = [
  { name: "Linda R", date: "January 30, 2023", text: "When looking to align our mutual interests, connecting with the non-profit organization, PROJECT PRC Corp, we find ourselves happily jumping up and down, as we applaud their vision in making the world a better place, committing to building affordable housing for local communities. Kudos!" },
  { name: "Hcj", date: "August 26, 2025", text: "I truly admire Project PRC’s commitment to building affordable housing and revitalizing neighborhoods. Their partnerships with schools and local organizations show a real dedication to long-term solutions. They are making a lasting difference." },
  { name: "Carlos H", date: "August 26, 2025", text: "Fantastic folks who are dedicated to making things better." },
  { name: "Desayn C", date: "September 2, 2025", text: "I worked with PRC on projects through Upwork and it was a really great experience. Communication was clear, the process went smoothly, and everything felt easy to collaborate on. Reccomended!" },
  { name: "Georgi D", date: "August 26, 2025", text: "I worked with PRC on a couple of projects and they were always professional and friendly throughout. I would happily collaborate again in the future. Highly recommend!" },
  { name: "Teresa T", date: "July 17, 2025", text: "They are doing good work!" },
];

export function Reviews({ limit = 6 }: { limit?: number }) {
  return (
    <div className="stack stack--lg">
      <p className="rating-summary"><Stars label="Rated 5 out of 5" /> <strong>Excellent</strong> <span className="muted">5.0 on Google, based on 7 reviews</span></p>
      <div className="reviews">
        {reviews.slice(0, limit).map((r) => (
          <figure className="review" key={r.name}>
            <Stars />
            <blockquote><p>{r.text}</p></blockquote>
            <figcaption><strong>{r.name}</strong>, Google review, {r.date}</figcaption>
          </figure>
        ))}
      </div>
    </div>
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
    <section className="section section--tight section--line" aria-label={title}>
      <div className="container cta-band">
        <div className="stack">
          <h2 className="h2">{title}</h2>
          {children ? <p className="lead muted">{children}</p> : null}
          {note ? <p className="muted measure">{note}</p> : null}
        </div>
        <div className="btn-row">{actions}</div>
      </div>
    </section>
  );
}
