# PROJECT_SANITY_CHECK

Date: 2026-03-04  
Project: `/Users/kokonvt/Projects/jabugo-web`

## Passed checks

1. Required folders exist:
- `/docs` ✅
- `/src` ✅
- `/src/content/es` ✅
- `/public` ✅
- `/public/images` ✅

2. Documentation files exist:
- `/docs/DEEP_RESEARCH_JABUGO.md` ✅
- `/docs/CONTENT_PLAN.md` ✅
- `/docs/HANDOFF_TO_MARSHALL.md` ✅

3. Structured content files exist:
- `/src/content/es/home.json` ✅
- `/src/content/es/historia.json` ✅
- `/src/content/es/cultura-iberico.json` ✅
- `/src/content/es/contacto.json` ✅

4. Home entry point exists:
- `/src/app/page.tsx` ✅

5. Home page imports JSON content (not hardcoded):
- `homeContent` from `/src/content/es/home.json` ✅
- `historiaContent` from `/src/content/es/historia.json` ✅
- `culturaContent` from `/src/content/es/cultura-iberico.json` ✅
- `contactoContent` from `/src/content/es/contacto.json` ✅

6. Required placeholders remain in content JSON:
- `__WHATSAPP_PLACEHOLDER__` ✅
- `__TEL_PLACEHOLDER__` ✅
- `__MAPS_PLACEHOLDER__` ✅

7. Required UI components exist:
- `Hero` ✅
- `Section` ✅
- `CTAButton` ✅
- `MobileBottomNav` ✅
- `ImageBlock` ✅
- `TextBlock` ✅

8. Public image directory structure exists:
- `/public/images/hero` ✅
- `/public/images/bodega` ✅
- `/public/images/product` ✅

9. `package.json` exists and includes Cloudflare Pages-compatible build setup:
- `package.json` present ✅
- scripts include `build` (`next build`) ✅
- static export config enabled in `next.config.ts` (`output: 'export'`) ✅

## Missing elements

1. `/src/components` folder is missing ❌
- Current implementation stores components in `/components`.
- Requested structure explicitly includes `/src/components`.

## Recommended fixes before GitHub initialization

1. Align component path to required structure:
- Move `/components/*` to `/src/components/*`.
- Update imports from `@/components/...` to `@/src/components/...` (or adjust TS path aliases to keep `@/components`).

2. Keep only production-relevant tracked files:
- Ensure `.next/`, `out/`, and `node_modules/` remain git-ignored (already covered by `.gitignore` for `.next`/`out`/`node_modules`).

3. Optional consistency check before first push:
- Run `npm run build` once after moving components to confirm no import regressions.

