"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker,
  SiGithub,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFigma,
  SiVite,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

export const AboutMeCardContent = () => {
  return (
    <div className="mt-4 flex flex-col gap-6">
      <p className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
        Passionate{" "}
        <span className="text-blue-500 dark:text-blue-400">
        Software Engineer
        </span>{" "}
        focused on building{" "}
        <span className="text-blue-500 dark:text-blue-400">scalable</span> and{" "}
        <span className="text-blue-500 dark:text-blue-400">
          high-performance
        </span>{" "}
        web applications that make a real impact.
      </p>

      <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
        <p className="leading-loose">
          Skilled in both frontend and backend development, I write clean,
          maintainable code and deliver solutions that solve real business
          problems.
        </p>

        <p className="leading-loose">
          Curious, collaborative, and always learning — I love staying ahead in
          a fast-moving tech world.
        </p>
      </div>

      <p
        className="mt-2 text-base font-medium text-blue-500 dark:text-blue-400 
        flex items-center gap-2"
      >
        <span className="animate-bounce">🚀</span>
        Let's build something great together!
      </p>
    </div>
  );
};

export const ToolingCardContent = () => {
  const tools = [
  // Frontend
  { icon: <SiReact className="text-sky-400" />, name: "React" },
//   { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
//   { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },

  // Backend
  { icon: <FaJava className="text-red-500" />, name: "Java" },
  { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot" },
//   { icon: <SiNodedotjs className="text-green-400" />, name: "Node.js" },
  { icon: <SiPython className="text-yellow-300" />, name: "Python" },

  // Databases
  { icon: <SiPostgresql className="text-sky-500" />, name: "PostgreSQL" },
//   { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiMysql className="text-orange-400" />, name: "MySQL" },

  // DevOps / Tools
//   { icon: <SiDocker className="text-blue-500" />, name: "Docker" },
  { icon: <SiGit className="text-orange-500" />, name: "Git" },
  { icon: <SiGithub className="text-gray-300" />, name: "GitHub" },
//   { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
//   { icon: <SiVite className="text-purple-400" />, name: "Vite" },
];

  return (
    <section className="max-w-4xl mx-auto text-center p-8">
      <div className="grid grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="text-4xl">{tool.icon}</div>
            <p className="text-[0.5rem] md:text-sm text-gray-600 dark:text-gray-300">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const HitMeCardContent = () => {
  return <div>MyCards</div>;
};

export const JsonContent = () => {
  return <div>JsonContent</div>;
};

export const CareerContent = () => {
  return <div>CareerContent</div>;
};

export const ContactContent = () => {
  return <div>ContactContent</div>;
};

const cards = [
  {
    id: 1,
    title: "👨‍💻 About Me",
    content: AboutMeCardContent(),
    color: "bg-white dark:bg-gray-800",
  },
  {
    id: 2,
    title: "📝 My JSON",
    content: JsonContent(),
    color: "bg-blue-50 dark:bg-blue-900",
  },
  {
    id: 3,
    title: "🚀 Career",
    content: CareerContent(),
    color: "bg-indigo-50 dark:bg-indigo-900",
  },
  {
    id: 4,
    title: "🛠️ Tools",
    content: ToolingCardContent(),
    color: "bg-slate-50 dark:bg-slate-800",
  },
  {
    id: 5,
    title: "📬 Contact",
    content: ContactContent(),
    color: "bg-sky-50 dark:bg-sky-900",
  },
];

export default function MyCards() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            className={`${card.color} px-6 py-3 rounded-2xl cursor-pointer 
              shadow-md dark:shadow-lg text-gray-800 dark:text-gray-100 
              hover:shadow-lg dark:hover:shadow-xl transition-shadow
              text-xs md:text-base`}
            onClick={() => setSelectedCard(card)}
          >
            {card.title}
          </motion.div>
        ))}
      </div>

      {/* MODAL REUTILIZABLE */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-gray-500/30 dark:bg-black/50 backdrop-blur-sm 
              flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              layoutId={`card-${selectedCard.id}`}
              className={`${selectedCard.color} rounded-3xl shadow-xl 
                dark:shadow-2xl p-8 text-gray-800 dark:text-gray-100 w-[500px] m-8`}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-xl font-bold">{selectedCard.title}</h2>
              {selectedCard.content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
