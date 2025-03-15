import React, { useEffect, useRef } from "react";
import coverPhoto from "/src/assets/images/coverphoto.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion"; // Fixed incorrect import from "motion/react"
gsap.registerPlugin(ScrollTrigger);

//parallax function to return transformation
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

//utilizes scroll to apply parallax function
function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <motion.img
      ref={ref}
      src={coverPhoto}
      alt="coverphoto"
      className="coverphoto rounded-full w-1/4 right-[10rem] absolute z-"
      style={{ y }}
    />
  );
}

const About = () => {
  const ref = useRef(null); // Define ref here for the <img> element

  //uses gsap scrolltrigger to bring about-title to page
  useEffect(() => {
    gsap.fromTo(
      ".ABOUT-TITLE",
      { opacity: 0, y: -100 }, // Start hidden and moved down
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#About",
          start: "top 80%", // Trigger when the section is about to enter viewport
          end: "top 50%", // Fully revealed when the section is 50% in view
          once: true, // Fixed typo here
        },
      }
    );
  }, []);

  return (
    <section className="About even:bg-gray-200 transition">
      <section
        className="about-section flex justify-end z-0 sticky items-center h-screen w-full"
        id="About"
      >
        <div className="container text-left text-2xl md:w-1/2 p-20 font-general">
          <div className="ABOUT-TITLE w-1/2 justify-center items-center whitespace-nowrap font-pixel">
            <h1 className="flex text-9xl">ABOUT</h1>
          </div>
          <h2 className="pt-20 font-tabular">
            I’m a passionate Computer Science student with a drive to turn ideas
            into innovative realities. With a keen interest in 3D modeling and
            software development, I’m always eager to dive deeper into data
            science and machine learning. When I’m not coding, you can usually
            find me at a local coffee shop fueling up for the next big project
            or unwinding with a good game. I believe in the power of lifelong
            learning (and a generous amount of coffee) to keep pushing me
            forward. Always open to connecting and sharing ideas—let’s
            collaborate!
          </h2>
        </div>
        <div
          className="Profile flex justify-end items-center h-screen w-full"
          id="Profile"
        >
          <Image id={1} />
        </div>
      </section>
    </section>
  );
};

export default About;
