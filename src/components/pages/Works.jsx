import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  // Define Project component to animate using ScrollTrigger
  function Project({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const [yValues, setYValues] = useState([-100, -600]); // Default for large screens

    useEffect(() => {
      function updateBreakpoints() {
        if (window.innerWidth >= 640) {
          setYValues([40, -100]); // Smaller shift for small screens
        } else if (window.innerWidth >= 1024) {
          setYValues([-50, -50]); // Medium shift for tablets
        } else if (window.innerWidth >= 1280) {
          setYValues([-50, -600]); // Medium shift for tablets
        } else {
          setYValues([-100, -600]); // Default for large screens
        }
      }

      updateBreakpoints();
      window.addEventListener("resize", updateBreakpoints);

      return () => window.removeEventListener("resize", updateBreakpoints);
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], yValues);

    return (
      <motion.h1
        ref={ref}
        className="text-[5rem] justify-center items-center md:text-[7rem] lg:text-[10rem] xl:text-[15rem] 2xl:text-[20rem] 2xl:pb-10 pb-20 z-0"
        style={{ y }}
      >
        PROJECTS
      </motion.h1>
    );
  }
  // Define project data
  const projects = [
    {
      title: "Portfolio Website",
      alt: "portfolio-website",
      link: "http://localhost:5173/#Projects",
      tech: ["2025", "HTML • CSS • JS", "REACT", "TAILWINDCSS"],
      description: "You're already here!",
      image: "src/assets/images/dark-hero.png",
    },
    {
      title: "Valentine's Day Web App",
      alt: "valentines-day-app",
      link: "https://github.com/jessiicado/valentine",
      tech: ["2025", "HTML • CSS • JS", "TAILWINDCSS"],
      description:
        "An interactive, playful web app where users can receive a fun and dynamic Valentine’s Day message.",
      image: "src/assets/images/valentine-pic.png",
    },
    {
      title: "Stock Market Simulator Discord Bot",
      alt: "portfolio-website",
      link: "https://github.com/jessiicado/calculator",
      tech: ["2025", "NODE.JS", "WORK-IN-PROGRESS"],
      description:
        "A Discord bot that simulates stock trading with virtual currency, letting users buy, sell, and track stocks while mimicking real market trends.",
      image: "src/assets/images/discordbot.png",
    },
  ];

  return (
    <section id="Projects" className="Projects h-full w-full relative">
      <div className="Project-header -z-1 overflow-hidden" id="project-header">
        <Project id={1} />
      </div>

      {/* Project Cards */}
      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-25 lg:px-10 xl:px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-zinc-800 rounded-md overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-100 md:h-45 lg:w-full lg:h-75 xl:w-full xl:h-150 object-cover"
              />
              <div className="p-4 md:p-6 lg:p-6 xl:p-6">
                <h3 className="text-2xl py-2 md:py-2 lg:text-3xl xl:text-3xl lg:pb-5 xl:pb-5 font-semibold mb-2 font-inter font-medium">
                  {project.title}
                </h3>
                <p className="text-gray-200 xl:text-lg 2xl:text-xl font-inter font-normal">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 pt-5 mt-3">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="border-2 font-inter font-normal border-indigo-300 text-sm py-1 px-2 md:py-0 lg:px-3 lg:py-1 lg:text-md xl:px-3 xl:py-1 xl:text-md 2xl:text-lg rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
