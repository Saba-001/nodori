import { Img } from "./Img";

export const Product = ({
  id,
  iconName,
  name,
  miniDescription,
  currentPrice,
  oldPrice,
  description,
}) => {
  return (
    <div key={id} className="border p-4 rounded-lg shadow-lg">
      <Img
        name={iconName}
        alt={name}
        className="w-full h-80 object-cover mb-4"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{miniDescription}</p>
      <p className="mt-2 text-gray-800">
        ${currentPrice}{" "}
        {oldPrice && (
          <span className="line-through text-gray-500">${oldPrice}</span>
        )}
      </p>
      <p className="mt-2">{description}</p>
    </div>
  );
};
