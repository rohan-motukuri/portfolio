import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohan's Portfolio",
  description: "Portfolio website showcasing projects and technocal expertise of the innovative software developer named Rohan Motukuri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-hidden ${inter.className}`}>{children}</body>
    </html>
  );
}
