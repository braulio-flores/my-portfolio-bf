"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StatsCard = () => {
  const [stats, setStats] = useState([
    { number: 0, label: "Years of Experience", target: 6 },
    { number: 0, label: "Projects Completed", target: 15 },
    { number: 0, label: "Happy Clients", target: 12 },
    { number: 0, label: "Coffee Cups ☕", target: 999 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          number: Math.min(stat.number + 1, stat.target),
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full min-h-[400px] rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          Experiencia & Logros
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Numbers that speak for themselves
        </p>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                {stat.number}+
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
