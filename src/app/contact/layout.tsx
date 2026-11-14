import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Felipe Icaza",
  description:
    "Get in touch about AI engineering roles or collaboration on agent systems and AI products.",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export default ContactLayout;
