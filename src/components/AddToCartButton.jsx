import { useTranslation } from "react-i18next";

export const AddToCartButton = ({ amountInCart, id, addToCart }) => {
  const { t } = useTranslation();

  const handleAddition = () => {
    addToCart(id, (amountInCart || 0) + 1);
  };

  const handleRemoval = () => {
    addToCart(id, amountInCart - 1);
  };

  const handleClear = () => {
    addToCart(id, 0);
  };

  return (
    <div className="mt-4 flex space-x-2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAddition();
        }}
        className="bg-brown text-white py-2 px-2 rounded-md hover:bg-nextPrevBg hover:text-nextPrevText flex-grow"
      >
        {amountInCart > 0
          ? t("product_add_another_to_cart", { amount: amountInCart })
          : t("product_add_to_cart")}
      </button>
      {amountInCart > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRemoval();
          }}
          className="bg-red-500 text-white py-2 px-2 rounded-md hover:bg-red-600"
        >
          {t("common_remove")}
        </button>
      )}
      {amountInCart > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClear();
          }}
          className="bg-red-500 text-white py-2 px-2 rounded-md hover:bg-red-600"
        >
          {t("common_remove_all")}
        </button>
      )}
    </div>
  );
};
