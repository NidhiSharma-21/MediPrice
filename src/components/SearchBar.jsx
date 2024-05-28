import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-2xl">
        <CiSearch />
      </div>
      <div>
        <input
          type="serach"
          className="outline-none w-[400px] max-md:w-[90%] py-1 px-2 text-neutral-700 "
          placeholder="Serach for medicine..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
