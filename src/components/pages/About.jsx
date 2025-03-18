import React, { useEffect, useRef } from "react";
import coverPhoto from "/src/assets/images/coverphoto.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.img
      ref={ref}
      src={coverPhoto}
      alt="coverphoto"
      className="coverphoto rounded-full w-1/4 right-[10rem] absolute"
      style={{ y }}
    />
  );
}

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".ABOUT-TITLE",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#About",
          start: "top 80%",
          end: "top 50%",
          once: true,
        },
      }
    );

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
        }); // Change logo color back to black
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
        }); // Change logo color back to black
      },
    });
  }, []);

  return (
    <section
      id="About"
      className="about-section flex justify-end sticky items-center h-screen w-full"
    >
      <div className="container text-left text-2xl z-0 md:w-1/2 p-20 font-general">
        <div className="ABOUT-TITLE w-1/2 justify-center items-center whitespace-nowrap font-black">
          <h1 className="flex text-9xl">ABOUT</h1>
        </div>
        <h2 className="pt-20 font-black">
          I’m a passionate Computer Science student with a drive to turn ideas
          into innovative realities. With a keen interest in 3D modeling and
          software development, I’m always eager to dive deeper into data
          science and machine learning. When I’m not coding, you can usually
          find me at a local coffee shop fueling up for the next big project or
          unwinding with a good game. I believe in the power of lifelong
          learning (and a generous amount of coffee) to keep pushing me forward.
          Always open to connecting and sharing ideas—let’s collaborate!
        </h2>
      </div>
      <div className="Profile flex justify-end items-center h-screen w-full">
        <Image id={1} />
      </div>
    </section>
  );
};

export default About;
