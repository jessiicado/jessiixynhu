import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ToTop = () => {
  useEffect(() => {
    // Background transition for entire page
    ScrollTrigger.create({
      trigger: "#About",
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to(".topbtn", {
          backgroundColor: "#ffffff",
          color: "#1e1e1e",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(".topbtn", {
          backgroundColor: "#eaece5",
          color: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  const toTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className="topbtn fixed z-50">
      <button
        onClick={toTop}
        style={{
          cursor: "pointer",
        }}
      >
        ^
      </button>
    </div>
  );
};

export default ToTop;
