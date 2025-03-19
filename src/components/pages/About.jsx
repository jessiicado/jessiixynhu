import React, { useEffect, useRef, useState } from "react";
import coverPhoto from "/src/assets/images/coverphoto.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <>
      <motion.img
        ref={ref}
        src={coverPhoto}
        alt="coverphoto"
        className="coverphoto rounded-full max-w-[30%] max-h-[30%] object-cover absolute right-[7rem] z-10"
        style={{ y }}
      />
    </>
  );
}

const About = () => {
  const [textContent, setTextContent] = useState(
    "I’m a passionate Computer Science student with a drive to turn ideas into innovative realities. With a keen interest in 3D modeling and software development..."
  );
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
      className="about-section flex justify-end items-center h-[150vh] w-full relative"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "sticky",
      }}
    >
      <div className="container text-left text-2xl z-10 md:w-1/2 px-20 py-0 font-general sticky">
        <div className="ABOUT-TITLE w-1/2 justify-center items-center whitespace-nowrap font-black">
          <h1 className="about-text flex text-9xl">ABOUT</h1>
        </div>
        <h2 className="pt-20 font-black">{textContent}</h2>
      </div>
      <div className="Profile flex justify-end items-center h-screen z-0 w-full">
        <Image id={1} />
      </div>
    </section>
  );
};

export default About;
