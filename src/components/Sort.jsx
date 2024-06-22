import { useTranslation } from "react-i18next";

export const Sort = ({ selectedSort, onChange }) => {
  const { t } = useTranslation();

  return (
    <div>
      <select
        value={selectedSort}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="default">{t("common_sort_by")}</option>
        <option value="priceAsc">{t("sort_price_asc")}</option>
        <option value="priceDesc">{t("sort_price_desc")}</option>
        <option value="nameAsc">{t("sort_name_asc")}</option>
        <option value="nameDesc">{t("sort_name_desc")}</option>
        <option value="discountAsc">{t("sort_discount_asc")}</option>
        <option value="discoundDesc">{t("sort_discount_desc")}</option>
      </select>
    </div>
  );
};
