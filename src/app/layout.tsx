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
  title: "Felipe Icaza - Web Developer",
  description:
    "Showcasing the skills and projects of Felipe Icaza, a passionate and experienced web developer specializing in React, Next.js, and FastAPI.",
  openGraph: {
    title: "Felipe Icaza - Web Developer Portfolio",
    description:
      "Explore my projects and skills as a professional web developer. Specializing in building modern, scalable web applications.",
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
    title: "Felipe Icaza - Web Developer Portfolio",
    description:
      "Explore my projects and skills as a professional web developer. Specializing in building modern, scalable web applications.",
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
      >
        <MovingBackground />
        <Holder>{children}</Holder>
      </body>
    </html>
  );
}
