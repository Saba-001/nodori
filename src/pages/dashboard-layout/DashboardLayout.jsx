import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { DashboardHeader } from "/src/components";

const account = JSON.parse(localStorage.getItem("account"));
const allProducts = JSON.parse(localStorage.getItem("products"));

export const DashboardLayout = () => {
  const [selectedProducts, setSelectedProducts] = useState(
    allProducts?.[account.id]
  );

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify({
        ...allProducts,
        [account.id]: selectedProducts,
      })
    );
  }, [selectedProducts]);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <DashboardHeader
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <Outlet context={{ selectedProducts, setSelectedProducts }} />
    </div>
  );
};
