import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "@/layout/MainLayout/MainLayout";
import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout";
import ThemeProvider from "@/layout/ThemeProvider/ThemeProvider";
import SoundProvider from "@/layout/SoundProvider/SoundProvider";


const pretendard = localFont({
    src: "../../public/font/PretendardVariable.woff2",
    display: "swap",
    variable: "--font-pretendard",
});

export const metadata: Metadata = {
    title: "kimsi.me",
    description: "develop space of kimsunin",
    icons: {
        icon: "/svg/kimsunin.svg",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${pretendard.variable}`}>
        <body className={pretendard.className}>
        <ThemeProvider>
            <SoundProvider>
                <MainLayout>
                    <DashboardLayout>
                        {children}
                    </DashboardLayout>
                </MainLayout>
            </SoundProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
