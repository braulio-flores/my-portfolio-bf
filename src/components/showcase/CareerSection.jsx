"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const CareerSection = () => {
  const careerData = [
    {
      company: "BBVA",
      role: "Senior Full Stack Developer",
      description: "React, Spring Boot with Java 17/21, scalable backend systems in Agile environment.",
      period: "2022 - Present",
      link: "https://www.bbva.mx/",
    },
    {
      company: "SNGULAR",
      role: "Full Stack Developer",
      description: "Technical consulting, enterprise solutions, and scalable architectures.",
      period: "2022 - 2023",
      link: "https://www.sngular.com/es/",
    },
    {
      company: "SEGOB",
      role: "Web Developer",
      description: "React frontend and Spring Boot backend to optimize internal data management.",
      period: "2021 - 2022",
      link: "http://justicia.segob.gob.mx/",
    },
    {
      company: "AntzTours",
      role: "Web Developer",
      description: "Responsive React frontend with Spring Boot backend, improved UX and performance.",
      period: "2020 - 2021",
    }
  ];

  return (
    <section id="career" className="w-full py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Career
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Full stack development trajectory and technical consulting
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerData.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="h-full flex flex-col"
            >
              <div className="relative p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{job.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {job.role}
                      </h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                  {job.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <div className="h-0.5 flex-grow bg-gradient-to-r from-blue-600 to-transparent rounded-full" />
                  {job.link && (
                    <Link
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <HiArrowTopRightOnSquare className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
