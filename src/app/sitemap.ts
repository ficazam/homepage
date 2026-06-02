import { MetadataRoute } from "next";
import { posts } from "./build-logs/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://felipeicaza.dev/build-logs/${post.id}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: "https://felipeicaza.dev",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://felipeicaza.dev/build-logs",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articleEntries,
    {
      url: "https://felipeicaza.dev/about",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://felipeicaza.dev/portfolio",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://felipeicaza.dev/services",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://felipeicaza.dev/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
