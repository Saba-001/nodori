import { Navigation } from "./components/Navigation";
import { DashboardHeader } from "./components/DashboardHeader";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <Navigation />
      <Outlet />
      {/* The rest of your dashboard content goes here */}
    </div>
  );
};
