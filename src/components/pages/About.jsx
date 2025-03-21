import React, { useEffect } from "react";
// import coverPhoto from "/src/assets/images/coverphoto.jpg";
import background from "/src/assets/images/background.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // gsap.fromTo(
    //   ".ABOUT-TITLE",
    //   { opacity: 0, y: -100 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 2.5,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: "#About",
    //       start: "top 80%",
    //       end: "top 50%",
    //       once: true,
    //     },
    //   }
    // );

    // Background transition for entire page
    ScrollTrigger.create({
      trigger: "#About",
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
      className="About flex items-center h-[150vh] w-full relative" // Adjust height to 100vh for viewport fitting
    >
      <div className="leftcontainer relative top-0 left-0">
        <img className="h-[150vh]" src={background}></img>
      </div>

      <div className="rightcontainer" id="rightcontainer"></div>
    </section>
  );
};

export default About;
