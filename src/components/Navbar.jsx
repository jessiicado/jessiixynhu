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
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
    </nav>
  );
}

export default Navbar;
