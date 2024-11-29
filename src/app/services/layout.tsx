import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Stack - Felipe Icaza',
  description: 'Browse the technologies I&apos; learned and worked with; including React, React Native, NestJS, NextJS, and Django.'
}

const ServicesLayout = ({children}: {children: React.ReactNode}) => <>{children}</>

export default ServicesLayout