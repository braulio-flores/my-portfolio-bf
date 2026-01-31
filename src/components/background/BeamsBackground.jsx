"use client";

import React from "react";
import { motion } from "framer-motion";

const BeamsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-96 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
          style={{
            left: `${20 + i * 20}%`,
            top: 0,
            transformOrigin: "center",
          }}
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BeamsBackground;
