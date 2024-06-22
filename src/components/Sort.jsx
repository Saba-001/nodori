export const Sort = ({ selectedSort, onChange }) => {
  return (
    <div>
      <select
        value={selectedSort}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="default">Sort By</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="nameAsc">Name: A to Z</option>
        <option value="nameDesc">Name: Z to A</option>
        <option value="discountAsc">Discount: Low to High</option>
        <option value="discoundDesc">Discount: High to Low</option>
      </select>
    </div>
  );
};
