import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description: "Project PRC Shop: merchandise from Project PRC, the Dallas nonprofit building affordable and student housing.",
  alternates: { canonical: "/shop/" },
};

/* The banner photo from Project PRC's own Printify store: four models wearing the merch.
   Each product card shows its own slice of that one photo. */
const BANNER = "https://pfy-prod-image-storage.s3.us-east-2.amazonaws.com/23711876/1c7a63fb-2f4b-4695-b984-52d7bd29da28";

const items = [
  { name: "Bucket hat", detail: "Navy, with “Affordable Housing is a Human Right” on the front.", x: "0%" },
  { name: "T-shirt, front", detail: "White tee printed with “Affordable Housing is a Human Right.”", x: "44.5%" },
  { name: "T-shirt, back", detail: "The Project PRC logo across the back.", x: "67.7%" },
  { name: "Hoodie", detail: "Navy hoodie with the same message on the chest.", x: "100%" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M5 12h13m-5-5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ShopPage() {
  return (
    <>
      <header className="shop-hero">
        <div className="container">
          <div className="shop-hero__head">
            <div>
              <p className="label">Shop</p>
              <h1 className="h1">Project PRC Shop</h1>
            </div>
            <p className="lead muted">
              Wear the message. Project PRC apparel says what we stand for: affordable housing is a human right. The store is getting
              ready, and these pieces are coming first.
            </p>
          </div>
          <div className="shop-hero__banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BANNER} alt="Models wearing Project PRC merch: a navy bucket hat, a white t-shirt front and back, and a navy hoodie" width={1200} height={400} />
            <span className="shop-hero__badge">Coming soon</span>
          </div>
        </div>
      </header>

      <section className="section" aria-labelledby="collection">
        <div className="container">
          <div className="shop-collection__head">
            <h2 className="h2" id="collection">The first collection</h2>
            <a className="btn btn--primary" href={org.shopUrl} target="_blank" rel="noopener noreferrer">
              Visit the store<Arrow /><span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
          <ul className="merch">
            {items.map((m) => (
              <li className="merch__card" key={m.name}>
                <div className="merch__photo" role="img" aria-label={m.name} style={{ backgroundImage: `url(${BANNER})`, backgroundPositionX: m.x }} />
                <div className="merch__body">
                  <h3>{m.name}</h3>
                  <p>{m.detail}</p>
                  <span className="merch__status">Coming soon</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shop-message" aria-labelledby="message">
        <div className="container shop-message__inner">
          <p className="shop-message__quote" id="message">
            Affordable <span>Housing</span> is a Human Right
          </p>
          <div className="shop-message__copy">
            <p>
              It&apos;s the line on the front of every shirt, and the reason Project PRC exists. Our store doesn&apos;t have products to buy yet.
              Until it opens, the fastest way to back the message is a tax-deductible gift.
            </p>
            <div className="btn-row">
              <Button href="/donate-now/">Donate now</Button>
              <Link href="/contact/" className="btn btn--light">Ask about merch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
