import { useParams, useOutletContext } from "react-router-dom";
import { products } from "/data";
import Slider from "react-slick";
import {
  Img,
  Navigation,
  DashboardFooter,
  AddToCartButton,
} from "/src/components";
import { useTranslation } from "react-i18next";

export const ProductDetail = () => {
  const { selectedProducts, setSelectedProducts } = useOutletContext();
  const { id } = useParams();
  const { t } = useTranslation();
  const product = products.find((product) => product.id === id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = (id, amount) => {
    const data = {
      ...selectedProducts,
      [id]: amount ? { id, amount } : undefined,
    };

    if (!amount) {
      delete data[id];
    }

    setSelectedProducts(data);
  };

  if (!product) {
    return <div className="text-center py-8">{t("product_not_found")}</div>;
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-40">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex flex-col items-center px-8 w-full lg:w-1/2">
            {product.iconNames.length > 1 ? (
              <Slider {...settings} className="w-full">
                {product.iconNames.map((iconName, index) => (
                  <div key={index}>
                    <Img
                      name={iconName}
                      alt={product.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <Img
                name={product.iconNames[0]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            )}
          </div>
          <div className="text-left space-y-6 px-4 w-full lg:w-1/2">
            <h2 className="text-4xl font-bold">
              {product.name}
              <span
                className={`ml-4 px-2 py-1 text-sm rounded ${
                  product.isOnSale
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {product.isOnSale ? t("common_in_stock") : t("common_sold")}
              </span>
            </h2>
            <p className="text-gray-600 text-lg">{product.miniDescription}</p>
            <div className="flex items-center space-x-4 text-xl">
              <p className="font-bold">${product.currentPrice}</p>
              {product.oldPrice && (
                <span className="line-through text-gray-500">
                  ${product.oldPrice}
                </span>
              )}
            </div>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 border-t pt-6 space-y-4">
              <h3 className="text-lg font-semibold mb-2">
                {t("product_additional_information")}
              </h3>
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="text-gray-600">
                    <span className="font-bold">{t("product_material")}:</span>{" "}
                    {product.material}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">{t("product_type")}:</span>{" "}
                    {product.type}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <span className="font-bold">
                      {t("product_categories")}:
                    </span>{" "}
                    {product.categories.join(", ")}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">{t("product_room")}:</span>{" "}
                    {product.room}
                  </p>
                </div>
              </div>
            </div>

            {product.isOnSale && (
              <div className="mt-8">
                <AddToCartButton
                  id={product.id}
                  addToCart={handleAddToCart}
                  amountInCart={selectedProducts[product.id]?.amount}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};
