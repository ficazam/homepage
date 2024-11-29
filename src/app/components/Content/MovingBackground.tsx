"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const MovingBackground = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouse);

      return () => window.removeEventListener("mousemove", handleMouse);
    }
  }, []);

  const calcMovement = (axis: number, factor: number) => {
    if (typeof window !== "undefined") {
      return (axis - window.innerWidth / 2) * factor;
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="fixed overflow-hidden w-full h-full z-[-2]"
        style={{
          backgroundImage: "radial-gradient(circle, #4c1d95, #1e3a8a, #000)",
        }}
        initial={{ opacity: 0 }}
        transition={{
          x: { ease: "easeOut", duration: 0.3 },
          y: { ease: "easeOut", duration: 0.3 },
          opacity: { duration: 1 },
        }}
        animate={{
          x: calcMovement(mousePosition.x, 0.01),
          y: calcMovement(mousePosition.y, 0.01),
          opacity: 0.8,
        }}
      >
        <motion.div
          className="absolute w-48 h-48 bg-pink-200/20 rounded-[25%] inset-0 z-[-1]"
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            x: { ease: "easeOut", duration: 0.3 },
            y: { ease: "easeOut", duration: 0.3 },
            rotate: { ease: "easeOut", duration: 15, repeat: Infinity },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          animate={{
            x: calcMovement(mousePosition.x, 0.03),
            y: calcMovement(mousePosition.y, 0.03),
            rotate: [0, 360],
            opacity: 0.8,
            scale: 1,
          }}
        />

        <motion.div
          className="absolute w-56 h-56 bg-pink-300/60 rounded-[15%] top-[75%] left-[-1] z-[-1]"
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            x: { ease: "easeOut", duration: 0.3 },
            y: { ease: "easeOut", duration: 0.3 },
            rotate: { ease: "easeOut", duration: 18, repeat: Infinity },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          animate={{
            x: calcMovement(mousePosition.x, 0.02),
            y: calcMovement(mousePosition.y, 0.02),
            rotate: [0, 360],
            opacity: 0.8,
            scale: 1,
          }}
        />

        <motion.div
          className="absolute w-32 h-32 bg-pink-500/40 rounded-[35%] top-[25%] left-[75%] z-[-1]"
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            x: { ease: "easeOut", duration: 0.3 },
            y: { ease: "easeOut", duration: 0.3 },
            rotate: { ease: "easeOut", duration: 12, repeat: Infinity },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          animate={{
            x: calcMovement(mousePosition.x, 0.04),
            y: calcMovement(mousePosition.y, 0.04),
            rotate: [0, 360],
            opacity: 0.8,
            scale: 1,
          }}
        />

        <motion.div
          className="absolute w-10 h-10 bg-purple-500/40 rounded-[45%] top-[85%] left-[70%] z-[-1]"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          transition={{
            x: { ease: "easeOut", duration: 0.3 },
            y: { ease: "easeOut", duration: 0.3 },
            rotate: { ease: "easeOut", duration: 7, repeat: Infinity },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          animate={{
            x: calcMovement(mousePosition.x, 0.06),
            y: calcMovement(mousePosition.y, 0.06),
            rotate: [0, 360],
            opacity: 0.8,
            scale: 1,
          }}
        />

        <motion.div
          className="absolute w-16 h-16 bg-purple-500/20 rounded-[20%] top-[30%] left-[80%] z-[-1]"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          transition={{
            x: { ease: "easeOut", duration: 0.3 },
            y: { ease: "easeOut", duration: 0.3 },
            rotate: { ease: "easeOut", duration: 12, repeat: Infinity },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          animate={{
            x: calcMovement(mousePosition.x, 0.04),
            y: calcMovement(mousePosition.y, 0.04),
            rotate: [0, 360],
            opacity: 0.8,
            scale: 1,
          }}
        />

        <motion.div
          className="absolute w-64 h-64 bg-purple-300/20 rounded-[22.5%] top-[90%] left-[85%] z-[-1]"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          transition={{
            x: { ease: "easeOut", duration: 0.3 },
            y: { ease: "easeOut", duration: 0.3 },
            rotate: { ease: "easeOut", duration: 12, repeat: Infinity },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          animate={{
            x: calcMovement(mousePosition.x, 0.04),
            y: calcMovement(mousePosition.y, 0.04),
            rotate: [0, 360],
            opacity: 0.8,
            scale: 1,
          }}
        />

        <motion.div
          className="absolute w-7 h-7 bg-pink-300/20 rounded-[15%] top-[50%] left-[20%] z-[-1]"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          transition={{
            x: { ease: "easeOut", duration: 0.3 },
            y: { ease: "easeOut", duration: 0.3 },
            rotate: { ease: "easeOut", duration: 12, repeat: Infinity },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          animate={{
            x: calcMovement(mousePosition.x, 0.04),
            y: calcMovement(mousePosition.y, 0.04),
            rotate: [0, 360],
            opacity: 0.8,
            scale: 1,
          }}
        />

        <motion.div
          className="absolute w-32 h-32 bg-pink-800/50 rounded-[25%] top-[75%] left-[25%] z-[-1]"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          transition={{
            x: { ease: "easeOut", duration: 0.3 },
            y: { ease: "easeOut", duration: 0.3 },
            rotate: { ease: "easeOut", duration: 12, repeat: Infinity },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          animate={{
            x: calcMovement(mousePosition.x, 0.04),
            y: calcMovement(mousePosition.y, 0.04),
            rotate: [0, 360],
            opacity: 0.8,
            scale: 1,
          }}
        />
      </motion.div>
    </div>
  );
};
