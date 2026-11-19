import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { DonateBand, ReviewsBand } from "@/components/blocks";
import { Video } from "@/components/interactive";

export const metadata: Metadata = {
  title: "Testimonials – Housing Impact Stories & Initiatives",
  description: "Project PRC videos showcasing our testimonials and success stories. See how we’re helping college students at risk, stay in school.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero label="Testimonials" title="Inspiring Stories, Real Impact">
        <p><strong>Bringing Change, One Story at a Time.</strong> Watch. Learn. Get Inspired to Do Something BIG.</p>
        <p className="muted">Explore our collection of impactful video testimonials, and success stories that highlight the difference we make.</p>
      </PageHero>
      <Section tone="white" labelledBy="videos">
        <h2 className="visually-hidden" id="videos">Video testimonials</h2>
        <div className="grid grid--2">
          <Video provider="youtube" id="hkBGa8a38hs" title="Watch: Project PRC testimonial" />
          <Video provider="youtube" id="-2L89EGaBco" title="Watch: Project PRC success story" />
        </div>
      </Section>
      <ReviewsBand title="Reviews" />
      <DonateBand heading="Help Students Stay Enrolled… When They Need It Most." />
    </>
  );
}
