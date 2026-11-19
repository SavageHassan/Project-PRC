# Client review list

Every place where the new site differs from the live projectprc.org, or where the live site contradicted itself. Decision rule used: **the version most pages agree on, flagged here.** Nothing below adds new claims, statistics, services or partners.

## A. Needs a client answer before launch
| # | Issue | What the new site does now | Where |
|---|---|---|---|
| 1 | **RAP vs EAP definitions conflict.** The old tenant application page said RAP = up to 50% of rent, EAP = up to 3 months with 90 days on-time payments. Three other pages say RAP = grant, up to 50% for up to 3 months, never repaid; EAP = financing, up to half of rent, 5-year repayment, APR 24.99%. | Uses the three-page version everywhere. **The HubSpot tenant form's acknowledgement checkboxes still carry the old wording.** Update them in HubSpot (form e194c47f…). | Tenant application, Residents, Network, Property owners |
| 2 | Two phone numbers: (682) 354-4483 and (682) 235-3048 | (682) 354-4483 everywhere (`lib/site.ts`) | Site-wide |
| 3 | Project status "Set to Begin Q2 2025" for 625 at Prairie View Phase II and Kennedale Oaks | Shown verbatim on About. The homepage shows unit counts only. | About › Current projects |
| 4 | Workshops said "Launching soon" and also "start September 21st, 2026" | "Launching soon" removed. The September 21 date and "schedule announced soon" kept. | Financial Literacy Workshops |
| 5 | Named giving levels (Friends $120 … Corporate Diamond $150,000) exist only in a 2023 article | Kept in that article only, not promoted elsewhere | /how-can-i-help-fight-homelessness-in-america/ |
| 6 | Eviction cost: "$5,000+ per eviction" vs "$3,500 – $10,000 per case" | Both kept in their original places. The cost estimator uses the $3,500–$10,000 range. | Property owners, Network |
| 7 | **No real Terms & Conditions exist** | Placeholder page (noindex) that points to contact details | /terms-and-conditions/ |
| 8 | **Privacy policy is the WordPress default.** It doesn't cover HubSpot applications (income, eviction status, file uploads), GiveWP/Stripe donations, Meta Pixel or GA4. | Carried over as-is, on the correct URL | /privacy-policy/ (recommend legal review) |
| 9 | Network members besides 625 at Prairie View? | Spotlight shows 625 at Prairie View only | Network of Communities |
| 10 | Scholarship window | `WINDOW_OPEN = false` shows a "notify me" form. Flip it to `true` in `app/housing-scholars-program/page.tsx` when applications open. | Housing Scholars |
| 11 | Scholarship form has no personal-statement or transcript upload, though the program page requires both | Unchanged (it's a HubSpot form). Add the fields in HubSpot (form ca251671…). | Scholars application |
| 12 | The 2023 article "How Can I Help Fight Homelessness" offered "Download The Current State of Homelessness by the Numbers", but the file couldn't be located | Line omitted. Send the PDF and it'll be linked | Article |

## B. Fixed (bugs and leftovers on the live site)
- Privacy and Refund policy contents were swapped. Each now sits on its correct URL. In the refund text, the unfilled `{physical address}` uses the return address the same policy gives for exchanges. In the privacy text, `dev.projectprc.org` → `projectprc.org` and "501(c)" → "501(c)(3)".
- `partners@projectprc.com` mailto links → `.org`.
- Template copy "innovative energy solutions… sustainability and convenience" removed from 6 pages. The NOC FAQ intro no longer says "energy solutions".
- Homepage donor wall (Sophia Mitchell, Olivia Brooks… with tech job titles) **removed as template placeholders.** Restore it if these are real donors.
- Placeholder partner logos (LaunchDarkly, "Company logo 9") removed. Chase is the only partner shown.
- "Join Now" buttons on the tenant and property pages opened the volunteer popup. They now go to the right application.
- "Apply Next Semester" buttons went nowhere. They're replaced by a "tell me when applications open" form.
- Dead "#" resource links on Contact and both application pages now open the real PDFs.
- NOC FAQ: "Can homeowners join the network?" had an unrelated answer. The question now reads "Who can the network help?" with the original answer.
- Property page: a duplicate "Financial Assistance" heading became "Catch Up Without Strain" (same body text).
- Typo "evivtions" corrected.
- Magazine page had the Contact page's title and description. It now has its own.
- Article "Public-Private Partnerships" was filed under Affordable Housing. It's now under Partnerships.
- The scholarship application page was unreachable. It's now in the sitemap and linked when the window is open.
- The volunteer form's ZIP field was a number input with "Boston"/"John" placeholders. It's now a proper text field with labels.
- Unused WooCommerce pages (/shop, /cart, /checkout, /my-account) redirect to the Printify store. /about → /about-us/, /donate → /donate-now/.

## C. Content placement changes (no wording invented)
- The homepage hero gains four audience "doors". Their labels reuse the old hero CTAs ("I'm a renter who needs assistance", "I'm a property manager looking to join") plus two new routes, for donors and businesses.
- "Become a Dreamer" popup → /volunteer/ page with the same fields.
- The Google reviews widget (Trustindex) became static text: the same 7 reviews, names and dates. Update it in `components/blocks.tsx` as new reviews arrive, or re-embed Trustindex if you prefer it live.
- The three "Contact Us & Resources" blocks now share one component, so contact details are identical everywhere.
- New /resources/ page lists all 5 PDFs in one place.
- Corporate inquiry form gains an optional "Which programs interest you?" field (options taken from the site's own FAQ).
