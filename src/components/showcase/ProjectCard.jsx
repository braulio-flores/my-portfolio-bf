"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 overflow-hidden block"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>
          <HiArrowTopRightOnSquare className="text-xl text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs md:text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
