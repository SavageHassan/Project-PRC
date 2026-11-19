import type { Metadata } from "next";
import Link from "next/link";
import { Downloads, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Program Guides & Resources",
  description: "Download Project PRC program guides: Rental Assistance, Eviction Avoidance, Network of Communities, and Corporate Partnerships.",
  alternates: { canonical: "/resources/" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero label="Resources" title="Program guides">
        <p>Every Project PRC guide in one place. All files are PDFs.</p>
      </PageHero>
      <Section tone="white" labelledBy="residents">
        <div className="grid grid--2">
          <div className="stack">
            <h2 className="h3" id="residents">For residents</h2>
            <Downloads keys={["rentalAssistanceGuide", "evictionAvoidanceGuide"]} />
          </div>
          <div className="stack">
            <h2 className="h3">For property owners</h2>
            <Downloads keys={["nocPartnershipGuide", "propertyAgreement"]} />
          </div>
          <div className="stack">
            <h2 className="h3">For businesses</h2>
            <Downloads keys={["corporateGuide"]} />
          </div>
          <div className="stack">
            <h2 className="h3">Read more</h2>
            <ul className="downloads">
              <li><Link href="/magazine/">College Housing Today magazine <small>Online</small></Link></li>
              <li><Link href="/blog/">Articles <small>5 articles</small></Link></li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
