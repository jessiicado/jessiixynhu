import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const isReload = () => {
    return window.location.reload();
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    if (!isMobile) setMenuOpen(false);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const ResumeRoute = () => {
    window.open(
      "https://drive.google.com/file/d/1LH8Lggvoi1BKTJ0Kckeyt-Tz4QUke85T/view?usp=sharing",
      "_blank"
    );
  };

  useEffect(() => {
    const createScrollTrigger = (triggerId, enterCallback, leaveCallback) => {
      ScrollTrigger.create({
        trigger: triggerId,
        start: "top 25%",
        end: "bottom 70%",
        onEnter: enterCallback,
        onLeaveBack: leaveCallback,
      });
    };

    // About Section ScrollTrigger
    createScrollTrigger(
      "#About",
      () => {
        gsap.to(".About", {
          opacity: 1,
          duration: 0.3,
          ease: "power1.in",
        });
      },
      () => {
        gsap.to(".About", {
          opacity: 0,
          duration: 0.3,
        });
      }
    );

    // Projects Section ScrollTrigger
    createScrollTrigger(
      "#Projects",
      () => {
        gsap.to("body", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });

        gsap.to(".resumebtn", {
          backgroundColor: "#ffffff",
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
      () => {
        gsap.to("body", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });

        gsap.to(".resumebtn", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    );

    // Contact Section ScrollTrigger
    createScrollTrigger(
      "#Contact",
      () => {
        gsap.to("body", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });

        gsap.to(".resumebtn", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
      () => {
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
      }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      [".logos", ".nav-links li", ".closemenu"],
      {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
      },
      "+=0.5" // Starts the navbar animation 0.5s before the logo animation finishes
    );
    tl.to(
      [".logos", ".nav-links li", ".closemenu"],
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "+=0.5" // Starts the navbar animation 0.5s before the logo animation finishes
    );
  }, []);

  return (
    <section className="entire-navbar fixed z-50">
      <div className="right-navbar">
        <nav className="Navigation">
          {/* NAV BAR LINKS */}
          <ul
            className={`nav-links transition-all duration-500 ease-in-out font-medium space-y-4 md:space-y-0 md:flex md:items-center md:justify-end ${
              menuOpen
                ? "flex flex-col absolute top-16 right-4 bg-zinc-400 shadow-lg p-6 rounded-lg"
                : "hidden"
            } md:flex md:space-x-6`}
          >
            {/* Close X Icon */}
            {menuOpen && (
              <li className="w-full flex justify-end">
                <button
                  className="close-menu "
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </li>
            )}

            <li>
              <a href="#Home">HOME</a>
            </li>
            <li>
              <a href="#About">ABOUT</a>
            </li>
            <li>
              <a href="#Projects">PROJECTS</a>
            </li>
            <li>
              <a href="#Contact">CONTACT</a>
            </li>
            <li>
              <div className="left-navbar">
                {/* RESUME BUTTON */}
                <div className="resumebtn bg-[#1e1e1e] px-4 py-2 font-epilogue text-white rounded-full">
                  <button
                    onClick={ResumeRoute}
                    style={{ cursor: "pointer" }}
                    className="resume-btn"
                  >
                    Resume
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logo */}
      <div
        className="logos absolute top-4 left-4"
        onClick={isReload}
        style={{ cursor: "pointer" }}
      >
        <svg
          width="45"
          height="75"
          viewBox="0 0 55 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Logos"
            d="M20.5858 42.3125V81.2188C21.7108 81.3646 22.7941 81.4792 23.8358 81.5625C24.8774 81.625 25.8983 81.6562 26.8983 81.6562C30.4191 81.6562 33.5753 81.2083 36.367 80.3125C39.1587 79.3958 41.5233 78.0208 43.4608 76.1875C45.3983 74.3333 46.8774 72.0312 47.8983 69.2812C48.9399 66.5104 49.4608 63.2604 49.4608 59.5312C49.4399 57.0729 49.1274 54.8958 48.5233 53C47.9191 51.1042 47.0753 49.4583 45.992 48.0625C44.9087 46.6458 43.6274 45.4688 42.1483 44.5312C40.6899 43.5729 39.0962 42.8021 37.367 42.2188C35.6587 41.6146 33.8462 41.1875 31.9295 40.9375C30.0337 40.6875 28.1066 40.5625 26.1483 40.5625C25.2108 40.5625 24.2733 40.5938 23.3358 40.6562C22.3983 40.7188 21.4399 40.8021 20.4608 40.9062C20.5024 41.1979 20.5337 41.4688 20.5545 41.7188C20.5753 41.9479 20.5858 42.1458 20.5858 42.3125ZM10.1482 39.875C11.9607 39.6458 13.5857 39.4479 15.0232 39.2812C16.4608 39.0938 17.8566 38.9375 19.2108 38.8125C20.5649 38.6875 21.9608 38.5938 23.3983 38.5312C24.8358 38.4688 26.4608 38.4375 28.2733 38.4375C29.8358 38.4375 31.2628 38.4792 32.5545 38.5625C33.8462 38.6458 35.0649 38.7917 36.2108 39C37.3774 39.1875 38.5128 39.4479 39.617 39.7812C40.742 40.0938 41.9191 40.4792 43.1483 40.9375C44.7941 41.5625 46.3045 42.4062 47.6795 43.4688C49.0753 44.5104 50.2733 45.7917 51.2733 47.3125C52.2733 48.8333 53.0441 50.6042 53.5858 52.625C54.1483 54.6458 54.4295 56.9479 54.4295 59.5312C54.4087 62.5938 54.0128 65.3229 53.242 67.7188C52.4712 70.1146 51.3983 72.2188 50.0233 74.0312C48.6483 75.8438 47.0128 77.3854 45.117 78.6562C43.242 79.9271 41.2003 80.9583 38.992 81.75C36.7837 82.5417 34.4503 83.1146 31.992 83.4688C29.5337 83.8229 27.0441 84 24.5233 84C24.3149 84 23.6274 84 22.4608 84C21.3149 84.0208 20.0858 84.0833 18.7733 84.1875C17.4608 84.2917 16.3149 84.4062 15.3357 84.5312L15.1482 84.2188C15.5649 83.6146 15.7732 82.5104 15.7732 80.9062V48C15.7732 46.625 15.7107 45.4792 15.5857 44.5625C15.4607 43.625 15.2316 42.875 14.8982 42.3125C14.5649 41.75 14.0962 41.3542 13.492 41.125C12.8878 40.875 12.3149 40.75 11.7732 40.75C11.2316 40.75 10.8878 40.75 10.742 40.75C10.5962 40.75 10.4399 40.7604 10.2732 40.7812L10.1482 39.875Z"
            fill="black"
          />
          <path
            id="Logos"
            d="M0 59.9688V59.3288L4.48 58.4967V20.4807C4.48 19.4994 4.07467 18.5394 3.264 17.6007C2.45333 16.6194 1.36533 15.8514 0 15.2967V14.6567H9.984L38.784 51.2647H39.616V30.8487C39.616 29.3554 39.488 27.9261 39.232 26.5607C38.976 25.1954 38.5493 23.9367 37.952 22.7847C37.3973 21.5901 36.6933 20.5021 35.84 19.5207C34.9867 18.5394 33.9627 17.7074 32.768 17.0247C31.616 16.2994 30.2933 15.7234 28.8 15.2967V14.6567H45.44V15.2967L40.576 16.1287V59.9688H36.608L6.272 21.5687H5.44V40.8968C5.44 42.6888 5.568 44.3741 5.824 45.9528C6.12267 47.4888 6.57067 48.9394 7.168 50.3047C7.76533 51.6274 8.53333 52.8647 9.472 54.0168C10.4107 55.1261 11.5413 56.1287 12.864 57.0247C14.1867 57.9207 15.744 58.6888 17.536 59.3288V59.9688H0Z"
            fill="black"
          />
          <path
            id="Logos"
            d="M31.9139 5.39062V49.7344C31.9139 52.1094 31.6639 54.375 31.1639 56.5312C30.6639 58.6562 30.0701 60.4219 29.3826 61.8281C28.6951 63.2031 27.9295 64.4688 27.0858 65.625C26.242 66.7812 25.5389 67.6094 24.9764 68.1094C24.4451 68.6406 24.0076 69.0156 23.6639 69.2344C22.7889 69.6719 21.2889 69.8906 19.1639 69.8906C15.0701 69.8906 11.1639 68.8594 7.44512 66.7969C8.60137 64.6719 10.5545 62.6562 13.3045 60.75L13.9607 61.2656C16.0233 64.6406 18.4608 66.3281 21.2733 66.3281C21.8358 66.3281 22.3201 66.1875 22.7264 65.9062C23.1326 65.5938 23.4764 65.0312 23.7576 64.2188C24.0701 63.375 24.3045 62.375 24.4608 61.2188C24.6483 60.0312 24.8045 58.4375 24.9295 56.4375C25.0545 54.4062 25.1326 52.1875 25.1639 49.7812C25.1951 47.3438 25.2108 44.3438 25.2108 40.7812V14.0156C25.2108 9.89062 24.7576 7.0625 23.8514 5.53125C22.9451 3.96875 21.0858 3.1875 18.2733 3.1875H16.9139L16.7264 2.29688C21.8826 0.765625 26.617 0 30.9295 0C31.5858 1.65625 31.9139 3.45312 31.9139 5.39062Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Mobile Menu Button */}
      {isMobile && !menuOpen && (
        <button
          className="menu-open fixed top-1 right-1 z-50"
          onClick={() => setMenuOpen(true)}
          aria-label="Toggle Menu"
        >
          <Menu size={40} />
        </button>
      )}
    </section>
  );
}

export default Navbar;
