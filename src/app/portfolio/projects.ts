export type ProjectType = "web" | "mobile" | "auto" | "ai";

export type Project = {
  title: string;
  type: ProjectType;
  description: string;
  impact?: string[];
  role?: string;
  dates?: string;
  note?: string;
  writingLink?: string;
  stack?: string[];
  fa_link?: string;
  ba_link?: string;
  repo_link?: string;
  deployment_link?: string;
};

// Featured projects — rendered with the interactive detail panel.
export const featuredProjects: Project[] = [
  {
    title: "Rootlenses (Rootstack)",
    type: "ai",
    description:
      "An AI-first platform that generates and manages customer assistants.",
    impact: [
      "Tech lead (Nov 2026–present): own the production voice and chat agents (3CX telephony), which run 1,000+ fully automated calls a day, mostly outbound marketing campaigns plus automated phone answering. Own architecture, roadmap, and code review.",
      "Architect and builder of the Gateway / agent generator (Sept–Nov 2026; pre-launch, not yet in production): extends Rootlenses from voice and chat agents to generated local and cloud agents. The gateway routes each request to local models (Qwen family, Gemma 4 on Ollama) or cloud providers (Anthropic, OpenAI) by user specification or policy rules, so sensitive data stays on local models.",
    ],
    role: "Tech lead on the production voice/chat agents; architect and builder of the pre-launch Gateway / agent generator.",
    dates: "Nov 2026–present / Sept–Nov 2026",
    stack: [
      "TypeScript",
      "3CX",
      "Anthropic",
      "OpenAI",
      "Ollama",
      "Qwen",
      "Gemma",
    ],
  },
  {
    title: "Cora: Continuous Orchestrated Repository Agent",
    type: "ai",
    description:
      "An always-on agent that watches a repository and reacts to new issues, PR comments and CI failures. A router agent (Claude Haiku 4.5) dispatches Analyzers (Opus 5.5) to plan and Runners (Sonnet 5.5) to implement fixes; a Code-Reviewer (Opus 5.5) checks each result before Cora opens a PR for human review.",
    impact: [
      "Works end to end for a single user; contributed a version to my employer, where I'm adapting it for company-wide deployment.",
    ],
    role: "Sole designer and architect.",
    dates: "2026",
    stack: ["Anthropic"],
  },
  {
    title: "AELISSE: Autonomous Engineering Lifecycle Intelligence: Systems Executor",
    type: "ai",
    description:
      "My personal multi-agent engineering platform, built from scratch (TypeScript, Bun, Anthropic, MCP): an orchestrator-worker system with role-scoped subagents over a custom MCP filesystem server with per-agent tool access, cost-tiered model routing, a self-documenting context pipeline, three CI-wired eval suites, and cross-session recall. In daily use.",
    impact: [
      "Designed a three-subagent pipeline (Explorer → Analyzer → Writer) that generates complete project intelligence (context, domain rules, and skill files) from a single command.",
      "Built a custom MCP server with 5 tools enabling agents to read, search, and write across any codebase autonomously.",
      "Shipped a three-suite eval system that validates output quality on every run with zero manual review.",
      "Deployed against real production codebases: autonomously diagnosed and resolved bugs, opened PRs, and closed tickets without human implementation.",
    ],
    role: "Sole designer and builder.",
    dates: "2025–present",
    stack: ["TypeScript", "Bun", "Anthropic", "MCP"],
  },
  {
    title: "Research: How agents learn and remember",
    type: "ai",
    description:
      "Pre-registered, multi-seed experiments on agent memory with local models. Memory fails when notes are written, not when the model is swapped; labeling superseded values cut stale answers about 8x (17% → 2%).",
    role: "Independent researcher.",
    dates: "2026",
    writingLink: "/build-logs",
    stack: ["Local Models"],
  },
];

// Earlier work — rendered as a compact, one-line grid below the featured projects.
export const earlierWorkProjects: Project[] = [
  {
    title: "Glassforge: UI Generator",
    type: "web",
    description:
      "A prompt-based UI card generator (Next.js, Tailwind, Framer Motion) that turns a natural-language description into a glassmorphism UI card. A cost-free, Vercel-ready demo.",
    role: "Sole builder.",
    stack: ["NextJS", "TypeScript", "Cloudflare"],
    fa_link: "https://github.com/ficazam/glassforge",
    deployment_link: "https://glassforge.felipeicaza.dev",
  },
  {
    title: "GlassBoard: Realtime Kanban Board",
    type: "web",
    description:
      "A realtime collaborative kanban board (Next.js 16, NestJS WebSocket Gateway) with typed shared contracts. Open two tabs and watch updates sync instantly.",
    role: "Sole builder.",
    stack: ["NextJS", "NestJS", "TypeScript", "cloudflare"],
    fa_link: "https://github.com/ficazam/glassboard",
    deployment_link: "https://glassboard.felipeicaza.dev",
  },
  {
    title: "Atlas Link",
    type: "web",
    description:
      "A private professional networking platform for the Chevening alumni community in Panama. Verified onboarding, alumni profiles, and fast discovery via search and filters.",
    role: "Full-stack build: auth, data, and discovery flows.",
    dates: "Sep–Dec 2025 (build); maintained since",
    stack: [
      "NextJS",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Cloudflare",
    ],
    deployment_link: "https://atlaslink.io",
  },
  {
    title: "Teacher's Aid",
    type: "mobile",
    description:
      "Mobile app for school staff to handle supply requests and stock approvals.",
    role: "Built the entire frontend (React Native), backend schema, and UX flow.",
    stack: ["ReactJS", "NestJS", "React Native"],
  },
  {
    title: "Y-GO Logistics",
    type: "web",
    description:
      "A 0→1 logistics platform built as sole engineer (Next.js, FastAPI, PostgreSQL), from scoping with the client to production; cut manual operations by about 60%.",
    role: "Full-stack development, API design, UI/UX structure, deployment pipeline.",
    dates: "2023–2025",
    stack: ["NextJS", "FastAPI", "PostgreSQL"],
  },
];
