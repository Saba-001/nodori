// router.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "./dashboard-layout/DashboardLayout.jsx";

import { Products } from "../pages/products/Products.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_BASE_URL || "/" }
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
