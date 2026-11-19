import type { Metadata } from "next";
import { Checklist, PageHero, Section } from "@/components/ui";
import { NativeForm } from "@/components/interactive";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Volunteer: Become a Dreamer",
  description: "Volunteer with Project PRC. Join us in outreach, fundraising, or community engagement to help students and families stay housed.",
  alternates: { canonical: "/volunteer/" },
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero label="Volunteer application" title="Become a Dreamer" img={images.volunteer}>
        <p><strong>Creating Housing Solutions, Building Future Opportunities.</strong></p>
        <p className="muted">
          Headquartered in Dallas, Texas, Project PRC Corporation focuses on developing apartment communities, student housing, low to moderate
          income housing, workforce housing, and more. Our goal is to create new homes for Americans and help communities grow and prosper.
        </p>
      </PageHero>
      <Section tone="white" labelledBy="apply">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="apply">Volunteer with us</h2>
            <p>Join us in outreach, fundraising, or community engagement to expand our impact.</p>
            <Checklist items={["Outreach", "Fundraising", "Community engagement"]} />
            <p className="muted">Every dollar and every hour given helps create a community where no student or worker has to fear losing their home.</p>
          </div>
          <div className="span-7 panel">
            <NativeForm
              form="volunteer"
              submitLabel="Send application"
              successMessage="Thank you for your information. Our team will be in touch about volunteering with Project PRC."
              fields={[
                { name: "first_name", label: "First name", type: "text", required: true, autoComplete: "given-name", half: true },
                { name: "last_name", label: "Last name", type: "text", autoComplete: "family-name", half: true },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
                { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", half: true },
                { name: "city", label: "City", type: "text", required: true, autoComplete: "address-level2", half: true },
                { name: "zip", label: "ZIP code", type: "text", required: true, autoComplete: "postal-code", inputMode: "numeric", pattern: "[0-9]{5}", half: true },
                { name: "status", label: "Are you a student?", type: "choice", options: ["College Student", "High School", "Neither"], required: true },
                { name: "reason", label: "Reason for volunteering", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
