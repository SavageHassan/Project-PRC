import type { Metadata } from "next";
import { Button, Checklist, PageHero, Section, SectionHead, Steps } from "@/components/ui";
import { ContactAndResources } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Join NOC Tenants: Rental Assistance & Eviction Avoidance",
  description:
    "Join NOC Tenants Secure affordable homes with long-term stability. Partner with Project PRC today, access rental assistance programs and more",
  alternates: { canonical: "/join-noc-tenants/" },
};

const APPLY = "/rental-assistance-or-eviction-avoidance-application/";

export default function TenantsPage() {
  return (
    <>
      <PageHero
        label="For residents"
        title="Welcome to a Community that cares"
        crumbs={[{ href: "/", label: "Home" }, { href: "/network-of-communities/", label: "Network of Communities" }]}
        actions={<><Button href={APPLY}>Apply now</Button><Button href="#compare" variant="outline">Compare the programs</Button></>}
      >
        <p>
          If your property is a member of Project PRC’s Network of Communities and you&apos;ve paid your last 3 months&apos; rent on time,
          you may apply for charitable rental assistance or eviction avoidance programs.
        </p>
      </PageHero>

      <Section tone="white" id="compare" labelledBy="compare-title">
        <SectionHead title="Support When You Need It" id="compare-title">
          Whether you’re navigating a tough month or just want to feel more secure, your property is here to support you.
        </SectionHead>
        <div className="compare">
          <div className="compare__col">
            <span className="compare__type compare__type--grant">Grant, no repayment</span>
            <h3>Rental Assistance Program (RAP)</h3>
            <p className="muted">Our Rental Assistance Program helps you manage rent, reduce stress, and stay focused on your education — worry-free!</p>
            <dl className="compare__rows">
              <div><dt>What it covers</dt><dd>Up to 50% of Monthly Rent for Up to 3 Months</dd></div>
              <div><dt>Type</dt><dd>Charitable Grant Assistance</dd></div>
              <div><dt>Repayment</dt><dd>No Repayment Required</dd></div>
              <div><dt>Support</dt><dd>Dedicated Case Agent Support</dd></div>
              <div><dt>Also</dt><dd>Help Finding Other Available Resources</dd></div>
              <div><dt>Best for</dt><dd>Support During a Temporary Rental Crisis</dd></div>
            </dl>
          </div>
          <div className="compare__col">
            <span className="compare__type compare__type--loan">Financing, repaid over time</span>
            <h3>Eviction Avoidance Program (EAP)</h3>
            <p className="muted">Our Eviction Avoidance Program (EAP) can help you manage rent, build credit, and stay focused on your education.</p>
            <dl className="compare__rows">
              <div><dt>What it covers</dt><dd>Financing for Up to Half of Monthly Rent</dd></div>
              <div><dt>Repayment period</dt><dd>Five-Year Repayment Period</dd></div>
              <div><dt>Payments</dt><dd>Flexible Monthly Repayment</dd></div>
              <div><dt>APR</dt><dd>24.99%. Late payments reported to credit bureaus</dd></div>
              <div><dt>Guarantor</dt><dd>Guarantor Support</dd></div>
              <div><dt>Before leasing again</dt><dd>Balance Must Be Repaid Before Leasing Again</dd></div>
            </dl>
          </div>
        </div>
        <div className="btn-row" style={{ marginTop: 32 }}>
          <Button href={APPLY}>Apply now</Button>
        </div>
      </Section>

      <Section labelledBy="eligibility">
        <SectionHead title="How it works" id="eligibility" />
        <div className="grid grid--2">
          <div className="panel stack">
            <h3 className="h3">Rental Assistance Program (RAP)</h3>
            <p className="muted">Our Rental Assistance Program helps you manage rent, reduce stress, and stay focused on your education — worry-free!</p>
            <h4 className="label">Eligibility</h4>
            <Checklist items={[
              "Facing temporary financial difficulties.",
              "Willing to work with a caseworker to explore long-term solutions.",
            ]} />
            <h4 className="label">Getting assistance</h4>
            <Checklist items={[
              "Apply through your property manager on the PRC web portal",
              "A qualified caseworker will assess your situation.",
              "Approved tenants receive up to 50% of rent assistance for up to 3 months.",
            ]} />
          </div>
          <div className="panel stack">
            <h3 className="h3">Eviction Avoidance Program (EAP)</h3>
            <p className="muted">Our Eviction Avoidance Program (EAP) can help you manage rent, build credit, and stay focused on your education.</p>
            <h4 className="label">Eligibility</h4>
            <Checklist items={[
              "Enrolled full-time at Prairie View A&M University",
              "Last 3 months’ rent paid on time",
              "Income below 3x the rent or credit score below 700",
              "Must pay the first two months of rent on time before using the credit line",
              "A parent or responsible party must guarantee the credit line",
            ]} />
            <h4 className="label">Using the line of credit</h4>
            <Checklist items={[
              "Covers up to 50% of rent per month",
              "Requires 10-day advance notice before use",
              "Lease cannot be renewed if there is a balance due on the credit line",
            ]} />
            <h4 className="label">Repayment terms</h4>
            <Checklist items={[
              "Flexible 5-year repayment plan",
              "Automatic payments encouraged",
              "Late payments reported to credit bureaus",
              "APR 24.99%",
            ]} />
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="apply-steps">
        <SectionHead title="Applying" id="apply-steps" />
        <Steps
          items={[
            { title: "Apply through your property manager", body: "Complete the tenant application online. Requests must be submitted at least 10 days before rent is due, unless otherwise approved." },
            { title: "A qualified caseworker will assess your situation", body: "Your caseworker reviews your application and supporting documents." },
            { title: "If approved, receive rent assistance", body: "Assistance is applied toward your rent so you can stay housed." },
          ]}
        />
        <div className="btn-row" style={{ marginTop: 40 }}>
          <Button href={APPLY}>Start your application</Button>
        </div>
      </Section>

      <section className="section section--tight section--ink on-dark" aria-label="Member property">
        <div className="container cta-band">
          <h2 className="h2">625 at Prairie View is a Proud Member of Project PRC Network of Communities</h2>
          <div className="btn-row"><Button href={APPLY}>Apply now</Button></div>
        </div>
      </section>

      <ContactAndResources formTitle="Have questions?" />
    </>
  );
}
