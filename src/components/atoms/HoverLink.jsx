import React from "react";

const HoverLink = ({ children, href }) => {
  return (
    <a
      href={href}
      className={`w-full h-full p-2 rounded-md cursor-pointer focus:outline-none focus:bg-crimson hover:bg-crimson hover:text-cream`}
    >
      {children}
    </a>
  );
};

export default HoverLink;
