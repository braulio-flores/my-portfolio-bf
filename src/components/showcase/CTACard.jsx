"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const CTACard = () => {
  return (
    <div className="relative h-full min-h-[400px] rounded-lg border border-gray-200 dark:border-gray-800 bg-blue-50 dark:bg-blue-950/20 p-8 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Collaborate?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Contact me and let's create something amazing together.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MdEmail className="text-xl" />
            Send me an Email
          </motion.a>

          <div className="flex gap-4 justify-center">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <SiGithub className="text-2xl" />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <SiLinkedin className="text-2xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTACard;
