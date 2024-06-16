import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from "./dashboard-layout/DashboardLayout";
import HomePage from "./home/HomePage";
import MeditationPage from "./meditation/MeditationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "meditation",
        element: <MeditationPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
