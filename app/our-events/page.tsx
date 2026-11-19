import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { DonateBand } from "@/components/blocks";
import { Gallery } from "@/components/interactive";
import { galleries } from "@/lib/media";

export const metadata: Metadata = {
  title: "Events | Local Action, Lasting Impact",
  description: "Explore Project PRC event photos and see how people and partnerships create positive change in local communities.",
  alternates: { canonical: "/our-events/" },
};

export default function EventsPage() {
  return (
    <>
      <PageHero label="Project PRC Events" title="Local Action, Lasting Impact">
        <p><strong>Bringing People Together for Change.</strong> See the moments. Celebrate the people. Be inspired to make a difference.</p>
        <p className="muted">
          Project PRC events bring people together to strengthen communities, share meaningful experiences, and create positive change. Every
          gathering represents another opportunity to connect, serve, and make a lasting impact.
        </p>
        <p className="muted">Explore our event photo gallery to see the people, partnerships, and memorable moments that bring the Project PRC mission to life.</p>
      </PageHero>
      {galleries.map((g, i) => (
        <Section key={g.title} tone={i % 2 === 0 ? "white" : "paper"} labelledBy={`g-${i}`}>
          <div className="section-head"><h2 className="h2" id={`g-${i}`}>{g.title}</h2><p className="muted">{g.images.length} photos</p></div>
          <Gallery images={g.images} title={g.title} />
        </Section>
      ))}
      <DonateBand />
    </>
  );
}
