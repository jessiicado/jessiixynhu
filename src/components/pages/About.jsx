import React from "react";
import coverPhoto from "/src/assets/images/coverphoto.jpg";

const About = () => {
  return (
    <section className="about">
      <section
        className="about-section flex justify-end items-center h-screen w-full"
        id="About"
      >
        <div className="container text-left text-2xl md:w-1/2 p-10 font-general">
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
