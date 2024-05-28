import React from "react";
import LocationPin from "../assets/location-pin.svg";
import { MdArrowDropDown } from "react-icons/md";

const Location = () => {
  return (
    <div className="w-max  flex items-center">
      <div>
        <img src={LocationPin} alt="" />
      </div>
      <div className="flex items-center">
        <input
          className="placeholder:text-neutral-600 p-2 outline-none"
          placeholder="Jabalpur, Madhya Pradesh"
        />
        <MdArrowDropDown className="text-3xl text-neutral-600" />
      </div>
    </div>
  );
};

export default Location;
