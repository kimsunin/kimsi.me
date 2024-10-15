import React from "react";
import { Kimsunin } from "@/component";
import "./DashboardLayout.css";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <div>
        <Kimsunin />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
