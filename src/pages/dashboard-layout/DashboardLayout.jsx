// layout/DashboardLayout.jsx
import { Navigation } from "./components/Navigation";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardFooter } from "./components/DashboardFooter";
import { Outlet } from "react-router-dom";
import { products } from "/data";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader products={products} />
      <Navigation />
      <div className="flex-grow">
        <Outlet />
      </div>
      <DashboardFooter />
    </div>
  );
};
