import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion, useScroll, useTransform } from "framer-motion";

const Works = () => {
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

  const projects = [
    {
      title: "Portfolio Website",
      alt: "portfolio-website",
      link: "http://localhost:5173/#Projects",
      tech: ["2025", "HTML • CSS • JS", "REACT", "TAILWINDCSS"],
      desc: "You're already here!",
      image: "src/assets/images/portfolio-pic.png",
    },
    {
      title: "Valentine's Day Web App",
      alt: "valentines-day-app",
      link: "https://github.com/jessiicado/valentine",
      tech: ["2025", "HTML • CSS • JS", "TAILWINDCSS"],
      desc: "An interactive, playful web app where users can receive a fun and dynamic Valentine’s Day message.",
      image: "src/assets/images/valentine-pic.png",
    },
    {
      title: "Stock Market Simulator Discord Bot",
      alt: "portfolio-website",
      link: "https://github.com/jessiicado/calculator",
      tech: ["2025", "NODE.JS", "WORK-IN-PROGRESS"],
      desc: "A Discord bot that simulates stock trading with virtual currency, letting users buy, sell, and track stocks while mimicking real market trends.",
      image: "src/assets/images/discordbot.png",
    },
  ];

  return (
    <section
      alt="Projects"
      id="Projects"
      className="Projects h-full w-full relative"
    >
      <div className="Project-header -z-1 overflow-hidden" id="project-header">
        <Project id={1} />
      </div>

      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 font-general font-bold"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-150 object-cover"
            />
            <div className="p-6">
              <h3 className="text-3xl pb-5 font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className=" border-2 border-indigo-300 px-3 py-1 text-md rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a className="inline-block pt-5 text-gray-50 leading-8">
                {project.desc}
              </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
