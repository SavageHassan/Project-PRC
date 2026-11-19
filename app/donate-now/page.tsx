import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";
import { DonationLadder, GiveForm, Reviews } from "@/components/blocks";
import { Video } from "@/components/interactive";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate to Project PRC • End Homelessness in Dallas",
  description: "Support Project PRC in Dallas—your tax‑deductible gift helps provide housing, food & hope to families. Donate now and change lives for less than $0.50/day.",
  alternates: { canonical: "/donate-now/" },
};

export default function DonatePage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="donate-title">
        <div className="container">
          <div className="donate-grid">
            <div className="donate-grid__copy stack">
                <span className="label">Change lives</span>
                <h1 className="h1" id="donate-title">Imagine a World Where No Student or Family Faces Homelessness Alone</h1>
                <p className="lead">
                  Project PRC is a Dallas-based nonprofit dedicated to preventing homelessness through housing assistance, rental support, food
                  programs, and educational resources for students and families in need.
                </p>
                <p className="muted">
                  Every day, people across Texas face housing insecurity due to unexpected hardships. Your support helps provide stability, hope,
                  and a path forward when it matters most.
                </p>
            </div>
            <div className="donate-grid__form stack">
              <h2 className="visually-hidden">Donation form</h2>
              <GiveForm />
              <p className="small muted">
                Payments are processed securely by Stripe. Questions about a gift? Call <a className="text-link" href={org.phone.href}>{org.phone.display}</a>{" "}
                or email <a className="text-link" href={`mailto:${org.email}`}>{org.email}</a>.
              </p>
            </div>
            <div className="donate-grid__ladder stack">
              <div className="stack stack--sm">
                <h2 className="h3">Your gift makes a real difference.</h2>
                <p className="muted small">All donations are tax-deductible.</p>
                <DonationLadder light />
              </div>
              <p className="small muted">EIN: {org.ein}. {org.status}</p>
            </div>
          </div>
        </div>
      </section>

      <Section tone="ink" labelledBy="change">
        <div className="split split--center">
          <div className="span-6 stack">
            <h2 className="h2" id="change">Change a Life Today</h2>
            <p className="lead">Your tax-deductible donation helps keep families housed, students in school, and hope alive in our communities.</p>
            <p>Even a small monthly gift can help provide emergency housing support, food assistance, and critical resources for someone facing hardship.</p>
            <p className="lead" style={{ color: "var(--white)" }}>Because housing is more than shelter — it’s a second chance.</p>
            <p><Link className="text-link" href="/rent-subsidy-program/">See how the Rent Subsidy Program works</Link></p>
          </div>
          <div className="span-6"><Video provider="vimeo" id="1141659161" title="Watch: why your gift matters" /></div>
        </div>
      </Section>

      <Section tone="white" labelledBy="reviews"><h2 className="visually-hidden" id="reviews">Reviews</h2><Reviews /></Section>
    </>
  );
}
