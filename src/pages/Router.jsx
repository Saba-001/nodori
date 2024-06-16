import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "./dashboard-layout/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
