import type { Metadata } from "next";
import Link from "next/link";
import { ContactDetails, Downloads, PageHero, Section } from "@/components/ui";
import { HubSpotForm } from "@/components/interactive";

export const metadata: Metadata = {
  title: "Contact Project PRC • Affordable Housing Support",
  description: "Get in touch with Project PRC in Dallas, TX—partner, donate, or ask about our housing & eviction-avoidance programs. Contact us today!",
  alternates: { canonical: "/contact/" },
};

const routes = [
  { who: "I need help with rent", href: "/rental-assistance-or-eviction-avoidance-application/", go: "Apply for assistance" },
  { who: "I manage a property", href: "/network-of-communities-application-for-properties/", go: "Apply to join the Network" },
  { who: "My company wants to partner", href: "/corporate-partnerships/#contact-section", go: "Talk to the partnership team" },
  { who: "I want to volunteer", href: "/volunteer/", go: "Volunteer application" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact us" title="Get in Touch with Project PRC">
        <p>Whether you’re looking to partner, donate, or simply learn more — we’re here to connect.</p>
      </PageHero>

      <Section tone="white" labelledBy="routes">
        <h2 className="h3" id="routes" style={{ marginBottom: 20 }}>The fastest way to reach the right person</h2>
        <ul className="post-list">
          {routes.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>
                <span className="post-list__cat">{r.who}</span>
                <h3 className="h3" style={{ fontWeight: 700 }}>{r.go}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="contact-form">
        <div className="split">
          <div className="span-5 stack stack--lg">
            <div className="stack">
              <h2 className="h2" id="contact-form">Contact us &amp; resources</h2>
              <p className="muted">For more information or assistance, please reach out to our support team.</p>
            </div>
            <ContactDetails />
            <div className="stack stack--sm">
              <h3 className="h3">Downloadable resources</h3>
              <Downloads keys={["evictionAvoidanceGuide", "rentalAssistanceGuide", "nocPartnershipGuide"]} />
            </div>
          </div>
          <div className="span-7 panel stack">
            <h3 className="h3">Complete the form</h3>
            <p className="muted">We’re here to help! Fill out the form below, and our team will get back to you as soon as possible.</p>
            <HubSpotForm formId="contact" title="Contact form" />
          </div>
        </div>
      </Section>
    </>
  );
}
