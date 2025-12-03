"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { techs } from "../../../public/imgs/technologies";

const Services = () => {
  const cols = 4;

  const rows = Math.ceil(techs.length / cols);
  const groupedTechs = Array.from({ length: rows }, (_, i) =>
    techs.slice(i * cols, i * cols + cols)
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center min-h-screen text-white px-4"
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl mt-20 sm:mt-0 font-heading text-pink-500 leading-wide tracking-widest">
          Technologies I{" "}
          <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            Work
          </span>{" "}
          With
        </h1>
        <motion.span
          className="h-[3px] bg-pink-400 mb-7 mt-2"
          initial={{ width: 0 }}
          animate={{ width: "85%" }}
          transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
        />

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {groupedTechs.map((row, rowIndex) =>
            row.map((tech, colIndex) => {
              const itemIndex = rowIndex * cols + colIndex;
              return (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center"
                  custom={itemIndex}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={32}
                    height={32}
                  />
                  <p className="text-lg">{tech.name}</p>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
