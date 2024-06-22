import { useTranslation } from "react-i18next";
import { categories } from "/data";

export const CategoryFilter = ({ selectedCategory, onChange }) => {
  const { t } = useTranslation();

  return (
    <select
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded min-h-11 h-11"
    >
      <option value={""} key="default">
        {t("choose_filter")}
      </option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
