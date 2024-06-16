import { Navigation } from "./components/Navigation";
import { DashboardHeader } from "./components/DashboardHeader";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <Navigation />
      {/* The rest of your dashboard content goes here */}
    </div>
  );
};
