import { useState } from "react";
import {
  Img,
  Navigation,
  DashboardFooter,
  Pagination,
  Product,
  itemsPerPage,
  Sort,
} from "/src/components";
import { products } from "/data";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("default");

  const sortedProducts = products.sort((a, b) => {
    if (selectedSort === "priceAsc") {
      return a.currentPrice - b.currentPrice;
    } else if (selectedSort === "priceDesc") {
      return b.currentPrice - a.currentPrice;
    } else if (selectedSort === "nameAsc") {
      return a.name.localeCompare(b.name);
    } else if (selectedSort === "nameDesc") {
      return b.name.localeCompare(a.name);
    } else if (selectedSort === "discountAsc") {
      return a.oldPrice - a.currentPrice - (b.oldPrice - b.currentPrice);
    } else if (selectedSort === "discoundDesc") {
      return b.oldPrice - b.currentPrice - (a.oldPrice - a.currentPrice);
    } else {
      return 0;
    }
  });

  const currentProducts = sortedProducts.slice(
    itemsPerPage * (currentPage - 1),
    itemsPerPage * currentPage
  );

  const handleSortChange = (sort) => {
    setCurrentPage(1);
    setSelectedSort(sort);
  };

  const handlePaginationChange = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

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
        <div className="px-28">
          <div className="px-8 flex justify-between items-center mb-4">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center">
              {currentPage !== 1 && (
                <Pagination
                  currentPage={currentPage}
                  onChange={handlePaginationChange}
                />
              )}
            </div>
            <div className="flex-1 flex justify-end">
              <Sort selectedSort={selectedSort} onChange={handleSortChange} />
            </div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mb-16">
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
            onChange={handlePaginationChange}
          />
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};
