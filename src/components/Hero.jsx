import React, { useState, useEffect } from "react";
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
    <section
      className="hero-section items-center justify-center text-center flex flex-col md:flex-row xs:flex-col md:text-left p-6 md:p-12 "
      id="Home"
    >
      {/* <body className="about">ABOUT</body> */}
      <div className="hero-text flex flex-col justify-center items-center">
        <h1
          className="header-title relative whitespace-nowrap -top-80 left-100 md:items-start sm:items-start text-7xl sm:text-3xl md:text-4xl lg:text-5xl"
          id="header-title"
        >
          Jessica Do
        </h1>
        <h2 className="header-subtitle relative whitespace-nowrap -top-50 left-100 text-7xl sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="PositionWord">{positionsList[index]}</span>
        </h2>
      </div>
      <img
        src={coverphoto}
        alt="coverphoto"
        className="coverphoto max-w-[25rem] w-full h-auto rounded-full mx-auto relative -top-150 left-1/10 flex justify-center items-center"
      />
      <div className="language-list max-w-[2rem] flex flex-row gap-2.5 w-full h-auto relative -top-30 right-0">
        <img
          src="src\assets\java_icon.svg"
          alt="java_icon"
          className="icon"
        ></img>
        <img
          src="src\assets\python_icon.svg"
          alt="python_icon"
          className="icon"
        ></img>
        <img
          src="src\assets\javascript_icon.svg"
          alt="javascript_icon"
          className="icon"
        ></img>
        <img
          src="src\assets\html_icon.svg"
          alt="html_icon"
          className="icon"
        ></img>
        <img
          src="src\assets\css_icon.svg"
          alt="css_icon"
          className="icon"
        ></img>
        <img
          src="src\assets\jsx_icon.svg"
          alt="jsx_icon"
          className="icon"
        ></img>
        <img
          src="src\assets\react_icon.svg"
          alt="react_icon"
          className="icon"
        ></img>
        <img
          src="src\assets\tailwind_icon.svg"
          alt="tailwind_icon"
          className="icon"
        ></img>
      </div>

      <div className="about">
        <div className="">
          <h2>
            I’m a passionate Computer Science student with a drive to turn ideas
            into innovative realities. With a keen interest in 3D modeling and
            software development, I’m always eager to dive deeper into data
            science and machine learning. When I’m not coding, you can usually
            find me at a local coffee shop fueling up for the next big project
            or unwinding with a good game. I believe in the power of lifelong
            learning (and a generous amount of coffee) to keep pushing me
            forward. Always open to connecting and sharing ideas—let’s
            collaborate!
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
