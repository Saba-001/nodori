export const Navigation = () => {
  return (
    <nav className="bg-beige text-brown flex justify-center p-4 shadow-md">
      <div className="flex space-x-8">
        <a href="#inspired" className="hover:underline active:underline">
          Get Inspired
        </a>
        <a href="#rooms" className="hover:underline">
          Rooms
        </a>
        <a href="#products" className="hover:underline">
          Products
        </a>
        <a href="#custom-craft" className="hover:underline">
          Custom Craft
        </a>
      </div>
    </nav>
  );
};
