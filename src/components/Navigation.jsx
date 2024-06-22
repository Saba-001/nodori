import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { products } from "/data";

import { Img } from "./Img";

export const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowResults(true);
    if (term) {
      const results = products.filter(
        (item) =>
          item.name.toLowerCase().includes(term.toLowerCase()) ||
          item.material.toLowerCase().includes(term.toLowerCase()) ||
          item.type.toLowerCase().includes(term.toLowerCase()) ||
          item.room.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchResultClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <nav className="bg-beige text-brown shadow-md fixed w-full z-10 h-14">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4"></div>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="px-4 py-2 w-full bg-white text-gray-700 rounded-full focus:outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_161_491)">
                <path
                  d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4437 16.4438L21 21.0001"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4437 16.4438L21 21.0001"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_161_491">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          {showResults && searchResults.length > 0 && (
            <ul className="absolute top-full right-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {searchResults.map((result) => (
                <li
                  key={result.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleSearchResultClick(result.id)}
                >
                  <Img
                    name={result.iconNames[0]}
                    alt={result.name}
                    className="h-6 w-6 mr-2"
                  />
                  <span>{result.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};
