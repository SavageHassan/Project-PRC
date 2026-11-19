import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, org } from "@/lib/site";
import { media } from "@/lib/media";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/montserrat-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Project PRC • Affordable Housing Solutions | Dallas Nonprofit",
    template: "%s | Project PRC",
  },
  description:
    "Project PRC, a Dallas‑based 501(c)(3) nonprofit, builds affordable & student housing, fights homelessness, and partners across communities.",
  icons: { icon: media("2025/06/android-chrome-512x512-1.png") },
  openGraph: {
    type: "website",
    siteName: "Project PRC",
    locale: "en_US",
    images: [{ url: media("2023/12/Project-PRC-Affordable-Housing-Solutions-Nonprofit-Dallas-Texas.jpg") }],
  },
  twitter: { card: "summary_large_image", site: "@projectprc" },
};

export const viewport: Viewport = { themeColor: "#f7f5f4", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: org.name,
  alternateName: org.shortName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  foundingDate: String(org.founded),
  founder: { "@type": "Person", name: org.founder },
  taxID: org.ein,
  nonprofitStatus: "Nonprofit501c3",
  email: org.email,
  telephone: "+1-682-354-4483",
  address: {
    "@type": "PostalAddress",
    streetAddress: org.address.street,
    addressLocality: org.address.city,
    addressRegion: org.address.region,
    postalCode: org.address.postal,
    addressCountry: "US",
  },
  sameAs: org.social.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
