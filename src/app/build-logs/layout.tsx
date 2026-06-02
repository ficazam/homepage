import type { Metadata } from "next";

const BASE_URL = "https://felipeicaza.dev";

export const metadata: Metadata = {
  title: "Build Logs - Felipe Icaza",
  description:
    "Build logs from Felipe Icaza — writing on AI engineering, multi-agent systems, and the practical realities of building with LLMs.",
  keywords: [
    "AI engineering",
    "LLMs",
    "multi-agent systems",
    "software development",
    "build logs",
    "Felipe Icaza",
    "Claude",
    "context",
  ],
  alternates: { canonical: `${BASE_URL}/build-logs` },
  openGraph: {
    type: "website",
    title: "Build Logs - Felipe Icaza",
    description:
      "Build logs from Felipe Icaza — writing on AI engineering, multi-agent systems, and the practical realities of building with LLMs.",
    url: `${BASE_URL}/build-logs`,
    siteName: "Felipe Icaza",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Build Logs - Felipe Icaza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Logs - Felipe Icaza",
    description:
      "Build logs from Felipe Icaza — writing on AI engineering, multi-agent systems, and the practical realities of building with LLMs.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function BuildLogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
