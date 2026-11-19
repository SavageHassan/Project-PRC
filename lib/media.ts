/**
 * Image registry. Paths are relative to the WordPress uploads folder on projectprc.org.
 * By default images are served from the live uploads folder; run `npm run fetch-assets`
 * and set NEXT_PUBLIC_MEDIA_BASE=/media to self-host them.
 * Only real Project PRC photography is used. Template stock files from 2025/05 are not.
 */

export const MEDIA_BASE = (process.env.NEXT_PUBLIC_MEDIA_BASE || "https://projectprc.org/wp-content/uploads").replace(/\/$/, "");

export const media = (path: string) => `${MEDIA_BASE}/${path}`;

export type Img = { path: string; alt: string; w: number; h: number };

const ceremony = (n: string, portrait: boolean): Img => ({
  path: `2026/10/Project-PRC-Non-Profit-Scholarship-Ceremony-Texas-${n}-768x${portrait ? 960 : 432}.jpg`,
  alt: "Housing Scholars Program scholarship ceremony",
  w: 768,
  h: portrait ? 960 : 432,
});

const aug = (n: string, portrait: boolean, suffix = "-1"): Img => ({
  path: `2026/08/IMG_${n}${suffix}-768x${portrait ? 960 : 432}.jpg`,
  alt: "Project PRC community event",
  w: 768,
  h: portrait ? 960 : 432,
});

export const images = {
  scholarsHero: { path: "2026/07/Housing-Scholars-Program-Project-PRC-Non-profit-Texas.jpg", alt: "Housing Scholars Program at 625 at Prairie View", w: 1600, h: 1000 },
  scholarsFeature: { path: "2026/07/Housing-Scholars-Program-Project-PRC-Non-profit-TX.jpg", alt: "Housing Scholars Program, Project PRC", w: 1200, h: 900 },
  scholarsApply: { path: "2026/07/Housing-Scholars-Program-Apply-Now-Project-PRC-Non-Profit-TX.jpg", alt: "Apply for the Housing Scholars Program", w: 1200, h: 900 },
  workshopsHero: { path: "2026/08/financial-literacy-workshops-625-at-prairie-view.jpg", alt: "Financial literacy workshop at 625 at Prairie View", w: 1600, h: 1000 },
  workshopsFeature: { path: "2026/08/financial-literacy-workshops-project-prc-non-profit-organization-dallas-texas.jpg", alt: "Residents at a Project PRC financial literacy workshop", w: 1200, h: 900 },
  chaseLogo: { path: "2026/08/Chase-logo.jpg", alt: "Chase", w: 600, h: 200 },
  corporateHero: { path: "2026/10/non-profit-corporate-partnerships-project-prc-.jpg", alt: "Project PRC corporate partnerships", w: 1600, h: 1000 },
  corporateStudents: { path: "2026/10/students-receiving-scholarships-project-prc-nonprofit.jpg", alt: "Students receiving Housing Scholars awards", w: 1600, h: 1000 },
  corporateGuide: { path: "2026/10/Project-PRC-Corporate-Non-Proft-Corporate-Partnerships-Download-Guide.jpg", alt: "Cover of the Project PRC Corporate Partnerships guide", w: 900, h: 1100 },
  whyPartner: { path: "2026/10/Why-Partner-With-Project-PRC.jpg", alt: "Why partner with Project PRC", w: 1200, h: 900 },
  eventsHero: { path: "2026/08/Events-Project-PRC-Non-Profit-Dallas-TX.jpg", alt: "Project PRC event in Texas", w: 1600, h: 1000 },
  rentSubsidyHero: { path: "2025/11/Rent-Subsidy-Program-Project-PRC.jpg", alt: "Rent Subsidy Program, Project PRC", w: 1600, h: 1000 },
  tenantAppHero: { path: "2026/01/Rental-Assistance-Eveiction-Avoidance-Application-Project-PRC.jpg", alt: "Rental assistance application", w: 1600, h: 1000 },
  propertyAppHero: { path: "2025/10/Network-of-Communities-Application-Project-PRC.jpg", alt: "Network of Communities property application", w: 1600, h: 1000 },
  prairieView: { path: "2023/12/Project-PRC-Affordable-Student-Housing-Solutions-Development-Projects-Prairie-View-Texas.jpg", alt: "625 at Prairie View student housing, Prairie View, Texas", w: 1200, h: 800 },
  kennedale: { path: "2022/12/Project-PRC-Corporation-Affordable-Housing-Developers-Projects-Multifamily-Townhomes-Kennedale-Oaks-Site-Plan.jpg", alt: "Kennedale Oaks Townhomes site plan, Kennedale, Texas", w: 1200, h: 800 },
  meetGreet: { path: "2025/06/meet-greet.jpg", alt: "Project PRC meeting with partners", w: 900, h: 700 },
  planning: { path: "2025/06/export-2.jpg", alt: "Project planning", w: 900, h: 700 },
  design: { path: "2025/06/real-estate-1.jpg", alt: "Housing design and development", w: 900, h: 700 },
  evictionAssistance: { path: "2025/06/eviction-assistance.jpg", alt: "Eviction assistance for renters", w: 900, h: 700 },
  volunteer: { path: "2025/05/export-volunteer.jpg", alt: "Project PRC volunteers", w: 900, h: 700 },
  magStudents: { path: "2025/08/College-Housing-Today-The-Online-Student-Housing-Magazing-for-Students-by-Project-PRC.jpg", alt: "College Housing Today, edition for students", w: 627, h: 419 },
  magParents: { path: "2025/08/College-Housing-Today-The-Online-Student-Housing-Magazing-for-Parents-by-Project-PRC.jpg", alt: "College Housing Today, edition for parents", w: 627, h: 419 },
  magOwners: { path: "2025/08/College-Housing-Today-The-Online-Student-Housing-Magazing-for-Property-Owners-by-Project-PRC.jpg", alt: "College Housing Today, edition for property owners", w: 627, h: 419 },
  ceremony01: ceremony("01", false),
  ceremony05: ceremony("05", true),
};

export const galleries: { title: string; images: Img[] }[] = [
  {
    title: "Housing Scholars scholarship ceremony",
    images: [
      ceremony("01", false), ceremony("05", true), ceremony("06", false), ceremony("11", false),
      ceremony("02", true), ceremony("09", true), ceremony("07", true), ceremony("10", true),
      ceremony("04", true), ceremony("08", true), ceremony("03", false),
    ],
  },
  {
    title: "Community event, August 2026",
    images: [
      aug("9545", false), aug("9527", true), aug("9515", false), aug("9513", false), aug("9511", true),
      aug("9507", true), aug("9503", false), aug("9499", true), aug("9495", true), aug("9492", false),
      aug("9490", false), aug("9488", true), aug("9485", false), aug("9482", true), aug("9477", false),
      aug("9474", true), aug("9473", false), aug("9532", false, ""), aug("9522", false, ""), aug("9530", false, ""),
    ],
  },
];

export const blogImages: Record<string, Img[]> = {
  "the-need-for-housing": [
    { path: "2022/12/The-current-state-of-housing-by-the-numbers-PRC-Corp-Real-Estate-Developers-TX..jpg", alt: "The current state of housing by the numbers", w: 1200, h: 675 },
    { path: "2022/12/The-current-state-of-housing-conclusion-PRC-Corp-Real-Estate-Developers-TX..jpg", alt: "How you can help address the housing need", w: 1200, h: 675 },
  ],
  "the-importance-of-infrastructure-improvement-in-the-united-states": [
    { path: "2023/01/The-Importance-of-Infrastructure-Improvement-in-the-United-States-Project-PRC-Corporation-Texas.jpg", alt: "Infrastructure improvement in the United States", w: 1200, h: 675 },
    { path: "2023/01/The-Importance-of-Infrastructure-Improvement-in-the-United-States-Water-and-Sewage-Project-PRC-Corporation.jpg", alt: "Water and sewage infrastructure", w: 1200, h: 675 },
    { path: "2023/01/The-Importance-of-Infrastructure-Improvement-in-the-United-States-Moving-Forward-Project-PRC-Corporation.jpg", alt: "Moving forward with infrastructure improvement", w: 1200, h: 675 },
  ],
  "the-benefits-of-donating-to-nonprofit-organizations": [
    { path: "2023/01/The-Benefits-of-Donating-to-Nonprofit-Organizations-Project-PRC-Corporation-Arlington-Texas.jpg", alt: "The benefits of donating to nonprofit organizations", w: 1200, h: 675 },
    { path: "2023/01/Additional-Benefits-of-Donating-to-Nonprofit-Organizations-Project-PRC-Corporation-Arlington-Texas.jpg", alt: "Additional benefits of donating", w: 1200, h: 675 },
    { path: "2023/01/The-Current-State-of-Homelessness-Project-PRC-Corporation.jpg", alt: "The current state of homelessness", w: 1200, h: 675 },
    { path: "2023/01/Why-You-Should-Consider-Donating-to-Project-PRC-Corporation.jpg", alt: "Why you should consider donating to Project PRC", w: 1200, h: 675 },
  ],
  "public-private-partnerships-a-comprehensive-guide": [
    { path: "2023/01/Public-Private-Partnerships-A-Comprehensive-Guide-Project-PRC-Corporation-Arlington-Texas.jpg", alt: "Public-private partnerships", w: 1200, h: 675 },
    { path: "2023/01/Challenges-of-Public-Private-Partnerships-A-Comprehensive-Guide-Project-PRC-Corporation.jpg", alt: "Challenges of public-private partnerships", w: 1200, h: 675 },
    { path: "2023/01/Best-Practices-for-Public-Private-Partnerships-Project-PRC-Corporation-Arlington-Texas.jpg", alt: "Best practices for public-private partnerships", w: 1200, h: 675 },
    { path: "2023/01/Examples-of-Public-Private-Partnerships-A-Comprehensive-Guide-Project-PRC-Corporation.jpg", alt: "Examples of public-private partnerships", w: 1200, h: 675 },
    { path: "2023/01/Public-Private-Partnerships-for-a-Better-America-A-Comprehensive-Guide-Project-PRC-Corporation.jpg", alt: "Public-private partnerships for a better America", w: 1200, h: 675 },
  ],
  "how-can-i-help-fight-homelessness-in-america": [
    { path: "2023/01/How-Can-I-Help-Fight-Homelessness-in-America-Project-PRC-Corporation.jpg", alt: "How can I help fight homelessness in America", w: 1200, h: 675 },
    { path: "2023/01/How-Can-I-Help-Fight-Homelessness-in-America-Donation-Levels-Project-PRC-Corporation.jpg", alt: "Donation levels", w: 1200, h: 675 },
    { path: "2023/01/How-Can-I-Help-Fight-Homelessness-in-America-The-Numbers-Project-PRC-Corporation.jpg", alt: "Homelessness by the numbers", w: 1200, h: 675 },
  ],
};
