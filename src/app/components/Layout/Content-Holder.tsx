import { AnimatePresence, motion } from "framer-motion";

export const ContentHolder = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="flex-grow p-6 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{
          duration: 0.5,
          delay: isOpen ? 0 : 0.5,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
