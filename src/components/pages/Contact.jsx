import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import coverPhoto from "/src/assets/images/coverphoto.jpg";

const Contact = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#Contact",
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.3,
          ease: "power1.inOut",
        });
        gsap.to(".cards", {
          color: "#ffffff",
          duration: 0.3,
          ease: "power1.inOut",
        });
        gsap.to(".Footer", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.3,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.3,
          ease: "power1.inOut",
        });
        gsap.to(".cards", {
          color: "#ffffff",
          duration: 0.3,
          ease: "power1.inOut",
        });
        gsap.to(".Footer", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.3,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  return (
    <section
      id="Contact"
      className="Contact flex h-screen w-full items-center relative justify-center px-6"
    >
      {/* Left Section - Contact Info */}
      <div className="leftsection flex flex-col items-center text-start font-general font-bold md:w-5/12 gap-y-10">
        <img
          className="rounded-full h-50 w-50 lg:h-72 lg:w-72 xl:h-72 xl:w-72 object-cover"
          src={coverPhoto}
          alt="coverphoto"
        />
        <ul className="text-xl gap-2 flex flex-col lg:text-2xl lg:gap-8 xl:text-2xl xl:gap-8 items-start">
          <li>
            <a
              href="mailto:jessicanhu.do@gmail.com"
              className="hover:text-indigo-300 flex items-center gap-2"
            >
              jessicanhu.do@gmail.com
            </a>
          </li>
          <li className="flex flex-col gap-y-5">
            <a
              className="text-xl lg:text-2xl xl:text-2xl hover:text-indigo-300 flex-row flex gap-2 items-center"
              href="tel:713-259-0320"
              alt="call 713-259-0320"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.26416 12.13C1.72916 26.9108 13.8567 38.75 28.75 38.75C34.4442 38.75 38.75 34.3042 38.75 28.6925C38.75 27.943 38.5253 27.2108 38.1051 26.5902C37.6849 25.9696 37.0884 25.4891 36.3925 25.2108L31.255 23.1558C30.4222 22.8226 29.5099 22.7411 28.6312 22.9213C27.7525 23.1016 26.946 23.5358 26.3117 24.17L23.7483 26.7342C23.635 26.8475 23.5075 26.8608 23.43 26.8375C21.0087 26.0981 18.8061 24.7751 17.0159 22.9849C15.2257 21.1947 13.9028 18.9922 13.1633 16.5708C13.1392 16.4925 13.1525 16.365 13.2658 16.2517L15.83 13.6883C16.4642 13.054 16.8984 12.2475 17.0787 11.3688C17.2589 10.4901 17.1774 9.57781 16.8442 8.745L14.7892 3.6075C14.5109 2.91161 14.0304 2.31508 13.4098 1.89487C12.7892 1.47466 12.057 1.25004 11.3075 1.25C5.17 1.25 1.16916 6.13417 1.26416 12.13Z"
                  fill="black"
                />
              </svg>
              713-259-0320
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/jessicanhudo"
              className="text-xl lg:text-2xl xl:text-2xl hover:text-indigo-300 flex-row flex gap-2 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://www.github.com/jessiicado"
              className="text-xl lg:text-2xl xl:text-2xl hover:text-indigo-300 flex-row gap-2 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-2/3 w-[2px] bg-indigo-200 mx-6"></div>

      {/* Right Section - Message */}
      <div className="rightsection flex flex-col justify-center items-center text-center md:w-5/12 p-6">
        <h3 className="text-2xl lg:text-4xl xl:text-4xl font-tabular">
          Feel free to reach out! I'd love to hear from you, whether it's for a
          project, a question, or just to chat. Let's connect!
        </h3>
        <h2 className="text-3xl pt-10">⊹₊ ˚‧︵‿₊୨୧₊‿︵‧ ˚ ₊⊹</h2>
      </div>
    </section>
  );
};

export default Contact;
