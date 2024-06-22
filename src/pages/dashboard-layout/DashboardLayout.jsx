// layout/DashboardLayout.jsx
import { DashboardHeader } from "./components/DashboardHeader";

import { Outlet } from "react-router-dom";
import { products } from "/data";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <DashboardHeader products={products} />
      <Outlet />
    </div>
  );
};
