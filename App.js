import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const {resData}=props;
  console.log(resData);
  const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data;
  return (
    <div className="res-card">
      <img className="res-logo"
      alt="res-logo"
      src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}
      />
      <h5>{name}</h5>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Ratings</h4>
      <h4>{costForTwo/100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
      
    </div>
  );
};

const resObj=
{
  type: "restaurant",
  data: {
    type: "F",
    id: "311443",
    name: "Siddhi Icecream & Thick Shake",
    uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
    city: "21",
    area: "Nanpura",
    totalRatingsString: "100+ ratings",
    cloudinaryImageId: "spd3y5gok3vvwqulgmda",
    cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
    tags: [],
    costForTwo: 20000,
    costForTwoString: "₹200 FOR TWO",
    deliveryTime: 30,
    minDeliveryTime: 25,
    maxDeliveryTime: 35,
    slaString: "25-35 MINS",
    lastMileTravel: 3,
    slugs: {
      restaurant: "siddhi-icecream-athwa-athwa",
      city: "surat",
    },
    cityState: "21",
    address:
      "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
    locality: "Athwa",
    parentId: 387846,
    unserviceable: true,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "FREE DELIVERY",
      shortDescriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "",
      shortDescriptionList: [
        {
          meta: "Free Delivery",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "3 kms",
    hasSurge: false,
    sla: {
      restaurantId: "311443",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      lastMileTravel: 3,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE_WITH_BANNER",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "4.5",
    totalRatings: 100,
    new: false,
  },
  subtype: "basic",
  
}




const Body = () => {
  return (
    <div className="body">
      <div className="Search">search</div>
      <div className="res-container">
        <RestaurentCard 
          resData={resObj}
        /> 
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
