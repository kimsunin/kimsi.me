import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import {
  ThemeProvider,
  SoundProvider,
  DialogProvider,
  MainLayout,
  DashboardLayout,
} from "@/layout";

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
        {/* 카카오맵 */}
        <Script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=83545697a7ab39d76d740660c9541aa8&libraries=services&autoload=false"
          strategy="beforeInteractive"
        />
        <ThemeProvider>
          <SoundProvider>
            <DialogProvider>
              <MainLayout>
                <DashboardLayout>{children}</DashboardLayout>
              </MainLayout>
            </DialogProvider>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
