import { motion } from "framer-motion";

export const HamburgerButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button className="absolute p-4 pt-10 right-[5%] z-50" onClick={onClick}>
      <motion.div
        className="w-10 h-2 rounded-[15%] bg-transparent/20 border border-1 border-pink-800 mb-1"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 12 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-10 h-2 rounded-[15%] bg-transparent/20 border border-1 border-pink-800 mb-1"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-10 h-2 rounded-[15%] bg-transparent/20 border border-1 border-pink-800 mb-1"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -12 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};
