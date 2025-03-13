import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Clock from "/src/components/ui/Clock.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const isReload = () => {
    console.log("Logo button clicked.");
    window.location.reload();
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    if (!isMobile) setMenuOpen(false);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const ResumeRoute = () => {
    console.log("Logo button clicked.");
    window.open(
      "https://drive.google.com/file/d/1TFGSA4vUx0toEmaZjnIWHsd-pirPS-BS/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="entire-navbar fixed z-50">
      <div className="bg-transparent color-black">
        <Clock />
      </div>
      {/* LEFT NAVBAR */}
      <div className="left-navbar">
        {/* LOGO CHANGE */}
        <div id="logos" className="logos" onClick={isReload}>
          {/* <img src={Vector} alt="Vector" /> */}
        </div>

        {/* RESUME BUTTON */}
        <div className="resumebtn absolute top-[2rem] left-[6rem] border-2 px-4 py-2 font-bold rounded-full">
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
