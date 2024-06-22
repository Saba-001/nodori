import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import { Img } from "./Img";

export const Product = ({
  id,
  iconNames,
  name,
  miniDescription,
  currentPrice,
  oldPrice,
  description,
  isOnSale,
  amountInCart,
  addToCart,
}) => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
    <div
      key={id}
      className="border p-4 rounded-lg shadow-lg flex flex-col bg-beige relative"
    >
      {iconNames?.length > 1 ? (
        <Slider {...settings} className="mb-12">
          {iconNames.map((iconName, index) => (
            <div key={index}>
              <Img
                name={iconName}
                alt={name}
                className="w-full h-80 object-cover mb-4 rounded-t-lg rounded-b"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <Img
          name={iconNames[0]}
          alt={name}
          className="w-full h-80 object-cover mb-4 rounded-t-lg rounded-b"
        />
      )}

      <div
        className={`absolute top-2 right-2  text-white py-1 px-3 rounded-full text-sm ${
          isOnSale ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isOnSale ? t("common_in_stock") : t("common_sold")}
      </div>

      <div className="flex-grow">
        <h2 className="text-xl font-bold text-brown">{name}</h2>
        <p className="text-darkGray">{miniDescription}</p>
        <p className="mt-2 text-brown">
          ${currentPrice}{" "}
          {oldPrice && (
            <span className="line-through text-inactiveGray">${oldPrice}</span>
          )}
        </p>
        <p className="mt-2 text-brown">{description}</p>
      </div>

      {isOnSale && (
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleAddition}
            className="bg-brown text-white py-2 px-2 rounded-md hover:bg-nextPrevBg hover:text-nextPrevText flex-grow"
          >
            {amountInCart > 0
              ? t("product_add_another_to_cart", { amount: amountInCart })
              : t("product_add_to_cart")}
          </button>
          {amountInCart > 0 && (
            <button
              onClick={handleRemoval}
              className="bg-red-500 text-white py-2 px-2 rounded-md hover:bg-red-600"
            >
              {t("common_remove")}
            </button>
          )}
          {amountInCart > 1 && (
            <button
              onClick={handleClear}
              className="bg-red-500 text-white py-2 px-2 rounded-md hover:bg-red-600"
            >
              {t("common_remove_all")}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
