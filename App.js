import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img className="res-logo"
      alt="res-logo"
      src="https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg"
      />
      <h3>meghna Food</h3>
      <h4>Biryani,North Indian</h4>
      <h4>4.4 star rating</h4>
      <h4>35 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">search</div>
      <div className="res-container">
        <RestaurentCard 
        resname="Megha Foods"
        cuisine="Biryani,North Indian"
        /> <RestaurentCard 
        resname="KFC"
        cuisine="Burgur"
        /> 
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
