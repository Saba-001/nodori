export const Img = ({ className, name, ...restProps }) => {
  const base = import.meta.env.VITE_BASE_URL || "";

  return (
    <img
      src={base + "/assets/images/" + name + ".png"}
      className={className}
      {...restProps}
    />
  );
};
