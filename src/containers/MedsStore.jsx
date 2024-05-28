import React from "react";
import Store1 from "../assets/store1.jpeg";
import Store2 from "../assets/store2.jpeg";
import Store3 from "../assets/store3.jpeg";
import { TfiLocationPin } from "react-icons/tfi";
import { MdCall } from "react-icons/md";

const MedsStore = () => {
  return (
    <div className="px-36 max-xl:px-16 max-sm:px-4 grid place-content-center grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
      <div className="border-2 rounded-xl hover:shadow-md w-full overflow-hidden p-[6px]">
        <div>
          <img src={Store1} alt="" className="w-full h-[220px] max-sm:h-[150px] object-cover" />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex justify-between items-center ">
            <h3 className="font-semibold text-lg tracking-wider">
              Store 1
            </h3>
            <div className="rounded bg-green-700 text-white px-2 py-[2.5px] text-sm">
              4.3
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <TfiLocationPin />
            <p className="text-neutral-500 text-sm tracking-wider">
              Gorakhpur,Jabalpur
            </p>
          </div>

          <div className="flex gap-1">
            <span className="py-1 px-[6px]  border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              In Store Collect
            </span>
            <span className="py-1 px-[6px] border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              Delivery Service
            </span>
            <span className="py-1 px-[6px] border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              Home Delivery
            </span>
          </div>

          <div className="flex gap-3 mt-3 items-center justify-between">
            <div className="flex flex-col ">
              <p className="font-medium text-sm">Price:</p>
              <span className="text-base font-semibold">₹175</span>
            </div>
            <div className="flex gap-2 items-center">
              <button className="py-[8px] px-2 text-sm bg-[green] text-white flex items-center gap-1 font-medium rounded-md">
                <MdCall className="text-xl max-sm:text-lg" />
                9876543210
              </button>
              <button className="py-[8px] px-2 text-sm bg-sky-500 text-white rounded-md font-medium ">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-xl hover:shadow-md w-full overflow-hidden p-[6px]">
        <div>
          <img src={Store1} alt="" className="w-full h-[220px] max-sm:h-[150px] object-cover" />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex justify-between items-center ">
            <h3 className="font-semibold text-lg tracking-wider">
              Store 1
            </h3>
            <div className="rounded bg-green-700 text-white px-2 py-[2.5px] text-sm">
              4.3
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <TfiLocationPin />
            <p className="text-neutral-500 text-sm tracking-wider">
              Gorakhpur,Jabalpur
            </p>
          </div>

          <div className="flex gap-1">
            <span className="py-1 px-[6px]  border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              In Store Collect
            </span>
            <span className="py-1 px-[6px] border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              Delivery Service
            </span>
            <span className="py-1 px-[6px] border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              Home Delivery
            </span>
          </div>

          <div className="flex gap-3 mt-3 items-center justify-between">
            <div className="flex flex-col ">
              <p className="font-medium text-sm">Price:</p>
              <span className="text-base font-semibold">₹175</span>
            </div>
            <div className="flex gap-2 items-center">
              <button className="py-[8px] px-2 text-sm bg-[green] text-white flex items-center gap-1 font-medium rounded-md">
                <MdCall className="text-xl max-sm:text-lg" />
                9876543210
              </button>
              <button className="py-[8px] px-2 text-sm bg-sky-500 text-white rounded-md font-medium ">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-xl hover:shadow-md w-full overflow-hidden p-[6px]">
        <div>
          <img src={Store1} alt="" className="w-full h-[220px] max-sm:h-[150px] object-cover" />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex justify-between items-center ">
            <h3 className="font-semibold text-lg tracking-wider">
              Store 1
            </h3>
            <div className="rounded bg-green-700 text-white px-2 py-[2.5px] text-sm">
              4.3
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <TfiLocationPin />
            <p className="text-neutral-500 text-sm tracking-wider">
              Gorakhpur,Jabalpur
            </p>
          </div>

          <div className="flex gap-1">
            <span className="py-1 px-[6px]  border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              In Store Collect
            </span>
            <span className="py-1 px-[6px] border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              Delivery Service
            </span>
            <span className="py-1 px-[6px] border-[1px] border-neutral-400 rounded-md text-[10px] font-bold text-neutral-700">
              Home Delivery
            </span>
          </div>

          <div className="flex gap-3 mt-3 items-center justify-between">
            <div className="flex flex-col ">
              <p className="font-medium text-sm">Price:</p>
              <span className="text-base font-semibold">₹175</span>
            </div>
            <div className="flex gap-2 items-center">
              <button className="py-[8px] px-2 text-sm bg-[green] text-white flex items-center gap-1 font-medium rounded-md">
                <MdCall className="text-xl max-sm:text-lg" />
                9876543210
              </button>
              <button className="py-[8px] px-2 text-sm bg-sky-500 text-white rounded-md font-medium ">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedsStore;
