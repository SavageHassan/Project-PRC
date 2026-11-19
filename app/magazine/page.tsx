import type { Metadata } from "next";
import { Button, PageHero, Photo, Section } from "@/components/ui";
import { ContactAndResources } from "@/components/blocks";
import { NativeForm } from "@/components/interactive";
import { images } from "@/lib/media";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "College Housing Today: The Student Housing Magazine",
  description: "College Housing Today by Project PRC: packing lists, budget recipes, wellness tips and rental support for students, parents and property owners.",
  alternates: { canonical: "/magazine/" },
};

const editions = [
  {
    img: images.magStudents, audience: "For students", title: "Navigate College with Confidence.",
    body: [
      "Your college journey is one of the most exciting chapters of your life, and we’re here to make sure you have the tools to make it a success. This isn’t just about surviving; it’s about thriving. Dive into our ultimate dorm packing guide to ensure you have all the essentials (and know what not to bring). Learn how to make your space your own with budget-friendly decor hacks and see how fellow students have transformed their rooms in our “Room Spotlight” feature.",
      "Beyond the basics, we focus on your total well-being. Our “Weekly Wellness” section offers quick tips like the “3-Minute Room Reset” to clear your head and your space, alongside delicious, easy, and affordable recipes like “One-Pot Garlic Butter Pasta” that you can actually make in a dorm kitchen. And for those moments when challenges arise, know that you’re not alone. Project PRC provides real support, including information on our Rental Assistance and Eviction Avoidance Programs, designed to provide a safety net when you need it most.",
    ],
  },
  {
    img: images.magParents, audience: "For parents", title: "Support Their Success.",
    body: [
      "Sending your student off to college is a major milestone, filled with both excitement and a few nerves. Our resources are designed to help you navigate this transition, empowering you to be their best supporter from a distance. We provide practical, actionable advice on how to be their “prep partner, not their pack mule,” helping them take ownership of their move-in process while ensuring they have everything they need. Discover move-in day survival tips that will make the process smoother and less stressful for everyone involved.",
      "More importantly, we offer guidance on providing the right kind of emotional support. Learn how to acknowledge their mix of feelings, establish a healthy communication rhythm that fosters independence, and encourage them to develop their own problem-solving skills. Our goal is to help you strike the perfect balance between letting go and staying connected, ensuring you are a constructive part of their journey toward becoming a capable and confident adult.",
    ],
  },
  {
    img: images.magOwners, audience: "For property owners", title: "Connect with the Student Market.",
    body: [
      "The student rental market operates on a unique and fast-paced cycle. Our insights help you stay ahead of the curve. With 83% of students starting their search for off-campus housing before January, early engagement is the key to securing leases with responsible, long-term tenants. We provide targeted strategies to attract this demographic, from showcasing flexible 10- or 12-month lease options to promoting roommate-friendly layouts and highlighting the amenities that matter most to students, like security and strong Wi-Fi.",
      "Partnering with Project PRC offers more than just a listing—it connects you to a network dedicated to student stability. By joining our “Network of Communities,” you gain access to a pipeline of serious student renters. Furthermore, your partnership supports our Eviction Avoidance Program, which works directly with students and property managers to resolve issues before they escalate, providing you with more reliable tenancies and demonstrating your commitment to the well-being of the student community.",
    ],
  },
];

export default function MagazinePage() {
  return (
    <>
      <PageHero
        label="Read"
        title="College Housing Today"
        actions={<Button href={org.magazineUrl} external>Read the magazine</Button>}
      >
        <p><strong>Navigate College with Confidence.</strong> From packing lists and budget recipes to wellness tips and rental support, get the essential resources you need to thrive from day one.</p>
      </PageHero>
      {editions.map((e, i) => (
        <Section key={e.title} tone={i % 2 === 0 ? "white" : "paper"} labelledBy={`ed-${i}`}>
          <div className="split">
            <div className="span-4"><Photo img={e.img} ratio="3 / 2" sizes="(min-width: 960px) 30vw, 100vw" /></div>
            <div className="span-8 stack">
              <span className="label">{e.audience}</span>
              <h2 className="h2" id={`ed-${i}`}>{e.title}</h2>
              {e.body.map((p, j) => <p key={j} className={j === 0 ? "lead" : "muted"}>{p}</p>)}
              <div><Button href={org.magazineUrl} external variant="outline">Read this edition</Button></div>
            </div>
          </div>
        </Section>
      ))}
      <ContactAndResources
        heading="Contact Us for Advertising Opportunities"
        formTitle="Complete the form"
        form={
          <NativeForm
            form="advertising-inquiry"
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
