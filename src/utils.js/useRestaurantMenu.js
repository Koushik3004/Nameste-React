import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../utils.js/cosntant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(swiggy_menu_api_URL + resId);
    const json = await response.json();
    console.log("datares", json);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
