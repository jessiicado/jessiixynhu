import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "/src/assets/images/logo-icon.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    if (!isMobile) setMenuOpen(false);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const ResumeRoute = () => {
    window.open(
      "https://drive.google.com/file/d/1TFGSA4vUx0toEmaZjnIWHsd-pirPS-BS/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="entire-navbar fixed z-50">
      {/* LEFT NAVBAR */}
      <div className="left-navbar ">
        {/* RESUME BUTTON */}
        <div className="resumebtn absolute top-[2rem] left-[6rem] bg-[#1e1e1e] px-4 py-2 font-normal font-pixel text-white rounded-full">
          <button
            onClick={ResumeRoute}
            style={{ cursor: "pointer" }}
            className="resume-btn"
          >
            Resume{" "}
          </button>
        </div>
      </div>

      <div className="right-navbar">
        <nav className="Navigation">
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className={`menu-open xs:fixed xs:top-[1rem] `}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          )}

          {/* NAV BAR LINKS */}
          <ul className="nav-links flex justify-end">
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
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
