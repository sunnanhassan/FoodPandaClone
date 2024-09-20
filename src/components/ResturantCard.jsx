import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime }, // Destructure deliveryTime from the sla object
  } = resData?.info;

  const costForTwoWithoutSymbol = costForTwo.replace("₹", "");

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
      <img
        className="w-[250px] h-[150px] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="res-card-content">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <hr />
        <em>{cuisines.join(", ")}</em>
        <h4>{avgRating} stars</h4>
        <h4>Rs {costForTwoWithoutSymbol}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
