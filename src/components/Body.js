import RestaurentCard from "./RestaurentCard";
import restaurantList from "../utils.js/mockData";



const Body = () => {
    return (
      <div className="body">
        <div className="Search">search</div>
        <div className="res-container">
          {
            restaurantList.map((restaurant)=>{
              return <RestaurentCard key={restaurant?.data?.id} resData={restaurant}/>
            })
          }
         
        </div>
      </div>
    );
  };

  export default Body
  