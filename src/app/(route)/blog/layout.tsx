import { Metadata } from "next";
import { Header } from "@/component/index";

export const metadata: Metadata = {
  title: "kimsi.me | blog",
  description: "개발에 관한 기록",
};

export default function CraftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header href="/blog/list" title="Blog" />
      {children}
    </main>
  );
}
