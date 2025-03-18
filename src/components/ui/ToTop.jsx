import React from "react";

const ToTop = () => {
  const toTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className="justify-end flex">
      <button onClick={toTop} style={{ cursor: "pointer" }}>
        Back to Top
      </button>
    </div>
  );
};

export default ToTop;
