import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" p-20 bg-neutral-700 flex justify-center">
      <p>© {currentYear} Jessica Do. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
