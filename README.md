# projectprc.org — rebuilt front end

Next.js 16 (App Router, TypeScript), no UI framework, no animation library. Self-hosted Montserrat. 33 statically generated routes plus one API route.

- `DESIGN.md`: creative direction, tokens, information architecture
- `REVIEW.md`: open client questions and every content change, with reasons
- `ProjectPRC-Website-Context-File.md` (delivered separately): the Phase One audit and verbatim content source

## Run it
```bash
npm install
cp .env.example .env.local   # fill in FORMS_WEBHOOK_URL
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## What still runs on WordPress
The new site replaces the WordPress front end, but two things stay on the existing install:
1. **GiveWP donations** (form 2728, Stripe): embedded on /donate-now/ by iframe, along with the donor dashboard and receipt pages.
2. **Uploaded images and PDFs**: hot-linked from `/wp-content/uploads` until you localize them (below).

At DNS cutover, move WordPress to a subdomain (e.g. `wp.projectprc.org`) and set `NEXT_PUBLIC_WP_URL` to it. The GiveWP system pages then redirect there automatically (see `next.config.ts`).

## Forms
| Form | Handled by |
|---|---|
| Tenant application, property application, scholarship application, general contact | Existing HubSpot forms (portal 20923598), loaded when scrolled into view |
| Volunteer, corporate inquiry, Network inquiry, magazine advertising, scholarship "notify me" | Native forms → `POST /api/forms` → forwarded as JSON to `FORMS_WEBHOOK_URL` |

In production, if `FORMS_WEBHOOK_URL` is unset, native forms show an error rather than pretending to send. Point the webhook at a HubSpot workflow, Zapier/Make, or any endpoint that emails the team. Each payload includes `form`, `page`, `submittedAt` and `data`.

## Self-hosting images
```bash
npm run build
npm run fetch-assets          # downloads the ~72 referenced images and PDFs into public/media
# then set NEXT_PUBLIC_MEDIA_BASE=/media and rebuild
```

## Editing content
- Contact details, nav, HubSpot IDs, PDFs: `lib/site.ts`
- Images: `lib/media.ts` (real Project PRC photography only)
- Articles: `content/posts.ts` (new posts get a URL at `/{slug}/` automatically)
- Scholarship window: `WINDOW_OPEN` in `app/housing-scholars-program/page.tsx`

## Analytics
The old site loaded GA4 (G-TPHCH8C52B) and Meta Pixel (3399446180295061). They aren't included yet, pending a consent decision; add them in `app/layout.tsx` with `next/script` (strategy `afterInteractive`) and update the privacy policy.

## Click-through preview
`npm run preview:build -- <folder containing media/>` builds a static, self-contained copy of the site into `preview-dist/` for review links. It swaps the Next.js runtime for `scripts/preview/site.js` (the same menus, tabs, calculator and gallery in plain JS), shows placeholders where HubSpot and GiveWP would load, and switches forms off with a clear message. It isn't for production.

## Deploy
Any Node host works; Vercel is the simplest. Set the four env vars from `.env.example`. Keep `trailingSlash: true`: it preserves every existing URL, so search rankings and printed links keep working.

## Quality checks run
- `next build`: 33 routes, no type errors
- Crawl from `/`: 28 internal pages, 0 broken links
- 20 key pages at 1440px and 390px: no horizontal overflow, no console errors
- Interaction tests: keyboard skip link, menus open and close with Escape, tabs, FAQ, cost estimator arithmetic, gallery lightbox with arrow keys, click-to-load video, mobile menu, sticky mobile donate bar, native form delivery to a webhook
- `prefers-reduced-motion` disables the hero sequence and all transitions
