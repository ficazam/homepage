"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { techs } from "../../../public/imgs/technologies";
import { type ProjectType, type Project, projects } from "./projects";

const getTypeLabel = (type: ProjectType) => {
  switch (type) {
    case "web":
      return "Web Application";
    case "mobile":
      return "Mobile Application";
    case "auto":
      return "Automation";
    default:
      return "Project";
  }
};

const getTypeIcon = (type: ProjectType) => {
  if (type === "web") return "/imgs/web.png";
  if (type === "mobile") return "/imgs/mobile.png";
  if (type === "ai") return "/imgs/ai.png";
  return "/imgs/auto.png";
};

const Portfolio = () => {
  const [selected, setSelected] = useState<number>(0);

  const selectedProject = projects[selected];

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
          <h1 className="text-5xl sm:text-6xl text-center font-heading text-pink-500 leading-wide tracking-widest mb-8">
            Projects
          </h1>

          {projects.map((project, index) => (
            <button
              type="button"
              onClick={() => setSelected(index)}
              key={project.title}
              className="flex flex-col justify-center items-start gap-y-3 mt-3 cursor-pointer w-full text-left"
            >
              <div className="flex items-center">
                <Image
                  src={getTypeIcon(project.type)}
                  alt={project.type}
                  width={24}
                  height={24}
                  className="mx-2"
                />
                <p
                  className={`text-xl font-heading text-pink-400 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)] ${
                    selected === index &&
                    "text-white [text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]"
                  }`}
                >
                  {project.title}
                </p>
              </div>
              <span className="w-full h-[2px] bg-pink-400" />
            </button>
          ))}
        </div>

        <div className="w-full sm:w-[60%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              className="bg-gray-800/40 p-6 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full">
                <h2 className="text-2xl sm:text-3xl font-semibold text-pink-500 font-heading mb-2">
                  {getTypeLabel(selectedProject.type)} – {selectedProject.title}
                </h2>

                {selectedProject.stack && selectedProject.stack.length > 0 && (
                  <>
                    <p className="font-body text-pink-400 leading-wide text-xl">
                      Stack:
                    </p>
                    <div className="flex flex-wrap my-2">
                      {techs.map(
                        (tech) =>
                          selectedProject.stack?.includes(tech.name) && (
                            <Image
                              key={tech.name}
                              src={tech.logo}
                              alt={tech.name}
                              title={tech.name}
                              aria-label={tech.name}
                              width={24}
                              height={24}
                              className="mx-2 my-1"
                            />
                          ),
                      )}
                    </div>
                  </>
                )}

                <p className="text-lg text-gray-300 mb-4">
                  {selectedProject.description}
                </p>

                {selectedProject.impact &&
                  selectedProject.impact.length > 0 && (
                    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                      {selectedProject.impact.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                {selectedProject.role && (
                  <p className="text-gray-300 mb-4">
                    <span className="font-semibold text-pink-400">Role: </span>
                    {selectedProject.role}
                  </p>
                )}

                <div className="flex flex-col items-start justify-end gap-2">
                  {selectedProject.deployment_link && (
                    <a
                      href={selectedProject.deployment_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-pink-400 hover:text-pink-600 transition-all duration-300 group"
                    >
                      <span className="font-heading text-3xl mr-2">→</span>
                      View App Homepage
                      <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-300" />
                    </a>
                  )}
                  {selectedProject.fa_link && (
                    <a
                      href={selectedProject.fa_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-pink-400 hover:text-pink-600 transition-all duration-300 group"
                    >
                      <span className="font-heading text-3xl mr-2">→</span>
                      View Frontend Repo on GitHub
                      <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-300" />
                    </a>
                  )}
                  {selectedProject.ba_link && (
                    <a
                      href={selectedProject.ba_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-pink-400 hover:text-pink-600 transition-all duration-300 group"
                    >
                      <span className="font-heading text-3xl mr-2">→</span>
                      View Backend Repo on GitHub
                      <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-300" />
                    </a>
                  )}
                  {selectedProject.repo_link && (
                    <a
                      href={selectedProject.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-pink-400 hover:text-pink-600 transition-all duration-300 group"
                    >
                      <span className="font-heading text-3xl mr-2">→</span>
                      View Repo on GitHub
                      <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-300" />
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
