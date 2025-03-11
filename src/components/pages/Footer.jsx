import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer p-20 flex justify-center">
      <p>© {currentYear} Jessica Do. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
