"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CodeSnippetCard = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const codeSnippet = `const buildWebApps = () => {
  return {
    frontend: "React, Next.js",
    backend: "Node.js, Spring Boot",
    databases: "PostgreSQL, MongoDB",
    deploy: "Docker, AWS",
    mindset: "Clean code"
  }
}`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full min-h-[400px] rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-900 dark:bg-gray-950 p-8 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="mb-6 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
        Clean Code
      </h3>
      <p className="text-gray-400 mb-8 text-sm">
        Maintainable and scalable code
      </p>

      <motion.pre
        className="font-mono text-xs md:text-sm text-gray-300 overflow-hidden rounded-lg p-4 bg-gray-950 border border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <code className="text-blue-400">
          {displayedCode}
          <span className="animate-pulse text-gray-500">|</span>
        </code>
      </motion.pre>
    </div>
  );
};

export default CodeSnippetCard;
