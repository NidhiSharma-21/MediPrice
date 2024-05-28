import React from "react";
import MedsStore from "../containers/MedsStore";
import FilterSection from "../components/FilterSection";
import SearchBar from "../components/SearchBar";
import AddToBag from "../components/Addtobag";

const Home = () => {
  return (
    <div>
      <div className="p-2 mx-4 sm:mx-16 border-[1px] md:hidden grid grid-cols-1 border-neutral-300 rounded-md">
        <SearchBar />
      </div>
      <FilterSection />
      <MedsStore />

      
    </div>
  );
};

export default Home;
