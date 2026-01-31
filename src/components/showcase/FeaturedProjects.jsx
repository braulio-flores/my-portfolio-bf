"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const FeaturedProjects = () => {
  return (
    <section id="proyects" className="w-full py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Projects I've worked on and freelance development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="lg:col-span-2"
          >
            <Link href="https://app.tickomium.com" target="_blank" rel="noopener noreferrer">
              <div className="relative h-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-600/5 dark:to-purple-600/5" />
                
                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-block mb-4">
                      <span className="text-sm px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                        Featured Project
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Tickomium
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      A project management and task collaboration platform with real-time updates. Developed since 2025 as a freelance project with intuitive design and robust features.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
                        <span key={tech} className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <HiArrowTopRightOnSquare className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all p-6 flex flex-col">
              <div>
                <div className="mb-4">
                  <span className="text-sm px-3 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-medium">
                    2025 - 2026
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Freelance
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Active development of Tickomium. Personal project combining all my full stack development expertise.
                </p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Continuous project evolution
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
