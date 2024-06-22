import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Img } from "./Img";
import { products } from "/data";

export const Cart = ({ selectedProducts, setSelectedProducts }) => {
  const { t } = useTranslation();

  const [showCartDetails, setShowCartDetails] = useState(false);

  const selectedProductKeys = Object.keys(selectedProducts || {});
  let totalPrice = 0;

  const toggleCartDetails = () => {
    setShowCartDetails(!showCartDetails);
  };

  const clearCart = () => {
    setSelectedProducts({});
    setShowCartDetails(false);
  };

  return (
    <>
      <button
        className="focus:outline-none relative "
        onClick={toggleCartDetails}
      >
        <Img name="Cart" alt="Cart" className="h-8 w-8" />
        {selectedProductKeys.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
            {selectedProductKeys.length}
          </span>
        )}
      </button>
      {showCartDetails && (
        <div className="fixed inset-0 left-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-4 rounded-md w-96">
            {selectedProductKeys.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Cart:</h2>
                  <button
                    className="text-sm text-gray-500 hover:text-red-500 focus:outline-none"
                    onClick={clearCart}
                  >
                    {t("common_clear")}
                  </button>
                </div>
                <div className="overflow-y-auto max-h-72">
                  {selectedProductKeys.map((productId) => {
                    const amount = selectedProducts[productId].amount;
                    const product = products.find(
                      (item) => item.id === productId
                    );
                    const totalPriceForProduct = amount * product.currentPrice;
                    totalPrice += totalPriceForProduct;
                    return (
                      <div
                        key={productId}
                        className="flex justify-between mb-2"
                      >
                        <div>
                          <p>{product.name}</p>
                          <p className="text-sm text-gray-500">
                            {amount} x ${product.currentPrice} = $
                            {totalPriceForProduct.toFixed(2)}{" "}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 border-t pt-4">
                  <p className="text-lg font-semibold">
                    {t("cart_total", { amount: totalPrice.toFixed(2) })}
                  </p>
                  <button
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
                    onClick={toggleCartDetails}
                  >
                    {t("common_close")}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="text-lg font-semibold mb-4">
                  {t("common_empty_cart")}
                </p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
                  onClick={toggleCartDetails}
                >
                  {t("common_close")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
