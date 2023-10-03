import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils.js/cosntant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStatus=useOnlineStatus();
  //console.log("render");
  // useEffect(()=>{
  //   console.log("eseeffect");
  // },[loginbtn])
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? '\u2714' : '\u2718'}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
          <li className="px-4"><a href="/about">About Us</a> 
          </li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button className="login-btn" onClick={()=>{
            loginbtn=="Login"?setLoginbtn("Logout"):setLoginbtn("Login")
          }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
