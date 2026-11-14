import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Me - Felipe Icaza',
    description: 'Learn a little bit more about me - I&apos;m an AI Engineer working on agent systems and multi-agent orchestration.'
  }

const AboutLayout = ({children}: {children: React.ReactNode}) => <>{children}</>

export default AboutLayout