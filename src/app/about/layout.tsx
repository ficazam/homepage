import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Me - Felipe Icaza',
    description: 'Learn a little bit more about me - I&apos;m a React, React Native, NextJS and Django Developer.'
  }

const AboutLayout = ({children}: {children: React.ReactNode}) => <>{children}</>

export default AboutLayout