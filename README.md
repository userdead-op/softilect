# Softilect

Cinematic marketing site for the Softilect software development agency.

## Stack

- Next.js (App Router)
- Tailwind CSS
- GSAP + ScrollTrigger (story-mode scroll)
- Framer Motion (magnetic CTAs / micro-interactions)
- Lenis (smooth scrolling)
- Cloudflare Workers via `@opennextjs/cloudflare` + Wrangler

## Pages

- `/` - cinematic story-scroll home
- `/services`
- `/work`
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
