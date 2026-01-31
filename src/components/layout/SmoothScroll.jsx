import React, { useEffect } from "react";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return children;
};

export default SmoothScroll;
