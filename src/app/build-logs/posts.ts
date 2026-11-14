import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type PostSummary = PostFrontmatter & { slug: string };

export type Post = PostFrontmatter & { slug: string; html: string };

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "build-logs");

const readFrontmatter = (slug: string): { frontmatter: PostFrontmatter; content: string } => {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    frontmatter: {
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags ?? [],
    },
    content,
  };
};

export const getAllPosts = (): PostSummary[] => {
  const slugs = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));

  const posts = slugs.map((slug) => {
    const { frontmatter } = readFrontmatter(slug);
    return { ...frontmatter, slug };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = (slug: string): Post | null => {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { frontmatter, content } = readFrontmatter(slug);
  const rawHtml = marked.parse(content, { async: false }) as string;
  const html = rawHtml
    .replace(
      /<table>/g,
      '<div class="my-6 overflow-x-auto rounded-lg border border-pink-400/20"><table class="w-full border-collapse text-sm">'
    )
    .replace(/<\/table>/g, "</table></div>");

  return { ...frontmatter, slug, html };
};
