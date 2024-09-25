import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import ThemeProvider from "@/layouts/ThemeProvider/ThemeProvider";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "kimsi.me",
  description: "develop space of kimsunin",
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
      <MainLayout>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </MainLayout>
    </ThemeProvider>
    </body>
    </html>
  );
}
