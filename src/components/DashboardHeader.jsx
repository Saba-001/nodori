import { useNavigate, Link } from "react-router-dom";

import { Img } from "./Img";

export const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <header className="bg-beige text-brown flex items-center justify-between p-4 h-20 fixed w-full top-0 left-0  z-10">
      <div className="flex items-center space-x-4">
        <Img name="Logo" alt="Logo" className="h-10 w-10" />
        <span className="text-lg font-bold">HOMECRAFT.</span>
      </div>
      <div className="flex items-center space-x-8 text-[1.2rem] leading-[1.6rem]">
        <Link
          to="/"
          className="hover:underline active:underline font-[Satoshi-medium]"
        >
          მთავარი
        </Link>
        <Link
          to="/contact-us"
          className="hover:underline font-[Satoshi-medium]"
        >
          დაგვიკავშირდით
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <Img name="Favorites" alt="Favorites" className="h-6 w-6" />
        </button>
        <button className="focus:outline-none">
          <Img name="Cart" alt="Cart" className="h-6 w-6" />
        </button>
        <button className="focus:outline-none" onClick={handleRegister}>
          <Img name="Register" alt="Account" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};
