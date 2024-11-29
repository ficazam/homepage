"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-16 h-16 rounded-full bg-pink-500"
      />
    </motion.div>
  );
};

export default Loading;
