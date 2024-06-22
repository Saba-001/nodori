import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { DashboardHeader } from "/src/components";

const allProducts = JSON.parse(localStorage.getItem("products"));

export const DashboardLayout = () => {
  const [selectedProducts, setSelectedProducts] = useState(allProducts);

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify({
        ...selectedProducts,
      })
    );
  }, [selectedProducts]);

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <Outlet context={{ selectedProducts, setSelectedProducts }} />
    </div>
  );
};
