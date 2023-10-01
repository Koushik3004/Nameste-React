import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    // addEventListener version
    window.addEventListener("offline", () => {
      //console.log("You are now connected to the network.")
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      //console.log("You are now connected to the network.")
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
