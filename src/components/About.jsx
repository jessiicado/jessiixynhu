import React from "react";
import "./About.css";
import background from "../assets/background.jpg";
const About = () => {
  return (
    <section
      className="about-section mx-auto p-8"
      style={{ backgroundImage: background }}
      id="About"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="container relative top-50 left-10 leading-loose text-left text-xl about-left w-full md:w-1/2 p-6">
          <h2>
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

        <div className="about-right top-50 md:w-1/2 p-5 relative">
          {/* Insert Timeline  */}
          <div className="ml-2 mb-10">
            <div className="timeline-item1 bg-blue-100 rounded-lg p-1 shadow-md">
              2023 - Foster High School Diploma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
