import RestaurentCard from "./RestaurentCard";
import restaurantList from "../utils.js/mockData";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils.js/cosntant";
//console.log(restaurantList);



const Body = () => {
  const[listOfRestaurant,setlistOfRestaurant]=useState([]);

 // console.log("setlistOfRestaurant",setlistOfRestaurant);

  useEffect(()=>{
   // console.log("useeffect called");
   getRestaurants()

  },[]);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

         // console.log("checkData",checkData);

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setlistOfRestaurant(resData);
      
    } catch (error) {
      console.log(error);
    }
  }











  return (
    <div className="body">
      <div className="filtter">
        <button
          className="filter-btn"
          onClick={() => {
           // console.log("button clicked");
           let filteredRestaurent=listOfRestaurant.filter((res)=>{
            return res.info.avgRating>=4.0
           })
           setlistOfRestaurant(filteredRestaurent)
          
          }
        }
        >
          Top rated restaurant
        </button>
      </div>
      
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurentCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
