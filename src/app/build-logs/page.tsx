"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts } from "./posts";

const BuildLogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center min-h-screen text-white px-4 w-full"
    >
      <h1 className="w-full mt-16 sm:mt-0 text-center text-6xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
        Build{" "}
        <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
          Logs
        </span>
      </h1>
      <motion.span
        className="h-[3px] bg-pink-400 mb-10 mt-2"
        initial={{ width: 0 }}
        animate={{ width: "85%" }}
        transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
      />

      <div className="w-full max-w-2xl mx-auto font-body flex flex-col gap-y-2">
        {posts.map((post) => (
          <div key={post.id} className="group relative inline-block">
            <Link href={`/build-logs/${post.id}`} className="group font-heading text-xl text-pink-400">
              <span className="text-3xl mr-2">→</span>
              {post.title}
            </Link>
            <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-300" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuildLogs;
