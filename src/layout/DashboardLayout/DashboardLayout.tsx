import React from "react";
import "./DashboardLayout.css"
import Kimsunin from "@/component/Kimsunin/Kimsunin";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="dashboard-layout">
    <div>
      <Kimsunin/>
    </div>
    <div>
      {children}
    </div>
  </div>;
}

export default DashboardLayout;
