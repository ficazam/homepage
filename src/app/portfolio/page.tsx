"use client";
import { AnimatePresence, motion } from "framer-motion";
import { techs } from "../../../public/imgs/technologies";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Teacher's Aid",
    description:
      "Collaborating with education professionals, I developed a robust inventory management system for schools that streamlines the process of tracking and ordering supplies. Teachers can easily place orders for items in storage, while storage managers approve and deliver requested items to classrooms. The system also allows coordinators to oversee and approve items not already in inventory, ensuring smooth procurement and inventory management.",
    stack: ["ReactJS", "NestJS"],
    fa_link: "https://github.com/ficazam/TA_FRONT",
    ba_link: "https://github.com/ficazam/TA_BACK",
    deployed: false,
    deploymentLink: "",
  },
  {
    title: "Nurse Planner",
    description:
      "Working with medical professionals to better manage post-surgery patient care, I built a nurse scheduling system that simplifies the process of organizing home visits. This system allows for efficient scheduling, ensuring patients receive timely care from nurses, all while offering flexibility for last-minute adjustments and tracking of visit history.",
    stack: ["ReactJS", "NextJS"],
    fa_link: "https://github.com/ficazam/nurseplanner-v1",
    deployed: false,
    deploymentLink: "",
  },
  {
    title: "Portfolio Website",
    description:
      "This website you're currently viewing is my personal portfolio, designed and developed from scratch to showcase my web development skills. Built using modern web technologies, it features seamless navigation, interactive elements, and a dynamic, responsive design. It's a reflection of my passion for creating engaging and functional websites that not only look great but also provide an exceptional user experience.",
    stack: ["ReactJS", "NextJS"],
    fa_link: "https://github.com/ficazam/portfolio",
    deployed: true,
    deploymentLink: "https://felipeicaza.dev",
  },
  {
    title: "Y-GO App",
    description:
      "Currently working on revamping a comprehensive application for a package forwarding company, designed to streamline and enhance administrative processes. The system manages every aspect of the business, including user accounts, package tracking, invoice generation, supplier records, and subsidiary operations. This robust solution aims to improve efficiency, reduce errors, and provide an intuitive interface for the team, ensuring smooth day-to-day operations and scalability for future growth.",
    stack: ["FastAPI", "ReactJS"],
    fa_link: "https://github.com/Keefher/Y-GO-FRONT",
    ba_link: "https://github.com/ficazam/ygo-fa",
    deployed: false,
    deploymentLink: "",
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<number>(0);
  const handleSelect = (i: number) => setSelected(i);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center min-h-screen text-white px-4"
    >
      <div className="flex flex-col sm:flex-row items-center justify-evenly w-[90%] gap-x-0 sm:gap-x-10 gap-y-10 sm:gap-y-0 mt-20 sm:mt-0">
        <div className="w-full sm:w-[30%]">
          <h1 className="text-6xl font-heading text-pink-500 leading-wide tracking-widest mb-8">
            Projects
          </h1>

          {projects.map((project, index) => (
            <div
              className="flex flex-col justify-center items-start gap-y-3 mt-3 cursor-pointer"
              onClick={() => handleSelect(index)}
              key={project.title}
            >
              <p className="text-xl font-heading text-pink-400 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
                {project.title}
              </p>
              <span className="w-full h-[2px] bg-pink-400"></span>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-[60%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected} // Ensure a unique key for AnimatePresence to detect changes
              className="bg-gray-800/40 p-6 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full">
                <h2 className="text-3xl font-semibold text-pink-500 font-heading">
                  {projects[selected].deployed ? (
                    <a
                      href={projects[selected].deploymentLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {projects[selected].title}
                    </a>
                  ) : (
                    <>{projects[selected].title}</>
                  )}
                </h2>
                <p className="font-body text-pink-400 leading-wide text-xl">
                  Stack:{" "}
                </p>
                <div className="flex my-2">
                  {techs.map(
                    (tech) =>
                      projects[selected].stack.includes(tech.name) && (
                        <Image
                          key={tech.name}
                          src={tech.logo}
                          alt={tech.name}
                          width={24}
                          height={24}
                          className="mx-2"
                        />
                      )
                  )}
                </div>
                <p className="text-lg text-gray-300 mb-4">
                  {projects[selected].description}
                </p>
                <div className="flex flex-col items-start justify-end">
                  <a
                    href={projects[selected].fa_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-pink-400 hover:text-pink-600 transition-all duration-300 group"
                  >
                    <span className="font-heading text-4xl mr-2">→</span>
                    View Frontend Repo on GitHub
                    <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
                  </a>
                  {projects[selected].ba_link && (
                    <a
                      href={projects[selected].ba_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-pink-400 hover:text-pink-600 transition-all duration-300 group"
                    >
                      <span className="font-heading text-4xl mr-2">→</span>
                      View Backend Repo on GitHub
                      <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-400" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
