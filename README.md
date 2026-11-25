# Softilect

Marketing site for the Softilect software development company.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Hand-written CSS design system in `src/app/globals.css` (Tailwind is only used for its reset)
- Fonts: Syne (headings) and Figtree (text) via `next/font`
- No animation libraries: the hero globe, the network background and the "How we build" scenes are plain canvas, SVG and CSS
- Cloudflare Workers via `@opennextjs/cloudflare` + Wrangler

## Email (contact form)

`/api/contact` sends briefs through Brevo. Set these as Worker secrets (or in `.dev.vars` locally):
`BREVO_API_KEY` (or `SMTP_LOGIN` + `SMTP_KEY`), `SMTP_FROM`, and optionally `ADMIN_NOTIFICATION_EMAIL`
(defaults to hello@softilect.com). The route has a honeypot, a minimum fill time and a per-IP rate limit.

## Pages

- `/` - home with the service globe and the pinned delivery cycle
- `/services` and `/services/[slug]` (18 service pages)
- `/work` and `/work/[slug]` (case studies)
- `/about`
- `/contact`

## Develop

```bash
npm install
cp .dev.vars.example .dev.vars
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare deployment (Wrangler)

This project targets **Cloudflare Workers** with OpenNext (not the deprecated Pages `next-on-pages` adapter).

### Scripts

| Script | Purpose |
| --- | --- |
| `npm run cf-build` | Build Next.js + OpenNext worker output |
| `npm run preview` | Build and preview in the Workers runtime locally |
| `npm run deploy` | Build and deploy to Cloudflare |
| `npm run upload` | Build and upload a new Worker version |
| `npm run cf-typegen` | Generate Cloudflare binding types |

### First deploy from your machine

1. Log in to Cloudflare:

```bash
npx wrangler login
```

2. Deploy:

```bash
npm run deploy
```

### Git-connected deploy (Cloudflare dashboard)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → connect the `softilect` GitHub repo.
2. Build settings:
   - **Build command:** `npm run cf-build`
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** `/` (repo root)
3. Ensure Node.js `20+` is selected for the build image.

### Config files

- `wrangler.jsonc` - Worker name, compatibility flags, assets, images binding
- `open-next.config.ts` - OpenNext Cloudflare adapter config
- `.dev.vars` - local env (`NEXTJS_ENV=development`)
- `public/_headers` - long-cache headers for `/_next/static/*`

### Optional: R2 incremental cache

After creating an R2 bucket (for example `softilect-next-cache`), add it to `wrangler.jsonc` and wire `r2IncrementalCache` in `open-next.config.ts`. See [OpenNext Cloudflare caching](https://opennext.js.org/cloudflare/caching).
