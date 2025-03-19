import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Contact = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#Contact",
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#000000",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#ffffff",
          color: "#000000",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  return (
    <section
      className="Contact w-full h-screen flex items-center justify-center flex-col"
      id="Contact"
    >
      <div className="info text-center flex flex-col items-center">
        <div className="justify-center flex items-center">
          <h1 className="text-7xl font-tabular font-bold">LET'S TALK!</h1>
        </div>
        <div className="infodesc flex justify-center p-50">
          <h3 className="flex flex-col text-3xl font-tabular">
            Got questions? Or just want to chat about the wonders of tech and
            life? Hit me up! Whether you're looking to collaborate, share ideas,
            or just want to say hi, I’d love to hear from you. Let’s connect and
            make something awesome together!
          </h3>
        </div>
      </div>

      <div className="communication-container grid grid-cols-2 gap-8 gap-y-12 w-full max-w-4xl font-tabular text-3xl">
        <div className="communication flex flex-col items-start z-50">
          <address>
            <h1 href="mailto:jessicanhu.do@gmail.com">
              jessicanhu.do@gmail.com
            </h1>
            <h2>713-259-0320</h2>
          </address>
        </div>

        <div className="social-icons flex flex-col items-end gap-4">
          <a
            className="linkedin-icon flex flex-row items-center gap-x-2 text-xl"
            target="_blank"
            href="https://www.linkedin.com/in/jessicanhudo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            LINKEDIN
          </a>
          <a
            className="github-icon flex flex-row items-center gap-x-2 text-xl"
            target="_blank"
            href="https://www.github.com/jessiicado"
          >
            <svg
              className="flex justify-start items-left"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>{" "}
            GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
