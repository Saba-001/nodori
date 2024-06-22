export const Img = ({ className, name, ...restProps }) => {
  return (
    <img
      src={"/assets/images/" + name + ".png"}
      className={className}
      {...restProps}
    />
  );
};
