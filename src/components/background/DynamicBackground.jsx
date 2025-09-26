import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const DynamicBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Generar partículas aleatorias
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
    }));

    setParticles(newParticles);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente principal animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(59,130,246,0.2), rgba(147,51,234,0.2), rgba(236,72,153,0.2))",
            "linear-gradient(to bottom right, rgba(236,72,153,0.2), rgba(59,130,246,0.2), rgba(147,51,234,0.2))",
            "linear-gradient(to bottom right, rgba(147,51,234,0.2), rgba(236,72,153,0.2), rgba(59,130,246,0.2))",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Partículas interactivas */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            x: particle.x,
            y: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [particle.x - 50, particle.x + 50, particle.x],
            y: [particle.y - 50, particle.y + 50, particle.y],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{ scale: 2 }}
        />
      ))}

      {/* Efecto de resplandor que sigue al mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
};

export default DynamicBackground;
