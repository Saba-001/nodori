import { Outlet } from "react-router-dom";

import { DashboardHeader } from "/src/components";

import { products } from "/data";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <DashboardHeader products={products} />
      <Outlet />
    </div>
  );
};
