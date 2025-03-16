import React, { useState, useEffect } from "react";

export const DarkToggleMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("even"); // Use body instead of html
      localStorage.setItem("theme", "even");
    } else {
      document.body.classList.remove("even");
      localStorage.setItem("theme", "odd");
    }
  }, [darkMode]);

  const isReload = () => {
    console.log("Logo button clicked.");
    window.location.reload();
  };

  return (
    <section className="darkModeToggle">
      <button
        className="toggle-btn fixed z-50 top-8 left-50 rounded-lg"
        id="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
        style={{ border: "none", cursor: "pointer" }}
      >
        {/* Toggle Theme Mode button */}
        {darkMode ? (
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

      <button
        className="logo-btn fixed z-50 top-1 left-5 "
        id="logo-btn"
        onClick={() => isReload()}
        style={{ border: "none", cursor: "pointer" }}
      >
        {/* Logo Mode button */}
        {darkMode ? (
          <svg
            width="76"
            height="93"
            viewBox="0 0 76 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5938 50.3438V89.25C24.7188 89.3958 25.8021 89.5104 26.8438 89.5938C27.8854 89.6562 28.9062 89.6875 29.9062 89.6875C33.4271 89.6875 36.5833 89.2396 39.375 88.3438C42.1667 87.4271 44.5312 86.0521 46.4688 84.2188C48.4062 82.3646 49.8854 80.0625 50.9062 77.3125C51.9479 74.5417 52.4688 71.2917 52.4688 67.5625C52.4479 65.1042 52.1354 62.9271 51.5312 61.0312C50.9271 59.1354 50.0833 57.4896 49 56.0938C47.9167 54.6771 46.6354 53.5 45.1562 52.5625C43.6979 51.6042 42.1042 50.8333 40.375 50.25C38.6667 49.6458 36.8542 49.2188 34.9375 48.9688C33.0417 48.7188 31.1146 48.5938 29.1562 48.5938C28.2188 48.5938 27.2812 48.625 26.3438 48.6875C25.4062 48.75 24.4479 48.8333 23.4688 48.9375C23.5104 49.2292 23.5417 49.5 23.5625 49.75C23.5833 49.9792 23.5938 50.1771 23.5938 50.3438ZM13.1562 47.9062C14.9688 47.6771 16.5938 47.4792 18.0312 47.3125C19.4688 47.125 20.8646 46.9688 22.2188 46.8438C23.5729 46.7188 24.9688 46.625 26.4062 46.5625C27.8438 46.5 29.4688 46.4688 31.2812 46.4688C32.8438 46.4688 34.2708 46.5104 35.5625 46.5938C36.8542 46.6771 38.0729 46.8229 39.2188 47.0312C40.3854 47.2188 41.5208 47.4792 42.625 47.8125C43.75 48.125 44.9271 48.5104 46.1562 48.9688C47.8021 49.5938 49.3125 50.4375 50.6875 51.5C52.0833 52.5417 53.2812 53.8229 54.2812 55.3438C55.2812 56.8646 56.0521 58.6354 56.5938 60.6562C57.1562 62.6771 57.4375 64.9792 57.4375 67.5625C57.4167 70.625 57.0208 73.3542 56.25 75.75C55.4792 78.1458 54.4062 80.25 53.0312 82.0625C51.6562 83.875 50.0208 85.4167 48.125 86.6875C46.25 87.9583 44.2083 88.9896 42 89.7812C39.7917 90.5729 37.4583 91.1458 35 91.5C32.5417 91.8542 30.0521 92.0312 27.5312 92.0312C27.3229 92.0312 26.6354 92.0312 25.4688 92.0312C24.3229 92.0521 23.0938 92.1146 21.7812 92.2188C20.4688 92.3229 19.3229 92.4375 18.3438 92.5625L18.1562 92.25C18.5729 91.6458 18.7812 90.5417 18.7812 88.9375V56.0312C18.7812 54.6562 18.7188 53.5104 18.5938 52.5938C18.4688 51.6562 18.2396 50.9062 17.9062 50.3438C17.5729 49.7812 17.1042 49.3854 16.5 49.1562C15.8958 48.9062 15.3229 48.7812 14.7812 48.7812C14.2396 48.7812 13.8958 48.7812 13.75 48.7812C13.6042 48.7812 13.4479 48.7917 13.2812 48.8125L13.1562 47.9062Z"
              fill="white"
            />
            <path
              d="M3.008 68V67.36L7.488 66.528V28.512C7.488 27.5307 7.08267 26.5707 6.272 25.632C5.46133 24.6507 4.37333 23.8827 3.008 23.328V22.688H12.992L41.792 59.296H42.624V38.88C42.624 37.3867 42.496 35.9573 42.24 34.592C41.984 33.2267 41.5573 31.968 40.96 30.816C40.4053 29.6213 39.7013 28.5333 38.848 27.552C37.9947 26.5707 36.9707 25.7387 35.776 25.056C34.624 24.3307 33.3013 23.7547 31.808 23.328V22.688H48.448V23.328L43.584 24.16V68H39.616L9.28 29.6H8.448V48.928C8.448 50.72 8.576 52.4053 8.832 53.984C9.13067 55.52 9.57867 56.9707 10.176 58.336C10.7733 59.6587 11.5413 60.896 12.48 62.048C13.4187 63.1573 14.5493 64.16 15.872 65.056C17.1947 65.952 18.752 66.72 20.544 67.36V68H3.008Z"
              fill="white"
            />
            <path
              d="M34.9219 13.4219V57.7656C34.9219 60.1406 34.6719 62.4062 34.1719 64.5625C33.6719 66.6875 33.0781 68.4531 32.3906 69.8594C31.7031 71.2344 30.9375 72.5 30.0938 73.6562C29.25 74.8125 28.5469 75.6406 27.9844 76.1406C27.4531 76.6719 27.0156 77.0469 26.6719 77.2656C25.7969 77.7031 24.2969 77.9219 22.1719 77.9219C18.0781 77.9219 14.1719 76.8906 10.4531 74.8281C11.6094 72.7031 13.5625 70.6875 16.3125 68.7812L16.9688 69.2969C19.0312 72.6719 21.4688 74.3594 24.2812 74.3594C24.8438 74.3594 25.3281 74.2188 25.7344 73.9375C26.1406 73.625 26.4844 73.0625 26.7656 72.25C27.0781 71.4062 27.3125 70.4062 27.4688 69.25C27.6562 68.0625 27.8125 66.4688 27.9375 64.4688C28.0625 62.4375 28.1406 60.2188 28.1719 57.8125C28.2031 55.375 28.2188 52.375 28.2188 48.8125V22.0469C28.2188 17.9219 27.7656 15.0938 26.8594 13.5625C25.9531 12 24.0938 11.2188 21.2812 11.2188H19.9219L19.7344 10.3281C24.8906 8.79687 29.625 8.03125 33.9375 8.03125C34.5938 9.6875 34.9219 11.4844 34.9219 13.4219Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="76"
            height="93"
            viewBox="0 0 76 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5938 50.3438V89.25C24.7188 89.3958 25.8021 89.5104 26.8438 89.5938C27.8854 89.6562 28.9062 89.6875 29.9062 89.6875C33.4271 89.6875 36.5833 89.2396 39.375 88.3438C42.1667 87.4271 44.5312 86.0521 46.4688 84.2188C48.4062 82.3646 49.8854 80.0625 50.9062 77.3125C51.9479 74.5417 52.4688 71.2917 52.4688 67.5625C52.4479 65.1042 52.1354 62.9271 51.5312 61.0312C50.9271 59.1354 50.0833 57.4896 49 56.0938C47.9167 54.6771 46.6354 53.5 45.1562 52.5625C43.6979 51.6042 42.1042 50.8333 40.375 50.25C38.6667 49.6458 36.8542 49.2188 34.9375 48.9688C33.0417 48.7188 31.1146 48.5938 29.1562 48.5938C28.2188 48.5938 27.2812 48.625 26.3438 48.6875C25.4062 48.75 24.4479 48.8333 23.4688 48.9375C23.5104 49.2292 23.5417 49.5 23.5625 49.75C23.5833 49.9792 23.5938 50.1771 23.5938 50.3438ZM13.1562 47.9062C14.9688 47.6771 16.5938 47.4792 18.0312 47.3125C19.4688 47.125 20.8646 46.9688 22.2188 46.8438C23.5729 46.7188 24.9688 46.625 26.4062 46.5625C27.8438 46.5 29.4688 46.4688 31.2812 46.4688C32.8438 46.4688 34.2708 46.5104 35.5625 46.5938C36.8542 46.6771 38.0729 46.8229 39.2188 47.0312C40.3854 47.2188 41.5208 47.4792 42.625 47.8125C43.75 48.125 44.9271 48.5104 46.1562 48.9688C47.8021 49.5938 49.3125 50.4375 50.6875 51.5C52.0833 52.5417 53.2812 53.8229 54.2812 55.3438C55.2812 56.8646 56.0521 58.6354 56.5938 60.6562C57.1562 62.6771 57.4375 64.9792 57.4375 67.5625C57.4167 70.625 57.0208 73.3542 56.25 75.75C55.4792 78.1458 54.4062 80.25 53.0312 82.0625C51.6562 83.875 50.0208 85.4167 48.125 86.6875C46.25 87.9583 44.2083 88.9896 42 89.7812C39.7917 90.5729 37.4583 91.1458 35 91.5C32.5417 91.8542 30.0521 92.0312 27.5312 92.0312C27.3229 92.0312 26.6354 92.0312 25.4688 92.0312C24.3229 92.0521 23.0938 92.1146 21.7812 92.2188C20.4688 92.3229 19.3229 92.4375 18.3438 92.5625L18.1562 92.25C18.5729 91.6458 18.7812 90.5417 18.7812 88.9375V56.0312C18.7812 54.6562 18.7188 53.5104 18.5938 52.5938C18.4688 51.6562 18.2396 50.9062 17.9062 50.3438C17.5729 49.7812 17.1042 49.3854 16.5 49.1562C15.8958 48.9062 15.3229 48.7812 14.7812 48.7812C14.2396 48.7812 13.8958 48.7812 13.75 48.7812C13.6042 48.7812 13.4479 48.7917 13.2812 48.8125L13.1562 47.9062Z"
              fill="black"
            />
            <path
              d="M3.008 68V67.36L7.488 66.528V28.512C7.488 27.5307 7.08267 26.5707 6.272 25.632C5.46133 24.6507 4.37333 23.8827 3.008 23.328V22.688H12.992L41.792 59.296H42.624V38.88C42.624 37.3867 42.496 35.9573 42.24 34.592C41.984 33.2267 41.5573 31.968 40.96 30.816C40.4053 29.6213 39.7013 28.5333 38.848 27.552C37.9947 26.5707 36.9707 25.7387 35.776 25.056C34.624 24.3307 33.3013 23.7547 31.808 23.328V22.688H48.448V23.328L43.584 24.16V68H39.616L9.28 29.6H8.448V48.928C8.448 50.72 8.576 52.4053 8.832 53.984C9.13067 55.52 9.57867 56.9707 10.176 58.336C10.7733 59.6587 11.5413 60.896 12.48 62.048C13.4187 63.1573 14.5493 64.16 15.872 65.056C17.1947 65.952 18.752 66.72 20.544 67.36V68H3.008Z"
              fill="black"
            />
            <path
              d="M34.9219 13.4219V57.7656C34.9219 60.1406 34.6719 62.4062 34.1719 64.5625C33.6719 66.6875 33.0781 68.4531 32.3906 69.8594C31.7031 71.2344 30.9375 72.5 30.0938 73.6562C29.25 74.8125 28.5469 75.6406 27.9844 76.1406C27.4531 76.6719 27.0156 77.0469 26.6719 77.2656C25.7969 77.7031 24.2969 77.9219 22.1719 77.9219C18.0781 77.9219 14.1719 76.8906 10.4531 74.8281C11.6094 72.7031 13.5625 70.6875 16.3125 68.7812L16.9688 69.2969C19.0312 72.6719 21.4688 74.3594 24.2812 74.3594C24.8438 74.3594 25.3281 74.2188 25.7344 73.9375C26.1406 73.625 26.4844 73.0625 26.7656 72.25C27.0781 71.4062 27.3125 70.4062 27.4688 69.25C27.6562 68.0625 27.8125 66.4688 27.9375 64.4688C28.0625 62.4375 28.1406 60.2188 28.1719 57.8125C28.2031 55.375 28.2188 52.375 28.2188 48.8125V22.0469C28.2188 17.9219 27.7656 15.0938 26.8594 13.5625C25.9531 12 24.0938 11.2188 21.2812 11.2188H19.9219L19.7344 10.3281C24.8906 8.79687 29.625 8.03125 33.9375 8.03125C34.5938 9.6875 34.9219 11.4844 34.9219 13.4219Z"
              fill="black"
            />
          </svg>
        )}
      </button>
    </section>
  );
};
