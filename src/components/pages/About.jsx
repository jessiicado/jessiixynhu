import React, { useEffect } from "react";
import nature from "/src/assets/images/nature.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Scroll-trigger animation for About section
    ScrollTrigger.create({
      trigger: "#About",
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to(".About", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(".About", {
          opacity: 0,
          y: 70,
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  useEffect(() => {
    // Background transition for the entire page
    ScrollTrigger.create({
      trigger: "#Projects",
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".rightcontainer", {
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#ffffff",
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".rightcontainer", {
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  return (
    <section
      id="About"
      className="About flex justify-center items-center h-screen w-full relative z-0" // Adjust height to 100vh for viewport fitting
    >
      <div className="leftcontainer flex-1 items-start justify-start h-full"></div>
      <img className=" h-full p-20" src={nature} />
      <div
        className="rightcontainer h-full justify-center items-center"
        id="rightcontainer"
      >
        <div className="p-30 grid gap-10 text-stone-900 tracking-widest">
          <h1 className="text-8xl font-gambarino font-black flex-1 tracking-wider justify-center items-center pt-40">
            jessica
          </h1>
          <div className="whitespace-nowrap flex items-center">
            <h2 className="text-2xl font-courier font-bold">
              [jeh-see-cuh]
              <p className="text-bold">• Vietnamese</p>
            </h2>
          </div>
          <p className="text-3xl/12">
            Hi! I'm Jessica, a sophomore majoring in Computer Science with a
            passion for technology and creativity. I'm excited about exploring
            the world of programming, web development, and digital design. I
            love capturing moments and turning them into stories through
            photography and videography. Feel free to explore my work, and
            please reach out to connect!{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
