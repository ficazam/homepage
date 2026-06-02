export type Post = {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Context Is the Whole Game",
    description:
      "Why context beats model choice every time — and how letting your AI write its own documentation is the real unlock for reliable, production-grade AI engineering.",
    date: "2026-06-02",
    tags: [
      "AI engineering",
      "LLMs",
      "Claude",
      "context",
      "documentation",
      "multi-agent systems",
      "software development",
    ],
  },
];
