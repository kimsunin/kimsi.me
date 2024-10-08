import React from "react";
import "./MainLayout.css";

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="main-layout">{children}</div>;
}

export default MainLayout;
