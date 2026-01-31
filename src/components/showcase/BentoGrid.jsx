"use client";

import React from "react";
import { motion } from "framer-motion";
import TechStackCard from "./TechStackCard";
import CodeSnippetCard from "./CodeSnippetCard";
import StatsCard from "./StatsCard";
import CTACard from "./CTACard";

const BentoGrid = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Experience & Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            My tech stack, achievements and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <TechStackCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <CodeSnippetCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <StatsCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <CTACard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
