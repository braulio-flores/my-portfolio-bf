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
  SiLinkedin,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import Image from "next/image";

import myjsonscreen from "../../assets/code.png";
import Link from "next/link";

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
            <p className="text-[0.5rem] md:text-sm text-gray-600 dark:text-gray-300">
              {tool.name}
            </p>
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
  return (
    <Image
      src={myjsonscreen}
      className="mx-auto sm:mx-0 rounded-4xl pt-4"
      alt="Braulio Flores"
    />
  );
};

const CareerCard = ({ company, role, description, period, uri }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.01 }}
      className="relative pl-8 before:absolute before:left-0.5 before:top-0 before:h-full 
        before:w-[3px] before:bg-gradient-to-b before:from-blue-500 before:to-transparent
        group"
    >
      <div
        className="absolute -left-[5px] top-2 h-4 w-4 rounded-full bg-white 
        dark:bg-gray-900 border-2 border-blue-500 group-hover:scale-110 
        transition-transform"
      />

      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-medium tracking-tight">{company}</h3>
              <div
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 
          dark:text-gray-400 font-medium"
              >
                <svg
                  className="w-3.5 h-3.5 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {period}
                {uri && (
                  <Link
                    href={uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
            <p className="text-xs text-blue-500/80 font-medium">{role}</p>
          </div>
        </div>

        <p
          className="text-xs leading-relaxed text-gray-600 dark:text-gray-300 
          max-w-lg"
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const CareerContent = () => {
  return (
    <div
      className="relative pt-4 max-h-[65vh] overflow-y-auto px-2 
      scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent
      hover:scrollbar-thumb-blue-500/30 scroll-smooth"
    >
      <div className="space-y-8 pr-2">
        <CareerCard
          company="BBVA"
          role="Senior Full Stack Developer"
          description="Developed full-stack solutions combining React for dynamic user interfaces and Spring Boot with Java 17 and 21, for scalable backend systems, working in Agile environments."
          period="2022 - Present"
          uri="https://www.bbva.mx/"
        />

        <CareerCard
          company="SNGULAR"
          role="Full Stack Developer"
          description="Technical consulting and enterprise solution development. Leadership in the implementation of scalable architectures."
          period="2022 - 2023"
          uri={"https://www.sngular.com/es/"}
        />

        <CareerCard
          company="SEGOB"
          role="Web Developer"
          description="Developed an interactive React frontend and robust Spring Boot backend to optimize data management and streamline internal workflows, collaborating with cross-functional teams to deliver efficient solutions."
          period="2021 - 2022"
          uri={"http://justicia.segob.gob.mx/"}
        />

        <CareerCard
          company="AntzTours"
          role="Web Developer"
          description="Created a dynamic and responsive React frontend integrated with a Spring Boot backend, enhancing user experience and interface performance while collaborating closely with backend and design teams."
          period="2020 - 2021"
        />
      </div>
    </div>
  );
};

export const ContactContent = () => {
  const contactLinks = [
    {
      icon: <SiLinkedin className="text-blue-600" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/braulio-flores-74a25b200/",
      description: "Let's connect professionally",
    },
    {
      icon: <SiGithub className="dark:text-white text-black" />,
      label: "GitHub",
      href: "https://github.com/braulio-flores",
      description: "Check out my code",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.33 3.67a1.45 1.45 0 0 0-1.47-.35L4.23 8.2a1.44 1.44 0 0 0-.07 2.71l6.84 2.9L15.67 22a1.44 1.44 0 0 0 1.93.44 1.42 1.42 0 0 0 .44-.44l4.85-14.44a1.42 1.42 0 0 0-.56-1.89Z" />
        </svg>
      ),
      label: "Email",
      href: "mailto:bfloresl1400@outlook.com",
      description: "Drop me a line",
    },
  ];

  return (
    <div className="flex flex-col gap-8 mt-4">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        I'm always interested in hearing about new opportunities and exciting
        projects. Feel free to reach out through any of these channels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-xl 
              bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
              hover:scale-105 transition-all duration-300
              shadow-sm hover:shadow-md dark:shadow-gray-900/30"
          >
            <div className="text-3xl mb-2">{link.icon}</div>
            <h3 className="font-medium text-sm mb-1">{link.label}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {link.description}
            </p>
          </a>
        ))}
      </div>

      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        Based in Mexico 🇲🇽 • Available for remote opportunities worldwide 🌎
      </p>
    </div>
  );
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
    color: "bg-gray-50 dark:bg-gray-950",
  },
  {
    id: 3,
    title: "🚀 Career",
    content: CareerContent(),
    color: "bg-emerald-50 dark:bg-emerald-950",
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
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4">
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
                dark:shadow-2xl p-8 text-gray-800 dark:text-gray-100 w-[600px] m-8 
                max-h-[80vh] overflow-hidden`}
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
