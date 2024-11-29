import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Felipe Icaza",
  description:
    "Learn how to contact me for job opportunities with visa sponsorship, or let&apos;s meet to get your next wonderful application ready.",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export default ContactLayout;
