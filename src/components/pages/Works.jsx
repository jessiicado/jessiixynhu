import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import discordbot from "/src/assets/images/discordbot.png";
import valentinepic from "/src/assets/images/valentine-pic.png";
import darkHero from "/src/assets/images/dark-hero.jpg";
import PropTypes from "prop-types";

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
          setYValues([-100, -200]); // Medium shift for tablets
        } else if (window.innerWidth >= 1280) {
          setYValues([-50, -600]); // Medium shift for tablets
        } else if (window.innerWidth >= 320) {
          setYValues([50, -100]); // Medium shift for tablets
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
        id={`project-title-${id}`}
        ref={ref}
        className="xs:text-[4rem] xs:tracking-widest text-[5rem] pb-10 z-0 sm:text-[8rem] md:text-[9rem] md:tracking-widest lg:tracking-widest lg:text-[11rem] xl:text-[15rem] 2xl:text-[20rem] 2xl:pb-10 justify-center items-center"
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
      image: darkHero,
    },
    {
      title: "Valentine's Day Web App",
      alt: "valentines-day-app",
      link: "https://github.com/jessiicado/valentine",
      tech: ["2025", "HTML • CSS • JS", "TAILWINDCSS"],
      description:
        "An interactive, playful web app where users can receive a fun and dynamic Valentine’s Day message.",
      image: valentinepic,
    },
    {
      title: "Stock Market Simulator Discord Bot",
      alt: "portfolio-website",
      link: "https://github.com/jessiicado/calculator",
      tech: ["2025", "NODE.JS", "WORK-IN-PROGRESS"],
      description:
        "A Discord bot that simulates stock trading with virtual currency, letting users buy, sell, and track stocks while mimicking real market trends.",
      image: discordbot,
    },
  ];

  Project.propTypes = {
    id: PropTypes.number, // or PropTypes.string, depending on usage
  };

  return (
    <section id="Projects" className="Projects h-full w-full relative">
      <div className="Project-header -z-1 overflow-hidden" id="project-header">
        <Project id={1} />
      </div>

      {/* Project Cards */}
      <div className="cards grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 xs:justify-center xs:grid-cols-1 xs:gap-5 sm:px-10 sm:justify-center sm:items-center md:gap-15 lg:justify-center lg:gap-5 xl:px-10 xl:gap-20 2xl:gap-10 xl:gap-10 2xl:gap-10 justify-items-center items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-zinc-800 rounded-md overflow-hidden xs:w-[15rem] sm:w-full sm:h-full md:w-full lg:w-full lg:h-full xl:w-[25rem] xl:h-full 2xl:w-full 2xl:h-full shadow-lg transition-all duration-300 hover:scale-105"
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
                className="w-full h-full object-cover"
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
