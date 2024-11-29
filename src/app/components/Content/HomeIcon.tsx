import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const HomeIcon = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Link href="/" className="absolute p-4 pt-10 left-[5%] z-50" aria-disabled={isHome}>
      <motion.div
        className="w-10 h-2 rounded-[15%] bg-transparent/20 border border-1 border-pink-800 mb-1"
        animate={{
          rotate: 90,
          y: !isHome ? 20 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="h-2 rounded-[15%] bg-transparent/20 border border-1 border-pink-800 mb-1"
        animate={{
          y: !isHome ? -18 : -29,
          x: 16,
          width: !isHome ? 28 : 35,
          rotate: !isHome ? -40 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="h-2 rounded-[15%] bg-transparent/20 border border-1 border-pink-800 mb-1"
        animate={{
          y: -30,
          x: 32,
          width: 28,
          rotate: 45,
          opacity: !isHome ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="h-2 rounded-[15%] bg-transparent/20 border border-1 border-pink-800 mb-1"
        animate={{
          width: !isHome ? 43 : 25,
          y: !isHome ? 0 : -32,
          x: 16,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-10 h-2 rounded-[15%] bg-transparent/20 border border-1 border-pink-800 mb-1"
        animate={{
          rotate: 90,
          x: 35,
          y: -29
        }}
        transition={{ duration: 0.3 }}
      />{" "}
    </Link>
  );
};