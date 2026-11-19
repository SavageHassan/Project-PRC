import Image from "next/image";
import AudienceHero from "@/components/AudienceHero";
import ApproachExplorer from "@/components/ApproachExplorer";
import Link from "next/link";
import { Button, Photo, Section, SectionHead } from "@/components/ui";
import { CtaBand, DonateBand, ReviewsBand } from "@/components/blocks";
import { Video } from "@/components/interactive";
import { images, media } from "@/lib/media";


const programs = [
  {
    name: "Rental Assistance Program",
    kind: "Grant",
    text: "Up to 50% of monthly rent covered for up to 3 months. This is charitable grant assistance designed to help residents stay housed and is never repaid.",
    href: "/join-noc-tenants/",
  },
  {
    name: "Eviction Avoidance Program",
    kind: "Financing",
    text: "A separate financing option that allows a resident to obtain financing covering up to half of their rent, repaid over a five-year period.",
    href: "/join-noc-tenants/#compare",
  },
  {
    name: "Housing Scholars Program",
    kind: "Scholarship",
    text: "Up to 20 scholarships of $1,250 per semester and up to $2,500 a year for Prairie View A&M students living at 625 at Prairie View.",
    href: "/housing-scholars-program/",
  },
  {
    name: "Financial Literacy Workshops",
    kind: "Free workshops",
    text: "A free monthly workshop series at 625 at Prairie View, sponsored by Chase, helping residents ages 18–25 spend wisely, save with purpose, borrow smart, and build wealth.",
    href: "/financial-literacy-workshops/",
  },
];

const approach = [
  { title: "P3 Partnerships", img: images.approachP3, text: "We believe that public-private partnerships (P3s) are an effective way to bring about positive change in communities." },
  { title: "Education", img: images.approachEducation, text: "Project PRC seeks to lessen the burden of government by assisting school, universities, and Historically Black Colleges and Universities (HBCUs)" },
  { title: "Student Housing", img: images.approachStudent, text: "As the demand for higher education continues to grow, so too does the need for affordable and high-quality student housing." },
  { title: "Infrastructure", img: images.approachInfrastructure, text: "We believe that improving infrastructure is crucial for the long-term health and prosperity of our communities and our country." },
  { title: "Re-development", img: images.approachRedevelopment, text: "We believe in the power of redevelopment to transform abandoned properties into thriving, vibrant assets for the community." },
  { title: "Low Income Housing", img: images.approachLowIncome, text: "We are committed to developing low to moderate income housing properties that provide affordable and safe options for those in need." },
];

function Arrow() {
  return <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h13m-5-5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const programIcons = [
  <svg key="a" viewBox="0 0 24 24"><path d="M4 11.5L12 5l8 6.5V20H4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M10 20v-5h4v5" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>,
  <svg key="b" viewBox="0 0 24 24"><rect x="3.5" y="6" width="17" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 10h17M7 14.5h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>,
  <svg key="c" viewBox="0 0 24 24"><path d="M2.5 9.5L12 5l9.5 4.5L12 14z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M6.5 11.5V16c1.6 1.4 3.4 2 5.5 2s3.9-.6 5.5-2v-4.5M21.5 9.5V15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>,
  <svg key="d" viewBox="0 0 24 24"><path d="M4 19.5h16M6 16.5v-5m4 5v-8m4 8v-6m4 6V6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>,
];

export default function Home() {
  return (
    <>
      <AudienceHero />

      <Section labelledBy="about-intro" className="intro2">
        <div className="intro2__head">
          <span className="label">About Project PRC</span>
          <h2 className="h2" id="about-intro">Helping Students Stay Housed and Enrolled</h2>
        </div>
        <div className="intro2__film">
          <Video provider="vimeo" id="1188830283" title="Solving the Student Housing Crisis through Project PRC" duration="2:31" />
        </div>
        <div className="intro2__text">
          <p>
              Based in Dallas, Texas, we are an IRS approved 501(c)(3) nonprofit organization with a mission to serve our community by
              developing and re-developing properties that lessen the burden on government. We are not affiliated with any religious or
              political groups, but we do believe that everyone deserves access to safe, affordable, and high-quality housing, and we work
              tirelessly to make that a reality.
            </p>
          <p>
              Our team is dedicated to solving today’s housing crisis and adding value to communities across America. We do this by
              partnering with government entities, public and private schools and universities, other organizations, and donors to create P3
              partnerships that benefit all involved. We also specialize in student housing, low to moderate income housing, and the
              redevelopment of abandoned properties.
            </p>
          <div className="intro2__more"><Button href="/about-us/">Learn More<Arrow /></Button></div>
        </div>
      </Section>

      <Section tone="white" labelledBy="programs">
        <SectionHead title="Programs that keep people housed" id="programs">
          Support for residents of Network of Communities properties and the students who live there.
        </SectionHead>
        <ul className="pcards">
          {programs.map((p, i) => (
            <li key={p.name}>
              <Link href={p.href} className="pcard">
                <span className="pcard__icon" aria-hidden="true">{programIcons[i]}</span>
                <span className="pcard__kind">{p.kind}</span>
                <h3 className="pcard__title">{p.name}</h3>
                <p>{p.text}</p>
                <span className="pcard__go">Learn more<Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="projects">
        <div className="split">
          <div className="span-5 stack">
            <span className="label">Current projects</span>
            <h2 className="h2" id="projects">A look at our journey</h2>
            <p className="lead muted">
              Transformative projects that bring affordable housing and community development to life.
            </p>
            <div style={{ paddingTop: 12 }}>
              <Button href="/about-us/#projects" variant="outline">See all projects</Button>
            </div>
          </div>
          <div className="span-7 stack stack--lg">
            <Photo img={images.prairieViewDone} ratio="16 / 10" sizes="(min-width: 960px) 55vw, 100vw" />
            <div className="figures" style={{ ["--cols" as string]: 3 }}>
              <div className="figure"><span className="figure__value"><span data-count="120">120</span> units</span><span className="figure__label">625 at Prairie View Phase I. Completed and 100% Occupied</span></div>
              <div className="figure"><span className="figure__value"><span data-count="454">454</span> units</span><span className="figure__label">625 at Prairie View Phase II, student housing, Prairie View, TX</span></div>
              <div className="figure"><span className="figure__value"><span data-count="38">38</span> units</span><span className="figure__label">Kennedale Oaks multifamily townhomes, Kennedale, TX</span></div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="mission">
        <div className="mission">
          <div className="mission__intro">
            <h2 className="h2" id="mission">Our Mission &amp; Cause</h2>
            <p className="lead">
              At Project PRC Corporation, our mission is to empower people, groups, and companies the ability to change lives by making tax
              deductible donations that build affordable homes and fight homelessness in America. Our strong conviction is that safe,
              affordable, and high-quality housing should be accessible to all, and we work ceaselessly to make this a reality through your
              tax deductible donations.
            </p>
            <div className="mission__photo">
              <Image src={media(images.missionFamily.path)} alt={images.missionFamily.alt} fill sizes="(min-width: 960px) 40vw, 100vw" />
            </div>
          </div>
          <ol className="path" data-path>
            {[
              { title: "Identify Opportunities", body: "Our team is dedicated to finding innovative solutions to today’s housing crisis and adding value to communities across America. We do this through a variety of means." },
              { title: "Build Communities", body: "We work closely with government entities, public and private schools and universities, private donors, and other organizations to create P3 partnerships that benefit all involved." },
              { title: "Change Lives", body: "Everyone deserves a place to call home, regardless of their income. That’s why we are committed to developing and managing low to moderate income housing properties" },
            ].map((c, i) => (
              <li className="path__step" key={c.title}>
                <span className="path__n" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section labelledBy="approach">
        <SectionHead title="Our Approach" id="approach">
          Our team is dedicated to finding innovative solutions to today’s housing crisis and adding value to communities across America. We
          do this through a variety of means, including:
        </SectionHead>
        <ApproachExplorer items={approach} />
      </Section>

      <DonateBand />

      <ReviewsBand />

      <CtaBand
        title="Make a Difference Today – Build a Brighter Future!"
        actions={
          <>
            <Button href="/donate-now/">Donate Now</Button>
            <Button href="/volunteer/" variant="light">Become a Dreamer<Arrow /></Button>
          </>
        }
      >
        Join us in the mission to provide affordable housing for those in need. Every donation counts, every action matters. Together, we can
        create homes and change lives.
      </CtaBand>
    </>
  );
}
