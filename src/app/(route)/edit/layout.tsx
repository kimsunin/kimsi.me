import { Metadata } from "next";
import { Header } from "@/component/index";

export const metadata: Metadata = {
  title: "kimsi.me | edit",
  description: "김선인의 작업공간 ",
};

export default function CraftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header title="Edit" />
      {children}
    </main>
  );
}
