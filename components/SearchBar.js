import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
function SearchBar({ searchInput, placeholder, setSearchInput, search, show }) {
  return (
    <div
      className={`${
        show ? "md:hidden" : "hidden"
      } md:inline-flex flex items-center border-2  rounded-full px-2 md:px-0 py-2 shadow-sm`}
    >
      <input
        value={searchInput}
        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 dark:placeholder-dark-text dark:text-dark-text"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        type="text"
        placeholder={placeholder || "Start your search"}
      />
      <SearchIcon
        className="h-8 md:mx-2 bg-red-400 text-white rounded-full p-2 cursor-pointer dark:text-dark-text"
        onClick={search}
      ></SearchIcon>
    </div>
  );
}

export default SearchBar;
