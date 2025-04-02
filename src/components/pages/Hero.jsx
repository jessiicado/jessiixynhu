import React, { useRef, useEffect, useState } from "react";
import darkHero from "/src/assets/images/dark-hero.jpg";
import Clock from "../ui/Clock";
import gsap from "gsap";

function Hero() {
  const name = useRef(null); // Ref for name element
  const titleRef = useRef(null); // Ref for title element
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titleContent = ["student", "developer", "creator"];
  const nameContent = "jessica do"; // Name content to scramble

  // Function to scramble text
  const scrambleText = (target, finalText, duration = 1) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"; // Define characters
    let iterations = Math.floor(duration * 60); // Random iterations
    let currentIteration = 0; // Start iteration at index 0

    function updateText() {
      let scrambled = finalText
        .split("")
        .map((char, index) => {
          if (currentIteration / iterations > index / finalText.length) {
            return finalText[index]; // Reveal correct character
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      target.innerText = scrambled;
      currentIteration++;

      if (currentIteration <= iterations) {
        requestAnimationFrame(updateText);
      }
    }

    updateText();
  };

  useEffect(() => {
    // Scramble the initial title and name
    if (titleRef.current) {
      scrambleText(titleRef.current, titleContent[currentTitleIndex], 4);
    }
    if (name.current) {
      scrambleText(name.current, nameContent, 4);
    }

    // Set interval to change the title every 5 seconds
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % titleContent.length;
        // Scramble the next title
        if (titleRef.current) {
          scrambleText(titleRef.current, titleContent[nextIndex], 4);
        }
        return nextIndex;
      });
    }, 5000); // 5 seconds interval

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on mount

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
      titleRef.current,
      {
        y: 100, // Moves down into view
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      "+=0.3"
    );

    // Name appears from above and eases down
    tl.to(
      name.current,
      {
        y: 20, // Moves down into view
        opacity: 1,
        duration: 3.5,
        ease: "power3.out",
      },
      "-=1.7"
    ); // Slight overlap with image animation
  }, []);

  return (
    <section
      id="Home"
      className="hero relative flex w-full h-full z-50 items-center justify-center"
      aria-label="hero"
    >
      <div className="flex flex-col h-screen w-full items-center 2xl:text-[2rem] lg:translate-y-[-1rem] lg:text-8vw md:text-[1.5rem] font-gambarino lowercase">
        <div className="title 2xl:py-0 translate-y-[12rem] flex flex-col gap-y-[25rem] md: gap-y-[30rem] xl:gap-y-[32rem] 2xl:gap-y-[35rem] z-50 2xl:translate-y-[15rem]">
          <h1
            ref={titleRef}
            className="opacity-0 justify-center items-center"
          ></h1>
          <h1 ref={name} className="opacity-0">
            Jessica Do
          </h1>
        </div>

        {/* Image (kept for visual balance) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <img
            ref={transitionImage}
            src={darkHero}
            alt="Transition"
            className="w-[400px] h-auto object-cover"
          />
        </div>

        {/* Column 3 - Clock */}
        <div className="bg-transparent uppercase">
          <Clock />
        </div>
      </div>
    </section>
  );
}

export default Hero;
