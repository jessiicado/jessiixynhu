import React, { useEffect } from "react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      ".Project-header",
      { opacity: 0, y: -150 }, // Start hidden and moved down
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#Projects",
          start: "top 80%", // Trigger when the section is about to enter viewport
          end: "top 50%", // Fully revealed when the section is 50% in view
          oncec: true,
        },
      }
    );
  }, []);

  return (
    <section alt="Projects" id="Projects" className="Projects h-screen w-full">
      <div className="Project-header -z-1 overflow-hidden" id="project-header">
        PROJECTS
      </div>
      <div className="Project-1" id="proj">
        Productivity App
      </div>
      <div className="Project-2" id="proj">
        Health Tracker
      </div>
      <div className="Project-3" id="proj">
        Goon App
      </div>
    </section>
  );
};

export default Projects;
