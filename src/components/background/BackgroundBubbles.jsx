import { motion } from "framer-motion";

const Bubble = ({ size, position, delay }) => (
  <motion.div
    className={`absolute rounded-full bg-blue-500/10 dark:bg-blue-400/10 
      backdrop-blur-md ${size}`}
    style={position}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: 1, 
      opacity: 1,
      y: [0, -20, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

const BackgroundBubbles = () => {
  const bubbles = [
    { size: "w-64 h-64", position: { left: "10%", top: "20%" }, delay: 0 },
    { size: "w-96 h-96", position: { right: "15%", bottom: "10%" }, delay: 1 },
    { size: "w-48 h-48", position: { right: "30%", top: "15%" }, delay: 2 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <Bubble key={index} {...bubble} />
      ))}
    </div>
  );
};

export default BackgroundBubbles;
