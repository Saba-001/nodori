export const Img = ({ className, name, ...restProps }) => {
  return (
    <img
      className={className}
      src={
        (import.meta.env.VITE_BASE_URL || "") +
        "/assets/images/" +
        name +
        ".png"
      }
      {...restProps}
    />
  );
};
