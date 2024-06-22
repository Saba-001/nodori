import { Arrow } from "/src/Icons";
import { products } from "/data";

export const itemsPerPage = 8;
const totalPages = Math.ceil(products.length / itemsPerPage);

export const Pagination = ({ currentPage, setCurrentPage }) => {
  const oldPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const newPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  return (
    <ul className="flex justify-center my-16 items-center">
      <li className="mr-4 list-none">
        <button
          onClick={oldPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-nextPrevBg text-nextPrevText rounded-full disabled:bg-lightGray min-w-12 h-12 flex items-center justify-center"
        >
          <Arrow className="max-w-5 fill-darkGray rotate-180" />
        </button>
      </li>
      {[...Array(totalPages)].map((_, i) => (
        <li
          key={i}
          className={`mx-2 list-none cursor-pointer ${
            i + 1 === currentPage ? "font-bold" : ""
          }`}
        >
          <button
            onClick={handleClick}
            id={i + 1}
            className={`px-3 py-1 min-w-12 h-12 flex items-center justify-center ${
              i + 1 === currentPage
                ? "bg-brown text-white rounded-full"
                : "text-inactiveGray"
            }`}
          >
            {i + 1}
          </button>
        </li>
      ))}
      <li className="ml-4 list-none">
        <button
          onClick={newPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-nextPrevBg text-nextPrevText rounded-full disabled:bg-lightGray min-w-12 h-12 flex items-center justify-center"
        >
          <Arrow className="max-w-5 fill-darkGray" />
        </button>
      </li>
    </ul>
  );
};
