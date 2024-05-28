import React from "react";
import SearchBar from "./SearchBar";
import Location from "./Location";

const Search = () => {
  return (
    <div className="border-2 rounded-lg shadow-md p-2 flex items-center justify-center gap-2">
      <Location />
      <div className="h-5 border-l-2 border-neutral-500 mr-2"></div>
      <SearchBar />
    </div>
  );
};

export default Search;
