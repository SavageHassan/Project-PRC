import type { Metadata } from "next";
import { Bullets, Button, Checklist, ContactDetails, Downloads, Faq, PageHero, Photo, Section, SectionHead } from "@/components/ui";
import { ReviewsBand } from "@/components/blocks";
import { NativeForm } from "@/components/interactive";
import { images, media } from "@/lib/media";
import { downloads, org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Partnerships | Support Housing",
  description: "Explore corporate partnerships with Project PRC to support student scholarships, housing stability, and financial education. Partner today.",
  alternates: { canonical: "/corporate-partnerships/" },
};

const guide = media(downloads.corporateGuide.path);

export default function CorporatePage() {
  return (
    <>
      <PageHero
        label="Corporate partnerships"
        title="Your Business Can Help Build Brighter Futures"
        img={images.corporateStudents}
        actions={<><Button href="#contact-section">Become a partner</Button><Button href={guide} variant="outline" download>Download the guide (PDF)</Button></>}
      >
        <p>
          Your business can help turn financial challenges into opportunities for a brighter future. Through corporate partnerships with Project
          PRC, you can support student housing scholarships, rental assistance, and financial education. Together, we can help people maintain
          stable housing, pursue their education, and move toward greater financial independence.
        </p>
      </PageHero>

      <Section tone="white" id="opportunities-guide" labelledBy="opportunity">
        <SectionHead label="Partner with purpose" title="Create Opportunity Through Corporate Partnerships" id="opportunity" />
        <div className="split">
          <div className="span-7 panel stack stack--lg">
            <div className="stack stack--sm">
              <h3 className="h2" style={{ fontSize: "1.75rem" }}>Student Housing Scholarships</h3>
              <p className="muted">Help students overcome housing barriers so they can focus on their education and work toward their future.</p>
            </div>
            <div className="grid grid--2">
              <div className="stack stack--sm">
                <h4 className="label">Need</h4>
                <Bullets items={["Housing expenses can put pressure on a student’s budget.", "Financial hardship can interrupt educational progress.", "Stable housing gives students a stronger foundation."]} />
              </div>
              <div className="stack stack--sm">
                <h4 className="label">How your business can help</h4>
                <Bullets items={["Support Project PRC’s student housing scholarship efforts.", "Connect your corporate giving with educational opportunity.", "Discuss current scholarship funding needs with our team."]} />
              </div>
            </div>
            <div className="stack stack--sm">
              <h4 className="label">Community impact</h4>
              <p>Your support can help reduce housing-related financial pressure and give students more room to focus on their studies.</p>
            </div>
            <div className="stack stack--sm">
              <h4 className="label">What your support helps make possible</h4>
              <Checklist items={["Greater housing stability", "Reduced financial stress", "Continued educational opportunity", "A stronger foundation for the future"]} />
            </div>
          </div>
          <div className="span-5 stack">
            <a href={guide} target="_blank" rel="noopener noreferrer" aria-label="Open the Corporate Partnerships guide (PDF)">
              <Photo img={images.corporateGuide} ratio="4 / 5" contain sizes="(min-width: 960px) 35vw, 100vw" />
            </a>
            <h3 className="h3">Explore Corporate Partnerships</h3>
            <p className="muted">Discover how your business can support Project PRC’s mission. Download our Corporate Partnerships brochure to explore.</p>
            <div><Button href={guide} download>Download guide (PDF)</Button></div>
          </div>
        </div>
      </Section>

      <Section labelledBy="why">
        <SectionHead title="Why Partner With Project PRC?" id="why">
          Bring your company’s values to life through support for housing stability and educational opportunity. A partnership with Project PRC
          connects your business with a mission that puts people and communities first.
        </SectionHead>
        <div className="grid grid--2">
          <div className="stack">
            <h3 className="h3">For Your Business</h3>
            <Checklist items={["Connect your corporate giving with a clear community purpose.", "Show employees and customers the causes your company supports.", "Build a relationship with a nonprofit focused on housing and opportunity."]} />
          </div>
          <div className="stack">
            <h3 className="h3">For Our Communities</h3>
            <Checklist items={["Help students overcome financial barriers to stable housing.", "Support residents facing temporary financial hardship.", "Help make financial education and community resources more accessible."]} />
          </div>
        </div>
        <div className="split split--center" style={{ marginTop: "clamp(48px, 6vw, 80px)" }}>
          <div className="span-4"><Photo img={images.chaseLogo} ratio="3 / 1" contain sizes="360px" /></div>
          <div className="span-8"><p className="lead">Chase sponsors our Financial Literacy Workshops at 625 at Prairie View, with Chase Home Lending Advisors and Financial Advisors helping lead the sessions.</p></div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq">
        <div className="split">
          <div className="span-4 stack">
            <h2 className="h2" id="faq">Corporate Partnership FAQs</h2>
            <p className="muted">Find answers about supporting Project PRC through a corporate partnership.</p>
          </div>
          <div className="span-8">
            <Faq items={[
              { q: "What is a corporate partnership with Project PRC?", a: "A corporate partnership connects your business’s charitable support with Project PRC’s mission to strengthen housing stability and create opportunity. Our team can help you explore current needs and discuss how your company would like to contribute." },
              { q: "What programs can our business help support?", a: "Project PRC’s programs include student housing scholarships, charitable rental assistance, and financial literacy workshops. Contact our team to discuss current funding priorities and available partnership opportunities." },
              { q: "How much does a corporate partnership cost?", a: "Contact our partnership team to discuss available opportunities and contribution amounts. The Corporate Partnerships brochure provides a starting point for exploring your company’s involvement." },
              { q: "How do we choose the right partnership opportunity?", a: "Start with the causes your company wants to support. Our team can discuss current program needs and help you identify an opportunity that fits your community giving priorities." },
              { q: "Where can we find the Corporate Partnerships brochure?", a: `Download the brochure from the partnership opportunities section above. You can also request a copy by emailing ${org.email}.` },
              { q: "How do we become a corporate partner?", a: `Complete the contact form below, email ${org.email}, or call ${org.phone.display}. Tell us about your business and the programs you are interested in supporting.` },
            ]} />
          </div>
        </div>
      </Section>

      <Section id="contact-section" labelledBy="contact">
        <div className="split">
          <div className="span-5 stack stack--lg">
            <div className="stack">
              <h2 className="h2" id="contact">Let’s Build a Partnership That Makes a Difference</h2>
              <p className="muted">Find a meaningful way for your business to support students, strengthen housing stability, and create opportunity.</p>
            </div>
            <div className="stack stack--sm">
              <h3 className="h3">Talk With Our Partnership Team</h3>
              <p className="muted">Have questions about corporate giving? Call {org.phone.display} or email {org.email} to discuss opportunities that fit your company’s goals.</p>
            </div>
            <ContactDetails />
            <div className="stack stack--sm">
              <h3 className="h3">Downloadable resources</h3>
              <Downloads keys={["rentalAssistanceGuide", "evictionAvoidanceGuide", "corporateGuide"]} />
            </div>
          </div>
          <div className="span-7 panel stack">
            <h3 className="h3">Start the Conversation</h3>
            <p className="muted">Tell us about your business and the causes you care about. Our team will help you explore the right partnership opportunity—no commitment required.</p>
            <NativeForm
              form="corporate-inquiry"
              submitLabel="Explore partnership options"
              successMessage="Thanks. Our partnership team has your message and will be in touch soon."
              fields={[
                { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name", half: true },
                { name: "company", label: "Company name", type: "text", required: true, autoComplete: "organization", half: true },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
                { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel", half: true },
                { name: "interest", label: "Which programs interest you?", type: "select", options: ["Student housing scholarships", "Charitable rental assistance", "Financial literacy workshops", "Not sure yet"] },
                { name: "message", label: "Message", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </Section>

      <ReviewsBand />
    </>
  );
}
