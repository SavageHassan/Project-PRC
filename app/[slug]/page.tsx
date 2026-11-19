import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, type Block } from "@/content/posts";
import { blogImages, media } from "@/lib/media";
import { Button } from "@/components/ui";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const img = blogImages[slug]?.[0];
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: `/${slug}/` },
    openGraph: { type: "article", publishedTime: post.date, images: img ? [{ url: media(img.path) }] : undefined },
  };
}

function render(b: Block, i: number, slug: string) {
  if ("h2" in b) return <h2 key={i}>{b.h2}</h2>;
  if ("h3" in b) return <h3 key={i}>{b.h3}</h3>;
  if ("h4" in b) return <h4 key={i}>{b.h4}</h4>;
  if ("p" in b) return <p key={i}>{b.p}</p>;
  if ("ul" in b) return <ul key={i}>{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>;
  if ("quote" in b) return <blockquote key={i}><p>{b.quote}</p><cite>{b.cite}</cite></blockquote>;
  if ("img" in b) {
    const img = blogImages[slug]?.[b.img];
    if (!img) return null;
    return (
      <figure key={i}>
        <span className="photo" style={{ aspectRatio: "16 / 9", display: "block" }}>
          <Image src={media(img.path)} alt={img.alt} fill sizes="(min-width: 800px) 720px, 100vw" />
        </span>
      </figure>
    );
  }
  return null;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Project PRC Corporation" },
    publisher: { "@type": "Organization", name: "Project PRC Corporation", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` } },
    mainEntityOfPage: `${SITE_URL}/${slug}/`,
  };
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <header className="page-hero">
        <div className="container stack">
          <nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link> / <Link href="/blog/">Articles</Link></nav>
          <h1 className="h1" style={{ maxWidth: "20ch" }}>{post.title}</h1>
          <p className="post-meta"><span>{post.category}</span><time dateTime={post.date}>{post.dateLabel}</time><span>Project PRC Corporation</span></p>
        </div>
      </header>
      <section className="section section--white" style={{ paddingTop: "clamp(40px,5vw,72px)" }}>
        <div className="container">
          <div className="prose">
            {post.body.map((b, i) => render(b, i, slug))}
            {post.references?.length ? (
              <>
                <h2>References</h2>
                <ul>
                  {post.references.map((r) => (
                    <li key={r.label}>{r.href ? <a href={r.href} target="_blank" rel="noopener noreferrer">{r.label}</a> : r.label}</li>
                  ))}
                </ul>
              </>
            ) : null}
            <div className="btn-row" style={{ marginTop: 40 }}>
              <Button href="/donate-now/">Make a tax-deductible donation</Button>
              <Button href="/corporate-partnerships/" variant="outline">Become a sponsor</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="more">
        <div className="container">
          <h2 className="h3" id="more" style={{ marginBottom: 16 }}>Recent updates and announcements</h2>
          <ul className="post-list">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}/`}>
                  <span className="post-list__cat">{p.category}</span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{p.title}</h3>
                  <time className="post-list__date" dateTime={p.date}>{p.dateLabel}</time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
