import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "../utils.js/cosntant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


console.log("swiggy_menu_api_URL", swiggy_menu_api_URL);

console.log("koushik");

const RestaurentMenu = () => {
  const [restaurant,setRestaurant]=useState(null);
  const{resId}=useParams();

  useEffect(()=>{
    fetchData()

  },[])



  const fetchData=async()=>{
    const response=await fetch(swiggy_menu_api_URL + resId)
    const json=await response.json()
    console.log("datares",json);
    setRestaurant(json.data)

  }



  if(restaurant==null) return <Shimmer/>

    console.log("resttt",restaurant);

  const {name,cuisines,costForTwoMessage}=restaurant.cards[0].card?.card?.info
 // console.log("gfg",name);

 const {itemCards}=restaurant.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

 console.log("data",itemCards);

 

 //console.log("item",restaurant.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

  return (
    <div className="menu">
     
      <h1>{name}</h1>
      <h1>{cuisines.join(",")} - {costForTwoMessage}</h1>

      <h2>Menu</h2>

      <ul>
        {itemCards.map((item)=>{
         return <li key={item?.card?.info?.id}>  {item?.card?.info?.name} - {"Rs "} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} </li> 
})}
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1].card?.info?.name}</li>
        <li>{itemCards[2].card?.info?.name}</li> */}
      </ul>
   
    </div>
  );
};

export default RestaurentMenu;
