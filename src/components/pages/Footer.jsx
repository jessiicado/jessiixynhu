import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer p-5 flex justify-start relative">
      <p className="font-tabular font-bold text-xl">
        © {currentYear} JESSICA DO.
      </p>
    </footer>
  );
};

export default Footer;
