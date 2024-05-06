import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rohan's Portfolio",
    description:
        "Rohan Sai Venkat Motukuri's portfolio showcasing projects and technical expertise",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`overflow-hidden ${inter.className}`}>
                <Providers>
                    <div className="w-screen h-screen flex items-center justify-center">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
