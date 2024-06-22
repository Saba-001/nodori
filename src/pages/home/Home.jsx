import { useState } from "react";
import {
  Img,
  Navigation,
  DashboardFooter,
  Pagination,
  Product,
  itemsPerPage,
  Sort,
  CategoryFilter,
  PriceFilter,
} from "/src/components";
import { products } from "/data";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
  const { selectedProducts, setSelectedProducts } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [priceRange, setPriceRange] = useState([undefined, undefined]);

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
    } else if (selectedSort === "discountDesc") {
      return b.oldPrice - b.currentPrice - (a.oldPrice - a.currentPrice);
    } else {
      return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((product) => {
    if (!product.isVisible) return false;

    const matchesCategory =
      selectedCategory === "default" ||
      product.categories.includes(selectedCategory);

    let matchesPrice = true;

    if (priceRange[0] && product.currentPrice < priceRange[0]) {
      matchesPrice = false;
    }
    if (priceRange[1] && product.currentPrice > priceRange[1]) {
      matchesPrice = false;
    }

    return matchesCategory && matchesPrice;
  });

  const currentProducts = filteredProducts.slice(
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

  const handleCategoryChange = (category) => {
    setCurrentPage(1);
    setSelectedCategory(category);
  };

  const handlePriceChange = (range) => {
    setCurrentPage(1);
    setPriceRange(range);
  };

  const handleAddToCart = (id, amount) => {
    const data = {
      ...selectedProducts,
      [id]: amount ? { id, amount } : undefined,
    };

    if (amount) {
      data[id] = { id, amount };
    } else {
      delete data[id];
    }

    setSelectedProducts(data);
  };

  return (
    <>
      <Navigation />
      <div className="flex-grow pt-14 pb-16">
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
          <div className="px-8 py-16 grid grid-cols-3 gap-8">
            <div className="col-span-1 flex items-center space-x-4">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onChange={handleCategoryChange}
              />
              <PriceFilter
                priceRange={priceRange}
                onChange={handlePriceChange}
              />
            </div>
            <div className="col-span-1 flex justify-center">
              {currentPage !== 1 && (
                <Pagination
                  currentPage={currentPage}
                  onChange={handlePaginationChange}
                  totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
                />
              )}
            </div>
            <div className="col-span-1 flex justify-end">
              <Sort selectedSort={selectedSort} onChange={handleSortChange} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mb-16">
            {currentProducts.map((item) => (
              <Product
                id={item.id}
                iconNames={item.iconNames}
                name={item.name}
                miniDescription={item.miniDescription}
                currentPrice={item.currentPrice}
                oldPrice={item.oldPrice}
                description={item.description}
                key={item.id}
                isOnSale={item.isOnSale}
                amountInCart={selectedProducts?.[item.id]?.amount}
                addToCart={handleAddToCart}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            onChange={handlePaginationChange}
            totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
          />
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};
