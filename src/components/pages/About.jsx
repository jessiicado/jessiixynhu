import React from "react";

const About = () => {
  return (
    <section className="about">
      <section
        className="about-section flex justify-end items-center h-screen w-full"
        id="About"
      >
        <div className="container text-right text-xl md:w-1/2 p-6">
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
      </section>
      <div
        className="Profile flex justify-start items-center h-screen w-full"
        id="Profile"
      >
        {/* <img src={nature} alt="nature" className="nature" /> */}
      </div>
    </section>
  );
};

export default About;
