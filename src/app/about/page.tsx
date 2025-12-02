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
      <h1 className="w-full mt-16 sm:mt-0 text-center text-6xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
        About{" "}
        <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
          Me
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
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Hi, I&apos;m Felipe Icaza — a Senior Full-Stack TypeScript Engineer
            with 6+ years of experience building and modernizing web
            applications across the U.S., Canada, and LATAM. I work with React,
            Next.js, Node/NestJS, FastAPI, and PostgreSQL, with a strong focus
            on clean architecture, maintainability, and high-quality user
            experiences.
          </p>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            I enjoy owning a product slice end-to-end — building fast, polished
            frontends, reliable backend services, and deployments that are
            predictable and stable. My recent work spans enterprise platform
            modernization, logistics automation, and large-scale TypeScript
            applications.
          </p>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Outside of work, I explore new technologies, hike, and continue
            growing as an engineer.
          </p>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Open to senior roles in Alberta or the GTA, with quick relocation
            via GTS and long-term plans through Alberta&apos;s Tech Pathway
            (AAIP).
          </p>
        </div>

        <div className="flex font-body justify-evenly items-center mt-4 sm:hidden">
          <div className="group relative inline-block">
            <a href="/portfolio" className="group">
              <span className="font-heading text-4xl mr-2">→</span>
              <span className="font-body">View my </span>
              <span className="font-heading">projects</span>
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
          </div>
        </div>

        <div className="flex font-body justify-evenly items-center sm:hidden">
          <div className="group relative inline-block">
            <a
              href="/pdf/FelipeIcaza_SeniorReactDeveloper.pdf"
              download="FelipeIcaza_SeniorReactDeveloper.pdf"
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
          alt="Felipe Icaza - Web Developer"
          height={450}
          width={450}
          className="mr-[-10] rounded-[25%]"
        />
      </div>
      <div className="hidden sm:flex font-body justify-evenly items-center mt-10">
        <div className="group relative inline-block">
          <a
            href="/pdf/FelipeIcaza_SeniorReactDeveloper.pdf"
            download="FelipeIcaza_SeniorReactDeveloper.pdf"
            className="group"
          >
            <span className="font-heading text-4xl mr-2">→</span>
            <span className="font-body">Download my </span>
            <span className="font-heading">CV</span>
          </a>
          <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
        </div>
      </div>

      <div className="hidden sm:flex font-body justify-evenly items-center">
        <div className="group relative inline-block">
          <a href="/portfolio" className="group">
            <span className="font-heading text-4xl mr-2">→</span>
            <span className="font-body">View my </span>
            <span className="font-heading">projects</span>
          </a>
          <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
