import type { Metadata } from "next";
import { Bullets, Button, Checklist, Faq, PageHero, Photo, Section, SectionHead } from "@/components/ui";
import { ContactAndResources } from "@/components/blocks";
import { NativeForm } from "@/components/interactive";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Network of Communities",
  description: "Join Project PRC’s Network of Communities - connecting property owners & renters to access rental assistance, eviction-prevention.",
  alternates: { canonical: "/network-of-communities/" },
};

export default function NocPage() {
  return (
    <>
      <PageHero
        label="Network of Communities"
        title="Connecting Property Owners and Renters for a Better Future"
        img={images.prairieView}
        actions={<><Button href="/join-noc-tenants/">I&apos;m a tenant</Button><Button href="/join-noc-apartments/" variant="outline">I own or manage a property</Button></>}
      >
        <p>
          Our mission is to create a strong, supportive network that connects property owners with renters, fostering community stability and
          financial security. Whether you own properties or rent, our Network of Communities offers invaluable resources and support to ensure
          safe and affordable housing for all.
        </p>
      </PageHero>

      <Section tone="white" labelledBy="programs">
        <SectionHead title="Empowering Communities Through Supportive Programs" id="programs" />
        <div className="grid grid--2">
          <article className="panel stack">
            <span className="compare__type compare__type--grant">Grant, no repayment</span>
            <h3 className="h2" style={{ fontSize: "1.75rem" }}>Rental Assistance Program</h3>
            <p className="muted">Our Rental Assistance Program helps you manage rent, reduce stress, and stay focused on your education—worry-free!</p>
            <h4 className="label">Eligibility</h4>
            <Checklist items={["Facing temporary financial difficulties", "Willing to work with a caseworker", "Must have past 3 months rent paid on time"]} />
            <h4 className="label">Application process</h4>
            <Checklist items={["Apply through your property manager", "A qualified caseworker will assess your situation", "If approved, receive rent assistance"]} />
            <h4 className="label">Benefits</h4>
            <p>Up to 50% of monthly rent covered for up to 3 months. This is charitable grant assistance designed to help residents stay housed and is never repaid.</p>
            <h4 className="label">Additional support</h4>
            <Bullets items={["Community stability", "Eviction prevention", "Caseworker assistance", "Financial guidance"]} />
          </article>
          <article className="panel stack">
            <span className="compare__type compare__type--loan">Financing, repaid over time</span>
            <h3 className="h2" style={{ fontSize: "1.75rem" }}>Eviction Avoidance Program</h3>
            <p className="muted">Our Eviction Avoidance Program (EAP) can help you manage rent, build credit, and stay focused on your education.</p>
            <h4 className="label">Eligibility</h4>
            <Checklist items={["Income below 3× the monthly rent or credit score under 700", "Pay the first two months’ rent on time before using the credit line", "Have a parent or responsible party guarantee the credit line"]} />
            <h4 className="label">Application process</h4>
            <Checklist items={["Apply through your property manager", "A qualified caseworker will assess your situation", "If approved, receive rent assistance"]} />
            <h4 className="label">Benefits</h4>
            <p>A separate financing option that allows a resident to obtain financing covering up to half of their rent, repaid over a five-year period.</p>
            <Bullets items={["Eviction stress relief", "Credit-building opportunities", "Flexible repayment options", "Guarantor support", "Student-focused protection"]} />
          </article>
        </div>
        <div className="btn-row" style={{ marginTop: 32 }}>
          <Button href="/join-noc-tenants/">For tenants</Button>
          <Button href="/join-noc-apartments/" variant="outline">For properties</Button>
          <Button href="/donate-now/" variant="outline">Help change lives</Button>
        </div>
      </Section>

      <Section labelledBy="members">
        <div className="split split--center">
          <div className="span-6 stack">
            <h2 className="h2" id="members">Explore Our Growing Network of Communities</h2>
            <p className="lead muted">We’re thrilled to spotlight the apartment communities that have joined forces with us to make housing more accessible and stable for everyone.</p>
            <div className="panel stack stack--sm">
              <span className="label">Member community</span>
              <h3 className="h3">625 at Prairie View</h3>
              <p className="muted">Student housing, Prairie View, TX. A proud member of the Project PRC Network of Communities.</p>
            </div>
          </div>
          <div className="span-6"><Photo img={images.prairieView} ratio="4 / 3" /></div>
        </div>
      </Section>

      <Section tone="white" labelledBy="why-join">
        <SectionHead title="Why Join the Network?" id="why-join">
          Discover the benefits of joining a network that supports both property owners and renters through stability, security, and community-driven solutions.
        </SectionHead>
        <div className="grid grid--2">
          <div className="stack">
            <h3 className="h3">For Property Owners</h3>
            <Checklist items={["Reduce vacancies and minimize turnover costs.", "Ensure consistent rental income through support programs.", "Build a positive reputation by contributing to community stability."]} />
          </div>
          <div className="stack">
            <h3 className="h3">For Renters</h3>
            <Checklist items={["Access financial and legal assistance to prevent eviction.", "Maintain secure and stable housing even during financial hardships.", "Receive community support and resources to sustain your living situation."]} />
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="cost">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="cost">The Hidden Cost of Evictions</h2>
            <p>Apartments with lower eviction rates see higher profits, longer tenant retention, and lower legal costs.</p>
            <div style={{ paddingTop: 12 }}><Button href="/join-noc-apartments/#estimate">Estimate your costs</Button></div>
          </div>
          <div className="span-7 stack stack--lg">
            <table className="table">
              <caption className="visually-hidden">Typical costs of an eviction</caption>
              <thead><tr><th scope="col">Item</th><th scope="col">Cost</th></tr></thead>
              <tbody>
                <tr><td>Evicting a Tenant</td><td>$3,500 – $10,000 per case</td></tr>
                <tr><td>2-3 Months of Unpaid Rent</td><td>$2,500+</td></tr>
                <tr><td>Legal &amp; Court Fees</td><td>$500 – $2,000 Per Eviction</td></tr>
                <tr><td>Turnover Costs</td><td>$1,750+ (cleaning, repairs, re-renting)</td></tr>
              </tbody>
            </table>
            <div className="stack stack--sm">
              <h3 className="h3">The cost cycle</h3>
              <ol className="steps" style={{ ["--cols" as string]: 3 }}>
                <li><span className="steps__n">01</span><h3>Time &amp; Stress</h3><p>No Rental Income, Longer Vacancies</p></li>
                <li><span className="steps__n">02</span><h3>Tenant Turnover</h3><p>More Vacancies, Longer Rental Gaps</p></li>
                <li><span className="steps__n">03</span><h3>High Eviction Costs</h3><p>Lost Rent, Legal Fees, Turnover Expenses</p></li>
              </ol>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq">
        <div className="split">
          <div className="span-4 stack">
            <h2 className="h2" id="faq">Frequently Asked Questions</h2>
            <p className="muted">Find answers to commonly asked questions about the Network of Communities.</p>
          </div>
          <div className="span-8">
            <Faq items={[
              { q: "Who qualifies for assistance?", a: "Case by case basis based on case worker evaluation." },
              { q: "What are the benefits for property owners?", a: "Avoiding the risks of losing tenants due to financial distress." },
              { q: "How long does the application process take?", a: "Application timelines can take up to 72 hours." },
              { q: "Who can the network help?", a: "Any low-to-moderate income renter facing eviction or financial hardship." },
              { q: "Is there a cost to join the network?", a: "One time set-up fee of $3,500" },
              { q: "What kind of support is offered to renters?", a: "Eviction Avoidance, Rental Assistance, & Caseworker Assistance" },
            ]} />
          </div>
        </div>
      </Section>

      <ContactAndResources
        formTitle="Complete the form"
        form={
          <NativeForm
            form="noc-inquiry"
            submitLabel="Send"
            successMessage="Thanks. Your message reached our team, and we’ll get back to you as soon as possible."
            fields={[
              { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
              { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel", half: true },
              { name: "message", label: "Message", type: "textarea" },
            ]}
          />
        }
      />
    </>
  );
}
