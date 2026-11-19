import type { Metadata } from "next";
import { Button, Checklist, Figures, PageHero, Photo, Section, SectionHead, Steps, Notice } from "@/components/ui";
import { NativeForm } from "@/components/interactive";
import { DonateBand } from "@/components/blocks";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Housing Scholars Program | Up to $1,250 a Semester",
  description: "Get up to $1,250 per semester toward rent through Project PRC's Housing Scholars Program. Free application for eligible PVAMU students.",
  alternates: { canonical: "/housing-scholars-program/" },
};

/** Set to true when the application window opens; the page switches from "notify me" to "apply". */
const WINDOW_OPEN = false;

function ApplyState() {
  if (WINDOW_OPEN) return <Button href="/housing-scholars-application/">Apply now</Button>;
  return (
    <div className="stack" style={{ width: "100%" }}>
      <Notice><p><strong>*Fall Semester 2026 Scholarship Window has Closed.</strong> Leave your email and we’ll tell you when applications open for next semester.</p></Notice>
    </div>
  );
}

export default function ScholarsPage() {
  return (
    <>
      <PageHero
        label="Housing Scholars Program"
        title="Get Up To $1,250 Per Semester"
        img={images.scholarsFeature}
        actions={WINDOW_OPEN ? <Button href="/housing-scholars-application/">Apply now</Button> : <Button href="#notify">Apply next semester</Button>}
      >
        <p>
          The Project PRC Housing Scholars Program awards up to 20 scholarships of $1,250 per semester and up to $2,500 a year to Prairie View
          A&amp;M students living at 625 at Prairie View.
        </p>
      </PageHero>

      <Section tone="white" labelledBy="about-program">
        <div className="split">
          <div className="span-6 stack">
            <h2 className="h2" id="about-program">Rent should not be the reason a Panther leaves school.</h2>
            <p>
              College is expensive. Rent should not be the reason a Panther leaves school. That is why Project PRC, a 501(c)(3) nonprofit
              dedicated to housing stability, is funding the Housing Scholars Program at 625 at Prairie View.
            </p>
            <p>
              Selected scholars receive $1,250 per semester, applied directly to rent as a credit of about $208 a month – a meaningful reduction
              on every rent payment from September through February, with automatic consideration for spring renewal.
            </p>
          </div>
          <div className="span-6 stack stack--lg">
            <Figures items={[
              { value: "$1,250", label: "Per semester, applied directly to rent" },
              { value: "≈ $208", label: "Rent credit a month" },
              { value: "Up to 20", label: "Awards available for 2026-27" },
            ]} />
            <Photo img={images.ceremony01} ratio="16 / 9" sizes="(min-width: 960px) 50vw, 100vw" />
          </div>
        </div>
      </Section>

      <Section labelledBy="who">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="who">Who can apply</h2>
            <p className="muted">
              Full-time PVAMU students with a lease (or lease application approved) at 625 at Prairie View, a 2.5+ GPA (freshmen may use their
              high school GPA), and household income within program limits – most Pell-eligible students qualify.
            </p>
          </div>
          <div className="span-7 stack">
            <h3 className="h3">Eligibility Requirements</h3>
            <Checklist items={[
              "Enrolled (or admitted and enrolling) as a full-time student at Prairie View A & M University.",
              "Executed 12-month lease – or a pending lease application – at a participating Network of Communities property (pilot: 625 at Prairie View). Both current tenants and new applicants are eligible; awards to new applicants are contingent on lease execution. Current tenants in good standing with a solid rental history receive priority through the scoring rubric (Section 4).",
              "Household income at or below 80% of Area Median Income for the Houston-The Woodlands-Sugar Land MSA, documented by FAFSA Student Aid Index, Pell Grant eligibility, or prior-year household tax return.",
              "Cumulative GPA of 2.5 or higher (final high school GPA for incoming freshmen).",
              "Good conduct standing: no unresolved lease violations at move-in and agreement to the community standards addendum.",
              "Complete application: form, income documentation, transcript or grade report, and one-page personal statement.",
            ]} />
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="how">
        <SectionHead title="How scholars are chosen" id="how">
          Every application is scored by Project PRC’s independent selection committee on a published 100-point rubric covering financial need,
          academics, rental history, personal statement, community engagement, and housing stability factors. Current residents in good standing
          earn additional points for documented on-time rent history.
        </SectionHead>
        <Steps cols={3} items={[
          { title: "Apply", body: "Applying is free and takes minutes: submit the online form, income documentation, a transcript or grade report, and a one-page personal statement." },
          { title: "Applications are open July 13 through August 1", body: "Every application is scored by the independent selection committee." },
          { title: "Selections are announced by August 15", body: "Awards are applied directly to rent as a monthly credit." },
        ]} />
      </Section>

      <Section id="notify" labelledBy="notify-title">
        <div className="split">
          <div className="span-5 stack">
            <h2 className="h2" id="notify-title">{WINDOW_OPEN ? "Applications are open" : "Apply next semester"}</h2>
            <ApplyState />
          </div>
          <div className="span-7 panel stack">
            {WINDOW_OPEN ? (
              <Button href="/housing-scholars-application/">Start your application</Button>
            ) : (
              <>
                <h3 className="h3">Tell me when applications open</h3>
                <NativeForm
                  form="scholars-notify"
                  submitLabel="Notify me"
                  successMessage="You’re on the list. We’ll email you when the next scholarship window opens."
                  fields={[
                    { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name" },
                    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
                    { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", half: true },
                    { name: "resident", label: "Do you currently live at 625 at Prairie View?", type: "choice", options: ["Yes", "No"], required: true },
                  ]}
                />
              </>
            )}
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="terms">
        <div className="split">
          <div className="span-5"><h2 className="h2" id="terms">Program Terms &amp; Requirements</h2></div>
          <div className="span-7 stack">
            <p className="lead">Please read this prior to applying for the Housing Scholars Program.</p>
            <p className="muted">
              Up to 20 awards available for 2026-27. Applying does not guarantee an award. Scholars are selected by Project PRC’s independent
              committee using published criteria. Awards are subject to program terms and available funding. The Housing Scholars Program is
              administered by Project PRC Corporation, a 501(c)(3) nonprofit, and is not a rent discount or a leasing promotion of the property.
            </p>
          </div>
        </div>
      </Section>

      <DonateBand heading="Help Students Stay Enrolled… When They Need It Most." />
    </>
  );
}
