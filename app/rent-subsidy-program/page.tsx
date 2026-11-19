import type { Metadata } from "next";
import Link from "next/link";
import { Button, Checklist, ContactDetails, Facts, PageHero, Section, SectionHead, Steps } from "@/components/ui";
import { DonationLadder, ReviewsBand } from "@/components/blocks";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Rent Subsidy Program | Affordable Housing Redefined",
  description: "Project PRC’s Rent Subsidy Program makes student and workforce housing affordable through private partnerships. Donate today to help.",
  alternates: { canonical: "/rent-subsidy-program/" },
};

export default function RentSubsidyPage() {
  return (
    <>
      <PageHero
        label="Rent Subsidy Program"
        title="A Private-Sector Solution to Housing Affordability"
        img={images.rentSubsidyHero}
        actions={<><Button href="/donate-now/">Donate now</Button><Button href="/volunteer/" variant="outline">Volunteer</Button></>}
      >
        <p>
          Project PRC is redefining how communities approach affordable housing. Our Rent Subsidy Program is not a government program—it’s a
          private, community-driven initiative that ensures students and working families have access to safe, affordable housing.
        </p>
        <p className="muted">
          The program is exclusively available to residents of properties who are members of our{" "}
          <Link className="text-link" href="/network-of-communities/">Network of Communities</Link>.
        </p>
      </PageHero>

      <section className="section section--tight section--white" aria-label="Program features">
        <div className="container">
          <div className="figures">
            {["Rental Assistance", "Private and Community-Driven", "Focused on Students and Working Families", "Built for Long-Term Stability"].map((t) => (
              <div className="figure" key={t}><span className="figure__label" style={{ color: "var(--ink)", fontWeight: 600, fontSize: "1.0625rem" }}>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      <Section labelledBy="how">
        <SectionHead label="How it works" title="Rent Subsidy Program (RSP)" id="how" />
        <Steps cols={3} items={[
          {
            title: "Eligibility",
            body: <><p>Project PRC develops or acquires student housing, affordable housing, and workforce housing in partnership with local universities and municipalities.</p><p>Once a property becomes member of our Network of Communities, it becomes eligible for our rent subsidy program.</p></>,
          },
          {
            title: "Partnerships",
            body: "We then collaborate with the local community, businesses, and government partners to fund a pool of resources that allows us to offset rents for residents in need. The result is a self-sustaining model that makes housing affordable without relying on taxpayer-funded programs.",
          },
          {
            title: "Impact",
            body: (
              <Checklist items={[
                <><strong>Develop or Acquire:</strong> Project PRC builds or acquires mission-aligned properties.</>,
                <><strong>Partner Locally:</strong> We work with universities, city officials, and community leaders to create joint solutions.</>,
                <><strong>Fund the Subsidy:</strong> Donors, sponsors, and local partners contribute to make affordability possible.</>,
                <><strong>Support Residents:</strong> Rent subsidies are applied directly to eligible residents, ensuring safe and stable housing.</>,
              ]} />
            ),
          },
        ]} />
      </Section>

      <Section tone="white" labelledBy="students">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="students">Focused on Students and Working Families</h2>
            <p className="lead muted">Our greatest impact begins with students.</p>
          </div>
          <div className="span-7 stack">
            <h3 className="h3">Our Mission</h3>
            <p>
              Project PRC partners with universities to make housing more accessible for first-generation and at-risk students who show potential
              but face economic barriers that threaten their academic journey. By removing the financial stress of unstable housing, we empower
              these students to focus on what matters most—their education and future.
            </p>
            <p>
              But our vision extends beyond campuses. Across the nation, many cities struggle to provide affordable or workforce housing. Project
              PRC steps in to bridge that gap, helping municipalities offer secure, dignified housing to the people who make their communities thrive.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="works">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="works">Why It Works</h2>
            <p className="muted">Project PRC’s rent subsidy model works because it aligns purpose with practicality:</p>
          </div>
          <div className="span-7 stack stack--lg">
            <Facts items={[
              { term: "Private Initiative", detail: "We take action instead of waiting for government programs." },
              { term: "Local Collaboration", detail: "Partnerships with universities, cities, and donors make the impact immediate and lasting." },
              { term: "Sustainable Design", detail: "Each property is structured to support affordability over the long term." },
            ]} />
            <p>Our approach keeps administrative costs low and outcomes high—ensuring that every dollar raised translates directly into housing stability for residents.</p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="help">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="help">How You Can Help</h2>
            <p>Project PRC’s mission is only possible through the generosity of people and organizations who care about housing security.</p>
            <p>You can support this effort in two powerful ways:</p>
            <Checklist items={[
              <><strong>Make a Donation:</strong> Your contribution directly funds rent subsidies for students and families in need.</>,
              <><strong>Volunteer:</strong> Join us in outreach, fundraising, or community engagement to expand our impact.</>,
            ]} />
            <p>Every dollar and every hour given helps create a community where no student or worker has to fear losing their home.</p>
            <p className="lead" style={{ color: "var(--white)" }}>Together, we can make housing stability a shared community achievement—not a government obligation.</p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <Button href="/donate-now/">Donate now</Button>
              <Button href="/volunteer/" variant="outline">Volunteer</Button>
            </div>
          </div>
          <div className="span-7 stack stack--lg">
            <h3 className="h3">Where your donation goes</h3>
            <DonationLadder />
            <div className="stack stack--sm">
              <h3 className="h3">Have questions?</h3>
              <div className="on-dark"><ContactDetails /></div>
            </div>
          </div>
        </div>
      </Section>

      <ReviewsBand />
    </>
  );
}
