import { categories } from "/data";

export const CategoryFilter = ({ selectedCategory, onChange }) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded min-h-11 h-11"
    >
      <option value={""} key="default">
        აირჩიეთ ფილტრი
      </option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
