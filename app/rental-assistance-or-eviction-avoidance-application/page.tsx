import type { Metadata } from "next";
import { Checklist, PageHero, Section } from "@/components/ui";
import { ContactAndResources } from "@/components/blocks";
import { HubSpotForm } from "@/components/interactive";

export const metadata: Metadata = {
  title: "Rental Assistance or Eviction Avoidance Application for Tenants",
  description: "Apply for rental assistance through the Project PRC Network of Communities Today. Get the help you need when you need it most.",
  alternates: { canonical: "/rental-assistance-or-eviction-avoidance-application/" },
};

export default function TenantApplication() {
  return (
    <>
      <PageHero
        label="Apply now"
        title="Rental Assistance or Eviction Avoidance Tenant Application"
        crumbs={[{ href: "/", label: "Home" }, { href: "/join-noc-tenants/", label: "For residents" }]}
      >
        <p>Welcome! This form is for residents who currently live at a property that’s part of Project PRC’s Network of Communities.</p>
      </PageHero>

      <Section tone="white" labelledBy="apply-title">
        <div className="split">
          <aside className="span-4 stack stack--lg">
            <div className="stack stack--sm">
              <h2 className="h3" id="apply-title">Apply for Assistance Today</h2>
              <p className="muted">Through our housing stability programs, Project PRC offers:</p>
            </div>
            <dl className="compare__rows">
              <div>
                <dt>Rental Assistance Program (R.A.P.)</dt>
                <dd>Charitable grant assistance covering up to 50% of monthly rent for up to 3 months. Never repaid.</dd>
              </div>
              <div>
                <dt>Eviction Avoidance Program (E.A.P.)</dt>
                <dd>Financing for up to half of monthly rent, repaid over five years (APR 24.99%).</dd>
              </div>
            </dl>
            <div className="stack stack--sm">
              <h3 className="h3">Before you start</h3>
              <Checklist items={[
                "Your last 3 months’ rent must be paid on time.",
                "Requests must be submitted at least 10 days before rent is due, unless otherwise approved.",
                "Please complete all sections and upload the required documents to ensure timely review.",
                "Submitting this form does not guarantee approval or payment.",
              ]} />
            </div>
          </aside>
          <div className="span-8 panel">
            <HubSpotForm formId="tenantApplication" title="Tenant application" />
          </div>
        </div>
      </Section>

      <ContactAndResources formTitle="Have questions first?" />
    </>
  );
}
