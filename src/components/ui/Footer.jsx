import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <p>© {new Date().getFullYear()} Braulio Flores. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
