import React from "react";
import { useState, useEffect } from "react";
import dark_logo from "../assets/dark_logo.png";
import light_logo from "../assets/light_logo.png";

const ToggleMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  //reload page when logo is cic
  const isReload = () => {
    window.location.reload();
  };

  const DarkLogo = () => {
    <img
      src="dark_logo.png"
      alt="logo"
      style={{ width: "50px", height: "50px" }}
      onClick={isReload}
    />;
  };

  const LightLogo = () => {
    <img
      src="light_logo.png"
      alt="logo"
      style={{ width: "50px", height: "50px", overflow: "hidden" }}
      onClick={isReload}
    />;
  };

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
          style={{ width: "75px", height: "75px" }}
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
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8_55)">
              {" "}
              {/* Change clip-path to clipPath */}
              <path
                d="M20 1.66667V5M20 35V38.3333M7.03333 7.03333L9.4 9.4M30.6 30.6L32.9667 32.9667M1.66667 20H5M35 20H38.3333M7.03333 32.9667L9.4 30.6M30.6 9.4L32.9667 7.03333M28.3333 20C28.3333 24.6024 24.6024 28.3333 20 28.3333C15.3976 28.3333 11.6667 24.6024 11.6667 20C11.6667 15.3976 15.3976 11.6667 20 11.6667C24.6024 11.6667 28.3333 15.3976 28.3333 20Z"
                stroke="#F3F3F3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_55">
                {" "}
                {/* Change clip-path to clipPath */}
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 21.3167C34.7378 24.1537 33.6731 26.8573 31.9304 29.1113C30.1877 31.3653 27.8392 33.0763 25.1595 34.0442C22.4799 35.0121 19.58 35.1969 16.7992 34.5768C14.0184 33.9568 11.4717 32.5576 9.45704 30.543C7.44243 28.5283 6.04323 25.9816 5.42318 23.2008C4.80313 20.42 4.98786 17.5201 5.95577 14.8405C6.92367 12.1608 8.63472 9.81228 10.8887 8.06959C13.1427 6.3269 15.8463 5.26218 18.6833 5C17.0224 7.24711 16.2231 10.0157 16.4309 12.8024C16.6387 15.589 17.8398 18.2084 19.8157 20.1843C21.7916 22.1602 24.411 23.3613 27.1976 23.5691C29.9843 23.7769 32.7529 22.9776 35 21.3167Z"
              stroke="#131313"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ToggleMode;
