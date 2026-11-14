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

      <div className="flex justify-evenly sm:justify-around w-full items-center flex-col-reverse sm:flex-row">
        <div className="flex justify-evenly items-center flex-col">
          <p className="mt-2 text-lg font-heading text-gray-100 max-w-3xl mx-auto text-justify sm:text-start">
            <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
              AI Engineer · Agent Systems & AI Products
            </span>
          </p>

          <p className="mt-2 text-md text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Panama City · Relocating to Canada · Remote-ready
          </p>

          <p className="mt-2 text-md text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Most of what I do now centers on{" "}
            <span className="font-heading transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
              multi-agent systems
            </span>
            : how they&apos;re orchestrated, how they decide which model
            handles a request, and how they remember things correctly over
            time.
          </p>

          <p className="mt-2 text-md text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Day to day, I build and operate the voice and chat agents behind
            an AI customer-assistant platform, handling 1,000+ automated
            calls a day. I also designed the routing layer that sends each
            request to a local or cloud model depending on policy, so
            sensitive data never leaves the premises.
          </p>

          <p className="mt-2 text-md text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Alongside that, I consult on AI adoption for other teams,
            bringing in agent tooling and training people to use it well.
          </p>

          <p className="mt-2 text-md text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Before AI, I spent 5+ years as a full-stack engineer in
            TypeScript and Python, and 12 years as an architect before making
            the jump into software.
          </p>

          <p className="mt-2 text-md text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start">
            Open to AI engineering roles in Canada or remote.
          </p>

          <h2 className="mt-4 text-2xl font-heading text-pink-400 w-full text-justify sm:text-start">
            Speaking & Teaching
          </h2>

          <ul className="mt-2 text-md text-gray-200 max-w-3xl mx-auto font-body text-justify sm:text-start list-disc list-inside space-y-2">
            <li>
              &quot;AI Agents & Subagents,&quot; a 60-minute talk for
              systems and software engineering students at Universidad
              Tecnológica de Panamá (Aug 2026); invited back to
              run a hands-on multi-agent systems and function-calling
              workshop for the Hackathon FISC AI AGENTS (Sept 2026).
            </li>
            <li>
              Instructor, Backend Java upskilling program (2026): designed
              the curriculum, taught ~32 classes (160 hours) to 15
              developers, DevOps engineers and DBAs.
            </li>
            <li>
              Anthropic certifications (March 2026): Claude API, Model
              Context Protocol, Agent Skills, Claude Code.
            </li>
          </ul>

          <p className="mt-2 text-md text-gray-200 max-w-3xl mx-auto ml-[-1] font-body text-justify sm:text-start">
            Outside of work, I explore new technologies and continue growing
            as an engineer.
          </p>

          <div className="hidden sm:flex font-body justify-start items-center w-full">
            <div className="group relative inline-block">
              <a
                href="/pdf/FelipeIcaza_AIEngineer.pdf"
                download="FelipeIcaza_AIEngineer.pdf"
                className="group"
              >
                <span className="font-heading text-4xl mr-2">→</span>
                <span className="font-body">Download my </span>
                <span className="font-heading">CV</span>
              </a>
              <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
            </div>
          </div>

          <div className="hidden sm:flex font-body justify-start items-center w-full">
            <div className="group relative inline-block">
              <a href="/portfolio" className="group">
                <span className="font-heading text-4xl mr-2">→</span>
                <span className="font-body">View my </span>
                <span className="font-heading">projects</span>
              </a>
              <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
            </div>
          </div>
        </div>

        <div className="flex font-body justify-evenly items-center sm:hidden w-full">
          <div className="group relative inline-block">
            <a
              href="/pdf/FelipeIcaza_AIEngineer.pdf"
              download="FelipeIcaza_AIEngineer.pdf"
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
          alt="Felipe Icaza - AI Engineer"
          height={300}
          width={300}
          className="mr-[-10] rounded-[25%] object-cover"
        />
      </div>
    </motion.div>
  );
};

export default About;
