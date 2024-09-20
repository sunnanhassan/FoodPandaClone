import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCards = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
    // console.log("pizza");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-center items-center w-50 h-40 mx-auto mb-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0">
              <button
                className="p-2 rounded-lg text-yellow-50 bg-black shadow-lg"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
          </div>
          <div className="text-xl font-semibold text-gray-800">
            {item.card.info.name}
          </div>
          <div className="text-sm font-semibold text-red-800 mt-2">
            Rs. {item.card.info.price / 100}
          </div>
          <div className="text-sm text-gray-800 mt-2">
            {item.card.info.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
