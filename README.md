# Archicraft Interiors — Website

Production-scaffold Next.js 14 (App Router) + Tailwind CSS + Framer Motion site for Archicraft Interiors, built from the approved Phase 1–5 research, IA, wireframes, design system, and content.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Build for production with `npm run build && npm start`.

## Responsive design

Every page is built mobile-first with Tailwind's default breakpoints and tested against three device tiers:
- **Mobile** (< 640px): single-column stacks, swipeable card carousels, sticky 3-action bottom bar (Call / WhatsApp / Book).
- **Tablet** (640–1024px, `sm`/`md`): 2-column grids, simplified nav, header CTA always visible.
- **Desktop** (1024px+, `lg`/`xl`): full mega-menu, 3-column grids, hover interactions.

## Content structure

All copy lives in `src/data/*.ts` (services, portfolio, materials, faqs, blog, testimonials, site config) rather than hardcoded in components — this mirrors a CMS document shape, so migrating to Sanity later means replacing these files with fetch calls, not rewriting pages.

`src/data/testimonials.ts` currently holds placeholder client data — replace with real testimonials, Google review rating/count, and stats before launch.

## Next steps to go live

1. **CMS**: Wire up Sanity (schemas should mirror the shapes in `src/data/*.ts`) so the studio's team can edit content without a developer.
2. **Images**: Replace the placeholder `bg-softgrey` blocks with real project photography via `next/image`, served through Cloudinary (`next.config.mjs` already allow-lists `res.cloudinary.com`).
3. **Forms**: Wire `src/app/api/consultation/route.ts` to a real CRM/email service (currently logs and returns success only).
4. **Analytics**: Add Google Analytics, GTM, Meta Pixel, and Search Console verification in `src/app/layout.tsx`.
5. **Testimonials/stats**: Replace `src/data/testimonials.ts` placeholders with real client data.
6. **Deploy**: Push to a GitHub repo and deploy on Vercel.
