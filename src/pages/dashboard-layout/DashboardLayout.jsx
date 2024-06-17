// layout/DashboardLayout.jsx
import { Navigation } from "./components/Navigation";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardFooter } from "./components/DashboardFooter";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <Navigation />
      <div className="flex-grow">
        <Outlet />
      </div>
      <DashboardFooter />
    </div>
  );
};
