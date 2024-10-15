import { Metadata } from "next";
import { Header } from "@/component/index";

export const metadata: Metadata = {
  title: "kimsi.me | craft",
  description: "손으로 직접 만들다",
};

export default function CraftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header title="Craft" />
      {children}
    </main>
  );
}
