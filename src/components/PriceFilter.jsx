export const PriceFilter = ({ priceRange, onChange }) => {
  const handlePriceChange = (min, max) => {
    onChange([min, max]);
  };

  return (
    <div className="flex items-center space-x-2 p-2 border bg-white rounded min-h-11 h-11">
      <div className="flex items-center">
        <label htmlFor="min-price" className="text-sm font-semibold">
          მინ:
        </label>
        <input
          id="min-price"
          type="number"
          value={priceRange[0]}
          onChange={(e) => {
            if (e.target.value > priceRange[1] || priceRange[1] === undefined) {
              handlePriceChange(
                Number(e.target.value),
                Number(e.target.value * 2)
              );
            } else {
              handlePriceChange(Number(e.target.value), priceRange[1]);
            }
          }}
          className="w-20 border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="max-price" className="text-sm font-semibold">
          მაქს:
        </label>
        <input
          id="max-price"
          type="number"
          value={priceRange[1]}
          onChange={(e) =>
            handlePriceChange(priceRange[0], Number(e.target.value))
          }
          className="w-20 border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          min={priceRange[0]}
        />
      </div>
    </div>
  );
};
