import React, { use, useState, useEffect } from "react";
import "./Hero.css";
import coverphoto from "../assets/coverphoto.jpg";

function Hero() {
  const positionsList = [
    "Student",
    "Full Stack Developer",
    "Coffee Lover",
    "Gamer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % positionsList.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1 className="header-title">Hi, I'm Jessica</h1>
        <h2 className="header-subtitle">
          <span className="PositionWord">{positionsList[index]}</span>
        </h2>
      </div>
      <img src={coverphoto} alt="coverphoto" className="coverphoto" />
    </section>
  );
}

export default Hero;
