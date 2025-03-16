import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer p-5 flex justify-start">
      <p className="font-tabular font-bold text-xl">
        © {currentYear} Jessica Do. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
