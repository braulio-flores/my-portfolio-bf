"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  return <div>MyCards</div>;
};

export const HitMeCardContent = () => {
  return <div>MyCards</div>;
};

const cards = [
  {
    id: 1,
    title: "👨‍💻 About Me",
    content: AboutMeCardContent(),
    color: "bg-white dark:bg-neutral-800",
  },
  {
    id: 2,
    title: "Tooling",
    description: "Soy unas uvas 🍇",
    color: "bg-gray-100 dark:bg-neutral-700",
  },
  {
    id: 3,
    title: "Hit me up",
    description: "Soy una naranja 🍊",
    color: "bg-gray-200 dark:bg-neutral-600",
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
