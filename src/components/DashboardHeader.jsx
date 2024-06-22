import { useNavigate, Link } from "react-router-dom";

import { Img } from "./Img";
import { Cart } from "./Cart";

import { useTranslation } from "react-i18next";

export const DashboardHeader = ({ selectedProducts, setSelectedProducts }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleMain = () => {
    navigate("/");
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ka" : "en");
  };

  return (
    <header className="bg-beige text-brown flex items-center justify-between p-4 h-20 fixed w-full top-0 left-0 z-50">
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={handleMain}
      >
        <Img name="Logo" alt="Logo" className="h-10 w-10" />
        <span className="text-lg font-bold">HOMECRAFT.</span>
      </div>
      <div className="flex items-center space-x-8 text-[1.2rem] leading-[1.6rem]">
        <Link
          to="/"
          className="hover:underline active:underline font-[Satoshi-medium]"
        >
          {t("common_main")}
        </Link>
        <Link
          to="/contact-us"
          className="hover:underline font-[Satoshi-medium]"
        >
          {t("common_contact_us")}
        </Link>
      </div>
      <div className="flex items-center mr-8 gap-8">
        <Cart
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
        <button className="focus:outline-none" onClick={handleRegister}>
          <Img name="Register" alt="Account" className="h-8 w-8" />
        </button>
        <div className="relative">
          <button className="focus:outline-none" onClick={changeLanguage}>
            {i18n.language === "en" ? "🇺🇸" : "🇬🇪"}
          </button>
        </div>
      </div>
    </header>
  );
};
