import React from "react";
import "./Hero.css";
import coverphoto from "../assets/coverphoto.jpeg";

// import coverphoto from "./assets/coverphoto.jpeg";
const Hero = () => {
  return (
    <div className="hero-container">
      <img
        src={coverphoto}
        alt="coverphoto"
        className="coverphoto"
        style={{
          width: "350px",
          height: "500px",
        }}
      />
      <h1 className="header-title">JESSICA DO</h1>
      <p className="header-subtitle">A Frontend Developer</p>
    </div>
  );
};

export default Hero;
