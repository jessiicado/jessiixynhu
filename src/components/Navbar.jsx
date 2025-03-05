import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    //if isMobile is true, add the hidden class, else add the flex class
    <nav className={`Navigation ${isMobile ? "hidden" : "flex"}`}>
      <a href="#Home">HOME</a>
      <a href="#About">ABOUT</a>
      <a href="#Projects">PROJECTS</a>
      <a href="#Contact">CONTACT</a>

      {/* Navigation Bar for Mobile Screens */}
      {isMobile && (
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Dropdown Menu */}
      {isMobile && isOpen && (
        <div className="mobile-menu">
          <a href="#Home">HOME</a>
          <a href="#About">ABOUT</a>
          <a href="#Projects">PROJECTS</a>
          <a href="#Contact">CONTACT</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
