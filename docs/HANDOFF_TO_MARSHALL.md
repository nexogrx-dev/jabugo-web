# HANDOFF TO MARSHALL

## 1) Project architecture

This project is initialized as a **Next.js (App Router) + TypeScript + Tailwind** site and configured for **static export** compatible with Cloudflare Pages.

Core structure:

- `/src/app` : Routes (Spanish default + English secondary routes)
- `/components` : Reusable UI components
- `/content/es` and `/content/en` : Language-specific content sources
- `/styles` : Global Tailwind stylesheet
- `/src/lib` : SEO utilities and JSON-LD helper
- `/public/images/{hero,bodega,product}` : Placeholder asset buckets

Static export readiness:

- `next.config.ts` uses `output: 'export'`
- `images.unoptimized: true` to work with static output
- `trailingSlash: true` for predictable folder-style routes in static hosting

## 2) Content structure

Content is decoupled from layout and route logic.

- Spanish source: `/content/es/site.ts`
- English source: `/content/en/site.ts`

Each language file includes:

- Site-level metadata defaults
- Navigation labels and links
- Per-page copy blocks (`home`, `carta`, `historia`, `cultura`, `contacto`, `legal`)
- Contact placeholders (`phonePlaceholder`, `hoursPlaceholder`)

Important constraints respected:

- No menu items were invented.
- No phone number was invented.
- No opening hours were invented.

## 3) Assets required

Expected files to replace placeholders:

- Hero:
  - `/public/images/hero/hero-placeholder.jpg`
  - `/public/images/hero/og-placeholder.jpg`
- Bodega/history:
  - `/public/images/bodega/history-placeholder.jpg`
- Product (reserved for carta/product visual updates):
  - `/public/images/product/*`

Recommended production assets:

- Hero image: 2400x1600 (JPG/WebP)
- OG image: 1200x630
- Additional content images: 1600px+ wide source files

## 4) SEO base implemented

Global + per-page SEO implemented with placeholders:

- Next metadata in layout + page-level metadata helpers
- OpenGraph defaults and image placeholders
- JSON-LD `Restaurant` schema in root layout via `src/lib/seo.ts`

Placeholder fields to replace before launch:

- `baseUrl`
- Postal address fields
- `telephone`
- `openingHours`
- `priceRange`

## 5) Next steps

1. Install dependencies and run local checks:
   - `npm install`
   - `npm run dev`
   - `npm run build`
2. Replace placeholder images in `/public/images/*`.
3. Replace legal text placeholders in `Legal` pages.
4. Confirm canonical production domain and update `baseUrl` in both language content files.
5. Add analytics/cookie consent only after legal copy is finalized.
6. Deploy static output to Cloudflare Pages.
