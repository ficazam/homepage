"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center min-h-screen text-white px-0 md:px-4 w-full"
    >
      <h1 className="w-full text-center text-6xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
        <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
          Contact Me
        </span>
      </h1>
      <motion.span
        className="h-[3px] bg-pink-400 mb-7 mt-2"
        initial={{ width: 0 }}
        animate={{ width: "85%" }}
        transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-[85%]">
        <div className="flex flex-col md:flex-row justify-start items-center group relative text-center gap-8">
          <span className="font-heading text-3xl transition-all duration-300 group-hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            MAIL
          </span>
          <a
            href="mailto:felipe@felipeicaza.dev"
            className="block font-body text-2xl relative group"
          >
            <span className="font-heading text-4xl mr-2">→</span>
            felipe@felipeicaza.dev
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-end items-center group relative text-center gap-8">
          <span className="font-heading text-3xl transition-all duration-300 group-hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            OTHER LINKS
          </span>
          <div className="flex flex-col md:mt-12 mt-0 items-start gap-4">
            <a
              href="https://linkedin.com/in/felipe-icaza"
              rel="noopener noreferrer"
              target="_blank"
              className="block font-body text-2xl relative group"
            >
              <span className="font-heading text-4xl mr-2">→</span>
              linkedin
            </a>
            <a
              href="https://github.com/ficazam"
              rel="noopener noreferrer"
              target="_blank"
              className="block font-body text-2xl relative group"
            >
              <span className="font-heading text-4xl mr-2">→</span>
              github
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start md:justify-center md:w-screen md:pr-[45%] items-center group relative text-center gap-8">
          <span className="font-heading text-3xl transition-all duration-300 group-hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            MY RESUME
          </span>
          <a
            href="/pdf/FelipeIcaza_CV.pdf"
            download="FelipeIcaza_CV"
            className="block font-body text-2xl relative group"
          >
            <span className="font-heading text-4xl mr-2">→</span>
            Download my CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
