import React from "react";
import gsap from "gsap";

const Projects = () => {
  const Project_Scroll = () => {
    gsap.timeline().from("#project-header", { y: 25, ease: "back" });
  };

  return (
    <section alt="Projects" id="Projects" className="h-screen w-full font-">
      <div
        className="Project-header -z-1"
        id="project-header"
        onScroll={Project_Scroll}
      >
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
