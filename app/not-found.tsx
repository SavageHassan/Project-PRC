import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container stack" style={{ paddingBlock: "48px 96px" }}>
        <h1 className="h1">This page has moved or doesn’t exist.</h1>
        <p className="lead muted">Try one of these instead, or use the menu above.</p>
        <div className="btn-row">
          <Button href="/join-noc-tenants/">Get help with rent</Button>
          <Button href="/join-noc-apartments/" variant="outline">Property owners</Button>
          <Button href="/donate-now/" variant="outline">Donate</Button>
        </div>
        <p><Link className="text-link" href="/">Go to the homepage</Link></p>
      </div>
    </section>
  );
}
