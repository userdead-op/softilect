# Softilect site guide

The rules every page, every piece of copy and every change on softilect.com must follow.
The goals, in order: **(1) win leads and sales, (2) rank on Google, (3) feel premium and unique, (4) stay fast and secure.**

## 1. Who we write for
- UK-led studio. Main market UK, also US, Dubai and Pakistan. Spell in British English (organisation, optimise).
- Buyers are founders, product owners and operations heads. They are busy, wary of agencies, and compare 3 to 5 firms.
- No pricing is published. Never invent prices, client names, statistics or awards. Estimates (timelines) must be marked "typically" and confirmed by Zeeshan.

## 2. Voice and copy
- Plain, specific, human. Short sentences. Say what we do, for whom, and what they get.
- Banned: "cutting-edge", "world-class", "synergy", "leverage", "seamless", "robust solutions", "in today's fast-paced world", "film premiere".
- Every section answers a buyer question: What is it? Is it for me? How does it work? Can I trust you? What happens next?
- Prefer concrete nouns and outcomes over adjectives. "Pages load in under 2 seconds on mid-range phones" beats "blazing fast".
- Every page ends with a clear next step (Book a discovery call) and at least one mid-page CTA.

## 3. Page structure for a service page
Follow this order. Use `src/data/serviceDeep.ts` for rich services; the generic template is a fallback only.
1. Hero: keyword H1 (matches the title tag), one-sentence lead, two buttons, animated visual in theme (network, diamonds, plates).
2. Slim ribbon of 6 to 8 proof phrases.
3. Overview: short heading left, 2 to 3 paragraphs right; then "Who it is for" as 3 numbered columns.
4. What we build: 6 rows, each with an icon, title, 2-sentence description, 4 bullet examples.
5. Why Softilect: 4 statements, each a real differentiator.
6. Flow: 6 to 7 steps, scroll-fill dotted line with diamonds, each step ends with "You get: ...".
7. Tools: grouped pills.
8. Related work: 2 case studies.
9. FAQ: 8 questions, exclusive accordion, 40 to 60 words per answer, FAQPage schema.
10. Related services, then closing CTA.
Rules: no breadcrumb trail shown in the hero (keep BreadcrumbList JSON-LD). Do not put every block in a bordered box. Every block needs a hover or scroll animation.

## 4. SEO rules (every page)
- **Title tag**: 50 to 60 characters. Pattern: `Primary Keyword + Place | Benefit or Proof`. Home keeps the brand first. Use `title.absolute` to avoid a doubled brand.
- **Meta description**: 140 to 160 characters. Pattern: who we are + what we do + outcome + call to action. Must read like an ad, not a keyword list.
- **H1**: exactly one, contains the primary keyword, matches the title in meaning. H2s carry secondary keywords. Keep heading order logical.
- **Keywords**: one primary and 4 to 8 supporting phrases per page, set in `metadata.keywords` and used naturally in copy (never stuffed).
- **FAQ**: real buyer questions, answers 40 to 60 words, direct first sentence (this is what Google and AI answers quote).
- **Canonical**: every page sets `alternates.canonical` to its own path. One host only: softilect.com (www redirects 308).
- **Open Graph and Twitter**: title, description, url set; image comes from `opengraph-image.tsx`.
- **Structured data (JSON-LD)**: Organization (site-wide), WebSite, Service on service pages, BreadcrumbList on inner pages, FAQPage where FAQs exist, CreativeWork on case studies. Validate before release.
- **Internal links**: each service links to related services and case studies; every page reachable within 3 clicks; descriptive anchor text.
- **Images**: descriptive `alt`, explicit width/height or aspect ratio, modern formats, lazy-load below the fold.
- **URLs**: lowercase, hyphenated, short. Do not rename a live URL without a 301.
- **Sitemap and robots**: `src/app/sitemap.ts` lists every public route; add new routes there and bump `SITE_UPDATED` in `src/lib/site.ts`. `robots.ts` disallows only `/api/`.

## 5. Performance and technical quality
- Targets: LCP under 2.5s, CLS under 0.1, INP under 200ms on mid-range mobile. Run Lighthouse before merging big changes.
- No heavy libraries; animation with CSS first, small canvas/JS only when needed; pause off-screen animation; honour `prefers-reduced-motion`.
- No horizontal scroll at 360px. Test at 360, 768 and 1280.
- Fonts via `next/font` only (Syne, Figtree).
- Read `node_modules/next/dist/docs/` before using a Next.js 16 API (see AGENTS.md).

## 6. Security
- Headers (next.config.ts): nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy, HSTS, COOP. Keep `poweredByHeader: false`.
- Contact API: honeypot, minimum fill time, per-IP rate limit, input trimming and CR/LF stripping, escape all HTML in emails. Never log personal data.
- Secrets (Brevo keys, SMTP) only in Cloudflare secrets, never in the repo.
- `/.well-known/security.txt` must stay valid; renew its `Expires` yearly.
- Run `npm audit` before releases; keep dependencies current.

## 7. Conversion rules (this is a sales site)
- One primary action on the site: **Book a discovery call** (`/contact`). Secondary: See our work.
- Above the fold on every page: what we do, who for, and the primary button.
- Build trust: real case studies (Zeeshan's clients, with permission), named process, "you own the code", NDA on request, UK-led.
- Reduce friction: contact form asks name, email, phone, short brief only.
- Each service page should answer price, time, tools and ownership questions in the FAQ without publishing prices.
- Later: add testimonials, client logos, Google profile, LinkedIn, UK company details in the footer, and real project screenshots.

## 8. Design rules
- White premium base, mint accents, Syne and Figtree. Dark only for "How we build" and the closing CTA.
- Diamonds are the brand mark (bullets, markers, buttons). Primary button is the glow-ring button; secondary is the travelling-diamond button. Do not add new button styles.
- Avoid generic AI-looking layouts: no uniform grids of identical bordered cards, no stock icons in circles repeated everywhere, no gradient blobs. Prefer open rows, rules, big type, motion.
- Every section has purposeful motion: reveal on scroll, hover state, or scroll-linked fill. Never decorative noise.
- Left and right columns must balance. If one side is text-heavy, fill the other with a sticky heading plus a supporting element (counter, contact, visual).

## 9. Release checklist
1. `npm run lint` and `npm run build` pass.
2. Titles 50 to 60 chars, descriptions 140 to 160, one H1 per page, canonical present.
3. New route added to the sitemap; JSON-LD valid.
4. Mobile check at 360px, keyboard focus visible, reduced-motion respected.
5. Copy read aloud: no banned phrases, no invented claims, CTA present.
6. Merge to `main`; Cloudflare Workers Builds deploys automatically; verify live status codes and `Location` headers.
