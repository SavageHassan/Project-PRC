# Project PRC — Website Context File
**Single source of truth for the projectprc.org revamp · Phase One deliverable**
Audit date: 19 November 2026 · Method: live crawl of every URL in projectprc.org's sitemap (30 pages, 5 posts) in a real browser, including popups, collapsed FAQs, tabbed content and embedded HubSpot/GiveWP forms; plus both reference sites.
Content below is verbatim. Lines marked **AUDIT** are observations, not site copy.

## Contents
- A. Website structure · C. Visual & asset inventory · D. Functional audit · E. UX & conversion audit · Brand system synthesis · Open questions for the client
- B. Complete content inventory (page by page, verbatim)
- Reference sites: prcequityfund.com, prcinvestors.com

## Limitations
- /blog/ listing would not finish loading in the browser (>50 s, repeatedly); its 5 posts were captured individually in full.
- /checkout/ not captured separately (WooCommerce store is empty; /shop/ and /cart/ show the same placeholder).
- Donation step 2 (payment details) and form success states were not submitted, by design.
- Performance figures were measured on the user's machine in a background browser tab: directional, not a Lighthouse score.
- Screenshots were not possible (browser pane hidden); visual notes come from computed styles.
- Printify shop contents (external) not inventoried.

---

# A. WEBSITE STRUCTURE

## Page inventory (30 URLs + 5 posts + externals)
| # | URL | In nav? | Purpose | Status |
|---|---|---|---|---|
| 1 | / | Logo | Home | Live |
| 2 | /about-us/ (/about/ redirects here) | About Us | Org story, board, projects | Live |
| 3 | /testimonials/ | Testimonials | 2 YouTube videos + donate | Live, thin |
| 4 | /housing-scholars-program/ | Programs › Scholarships | PVAMU rent scholarship | Live, window closed |
| 5 | /housing-scholars-application/ | NOT LINKED | HubSpot application | Orphaned |
| 6 | /rent-subsidy-program/ | Programs › Rent Subsidy | Donor-facing program explainer | Live |
| 7 | /financial-literacy-workshops/ | Programs › Financial Literacy Workshops | Chase-sponsored resident workshops | Live, dates contradictory |
| 8 | /corporate-partnerships/ | Programs › Corporate Partnerships | B2B giving | Live (newest, Oct 2026) |
| 9 | /network-of-communities/ | Network of Communities | RAP + EAP overview, NOC pitch | Live |
| 10 | /join-noc-tenants/ | NoC › For Tenants | Tenant RAP/EAP detail | Live |
| 11 | /join-noc-apartments/ | NoC › For Properties | Property-manager sales page | Live |
| 12 | /rental-assistance-or-eviction-avoidance-application/ | Footer "Rental Assistance" | Tenant application (HubSpot) | Live, definitions conflict |
| 13 | /network-of-communities-application-for-properties/ | via "Join Now" | Property application (HubSpot) | Live |
| 14 | /our-events/ | Resources › Events | Photo gallery | Live |
| 15 | /blog/ | Resources › Articles | 5 posts (2022–23) | Live, very slow |
| 16 | /magazine/ | NOT LINKED | "College Housing Today" flipbook | Orphaned, wrong SEO title |
| 17 | /contact/ | Contact | HubSpot contact form + map | Live |
| 18 | /donate-now/ | Header button | GiveWP donation | Live (primary conversion) |
| 19 | /donate/ | NOT LINKED | Legacy duplicate | Redirect candidate |
| 20 | /donation-confirmation/ | — | GiveWP receipt | System |
| 21 | /donation-failed/ | — | GiveWP failure | System |
| 22 | /donor-dashboard/ | NOT LINKED | GiveWP donor login | System |
| 23–26 | /shop/ /cart/ /checkout/ /my-account/ | — | WooCommerce, unused | Remove |
| 27 | /privacy-policy/ | Footer | CONTAINS REFUND POLICY | Broken |
| 28 | /refund-and-returns-policy/ | Footer "Returns" | CONTAINS PRIVACY POLICY | Broken |
| 29 | /terms-and-conditions/ | Footer "Terms" | Shows "store launching soon" | Broken |
| ext | project-prc-shop.printify.me | Resources › Shop | Merch store | External |
| ext | airtable.com/appxEygTAa0cntfHS/pagMurdz5S8nA6hHK/form | Workshop CTAs | Workshop registration | External |
Posts: /the-need-for-housing/ · /the-importance-of-infrastructure-improvement-in-the-united-states/ · /the-benefits-of-donating-to-nonprofit-organizations/ · /public-private-partnerships-a-comprehensive-guide/ · /how-can-i-help-fight-homelessness-in-america/

## Current navigation
Header: [Logo] About Us · Testimonials · Programs ▾ (Scholarships, Rent Subsidy, Financial Literacy Workshops, Corporate Partnerships) · Network of Communities ▾ (For Tenants, For Properties) · Resources ▾ (Events, Articles, Shop) · Contact · [Donate Now]
(The rendered header text reads "About Us · Programs · Network of Communities · Resources · Contact": Testimonials is in the menu markup but was not in the visible header text when captured.)
Mobile: hamburger; Donate Now is NOT visible in the mobile header bar (only inside the menu).
Footer: Logo · QUICK LINKS (About Us, Testimonials, Events, Articles, Shop, Contact) · PROGRAMS (Housing Scholars Program, Rental Assistance, Rent Subsidy Program, Join NOC Tenants, For Tenants [duplicate of Join NOC Tenants], For Properties, Financial Literacy Workshops, Corporate Partnerships) · CONTACT (address, phone, hours, email, 4 socials) · © 2026 · Privacy Policy · Returns · Terms · "Proudly Developed by: Project PRC Corporation, a not-for-profit, section 501(c)(3)."

## Site-wide components
- Financial Literacy Workshops "Register now" popup (image) on every page → Airtable
- Volunteer popup ("Become a Dreamer") — also wrongly wired to "Join Now" buttons on tenant/property pages
- Renter Assistance popup form (Elementor, 14 fields) — duplicates the HubSpot tenant application with different fields
- Donation tiers block ($20/$50/$100/$500) repeated on Home, Testimonials, Workshops, Events, Donate
- Google reviews widget (7 reviews) repeated on Home, Rent Subsidy, Corporate, NOC, Tenants, Contact
- "Contact Us & Resources" block (with template "energy solutions" copy + 3 PDF links, dead "#" links on Contact and both application pages) repeated on NOC, Tenants, both applications, Contact, Magazine

## Downloadable documents (all live except where noted)
- /wp-content/uploads/2026/10/Project-PRC-Corporate-Non-Proft-Partnerships-Guide.pdf
- /wp-content/uploads/2025/07/Project-PRC-Rental-Assistance-Program-Guide.pdf
- /wp-content/uploads/2025/07/Project-PRC-Eviction-Avoidance-Guide-5.pdf
- /wp-content/uploads/2025/07/Project-PRC-NOC-Partneship-Guide-3.pdf
- /wp-content/uploads/2025/10/Network-of-Communities-Property-Agreement-Project-PRC.pdf
- "Download The Current State of Homelessness by the Numbers" (blog post 5) — target unresolved
- Magazine: Flipsnack flipbook (external player)

## Videos
Vimeo 1188830283 (Home) · Vimeo 1141546313 (About) · Vimeo 1141659161 (Donate) · YouTube hkBGa8a38hs and -2L89EGaBco (Testimonials)

## Third-party integrations
WordPress 7.1.5 · Elementor Pro (popups, forms) · Breeze cache · GiveWP + Stripe (donations, donor dashboard) · HubSpot Forms portal 20923598 (tenant app e194c47f…, property app d48bc3ba…, scholars app ca251671…, general contact 4e0c8fa5…) · reCAPTCHA Enterprise · Airtable (workshop RSVP) · Trustindex (Google reviews) · Google Maps embed · Vimeo, YouTube, Flipsnack · Meta Pixel 3399446180295061 + CAPI · GA4 G-TPHCH8C52B · WooCommerce (unused) · Contact Form 7 (loaded, unused) · Printify (external shop)

## Contact facts (canonical vs conflicts)
- Address (current): 1250 W Mockingbird Ln #320, Dallas, TX 75247 · Legacy address in refund text and 2023 press release: 701 Highlander Blvd. Ste. 359, Arlington, TX 76015
- Phone: (682) 354-4483 (footer, most pages) · (682) 235-3048 (Rent Subsidy, Tenants pages) · 817-285-2530 on IRS 990 filing
- Email: partners@projectprc.org (correct) · partners@projectprc.com (broken mailto on Rent Subsidy, Tenants; in legal text) · info@projectprc.org (press releases only)
- Hours: M—F 8:00AM–5:00PM CST
- EIN 88-4009642 · IRS-approved 501(c)(3) · founded 2022 by Charles Williams
- Socials: facebook.com/projectprc · twitter.com/projectprc · linkedin.com/company/projectprc · instagram.com/projectprc

---

# C. VISUAL & ASSET INVENTORY
- **Logo:** /wp-content/uploads/2023/12/dev.projectprc.org-0.svg — 203×40, outlined paths, wordmark "PROJECT PRC" + roof mark in black, three figures in brand blue #219CDF. Copy saved at assets/projectprc-logo.svg. No light/reversed version exists on the site → a reversed variant (black → white, blue kept) is needed for dark sections; this is a colour variant, not a redesign.
- **Favicon:** /wp-content/uploads/2025/06/android-chrome-512x512-1.png · **OG image:** /wp-content/uploads/2023/12/Project-PRC-Affordable-Housing-Solutions-Nonprofit-Dallas-Texas.jpg
- **Real photography (best assets):** Scholarship Ceremony set (11 photos, 2026/10), August 2026 event set (~19 photos, IMG_94xx–95xx), Housing Scholars photos (2026/07), Financial Literacy at 625 photos (2026/08), corporate partnership photos (2026/10), 625 at Prairie View project image and Kennedale Oaks site plan, About photos (meet-greet.jpg, export-2.jpg, real-estate-1.jpg), magazine covers (3).
- **Stock / hashed-name WebP images (2025/05):** hero 2bf541a3…, Imapact-scaled-1.webp, e7c79341…, dc219e68…, 3c8008db…, ff2d9832…, 373dd5f3…, Learn.webp, Learn-1.webp, CTA.webp, 92859f6b…, 9e90fa12…, 10489fd7…, 85592d6f…, 92951337…, ea3b86b7…, Solution-scaled-1.webp — likely template stock; alt text is the filename.
- **Partner logos:** Chase (2026/08/Chase-logo.jpg) — real. LaunchDarkly.svg and Company-logo-9.svg on homepage — template placeholders, remove.
- **Icons:** 2025/05 icon SVG set (user-connection, check, note, Comment-lock, give, house-lock, dollar-list, down-percentage, Fund-security, Court-log, user-star-rating, Arrow-down-3, Image-Container-*.svg decorative frames).
- **Keep-worthy design elements:** numbered step sequences (01/02/03), the eviction-cost table + cost-cycle idea, the "Without RAP / With RAP" comparison, the donation-impact ladder, Chase partnership badge.

---

# D. FUNCTIONAL AUDIT (summary)
| Function | Tool | Where | Issue |
|---|---|---|---|
| Donate (one-time/monthly/yearly, $10–$1,000 + custom) | GiveWP + Stripe | /donate-now/, embedded on Testimonials, Workshops | Presets don't match tier copy; no impact feedback |
| Tenant RAP/EAP application (21 fields + upload + 5 acknowledgements) | HubSpot | /rental-assistance-…-application/ | Program definitions on page contradict other pages |
| Renter assistance quick form (14 fields) | Elementor popup | site-wide popup 3442 | Duplicate intake path with different fields |
| Property NOC application (15 fields) | HubSpot | /network-of-communities-application-for-properties/ | Fine; reached only via "Join Now" |
| Scholars application (5 sections) | HubSpot | /housing-scholars-application/ | Orphaned; no personal-statement/transcript fields |
| Corporate inquiry (5 fields) | Elementor | /corporate-partnerships/ | Fine |
| NOC general inquiry (4 fields) | Elementor | /network-of-communities/ | Fine |
| General contact (5 fields) | HubSpot | /contact/, applications | Fine |
| Volunteer application (8 fields) | Elementor popup 2804 | "Become a Dreamer" ×7, wrong "Join Now" ×2 | Mis-wired; Zip uses number input; placeholder "Boston" |
| Workshop RSVP | Airtable (off-site) | Workshops page + global popup | Leaves site |
| Donor dashboard | GiveWP | /donor-dashboard/ | Not linked anywhere |
| Reviews | Trustindex | 6 pages | Same 7 reviews everywhere |
| Shop | Printify (external) + WooCommerce (unused) | Resources › Shop | Woo pages say "launching soon" |

---

# E. UX & CONVERSION AUDIT

## Who the site serves (from the content itself)
1. **Donors / individuals** — tax-deductible gifts (home, donate, testimonials, blog).
2. **Renters in need** at Network of Communities properties (currently 625 at Prairie View) — RAP grant / EAP financing.
3. **Property owners / managers** — NOC membership ($3,500 one-time + $3.50/resident/month).
4. **PVAMU students** at 625 at Prairie View — Housing Scholars ($1,250/semester) and workshops.
5. **Corporate partners** — sponsorship of scholarships, rental assistance, financial education (Chase is the live example).
6. **Government / university P3 partners** — the original development mission (About, Approach, blog).
The current site treats these as a flat list of pages; nothing routes a visitor to "their" path.

## Navigation & IA problems
- "Programs" mixes resident services (Scholarships, Workshops), a donor explainer (Rent Subsidy) and a B2B page (Corporate Partnerships). "Network of Communities" is a separate menu though RAP/EAP are the core programs.
- Rent Subsidy Program vs Rental Assistance Program vs Eviction Avoidance Program: three similar names, explained on five pages with inconsistent details; visitors can't tell which is which.
- Applications (tenant, property, scholars) aren't in the nav; the scholars form is unreachable.
- High-value content is orphaned: magazine, scholars application, donor dashboard, 5 PDFs only reachable from 2 pages.
- Footer duplicates (Join NOC Tenants = For Tenants) and legal links all lead to wrong content.

## Content hierarchy problems
- Homepage H1 "Affordable Housing is a Human Right" is followed by "Helping Students Stay Housed and Enrolled" — the page never says plainly what Project PRC does today (runs rent-relief programs at member properties + develops student/affordable housing) or for whom.
- Homepage hero offers only renter and property CTAs; the header pushes Donate; donor and partner paths are buried.
- No impact proof: no numbers served, dollars granted, scholars awarded, families helped. The only results on the site are "625 at Prairie View Phase I — 120 units, 100% occupied" and the scholarship ceremony photos.
- "Our Heroes / All-Stars / Helpers" uses placeholder people; "Testimonials" has no written testimonials.
- Template copy ("energy solutions…") on 6 pages (Contact, Network of Communities, Tenants, both applications, Magazine) undermines credibility for a nonprofit handling financial aid.

## CTA & conversion problems
- Generic, repeated CTAs: "Donate Now" ×5 on the homepage, "Become a Dreamer" ×7, "Learn More", "Join Now" pointing to three different places.
- Dead CTAs: "Apply Next Semester" ×3 (#), resource downloads (#) on Contact and both application pages. Closed windows capture nothing (no "notify me").
- Donation page: no explanation under "Where your donation goes"; presets and tiers disagree; monthly giving isn't the default even though the copy is framed monthly; the named giving levels (Friends $120 … Diamond $150,000) live only in a 2023 blog post.
- Corporate: one opportunity card shown, no sponsorship tiers on page (only in the PDF).
- Leads split across HubSpot, Elementor, GiveWP and Airtable → no single pipeline, inconsistent follow-up.

## Trust & compliance problems
- Privacy/Refund swapped, Terms missing, privacy text references dev.projectprc.org and describes WordPress comments instead of the HubSpot applications that collect income, eviction and document uploads.
- EAP is consumer credit (APR 24.99%, reported to bureaus) — needs clear, consistent disclosure; currently stated on only one page.
- Two phone numbers and a .com email; stale dates ("Set to Begin Q2 2025", "Launching soon" for a series that began Sept 21, 2026).

## Mobile
- No horizontal overflow at 375px on the homepage; H1 40px. Donate Now is hidden in the mobile header (menu only). Long Elementor pages with stacked cards make the RAP/EAP detail very long on phones; the tab components (EAP | RAP) are the only compression.

## Performance
- TTFB ≈ 3.2 s, DOMContentLoaded ≈ 25 s on a sample page; 146 requests, 37 CSS + 82 JS files; the blog listing repeatedly failed to load within 50 s. Four font families (Raleway, Inter, Open Sans, Lato). Each page ships 180–315 KB of HTML plus three popups and the reviews widget.

## Accessibility & SEO
- Each page has exactly one H1 (good) and canonical, OG and JSON-LD tags (good).
- Heading-level skips on 13 of 14 pages (up to 6 on /join-noc-apartments/).
- Images use filenames as alt text (e.g. "E7c79341…webp"; 28 on the property page); 3–6 images per page have no alt at all.
- The magazine page carries the Contact page's title and meta.
- Volunteer form uses a numeric input for ZIP; placeholders used as labels ("John", "Connor", "Boston").

## Visual inconsistencies
- Brand blue in the logo is #219CDF; the site also uses #229CE0 (near-duplicate), navy #0F1B31, magenta #CC3366, charcoal #24272D/#33373D, off-white #F7F7F4.
- Template decorative frames (Image-Container-*.svg), mixed stock and real photos, cards of varying radius and shadow. Typography: Raleway headings with system-font body (Inter loaded but body falls back to the system stack).

---

# BRAND SYSTEM SYNTHESIS (from all three sites)
| Element | projectprc.org (now) | prcequityfund.com | prcinvestors.com (newest) |
|---|---|---|---|
| Identity colour | Logo blue #219CDF | Cyan #1FBDD4 | Cyan #1FBDD4 |
| Dark surface | Navy #0F1B31 | Navy overlay #051F39, charcoal #24272D header | Charcoal #24272D, footer #1B1D22 |
| Light surface | White / #F7F7F4 | White / #E6E6E6 tint | White / warm #F7F5F4 |
| Headings | Raleway | Montserrat 600, often uppercase | Montserrat 600–700, sentence case |
| Body | System / Inter | Roboto 15px | Montserrat 16–18px |
| Buttons | Mixed | Cyan, white text, 5px, uppercase | Cyan, charcoal text, 4px, sentence case |
| Labels | — | Uppercase Lato labels | Uppercase cyan eyebrows, 0.18em tracking |
| Cards | Rounded + shadows | 4–6px, soft shadow | 4px, flat |
| Photography | Mixed stock + real | Navy-overlaid photos | Real event photography |
Direction: keep Project PRC's own logo and its blue (#219CDF) as the primary identity colour (it is a near-sibling of the family cyan #1FBDD4), adopt the family system — Montserrat, charcoal #24272D dark bands, warm off-white #F7F5F4, flat 4px radii, cyan-family eyebrows, real photography — so all three sites read as one organisation. Retire magenta #CC3366, Raleway, Lato, Open Sans and Inter unless the client says otherwise.

---

# OPEN QUESTIONS FOR THE CLIENT (blockers for final content)
1. **RAP vs EAP definitions** — which is correct: (a) RAP = grant, up to 50% of rent for up to 3 months, never repaid; EAP = financing, up to half of rent, 5-year repayment, APR 24.99% (NOC/Tenants/Apartments pages) — or (b) the tenant application page's version (RAP = up to 50% of rent; EAP = up to 3 months, 90 days on-time)?
2. **Phone:** is (682) 235-3048 still in use, or should everything be (682) 354-4483?
3. **Homepage donor wall** (Sophia Mitchell, Olivia Brooks… with tech job titles): real donors or template placeholders?
4. **Project status:** 625 at Prairie View Phase II (454 units) and Kennedale Oaks (38 units) — "Set to Begin Q2 2025": current status?
5. **Workshops:** did the series start Sept 21, 2026? Current schedule?
6. **Named giving levels** (Friends $120, Family $500, Corporate Bronze $1,000 → Diamond $150,000) — still offered?
7. **Legal:** can the client supply a real Privacy Policy and Terms? (The rebuild should not invent legal text.)
8. **NOC members:** besides 625 at Prairie View, which properties can be listed?
9. **Eviction cost figures:** "$5,000+ per eviction" vs "$3,500 – $10,000 per case" — keep both or harmonise?
10. **Platform:** stay on WordPress (keep GiveWP/HubSpot/Elementor data) or build a standalone front end (e.g. Next.js) that embeds GiveWP/HubSpot?
11. **Shop:** keep the Printify store link and remove WooCommerce?

---

# B. COMPLETE CONTENT INVENTORY (verbatim)

# HOME (/) technical capture
Title: Project PRC • Affordable Housing Solutions | Dallas Nonprofit
Meta description: Project PRC, a Dallas‑based 501(c)(3) nonprofit, builds affordable & student housing, fights homelessness, and partners across communities.
Stack: WordPress 7.1.5 + Elementor (Pro popups/forms), Breeze cache, Stripe js (donations), Vimeo embed (video 1188830283), Trustindex Google reviews widget, Meta Pixel 3399446180295061 (CAPI), GA4 G-TPHCH8C52B
Fonts loaded: Inter 400-700, Open Sans, Raleway (headings), Lato; body falls back to system stack
Colors seen (computed): #333333 text, #0F1B31 (navy, 21 uses), #229CE0 (blue accent), #CC3366 (pink/magenta accent), #33373D, #24272D, #A2A6AE, #69727D, #F7F7F4 (off-white), #162836
Logo: /wp-content/uploads/2023/12/dev.projectprc.org-0.svg  (alt: Project PRC Affordable Student Housing Non-Profit Organization North Texas)
Favicon: /wp-content/uploads/2025/06/android-chrome-512x512-1.png
OG image: /wp-content/uploads/2023/12/Project-PRC-Affordable-Housing-Solutions-Nonprofit-Dallas-Texas.jpg
Images: 2025/05/Imapact-scaled-1.webp, e7c79341...webp, dc219e68...webp, 2025/06/william-foster-prc.jpg, 3c8008db...webp, ff2d9832...webp, 373dd5f3...webp, Learn.webp, 05360ab4...webp, Learn-1.webp, CTA.webp, Launchdarkly.svg (x2, PLACEHOLDER logo), Company-logo-9.svg (x2, PLACEHOLDER), Project-PRC-Network-of-Communities-14.svg, 2026/08/Financial-Literacy-Workshops-Register-Now-Project-PRC-Popup.jpg (popup), 2025/05/export-volunteer.jpg (volunteer popup), close3.svg
BG images: 2025/05/Image-Container.svg, 2bf541a3...-scaled-1.webp (hero?), Image-Container-2.svg, Arrow-down-3.svg
Buttons: Donate Now (/donate-now/ x5) | I'm a Renter Who Needs Assistance (/join-noc-tenants/) | I'm a Property Manager Looking to Join (/join-noc-apartments/) | Learn More -> /about/ (x2; NOTE nav uses /about-us/) | Become a Dreamer (x7, opens volunteer popup 2804)
POPUP 2804 "VOLUNTEER APPLICATION – Creating Housing Solutions Building Future Opportunities": First Name*(placeholder John), Last Name (Connor), Email*, Phone, City* (Boston), Zip Code* (number, "Enter your postcode"), Please Select* [College Student | High School | Neither], Reason for Volunteering (textarea). Success: "THANK YOU FOR YOUR INFORMATION". Submit.
POPUP 3442 "Renter Assistance Form – Need help with a rental issue? Fill out this form and tell us what you’re experiencing. Our team will review your request and get back to you shortly.": Name*, Email*, Phone Number, Apartment Name, Apartment Address, Unit Number (optional — but marked required in markup), Landlord's Phone Number*, Landlord's Name*, What is your apartment size?* [1 Bedroom|2 Bedroom|3 Bedroom], Type of Help Needed* [Rental Assistance|Eviction Help|General Support|Other], Tell Us What’s Going On (textarea), How Did You Hear About PRC?* [Social Media|Apartment Staff|Flyer|Friend/Family|Other], Have You Received an Eviction Notice?* [Yes|No], When Is Your Next Rent Due?* (date; field id wrongly named zip_code)
POPUP (Financial Literacy Workshops register now image)
NAV: About Us | Testimonials | Programs▾ [Scholarships /housing-scholars-program/, Rent Subsidy /rent-subsidy-program/, Financial Literacy Workshops, Corporate Partnerships] | Network of Communities▾ (/network-of-communities/) [For Tenants /join-noc-tenants/, For Properties /join-noc-apartments/] | Resources▾ [Events /our-events/, Articles /blog/, Shop https://project-prc-shop.printify.me/] | Contact | [Donate Now]
FOOTER: logo; QUICK LINKS (About Us, Testimonials, Events, Articles, Shop, Contact); PROGRAMS (Housing Scholars Program, Rental Assistance /rental-assistance-or-eviction-avoidance-application/, Rent Subsidy Program, Join NOC Tenants, For Tenants, For Properties, Financial Literacy Workshops, Corporate Partnerships); CONTACT 1250 W Mockingbird Ln #320 Dallas, TX 75247 | (682) 354-4483 | M—F: 8:00AM–5:00PM CST | partners@projectprc.org; Social: facebook.com/projectprc, twitter.com/projectprc, linkedin.com/company/projectprc/, instagram.com/projectprc/; © 2026 Project PRC Corporation; Privacy Policy /privacy-policy/, Returns /refund-and-returns-policy/, Terms /terms-and-conditions/; "Proudly Developed by: Project PRC Corporation, a not-for-profit, section 501(c)(3)."

---

# HOME (/) — verbatim content, in page order

## Hero
Eyebrow: Housing Solutions
H1: Affordable Housing is a Human Right
Body: There is a significant need for affordable housing in the United States. According to the National Low Income Housing Coalition, there is a shortage of 7.2 million affordable and available rental homes for extremely low income renters.
CTA 1: I'm a Renter Who Needs Assistance → /join-noc-tenants/
CTA 2: I'm a Property Manager Looking to Join → /join-noc-apartments/

## About intro
H2: Helping Students Stay Housed and Enrolled
P1: Based in Dallas, Texas, we are an IRS approved 501(c)(3) nonprofit organization with a mission to serve our community by developing and re-developing properties that lessen the burden on government. We are not affiliated with any religious or political groups, but we do believe that everyone deserves access to safe, affordable, and high-quality housing, and we work tirelessly to make that a reality.
P2: Our team is dedicated to solving today’s housing crisis and adding value to communities across America. We do this by partnering with government entities, public and private schools and universities, other organizations, and donors to create P3 partnerships that benefit all involved. We also specialize in student housing, low to moderate income housing, and the redevelopment of abandoned properties.
CTA: Learn More → /about/
(Vimeo video embed 1188830283 sits in this area)

## Donation tiers
H: Your gift makes a real difference.
Sub: All donations are tax-deductible.
- $20 a month can help prevent utility shut off for students or families.
- $50 a month can help cover transportation or document costs.
- $100 a month can help stabilize a family during an emergency
- $500 a month can help prevent eviction escalation.
Label: Where your donation goes
Note: EIN: 88-4009642. IRS Approved 501(c)(3) Nonprofit Organization

## Your Impact — donor recognition (tabs/tiers)
Labels: Your Impact | Dreamer
Our Heroes: Sophia Mitchell (Data Scientist), Olivia Brooks (HR Manager), William Foster (Product Manager)
Our All-Stars: Christopher Bennett (AI Researcher), Isabella Cooper (Business Consultant), Daniel Hayes (Marketing Specialist)
Our Helpers: Michael Carter (Software Engineer), James Reynolds (Financial Analyst), Emily Watson (UX Designer)
CTA: Donate Now
AUDIT FLAG: these names/titles read as template placeholder people (generic tech job titles, photo file "william-foster-prc.jpg"). Must be confirmed with the client before carrying over; do not present as real donors without confirmation.

## Our Approach
H2: Our Approach
Body: Our team is dedicated to finding innovative solutions to today’s housing crisis and adding value to communities across America. We do this through a variety of means, including:
CTA: Learn More
Cards:
- P3 Partnerships — We believe that public-private partnerships (P3s) are an effective way to bring about positive change in communities.
- Education — Project PRC seeks to lessen the burden of government by assisting school, universities, and Historically Black Colleges and Universities (HBCUs)
- Student Housing — As the demand for higher education continues to grow, so too does the need for affordable and high-quality student housing.
- Infrastructure — We believe that improving infrastructure is crucial for the long-term health and prosperity of our communities and our country.
- Re-development — We believe in the power of redevelopment to transform abandoned properties into thriving, vibrant assets for the community.
- Low Income Housing — We are committed to developing low to moderate income housing properties that provide affordable and safe options for those in need.

## Our Mission & Cause
H2: Our Mission & Cause
Body: At Project PRC Corporation, our mission is to empower people, groups, and companies the ability to change lives by making tax deductible donations that build affordable homes and fight homelessness in America. Our strong conviction is that safe, affordable, and high-quality housing should be accessible to all, and we work ceaselessly to make this a reality through your tax deductible donations.
Steps:
01 Identify Opportunities — Our team is dedicated to finding innovative solutions to today’s housing crisis and adding value to communities across America. We do this through a variety of means.
02 Build Communities — We work closely with government entities, public and private schools and universities, private donors, and other organizations to create P3 partnerships that benefit all involved.
03 Change Lives — Everyone deserves a place to call home, regardless of their income. That’s why we are committed to developing and managing low to moderate income housing properties

## Google reviews (Trustindex widget)
EXCELLENT — Based on 7 reviews (all 5-star)
- Desayn C, September 2, 2025: "I worked with PRC on projects through Upwork and it was a really great experience. Communication was clear, the process went smoothly, and everything felt easy to collaborate on. Reccomended!"
- Solomon g, August 26, 2025: (stars only, no text)
- Carlos H, August 26, 2025: "Fantastic folks who are dedicated to making things better."
- Hcj, August 26, 2025: "I truly admire Project PRC’s commitment to building affordable housing and revitalizing neighborhoods. Their partnerships with schools and local organizations show a real dedication to long-term solutions. They are making a lasting difference."
- Georgi D, August 26, 2025: "I worked with PRC on a couple of projects and they were always professional and friendly throughout. I would happily collaborate again in the future. Highly recommend!"
- Teresa T, July 17, 2025: "They are doing good work!"
- Linda R, January 30, 2023: "When looking to align our mutual interests, connecting with the non-profit organization, PROJECT PRC Corp, we find ourselves happily jumping up and down, as we applaud their vision in making the world a better place, committing to building affordable housing for local communities. Kudos!"

## Donate CTA band
H2: Make a Difference Today – Build a Brighter Future!
Body: Join us in the mission to provide affordable housing for those in need. Every donation counts, every action matters. Together, we can create homes and change lives.
CTA: Donate Now
(Partner logo strip: Launchdarkly.svg, Company-logo-9.svg — template placeholder logos, Project-PRC-Network-of-Communities-14.svg)

## Become a Dreamer band
H2: Become a Dreamer
Body: Headquartered in Dallas, Texas, Project PRC Corporation focuses on developing apartment communities, student housing, low to moderate income housing, workforce housing, and more. Our goal is to create new homes for Americans and help communities grow and prosper. Please make an annual tax deductible donation today to help us fight homelessness in America and change lives.
CTA: Donate Now

---

# ABOUT US (/about-us/)  — note /about/ redirects here; homepage "Learn More" points to /about/
Title: About - Project PRC Corporation
Meta: Our goal is to help 1,000 families this year with housing, food, educational programs, and hope. Learn more about Project PRC Corporation.
Video: Vimeo 1141546313
Images: 2025/05/92859f6b...webp, 2025/06/meet-greet.jpg, 2025/06/export-2.jpg, 2025/06/real-estate-1.jpg, 2025/05/CTA.webp, 2023/12/Project-PRC-Affordable-Student-Housing-Solutions-Development-Projects-Prairie-View-Texas.jpg, 2022/12/Project-PRC-Corporation-Affordable-Housing-Developers-Projects-Multifamily-Townhomes-Kennedale-Oaks-Site-Plan.jpg, 2025/05/10489fd7...webp ; BG: 2025/05/9e90fa12...webp, Image-Container-8.svg
Links: icon link to Airtable form https://airtable.com/appxEygTAa0cntfHS/pagMurdz5S8nA6hHK/form (unlabelled)
CTAs: Help Change Lives -> /donate-now/ | Contact Us -> /contact/ | Donate Now | Become a Dreamer (volunteer popup) | Let's Work Together -> /contact/

Eyebrow: About Us
H1: Building a Better Future Through Affordable Housing

H2: Where It All Began
Project PRC Corporation was founded in 2022 by Charles Williams, who saw a need for affordable to low income housing and made the choice to do something about it. Along with his team, he began building a better future for our country and helping our government, schools, universities, cities, and people along the way.
Throughout our history, we have been guided by our mission to serve our community and create positive change through real estate development. We are proud of the work we have done and the difference we have made in the lives of others.
Our team at Project PRC Corporation is made up of experienced professionals who are passionate about what they do. From our CEO to our project managers, every member of our team is dedicated to excellence and committed to making a positive impact on the world around us.
If you are interested in learning more about Project PRC Corporation or partnering with us on a project, we would love to hear from you. Please don’t hesitate to contact us. Your tax deductible donations will help 1,000 families this year with housing, food, education, and hope.
CTA: Help Change Lives

H2: What We Do — "Creating Partnerships and Building Communities with Purpose and Passion."
- Meet & Greet — Partnering with government entities, public and private schools, universities, private donors, and other organizations to create P3 partnerships that benefit all involved and those in need.
- Project Planning — We plan and complete projects for people. We believe that everyone deserves access to safe, affordable, and high-quality housing, and we work tirelessly to make that a reality.
- Design & Create — From apartments to single-family homes, we work with government agencies and other organizations to create housing solutions that meet the needs of our communities.
CTA: Contact Us

Band: Make a Difference Today – Build a Brighter Future! / Join us in the mission to provide affordable housing for those in need. Every donation counts, every action matters. Together, we can create homes and change lives. / Donate Now / Become a Dreamer

H2: Meet Our Board
- Charles Williams — Chairman of the Board
- Nathan Barnes — Executive Director
- Alicia Dietsch — Board Member
- TC Alexander Jr. — Board Member

H2: Current Projects
Sub: A Look at Our Journey: Transformative Projects That Bring Affordable Housing and Community Development to Life
- 625 at Prairie View Phase II — 454-Unit Student Housing Development Project Prairie View, TX. Set to Begin Q2 2025
- Kennedale Oaks Townhomes — 38-Unit Multifamily Townhome Development Project Kennedale, TX. Set to Begin Q2 2025
- 625 at Prairie View Phase I — 120-Unit Student Housing Development Project Prairie View, TX. Completed and 100% Occupied
AUDIT FLAG: "Set to Begin Q2 2025" is stale as of Nov 2026; confirm current status with client.
CTA: Let's Work Together -> /contact/

---

# TESTIMONIALS (/testimonials/)
Title: Testimonials – Housing Impact Stories & Initiatives • Project PRC
Meta: Project PRC videos showcasing our testimonials and success stories. See how we’re helping college students at risk, stay in school.
Embeds: YouTube hkBGa8a38hs ; YouTube -2L89EGaBco ; GiveWP donation form iframe (/?givewp-route=donation-form-view&form-id=2728)
BG: 2025/05/9e90fa12...webp, Image-Container-3.svg
Eyebrow: Testimonials
H1: Inspiring Stories, Real Impact
H2: Bringing Change, One Story at a Time
Sub: Watch. Learn. Get Inspired to Do Something BIG.
Body: Explore our collection of impactful video testimonials, and success stories that highlight the difference we make.
[2 YouTube videos]
H2: Help Students Stay Enrolled... When They Need It Most.
Donation tiers block (identical to homepage): Your gift makes a real difference. / All donations are tax-deductible. / $20 a month can help prevent utility shut off for students or families. / $50 a month can help cover transportation or document costs. / $100 a month can help stabilize a family during an emergency / $500 a month can help prevent eviction escalation. / Where your donation goes / EIN: 88-4009642. IRS Approved 501(c)(3) Nonprofit Organization
+ embedded GiveWP donation form
AUDIT: page titled "Testimonials" has no written testimonials or names; only 2 videos. Google reviews live elsewhere.

# HOUSING SCHOLARS PROGRAM (/housing-scholars-program/)  (nav label: "Scholarships")
Title: Housing Scholars Program | Up to $1,250 a Semester Project PRC
Meta: Get up to $1,250 per semester toward rent through Project PRC's Housing Scholars Program. Free application for eligible PVAMU students.
Images: 2026/07/Housing-Scholars-Program-Project-PRC-Non-profit-TX.jpg ; 2026/07/Housing-Scholars-Program-Apply-Now-Project-PRC-Non-Profit-TX.jpg ; BG 2026/07/Housing-Scholars-Program-Project-PRC-Non-profit-Texas.jpg
CTAs: "Apply Next Semester" x3 -> "#" (dead links while window closed)
Hero: Housing Scholars Program / Get Up To / $1,250 Per Semester
The Project PRC Housing Scholars Program awards up to 20 scholarships of $1,250 per semester and up to $2500 a year to Prairie View A&M students living at 625 at Prairie View.
*Fall Semester 2026 Scholarship Window has Closed  [Apply Next Semester]
H2: Housing Scholars Program
College is expensive. Rent should not be the reason a Panther leaves school. That is why Project PRC, a 501(c)(3) nonprofit dedicated to housing stability, is funding the Housing Scholars Program at 625 at Prairie View.
Selected scholars receive $1,250 per semester, applied directly to rent as a credit of about $208 a month – a meaningful reduction on every rent payment from September through February, with automatic consideration for spring renewal.
Who can apply: full-time PVAMU students with a lease (or lease application approved) at 625 at Prairie View, a 2.5+ GPA (freshmen may use their high school GPA), and household income within program limits – most Pell-eligible students qualify.
How scholars are chosen: every application is scored by Project PRC’s independent selection committee on a published 100-point rubric covering financial need, academics, rental history, personal statement, community engagement, and housing stability factors. Current residents in good standing earn additional points for documented on-time rent history.
Applying is free and takes minutes: submit the online form, income documentation, a transcript or grade report, and a one-page personal statement.
Applications are open July 13 through August 1. Selections are announced by August 15.
*Fall Semester 2026 Scholarship Window has Closed [Apply Next Semester]
H2: Please read this prior to applying for the Housing Scholars Program — Program Terms & Requirements
Up to 20 awards available for 2026-27. Applying does not guarantee an award. Scholars are selected by Project PRC’s independent committee using published criteria. Awards are subject to program terms and available funding. The Housing Scholars Program is administered by Project PRC Corporation, a 501(c)(3) nonprofit, and is not a rent discount or a leasing promotion of the property.
Eligibility Requirements:
• Enrolled (or admitted and enrolling) as a full-time student at Prairie View A & M University.
• Executed 12-month lease – or a pending lease application – at a participating Network of Communities property (pilot: 625 at Prairie View). Both current tenants and new applicants are eligible; awards to new applicants are contingent on lease execution. Current tenants in good standing with a solid rental history receive priority through the scoring rubric (Section 4).
• Household income at or below 80% of Area Median Income for the Houston-The Woodlands-Sugar Land MSA, documented by FAFSA Student Aid Index, Pell Grant eligibility, or prior-year household tax return.
• Cumulative GPA of 2.5 or higher (final high school GPA for incoming freshmen).
• Good conduct standing: no unresolved lease violations at move-in and agreement to the community standards addendum.
• Complete application: form, income documentation, transcript or grade report, and one-page personal statement.
*Fall Semester 2026 Scholarship Window has Closed [Apply Next Semester]
AUDIT: references "published 100-point rubric" and "Section 4" but no rubric/terms document is linked. "Apply Next Semester" goes nowhere; no waitlist/notify capture -> lost leads. Inconsistent "$2500" vs "$1,250" formatting.

# RENT SUBSIDY PROGRAM (/rent-subsidy-program/)
Title: Project PRC Rent Subsidy Program | Affordable Housing Redefined
Meta: Project PRC’s Rent Subsidy Program makes student and workforce housing affordable through private partnerships. Donate today to help.
BG: 2025/11/Rent-Subsidy-Program-Project-PRC.jpg
CTAs: Donate Now / Donate Today / Donate Now / Donate Now -> /donate-now/ ; Volunteer -> /contact/
Links: Network of Communities; (682) 235-3048 tel:+16822353048 (DIFFERENT phone from footer (682) 354-4483); partners@projectprc.org (BUG: mailto points to partners@projectprc.COM)
Eyebrow: HELLO
H1: Welcome to Our Rent Subsidy Program
Sub: A Private-Sector Solution to Housing Affordability  [Donate Now]
H2: The Rent Subsidy Program
Project PRC is redefining how communities approach affordable housing. Our Rent Subsidy Program is not a government program—it’s a private, community-driven initiative that ensures students and working families have access to safe, affordable housing.
The program is exclusively available to residents of properties who are members of our, “Network of Communities.”
Feature list: Rental Assistance | Private and Community-Driven | Focused on Students and Working Families | Built for Long-Term Stability   [Donate Today]
H2: How it works — Rent Subsidy Program (RSP)
01 Eligibility — Project PRC develops or acquires student housing, affordable housing, and workforce housing in partnership with local universities and municipalities. Once a property becomes member of our Network of Communities, it becomes eligible for our rent subsidy program.
02 Partnerships — We then collaborate with the local community, businesses, and government partners to fund a pool of resources that allows us to offset rents for residents in need. The result is a self-sustaining model that makes housing affordable without relying on taxpayer-funded programs.
03 Impact —
  Develop or Acquire: Project PRC builds or acquires mission-aligned properties.
  Partner Locally: We work with universities, city officials, and community leaders to create joint solutions.
  Fund the Subsidy: Donors, sponsors, and local partners contribute to make affordability possible.
  Support Residents: Rent subsidies are applied directly to eligible residents, ensuring safe and stable housing.
[Donate Now]
H2: Focused on Students and Working Families — Our greatest impact begins with students.
Our Mission: Project PRC partners with universities to make housing more accessible for first-generation and at-risk students who show potential but face economic barriers that threaten their academic journey. By removing the financial stress of unstable housing, we empower these students to focus on what matters most—their education and future.
But our vision extends beyond campuses. Across the nation, many cities struggle to provide affordable or workforce housing. Project PRC steps in to bridge that gap, helping municipalities offer secure, dignified housing to the people who make their communities thrive.
Why It Works: Project PRC’s rent subsidy model works because it aligns purpose with practicality:
  Private Initiative: We take action instead of waiting for government programs.
  Local Collaboration: Partnerships with universities, cities, and donors make the impact immediate and lasting.
  Sustainable Design: Each property is structured to support affordability over the long term.
Our approach keeps administrative costs low and outcomes high—ensuring that every dollar raised translates directly into housing stability for residents.
Have Questions? (682) 235-3048 / partners@projectprc.org
H2: How You Can Help
Project PRC’s mission is only possible through the generosity of people and organizations who care about housing security.
You can support this effort in two powerful ways:
  Make a Donation: Your contribution directly funds rent subsidies for students and families in need.
  Volunteer: Join us in outreach, fundraising, or community engagement to expand our impact.
Every dollar and every hour given helps create a community where no student or worker has to fear losing their home.
Together, we can make housing stability a shared community achievement—not a government obligation.
[Donate Now] [Volunteer -> /contact/]
+ Google reviews widget (same 7 reviews as home)

---

# FINANCIAL LITERACY WORKSHOPS (/financial-literacy-workshops/)
Title: Financial Literacy Workshops at 625 | Project PRC
Meta: Join free financial literacy workshops at 625 at Prairie View. Learn budgeting, credit, saving and investing with Project PRC.
Images: 2026/08/Chase-logo.jpg (x2), 2026/08/financial-literacy-workshops-project-prc-non-profit-organization-dallas-texas.jpg ; BG 2026/08/financial-literacy-workshops-625-at-prairie-view.jpg ; site-wide popup image 2026/08/Financial-Literacy-Workshops-Register-Now-Project-PRC-Popup.jpg
CTAs: Register Now to Attend / Register Now -> Airtable form https://airtable.com/appxEygTAa0cntfHS/pagMurdz5S8nA6hHK/form (external, off-site)
Embeds: GiveWP donation form 2728
H1: Financial Literacy Workshops
Sub: Real money skills, built for our residents.  [Register Now to Attend]
H2: Learn the basics. Build confidence. Take control of your financial future.
A free monthly workshop series at 625 at Prairie View — helping residents ages 18–25 learn to spend wisely, save with purpose, borrow smart, and build wealth that lasts. Launching soon, sponsored by Chase.
Facts: Always Free — No cost to attend | Ages 18–25 — Made for young residents | On Property — 625 Clubhouse conference room | About an Hour — Casual and welcoming
Eyebrow: The Program / H2: Money confidence starts close to home.
Most of us were never taught how money actually works. Project PRC is partnering with Chase to change that — right here at 625 at Prairie View. Each month we’ll open the clubhouse for a relaxed, practical workshop where residents can ask real questions and leave with skills they’ll use for life.
The full curriculum is being built now with financial experts, so the schedule is still coming together. Every session is free, welcoming, and designed for where you are today — no experience required.
H2: Four skills, one foundation — Everything we teach ladders up to the four building blocks of a healthy financial life.
- Spending — Build a budget that fits your real life and make every dollar count.
- Saving — Set goals, build an emergency cushion, and pay yourself first.
- Borrowing — Understand credit, manage debt, and protect your credit score.
- Investing — Grow what you have and build lasting wealth through long-term investing.
Eyebrow: THE WORKSHOP SERIES / H2: What We’re Planning to Cover
Here’s the series we’re shaping with our partners at Chase. Topics and dates are still being finalized—consider this a preview of what’s ahead.
Tag: Series in development · schedule announced soon
01 Setting Goals, Budgeting & Saving — Map where your money goes and build a plan that actually sticks.
02 Understanding Credit & Managing Debt — Learn how credit scores work and smart ways to pay down what you owe.
03 Avoiding Fraud & Scams — Spot common scams and keep your money and identity safe.
04 Homeownership Basics — Learn about the path from renting to owning with a Home Lending Advisor.
05 Investing Is for Everyone — Start growing your money one step at a time with a Financial Advisor.
+ 1-on-1 Advisor Time — After select workshops, sit down with a financial advisor to talk through your own questions.
Eyebrow: THE DETAILS / H2: Everything You Need to Know
- When — Workshops are planned once a month. Final dates and times will be selected using resident feedback. Sessions run about an hour.
- Where — On-property at 625 @ Prairie View in the clubhouse conference room.
- Who — Open to all 625 residents and designed with young adults ages 18–25 in mind. Everyone is welcome.
- Cost — Completely free. Just bring yourself, your questions and a desire to strengthen your financial future.
- Refreshments — Light snacks and drinks will be provided during every workshop session.
- Format — This is a rolling series, so residents can join during any month and attend the topics that interest them most.
H2: Residents: Register now
These workshops start September 21st, 2026. Sign up, attend, and win prizes and giveaways. Attend all sessions and get added to the list to win a trip!  [Register Now]
Eyebrow: IN PARTNERSHIP WITH / OUR PARTNER / H2: In Partnership With Chase
Project PRC is partnering with Chase to bring trusted, practical financial education directly to residents of 625 at Prairie View. Chase Home Lending Advisors and Financial Advisors will help lead workshops covering important money skills residents can use throughout their lives.  [Register Now to Attend]
+ Donation tiers block (same as home) + GiveWP form
AUDIT: copy says "Launching soon"/"schedule announced soon" yet also "start September 21st, 2026" (past as of Nov 2026) — internal contradiction; needs a client update. Registration leaves the site (Airtable).

# CORPORATE PARTNERSHIPS (/corporate-partnerships/)
Title: Corporate Partnerships | Support Housing | Project PRC
Meta: Explore corporate partnerships with Project PRC to support student scholarships, housing stability, and financial education. Partner today.
BG: 2026/10/students-receiving-scholarships-project-prc-nonprofit.jpg, 2026/10/non-profit-corporate-partnerships-project-prc-.jpg
Images: 2026/10/Project-PRC-Corporate-Non-Proft-Corporate-Partnerships-Download-Guide.jpg, 2026/10/Why-Partner-With-Project-PRC.jpg
CTAs: Become a Partner -> #contact-section | Explore Opportunities -> #opportunities-guide | Download Guide -> PDF | Contact Us -> #contact-section | Form submit: "Explore Partnership Options"
DOWNLOADS: 
 - Corporate Partnership Guide: /wp-content/uploads/2026/10/Project-PRC-Corporate-Non-Proft-Partnerships-Guide.pdf  (filename typo "Proft")
 - Rental Assistance Program Guide: /wp-content/uploads/2025/07/Project-PRC-Rental-Assistance-Program-Guide.pdf
 - Eviction Avoidance Program Guide: /wp-content/uploads/2025/07/Project-PRC-Eviction-Avoidance-Guide-5.pdf
FORM (Elementor) "Start the Conversation": Full Name*, Company Name*, Email*, Phone number*, Message
Eyebrow: Corporate Partnerships / H1: Your Business Can Help Build Brighter Futures
Eyebrow: Partner With Purpose / H2: Help Students Stay Housed and Communities Grow Stronger
Your business can help turn financial challenges into opportunities for a brighter future. Through corporate partnerships with Project PRC, you can support student housing scholarships, rental assistance, and financial education. Together, we can help people maintain stable housing, pursue their education, and move toward greater financial independence.
[Become a Partner] [Explore Opportunities]
H2: Create Opportunity Through Corporate Partnerships
Card: Student Housing Scholarships — Help students overcome housing barriers so they can focus on their education and work toward their future.
 Need: - Housing expenses can put pressure on a student’s budget. - Financial hardship can interrupt educational progress. - Stable housing gives students a stronger foundation.
 How Your Business Can Help: - Support Project PRC’s student housing scholarship efforts. - Connect your corporate giving with educational opportunity. - Discuss current scholarship funding needs with our team.
 Community Impact: Your support can help reduce housing-related financial pressure and give students more room to focus on their studies.
 What Your Support Helps Make Possible: - Greater housing stability - Reduced financial stress - Continued educational opportunity - A stronger foundation for the future
[Download Guide]
H2: Explore Corporate Partnerships — Discover how your business can support Project PRC’s mission. Download our Corporate Partnerships brochure to explore.
H2: Why Partner With Project PRC?
Bring your company’s values to life through support for housing stability and educational opportunity. A partnership with Project PRC connects your business with a mission that puts people and communities first.
For Your Business: Connect your corporate giving with a clear community purpose. / Show employees and customers the causes your company supports. / Build a relationship with a nonprofit focused on housing and opportunity.
For Our Communities: Help students overcome financial barriers to stable housing. / Support residents facing temporary financial hardship. / Help make financial education and community resources more accessible.
H2: Corporate Partnership FAQs — Find answers about supporting Project PRC through a corporate partnership.
Q: What is a corporate partnership with Project PRC? A: A corporate partnership connects your business’s charitable support with Project PRC’s mission to strengthen housing stability and create opportunity. Our team can help you explore current needs and discuss how your company would like to contribute.
Q: What programs can our business help support? A: Project PRC’s programs include student housing scholarships, charitable rental assistance, and financial literacy workshops. Contact our team to discuss current funding priorities and available partnership opportunities.
Q: How much does a corporate partnership cost? A: Contact our partnership team to discuss available opportunities and contribution amounts. The Corporate Partnerships brochure provides a starting point for exploring your company’s involvement.
Q: How do we choose the right partnership opportunity? A: Start with the causes your company wants to support. Our team can discuss current program needs and help you identify an opportunity that fits your community giving priorities.
Q: Where can we find the Corporate Partnerships brochure? A: Download the brochure from the partnership opportunities section above. You can also request a copy by emailing partners@projectprc.org.
Q: How do we become a corporate partner? A: Complete the contact form below, email partners@projectprc.org, or call (682) 354-4483. Tell us about your business and the programs you are interested in supporting.
Still have questions? Contact us for more information. [Contact Us]
H2: Let’s Build a Partnership That Makes a Difference — Find a meaningful way for your business to support students, strengthen housing stability, and create opportunity.
Talk With Our Partnership Team: Have questions about corporate giving? Call (682) 354-4483 or email partners@projectprc.org to discuss opportunities that fit your company’s goals.
1250 W Mockingbird Ln #320 Dallas, TX 75247 / partners@projectprc.org / (682) 354-4483
Downloadable Resources: Rental Assistance Program Guide | Eviction Avoidance Program Guide | Corporate Partnership Guide
Start the Conversation: Tell us about your business and the causes you care about. Our team will help you explore the right partnership opportunity—no commitment required. [form]
+ Google reviews widget

---

# NETWORK OF COMMUNITIES (/network-of-communities/)
Title: Network of Communities - Project PRC Corporation
Meta: Join Project PRC’s Network of Communities - connecting property owners & renters to access rental assistance, eviction-prevention.
BG: 2025/05/92951337...-scaled-1.webp ; Images: 2025/05/85592d6f...webp, 2025/06/eviction-assistance.jpg
CTAs: Tenants -> /join-noc-tenants/ (x2) | Properties -> /join-noc-apartments/ (x3) | Help Change Lives -> /donate-now/ | Contact Us -> /contact/ | form submit "Send"
DOWNLOADS: Rental Assistance Program Guide (2025/07/Project-PRC-Rental-Assistance-Program-Guide.pdf) | Eviction Avoidance Program Guide (2025/07/Project-PRC-Eviction-Avoidance-Guide-5.pdf) | Network of Communities Partnership Guide (2025/07/Project-PRC-NOC-Partneship-Guide-3.pdf)
FORM "Complete the Form": Full Name*, Email*, Phone number*, Message — submit "Send"

H1: Network of Communities / Sub: Connecting Property Owners and Renters for a Better Future
Eyebrow: Introduction / H2: Connecting Property Owners and Renters for a Better Future
Our mission is to create a strong, supportive network that connects property owners with renters, fostering community stability and financial security. Whether you own properties or rent, our Network of Communities offers invaluable resources and support to ensure safe and affordable housing for all.
[Tenants] [Properties]
H2: Empowering Communities Through Supportive Programs
## Rental Assistance Program
Our Rental Assistance Program helps you manage rent, reduce stress, and stay focused on your education—worry-free!
Eligibility: - Facing temporary financial difficulties - Willing to work with a caseworker - Must have past 3 months rent paid on time
Application Process: - Apply through your property manager - A qualified caseworker will assess your situation - If approved, receive rent assistance
Benefits: - Up to 50% of monthly rent covered for up to 3 months. This is charitable grant assistance designed to help residents stay housed and is never repaid.
Additional support: - Community stability - Eviction prevention - Caseworker assistance - Financial guidance
## Eviction Avoidance Program
Our Eviction Avoidance Program (EAP) can help you manage rent, build credit, and stay focused on your education.
Eligibility: - Income below 3× the monthly rent or credit score under 700 - Pay the first two months’ rent on time before using the credit line - Have a parent or responsible party guarantee the credit line
Application Process: - Apply through your property manager - A qualified caseworker will assess your situation - If approved, receive rent assistance
Benefits: - A separate financing option that allows a resident to obtain financing covering up to half of their rent, repaid over a five-year period. - Eviction stress relief - Credit-building opportunities - Flexible repayment options - Guarantor support - Student-focused protection
[Tenants] [Properties] [Help Change Lives]
H2: Explore Our Growing Network of Communities
We’re thrilled to spotlight the apartment communities that have joined forces with us to make housing more accessible and stable for everyone.
(AUDIT: no member communities are actually listed/named here — empty spotlight)
H2: Why Join the Network?
Discover the benefits of joining a network that supports both property owners and renters through stability, security, and community-driven solutions.
For Property Owners: Reduce vacancies and minimize turnover costs. / Ensure consistent rental income through support programs. / Build a positive reputation by contributing to community stability.
For Renters: Access financial and legal assistance to prevent eviction. / Maintain secure and stable housing even during financial hardships. / Receive community support and resources to sustain your living situation.
H2: The Hidden Cost of Evictions (table Item | Cost)
- Evicting a Tenant | $3,500 – $10,000 per case
- 2-3 Months of Unpaid Rent | $2,500+
- Legal & Court Fees | $500 – $2,000 Per Eviction
- Turnover Costs | $1,750+ (cleaning, repairs, re-renting)
Cost Cycle: Time & Stress: No Rental Income, Longer Vacancies → Tenant Turnover: More Vacancies, Longer Rental Gaps → High Eviction Costs: Lost Rent, Legal Fees, Turnover Expenses
FUN FACT: Apartments with lower eviction rates see higher profits, longer tenant retention, and lower legal costs
[Properties]
H2: Frequently Asked Questions — "Find answers to commonly asked questions about our energy solutions."  (AUDIT: leftover template copy "energy solutions" — fix to housing)
Q: Who qualifies for assistance? A: Case by case basis based on case worker evaluation.
Q: What are the benefits for property owners? A: Avoiding the risks of losing tenants due to financial distress.
Q: How long does the application process take? A: Application timelines can take up to 72 hours.
Q: Can homeowners join the network? A: Any low-to-moderate income renter facing eviction or financial hardship.  (AUDIT: answer doesn't match question)
Q: Is there a cost to join the network? A: One time set-up fee of $3,500
Q: What kind of support is offered to renters? A: Eviction Avoidance, Rental Assistance, & Caseworker Assistance
Still have questions? Contact us for more information. [Contact Us]
H2: Contact Us & Resources — For more information or assistance, please reach out to our support team.
Get in Touch: "Contact us today to learn more about our innovative energy solutions and how we can help you achieve sustainability and convenience."  (AUDIT: leftover template copy — must be rewritten; do not carry over)
1250 W Mockingbird Ln #320 Dallas, TX 75247 / partners@projectprc.org / (682) 354-4483
Downloadable Resources: (3 PDFs above)
Complete the Form: We’re here to help! Fill out the form below, and our team will get back to you as soon as possible. [Full Name, Email, Phone number, Message, Send]
+ Google reviews widget

---

# JOIN NOC — TENANTS (/join-noc-tenants/)  (nav: Network of Communities > For Tenants; footer: "Join NOC Tenants" AND "For Tenants" both point here — duplicate)
Title: Join NOC Tenants - Project PRC Corporation
Meta: Join NOC Tenants Secure affordable homes with long-term stability. Partner with Project PRC today, access rental assistance programs and more
CTAs: Apply Now (x3) -> /rental-assistance-or-eviction-avoidance-application/ | Join Now -> opens VOLUNTEER popup 2804 (AUDIT: wrong destination for a tenant "Join Now")
Links: (682) 235-3048 ; partners@projectprc.org (mailto BUG -> .com) ; 3 PDF guides (RAP, EAP, NOC Partnership)
Eyebrow: HELLO / H1: Welcome to a Community that cares
If your property is a member of Project PRC’s Network of Communities and you've paid your last 3 months' rent on time, you may apply for charitable rental assistance or eviction avoidance programs. [Apply Now]
H2: Support When You Need It — Whether you’re navigating a tough month or just want to feel more secure, your property is here to support you.
Card Eviction Avoidance Assistance: Financing for Up to Half of Monthly Rent / Five-Year Repayment Period / Flexible Monthly Repayment / Guarantor Support / Resident Eligibility Review / Balance Must Be Repaid Before Leasing Again
Card Rental Assistance Program: Up to 50% of Monthly Rent for Up to 3 Months / Charitable Grant Assistance / No Repayment Required / Dedicated Case Agent Support / Help Finding Other Available Resources / Support During a Temporary Rental Crisis
[Apply Now]
H2: How it works — tabs: Eviction Avoidance Program (EAP) | Rental Assistance Program (RAP)
EAP: Our Eviction Avoidance Program (EAP) can help you manage rent, build credit, and stay focused on your education.
 01 Eligibility: Enrolled full-time at Prairie View A&M University / Last 3 months’ rent paid on time / Income below 3x the rent or credit score below 700 / Must pay the first two months of rent on time before using the credit line / A parent or responsible party must guarantee the credit line
 02 Using the Line of Credit: Covers up to 50% of rent per month / Requires 10-day advance notice before use / Lease cannot be renewed if there is a balance due on the credit line
 03 Repayment Terms: Flexible 5-year repayment plan / Automatic payments encouraged / Late payments reported to credit bureaus / APR 24.99%
 [Apply Now]
RAP: Our Rental Assistance Program helps you manage rent, reduce stress, and stay focused on your education — worry-free!
 01 Eligibility: Facing temporary financial difficulties. / Willing to work with a caseworker to explore long-term solutions.
 02 Getting Assistance: Apply through your property manager on the PRC web portal / A qualified caseworker will assess your situation. / Approved tenants receive up to 50% of rent assistance for up to 3 months.
Band: 625 at Prairie View is a Proud Member of Project PRC Network of Communities [Join Now]
H2: Contact Us & Resources — For more information or assistance, please reach out to our support team.
Get in Touch: (template "innovative energy solutions..." copy again — AUDIT) / (682) 235-3048 / partners@projectprc.org / 1250 W Mockingbird Ln #320 Dallas, TX 75247
Downloadable Resources: Rental Assistance Program Guide | Eviction Avoidance Program Guide | Network of Communities Partnership Guide
Have Questions? We’re here to help! Fill out the form below, and our team will get back to you as soon as possible.  (AUDIT: no form renders below this heading)
AUDIT: EAP eligibility differs between pages (NOC page omits "Enrolled full-time at PVAMU"; this page includes it). APR 24.99% is a key disclosure; keep prominent.

---

# JOIN NOC — APARTMENTS / PROPERTIES (/join-noc-apartments/)  (nav: For Properties)
Title: Join NOC Apartments - Project PRC Corporation
Meta: Join NOC Apartments to fill vacancies faster, access rental assistance programs, and reduce eviction risks.
CTAs: Join Now (x3) -> /network-of-communities-application-for-properties/ ; one "Join Now" -> VOLUNTEER popup 2804 (AUDIT: wrong target)
Images: 2025/05/Solution-scaled-1.webp (x2); icon set 2025/05/: user-connection.svg, Line-16.svg, Line-17-1.svg, check.svg, note.svg, Comment-lock.svg, give.svg, house-lock.svg, dollar-list.svg, down-percentage.svg, Fund-security.svg, Court-log.svg, user-star-rating.svg

H1: Reduce Evictions. Strengthen Your Property. Protect Your Revenue.
H2: Join the Network of Communities
A smarter way to support residents, preserve occupancy, and reduce costly evivtions. (typo "evivtions")  [Join Now]
H2: The Solution – Project PRC’s Network of Communities — A Smarter Alternative to Evictions
- Proactive Resident Support — Eligible residents may access assistance or financing before a temporary rental issue becomes an eviction.
- Lower Turnover, Fewer Vacancies — Helping qualified residents remain housed can reduce turnover, vacancy periods, and re-leasing expenses.
- Case Management & Early Intervention — Professional support helps identify available resources and address rental issues before they escalate.
- Simple Property Membership — $3,500 one-time membership fee plus a $3.50 monthly program fee per participating resident.
H2: Why This Works for Apartments
The Problem: Costly evictions can reduce revenue and increase operating expenses. / Resident turnover leads to vacancy, re-leasing, and make-ready costs. / Temporary financial hardships can quickly become long-term occupancy issues. / Delayed intervention often results in higher collection and legal costs.
The Project PRC Solution: Residents gain access to two distinct support programs before eviction becomes necessary. / Rental Assistance Program (RAP): Charitable grant assistance that may cover up to 50% of monthly rent for up to three months and is never repaid. / Eviction Avoidance Program (EAP): Resident financing that may cover up to half of monthly rent and is repaid over a five-year period. / Early intervention can help reduce turnover, preserve occupancy, and minimize eviction-related costs.
H2: How Does Project PRC’s Network of Communities Work?
One-Time Membership Fee: $3,500 per property / Tenant Contribution: $3.50/month per tenant
What You Get: Access to PRC’s Eviction Avoidance & Rental Assistance Programs / Lower Evictions, More Stable Rental Income & Fewer Legal Costs / Dedicated Case Management to Help Tenants Stay Housed / Recognition as a Housing Leader in the Community
Steps: 01 Apply Online — Quick & easy enrollment process. / 02 Onboard Your Property — We provide training & materials for your team. / 03 Start Seeing Results — Lower evictions, boost retention, protect revenue.
H2: Our Programs — tabs EAP | RAP
EAP — What EAP Provides: Financial Assistance — Provides financing for up to 50% of monthly rent. / Financial Assistance — Ensures tenants can catch up on rent without financial strain. (duplicate heading) / Case Management & Mediation — Works with landlords & tenants to resolve issues early / Consistent Rental Income — Fewer Evictions Lead to reliable tenants and steady revenue.
 How it works — A proactive solution that benefits both landlords and tenants.
 01 Tenant Applies for Assistance — PRC evaluates eligibility. / 02 PRC Provides Financial Support — Covers up to 50% of rent for eligible tenants. / 03 Mediation & Repayment Plans — PRC works with tenants to payback overdue rent. / 04 Tenant Stays, Landlord Gets Paid — Avoid eviction, maintain occupancy, and protect revenue. [Join Now]
RAP — Provides temporary financial support to tenants facing temporary financial hardships — ensuring consistent rent payments while preventing evictions.
 Covers up to 50% of rent for 3 months — Helps tenants catch up on payments. / Eviction Prevention — Keeps tenants in their homes, reducing vacancy losses. / Caseworker Support — Ensures tenants have a long-term plan for stability. / Financial Guidance — Educates tenants on budgeting & rent responsibility.
 How it works — Without RAP: Tenant falls behind on rent, eviction process starts. / Landlord faces months of lost rent & legal fees. / Tenant is displaced, leading to turnover costs. / Stressful eviction process & unpredictable income.
 With Project PRC ‘s RAP: Tenant applies for rental assistance before eviction is necessary. / PRC covers up to 50% of rent for 3 months, stabilizing payments. / Tenant stays housed, reducing vacancy & re-leasing expenses. / Predictable rental income & stronger landlord-tenant relationships. [Join Now]
H2: Why You Should Join Our Network NOW
- Prevent Costly Evictions — Avoid the $5,000+ per eviction financial hit.
- Reduce Tenant Turnover — Fewer move-outs = fewer re-leasing expenses and more stable rental income.
- Protect Rental Income — No more months of unpaid rent due to eviction delays.
- Eliminate Legal Headaches — Mediation resolves issues before they escalate.
- Strengthen Your Community Reputation — Build a reputation as a trusted, tenant- friendly, eviction-free property.
H2: Ready to protect your property? Enroll in PRC’s Network today! [Join Now]
AUDIT: "$5,000+ per eviction" here vs "$3,500 – $10,000 per case" on NOC page — both are client figures; keep both in their contexts, flag for client to harmonize.

---

# TENANT APPLICATION (/rental-assistance-or-eviction-avoidance-application/)  (not in main nav; footer "Rental Assistance"; target of "Apply Now")
Title: Rental Assistance or Eviction Avoidance Application for Tenants
Meta: Apply for rental assistance through the Project PRC Network of Communities Today. Get the help you need when you need it most.
BG: 2026/01/Rental-Assistance-Eveiction-Avoidance-Application-Project-PRC.jpg (filename typo)
Embeds: Google Maps (Project PRC Corporation, Dallas office); HubSpot portal 20923598 — tenant form e194c47f-ad70-4678-b413-e25e52d753ad ; question form 4e0c8fa5-af28-4fcd-a505-d1cd5f447496 ; reCAPTCHA Enterprise
Eyebrow: Apply Now / H1: Rental Assistance or Eviction Avoidance Tenant Application / H2: Apply for Assistance Today
Welcome! This form is for residents who currently live at a property that’s part of Project PRC’s Network of Communities.
Through our housing stability programs, Project PRC offers:
Rental Assistance Program (R.A.P.) – provides up to 50% of the rent portion (excluding amenities or service fees) for residents facing temporary financial hardship.
Eviction Avoidance Program (E.A.P.) – offers up to three (3) months of assistance to help residents prevent eviction. To qualify, residents must have at least 90 days of on-time rent payments and maintain communication with their property management team.
Please complete all sections and upload the required documents to ensure timely review.
Requests must be submitted at least 10 days before rent is due, unless otherwise approved.
TENANT FORM (HubSpot): First name*, Last name*, Phone number*, Email*, Street address*, Street Address Line 2, City*, State/Region*, Postal code*, [hidden country], Property/Community Name*, Unit Number*, What Type of Assistance Do You Need?* (radio: "Rental Assistance Program (R.A.P.) – covers up to 50% of rent (excluding amenities)" | "Eviction Avoidance Program (E.A.P.) – provides up to 3 months of assistance for qualified residents" | "Not sure, please review my situation and advise"), Lease Start Date*, Monthly Rent Amount* (number), Date Rent Assistance is Needed*, Unit Type* [Studio|1 Bedroom|2 Bedroom|3 Bedroom], Who Helps Pay Rent?* [Self (tenant pays directly)|Parent/Guardian|Financial Aid / Scholarship|Other], Are you currently behind on rent?* [No, I'm Current|Yes, I'm Behind], If behind on rent, please explain.*, Reason for Request*, Supporting Documentation (file), Acknowledgements* (checkboxes): I confirm that the information provided is true and complete to the best of my knowledge. / I understand that requests must be submitted at least 10 days before rent is due unless otherwise approved. / I understand that R.A.P. covers up to 50% of eligible rent (excluding amenities, late fees, and service charges). / I understand that E.A.P. requires 90 days of on-time payments and may cover up to 3 months of rent if approved. / I understand that submitting this form does not guarantee approval or payment. — Submit
Contact Us & Resources block (template "energy solutions" copy again) / 1250 W Mockingbird Ln #320 Dallas, TX 75247 / partners@projectprc.org / (682) 354-4483
Downloadable Resources: Eviction Avoidance Program Guide (#, DEAD) | Rental Assistance Program FAQ (#, DEAD) | Property Owner Partnership Guide (#, DEAD)
Have Questions First? We’re here to help! Fill out the form below... -> HubSpot question form: Email*, First name*, Last name*, Phone number*, Message* — Submit
!! CRITICAL CONTENT CONFLICT: this page describes RAP/EAP with the 3-months / 90-days attributes SWAPPED vs NOC, Tenants and Apartments pages (there: RAP = grant up to 50% for up to 3 months, never repaid, needs 3 months on-time; EAP = financing up to half rent, repaid over 5 years, APR 24.99%). Client must confirm the correct definitions before launch. Unit Type options differ from popup form (popup has no Studio).

# PROPERTY APPLICATION (/network-of-communities-application-for-properties/)  (target of "Join Now" on /join-noc-apartments/)
Title: Network of Communities Application for Properties
Meta: Apply to join the Project PRC Network of Communities Today. Stop evictions for your tenants before they happen.
BG: 2025/10/Network-of-Communities-Application-Project-PRC.jpg
DOWNLOAD: "download the form" -> /wp-content/uploads/2025/10/Network-of-Communities-Property-Agreement-Project-PRC.pdf
Eyebrow: Apply Now / H1: Network of Communities Property Application / H2: Join the Network of Communities Today
Fill out the form below to apply with Project PRC’s Network of Communities Today. End evictions before they happen with our rental assistance and eviction avoidance programs. You can also download the form and mail it to us at: 1250 W Mockingbird Ln #320 Dallas, TX 75247
PROPERTY FORM (HubSpot d48bc3ba-9303-4f88-b933-4f553b2d6103): Company name*, Doing Business As (DBA), Street address*, Street address 2, City*, State/Region*, Postal code*, Total Number of Units:* (number), Total Units Occupied: (number), First name*, Last name*, Phone number*, Email*, [hidden country], Message* — submit "Contact Me"
Same Contact & Resources block, same 3 DEAD "#" resource links, same "Have Questions First?" HubSpot form 4e0c8fa5.
Also present: Contact Form 7 scripts loaded (unused?), Google Maps embed.

---

# EVENTS (/our-events/)  (nav: Resources > Events)
Title: Project PRC Events | Local Action, Lasting Impact
Meta: Explore Project PRC event photos and see how people and partnerships create positive change in local communities.
BG: 2026/08/Events-Project-PRC-Non-Profit-Dallas-TX.jpg
GALLERY (real photography — highest-value imagery on the site):
 - Scholarship Ceremony set (2026/10/Project-PRC-Non-Profit-Scholarship-Ceremony-Texas-01..11), mix of 16:9 and 4:5
 - Aug 2026 event set (2026/08/IMG_9473..IMG_9545, IMG_9522, 9530, 9532), mix of 16:9 and 4:5
 (No captions, event names, or dates on any photo.)
Eyebrow: Project PRC Events / H1: Local Action, Lasting Impact
H2: Bringing People Together for Change
Sub: See the moments. Celebrate the people. Be inspired to make a difference.
Project PRC events bring people together to strengthen communities, share meaningful experiences, and create positive change. Every gathering represents another opportunity to connect, serve, and make a lasting impact.
Explore our event photo gallery to see the people, partnerships, and memorable moments that bring the Project PRC mission to life.
[gallery]
+ Donation tiers block (same as home)
AUDIT: no upcoming-events list, no event names/dates, no RSVP. Gallery is a wall of ~30 unlabeled photos.

# CONTACT (/contact/)
Title: Contact Project PRC • Affordable Housing Support
Meta: Get in touch with Project PRC in Dallas, TX—partner, donate, or ask about our housing & eviction-avoidance programs. Contact us today!
BG: 2025/05/ea3b86b7...webp, Image-Container-15/16.svg
Embeds: Google Maps (Project PRC Corporation, 1250 W Mockingbird Ln); HubSpot form 4e0c8fa5 (Email*, First name*, Last name*, Phone number*, Message*); reCAPTCHA Enterprise; Google reviews widget
Eyebrow: Contact Us / H1: Get in Touch with Project PRC / H2: Contact Us
Whether you’re looking to partner, donate, or simply learn more — we’re here to connect.
Contact Us & Resources — For more information or assistance, please reach out to our support team.
Get in Touch — (template "innovative energy solutions ... sustainability and convenience" copy — AUDIT: wrong business)
1250 W Mockingbird Ln #320 Dallas, TX 75247 / partners@projectprc.org / (682) 354-4483
Downloadable Resources: Eviction Avoidance Program Guide (#) | Rental Assistance Program FAQ (#) | Property Owner Partnership Guide (#)  — all DEAD links on this page (the real PDFs exist, see Corporate/NOC pages)
Complete the Form — We’re here to help! Fill out the form below, and our team will get back to you as soon as possible. [HubSpot form]
AUDIT: no hours here (hours only in footer), no inquiry-type routing (donor vs tenant vs property vs corporate), no separate contact for press/volunteers.

---

# DONATE NOW (/donate-now/)  (primary conversion; header button on every page)
Title: Donate to Project PRC • End Homelessness in Dallas
Meta: Support Project PRC in Dallas—your tax‑deductible gift helps provide housing, food & hope to families. Donate now and change lives for less than $0.50/day.
Embeds: Vimeo 1141659161 ; GiveWP form 2728 (Stripe)
GiveWP FORM: "Choose Amount — Progress: Step 0 of 2 — Every gift helps. Choose an amount or enter your own." Frequency: One Time | Monthly | Yearly. Amount (USD): $10, $20, $50, $100, $500, $1,000 + custom. Button "Donate Now". Trust line "100% Secure Donation". (2-step form; step 2 = donor details/payment)
Eyebrow: Change Lives
H1: Imagine a World Where No Student or Family Faces Homelessness Alone
Project PRC is a Dallas-based nonprofit dedicated to preventing homelessness through housing assistance, rental support, food programs, and educational resources for students and families in need.
Every day, people across Texas face housing insecurity due to unexpected hardships. Your support helps provide stability, hope, and a path forward when it matters most.
Donation tiers block (same as home): $20 / $50 / $100 / $500 a month ... / Where your donation goes / EIN: 88-4009642. IRS Approved 501(c)(3) Nonprofit Organization
H2: Change a Life Today
Your tax-deductible donation helps keep families housed, students in school, and hope alive in our communities.
Even a small monthly gift can help provide emergency housing support, food assistance, and critical resources for someone facing hardship.
Because housing is more than shelter — it’s a second chance.
AUDIT: tier copy uses $20/$50/$100/$500 while form presets are $10/$20/$50/$100/$500/$1,000 — mismatch; "Where your donation goes" is a label with no breakdown under it; no impact numbers, no annual report, no donor-wall link.

---

# /donate/  (legacy, not linked in nav)
Title: Donate to Project PRC • End Homelessness in Dallas (same meta as /donate-now/). Body renders no static text (JS/GiveWP only). AUDIT: duplicate of /donate-now/ — 301 redirect /donate/ → /donate-now/ in the rebuild (press releases cite projectprc.org/donate).

# /housing-scholars-application/  (not linked anywhere: all "Apply Next Semester" buttons are "#")
Title: Housing Scholars Program Application | Project PRC
Meta: Apply online for the Project PRC Housing Scholars Program. Complete your free scholarship application today.
Form: HubSpot portal 20923598, form ca251671-100b-465d-b770-4e6c91f9cbbb (fields captured separately below)
H3: Apply Now for the Housing Scholars Program
H3: Program Terms & Important Information
Up to 20 awards available for 2026-27. Applying does not guarantee an award. Scholars are selected by Project PRC’s independent committee using published criteria. Awards are subject to program terms and available funding. The Housing Scholars Program is administered by Project PRC Corporation, a 501(c)(3) nonprofit, and is not a rent discount or a leasing promotion of the property.

# /magazine/  — "College Housing Today" (not linked in nav or footer)
Title: (BUG) "Contact Project PRC • Affordable Housing Support" and Contact page meta copied over — page has no SEO of its own.
Embeds: Flipsnack flipbook player (hash QTZEQjhDQThCN0ErN25hdjM5OXh1Mw==); Google Maps
Images (3 magazine covers, filenames misspell "Magazing"): 2025/08/College-Housing-Today-The-Online-Student-Housing-Magazing-for-Students-by-Project-PRC.jpg | ...-for-Parents-... | ...-for-Property-Owners-...
Eyebrow: Read / H1: College Housing Today
H2: Navigate College with Confidence.
From packing lists and budget recipes to wellness tips and rental support, get the essential resources you need to thrive from day one.
H3 (Students): Navigate College with Confidence.
Your college journey is one of the most exciting chapters of your life, and we’re here to make sure you have the tools to make it a success. This isn’t just about surviving; it’s about thriving. Dive into our ultimate dorm packing guide to ensure you have all the essentials (and know what not to bring). Learn how to make your space your own with budget-friendly decor hacks and see how fellow students have transformed their rooms in our “Room Spotlight” feature.
Beyond the basics, we focus on your total well-being. Our “Weekly Wellness” section offers quick tips like the “3-Minute Room Reset” to clear your head and your space, alongside delicious, easy, and affordable recipes like “One-Pot Garlic Butter Pasta” that you can actually make in a dorm kitchen. And for those moments when challenges arise, know that you’re not alone. Project PRC provides real support, including information on our Rental Assistance and Eviction Avoidance Programs, designed to provide a safety net when you need it most.
H3 (Parents): Support Their Success.
Sending your student off to college is a major milestone, filled with both excitement and a few nerves. Our resources are designed to help you navigate this transition, empowering you to be their best supporter from a distance. We provide practical, actionable advice on how to be their “prep partner, not their pack mule,” helping them take ownership of their move-in process while ensuring they have everything they need. Discover move-in day survival tips that will make the process smoother and less stressful for everyone involved.
More importantly, we offer guidance on providing the right kind of emotional support. Learn how to acknowledge their mix of feelings, establish a healthy communication rhythm that fosters independence, and encourage them to develop their own problem-solving skills. Our goal is to help you strike the perfect balance between letting go and staying connected, ensuring you are a constructive part of their journey toward becoming a capable and confident adult.
H3 (Property owners): Connect with the Student Market.
The student rental market operates on a unique and fast-paced cycle. Our insights help you stay ahead of the curve. With 83% of students starting their search for off-campus housing before January, early engagement is the key to securing leases with responsible, long-term tenants. We provide targeted strategies to attract this demographic, from showcasing flexible 10- or 12-month lease options to promoting roommate-friendly layouts and highlighting the amenities that matter most to students, like security and strong Wi-Fi.
Partnering with Project PRC offers more than just a listing—it connects you to a network dedicated to student stability. By joining our “Network of Communities,” you gain access to a pipeline of serious student renters. Furthermore, your partnership supports our Eviction Avoidance Program, which works directly with students and property managers to resolve issues before they escalate, providing you with more reliable tenancies and demonstrating your commitment to the well-being of the student community.
H2: Contact Us for Advertising Opportunities
(standard Contact & Resources block incl. template "energy solutions" copy; Elementor form Full Name, Email, Phone number, Message)
AUDIT: an entire publication for 3 audiences is orphaned — strong content asset to surface under Resources.

## Housing Scholars application form (HubSpot ca251671-100b-465d-b770-4e6c91f9cbbb) — full field list
Intro text: Housing Scholars Program Application · Your Property Must Be Part of the Network of Communities · 2026–2027 Academic Year · Up to $2,500 Toward Rent
SECTION 1: TENANT INFORMATION — First name*, Last name*, Phone number*, Email*, Street address*, Street Address Line 2, City*, State/Region*, Postal code*, What Country are You From
SECTION 2: ENROLLMENT VERIFICATION — Are you currently enrolled full-time?* [Yes|No]; Semester Applying For* [Fall 2026|Spring 2027]
SECTION 3: HOUSING INFORMATION — Do you currently live at 625 at Prairie View?* [Yes|No]; If No: Have you signed a lease?* [Yes|No]
SECTION 4: ACADEMIC INFORMATION — Current GPA* (number), Academic Honors*, Dean's List*, Scholarships*, Organizations*, Awards
SECTION 5: FINANCIAL NEED — Annual Household Income* (number), Household Size* (number), Do you currently receive a Federal Pell Grant?* [Yes|No], Upload ONE of the following* (file)
Submit: "Submit" · Success: "Thank you for reaching out. We'll get back to you as soon as possible. Watch for a phone call from Project PRC."
AUDIT: program page asks for a one-page personal statement + transcript, but the form has no personal-statement or transcript field (only one upload). Optional items (Dean's List, Scholarships, Honors, Organizations) are marked required.

## Performance sample (/housing-scholars-application/, loaded on the user's machine)
TTFB ≈ 3.2 s · DOMContentLoaded ≈ 24.7 s · 146 requests before load · 37 CSS files · 82 JS files. /blog/ repeatedly failed to finish loading within 50 s. (Hidden-pane measurement — directionally reliable, not a lab Lighthouse score.)

---

# UTILITY PAGES
- /donor-dashboard/ — "Donor Dashboard – Manage Your Donations & Impact" — H1 Donor Dashboard (GiveWP donor login/dashboard, JS-rendered). Not linked anywhere.
- /donation-confirmation/ — H1 Donation Confirmation (GiveWP receipt, JS-rendered)
- /donation-failed/ — H1 Donation Failed / "We’re sorry, your donation failed to process. Please try again or contact Project PRC Corp at 682-354-4483."
- /shop/ and /cart/ — WooCommerce placeholder: H1 "Great things are on the horizon" / "Something big is brewing! Our store is in the works and will be launching soon!"  (actual shop lives on Printify: https://project-prc-shop.printify.me/ — nav links there)
- /checkout/ — WooCommerce (not captured separately; empty store)
- /my-account/ — WooCommerce login/register (Username or email*, Password*, Remember me, Log in, Lost your password?; Register: Email*). Unused.
AUDIT: WooCommerce is installed but unused (store lives on Printify) — dead weight: remove Woo pages, keep Printify link.

# LEGAL — CRITICAL: CONTENTS ARE SWAPPED / MISSING
## /privacy-policy/  (Title: Privacy Policy – Your Data Rights & Information Practices) — ACTUALLY CONTAINS THE REFUND POLICY:
H1: Privacy Policy
H3: Project PRC Shopping Online
Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can’t offer you a full refund or exchange.
To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
To complete your return, we require a receipt or proof of purchase.
Please do not send your purchase back to the manufacturer.
There are certain situations where only partial refunds are granted:
- Obvious signs of use
- Any item not in its original condition, is damaged or missing parts for reasons not due to our error.
- Any item that is returned more than 30 days after delivery
H2: Refunds — Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
H2: Late or missing refunds — If you haven’t received a refund yet, first check your bank account again.
Then contact your credit card company, it may take some time before your refund is officially posted.
Next contact your bank. There is often some processing time before a refund is posted.
If you’ve done all of this and you still have not received your refund yet, please contact us at partners@projectprc.com.
H2: Sale items — Only regular priced items may be refunded. Sale items cannot be refunded.
H2: Exchanges — We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at partners@projectprc.com and send your item to: 701 Highlander Blvd. Ste. 359 Arlington, TX 76015
H2: Gifts — If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and they will find out about your return.
H2: Shipping returns — To return your product, you should mail your product to: {physical address}.
You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
Depending on where you live, the time it may take for your exchanged product to reach you may vary.
If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
H2: Need help? — Contact us at partners@projectprc.com for questions related to refunds and returns.
AUDIT: unfilled "{physical address}" placeholder; old Arlington address (701 Highlander Blvd Ste 359, Arlington TX 76015) vs current Dallas HQ; .com email.

## /refund-and-returns-policy/  (Title: Refund & Returns Policy – Terms & Conditions | Project PRC) — ACTUALLY CONTAINS THE PRIVACY POLICY (WordPress default template):
H1: Refund and Returns Policy
H2: Who we are — We are Project PRC Corporation, and we’re not affiliated with any religious or political parties. We are an IRS Approved 501(c) Nonprofit Organization Our website address is: https://dev.projectprc.org.
H2: Comments — When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
H2: Media — If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
H2: Cookies — If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
H2: Embedded content from other websites — Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
H2: Who we share your data with — If you request a password reset, your IP address will be included in the reset email.
H2: How long we retain your data — If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
H2: What rights you have over your data — If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
H2: Where your data is sent — Visitor comments may be checked through an automated spam detection service.
AUDIT: references dev.projectprc.org; "501(c)" not "501(c)(3)"; says nothing about the data the site actually collects (HubSpot applications incl. income/eviction info + file uploads, GiveWP/Stripe payments, Meta Pixel, GA4). For a site taking tenant financial data, a real privacy policy needs legal review. NOT something to invent in the rebuild — flag to client.

## /terms-and-conditions/  (Title: Terms & Conditions | User Agreement • Project PRC) — NO TERMS: shows the WooCommerce "Great things are on the horizon / store launching soon" placeholder.

---

# BLOG / ARTICLES (/blog/)  (nav: Resources > Articles)
Title: Articles - Project PRC Corporation
Meta: Find answers to today's issues facing affordable housing and the negative consequences for individuals and communities. Read more.
Listing page hangs/timeouts in the browser (>50s, repeatedly) — performance AUDIT item. 5 posts total, all Dec 2022–Jan 2023; nothing published in ~3 years.
Categories: Student Housing | Partnerships | Infrastructure Improvement | Affordable Housing
Post template: category tag, H1, date "23rd Dec 2022, 06:50", body, sidebar (Categories, Table of Contents), "Recent updates and announcements" (3 latest posts)

## POST 1 — /the-need-for-housing/
Title tag: Current Need for Housing in the U.S. - Project PRC Corporation
Meta: The current state of housing in the United States is a complex and pressing issue that affects millions of people across the country. Read.
Category: Affordable Housing · Date: 23rd Dec 2022, 06:50
Images: 2022/12/The-current-state-of-housing-by-the-numbers-PRC-Corp-Real-Estate-Developers-TX..jpg ; 2022/12/The-current-state-of-housing-conclusion-PRC-Corp-Real-Estate-Developers-TX..jpg
H1: The Current Need for Housing in the U.S.
H2: What happened to affordable housing?
The current state of housing in the United States is a complex and pressing issue that affects millions of people across the country. There is a significant shortage of affordable housing, particularly in urban areas, which has led to skyrocketing rent prices and a surge in homelessness. At the same time, there are also many empty homes and properties that sit unused, exacerbating the problem.
One of the main reasons for the shortage of affordable housing is the lack of new construction in recent years. The demand for housing has increased significantly, particularly in urban areas, but the supply has not kept up. This has led to competition for available housing and a corresponding increase in rent prices. Additionally, many of the new housing units that have been built in recent years have been geared towards the luxury market, rather than towards middle- or low-income earners.
Another factor contributing to the housing crisis is the high cost of building materials and labor. The rising cost of land and construction materials, as well as the increasing cost of labor, has made it more expensive to build new housing units. This has made it difficult for developers to build affordable housing, as they cannot charge low enough rents to make the projects financially viable.
The lack of affordable housing has had a number of negative consequences for individuals and communities. For one, it has contributed to the rise in homelessness, as people are unable to afford the high rents in urban areas. It has also made it difficult for people to find stable housing, leading to a high rate of housing insecurity. This can have serious impacts on individuals, particularly those with low incomes or those who are already facing other challenges, such as disability or mental illness.
H3: Economic and social consequences
There are also broader economic and social consequences to the housing crisis. The lack of affordable housing can make it difficult for businesses to attract and retain employees, as it can be hard for people to afford to live in the areas where they work. This can lead to a cycle of economic stagnation in certain areas, as businesses struggle to find the workforce they need to thrive.
The good news is that there are steps that can be taken to address the housing crisis. One solution is to increase the supply of affordable housing by providing incentives for developers to build more units. This could include tax credits or other financial incentives to encourage developers to build affordable housing.
Another solution is to invest in programs that help people afford housing. This could include rental assistance programs, such as Section 8 vouchers, or initiatives that help people save for a down payment on a home. These programs can help people who are struggling to afford housing to secure stable and affordable housing, which can have a number of positive impacts on their lives.
There are also steps that can be taken to better utilize existing housing units. For example, there are many empty homes and properties that sit unused in certain areas. These properties could be repurposed and used as affordable housing, helping to address the shortage of available units. Additionally, there are programs that help homeowners make necessary repairs to their homes, making them more habitable and helping to prevent homelessness.
H3: The current state of housing by the numbers
There is a shortage of 7.2 million affordable rental homes for extremely low-income renters in the United States. Extremely low-income renters are defined as those who earn 30% or less of the area median income.—National Low Income Housing Coalition
We estimate that there were 553,000 homeless people in the United States in 2020, a slight decrease from the previous year. However, this number does not include those who are doubled up with friends or family or who are at risk of homelessness.—U.S. Department of Housing and Urban Development
The median existing home price in the United States was $313,000 in 2021, an all-time high. This is significantly higher than the median income for many Americans, making it difficult for many people to afford to purchase a home.—The National Association of Realtors
The average rent for a one-bedroom apartment in the United States was $1,471 in 2021, an increase of 4.3% from the previous year. This high cost of rent can be a significant burden for those who are struggling to make ends meet.—Zillow
The average hourly wage needed to afford a two-bedroom apartment in the United States is $23.96, which is significantly higher than the current minimum wage of $7.25. This means that many low-income earners are unable to afford housing even if they are working full-time.——National Low Income Housing Coalition
The homeownership rate in the United States was 66.3% in the first quarter of 2021, down from a peak of 69.2% in 2004. This suggests that an increasing number of people are unable to afford to purchase a home.—Census Bureau
H3: What does it all mean?
These statistics illustrate the significant need for affordable housing in the United States, as well as the challenges that many people face in finding stable and affordable housing. They also highlight the need for policies and programs that can help address the housing crisis and ensure that all Americans have access to safe and affordable housing.
H3: How Can I Help?
The current need for housing in the United States is a pressing and complex issue that affects millions of people. The shortage of affordable housing has led to skyrocketing rent prices and a surge in homelessness, and has had negative consequences for individuals and communities. However, there are steps that can be taken to address the housing crisis, including increasing the supply of affordable housing, investing in programs that help people afford housing, and better utilizing existing housing units.
Join Project PRC in the fight against homelessness in America by providing housing, education, food, and hope to those in need. Make a tax deductible donation or become a sponsor today. We want to help 1000 families this year, and you can be a part of the change that is transforming the lives of those in need.
AUDIT: stats are 2020–2021 figures; homepage hero reuses the 7.2M NLIHC figure from this 2022 post — dated, keep attribution, flag for client refresh.

## POST 2 — /the-importance-of-infrastructure-improvement-in-the-united-states/
Title tag: The Importance of Infrastructure Improvement in the United States- Project PRC Corporation
Meta: The Importance of Infrastructure Improvement in the United States From crumbling roads and bridges to outdated water
Category: Infrastructure Improvement · Date: 3rd Jan 2023, 03:38
Images: 2023/01/The-Importance-of-Infrastructure-Improvement-in-the-United-States-Water-and-Sewage-Project-PRC-Corporation.jpg ; ...-Moving-Forward-Project-PRC-Corporation.jpg ; ...-Project-PRC-Corporation-Texas.jpg
H1: The Importance of Infrastructure Improvement in the United States
H2: The State of Infrastructure in the United States
The United States has always been a country built on infrastructure. From the transcontinental railroad and the interstate highway system to modern airports and ports, our infrastructure has played a critical role in shaping the nation’s economy, growth, and competitiveness.
But today, much of that infrastructure is in dire need of repair and modernization. According to the American Society of Civil Engineers (ASCE), the United States has a “D+” grade for the overall condition of its infrastructure, with many individual categories receiving even lower grades.
H3: Crumbling Roads and Bridges
One of the most pressing issues is the state of our roads and bridges. The ASCE estimates that nearly one-quarter of all U.S. roads are in poor or mediocre condition, and nearly 50,000 bridges are structurally deficient or functionally obsolete. This not only poses a safety risk for drivers, but it also has a significant economic impact. According to the U.S. Department of Transportation, poor road conditions cost American drivers an estimated $109 billion per year in additional vehicle repairs and operating costs.
H3: Outdated Water and Sewage Systems
In addition to our roads and bridges, the U.S. also faces challenges with its water and sewage systems. Many of these systems are outdated and prone to leaks and breaks, leading to water waste and environmental pollution. The ASCE estimates that the U.S. needs to invest $1 trillion over the next 25 years to modernize and maintain these systems.
Pull quote: The nation’s more than 16,000 wastewater treatment plants are functioning, on average, at 81% of their design capacities, while 15% have reached or exceeded it.—American Society of Civil Engineers
H3: Overcrowded Airports and Aging Ports
Our airports and ports are also in need of improvement. Many of our airports are overcrowded and struggling to keep up with growing demand, leading to delays and inefficiencies. Meanwhile, our ports are facing challenges related to aging infrastructure and the need to accommodate larger ships and cargo volumes.
Pull quote: Prior to the onset of the COVID-19 pandemic, the nation’s airports were facing growing capacity challenges. Over a two-year period, passenger travel steadily increased from 964.7 million to 1.2 billion per year, yet flight service only increased from 9.7 to 10.2 million flights per year…—American Society of Civil Engineers
H2: The Importance of Infrastructure Improvement
H3: Economic Growth and Competitiveness
So why is infrastructure improvement so important? For one, it is essential for economic growth and competitiveness. Infrastructure enables businesses to move goods and services efficiently, access new markets, and attract and retain top talent. It also creates jobs and supports local economies.
Pull quote: Growing wear and tear on our nation’s roads have left 43% of our public roadways in poor or mediocre condition, a number that has remained stagnant over the past several years.—American Society of Civil Engineers
H3: Public Safety and Well-Being
Infrastructure improvement is also critical for the safety and well-being of the American people. Crumbling roads and bridges, outdated water systems, and overcrowded airports all pose risks to public safety. Investing in infrastructure upgrades can help to prevent accidents and reduce the impact of natural disasters.
Pull quote: There is a water main break every two minutes and an estimated 6 billion gallons of treated water lost each day in the U.S., enough to fill over 9,000 swimming pools.—American Society of Civil Engineers
H3: Environmental Sustainability
Finally, infrastructure improvement is necessary for environmental sustainability. Upgrading our water and sewage systems can help to reduce water waste and pollution, while investing in alternative modes of transportation, such as public transit and bike lanes, can reduce carbon emissions and improve air quality.
H2: Moving Forward with Infrastructure Improvement
The good news is that there is growing recognition of the importance of infrastructure improvement in the United States. The federal government has recently committed to investing billions of dollars in infrastructure projects, and many states and localities are also taking action.
However, there is still much work to be done. It is crucial that we continue to invest in our infrastructure and prioritize long-term planning and maintenance. By doing so, we can ensure that the United States remains a leader in infrastructure and continues to support the prosperity and well-being of its citizens.
One way to move forward with infrastructure improvement is to adopt a comprehensive, long-term approach. This means not only investing in new projects, but also addressing the maintenance and repair of existing infrastructure. By taking a proactive approach to maintenance, we can extend the life of our infrastructure and save money in the long run.
Another key aspect of infrastructure improvement is the adoption of new technologies and materials. From advanced materials that are more durable and resistant to corrosion to smart infrastructure systems that can monitor and optimize performance, new technologies can help to improve the efficiency and reliability of our infrastructure.
Finally, it is important to consider the needs of all stakeholders when planning and implementing infrastructure projects. This includes not only the needs of businesses and commuters, but also the needs of local communities and the environment. By taking a holistic approach to infrastructure planning, we can ensure that projects are designed and implemented in a way that benefits all parties.
By addressing these issues and investing in our infrastructure, we can build a stronger, more sustainable future for the United States. Project PRC Corporation is taking the lead in assisting the United States with infrastructure projects that will benefit generations to come.

---

## POST 3 — /the-benefits-of-donating-to-nonprofit-organizations/
Title tag: The Benefits of Donating to Nonprofits - Project PRC Corporation
Meta: Learn about the various benefits of donating to nonprofit organizations, including tax benefits and additional benefits. Read more.
Category: Affordable Housing · Date: 4th Jan 2023, 04:08
Images: 2023/01/Additional-Benefits-of-Donating-to-Nonprofit-Organizations-Project-PRC-Corporation-Arlington-Texas.jpg ; 2023/01/The-Current-State-of-Homelessness-Project-PRC-Corporation.jpg ; 2023/01/Why-You-Should-Consider-Donating-to-Project-PRC-Corporation.jpg
H1: The Benefits of Donating to Nonprofit Organizations
H2: Why Donate to Nonprofits?
When it comes to charitable giving, many people may be aware of the feel-good factor associated with helping others in need, but may not be aware of the various tax benefits and other benefits that come with donating money to nonprofit organizations in the United States. In this article, we will explore these benefits in more detail and highlight why you should consider donating to Project PRC Corporation, a nonprofit that builds low to moderate income homes in the United States.
H2: Tax Benefits of Donating to Nonprofit Organizations
One of the primary benefits of donating to nonprofit organizations is the ability to claim a tax deduction for your contributions. According to the Internal Revenue Service (IRS), donations to qualified nonprofit organizations are tax-deductible for individuals who itemize their deductions on their federal income tax return. This means that you can deduct the amount of money you donate to a nonprofit organization from your taxable income, which can result in a lower tax bill. Additionally, the CARES Act, a law passed in 2020 as a response to the COVID-19 pandemic, allows taxpayers who do not itemize deductions to deduct up to $300 of cash donations made to qualified organizations on their 2020 tax return.
It’s worth noting that there are some restrictions and rules that apply when claiming a tax deduction for charitable donations. For example, donations must be made to a qualified nonprofit organization, and the amount that can be deducted is limited to a certain percentage of your adjusted gross income (AGI). Additionally, donations of property, such as clothing or household items, may also be tax-deductible, but there are specific rules that must be followed.
H2: Additional Benefits of Donating to Nonprofit Organizations
In addition to the tax benefits, there are other benefits to donating money to nonprofit organizations. These include:
- Supporting a cause you believe in: When you donate money to a nonprofit organization, you are supporting a cause or mission that you care about. This can be incredibly satisfying and fulfilling.
- Making a positive impact: Nonprofit organizations rely on donations to fund their programs and services. When you donate money, you are directly contributing to the positive impact that the organization is making in the community.
- Building relationships: Many nonprofit organizations have volunteer opportunities and events that allow donors to get more involved with the organization. This can be a great way to build relationships with other like-minded individuals who share your passion for the cause.
- Creating a legacy: Many people choose to donate money to nonprofit organizations as a way to leave a lasting legacy. For example, you may choose to make a donation in memory of a loved one or to support a specific program that aligns with your values.
Join us in our mission to rebuild humanity by investing in communities. Make a tax deductible donation or become a sponsor today, and be a part of the change that is transforming the lives of those in need. Project PRC is working to help 1000 families this year with a better life, the necessities they need like food, water, shelter education, and above all else, hope.
H3: The Current State of Homelessness by the Numbers
There is a shortage of 7.2 million affordable rental homes for extremely low-income renters in the United States. Extremely low-income renters are defined as those who earn 30% or less of the area median income.— National Low Income Housing Coalition
Due to decades of misguided and faulty policies, homelessness is a serious problem. Over half a million people go homeless on a single night in the United States.— The Council of Economic Advisers
Adults over 25 make up the largest share of people living in shelters or transitional homes. However, the percentage of children experiencing homelessness has risen. In 2020, those under 18 accounted for 18 percent of all people living in shelters, safe havens, or transitional homes. In 2021, their share was 25 percent, a concerning single-year increase.— U.S. Department of Housing and Urban Development
2.5 million children will experience homelessness this year in America. 1 in 30 children in the United States experience homelessness annually.— Homelessness/Poverty Fact Sheet January 2022
H4: Why You Should Consider Donating to Project PRC Corporation
Project PRC Corporation is a nonprofit organization that builds low to moderate income homes in the United States. The organization truly believes that everyone deserves access to safe, affordable, and high-quality housing. Project PRC Corporation has a proven track record of success in providing affordable housing to families in need and has been recognized by industry experts for its commitment to excellence.
By donating to Project PRC Corporation, you will be supporting an organization that is making a real difference in the lives of families in need of affordable housing. You will also be able to take advantage of the tax benefits and other benefits of donating to nonprofit organizations discussed in this article.
Donating to Project PRC Corporation is a great way to make a positive impact on the lives of others and create a lasting legacy. Whether you choose to make a one-time donation or become a regular donor, your contributions will help the organization continue its mission of providing affordable housing to families in need.
In conclusion, donating to nonprofit organizations like Project PRC Corporation can provide not only the satisfaction of contributing to a worthy cause but also the tax benefits and other benefits that come with charitable giving. It’s important to research the organization and make sure it aligns with your values before making a donation. This can help ensure that your contributions are making the greatest impact possible.
H2: References: https://www.irs.gov/forms-pubs/about-publication-526 · https://www.congress.gov/bill/116th-congress/senate-bill/748 · https://projectprc.org/  (rendered run-together, unlinked)
AUDIT: CARES Act $300 deduction applied to 2020 only — outdated tax info; "recognized by industry experts" is an unsupported claim (do not amplify).

## POST 4 — /public-private-partnerships-a-comprehensive-guide/
Title tag: Public-Private Partnerships: P3 Guide - Project PRC Corporation
Meta: Learn about the benefits and challenges of PPPs, as well as best practices and examples of successful partnerships around the world. Read more
Category: Affordable Housing · Date: 12th Jan 2023, 07:59
Images: 2023/01/Challenges-of-Public-Private-Partnerships-A-Comprehensive-Guide-Project-PRC-Corporation.jpg ; 2023/01/Best-Practices-for-Public-Private-Partnerships-Project-PRC-Corporation-Arlington-Texas.jpg ; 2023/01/Examples-of-Public-Private-Partnerships-A-Comprehensive-Guide-Project-PRC-Corporation.jpg ; 2023/01/Public-Private-Partnerships-for-a-Better-America-A-Comprehensive-Guide-Project-PRC-Corporation.jpg
H1: Public-Private Partnerships: A Comprehensive Guide
H2: What are Public-Private Partnerships?
Public-Private Partnerships (PPPs) are collaborations between government agencies and private sector companies, in which both parties work together to achieve a shared goal. PPPs can take many forms, including contracts, concessions, and leases, and can be used to finance, build, and maintain a wide range of projects, including housing, infrastructure, schools, hospitals, and more.
H2: Benefits of Public-Private Partnerships
There are several potential benefits to using PPPs for public projects:
- PPPs can bring in private sector expertise and innovation to the public sector, which can lead to more efficient and effective delivery of services.
- PPPs can provide a way for the government to access private financing, which can be especially useful for large, complex projects that may be difficult to fund through traditional means.
- PPPs can transfer some of the financial risk of a project from the government to the private sector partner, which can be particularly appealing for projects with uncertain outcomes or high levels of risk.
H2: Challenges of Public-Private Partnerships
Despite their potential benefits, PPPs also come with some challenges that need to be carefully considered:
- PPPs can be complex and time-consuming to set up, especially if they involve a large, multi-faceted project.
- There can be concerns about accountability and transparency in PPPs, especially if the private sector partner is not subject to the same level of oversight as the government.
- PPPs can also raise concerns about fairness, as private companies may be motivated by profit rather than the public good. This can lead to concerns about whether the private partner is prioritizing the needs of the community over their own financial interests.
Pull quote: More Than Two-Thirds of Universities See Growth of Public-Private Partnerships on Campus—PRESS RELEASE FROM P3•EDU
H2: Best Practices for Public-Private Partnerships
There are several key steps that governments can take to ensure that PPPs are successful and provide value to the public:
- Clearly define the roles and responsibilities of all parties involved in the PPP, including the private sector partner, the government agency, and any other stakeholders.
- Establish clear performance metrics and benchmarks to measure the success of the PPP and ensure that all parties are meeting their obligations.
- Ensure that the PPP process is transparent and open to the public, including through the use of public notice and comment periods.
- Carefully consider the long-term implications of the PPP, including any potential risks or challenges that may arise over the course of the partnership.
Pull quote: Public-private partnerships (PPPs) offer significant opportunities such as cost effectiveness, timeliness, granularity and scope for new indicators.—Public-Private Partnerships for Statistics
H2: Examples of Public-Private Partnerships
There are many examples of successful PPPs around the world, including:
- The Sydney Opera House: This iconic performing arts venue was built through a PPP between the government of New South Wales and private sector partners.
- The Chicago Skyway: This toll road was leased to a private sector consortium for 99 years in a PPP that generated billions of dollars for the city of Chicago.
- The London Underground: The London Underground has used PPPs to finance and upgrade several lines, including the Northern, Jubilee, and Piccadilly lines.
Pull quote: Flexibility and variability of the mechanism of public–private partnership ensures its applicability to any project in the sphere of sustainable development.— Palgrave Macmillan, Cham
H3: Public-Private Partnerships for a Better America
Public-Private Partnerships can be a useful tool for governments to finance, build, and maintain public projects. While there are potential benefits to using PPPs, it is important to carefully consider the challenges and best practices for implementing these partnerships. By carefully planning and managing PPPs, governments can leverage private sector expertise and financing to deliver high-quality public services and infrastructure that benefit the community. Project PRC Corporation provides the vehicle, expertise, funds, and development with partners across America. Contact us.
AUDIT: category mislabeled (filed under Affordable Housing, not Partnerships).

## POST 5 — /how-can-i-help-fight-homelessness-in-america/
Title tag: How Can I Help Fight Homelessness in America? - Project PRC
Meta: Homelessness and hunger are two of the most pressing issues facing communities across America. Read how you can help by donating today.
Category: Affordable Housing · Date: 30th Jan 2023, 06:00
Images: 2023/01/How-Can-I-Help-Fight-Homelessness-in-America-Donation-Levels-Project-PRC-Corporation.jpg ; ...-The-Numbers-Project-PRC-Corporation.jpg ; ...-Project-PRC-Corporation.jpg
H1: How Can I Help Fight Homelessness in America?
H2: Can I Really Change Lives?
There are many ways you can help change lives in America. One way to make a big difference is by donating to organizations like Project PRC Corporation, which works to develop and redevelop real estate properties that provide safe, affordable, and high-quality housing to those in need.
At Project PRC Corporation, our mission is simple: to serve our community by providing 1,000 families with housing, food, education and hope. We believe that everyone deserves access to safe, affordable, and high-quality housing, and your tax deductible donations make that possible each year.
H2: Fighting the Housing Crisis in America
Our team is dedicated to solving today’s housing crisis and adding value to communities across America. We focus on a number of key areas, including:
- P3 Partnerships with Government entities, Public and Private Schools and Universities
- Student Housing
- Low to Moderate Income Housing
- Infrastructure Improvement
- Redevelopment of abandoned properties
These areas are all critical in the fight against homelessness and hunger. P3 partnerships, for example, allow us to work with government entities, schools, and universities to provide housing for students and low-income families. Student housing, in turn, helps to alleviate the burden on government and reduce the number of homeless youth. Low to Moderate Income Housing helps working families and people who are struggling to afford housing. Infrastructure Improvement and Redevelopment of abandoned properties help to revitalize communities and make them safer, more attractive places to live.
H2: How Can I Help?
There are many ways to donate to Project PRC Corporation, and we offer a range of donation levels for both individuals and corporations. Your donations help fight homelessness and change lives.
For individuals, we have the following annual tax deductible donation levels:
- Project PRC Friends – $120
- Project PRC Family – $500
For corporations, we have the following annual tax deductible donation levels:
- Corporate – Bronze – $1,000
- Corporate – Copper – $5,000
- Corporate – Silver – $10,000
- Corporate – Gold – $25,000
- Corporate – Platinum – $50,000
- Corporate – Emerald – $100,000
- Corporate – Diamond – $150,000
Donors can also use the custom tax deductible donation option to donate any amount of $20 or more, and every amount is appreciated equally.
H3: The Current State of Homelessness by the Numbers
2.5 million children will experience homelessness this year in America. 1 in 30 children in the United States experience homelessness annually.— National Law Center on Homelessness & Poverty
More than 1.3 million (1,387,573) students experienced homelessness in the 2018-2019 school year.— National Center for Homeless Education
People in families with children make up 30 percent of the nation’s homeless population.— The U.S. Department of Housing and Urban Development
H3: 2.5 million children — Download The Current State of Homelessness by the Numbers.  (download link target not resolved)
H4: How Does My Donation Help?
By donating to Project PRC Corporation, a nonprofit organization, you can help to make a real difference in the fight against homelessness and hunger in America. Your donation will help us to provide safe, affordable, and high-quality housing for people in need, and will help to revitalize communities and make them safer, more attractive places to live. When families have access to affordable housing, the dependency on government and state assisted food programs decreases substantially.
Donating to Project PRC Corporation is not only about giving money but it’s about investing in the future of America, investing in the future of our communities and in the future of our people. Together, we can make a real difference in the fight against homelessness and hunger.
Join us in our mission to combat homelessness in America through Project PRC. Our goal is to provide 1,000 families with housing this year, building self-sustaining communities where residents can work and thrive. Be a part of this change and make a yearly donation to help us reach our goal. Together, we can make a difference in the lives of those struggling with homelessness.
References: The National Law Center on Homelessness & Poverty · U.S. DEPARTMENT OF AGRICULTURE · IRS Publication 526 · U.S. DEPARTMENT OF EDUCATION
AUDIT: The named donor levels (Friends $120 … Corporate Diamond $150,000) exist ONLY in this 2023 post — not on the Donate or Corporate Partnerships pages. Must confirm with client whether still current before reusing anywhere.

---

# REFERENCE SITES

# REFERENCE 1 — https://prcequityfund.com/  (PRC Equity Fund — sister entity; Reg A fund whose "primary customer" is Project PRC)
Title: PRC Equity Fund - Where Opportunity Meets Return
Meta: Explore PRC Equity Fund: student housing, potential monthly distributions and profit sharing. Investing involves risk.
Stack: WordPress + Elementor + OceanWP theme + Header Footer Elementor (flyout menu), Site Kit; KoreConX investment widget (platform.koreconx.com); Cal.com booking (cal.com/jshelley/prcequityfund); IRA Club partner link
Logo: /wp-content/uploads/2024/08/PRC-Equity-Fund-Company-Logo-Large-Lighter.png (light version for dark bg); hero image PRC-Equity-Fund-Where-Opportunity-Meets-Return.png

## Design language (computed)
- Header: charcoal bar #24272D, ~65px, flyout side menu (bg #24272D); nav links Lato 16.8px/500 white
- Hero: full-bleed photo with deep navy overlay rgb(5,31,57) = #051F39 @ 85%; H1 Montserrat 35px/600 UPPERCASE white, tight leading, -0.35px tracking
- Section H2: Montserrat 28px/600 #24272D; small section labels Lato 20px/600 UPPERCASE #333 ("THE PROBLEM / OUR SOLUTION / YOUR OPPORTUNITY")
- Body: Roboto 15px / 22.5px; text grays #52616B (most-used colour), #333
- Primary CTA: cyan #1FBDD4 fill, white text, 1px white border, 5px radius, UPPERCASE Montserrat/Roboto 500, ~10px 20px padding ("DOWNLOAD GUIDE", "VIEW CIRCULAR", "LET'S MEET"); secondary LOGIN = black fill 4px radius
- Accent/support colours: navy #00173D, #1C3666, #143A7B; light grey section tint #E6E6E6 @50%; #F9F9F9; light blue-grey #C9D6DF; red #8B281D / #EB5757 (alerts)
- Radius 4–6px only; one soft shadow rgba(0,0,0,.08) 0 0 10px; containers max ~1500–1600px
- Icons: Font Awesome (several copies loaded)
- Pattern: Problem → Solution → Opportunity triad; "Capital Raised to Date $ 0" counter (renders $0 — broken counter); disclaimers in small italic under CTAs
## Content structure (home)
H1: STEADY INCOME BY INVESTING IN STUDENT, AFFORDABLE, AND WORKFORCE HOUSING / sub copy / [DOWNLOAD GUIDE] [VIEW CIRCULAR] [LET'S MEET] / risk disclaimer / Capital Raised to Date counter / H2 Meeting the Growing Demand for Student Housing + THE PROBLEM / OUR SOLUTION / YOUR OPPORTUNITY / JOIN A WEBINAR / Want to Learn More? (article cards) / Ready to Invest in Student Housing? + facts strip "$5,000 Minimum Investment • Open to Accredited & Non-Accredited Investors • Potential Monthly Income"
Nav: Home · Our Team · Testimonials · Key Partners · Resources ▾ (Investor Guide PDF, Expats Guide, Press, Videos, Trust Fund Baby, MoneyShow, FAQ, Articles) · IRA Club · Webinars · Contact · Let's Meet (Cal.com)
Observations: same Elementor/WordPress heritage as projectprc.org; uppercase Montserrat headlines + cyan buttons + navy-overlay photography are the signature; also heavy (4 font families + 6 Font Awesome stylesheets).

---

# REFERENCE 2 — https://www.prcinvestors.com/  (PRC Investor Network — "an education and community platform of Pioneer Realty Capital"; the most recent revamp, cleanest system of the three)
Title: PRC Investor Network | Free Commercial Real Estate Investing Education
Meta: Free, practical commercial real estate education from Pioneer Realty Capital and our Panel of Experts. The best investor is a smart investor.
Platform: Kajabi (theme tokens "--nova-*"), RudderStack analytics
Logo: Kajabi CDN .../d24dbb-5718-21-d004-d12bd7c72c7c_real-estate-investing-prc-investors-network.jpg (562x197, JPG — no transparent version)
Address: 433 Las Colinas Blvd East, Suite 1200, Irving, TX 75039 (Pioneer Realty Capital)

## Design tokens (declared in :root)
--nova-color-primary / accent / btn-bg: #1FBDD4 (cyan)  · --nova-btn-text: #24272D
--nova-color-heading: #24272D (charcoal) · --nova-color-body: #333333 · --nova-color-body-secondary: #747474
--nova-font-heading / body: Montserrat (400/500/600/700 only — single family)
Sizes: body 16px (hero/body copy 18px / 30.6px lh) · H1 36px token (hero renders 48px/700, lh 1.2) · H2 36px/700 (lh 1.25) · H3 30px/600 (token 24) · H4 20 · H5 18 · H6 16
Surfaces: charcoal #24272D (header, hero, podcast + signup sections) ↔ warm off-white #F7F5F4 ↔ white, alternating; footer #1B1D22
Text on dark: #D5D9DF body, #AEB4BD muted
Eyebrows: Montserrat 14px/600, cyan, UPPERCASE, tracking 0.18em ("PRC INVESTOR NETWORK · PIONEER REALTY CAPITAL"); 18px/0.18em for section kickers
Buttons: cyan fill, CHARCOAL text (not white), 2px same-colour border, 4px radius, 16px 32px padding, Montserrat 18px/500, sentence case; secondary = charcoal fill white text
Cards: 4px radius, no shadow, no border — flat
Layout: 1280px max container; header 92px charcoal
Imagery: real event photography (panel of experts, master class, podcast recording, meetups), video poster with play affordance
Pattern: eyebrow → bold H1 → one paragraph → primary + secondary CTA → trust ticks ("✓ Free to join ✓ No credit card ✓ Taught by working practitioners") → stats strip (40+ episodes · 8 core tracks · $0 to join) → 3-up value props → tiered offer (Free / Per Course / All-Access / Certification) → curriculum chips → podcast episodes → 2-step qualifying signup form with SMS consent → legal disclaimer band
Nav: PRC Academy · Membership · Free Guides · Podcast · Our Experts · [Join Free] · Log in

## Cross-brand synthesis (what makes the three sites one family)
- Shared: cyan #1FBDD4 action colour + charcoal #24272D (prcequityfund & prcinvestors); Montserrat headlines; flat 4–5px radii; dark charcoal/navy hero bands; disclaimer/legal bands; real event photography; Dallas–Fort Worth (Pioneer Realty Capital) parentage.
- Project PRC today diverges: navy #0F1B31 + blue #229CE0 + magenta #CC3366, Raleway/Inter/Open Sans/Lato, its own SVG logo. Its own logo colours govern Project PRC's identity (to be verified from the SVG); the sister-site system (Montserrat, charcoal, flat radii, eyebrow labels, cyan as the shared "family" accent) should shape layout and typography so the three read as one organisation.
