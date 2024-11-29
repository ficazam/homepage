"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center min-h-screen text-white px-4 w-full"
    >
      <h1 className="w-full mt-16 sm:mt-0 px-28 text-6xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
        About{" "}
        <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
          ME
        </span>
      </h1>
      <motion.span
        className="h-[3px] bg-pink-400 mb-7 mt-2"
        initial={{ width: 0 }}
        animate={{ width: "85%" }}
        transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
      />

      <div className="flex justify-evenly items-center flex-col-reverse sm:flex-row">
        <div className="flex justify-evenly items-center flex-col">
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto font-body">
            Hi, I&apos;m Felipe Icaza, a certified JavaScript and Python web
            developer with 4 years of experience building dynamic, scalable, and
            user-friendly applications. My passion lies in crafting clean,
            efficient code and transforming complex problems into seamless
            solutions. I specialize in working with modern frameworks like
            React, Next.js, and Django to build robust, interactive web
            applications.
          </p>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto font-body">
            Outside of coding, I enjoy exploring new technologies, hiking, and
            learning new skills that can help me grow both professionally and
            personally. I&apos;m always looking for exciting projects to
            collaborate on, and I&apos;m eager to continue making meaningful
            contributions to the tech community.
          </p>
        </div>

        <div className="flex font-body justify-evenly items-center mt-4 sm:hidden">
          <div className="group relative inline-block">
            <a
              href="/pdf/FelipeIcaza_CV.pdf"
              download="FelipeIcaza_CV"
              className="group"
            >
              <span className="font-heading text-4xl mr-2">→</span>
              <span className="font-body">Download my </span>
              <span className="font-heading">CV</span>
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
          </div>
        </div>

        <Image
          src="/PROFILE.jpg"
          alt="Felipe Icaza"
          height={450}
          width={450}
          className="mr-[-10] rounded-[25%]"
        />
      </div>
      <div className="hidden sm:flex font-body justify-evenly items-center mt-10">
        <div className="group relative inline-block">
          <a
            href="/pdf/FelipeIcaza_CV.pdf"
            download="FelipeIcaza_CV"
            className="group"
          >
            <span className="font-heading text-4xl mr-2">→</span>
            <span className="font-body">Download my </span>
            <span className="font-heading">CV</span>
          </a>
          <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
