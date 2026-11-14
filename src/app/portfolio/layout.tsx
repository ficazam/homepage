import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Felipe Icaza",
  description:
    "Browse some of the projects I&apos;ve worked on, showcasing AI agent systems and production platforms I&apos;ve built.",
};

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export default PortfolioLayout;
