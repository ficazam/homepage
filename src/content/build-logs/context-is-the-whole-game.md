---
title: "Context Is the Whole Game"
date: "2026-06-02"
description: "Why context beats model choice every time — and how letting your AI write its own documentation is the real unlock for reliable, production-grade AI engineering."
tags: ["AI engineering", "LLMs", "Claude", "context", "documentation", "multi-agent systems", "software development"]
---

The single most important thing that will make your AI agent reliable for real work is not model choice. It's the thing most engineers avoid: writing documentation.

I know how that sounds, but think about it:

It's why sports teams don't plug new players straight into the lineup with zero ramp-up. A star player who doesn't know the playbook is lost on the field — they'll make a great play sometimes, but most of the time they just create more work for the rest of the team. The talent isn't the problem. The talent just doesn't know the system yet.

An AI model works the same way. No model can know how you work. No model can know how your repo is set up. The context that makes the work _yours_ is unavailable to the agent unless it's written down, saved, and committed to its memory. Nothing in the pipeline can replace that — not a bigger model, not a better prompt. Good context is king, queen and rooks, and there's no substitute for it.

### What do I actually mean by "context"?

"Context" is a fuzzy concept, especially for newer users, so let me be precise about what I mean. There's two kinds of documentation that matter here.

**Standing documentation** — conventions, read-before-write rules, the AGENTS.md-style files. This is the part that constrains: it tells the model what it should and shouldn't do. It plays the role the system prompt plays — loaded every session, always present, the rules of the house.

**Situational documentation** — the per-repo, per-task context, including the task list itself. This is the part that informs: it defines how the model answers and how it does the work. It's the layer your actual requests live in, the thing that shapes a specific job rather than the standing rules.

Guardrails constrain. Context informs. Both are documentation, and the system needs both.

Here's a piece of the standing context from one of my repos:

**felipeicaza/homepage — context.md**

````
# felipeicaza — Portfolio Homepage

## Project Overview

Personal portfolio website for Felipe Icaza, an AI Engineer working on agent systems and AI products. Built with Next.js 16 App Router, React 19, Tailwind CSS 3, and Framer Motion 11. Five public routes, no backend, no database, no auth. Deployed to `https://felipeicaza.dev` via Cloudflare.

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
│   │   └── FelipeIcaza_AIEngineer.pdf
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
- The CV PDF at `/public/pdf/FelipeIcaza_AIEngineer.pdf` is publicly served. Never log or cache personal documents.
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
````

### So we just have to write a mountain of docs?

So we've concluded that to get a model to do relevant work consistently, we have to write documentation for it. But wasn't the whole point that we _shouldn't_ have to? Is it really mandatory to sit down and write dozens of files every time I open a project? Isn't that a massive waste of the time that AI was supposed to save?

> Yes. It is. Which is why we should not be writing any documentation.

_Wait — what? Didn't I just say documentation is mandatory?_

I did. But I never said **we** should write it — the model should.

### Let the model document itself

When I onboard into a new repo, I let my AI assistant onboard itself. It reads the codebase and generates its own documentation — the standing context it will rely on for every task that follows.

That artifact I showed you above? I didn't write it. My system did. It wrote that file, saved it, committed it to its own context memory, and now references and consumes it every time we work in that repo. I've only ever read it once — just now, while pasting it here. Normally I never do.

I trust the generated context completely, because gathering context is mechanical work — tedious, necessary, and exactly the kind of thing a machine should own. So I let it.

What I _don't_ delegate is judgment. I feed the system a ticket, ask it to plan the implementation, and I review _that_ — the workplan, the last piece of the documentation chain — closely. That's where the decisions live. That's where human developers are still necessary.

And it holds up. Out of hundreds of tickets we've worked through together, I've rolled back maybe three to five percent of the plans — and most of those weren't even the model's fault. They failed because _I_ forgot to pass it an important piece of context in my prompt.

The model reasoned correctly over the information it had. When it missed, the information was incomplete — and that was on me, not on it.

> The failures cluster at the context boundary, not the capability boundary.

### The part that's actually yours

So here's where it leaves us.

The model is the part you can buy. Anyone can. It's a seat, a subscription, a line item — the competition has the exact same one, your neighbor has the exact same one. The context is the part you _build_, and it's the part that decides whether that expensive model is worth anything at all.

The amazing thing is that you don't even have to build it yourself. You can hand the chore to the one party that needs it most — the model itself — and spend your own attention where it actually matters: on judgment and on planning, not on gathering and documenting.

Once you get that right, reliability stops being a question about the model. A star player who's learned the playbook isn't a different athlete — they're the same talent, finally able to play with their team, because they finally know the system. Your AI is no different. The capability was already there. All it needed was the context only you could give it — and that, it turns out, you can direct it to write for itself.
