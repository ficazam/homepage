import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://felipeicaza.dev",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://felipeicaza.dev/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://felipeicaza.dev/services",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://felipeicaza.dev/portfolio",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://felipeicaza.dev/contact",
      lastModified: new Date().toISOString(),
    },
  ];
}
