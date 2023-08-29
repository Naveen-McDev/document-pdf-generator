import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const getPageMargins = () => {
  return `@page { margin: ${"100px"}  !important; }`;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <style>{getPageMargins()}</style>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
