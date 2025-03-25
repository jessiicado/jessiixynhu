import React, { useEffect } from "react";
// import coverPhoto from "/src/assets/images/coverphoto.jpg";
import nature from "/src/assets/images/nature.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#About",
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to(".leftcontainer", {
          display: "block",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(".leftcontainer", {
          display: "none",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
    });
    // Background transition for entire page
    ScrollTrigger.create({
      trigger: "#Projects",
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#ffffff",
          color: "#000000",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#000000",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  return (
    <section
      id="About"
      className="About flex items-center h-[100vh] w-full relative" // Adjust height to 100vh for viewport fitting
    >
      <div className="leftcontainer relative h-1/10 top-0 left-0">
        <img className=" items-center flex" src={nature}></img>
      </div>

      <div className="rightcontainer" id="rightcontainer"></div>
    </section>
  );
};

export default About;
