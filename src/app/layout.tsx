import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Govand Esmail Othman | Full-Stack Software Developer",
  description:
    "Portfolio of Govand Esmail Othman — Full-Stack Software Developer specialising in React, Next.js, Flutter, and .NET.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0e0e0e] text-white">
        {children}
      </body>
    </html>
  );
}
