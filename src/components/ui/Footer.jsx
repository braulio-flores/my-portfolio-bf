import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        About
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Chat me
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Tooltings
      </a>
    </footer>
  );
};

export default Footer;
