import React from "react";
import { useState, useEffect } from "react";
import dark_logo from "../assets/dark_logo.png";
import light_logo from "../assets/light_logo.png";
import "./ToggleMode.css";

const ToggleMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  //reload page when logo is cic
  const isReload = () => {
    window.location.reload();
  };

  //adds classname of Dark for dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="ToggleScreen">
      {/* Dark/Light Mode Logo Toggle */}
      <div className="logos">
        <img
          src={isDarkMode ? dark_logo : light_logo}
          alt="logo"
          style={{ width: "60px", height: "60px" }}
          onClick={isReload}
        />
      </div>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{ border: "none", background: "none", cursor: "pointer" }}
      >
        {/* Toggle Theme Mode button */}
        {isDarkMode ? (
          <svg
            width="50"
            height="50"
            viewBox="0 0 125 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.4583 93.75C27.7778 93.75 20.3993 90.7117 14.3229 84.6354C8.24652 78.5591 5.20831 71.1805 5.20831 62.5C5.20831 53.8195 8.24652 46.4409 14.3229 40.3646C20.3993 34.2883 27.7778 31.25 36.4583 31.25H88.5416C97.2221 31.25 104.601 34.2883 110.677 40.3646C116.753 46.4409 119.792 53.8195 119.792 62.5C119.792 71.1805 116.753 78.5591 110.677 84.6354C104.601 90.7117 97.2221 93.75 88.5416 93.75H36.4583ZM88.664 75.651C92.3151 75.651 95.4211 74.3732 97.9818 71.8177C100.542 69.2622 101.823 66.1589 101.823 62.5078C101.823 58.8568 100.545 55.7508 97.9896 53.1901C95.4341 50.6294 92.3307 49.349 88.6797 49.349C85.0286 49.349 81.9226 50.6268 79.362 53.1823C76.8013 55.7378 75.5208 58.8411 75.5208 62.4922C75.5208 66.1432 76.7987 69.2492 79.3541 71.8099C81.9096 74.3706 85.013 75.651 88.664 75.651Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="50"
            height="50"
            viewBox="0 0 125 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.4583 93.75C27.7778 93.75 20.3993 90.7117 14.3229 84.6354C8.24652 78.5591 5.20831 71.1805 5.20831 62.5C5.20831 53.8195 8.24652 46.4409 14.3229 40.3646C20.3993 34.2883 27.7778 31.25 36.4583 31.25H88.5416C97.2221 31.25 104.601 34.2883 110.677 40.3646C116.753 46.4409 119.792 53.8195 119.792 62.5C119.792 71.1805 116.753 78.5591 110.677 84.6354C104.601 90.7117 97.2221 93.75 88.5416 93.75H36.4583ZM36.4583 85.9375H88.5416C95.0521 85.9375 100.586 83.6589 105.143 79.1016C109.701 74.5443 111.979 69.0104 111.979 62.5C111.979 55.9896 109.701 50.4557 105.143 45.8984C100.586 41.3411 95.0521 39.0625 88.5416 39.0625H36.4583C29.9479 39.0625 24.414 41.3411 19.8568 45.8984C15.2995 50.4557 13.0208 55.9896 13.0208 62.5C13.0208 69.0104 15.2995 74.5443 19.8568 79.1016C24.414 83.6589 29.9479 85.9375 36.4583 85.9375ZM36.3203 75.651C39.9713 75.651 43.0773 74.3732 45.638 71.8177C48.1987 69.2622 49.4791 66.1589 49.4791 62.5078C49.4791 58.8568 48.2013 55.7508 45.6458 53.1901C43.0903 50.6294 39.987 49.349 36.3359 49.349C32.6849 49.349 29.5789 50.6268 27.0182 53.1823C24.4575 55.7378 23.1771 58.8411 23.1771 62.4922C23.1771 66.1432 24.4548 69.2492 27.0104 71.8099C29.5659 74.3706 32.6693 75.651 36.3203 75.651Z"
              fill="black"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
export default ToggleMode;
