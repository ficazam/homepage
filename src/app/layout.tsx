import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Holder } from "./components/Layout/Holder";
import { MovingBackground } from "./components/Content/MovingBackground";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://felipeicaza.dev"),
  title: "Felipe Icaza - AI Engineer",
  description:
    "Felipe Icaza, AI Engineer focused on agent systems, multi-agent orchestration, and AI products. Based in Panama City, relocating to Canada, remote-ready.",
  icons: {
    icon: '/favico.ico'
  },
    openGraph: {
    title: "Felipe Icaza - AI Engineer, Agent Systems & AI Products",
    description:
      "Explore my projects and skills as an AI Engineer working on agent systems, multi-agent orchestration, and AI products.",
    url: "https://felipeicaza.dev",
    siteName: "Felipe Icaza Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Felipe Icaza Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Icaza - AI Engineer, Agent Systems & AI Products",
    description:
      "Explore my projects and skills as an AI Engineer working on agent systems, multi-agent orchestration, and AI products.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One:ital@0;1&family=Prosto+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prosto+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-auto sm:overflow-hidden`}
        suppressHydrationWarning
      >
        <MovingBackground />
        <Holder>{children}</Holder>
      </body>
    </html>
  );
}
