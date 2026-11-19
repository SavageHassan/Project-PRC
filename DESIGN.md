# Project PRC — Creative Direction & Site Architecture (Phases 2–3)

Source of truth for content: `ProjectPRC-Website-Context-File.md` (Phase One audit).

## 1. What the site is for
Project PRC is a Dallas 501(c)(3) that keeps students and working families housed. It does this two ways: it runs rent-relief programs at member properties (Rental Assistance, Eviction Avoidance, Housing Scholars, Financial Literacy), and it develops student and affordable housing through public-private partnerships (625 at Prairie View, Kennedale Oaks).

Six audiences, four of whom need to act:
| Audience | Their job on the site | Primary action |
|---|---|---|
| Resident in need (625 at Prairie View today) | Understand RAP vs EAP, check eligibility, apply | Apply for assistance |
| Property owner or manager | See the cost case, join the Network | Apply to join (property application) |
| Individual donor | Trust the org, see what a gift does, give | Donate (monthly) |
| Corporate partner | See the sponsorship opportunity, talk to the team | Partnership inquiry / download guide |
| PVAMU student | Scholarship and workshops | Apply / register |
| Universities, cities (P3) | Understand the development model | Contact |

The old site gave all of them the same flat menu. The new one gives each a front door from the homepage and the header.

## 2. Brand continuity
- **Logo:** the official SVG, unaltered on light backgrounds (black wordmark and roof, blue #219CDF figures). On dark backgrounds, a reversed variant: the black parts become white, the blue stays. Same artwork, colour-swapped only.
- **Family system** (from prcequityfund.com and prcinvestors.com): Montserrat, charcoal #24272D bands, warm paper #F7F5F4, flat 4px radii, no drop shadows, real photography, cyan-family action colour with charcoal text on buttons.
- **Project PRC's own colour:** logo blue #219CDF takes the place the sister sites give cyan #1FBDD4. It is the same family of blue, so the three sites read as one organisation while Project PRC keeps its own mark.
- **Retired:** magenta #CC3366, Raleway, Lato, Open Sans, Inter, template frame SVGs, stock WebP filler, placeholder donor wall and partner logos.

## 3. Tokens
| Token | Hex | Use | Contrast |
|---|---|---|---|
| ink | #24272D | Text, dark bands, button text | 13.8:1 on paper |
| paper | #F7F5F4 | Page background | — |
| white | #FFFFFF | Cards, alternating bands | — |
| blue | #219CDF | Button fills, logo, marks on dark | ink on blue 4.9:1 |
| blue-deep | #13679A | Links and small accent text on light | 5.6:1 on paper |
| sky | #6FC3EE | Small accent text on ink | 7.6:1 on ink |
| mute | #5B616B | Secondary text on light | 5.7:1 on paper |
| night | #1B1D22 | Footer | — |
| line | #E2DFDB | Hairlines, table rules | — |

Type: Montserrat only (400, 500, 600, 700), self-hosted through `next/font`.
- Display / H1: clamp(2.6rem → 4.9rem), 700, line-height 1.02, tracking −0.025em, max 14ch per line
- H2: clamp(1.9rem → 2.9rem), 700, line-height 1.08, tracking −0.02em
- H3: 1.3rem, 600, line-height 1.25
- Body: 1.0625rem / 1.65, max 68ch
- Small: 0.875rem / 1.5
Headings are sentence case, as the client writes them. No all-caps labels. A short blue-deep label above a heading appears only where it names something real (a program name, an audience), never as decoration.

Layout: 1280px container, 12-column grid, 24px gutters, left-aligned throughout. Section rhythm 96–144px desktop, 64–80px mobile. Radius 4px on interactive surfaces; images 4px; no shadows.

## 4. The one memorable thing: the roof
The logo's mark is a roof sheltering three people. The site borrows that one gesture:
- **Hero:** the roof line from the logo is drawn as a single stroke over the headline on page load, then the four "doors" rise beneath it. This is the only orchestrated motion on the site.
- **Doors:** the homepage routes each audience through a tall panel whose top edge is cut to the roof's pitch. Hover and focus lift the roof slightly. That's motion answering an action.
Nothing else gets decoration. Numbered markers appear only where the content is a real sequence (how the Network works, how to apply, workshop series order).

```
HOME (desktop)
┌──────────────────────────────────────────────────────────────┐
│ [logo]   Get help  Property owners  Give  About  Resources [Donate] │
├──────────────────────────────────────────────────────────────┤
│  ╱╲  (roof line draws in)                                     │
│ Affordable Housing        │ [photo: scholarship ceremony]     │
│ is a Human Right          │                                   │
│ para (NLIHC 7.2M)         │                                   │
├──────┬──────┬──────┬──────┤ ← four doors, roof-cut tops       │
│ I need help │ I manage │ I want to │ My company │             │
│ with rent   │ property │ give      │ partners   │             │
└──────────────────────────────────────────────────────────────┘
 Who we are (2 paras + video)  │  Programs strip (RAP / EAP / Scholars / Workshops)
 Proof: 625 at Prairie View — 120 units, 100% occupied → projects
 How it works (01 Identify, 02 Build, 03 Change lives)
 Approach (6 focus areas as a quiet two-column list, not cards)
 Donation ladder ($20/$50/$100/$500) + Donate
 Google reviews (static, real) · Chase partnership · Final CTA
```

## 5. Motion rules
- One page-load sequence (home hero). Inner pages: none on load.
- Interaction motion: menus open, accordions expand, tabs switch, the eviction-cost estimator updates, gallery lightbox opens. 150–250ms, ease-out.
- Images fade in when loaded (no layout shift: fixed aspect ratios).
- `prefers-reduced-motion: reduce` disables all transforms and the hero draw.
- No Three.js, no GSAP: nothing here needs them, and the old site's load time is the biggest UX problem. Motion is CSS plus a few lines of JS.

## 6. Information architecture
All existing URLs are kept, so search rankings, printed flyers and press links keep working.

**Header**
- **Get help** → For residents (/join-noc-tenants/) · Apply for assistance (/rental-assistance-or-eviction-avoidance-application/) · Housing Scholars Program · Financial Literacy Workshops
- **Property owners** → /join-noc-apartments/ (with Network overview /network-of-communities/ and the property application)
- **Give** → Donate · Rent Subsidy Program · Corporate partnerships · Volunteer
- **About** → Our story (/about-us/) · Network of Communities · Stories (/testimonials/) · Events
- **Resources** → Articles (/blog/) · College Housing Today (/magazine/) · Program guides (/resources/) · Shop (Printify)
- **Contact** · **[Donate]** (always visible, including mobile)

**New URLs** (fill audit gaps; no new claims): /volunteer/ (replaces the popup), /resources/ (all 5 PDFs in one place).
**Redirects:** /about/ → /about-us/ · /donate/ → /donate-now/ · /shop/, /cart/, /checkout/, /my-account/ → Printify shop · /donor-dashboard/, /donation-confirmation/, /donation-failed/ → WordPress (GiveWP stays there).

## 7. Page-by-page structure
- **Home:** hero + doors · who we are + video · programs at a glance · current projects proof · mission steps · approach · donation ladder · reviews · final donate band.
- **For residents (/join-noc-tenants/):** eligibility first, RAP vs EAP side-by-side comparison (grant vs financing, APR 24.99% disclosed in the comparison), how to apply steps, apply CTA, guides, questions form.
- **Property owners (/join-noc-apartments/):** problem → solution → membership cost → eviction cost estimator (uses only the site's own figures) → RAP/EAP tabs → how joining works → join CTA.
- **Network of Communities:** overview of both programs, member spotlight (625 at Prairie View), hidden cost of evictions table, FAQ, contact form.
- **Applications (tenant, property, scholars):** short context, what you'll need, the HubSpot form, questions form.
- **Housing Scholars:** award, eligibility checklist, how selection works, dates, application state (closed/open) with a "tell me when it opens" capture instead of a dead link.
- **Financial Literacy Workshops:** facts row, four skills, series (real sequence → numbered), details grid, register (Airtable), Chase partnership.
- **Rent Subsidy Program:** what it is, how it works (sequence), why it works, how to help.
- **Corporate partnerships:** opportunity, why partner, FAQ, guide download, inquiry form.
- **Donate:** the GiveWP form above the fold beside the impact ladder; EIN and 501(c)(3) visible.
- **About:** origin, what we do, board, current projects, CTA.
- **Stories:** the two videos and the Google reviews together.
- **Events:** gallery grouped into the two real sets, lightbox.
- **Articles + 5 posts:** readable article template.
- **Magazine:** three audience editions + flipbook link.
- **Contact:** routed inquiry (who are you?) + address, phone, hours, map link.
- **Legal:** privacy and refund content on their correct URLs; Terms holds a clearly marked placeholder until the client supplies text.

## 8. Forms and data
- HubSpot embeds stay for the three applications and the general contact form (portal 20923598, existing form IDs), so the client's pipeline is unchanged.
- The donation form stays in GiveWP (form 2728) and is embedded from WordPress, which keeps running behind the scenes (set `NEXT_PUBLIC_WP_URL`).
- Volunteer, corporate inquiry, Network inquiry and the scholarship "notify me" form are native forms posting to `/api/forms`, which forwards to one webhook (`FORMS_WEBHOOK_URL`: HubSpot, Zapier, Make or email). This takes the lead tools from four to two.
