import type { Metadata } from "next";
import { Checklist, PageHero, Section } from "@/components/ui";
import { HubSpotForm } from "@/components/interactive";

export const metadata: Metadata = {
  title: "Housing Scholars Program Application",
  description: "Apply online for the Project PRC Housing Scholars Program. Complete your free scholarship application today.",
  alternates: { canonical: "/housing-scholars-application/" },
};

export default function ScholarsApplication() {
  return (
    <>
      <PageHero
        label="Housing Scholars Program"
        title="Apply Now for the Housing Scholars Program"
        crumbs={[{ href: "/", label: "Home" }, { href: "/housing-scholars-program/", label: "Housing Scholars Program" }]}
      >
        <p>2026–2027 Academic Year. Up to $2,500 toward rent. Your property must be part of the Network of Communities.</p>
      </PageHero>
      <Section tone="white" labelledBy="terms">
        <div className="split">
          <aside className="span-4 stack stack--lg">
            <div className="stack stack--sm">
              <h2 className="h3">What you’ll need</h2>
              <Checklist items={["Income documentation", "A transcript or grade report", "A one-page personal statement"]} />
            </div>
            <div className="stack stack--sm">
              <h2 className="h3" id="terms">Program Terms &amp; Important Information</h2>
              <p className="muted small">
                Up to 20 awards available for 2026-27. Applying does not guarantee an award. Scholars are selected by Project PRC’s independent
                committee using published criteria. Awards are subject to program terms and available funding. The Housing Scholars Program is
                administered by Project PRC Corporation, a 501(c)(3) nonprofit, and is not a rent discount or a leasing promotion of the property.
              </p>
            </div>
          </aside>
          <div className="span-8 panel">
            <HubSpotForm formId="scholarsApplication" title="Scholarship application" />
          </div>
        </div>
      </Section>
    </>
  );
}
