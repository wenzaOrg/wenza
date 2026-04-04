import React from "react";

interface HamburgerProps {
  isOpen: boolean;
  onClick?: () => void;
  className?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({
  isOpen,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer inline-flex flex-col justify-center items-center w-8 h-8 relative z-20 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span
        className={`block h-0.5 w-5 bg-wenza-brown rounded-full transition-all duration-300 ease-in-out absolute ${isOpen ? "rotate-45" : "-translate-y-2"
          }`}
      />
      <span
        className={`block h-0.5 w-5 bg-wenza-brown rounded-full transition-all duration-300 ease-in-out absolute ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
      />
      <span
        className={`block h-0.5 w-5 bg-wenza-brown rounded-full transition-all duration-300 ease-in-out absolute ${isOpen ? "-rotate-45" : "translate-y-2"
          }`}
      />
    </button>
  );
};

export default Hamburger;
