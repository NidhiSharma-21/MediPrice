import React from "react";
import Store1 from "../assets/store1.jpeg";
import Store2 from "../assets/store2.jpeg";
import Store3 from "../assets/store3.jpeg";
import { TfiLocationPin } from "react-icons/tfi";
import { MdCall } from "react-icons/md";

const MedsStore = () => {
  const stores = [
    {
      name: "Discount Medical Store",
      rating: 3.3,
      address:
        "14, Shakti Bhawan Marg National Colony, Jabalpur, Madhya Pradesh 482008",
      price: "₹19",
      phone: "8878532726",
      image: Store1,
      medicines: [
        { name: "Aspirin", price: "₹5" },
      ],
    },
    {
      name: "Best Price Pharmacy",
      rating: 4.1,
      address:
        "Shop no 5, hotel utsav parisar, dayanand saraswati ward, Russel Chowk, Napier Town, Jabalpur, Madhya Pradesh 482001",
      price: "₹105",
      phone: "7509023456",
      image: Store2,
      medicines: [
        { name: "Aspirin", price: "₹10" },
      ],
    },
    {
      name: "Discount Medicos",
      rating: 4.1,
      address:
        "Shop no 5, hotel utsav parisar, dayanand saraswati ward, Russel Chowk, Napier Town, Jabalpur, Madhya Pradesh 482001",
      price: "₹75",
      phone: "7509023456",
      image: Store3,
      medicines: [
        { name: "Aspirin", price: "₹7" },

      ],
    },
    {
      name: "Alphas Store",
      rating: 3.3,
      address:
        "14, Shakti Bhawan Marg National Colony, Jabalpur, Madhya Pradesh 482008",
      price: "₹19",
      phone: "8878532726",
      image: Store1,
      medicines: [
        { name: "Aspirin", price: "₹98" },
      ],
    },
    {
      name: "Ankur Pharmacy",
      rating: 4.1,
      address:
        "Shop no 5, hotel utsav parisar, dayanand saraswati ward, Russel Chowk, Napier Town, Jabalpur, Madhya Pradesh 482001",
      price: "₹105",
      phone: "7509023456",
      image: Store2,
      medicines: [
        { name: "Dolo 650", price: "₹100" },
      ],
    },
    {
      name: "Saurabh Medicos",
      rating: 4.1,
      address:
        "Shop no 5, hotel utsav parisar, dayanand saraswati ward, Russel Chowk, Napier Town, Jabalpur, Madhya Pradesh 482001",
      price: "₹75",
      phone: "7509023456",
      image: Store3,
      medicines: [
        { name: "Dolo 650", price: "₹122" },

      ],
    },
  ];

  return (
    <div className="px-36 max-xl:px-16 max-sm:px-4 grid place-content-center grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
      {stores.map((store, index) => (
        <div key={index} className="border-2 rounded-xl hover:shadow-md w-full overflow-hidden p-[6px]">
          <div>
            <img src={store.image} alt="" className="w-full h-[220px] max-sm:h-[150px] object-cover" />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <div className="flex justify-between items-center ">
              <h3 className="font-semibold text-lg tracking-wider">{store.name}</h3>
              <div className="rounded bg-green-700 text-white px-2 py-[2.5px] text-sm">{store.rating}</div>
            </div>
            <div className="flex gap-2 items-center">
              <TfiLocationPin />
              <p className="text-neutral-500 text-sm tracking-wider">{store.address}</p>
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
            <div className="flex flex-col gap-2 mt-3">
              {store.medicines.map((medicine, i) => (
                <div key={i} className="flex justify-between">
                  <p className="text-base">{medicine.name}</p>
                  <p className="text-base">{medicine.price}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-3 items-center justify-between">
              <div className="flex flex-col">
                <p className="font-medium text-sm">Total Price:</p>
                <span className="text-base font-semibold">{store.price}</span>
              </div>
              <div className="flex gap-2 items-center">
                <button className="py-[8px] px-2 text-sm bg-[green] text-white flex items-center gap-1 font-medium rounded-md">
                  <MdCall className="text-xl max-sm:text-lg" />
                  {store.phone}
                </button>
                <button className="py-[8px] px-2 text-sm bg-sky-500 text-white rounded-md font-medium ">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedsStore;
