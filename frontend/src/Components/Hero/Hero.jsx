import React from "react";
import "./Hero.css";
import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow_icon.png";
import men from "../../Assets/men.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>
          Best Deals! Best Prices! <span>ShopEase</span>
        </h2>
        <div className="hand-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="hand icon" height="60px" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" height="30px" />
      </div>
      <div className="hero-right">
        <img src={men} alt="" height="200px" />
      </div>
    </div>
  );
};

export default Hero;
