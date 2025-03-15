import React, { useRef, useEffect } from "react";
import darkHero from "/src/assets/images/dark-hero.jpg";
import Clock from "../ui/Clock";
import gsap from "gsap";

function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -0,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

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
        titles.current,
        { y: -10, duration: 2, ease: "power4.inOut" },
        "-=2.5"
      )
      .from(scroll.current, { opacity: 0, duration: 1, ease: "out" }, "-=2");
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
        <div className=" title 2xl:py-[25rem]">
          <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96">
            JESSICA DO
          </h1>
        </div>
        <div className="bg-transparent z-0 color-black">
          <Clock />
        </div>
      </div>
      {/* <div
        ref={imgContainer}
        className="absolute mx-auto  w-[55%] overflow-hidden rounded-md"
      >
        <img
          ref={img}
          className=" scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div> */}
    </section>
  );
}

export default Hero;
