import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";


const font = Nunito({
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Duolingo Clone",
    description: "Cloning project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider afterSignOutUrl={"/"}>
            <html lang="en">
                <body className={font.className}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
