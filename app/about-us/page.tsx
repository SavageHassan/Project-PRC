import type { Metadata } from "next";
import { Button, PageHero, Photo, Section, SectionHead } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { Video } from "@/components/interactive";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "About",
  description: "Our goal is to help 1,000 families this year with housing, food, educational programs, and hope. Learn more about Project PRC Corporation.",
  alternates: { canonical: "/about-us/" },
};

const board = [
  { name: "Charles Williams", role: "Chairman of the Board" },
  { name: "Nathan Barnes", role: "Executive Director" },
  { name: "Alicia Dietsch", role: "Board Member" },
  { name: "TC Alexander Jr.", role: "Board Member" },
];

const projects = [
  { name: "625 at Prairie View Phase I", detail: "120-Unit Student Housing Development Project Prairie View, TX.", status: "Completed and 100% Occupied", done: true, img: images.prairieView },
  { name: "625 at Prairie View Phase II", detail: "454-Unit Student Housing Development Project Prairie View, TX.", status: "Set to Begin Q2 2025", done: false, img: images.prairieView },
  { name: "Kennedale Oaks Townhomes", detail: "38-Unit Multifamily Townhome Development Project Kennedale, TX.", status: "Set to Begin Q2 2025", done: false, img: images.kennedale },
];

export default function AboutPage() {
  return (
    <>
      <PageHero label="About us" title="Building a Better Future Through Affordable Housing" />

      <Section tone="white" labelledBy="began">
        <div className="split">
          <div className="span-6 stack">
            <h2 className="h2" id="began">Where It All Began</h2>
            <p className="lead">
              Project PRC Corporation was founded in 2022 by Charles Williams, who saw a need for affordable to low income housing and made the
              choice to do something about it. Along with his team, he began building a better future for our country and helping our government,
              schools, universities, cities, and people along the way.
            </p>
            <p>
              Throughout our history, we have been guided by our mission to serve our community and create positive change through real estate
              development. We are proud of the work we have done and the difference we have made in the lives of others.
            </p>
            <p>
              Our team at Project PRC Corporation is made up of experienced professionals who are passionate about what they do. From our CEO to
              our project managers, every member of our team is dedicated to excellence and committed to making a positive impact on the world
              around us.
            </p>
            <p>
              If you are interested in learning more about Project PRC Corporation or partnering with us on a project, we would love to hear from
              you. Please don’t hesitate to contact us. Your tax deductible donations will help 1,000 families this year with housing, food,
              education, and hope.
            </p>
            <div className="btn-row" style={{ marginTop: 16 }}>
              <Button href="/donate-now/">Help change lives</Button>
              <Button href="/contact/" variant="outline">Contact us</Button>
            </div>
          </div>
          <div className="span-6">
            <Video provider="vimeo" id="1141546313" title="Watch: about Project PRC" />
          </div>
        </div>
      </Section>

      <Section labelledBy="what">
        <SectionHead label="What we do" title="Creating Partnerships and Building Communities with Purpose and Passion." id="what" />
        <div className="grid grid--3">
          {[
            { t: "Meet & Greet", d: "Partnering with government entities, public and private schools, universities, private donors, and other organizations to create P3 partnerships that benefit all involved and those in need.", img: images.meetGreet },
            { t: "Project Planning", d: "We plan and complete projects for people. We believe that everyone deserves access to safe, affordable, and high-quality housing, and we work tirelessly to make that a reality.", img: images.planning },
            { t: "Design & Create", d: "From apartments to single-family homes, we work with government agencies and other organizations to create housing solutions that meet the needs of our communities.", img: images.design },
          ].map((x) => (
            <div className="stack" key={x.t}>
              <Photo img={x.img} ratio="4 / 3" sizes="(min-width: 900px) 33vw, 100vw" />
              <h3 className="h3">{x.t}</h3>
              <p className="muted">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" labelledBy="board">
        <SectionHead title="Meet Our Board" id="board" />
        <ul className="people">
          {board.map((b) => (<li key={b.name}><strong>{b.name}</strong><span>{b.role}</span></li>))}
        </ul>
      </Section>

      <Section id="projects" labelledBy="projects-title">
        <SectionHead label="Current projects" title="A Look at Our Journey" id="projects-title">
          Transformative Projects That Bring Affordable Housing and Community Development to Life
        </SectionHead>
        <ul className="projects">
          {projects.map((p) => (
            <li className="project" key={p.name}>
              <Photo img={p.img} ratio="4 / 3" sizes="(min-width: 900px) 33vw, 100vw" />
              <span className={`project__status${p.done ? " project__status--done" : ""}`}>{p.status}</span>
              <h3>{p.name}</h3>
              <p className="muted">{p.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Make a Difference Today – Build a Brighter Future!"
        actions={<><Button href="/contact/">Let&apos;s work together</Button><Button href="/volunteer/" variant="outline">Become a Dreamer</Button></>}
      >
        Join us in the mission to provide affordable housing for those in need. Every donation counts, every action matters. Together, we can
        create homes and change lives.
      </CtaBand>
    </>
  );
}
