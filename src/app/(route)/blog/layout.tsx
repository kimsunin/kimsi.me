import { Metadata } from "next";
import { Header } from "@/component/index";

export const metadata: Metadata = {
  title: "kimsi.me | blog",
  description: "두번째 기술 블로그",
};

export default function CraftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header type="blog" title="Blog" />
      {children}
    </main>
  );
}
