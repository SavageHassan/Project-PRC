import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | User Agreement",
  description: "Terms and conditions for using projectprc.org.",
  alternates: { canonical: "/terms-and-conditions/" },
  robots: { index: false },
};

// REVIEW: the live site has no terms text (the page shows a store "launching soon" placeholder). Replace with client-approved terms.
export default function TermsPage() {
  return (
    <Legal title="Terms & Conditions">
      <p>Our terms and conditions are being updated.</p>
      <p>For questions about using this website, our programs, or a donation, contact us at <a href={`mailto:${org.email}`}>{org.email}</a> or {org.phone.display}.</p>
    </Legal>
  );
}
