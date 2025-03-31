import { useRef, useEffect } from "react";
import darkHero from "/src/assets/images/dark-hero.jpg";
import Clock from "../ui/Clock";
import gsap from "gsap";

function Hero() {
  const titles = useRef([]);
  const transitionImage = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });

    // Transition image appears first
    tl.to(transitionImage.current, {
      opacity: 1,
      scale: 1.2,
      duration: 1.5,
      ease: "power3.inOut",
    });

    // Title appears from above and eases down
    tl.to(
      [titles.current[0], titles.current[1]], // Titles appear simultaneously
      {
        y: 20, // Moves down into view
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      "+=0.3" // Slight overlap with image animation
    );
  }, []);

  return (
    <section
      id="Home"
      className="hero relative flex w-full h-full select-none z-50 items-center justify-center"
      aria-label="hero"
    >
      <div className="flex flex-col h-screen w-full items-center text-title 2xl:text-[8vw] lg:translate-y-[-1rem] lg:ext-8vw md:text-[6vw] 2xl:space-y-16 font-bold uppercase text-accent-300">
        <div className="title 2xl:py-0 translate-y-[-1rem]">
          <h1 ref={(el) => (titles.current[0] = el)} className=" opacity-0">
            JESSICA DO
          </h1>
        </div>

        {/* Image that transitions in */}
        <div
          ref={transitionImage}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-0"
        >
          <img
            src={darkHero}
            alt="Transition"
            className="w-[400px] h-auto object-cover"
          />
        </div>

        <div className="title 2xl:py-[25rem] translate-y-[-2rem] lg:translate-y-[1rem]">
          <h1 ref={(el) => (titles.current[1] = el)} className=" opacity-0">
            JESSICA DO
          </h1>
        </div>

        {/* Clock Component inside a container */}
        <div className="bg-transparent z-50">
          <Clock />
        </div>
      </div>
    </section>
  );
}

export default Hero;
