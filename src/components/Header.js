import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils.js/cosntant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  //console.log("render");
  // useEffect(()=>{
  //   console.log("eseeffect");
  // },[loginbtn])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/about">About Us</a> 
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
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
