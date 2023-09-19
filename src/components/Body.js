import RestaurentCard from "./RestaurentCard";
import restaurantList from "../utils.js/mockData";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils.js/cosntant";
import Shimmer from "./Shimmer";
import axios from "axios";
//console.log(restaurantList);

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurent,setfilteredRestaurent]=useState([]);

  // console.log("setlistOfRestaurant",setlistOfRestaurant);

  useEffect(() => {
    // console.log("useeffect called");
    getRestaurants()
  }, []);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      //const response=await axios.get(swiggy_api_URL);
      console.log("response",response);
      const json = await response.json();

     // console.log("json",json);

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

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
      setfilteredRestaurent(resData);
    } catch (error) {
      console.log(error);
    }
  }

  //console.log("listOfRestaurant",listOfRestaurant);

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
        <input type="text"
        value={searchText}
        onChange={(e)=>{
          console.log(e.target.value);

          setsearchText(e.target.value)

        }}
        />
        <button className="search-btn"
        onClick={()=>{
          const filteredRestaurent=listOfRestaurant.filter((res)=>{
           return res.info.name.toLowerCase().includes(searchText.toLowerCase())
          })
         // console.log(filteredRestaurent);
         setfilteredRestaurent(filteredRestaurent)

        }}
        >search</button>
        
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button clicked");
            let filteredList = listOfRestaurant.filter((res) => {
              return res.info.avgRating >= 4.0;
            });
            setfilteredRestaurent(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurent.map((restaurant) => {
          return (
            <RestaurentCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
