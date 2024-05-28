import React from "react";
import FilterIcon from "../assets/filter-icon.svg";

const FilterSection = () => {
  return (
    <div className="flex py-6 max-sm:py-4 px-36 max-xl:px-16 max-sm:px-4 bg-white gap-4 sticky top-0">
      <button className="border-[1px] px-3 py-2 max-sm:py-1 max-sm:px-2 text-base max-sm:text-[14px] text-neutral-500 rounded-md shadow-md hover:bg-neutral-100 transition-colors duration-300">
        <div className="flex gap-4 max-sm:gap-2 items-center ">
          <img src={FilterIcon} alt="" className="h-5 max-sm:h-4" />
          Filter
        </div>
      </button>
      <button className="border-[1px] px-3 py-2 max-sm:py-1 max-sm:px-2 text-base max-sm:text-[14px] text-neutral-500 rounded-md shadow-md hover:bg-neutral-100 transition-colors duration-300 ">
        Rating 4.0+
      </button>
      <button className="border-[1px] px-3 py-2 max-sm:py-1 max-sm:px-2 text-base max-sm:text-[14px] text-neutral-500 rounded-md shadow-md hover:bg-neutral-100 transition-colors duration-300 ">
        Open Now
      </button>
    </div>
  );
};

export default FilterSection;
