import type { Metadata } from "next";
import { Checklist, PageHero, Section } from "@/components/ui";
import { ContactAndResources } from "@/components/blocks";
import { HubSpotForm } from "@/components/interactive";
import { media } from "@/lib/media";
import { downloads, org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Network of Communities Application for Properties",
  description: "Apply to join the Project PRC Network of Communities Today. Stop evictions for your tenants before they happen.",
  alternates: { canonical: "/network-of-communities-application-for-properties/" },
};

export default function PropertyApplication() {
  return (
    <>
      <PageHero
        label="Apply now"
        title="Network of Communities Property Application"
        crumbs={[{ href: "/", label: "Home" }, { href: "/join-noc-apartments/", label: "Property owners" }]}
      >
        <p>
          Fill out the form below to apply with Project PRC’s Network of Communities Today. End evictions before they happen with our rental
          assistance and eviction avoidance programs.
        </p>
      </PageHero>

      <Section tone="white" labelledBy="join-title">
        <div className="split">
          <aside className="span-4 stack stack--lg">
            <h2 className="h3" id="join-title">Join the Network of Communities Today</h2>
            <dl className="compare__rows">
              <div><dt>One-time membership fee</dt><dd>$3,500 per property</dd></div>
              <div><dt>Program fee</dt><dd>$3.50 a month per participating resident</dd></div>
            </dl>
            <div className="stack stack--sm">
              <h3 className="h3">Have these ready</h3>
              <Checklist items={["Company name and DBA", "Property address", "Total number of units and units occupied", "Your contact details"]} />
            </div>
            <p className="muted small">
              Prefer paper? <a className="text-link" href={media(downloads.propertyAgreement.path)} target="_blank" rel="noopener noreferrer">Download the form</a>{" "}
              and mail it to us at: {org.address.oneLine}
            </p>
          </aside>
          <div className="span-8 panel">
            <HubSpotForm formId="propertyApplication" title="Property application" />
          </div>
        </div>
      </Section>

      <ContactAndResources formTitle="Have questions first?" downloads={["nocPartnershipGuide", "propertyAgreement", "rentalAssistanceGuide", "evictionAvoidanceGuide"]} />
    </>
  );
}
