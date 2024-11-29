import Link from "next/link";
import { motion } from "framer-motion";

export const AnimatedMenu = ({
  isOpen,
  onClick,
  menuItems,
}: {
  isOpen: boolean;
  onClick: () => void;
  menuItems: { name: string; link: string }[];
}) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-full bg-transparent text-white p-4 z-40 font-heading"
      initial={{ opacity: 0 }}
      animate={{ y: isOpen ? 0 : "-100%", opacity: isOpen ? 0.8 : 0 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{
        y: { duration: 0, delay: 0.2 },
        opacity: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay: 0.2,
          duration: 0.2,
        },
      }}
    >
      <ul className="space-y-4 flex h-full w-full justify-center items-center flex-col text-4xl">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
            exit={{ y: -20, opacity: 0 }}
            whileHover={{ textShadow: '0 0 5px rgba(255, 0, 255, 0.8), 0 0 10px rgba(255, 0, 255, 0.8), 0 0 15px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.8)' }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.1,
              duration: 0.3,
            }}
            onClick={onClick}
          >
            <Link href={`/${item.link}`}>{item.name}</Link>
          </motion.div>
        ))}
      </ul>
    </motion.div>
  );
};
