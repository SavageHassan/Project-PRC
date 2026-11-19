import type { Metadata } from "next";
import Image from "next/image";
import { Button, Section, SectionHead } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { Video } from "@/components/interactive";
import { images, media } from "@/lib/media";

export const metadata: Metadata = {
  title: "About",
  description: "Our goal is to help 1,000 families this year with housing, food, educational programs, and hope. Learn more about Project PRC Corporation.",
  alternates: { canonical: "/about-us/" },
};

const board = [
  { name: "Charles Williams", role: "Chairman of the Board", img: images.boardCharles },
  { name: "Nathan Barnes", role: "Executive Director", img: images.boardNathan },
  { name: "Alicia Dietsch", role: "Board Member", img: images.boardAlicia },
  { name: "TC Alexander Jr.", role: "Board Member", img: images.boardTC },
];

const projects = [
  { name: "625 at Prairie View Phase II", detail: "454-Unit Student Housing Development Project Prairie View, TX.", status: "Set to Begin Q2 2025", done: false, img: images.prairieView, units: 454 },
  { name: "Kennedale Oaks Townhomes", detail: "38-Unit Multifamily Townhome Development Project Kennedale, TX.", status: "Set to Begin Q2 2025", done: false, img: images.kennedale, units: 38 },
  { name: "625 at Prairie View Phase I", detail: "120-Unit Student Housing Development Project Prairie View, TX.", status: "Completed and 100% Occupied", done: true, img: images.prairieViewDone, units: 120 },
];

function Arrow() {
  return <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h13m-5-5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const what = [
  { t: "Meet & Greet", d: "Partnering with government entities, public and private schools, universities, private donors, and other organizations to create P3 partnerships that benefit all involved and those in need.", img: images.meetGreet,
    icon: <path d="M3 12l4-4 4 3 3-3 3 2 4-2M7 8v7l3 3h4l3-3V10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /> },
  { t: "Project Planning", d: "We plan and complete projects for people. We believe that everyone deserves access to safe, affordable, and high-quality housing, and we work tirelessly to make that a reality.", img: images.planning,
    icon: <><rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M8 9h8M8 13h8M8 17h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></> },
  { t: "Design & Create", d: "From apartments to single-family homes, we work with government agencies and other organizations to create housing solutions that meet the needs of our communities.", img: images.design,
    icon: <path d="M4 11.5L12 5l8 6.5V20H4zM10 20v-5h4v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /> },
];

export default function AboutPage() {
  return (
    <>
      <header className="about-hero" data-no-reveal>
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <p className="label">About us</p>
            <h1 className="h1">Building a Better Future Through Affordable Housing</h1>
            <p className="lead muted">
              A Dallas nonprofit developing apartment communities, student housing, and low to moderate income housing since 2022.
            </p>
            <div className="btn-row">
              <Button href="#began" variant="outline">Our story</Button>
              <Button href="#board" variant="outline">Meet the board</Button>
            </div>
          </div>
          <div className="about-hero__media">
            <Video provider="vimeo" id="1141546313" title="Project PRC: The Social Impact Engine" duration="1:34" />
          </div>
        </div>
      </header>

      <Section tone="white" labelledBy="began">
        <div className="began">
          <div className="began__copy stack">
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
              <Button href="/donate-now/">Help Change Lives<Arrow /></Button>
              <Button href="/contact/" variant="outline">Contact us</Button>
            </div>
          </div>
          <div className="began__collage" aria-hidden="true">
            <div className="began__a"><Image src={media(images.aboutBegan.path)} alt="" fill sizes="(min-width: 960px) 30vw, 70vw" /></div>
            <div className="began__b"><Image src={media(images.aboutHero.path)} alt="" fill sizes="(min-width: 960px) 25vw, 60vw" /></div>
            <div className="began__year"><strong>2022</strong><span>Founded by Charles Williams</span></div>
          </div>
        </div>
      </Section>

      <Section labelledBy="what">
        <SectionHead title="What We Do" id="what">Creating Partnerships and Building Communities with Purpose and Passion.</SectionHead>
        <ol className="rows">
          {what.map((x, i) => (
            <li className={`row${i % 2 ? " row--flip" : ""}`} key={x.t}>
              <div className="row__img"><Image src={media(x.img.path)} alt={x.img.alt} fill sizes="(min-width: 900px) 45vw, 100vw" /></div>
              <div className="row__copy">
                <span className="row__icon" aria-hidden="true"><svg viewBox="0 0 24 24">{x.icon}</svg></span>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Make a Difference Today – Build a Brighter Future!"
        actions={<><Button href="/donate-now/">Donate Now</Button><Button href="/volunteer/" variant="light">Become a Dreamer<Arrow /></Button></>}
      >
        Join us in the mission to provide affordable housing for those in need. Every donation counts, every action matters. Together, we can
        create homes and change lives.
      </CtaBand>

      <Section tone="white" labelledBy="board">
        <SectionHead title="Meet Our Board" id="board" />
        <ul className="board2">
          {board.map((b) => (
            <li className="board2__card" key={b.name}>
              <div className="board2__photo"><Image src={media(b.img.path)} alt={b.img.alt} fill sizes="(min-width: 1000px) 25vw, (min-width: 640px) 50vw, 100vw" /></div>
              <h3>{b.name}</h3>
              <p>{b.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" labelledBy="projects-title">
        <div className="split split--center" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
          <div className="span-6"><h2 className="h2" id="projects-title">Current Projects</h2></div>
          <div className="span-6"><p className="lead muted">A Look at Our Journey: Transformative Projects That Bring Affordable Housing and Community Development to Life</p></div>
        </div>
        <ul className="projects">
          {projects.map((p) => (
            <li className="project" key={p.name}>
              <div className="project__img">
                <Image src={media(p.img.path)} alt={p.img.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
                <span className={`project__status${p.done ? " project__status--done" : ""}`}>{p.status}</span>
              </div>
              <div className="project__body">
                <h3>{p.name}</h3>
                <p className="muted">{p.detail}</p>
                <p className="project__units"><span data-count={p.units}>{p.units}</span> units</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: 40 }}>
          <Button href="/contact/">Let&apos;s Work Together<Arrow /></Button>
        </div>
      </Section>
    </>
  );
}
