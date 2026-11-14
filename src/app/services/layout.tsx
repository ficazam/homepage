import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Stack - Felipe Icaza',
  description: 'Browse the technologies I&apos; learned and worked with as a full-stack developer, including React, React Native, NestJS, NextJS, and Django, alongside AI agent tooling like Anthropic, MCP, and local model runtimes.'
}

const ServicesLayout = ({children}: {children: React.ReactNode}) => <>{children}</>

export default ServicesLayout