import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  // function useParallax(value, distance) {
  //   return useTransform(value, [0, 1], [-distance, distance]);
  // }

  const valentineLink = () => {
    window.location.href = "https://jessiicado.github.io/valentine/";
  };
  function Project({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

    return (
      <motion.h1 ref={ref} className="pt-[0rem] text-10xl z-0" style={{ y }}>
        PROJECTS
      </motion.h1>
    );
  }

  return (
    <section alt="Projects" id="Projects" className="Projects h-[300vh] w-full">
      <div className="Project-header -z-1 overflow-hidden" id="project-header">
        <Project id={1} />
      </div>
      <div className="relative w-full h-full">
        <div className="wholesection relative w-full h-full">
          <div className="Project-1" id="proj1">
            {/* Green background rotated element */}
            <div className="portfolio absolute w-[700px] h-[700px] top-0 left-[10rem]">
              <div className="card1 absolute w-[700px] h-[700px] top-[2rem] left-0 bg-[url(src/assets/images/portfolio-pic.png)] hover:opacity-50 transition-opacity duration-200" />
              {/* Month/Year display */}
              <div className="date absolute top-[43rem] left-[1rem] text-4xl font-black font-bold z-25">
                <h1 className="text-black">JAN 2025</h1>
              </div>
              <div className="techstack absolute top-[48rem] text-xl">
                <ul className="flex flex-row gap-2">
                  <li className="border-2 py-2 px-4 rounded-full">
                    <a>JAVASCRIPT</a>
                  </li>
                  <li className="border-2 py-2 px-4 rounded-full">
                    <a>HTML/CSS</a>
                  </li>
                  <li className="border-2 py-2 px-4 rounded-full">
                    <a>REACT</a>
                  </li>
                  <li className="border-2 py-2 px-4 rounded-full">
                    <a>TAILWINDCSS</a>
                  </li>
                  <li className="border-2 py-2 px-4 rounded-full">
                    <a>GSAP</a>
                  </li>
                </ul>
              </div>
              <div className="absolute top-[52rem] font-bold font-gerneral">
                <h1 className="text-3xl">PORFOLIO WEBSITE</h1>
                <p className="text-2xl pt-5 font-normal">
                  You're already here!
                </p>
              </div>
            </div>
          </div>

          <div className="Project-2" id="proj2"></div>
          <div className="valentine absolute w-[700px] h-[700px] top-[5rem] right-[10rem]">
            <div
              className="eachcard absolute w-[700px] h-[700px] top-[2rem] hover:opacity-50 transition-opacity duration-200 left-0 bg-[url(src/assets/images/valentine-pic.png)]"
              onClick={valentineLink}
              style={{ cursor: "pointer" }}
            />
            <link href="https://jessiicado.github.io/valentine/"></link>
            {/* Month/Year display */}
            <div className="date absolute top-[40rem] left-[2rem] text-6xl font-black z-25">
              <h1 className="text-black">JAN 2024</h1>
            </div>
            <div className="techstack absolute top-[48rem] text-xl">
              <ul className="flex flex-row gap-2">
                <li className="border-2 py-2 px-4 rounded-full">
                  <a>JAVASCRIPT</a>
                </li>
                <li className="border-2 py-2 px-4 rounded-full">
                  <a>HTML/CSS</a>
                </li>
              </ul>
            </div>
            <div className="absolute top-[52rem] font-bold font-gerneral">
              <h1 className="text-3xl">VALENTINE'S DAY WEB APP</h1>
              <p className="text-2xl pt-5 font-normal">
                Website utilized for that special someone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
