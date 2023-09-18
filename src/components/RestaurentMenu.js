import { useEffect } from "react";
import { swiggy_menu_api_URL } from "../utils.js/cosntant";

console.log("swiggy_menu_api_URL",swiggy_menu_api_URL);

const RestaurentMenu = () => {
  console.log("enterhere");
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log("enterhere");
    let response = await fetch(swiggy_menu_api_URL);
    let json = await response.json();

    console.log("json", json);
  };

  

  return (
    
    <div className="menu">
      <h1>Name of the Restaurent</h1>
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
