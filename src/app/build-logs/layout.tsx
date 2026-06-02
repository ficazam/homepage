import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Logs - Felipe Icaza",
  description:
    "Writing on AI engineering, context systems, and software development.",
};

export default function BuildLogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
