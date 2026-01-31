"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Full Stack Developer with 6+ years of experience building scalable web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                I have experience in frontend and backend development. I specialize in creating scalable, high-performance web applications that solve real problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                I value clean code, team collaboration, and staying updated with new web ecosystem technologies.
              </p>
            </div>

            <div className="pt-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Approach</h3>
              <ul className="space-y-2">
                {["Clean and maintainable code", "Scalable architecture", "Optimized performance", "Excellent UX/DX"].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                React, Next.js, TypeScript, Tailwind CSS, Framer Motion, responsive design
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-6 border border-purple-100 dark:border-purple-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Backend</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Node.js, Spring Boot, Java, Python, APIs REST, Scalables Architectire
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tools & Deploy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Git, Docker, PostgreSQL, MongoDB, AWS, Figma, Agile methodologies
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
