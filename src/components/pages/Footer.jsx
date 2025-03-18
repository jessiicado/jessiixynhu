import React from "react";
import ToTop from "../ui/ToTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer p-5 flex justify-start">
      <p className="font-tabular font-bold text-xl">
        © {currentYear} Jessica Do. All rights reserved.
      </p>
      <div className="justify-end flex">
        <ToTop />
      </div>
    </footer>
  );
};

export default Footer;
