import type { Metadata } from "next";
import { posts } from "../posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));
  return {
    title: post
      ? `${post.title} - Felipe Icaza`
      : "Build Log - Felipe Icaza",
    description:
      "A build log entry from Felipe Icaza on AI engineering and software development.",
  };
}

export default function BuildLogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
