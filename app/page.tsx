import Image from "next/image";
import Link from "next/link";
import { Button, Photo, RoofMark, Section, SectionHead } from "@/components/ui";
import { CtaBand, DonateBand, ReviewsBand } from "@/components/blocks";
import { Video } from "@/components/interactive";
import { images, media } from "@/lib/media";

const doors = [
  {
    who: "Renters",
    title: "I'm a renter who needs assistance",
    desc: "Rental assistance and eviction avoidance for residents of Network of Communities properties.",
    href: "/join-noc-tenants/",
    go: "See if you qualify",
  },
  {
    who: "Property managers",
    title: "I'm a property manager looking to join",
    desc: "Reduce evictions, preserve occupancy, and protect your revenue.",
    href: "/join-noc-apartments/",
    go: "Join the Network",
  },
  {
    who: "Donors",
    title: "I want to help fight homelessness",
    desc: "All donations are tax-deductible. $20 a month can help prevent utility shut off for students or families.",
    href: "/donate-now/",
    go: "Donate",
  },
  {
    who: "Businesses",
    title: "My company wants to partner",
    desc: "Support student housing scholarships, rental assistance, and financial education.",
    href: "/corporate-partnerships/",
    go: "Explore partnerships",
  },
];

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
      <section className="hero hero2" aria-labelledby="hero-title">
        <svg className="hero2__bgroof" viewBox="0 0 1440 420" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMin slice">
          <path d="M-40 400 L720 30 L1480 400" />
          <path d="M80 400 L720 92 L1360 400" />
        </svg>
        <div className="container">
          <div className="hero2__top">
            <div className="hero2__title-wrap">
              <span className="pill">
                <span className="pill__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 11.5L12 5l8 6.5V20h-5.5v-5h-5v5H4z" fill="currentColor" /></svg>
                </span>
                Housing Solutions
              </span>
              <h1 className="display hero2__title" id="hero-title">
                <span className="hero2__line"><span>Affordable <em>Housing</em></span></span>
                <span className="hero2__line"><span>is a Human Right</span></span>
              </h1>
            </div>
            <div className="hero2__intro">
              <p>
                There is a significant need for affordable housing in the United States. According to the National Low Income Housing
                Coalition, there is a shortage of 7.2 million affordable and available rental homes for extremely low income renters.
              </p>
              <div className="btn-row">
                <Button href="/donate-now/">Donate Now</Button>
                <Button href="/about-us/" variant="outline">About Project PRC</Button>
              </div>
            </div>
          </div>

          <div className="hero2__media">
            <div className="hero2__frame">
              <div className="hero2__img" data-parallax="0.08">
                <Image src={media(images.homeHero.path)} alt={images.homeHero.alt} fill priority sizes="100vw" />
              </div>
            </div>
            <div className="hero2__ctas">
              <Link href="/join-noc-tenants/" className="hero2__cta hero2__cta--dark">
                <span className="hero2__cta-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M11 12l8-8m-3 3l2 2m-4 0l2 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
                I&apos;m a Renter Who Needs Assistance
              </Link>
              <Link href="/join-noc-apartments/" className="hero2__cta hero2__cta--blue">
                <span className="hero2__cta-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20V9l8-5 8 5v11h-6v-6h-4v6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg></span>
                I&apos;m a Property Manager Looking to Join
              </Link>
            </div>
          </div>
        </div>

        <nav className="doors" aria-label="Find your way in">
          <div className="container">
            <ul className="doors__list">
              {doors.map((d) => (
                <li className="door" key={d.href}>
                  <Link href={d.href}>
                    <RoofMark className="door__roof" />
                    <span className="door__who">{d.who}</span>
                    <span className="door__title">{d.title}</span>
                    <span className="door__desc">{d.desc}</span>
                    <span className="door__go">{d.go}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>

      <Section labelledBy="about-intro">
        <div className="split split--center">
          <div className="span-6 order-2 stack">
            <span className="label">About Project PRC</span>
            <h2 className="h2" id="about-intro">Helping Students Stay Housed and Enrolled</h2>
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
            <div style={{ paddingTop: 8 }}>
              <Button href="/about-us/">Learn More<Arrow /></Button>
            </div>
          </div>
          <div className="span-6 order-1">
            <Video provider="vimeo" id="1188830283" title="Solving the Student Housing Crisis through Project PRC" duration="2:31" />
          </div>
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
        <div className="split split--center">
          <div className="span-5">
            <h2 className="h2" id="mission">Our Mission &amp; Cause</h2>
          </div>
          <div className="span-7">
            <p className="lead">
              At Project PRC Corporation, our mission is to empower people, groups, and companies the ability to change lives by making tax
              deductible donations that build affordable homes and fight homelessness in America. Our strong conviction is that safe,
              affordable, and high-quality housing should be accessible to all, and we work ceaselessly to make this a reality through your
              tax deductible donations.
            </p>
          </div>
        </div>
        <div className="mission-panel" data-reveal="panel">
          <div className="mission-panel__bg" data-parallax="0.06">
            <Image src={media(images.missionFamily.path)} alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" />
          </div>
          <ol className="mission-panel__cols">
            {[
              { title: "Identify Opportunities", body: "Our team is dedicated to finding innovative solutions to today’s housing crisis and adding value to communities across America. We do this through a variety of means." },
              { title: "Build Communities", body: "We work closely with government entities, public and private schools and universities, private donors, and other organizations to create P3 partnerships that benefit all involved." },
              { title: "Change Lives", body: "Everyone deserves a place to call home, regardless of their income. That’s why we are committed to developing and managing low to moderate income housing properties" },
            ].map((c, i) => (
              <li className="mission-panel__col" key={c.title}>
                <span className="mission-panel__n" aria-hidden="true">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section labelledBy="approach">
        <div className="split split--center" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
          <div className="span-6">
            <h2 className="h2" id="approach">Our Approach</h2>
          </div>
          <div className="span-6 stack">
            <p className="muted">
              Our team is dedicated to finding innovative solutions to today’s housing crisis and adding value to communities across America.
              We do this through a variety of means, including:
            </p>
          </div>
        </div>
        <ul className="acards">
          {approach.map((a) => (
            <li className="acard" key={a.title}>
              <div className="acard__img">
                <Image src={media(a.img.path)} alt="" fill sizes="(min-width: 900px) 33vw, 100vw" />
              </div>
              <div className="acard__body">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <DonateBand />

      <ReviewsBand />

      <CtaBand
        title="Make a Difference Today – Build a Brighter Future!"
        actions={
          <>
            <Button href="/donate-now/" variant="dark">Donate Now</Button>
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
