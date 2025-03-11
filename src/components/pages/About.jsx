import React, { useEffect } from "react";
import coverPhoto from "/src/assets/images/coverphoto.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".ABOUT-TITLE",
      { opacity: 0, y: -150 }, // Start hidden and moved down
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#About",
          start: "top 80%", // Trigger when the section is about to enter viewport
          end: "top 50%", // Fully revealed when the section is 50% in view
          oncec: true,
        },
      }
    );
  }, []);
  return (
    <section className="About">
      <section
        className="about-section flex justify-end items-center bg-white h-screen w-full"
        id="About"
      >
        <div className="container text-left text-2xl md:w-1/2 p-20 font-general">
          <div className="ABOUT-TITLE w-1/2 justify-center items-center whitespace-nowrap font-telma">
            <h1 className="flex text-9xl">ABOUT</h1>
          </div>
          {/* <div className=" w-1/7 pt-10 whitespace-nowrap font-general">
            <h1 className="flex text-xl border-b-1">JESSICA DO</h1>
          </div> */}
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
          <img
            src={coverPhoto}
            alt="coverphoto"
            className="coverphoto rounded-full w-1/4 right-[10rem] absolute z-25"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
