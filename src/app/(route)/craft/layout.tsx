import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kimsi.me | craft",
  description: "손으로 직접 만듦",
};

export default function CraftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
