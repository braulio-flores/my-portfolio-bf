"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const FeaturedProjectCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const technologies = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <motion.div
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        className="relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
      >
        <motion.div
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />

          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between text-white">
            {/* Top Section */}
            <div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  🚀 Featured Project
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Tickomium
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-md">
                Project management and task collaboration platform with real-time updates. Intuitive design with powerful features for teams.
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div className="flex gap-3">
                {technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-xl hover:bg-white/30 transition-all"
                    title={tech.name}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ x: isFlipped ? 0 : [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HiArrowTopRightOnSquare className="text-3xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black p-8 md:p-12 flex flex-col justify-between text-white"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">✓</span>
                <span>Collaborative project and task management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">✓</span>
                <span>Real-time updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">✓</span>
                <span>Intuitive and user-friendly dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">✓</span>
                <span>Modern and responsive design</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-300">
            Hover again to go back to the front
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4 justify-center md:justify-start"
      >
        <motion.a
          href="https://tickomium.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Explorar Tickomium →
        </motion.a>

        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          View Code
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
