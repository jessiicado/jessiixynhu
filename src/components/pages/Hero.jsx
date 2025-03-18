import React, { useRef, useEffect } from "react";
import darkHero from "/src/assets/images/dark-hero.jpg";
import Clock from "../ui/Clock";
import gsap from "gsap";

function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const clockRef = useRef(null);
  const transitionImage = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Initial image & title animations
    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: "power3.inOut",
    })
      .from(
        img.current,
        { scale: 2, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(
        titles.current[0],
        { y: -100, opacity: 0, duration: 1.5, ease: "power4.inOut" },
        "-=1"
      )
      .to(
        transitionImage.current,
        { opacity: 1, scale: 1.1, duration: 1.5, ease: "power2.inOut" },
        "-=1"
      )
      .to(transitionImage.current, {
        opacity: 0,
        scale: 1.2,
        duration: 1.5,
        ease: "power2.inOut",
      })
      .from(
        titles.current[1],
        { y: 100, opacity: 0, duration: 1.5, ease: "power4.inOut" },
        "-=1"
      )
      .from(
        clockRef.current,
        { opacity: 0, y: 20, duration: 1.5, ease: "power4.inOut" },
        "-=1"
      );
  }, []);

  return (
    <section
      id="Home"
      className="hero relative flex w-full h-full select-none z-0 items-center justify-center"
      aria-label="hero"
    >
      <div className=" flex flex-col h-screen w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold uppercase text-accent-300">
        <div className="title 2xl:py-[0rem]">
          {/* Learn more about useRef */}
          <h1
            ref={(el) => (titles.current[0] = el)}
            className="translate-y-96 overflow-visible"
          >
            JESSICA DO
          </h1>
        </div>
        <div
          ref={transitionImage}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        >
          <img
            src={darkHero}
            alt="Transition"
            className="w-[400px] h-auto object-cover"
          />
        </div>

        <div className=" title 2xl:py-[25rem]">
          <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96">
            JESSICA DO
          </h1>
        </div>
        {/* Clock Component */}
        <div ref={clockRef} className="bg-transparent z-0">
          <Clock />
        </div>
      </div>
    </section>
  );
}

export default Hero;
