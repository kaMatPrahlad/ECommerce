import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import cartIcon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
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
            <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
              Home{" "}
            </Link>
            {menu === "home" ? <hr /> : <></>}
          </li>

          <li
            onClick={() => {
              SetMenu("Mens");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/mens"
            >
              Men
            </Link>

            {menu === "Mens" ? <hr /> : <></>}
          </li>

          <li
            onClick={() => {
              SetMenu("Womens");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/womens"
            >
              Womens
            </Link>
            {menu === "Womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              SetMenu("Kids");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/kids"
            >
              {" "}
              Kids
            </Link>
            {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="/login"
          >
            {" "}
            <button className="login-btn">Login</button>
          </Link>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/cart">
            <img src={cartIcon} alt="" height="40px" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
