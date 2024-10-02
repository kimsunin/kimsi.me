import { Metadata } from "next";
import BlogHeader from "@/component/components/BlogHeader";

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
        <BlogHeader/>
        {children}
      </main>
  );
}
