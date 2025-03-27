import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const valentineLink = () => {
    window.location.href = "https://jessiicado.github.io/valentine/";
  };
  function Project({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-100, -600]);

    return (
      <motion.h1 ref={ref} className=" text-10xl z-0" style={{ y }}>
        PROJECTS
      </motion.h1>
    );
  }

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#Projects",
      start: "top 80%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to("#proj1", {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".Project-2", {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to("proj2", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("Project-2", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  return (
    <section
      alt="Projects"
      id="Projects"
      className="Projects h-[150rem] w-full relative"
    >
      <div className="Project-header -z-1 overflow-hidden" id="project-header">
        <Project id={1} />
      </div>

      <div className="projectsection grid grid-cols-3 justify-center place-items-center">
        <div className="proj1 h-100 w-9/12 bg-lime-300" id="proj1">
          <div className="card-info flex flex-col">
            <div className="tech-stack flex flex-row gap-2">
              <h1>JAVASCRIPT</h1>
              <h1>HTML/CSS</h1>
              <h1>REACT</h1>
            </div>
          </div>
        </div>
        <div className="proj2 h-100 w-9/12 bg-lime-300" id="proj2">
          <h1>Hello</h1>
        </div>
        <div className="proj1 h-100 w-9/12 bg-lime-300" id="proj3">
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
