import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description: "Project PRC Shop: merchandise from Project PRC, the Dallas nonprofit building affordable and student housing.",
  alternates: { canonical: "/shop/" },
};

/* The live store (Printify) has no products yet, so this page says so plainly
   and keeps people moving to donate or get in touch. */
export default function ShopPage() {
  return (
    <section className="shop" aria-labelledby="shop-title">
      <div className="container shop__grid">
        <div className="shop__copy">
          <p className="label">Shop</p>
          <h1 className="h1" id="shop-title">Project PRC Shop</h1>
          <p className="lead muted">
            Our store doesn&apos;t have products yet. When it opens, it will carry Project PRC apparel you can wear to show that
            affordable housing is a human right.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={org.shopUrl} target="_blank" rel="noopener noreferrer">
              Visit the store<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <Button href="/contact/" variant="outline">Ask about merch</Button>
          </div>
          <div className="shop__alt">
            <p><strong>Want to help today?</strong> All donations are tax-deductible.</p>
            <Link href="/donate-now/" className="text-link">Donate to Project PRC</Link>
          </div>
        </div>

        <div className="shop__art" aria-hidden="true">
          <div className="shop__tee shop__tee--back">
            <svg viewBox="0 0 300 300"><path d="M95 30l-60 30 20 55 30-12v177h130V103l30 12 20-55-60-30c-8 18-26 28-55 28S103 48 95 30z" /></svg>
          </div>
          <div className="shop__tee">
            <svg viewBox="0 0 300 300"><path d="M95 30l-60 30 20 55 30-12v177h130V103l30 12 20-55-60-30c-8 18-26 28-55 28S103 48 95 30z" /></svg>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" width={120} height={24} className="shop__logo" />
          </div>
          <span className="shop__tag">Coming soon</span>
        </div>
      </div>
    </section>
  );
}
