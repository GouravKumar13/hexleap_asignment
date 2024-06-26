import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexleap",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="max-w-[100vw] mx-auto" lang="en">
      <body className={`dark:text-white dark:bg-[#292B32] bg-[#F7F7F8] text-black  ${inter.className}`} >{children}</body>
    </html>
  );
}
