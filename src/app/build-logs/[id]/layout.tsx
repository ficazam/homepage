import type { Metadata } from "next";
import { posts } from "../posts";

const BASE_URL = "https://felipeicaza.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return { title: "Build Log - Felipe Icaza" };
  }

  const url = `${BASE_URL}/build-logs/${post.id}`;

  return {
    title: `${post.title} - Felipe Icaza`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: "Felipe Icaza", url: BASE_URL }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: "Felipe Icaza",
      publishedTime: post.date,
      authors: ["Felipe Icaza"],
      tags: post.tags,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export default async function BuildLogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          name: "Felipe Icaza",
          url: BASE_URL,
          sameAs: [
            "https://github.com/ficazam",
            "https://www.linkedin.com/in/felipeicaza/",
          ],
        },
        publisher: {
          "@type": "Person",
          name: "Felipe Icaza",
          url: BASE_URL,
        },
        url: `${BASE_URL}/build-logs/${post.id}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${BASE_URL}/build-logs/${post.id}`,
        },
        keywords: post.tags.join(", "),
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": `${BASE_URL}/build-logs`,
          name: "Build Logs",
          description:
            "Writing on AI engineering, multi-agent systems, and software development.",
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
