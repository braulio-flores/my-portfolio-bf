"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ShimmerText = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
      <span className="relative">{children}</span>
    </motion.div>
  );
};

export default ShimmerText;
