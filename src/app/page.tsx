"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen text-white px-4"
    >
      <div className="text-center">
        <h1 className="text-6xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
          <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            Felipe Icaza
          </span>
        </h1>
        <h2 className="text-3xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
          <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            Senior Full-Stack TypeScript Engineer
          </span>
        </h2>
        <p className="mt-6 text-2xl text-gray-200 max-w-4xl mx-auto font-body">
          I&apos;m a certified{" "}
          <span className="font-heading transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            TypeScript application developer
          </span>
        </p>
        <p className="font-body mt-6 text-2xl text-gray-200 max-w-4xl mx-auto">
          I build and modernize production web platforms using{" "}
          <span className="font-heading transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            React & React Native, NextJS, and Node/NestJS.
          </span>
        </p>

        <p className="font-body mt-6 text-lg text-gray-200 max-w-4xl mx-auto">
          Targeting roles in Alberta and the GTA
        </p>

        <p className="font-body mt-2 text-lg text-gray-200 max-w-4xl mx-auto">
          Eligible for Canada&apos;s{" "}
          <span className="font-heading transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            Global Talent Stream
          </span>
        </p>

        <p className="font-body mt-2 text-md text-gray-200 max-w-4xl mx-auto">
          (fast 2-3 week relocation)
        </p>

        <div className="flex flex-col sm:flex-row font-body justify-evenly items-center mt-10">
          <div className="group relative inline-block">
            <Link href="/about" className="group">
              <span className="font-heading text-4xl mr-2">→</span>
              <span className="font-body">Learn more about </span>
              <span className="font-heading">me</span>
            </Link>
            <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
          </div>

          <div className="group relative inline-block">
            <Link href="/portfolio" className="group">
              <span className="font-heading text-4xl mr-2">→</span>
              <span className="font-body">Check out my </span>
              <span className="font-heading">projects</span>
            </Link>
            <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
