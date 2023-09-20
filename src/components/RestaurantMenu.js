import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "../utils.js/cosntant";

console.log("swiggy_menu_api_URL", swiggy_menu_api_URL);

console.log("koushik");

const RestaurentMenu = () => {
  const [restaurant,setRestaurant]=useState(null);

  useEffect(()=>{
    fetchData()

  },[])



  const fetchData=async()=>{
    const response=await fetch(swiggy_menu_api_URL)
    const data=await response.json()
    console.log("data",data);
    setRestaurant(data)

  }

  console.log("resttt",restaurant.data.cards[0].card?.card?.info);

 // const {name}=restaurant.data.cards[0].card?.card?.info
 // console.log("gfg",name);

  return (
    <div className="menu">
     
      <h1>Menu</h1>
      <ul>
        <li>Biriyani</li>
        <li>Burger</li>
        <li>Coke</li>
      </ul>
   
    </div>
  );
};

export default RestaurentMenu;
