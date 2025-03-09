import React, { useRef, useEffect } from "react";
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
      translateX: -40,
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
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, { opacity: 0, duration: 1, ease: "out" }, "-=2");
  }, []);

  return (
    <section
      id="hero"
      className="hero relative flex w-full h-screen select-none items-center justify-center"
      aria-label="hero"
    >
      <div className="z-10 flex flex-col  w-full font-display items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold uppercase text-accent-300">
        <div className="title 2xl:py-16">
          {/* Learn more about useRef */}
          <h1
            ref={(el) => (titles.current[0] = el)}
            className="translate-y-96 overflow-visible"
          >
            JESSICA DO
          </h1>
        </div>
        <div className="title 2xl:py-16">
          {/* Learn more about useRef */}
          <h1
            ref={(el) => (titles.current[1] = el)}
            className="translate-y-96 overflow-visible text-transparent"
          >
            JESSICA DO
          </h1>
        </div>
        <div className="title 2xl:py-16">
          {/* Learn more about useRef */}
          <h1
            ref={(el) => (titles.current[2] = el)}
            className="translate-y-96 "
          >
            JESSICA DO
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
