"use client";

import React from "react";
import { motion } from "framer-motion";

const GradientButton = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = "",
  variant = "primary",
  size = "md",
}) => {
  const baseStyles =
    "font-bold rounded-xl transition-all duration-300 relative group overflow-hidden";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-xl",
    secondary: "bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-white hover:shadow-lg",
    outline:
      "border-2 border-gradient-to-r from-blue-600 to-purple-600 text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClass}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 0 }}
      />
    </Component>
  );
};

export default GradientButton;
