import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Img } from "./Img";

export const DashboardFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-beige text-brown p-8 mx-40 mt-auto">
      <div className="grid grid-cols-4 gap-8 text-center">
        <div>
          <Img
            name="Quality"
            alt="High Quality"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">{t("footer_quality")}</p>
          <p>{t("footer_quality_desc")}</p>
        </div>
        <div>
          <Img
            name="Warranty"
            alt="Warranty Protection"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">{t("footer_waranty")}</p>
          <p>{t("footer_waranty_desc")}</p>
        </div>
        <div>
          <Img
            name="Shipping"
            alt="Free Shipping"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">{t("footer_delivery")}</p>
          <p>{t("footer_delivery_desc")}</p>
        </div>
        <div>
          <Img
            name="Support"
            alt="24/7 Support"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">{t("footer_support")}</p>
          <p>{t("footer_support_desc")}</p>
        </div>
      </div>
      <div className="flex justify-evenly pt-20 text-sm">
        <div>
          <p className="font-bold mb-2 text-xl text-black">
            {t("common_logo")}
          </p>
          <p className="text-slate-800">{t("common_address_1")}</p>
          <p className="text-slate-800">{t("common_address_2")}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold mb-2 text-lg text-slate-800">
            {t("common_links")}
          </p>
          <Link
            className="hover:underline font-[Satoshi-medium]"
            to="/contact-us"
          >
            {t("common_contact_us")}
          </Link>
        </div>
      </div>
    </footer>
  );
};
