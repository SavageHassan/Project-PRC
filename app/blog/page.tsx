import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Articles",
  description: "Find answers to today's issues facing affordable housing and the negative consequences for individuals and communities. Read more.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero label="Articles" title="Affordable housing, partnerships and how to help" />
      <Section tone="white" labelledBy="list">
        <h2 className="visually-hidden" id="list">All articles</h2>
        <ul className="post-list">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}/`}>
                <span className="post-list__cat">{p.category}</span>
                <span className="stack stack--sm">
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                </span>
                <time className="post-list__date" dateTime={p.date}>{p.dateLabel}</time>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
