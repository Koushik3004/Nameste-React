import { CDN_URL } from "../utils.js/cosntant";
const RestaurentCard = (props) => {
  //console.log("props", props);
  const { resData } = props;

  //console.log("resData",resData);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    //deliveryTime,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h5>{name}</h5>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Ratings</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>{deliveryTime} minutes</h4> */}
    </div>
  );
};

export default RestaurentCard;
