import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    //if isMobile is true, add the hidden class, else add the flex class
    <nav className="Navigation">
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      )}

      <ul
        className={`nav-links ${
          isMobile ? (menuOpen ? "open" : "hidden") : ""
        }`}
      >
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

      <div className="resumebtn fixed left-20 top-5">
        <button onClick={ResumeRoute} className="resume-btn">
          Resume{" "}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
