import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "./dashboard-layout/DashboardLayout.jsx";
import { Register } from "./register/Register.jsx";
import { Login } from "./login/Login.jsx";

import { Home } from "../pages/home/Home.jsx";
import { ContactUs } from "./contact-us/ContactUs.jsx";
import { ProductDetail } from "./product-details/ProductDetails.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  { basename: import.meta.env.VITE_BASE_URL || "/" }
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
