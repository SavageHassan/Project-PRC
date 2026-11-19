import type { Metadata } from "next";
import { Bullets, Button, Checklist, Figures, PageHero, Photo, Section, SectionHead, Steps } from "@/components/ui";
import { EvictionEstimator, Tabs } from "@/components/interactive";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Join NOC Apartments: Reduce Evictions, Protect Revenue",
  description: "Join NOC Apartments to fill vacancies faster, access rental assistance programs, and reduce eviction risks.",
  alternates: { canonical: "/join-noc-apartments/" },
};

const JOIN = "/network-of-communities-application-for-properties/";

export default function ApartmentsPage() {
  return (
    <>
      <PageHero
        label="For property owners and managers"
        title="Reduce Evictions. Strengthen Your Property. Protect Your Revenue."
        img={images.evictionAssistance}
        actions={<><Button href={JOIN}>Join the Network</Button><Button href="#estimate" variant="outline">Estimate your costs</Button></>}
      >
        <p><strong>Join the Network of Communities.</strong> A smarter way to support residents, preserve occupancy, and reduce costly evictions.</p>
      </PageHero>

      <Section tone="white" labelledBy="solution">
        <SectionHead label="The Solution – Project PRC’s Network of Communities" title="A Smarter Alternative to Evictions" id="solution" />
        <div className="grid grid--4">
          {[
            ["Proactive Resident Support", "Eligible residents may access assistance or financing before a temporary rental issue becomes an eviction."],
            ["Lower Turnover, Fewer Vacancies", "Helping qualified residents remain housed can reduce turnover, vacancy periods, and re-leasing expenses."],
            ["Case Management & Early Intervention", "Professional support helps identify available resources and address rental issues before they escalate."],
            ["Simple Property Membership", "$3,500 one-time membership fee plus a $3.50 monthly program fee per participating resident."],
          ].map(([t, d]) => (
            <div className="stack stack--sm" key={t} style={{ borderTop: "2px solid var(--ink)", paddingTop: 20 }}>
              <h3 className="h3">{t}</h3>
              <p className="muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="why">
        <SectionHead title="Why This Works for Apartments" id="why" />
        <div className="grid grid--2">
          <div className="panel stack">
            <h3 className="h3">The Problem</h3>
            <Bullets items={[
              "Costly evictions can reduce revenue and increase operating expenses.",
              "Resident turnover leads to vacancy, re-leasing, and make-ready costs.",
              "Temporary financial hardships can quickly become long-term occupancy issues.",
              "Delayed intervention often results in higher collection and legal costs.",
            ]} />
          </div>
          <div className="panel panel--ink on-dark stack">
            <h3 className="h3">The Project PRC Solution</h3>
            <Checklist items={[
              "Residents gain access to two distinct support programs before eviction becomes necessary.",
              <><strong>Rental Assistance Program (RAP):</strong> Charitable grant assistance that may cover up to 50% of monthly rent for up to three months and is never repaid.</>,
              <><strong>Eviction Avoidance Program (EAP):</strong> Resident financing that may cover up to half of monthly rent and is repaid over a five-year period.</>,
              "Early intervention can help reduce turnover, preserve occupancy, and minimize eviction-related costs.",
            ]} />
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="how">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="how">How Does Project PRC’s Network of Communities Work?</h2>
            <Figures items={[
              { value: "$3,500", label: "One-time membership fee per property" },
              { value: "$3.50", label: "Tenant contribution per month, per tenant" },
            ]} />
          </div>
          <div className="span-7 stack stack--lg">
            <div className="stack stack--sm">
              <h3 className="h3">What You Get</h3>
              <Checklist items={[
                "Access to PRC’s Eviction Avoidance & Rental Assistance Programs",
                "Lower Evictions, More Stable Rental Income & Fewer Legal Costs",
                "Dedicated Case Management to Help Tenants Stay Housed",
                "Recognition as a Housing Leader in the Community",
              ]} />
            </div>
            <Steps
              items={[
                { title: "Apply Online", body: "Quick & easy enrollment process." },
                { title: "Onboard Your Property", body: "We provide training & materials for your team." },
                { title: "Start Seeing Results", body: "Lower evictions, boost retention, protect revenue." },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section tone="ink" id="estimate" labelledBy="estimate-title">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="estimate-title">What evictions cost you, next to what the Network costs</h2>
            <p>Move the sliders to match your property. The ranges come from the figures on this page and our Network of Communities page.</p>
          </div>
          <div className="span-7"><EvictionEstimator /></div>
        </div>
      </Section>

      <Section labelledBy="programs">
        <SectionHead title="Our Programs" id="programs" />
        <Tabs
          label="Network programs"
          tabs={[
            {
              id: "eap",
              title: "Eviction Avoidance Program (EAP)",
              content: (
                <div className="stack stack--xl">
                  <div className="grid grid--4">
                    {[
                      ["Financial Assistance", "Provides financing for up to 50% of monthly rent."],
                      ["Catch Up Without Strain", "Ensures tenants can catch up on rent without financial strain."],
                      ["Case Management & Mediation", "Works with landlords & tenants to resolve issues early"],
                      ["Consistent Rental Income", "Fewer Evictions Lead to reliable tenants and steady revenue."],
                    ].map(([t, d]) => (
                      <div className="stack stack--sm" key={t}><h3 className="h3">{t}</h3><p className="muted">{d}</p></div>
                    ))}
                  </div>
                  <div className="stack">
                    <h3 className="h3">How it works</h3>
                    <p className="muted">A proactive solution that benefits both landlords and tenants.</p>
                    <Steps cols={4} items={[
                      { title: "Tenant Applies for Assistance", body: "PRC evaluates eligibility." },
                      { title: "PRC Provides Financial Support", body: "Covers up to 50% of rent for eligible tenants." },
                      { title: "Mediation & Repayment Plans", body: "PRC works with tenants to payback overdue rent." },
                      { title: "Tenant Stays, Landlord Gets Paid", body: "Avoid eviction, maintain occupancy, and protect revenue." },
                    ]} />
                  </div>
                </div>
              ),
            },
            {
              id: "rap",
              title: "Rental Assistance Program (RAP)",
              content: (
                <div className="stack stack--xl">
                  <p className="lead">Provides temporary financial support to tenants facing temporary financial hardships — ensuring consistent rent payments while preventing evictions.</p>
                  <div className="grid grid--4">
                    {[
                      ["Covers up to 50% of rent for 3 months", "Helps tenants catch up on payments."],
                      ["Eviction Prevention", "Keeps tenants in their homes, reducing vacancy losses."],
                      ["Caseworker Support", "Ensures tenants have a long-term plan for stability."],
                      ["Financial Guidance", "Educates tenants on budgeting & rent responsibility."],
                    ].map(([t, d]) => (
                      <div className="stack stack--sm" key={t}><h3 className="h3">{t}</h3><p className="muted">{d}</p></div>
                    ))}
                  </div>
                  <div className="grid grid--2">
                    <div className="panel stack">
                      <h3 className="h3">Without RAP</h3>
                      <Bullets items={[
                        "Tenant falls behind on rent, eviction process starts.",
                        "Landlord faces months of lost rent & legal fees.",
                        "Tenant is displaced, leading to turnover costs.",
                        "Stressful eviction process & unpredictable income.",
                      ]} />
                    </div>
                    <div className="panel panel--ink on-dark stack">
                      <h3 className="h3">With Project PRC’s RAP</h3>
                      <Checklist items={[
                        "Tenant applies for rental assistance before eviction is necessary.",
                        "PRC covers up to 50% of rent for 3 months, stabilizing payments.",
                        "Tenant stays housed, reducing vacancy & re-leasing expenses.",
                        "Predictable rental income & stronger landlord-tenant relationships.",
                      ]} />
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section tone="white" labelledBy="now">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="now">Why You Should Join Our Network Now</h2>
            <Photo img={images.prairieView} ratio="4 / 3" sizes="(min-width: 960px) 40vw, 100vw" />
          </div>
          <div className="span-7">
            <dl className="facts">
              {[
                ["Prevent Costly Evictions", "Avoid the $5,000+ per eviction financial hit."],
                ["Reduce Tenant Turnover", "Fewer move-outs = fewer re-leasing expenses and more stable rental income."],
                ["Protect Rental Income", "No more months of unpaid rent due to eviction delays."],
                ["Eliminate Legal Headaches", "Mediation resolves issues before they escalate."],
                ["Strengthen Your Community Reputation", "Build a reputation as a trusted, tenant-friendly, eviction-free property."],
              ].map(([t, d]) => (<div key={t}><dt>{t}</dt><dd>{d}</dd></div>))}
            </dl>
          </div>
        </div>
      </Section>

      <section className="section section--tight section--ink on-dark" aria-label="Enroll">
        <div className="container cta-band">
          <div className="stack">
            <h2 className="h2">Ready to protect your property?</h2>
            <p className="lead">Enroll in PRC’s Network today!</p>
          </div>
          <div className="btn-row">
            <Button href={JOIN}>Join the Network</Button>
            <Button href="/network-of-communities/" variant="outline">Learn about the Network</Button>
          </div>
        </div>
      </section>
    </>
  );
}
