"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiFigma,
  SiDocker,
} from "react-icons/si";

const TechStackCard = () => {
  const technologies = [
    { icon: <SiReact className="text-2xl text-gray-600 dark:text-gray-300" />, name: "React" },
    { icon: <SiNextdotjs className="text-2xl text-gray-600 dark:text-gray-300" />, name: "Next.js" },
    { icon: <SiTypescript className="text-2xl text-gray-600 dark:text-gray-300" />, name: "TypeScript" },
    { icon: <SiJavascript className="text-2xl text-gray-600 dark:text-gray-300" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-2xl text-gray-600 dark:text-gray-300" />, name: "Tailwind CSS" },
    { icon: <SiNodedotjs className="text-2xl text-gray-600 dark:text-gray-300" />, name: "Node.js" },
    { icon: <SiSpringboot className="text-2xl text-gray-600 dark:text-gray-300" />, name: "Spring Boot" },
    { icon: <SiPostgresql className="text-2xl text-gray-600 dark:text-gray-300" />, name: "PostgreSQL" },
    { icon: <SiMongodb className="text-2xl text-gray-600 dark:text-gray-300" />, name: "MongoDB" },
    { icon: <SiGit className="text-2xl text-gray-600 dark:text-gray-300" />, name: "Git" },
    { icon: <SiFigma className="text-2xl text-gray-600 dark:text-gray-300" />, name: "Figma" },
    { icon: <SiDocker className="text-2xl text-gray-600 dark:text-gray-300" />, name: "Docker" },
  ];

  return (
    <div className="relative h-full min-h-[400px] rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          Technologies
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Herramientas que domino
        </p>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, y: -4 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {tech.icon}
              </div>
              <span className="text-xs text-center text-gray-600 dark:text-gray-400">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
