import { useState } from "react";

import {
  Img,
  Navigation,
  DashboardFooter,
  Pagination,
  Product,
  itemsPerPage,
} from "/src/components";

import { products } from "/data";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentProducts = products.slice(
    itemsPerPage * (currentPage - 1),
    itemsPerPage * currentPage + 1
  );

  return (
    <>
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="relative mb-16">
          <Img
            name="products"
            alt="Products"
            className="w-full h-80 object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold">
            ჩვენი პროდუქტები
          </h1>
        </div>
        <div className="p-4">
          {currentPage !== 1 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
          <div className="px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mb-16">
            {currentProducts.map((item) => (
              <Product
                id={item.id}
                iconName={item.iconNames[0]}
                name={item.name}
                miniDescription={item.miniDescription}
                currentPrice={item.currentPrice}
                oldPrice={item.oldPrice}
                description={item.description}
                key={item.id}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};
