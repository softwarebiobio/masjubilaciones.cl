# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for a Chilean pension advisory firm (MasJubilaciones), built with **Eleventy (11ty) v3** and **Tailwind CSS v4**. Hosted on **Netlify**. All content is in Spanish (es-CL).

Target audience: senior citizens (60+) in Chile — accessibility and readability are top priorities.

## Development Commands

```bash
# Start 11ty dev server with live reload
npm run dev

# Build Tailwind CSS (watch mode) — run in a separate terminal alongside dev
npm run tailwindcss-build
```

Both commands must run simultaneously during development. There are no test or lint scripts configured.

## Architecture

- **Static site generator**: 11ty v3 with Nunjucks templating
- **Input directory**: `src/` → **Output directory**: `public/` (gitignored)
- **Configuration**: `.eleventy.js` (passthrough copies, date/URL filters)

### Key directories

- `src/_includes/` — Layouts and reusable components (`base.html` is the master layout)
- `src/_data/metadata.json` — Centralized site config (SEO, schema, contact info, services, FAQs)
- `src/posts/` — Blog articles in Markdown with YAML front matter, auto-collected by 11ty
- `src/css/source.css` — Tailwind source; `src/css/styles.css` — generated output (committed)
- `src/images/` — Static image assets

### Page structure

`index.html` is a single-page site with hash-based navigation sections: `#inicio`, `#blog`, `#servicios`, `#etica`, `#contacto`. Additional pages: `success.html` (form confirmation), `404.html`, `sitemap.html`.

### Blog posts

Posts live in `src/posts/<slug>/index.md` with front matter fields: `title`, `image`, `lead`, `layout` (article), `tags`. The collection is defined by `src/posts/posts.json`.

## Styling & Design Constraints

- **Tailwind CSS v4** with custom config in `tailwind.config.js`
- **Dark mode**: selector-based (`.dark` class), persisted via localStorage
- **Accessibility (WCAG AA)**: All custom colors are chosen for 4.5:1+ contrast ratios. Minimum touch targets are 44px. Use semantic HTML, proper heading hierarchy, ARIA labels, and focus-visible indicators.
- **Typography**: Merriweather Sans (headings), IBM Plex Serif (body) — loaded via Google Fonts CDN
- **Custom color tokens** (WCAG 2.x ratios, verified 2026-10-20). Do not change these without verifying WCAG contrast compliance:
  - `primary-blue` #0056b3: white on it 7.04:1
  - `primary-green` #157f45: white on it 5.06:1, on `warm-white` 4.83:1. Do not use as text on dark backgrounds (2.89:1 on slate-800); add `dark:text-light-green`.
  - `light-green` #2ECC71: dark-mode accent text, 6.96:1 on slate-800, 8.49:1 on slate-900
  - `dark-blue` #003366: white on it 12.6:1
  - `dark-green` #2d3e4a: footer background; white 11.06:1, `gray-300` text 7.50:1 (do not use `gray-400`, 4.35:1)
  - `--color-whatsapp` #0f7568 (white 5.58:1), `--color-whatsapp-hover` #075e54 (white 7.67:1). Use only these two vars for every WhatsApp button, also in `mantenimiento.html`.
  - "(requerido)" markers: `text-red-700 dark:text-red-300`

## External Services

- **Netlify Forms**: Contact form with honeypot field (`iam-important`) for spam prevention
- **GoatCounter**: Privacy-focused analytics
- **Font Awesome 6.7**: Icons via CDN
- **Netlify Redirects**: `src/_redirects` for URL redirects (301s for old blog URLs)
