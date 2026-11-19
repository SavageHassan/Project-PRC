import type { Metadata } from "next";
import { Button, Facts, PageHero, Photo, Section, SectionHead, Steps } from "@/components/ui";
import { DonateBand } from "@/components/blocks";
import { images } from "@/lib/media";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financial Literacy Workshops at 625",
  description: "Join free financial literacy workshops at 625 at Prairie View. Learn budgeting, credit, saving and investing with Project PRC.",
  alternates: { canonical: "/financial-literacy-workshops/" },
};

const REGISTER = org.workshopRegisterUrl;

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        label="Financial Literacy Workshops"
        title="Real money skills, built for our residents."
        img={images.workshopsHero}
        actions={<Button href={REGISTER} external>Register now to attend</Button>}
      >
        <p>
          A free monthly workshop series at 625 at Prairie View — helping residents ages 18–25 learn to spend wisely, save with purpose, borrow
          smart, and build wealth that lasts. Sponsored by Chase.
        </p>
      </PageHero>

      <section className="section section--tight section--white" aria-label="Workshop facts">
        <div className="container">
          <div className="figures">
            <div className="figure"><span className="figure__value">Always Free</span><span className="figure__label">No cost to attend</span></div>
            <div className="figure"><span className="figure__value">Ages 18–25</span><span className="figure__label">Made for young residents</span></div>
            <div className="figure"><span className="figure__value">On Property</span><span className="figure__label">625 Clubhouse conference room</span></div>
            <div className="figure"><span className="figure__value">About an Hour</span><span className="figure__label">Casual and welcoming</span></div>
          </div>
        </div>
      </section>

      <Section labelledBy="program">
        <div className="split">
          <div className="span-5 stack">
            <span className="label">The Program</span>
            <h2 className="h2" id="program">Money confidence starts close to home.</h2>
          </div>
          <div className="span-7 stack">
            <p className="lead">
              Most of us were never taught how money actually works. Project PRC is partnering with Chase to change that — right here at 625 at
              Prairie View. Each month we’ll open the clubhouse for a relaxed, practical workshop where residents can ask real questions and
              leave with skills they’ll use for life.
            </p>
            <p className="muted">
              The full curriculum is being built now with financial experts, so the schedule is still coming together. Every session is free,
              welcoming, and designed for where you are today — no experience required.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="skills">
        <SectionHead title="Four skills, one foundation" id="skills">
          Everything we teach ladders up to the four building blocks of a healthy financial life.
        </SectionHead>
        <div className="grid grid--4">
          {[
            ["Spending", "Build a budget that fits your real life and make every dollar count."],
            ["Saving", "Set goals, build an emergency cushion, and pay yourself first."],
            ["Borrowing", "Understand credit, manage debt, and protect your credit score."],
            ["Investing", "Grow what you have and build lasting wealth through long-term investing."],
          ].map(([t, d]) => (
            <div className="stack stack--sm" key={t} style={{ borderTop: "2px solid var(--ink)", paddingTop: 20 }}>
              <h3 className="h3">{t}</h3>
              <p className="muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="series">
        <SectionHead label="The workshop series" title="What We’re Planning to Cover" id="series">
          Here’s the series we’re shaping with our partners at Chase. Topics and dates are still being finalized—consider this a preview of what’s ahead.
        </SectionHead>
        <Steps cols={5} items={[
          { title: "Setting Goals, Budgeting & Saving", body: "Map where your money goes and build a plan that actually sticks." },
          { title: "Understanding Credit & Managing Debt", body: "Learn how credit scores work and smart ways to pay down what you owe." },
          { title: "Avoiding Fraud & Scams", body: "Spot common scams and keep your money and identity safe." },
          { title: "Homeownership Basics", body: "Learn about the path from renting to owning with a Home Lending Advisor." },
          { title: "Investing Is for Everyone", body: "Start growing your money one step at a time with a Financial Advisor." },
        ]} />
        <div className="panel stack stack--sm" style={{ marginTop: 32, maxWidth: 720 }}>
          <h3 className="h3">1-on-1 Advisor Time</h3>
          <p className="muted">After select workshops, sit down with a financial advisor to talk through your own questions.</p>
        </div>
      </Section>

      <Section tone="white" labelledBy="details">
        <div className="split">
          <div className="span-4 stack">
            <span className="label">The details</span>
            <h2 className="h2" id="details">Everything You Need to Know</h2>
          </div>
          <div className="span-8">
            <Facts items={[
              { term: "When", detail: "Workshops are planned once a month. Final dates and times will be selected using resident feedback. Sessions run about an hour." },
              { term: "Where", detail: "On-property at 625 @ Prairie View in the clubhouse conference room." },
              { term: "Who", detail: "Open to all 625 residents and designed with young adults ages 18–25 in mind. Everyone is welcome." },
              { term: "Cost", detail: "Completely free. Just bring yourself, your questions and a desire to strengthen your financial future." },
              { term: "Refreshments", detail: "Light snacks and drinks will be provided during every workshop session." },
              { term: "Format", detail: "This is a rolling series, so residents can join during any month and attend the topics that interest them most." },
            ]} />
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="register">
        <div className="split split--center">
          <div className="span-7 stack">
            <h2 className="h2" id="register">Residents: Register now</h2>
            <p className="lead">
              These workshops start September 21st, 2026. Sign up, attend, and win prizes and giveaways. Attend all sessions and get added to the
              list to win a trip!
            </p>
            <div className="btn-row" style={{ marginTop: 20 }}><Button href={REGISTER} external>Register now</Button></div>
          </div>
          <div className="span-5"><Photo img={images.workshopsFeature} ratio="352 / 381" dark sizes="(min-width: 960px) 30vw, 100vw" /></div>
        </div>
      </Section>

      <Section labelledBy="chase">
        <div className="split split--center">
          <div className="span-4"><Photo img={images.chaseLogo} ratio="3 / 1" contain sizes="360px" /></div>
          <div className="span-8 stack">
            <span className="label">Our partner</span>
            <h2 className="h2" id="chase">In Partnership With Chase</h2>
            <p>
              Project PRC is partnering with Chase to bring trusted, practical financial education directly to residents of 625 at Prairie View.
              Chase Home Lending Advisors and Financial Advisors will help lead workshops covering important money skills residents can use
              throughout their lives.
            </p>
            <div><Button href={REGISTER} external variant="outline">Register now to attend</Button></div>
          </div>
        </div>
      </Section>

      <DonateBand />
    </>
  );
}
