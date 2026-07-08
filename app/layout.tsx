import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayden Simms | Next.js + Supabase Developer",
  description:
    "Freelance Next.js and Supabase developer building fast, production-ready web apps, landing pages, and MVPs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
