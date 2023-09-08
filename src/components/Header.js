import { useState } from "react";
import { LOGO_URL } from "../utils.js/cosntant";
import { useState } from "react";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  console.log("render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
