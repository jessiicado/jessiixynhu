import React, { useRef, useEffect, useState } from "react";
import darkHero from "/src/assets/images/dark-hero.jpg";
import Clock from "../ui/Clock";
import gsap from "gsap";

function Hero() {
  const name = useRef(null); // Ref for name element
  const titleRef = useRef(null); // Ref for title element
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titleContent = ["student", "developer", "coffee lover", "creator"];
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
        y: 20, // Moves down into view
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
      className="hero relative flex w-full h-full select-none z-50 items-center justify-center"
      aria-label="hero"
    >
      <div className="flex h-screen w-full items-center justify-center">
        {/* Column 1 */}
        <div className="head flex flex-col items-center gap-[30rem] md:gap-[35rem] z-50 font-gambarino">
          <h1
            ref={titleRef} // Single ref for the title
            className="text-2xl font-medium"
          >
            Student {/* Default text that will be dynamically replaced */}
          </h1>
          <h1
            ref={name} // Single ref for the name, will also be scrambled
            className="text-3xl font-medium"
          >
            jessica do {/* Default text for the name */}
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
