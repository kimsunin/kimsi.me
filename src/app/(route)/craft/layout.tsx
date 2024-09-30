import { Metadata } from "next";

export const metadata: Metadata = {
    title: "kimsi.me | craft",
    description: "직접 만들고 보여주는 공간",
};

export default function CraftLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return <main>{children}</main>;
}
