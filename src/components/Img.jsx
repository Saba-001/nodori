export const Img = ({ className, name, src, ...restProps }) => {
  const base = import.meta.env.VITE_BASE_URL || "";

  return (
    <img
      src={src || base + "src/images/" + name + ".png"}
      className={className}
      {...restProps}
    />
  );
};
