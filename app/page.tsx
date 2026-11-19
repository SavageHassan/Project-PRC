import Link from "next/link";
import { Button, Photo, RoofMark, Section, SectionHead, Steps } from "@/components/ui";
import { CtaBand, DonateBand, Reviews } from "@/components/blocks";
import { Video } from "@/components/interactive";
import { images } from "@/lib/media";

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
  { title: "P3 Partnerships", text: "We believe that public-private partnerships (P3s) are an effective way to bring about positive change in communities." },
  { title: "Education", text: "Project PRC seeks to lessen the burden of government by assisting school, universities, and Historically Black Colleges and Universities (HBCUs)" },
  { title: "Student Housing", text: "As the demand for higher education continues to grow, so too does the need for affordable and high-quality student housing." },
  { title: "Infrastructure", text: "We believe that improving infrastructure is crucial for the long-term health and prosperity of our communities and our country." },
  { title: "Re-development", text: "We believe in the power of redevelopment to transform abandoned properties into thriving, vibrant assets for the community." },
  { title: "Low Income Housing", text: "We are committed to developing low to moderate income housing properties that provide affordable and safe options for those in need." },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__copy">
              <svg className="hero__roof" viewBox="0 0 188 92" aria-hidden="true" focusable="false">
                <path d="M4 88 L94 6 L184 88" />
              </svg>
              <h1 className="display hero__title" id="hero-title">Affordable Housing is a Human Right</h1>
              <p className="lead hero__lead">
                There is a significant need for affordable housing in the United States. According to the National Low Income Housing
                Coalition, there is a shortage of 7.2 million affordable and available rental homes for extremely low income renters.
              </p>
              <div className="btn-row" style={{ marginTop: 32 }}>
                <Button href="/join-noc-tenants/">Get help with rent</Button>
                <Button href="/donate-now/" variant="outline">Donate</Button>
              </div>
            </div>
            <Photo img={images.ceremony05} ratio="4 / 5" priority className="hero__photo" sizes="(min-width: 960px) 40vw, 100vw" />
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
          <div className="span-6 stack">
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
              <Link className="text-link" href="/about-us/">Learn more about Project PRC</Link>
            </div>
          </div>
          <div className="span-6">
            <Video provider="vimeo" id="1188830283" title="Watch: Project PRC" />
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="programs">
        <SectionHead title="Programs that keep people housed" id="programs">
          Support for residents of Network of Communities properties and the students who live there.
        </SectionHead>
        <ul className="post-list">
          {programs.map((p) => (
            <li key={p.name}>
              <Link href={p.href}>
                <span className="post-list__cat">{p.kind}</span>
                <span className="stack stack--sm">
                  <h3 className="h3" style={{ fontSize: "1.375rem", fontWeight: 700 }}>{p.name}</h3>
                  <p>{p.text}</p>
                </span>
                <span className="post-list__date text-link" style={{ justifySelf: "start" }}>Learn more</span>
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
            <Photo img={images.prairieView} ratio="16 / 10" sizes="(min-width: 960px) 55vw, 100vw" />
            <div className="figures" style={{ ["--cols" as string]: 3 }}>
              <div className="figure"><span className="figure__value">120 units</span><span className="figure__label">625 at Prairie View Phase I. Completed and 100% Occupied</span></div>
              <div className="figure"><span className="figure__value">454 units</span><span className="figure__label">625 at Prairie View Phase II, student housing, Prairie View, TX</span></div>
              <div className="figure"><span className="figure__value">38 units</span><span className="figure__label">Kennedale Oaks multifamily townhomes, Kennedale, TX</span></div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="mission">
        <div className="split">
          <div className="span-5 stack">
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
        <div style={{ marginTop: "clamp(48px, 6vw, 88px)" }}>
          <Steps
            items={[
              { title: "Identify Opportunities", body: "Our team is dedicated to finding innovative solutions to today’s housing crisis and adding value to communities across America. We do this through a variety of means." },
              { title: "Build Communities", body: "We work closely with government entities, public and private schools and universities, private donors, and other organizations to create P3 partnerships that benefit all involved." },
              { title: "Change Lives", body: "Everyone deserves a place to call home, regardless of their income. That’s why we are committed to developing and managing low to moderate income housing properties" },
            ]}
          />
        </div>
      </Section>

      <Section labelledBy="approach">
        <div className="split">
          <div className="span-4 stack">
            <h2 className="h2" id="approach">Our Approach</h2>
            <p className="muted">
              Our team is dedicated to finding innovative solutions to today’s housing crisis and adding value to communities across America.
              We do this through a variety of means, including:
            </p>
          </div>
          <div className="span-8">
            <dl className="facts">
              {approach.map((a) => (
                <div key={a.title}>
                  <dt>{a.title}</dt>
                  <dd>{a.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <DonateBand />

      <Section tone="white" labelledBy="reviews">
        <SectionHead title="What people say about Project PRC" id="reviews" />
        <Reviews />
      </Section>

      <CtaBand
        title="Make a Difference Today – Build a Brighter Future!"
        note={<><strong>Become a Dreamer.</strong> Headquartered in Dallas, Texas, Project PRC Corporation focuses on developing apartment communities, student housing, low to moderate income housing, workforce housing, and more. Our goal is to create new homes for Americans and help communities grow and prosper. Please make an annual tax deductible donation today to help us fight homelessness in America and change lives.</>}
        actions={
          <>
            <Button href="/donate-now/">Donate now</Button>
            <Button href="/volunteer/" variant="outline">Become a Dreamer</Button>
          </>
        }
      >
        Join us in the mission to provide affordable housing for those in need. Every donation counts, every action matters. Together, we can
        create homes and change lives.
      </CtaBand>
    </>
  );
}
