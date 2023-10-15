import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "../utils.js/cosntant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";


console.log("swiggy_menu_api_URL", swiggy_menu_api_URL);

console.log("koushik");

const RestaurentMenu = () => {
  //const [restaurant,setRestaurant]=useState(null);
  const{resId}=useParams();

  // useEffect(()=>{
  //   fetchData()

  // },[])



  // const fetchData=async()=>{
  //   const response=await fetch(swiggy_menu_api_URL + resId)
  //   const json=await response.json()
  //   console.log("datares",json);
  //   setRestaurant(json.data)

  // }

const restaurant=useRestaurantMenu(resId)



  if(restaurant==null) return <Shimmer/>

    console.log("resttt",restaurant);

  const {name,cuisines,costForTwoMessage}=restaurant.cards[0].card?.card?.info
 // console.log("gfg",name);

 const {itemCards}=restaurant.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
 console.log("itemCards",restaurant.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);

 ///console.log("data",restaurant.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);

 const categories=restaurant.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
   c?.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 );

  console.log("categories",categories);

 

 //console.log("item",restaurant.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

  return (
    <div className="text-center">
     
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>

      {/* categories acrodians  */}
      {categories.map((category)=>{
        return  <RestaurantCatagory data={category?.card?.card}/>
      }
      )}

      {/* <h2 className="text-2xl ">Menu</h2>

      <ul>
        {itemCards.map((item)=>{
         return <li key={item?.card?.info?.id}>  {item?.card?.info?.name} - {"Rs "} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} </li> 
})}
      
      </ul> */}
   
    </div>
  );
};

export default RestaurentMenu;
