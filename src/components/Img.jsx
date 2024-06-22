export const Img = ({ className, name, src, ...restProps }) => {
  return (
    <img
      src={src || "src/images/" + name + ".png"}
      className={className}
      {...restProps}
    />
  );
};
