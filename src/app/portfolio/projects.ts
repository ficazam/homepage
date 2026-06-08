export const projects: Project[] = [
  {
    title: "AI Infrastructure - AELISSE",
    type: "ai",
    description:
      "Autonomous Engineering Lifecycle Intelligence: Systems Executor — an AI co-engineer that onboards itself into any codebase and operates as a permanent collaborator. Designed and built from scratch including the orchestration pipeline, MCP filesystem server, eval suite, and provider abstraction layer.",
    impact: [
      "Designed a three-subagent pipeline (Explorer → Analyzer → Writer) that generates complete project intelligence — context, domain rules, and skill files — from a single command.",
      "Built a custom MCP server with 5 tools enabling agents to read, search, and write across any codebase autonomously.",
      "Shipped a three-suite eval system that validates output quality on every run with zero manual review.",
      "Deployed against real production codebases — autonomously diagnosed and resolved bugs, opened PRs, and closed tickets without human implementation.",
    ],
    stack: ["TypeScript", "Bun", "Anthropic", "MCP"],
  },
  // {
  //   title: "MARCUS — AI Bid Analyzer",
  //   type: "ai",
  //   description:
  //     "Managed Architectural Review, Clarification & Understanding System - an AI internal tool for architectural firms to analyze bid documents. Upload a PDF, get a fully structured breakdown — scope items, exclusions, red flags, clarifications, assumptions, alternates, and allowances — in seconds.",
  //   impact: [
  //     "Built a PDF → Claude → structured JSON pipeline using base64 document blocks and Zod validation.",
  //     "Designed a monorepo with shared types package ensuring frontend and backend stay in sync.",
  //     "Delivered a tabbed dashboard that surfaces every line item from a bid document with status categorization.",
  //     "Zero data leaves the firm — PDFs processed in memory, never stored on disk.",
  //   ],
  //   stack: [
  //     "TypeScript",
  //     "Bun",
  //     "NextJS",
  //     "Hono",
  //     "SQLite",
  //     "Drizzle",
  //     "Anthropic",
  //   ],
  //   deployment_link: "...",
  //   fa_link: "https://github.com/ficazam/marcus",
  // },
  {
    title: "Atlas Link",
    type: "web",
    description:
      "Private professional networking platform for the Chevening alumni community in Panama. Verified onboarding, rich alumni profiles, and fast discovery via search and filters.",
    impact: [
      "Built a verified onboarding + approval flow to keep the network private and trusted.",
      "Designed searchable alumni profiles (award year, UK university, sector, areas of impact) with fast discovery UX.",
      "Delivered a production-ready full-stack platform with clear system boundaries and a clean separation between auth, data, and discovery flows.",
      "Hardened security posture with SSL/TLS and Cloudflare protections.",
    ],
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
    title: "Glassforge — UI Generator",
    type: "web",
    description:
      "A prompt-based UI card generator built with Next.js, Tailwind, and Framer Motion. Users type a natural-language description and get a luxury, black-card-style glassmorphism UI card. Designed as a cost-free, Vercel-ready demo that feels AI-powered without requiring real OpenAI calls.",
    impact: [
      "Designing a luxury, black-card-style UI that feels “expensive” at a glance.",
      "Building a prompt → template pipeline that feels AI-powered but runs entirely client-side.",
      "Structuring templates so adding new card types is trivial.",
      "Prod-ready setup: Monorepo, typed APIs, and full Render + Vercel deployment.",
      "Making the project dead-simple to clone and deploy on Vercel.",
    ],
    stack: ["NextJS", "TypeScript", "Cloudflare"],
    fa_link: "https://github.com/ficazam/glassforge",
    deployment_link: "https://glassforge.felipeicaza.dev",
  },
  {
    title: "GlassBoard — Realtime Kanban Board",
    type: "web",
    description:
      "A realtime collaborative kanban board built with Next.js 16, NestJS WebSocket Gateway, typed shared contracts, and motion-driven UI. Open two tabs and watch every drag, drop, and update sync instantly.",
    impact: [
      "Zero drift: FE + BE share one contracts package for schemas & events.",
      "Realtime sync: Server-authoritative updates broadcast instantly to all clients.",
      "Smooth UX: Drag-and-drop with optimistic motion for a modern, fluid feel.",
      "Prod-ready setup: Monorepo, typed APIs, and full Render + Vercel deployment.",
    ],
    stack: ["NextJS", "NestJS", "TypeScript", "cloudflare"],
    fa_link: "https://github.com/ficazam/glassboard",
    deployment_link: "https://glassboard.felipeicaza.dev",
  },
  {
    title: "Y-GO Logistics",
    type: "web",
    description:
      "Production logistics platform for a Panama-based company with package tracking, invoices, and role-based access.",
    impact: [
      "Automated file & invoice workflows → ~60% less manual work",
      "Faster internal operations for warehouse and office staff",
      "Reliable daily use by company employees",
    ],
    role: "Full-stack development, API design, UI/UX structure, deployment pipeline.",
    stack: ["FastAPI", "ReactJS", "Vite"],
  },
  {
    title: "Nurse Planner",
    type: "web",
    description:
      "Scheduling platform for a medical coordinator to assign home-visit nurses post-surgery.",
    impact: [
      "Reduced scheduling confusion; clear nurse availability at a glance",
      "Faster planning for 20–50 simultaneous patients",
      "Offline-ready PWA experience for nurses in the field",
    ],
    role: "Architected the system, built scheduling logic, and designed the UI workflow.",
    stack: ["ReactJS", "NextJS"],
    fa_link: "https://github.com/ficazam/nurseplanner-v1",
  },
  {
    title: "Teacher's Aid",
    type: "mobile",
    description:
      "Mobile app for school staff to handle supply requests and stock approvals.",
    impact: [
      "Simplified communication between teachers, coordinators, and storage managers",
      "Replaced paper and WhatsApp threads with a single source of truth",
      "Approval workflows reduce supply waste and missing items",
    ],
    role: "Built the entire frontend (React Native), backend schema, and UX flow.",
    stack: ["ReactJS", "NestJS", "React Native"],
  },
  {
    title: "Weather App",
    type: "web",
    description:
      "Real-time weather dashboard using the OpenWeather API and RechartsJS for visualizations.",
    stack: ["ReactJS", "Vite"],
    fa_link: "https://github.com/Keefher/weather-app",
    deployment_link: "https://weather.felipeicaza.dev/",
  },
  {
    title: "Portfolio Website",
    type: "web",
    description:
      "This portfolio site, designed and built from scratch to showcase my work. Modern stack, responsive layout, and interactive UI components.",
    stack: ["ReactJS", "NextJS", "Cloudflare"],
    fa_link: "https://github.com/ficazam/portfolio",
  },
];
