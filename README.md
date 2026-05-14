# homepage

Personal landing page for **jamiepeterson.me**, built with React, TypeScript, Vite, Tailwind CSS, and DaisyUI.

## Scripts

- `npm run dev` — start local development server
- `npm run lint` — run ESLint
- `npm run build` — typecheck and create production build
- `npm run preview` — preview production build locally

## Cloudflare Pages deployment

- Build command: `npm run build`
- Build output directory: `dist`
- SPA routing fallback is configured via `/home/runner/work/homepage/homepage/public/_redirects`
- Security/caching headers are configured via `/home/runner/work/homepage/homepage/public/_headers`

## Search engine and social metadata

This repo includes:

- Canonical URL, Open Graph, Twitter tags, and structured data in `/home/runner/work/homepage/homepage/index.html`
- Crawl/index files in:
  - `/home/runner/work/homepage/homepage/public/robots.txt`
  - `/home/runner/work/homepage/homepage/public/sitemap.xml`
- Web app manifest in `/home/runner/work/homepage/homepage/public/site.webmanifest`

## Optional Cloudflare Web Analytics

Cloudflare Web Analytics loads only when the env var below is set:

- `VITE_CF_WEB_ANALYTICS_TOKEN`

Example:

```bash
VITE_CF_WEB_ANALYTICS_TOKEN=your-token-value
```
