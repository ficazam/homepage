import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Felipe Icaza",
  description:
    "Browse some of the projects I&apos;ve worked on, showcasing my skills in React, React Native, NextJS and Django.",
};

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export default PortfolioLayout;
