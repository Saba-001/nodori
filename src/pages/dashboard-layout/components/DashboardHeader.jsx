export const DashboardHeader = () => {
  return (
    <header className="bg-beige text-brown flex items-center justify-between p-4 shadow-md h-28">
      <div className="flex items-center space-x-4">
        <img src="/assets/images/Logo.png" alt="Logo" className="h-10 w-10" />
        <span className="text-lg font-bold">HOMECRAFT.</span>
      </div>
      <div className="flex-grow flex justify-center px-4">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-full bg-white text-gray-700 rounded-full focus:outline-none"
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m-2.14-3.64a7 7 0 1114 0 7 7 0 01-14 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <img
            src="/assets/images/Favorites.png"
            alt="Favorites"
            className="h-6 w-6"
          />
        </button>
        <button className="focus:outline-none">
          <img src="/assets/images/Cart.png" alt="Cart" className="h-6 w-6" />
        </button>
        <button className="focus:outline-none">
          <img
            src="/assets/images/Register.png"
            alt="Account"
            className="h-6 w-6"
          />
        </button>
      </div>
    </header>
  );
};
