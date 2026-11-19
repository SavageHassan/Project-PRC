/**
 * Site-wide facts. Every value here comes from the Phase One audit of projectprc.org
 * (see ProjectPRC-Website-Context-File.md). Values marked REVIEW are conflicts on the
 * live site that the client still needs to confirm (see REVIEW.md).
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://projectprc.org").replace(/\/$/, "");
/** True only for the hosted click-through preview, where third-party embeds cannot load. */
export const PREVIEW = process.env.NEXT_PUBLIC_PREVIEW === "1";

export const WP_URL = (process.env.NEXT_PUBLIC_WP_URL || "https://projectprc.org").replace(/\/$/, "");

export const org = {
  name: "Project PRC Corporation",
  shortName: "Project PRC",
  ein: "88-4009642",
  status: "IRS Approved 501(c)(3) Nonprofit Organization",
  founded: 2022,
  founder: "Charles Williams",
  address: {
    street: "1250 W Mockingbird Ln #320",
    city: "Dallas",
    region: "TX",
    postal: "75247",
    oneLine: "1250 W Mockingbird Ln #320 Dallas, TX 75247",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Project+PRC+Corporation+1250+W+Mockingbird+Ln+%23320+Dallas+TX+75247",
  },
  // REVIEW: (682) 235-3048 also appears on the Rent Subsidy and Tenants pages. The footer number is used everywhere.
  phone: { display: "(682) 354-4483", href: "tel:+16823544483" },
  email: "partners@projectprc.org",
  hours: "M—F: 8:00AM–5:00PM CST",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/projectprc" },
    { label: "X (Twitter)", href: "https://twitter.com/projectprc" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/projectprc/" },
    { label: "Instagram", href: "https://www.instagram.com/projectprc/" },
  ],
  shopUrl: "https://project-prc-shop.printify.me/",
  workshopRegisterUrl: "https://airtable.com/appxEygTAa0cntfHS/pagMurdz5S8nA6hHK/form",
  magazineUrl: "https://player.flipsnack.com?hash=QTZEQjhDQThCN0ErN25hdjM5OXh1Mw==",
};

/** HubSpot forms already in use on the live site (portal 20923598). */
export const hubspot = {
  portalId: "20923598",
  region: "na1",
  forms: {
    tenantApplication: "e194c47f-ad70-4678-b413-e25e52d753ad",
    propertyApplication: "d48bc3ba-9303-4f88-b933-4f553b2d6103",
    scholarsApplication: "ca251671-100b-465d-b770-4e6c91f9cbbb",
    contact: "4e0c8fa5-af28-4fcd-a505-d1cd5f447496",
  },
};

/** GiveWP donation form 2728, served by the WordPress install. */
export const giveFormUrl = `${WP_URL}/?givewp-route=donation-form-view&form-id=2728&locale=en_US`;

export const downloads = {
  rentalAssistanceGuide: {
    label: "Rental Assistance Program Guide",
    path: "2025/07/Project-PRC-Rental-Assistance-Program-Guide.pdf",
  },
  evictionAvoidanceGuide: {
    label: "Eviction Avoidance Program Guide",
    path: "2025/07/Project-PRC-Eviction-Avoidance-Guide-5.pdf",
  },
  nocPartnershipGuide: {
    label: "Network of Communities Partnership Guide",
    path: "2025/07/Project-PRC-NOC-Partneship-Guide-3.pdf",
  },
  propertyAgreement: {
    label: "Network of Communities Property Agreement",
    path: "2025/10/Network-of-Communities-Property-Agreement-Project-PRC.pdf",
  },
  corporateGuide: {
    label: "Corporate Partnership Guide",
    path: "2026/10/Project-PRC-Corporate-Non-Proft-Partnerships-Guide.pdf",
  },
} as const;

export type NavItem = { label: string; href: string; description?: string; external?: boolean };
export type NavGroup = { label: string; href?: string; items: NavItem[] };

export const nav: NavGroup[] = [
  {
    label: "Get help",
    items: [
      { label: "For residents", href: "/join-noc-tenants/", description: "Rental assistance and eviction avoidance at member properties" },
      { label: "Apply for assistance", href: "/rental-assistance-or-eviction-avoidance-application/", description: "Tenant application for RAP or EAP" },
      { label: "Housing Scholars Program", href: "/housing-scholars-program/", description: "Up to $1,250 per semester toward rent for PVAMU students" },
      { label: "Financial Literacy Workshops", href: "/financial-literacy-workshops/", description: "Free monthly workshops at 625 at Prairie View" },
    ],
  },
  {
    label: "Property owners",
    items: [
      { label: "Join the Network", href: "/join-noc-apartments/", description: "Reduce evictions and protect your revenue" },
      { label: "Network of Communities", href: "/network-of-communities/", description: "How the Network connects owners and renters" },
      { label: "Property application", href: "/network-of-communities-application-for-properties/", description: "Apply to add your property" },
    ],
  },
  {
    label: "Give",
    items: [
      { label: "Donate", href: "/donate-now/", description: "Tax-deductible gifts, one time or monthly" },
      { label: "Rent Subsidy Program", href: "/rent-subsidy-program/", description: "What your donation funds" },
      { label: "Corporate partnerships", href: "/corporate-partnerships/", description: "Support scholarships and housing stability" },
      { label: "Volunteer", href: "/volunteer/", description: "Outreach, fundraising and community engagement" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "About us", href: "/about-us/", description: "Our story, board and current projects" },
      { label: "Testimonials", href: "/testimonials/", description: "Stories and reviews" },
      { label: "Events", href: "/our-events/", description: "Photos from our events" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Articles", href: "/blog/" },
      { label: "College Housing Today", href: "/magazine/", description: "Our magazine for students, parents and property owners" },
      { label: "Program guides", href: "/resources/", description: "Downloadable PDFs" },
      { label: "Shop", href: "/shop/" },
    ],
  },
];

export const footerPrograms: NavItem[] = [
  { label: "Housing Scholars Program", href: "/housing-scholars-program/" },
  { label: "Rental Assistance", href: "/rental-assistance-or-eviction-avoidance-application/" },
  { label: "Rent Subsidy Program", href: "/rent-subsidy-program/" },
  { label: "For Tenants", href: "/join-noc-tenants/" },
  { label: "For Properties", href: "/join-noc-apartments/" },
  { label: "Financial Literacy Workshops", href: "/financial-literacy-workshops/" },
  { label: "Corporate Partnerships", href: "/corporate-partnerships/" },
];

export const footerQuick: NavItem[] = [
  { label: "About Us", href: "/about-us/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Events", href: "/our-events/" },
  { label: "Articles", href: "/blog/" },
  { label: "Volunteer", href: "/volunteer/" },
  { label: "Shop", href: "/shop/" },
  { label: "Contact", href: "/contact/" },
];
