import { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-full">
      <div
        id="accordion-collapse"
        className="border-b text-red-500 border-gray-200 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-lg font-medium mx-auto">
            {data.title} ({data.itemCards.length})
          </span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      {showItems && <ItemCards items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;
