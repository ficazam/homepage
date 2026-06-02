# felipeicaza — Portfolio Homepage

## Project Overview

Personal portfolio website for Felipe Icaza, a Senior Full-Stack TypeScript Engineer targeting roles in Alberta and the GTA, Canada. Built with Next.js 16 App Router, React 19, Tailwind CSS 3, and Framer Motion 11. Five public routes, no backend, no database, no auth. Deployed to `https://felipeicaza.dev` via Cloudflare.

## Setup Commands

```bash
bun install          # install dependencies
bun run dev          # start dev server on :3000 with Turbopack
bun run build        # production build
bun run start        # serve production build on :3000
bun run lint         # ESLint via eslint-config-next + next/typescript
```

## Architecture

```
homepage/
├── public/
│   ├── imgs/
│   │   └── technologies.ts       # ⚠️ TS data module inside public — imported by source files
│   ├── pdf/
│   │   └── FelipeIcaza_FullStack_Developer.pdf
│   ├── PROFILE.jpg
│   └── og-image.png
├── src/
│   └── app/
│       ├── layout.tsx             # RootLayout (function declaration) — mounts MovingBackground + Holder
│       ├── page.tsx               # / — Home
│       ├── loading.tsx            # Framer Motion fade loading state
│       ├── sitemap.ts             # Dynamic XML sitemap (5 URLs)
│       ├── globals.css
│       ├── fonts/                 # Geist Sans + Mono (local woff)
│       ├── about/
│       │   ├── layout.tsx         # per-route metadata
│       │   └── page.tsx           # /about
│       ├── contact/
│       │   ├── layout.tsx
│       │   └── page.tsx           # /contact
│       ├── portfolio/
│       │   ├── layout.tsx
│       │   └── page.tsx           # /portfolio — 8 projects, AnimatePresence detail panel
│       ├── services/
│       │   ├── layout.tsx
│       │   └── page.tsx           # /services — 26 tech icons, staggered motion
│       └── components/
│           ├── Content/
│           │   ├── AnimatedMenu.tsx      # Full-screen overlay nav
│           │   ├── HamburgerButton.tsx   # 3-bar → X morph button
│           │   ├── HomeIcon.tsx
│           │   └── MovingBackground.tsx  # Mouse-parallax fixed layer (8 shapes)
│           └── Layout/
│               ├── Content-Holder.tsx    # ⚠️ hyphen filename — wraps children with AnimatePresence
│               ├── Header.tsx            # Composes HomeIcon + HamburgerButton + AnimatedMenu
│               └── Holder.tsx            # isOpen state owner — wraps Header + ContentHolder
├── next.config.ts                 # empty config (no custom options)
├── tailwind.config.ts
├── tsconfig.json                  # @/* → ./src/*
├── postcss.config.mjs
├── .eslintrc.json
├── bun.lock                       # primary lockfile
└── yarn.lock                      # legacy lockfile (do not use)
```

## Code Conventions

- **Page components**: `const PageName = () => {…}; export default PageName;` — arrow function + separate default export.
- **Shared components**: `export const ComponentName = ({…}) => {…}` — named arrow-function export.
- **`"use client"` directive**: Required at line 1 of any file that uses React hooks or browser APIs (`useState`, `useEffect`, `window`, `framer-motion` animate). Layout and metadata files remain Server Components.
- **Path alias**: `@/*` maps to `./src/*` (tsconfig). Use `@/app/components/…` not relative `../..`.
- **Font utilities**: `font-heading` = Prosto One, `font-body` = Montserrat — both defined in `tailwind.config.ts`.
- **Naming**: PascalCase for all component files. One exception exists: `Content-Holder.tsx` uses a hyphen — do not introduce more hyphenated filenames.
- **Data modules**: Static typed arrays declared at module scope (outside components), e.g. `projects: Project[]` in `portfolio/page.tsx`, `techs` in `public/imgs/technologies.ts`.
- **TypeScript**: Strict mode implied by `next/typescript` ESLint config. Types defined inline at file top.

## Domain: Pages

See **rules/pages.md** for conventions on creating and modifying App Router page files.

## Domain: Components

See **rules/components.md** for conventions on shared component authoring (Layout vs Content split, prop typing, animation patterns).

## Domain: Animation

See **rules/animation.md** for the Framer Motion patterns used site-wide (page transitions, underline hovers, staggered grids, mouse-parallax).

## Security

- No `.env` files or secrets present — the project has no server-side secrets.
- The CV PDF at `/public/pdf/FelipeIcaza_FullStack_Developer.pdf` is publicly served. Never log or cache personal documents.
- OpenGraph image at `/public/og-image.png` is served from Cloudflare CDN.
- All external links use `rel="noopener noreferrer" target="_blank"`.

## Testing

No test framework is configured. `jest` appears only as a logo in `public/imgs/technologies.ts` — it is **not** a project dependency. Do not attempt to run `jest` or `vitest`.

## Infrastructure

- No Docker, no CI/CD, no GitHub Actions.
- Dev server uses Turbopack (`next dev --turbopack`).
- Production target: Cloudflare (static CDN + custom domain `felipeicaza.dev`).
- Both `bun.lock` and `yarn.lock` exist. Use **bun** exclusively; do not run `yarn` or `npm`.

## Ports

| Service | Port | Command |
|---------|------|---------| 
| Next.js dev | 3000 | `bun run dev` |
| Next.js prod | 3000 | `bun run start` |

## Protected Branches

No protected branches configured in this repository.

## Anti-Loop Protocol

Max 3 retries for any failing operation. Same error twice → stop and analyze root cause. After 3 failures, ask the user or document the blocker and move on.
