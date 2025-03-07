import React from "react";
import nature from "../assets/nature.jpg";
import "./Background.css";
const Background = () => {
  return (
    // I WANT THE IMG TO BE FULLY COVERED HALF RIGHT SIDE
    <div className="container">
      <img src={nature} alt="nature" className="nature" />
    </div>
  );
};

export default Background;
