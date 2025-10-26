import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import cartIcon from "../../assets/cart_icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [menu, SetMenu] = useState("home");
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" height="50px" />
          <p>Shopify</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              SetMenu("home");
            }}
          >
            Home {menu === "home" ? <hr /> : <></>}
          </li>

          <li
            onClick={() => {
              SetMenu("Mens");
            }}
          >
            Men
            {menu === "Mens" ? <hr /> : <></>}
          </li>

          <li
            onClick={() => {
              SetMenu("Womens");
            }}
          >
            Women
            {menu === "Womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              SetMenu("Kids");
            }}
          >
            Kids
            {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button className="login-btn">Login</button>
          <img src={cartIcon} alt="" height="40px" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
