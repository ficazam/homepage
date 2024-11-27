"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { techs } from "../../public/imgs/technologies";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center py-12"
      >
        <h1 className="text-5xl font-bold text-pink-500">
          Hi, I&apos;m Felipe Icaza!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          A certified Python & JavaScript web developer with 4 years of
          experience building dynamic, scalable, and user-friendly applications.
        </p>
        <div className="mt-6">
          <a
            href="/portfolio"
            className="bg-pink-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            View My Work
          </a>
        </div>
      </motion.div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Technologies I Work With
        </h2>
        <div className="mt-8 grid grid-cols-4 gap-8">
          {techs.map((tech) => (
            <div className="flex flex-col items-center" key={tech.name}>
              <Image src={tech.logo} alt={tech.name} width={32} height={32} />
              <p className="mt-2 text-lg">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-lg text-gray-700">
          I transitioned into web development after 12 years in architecture and
          construction. As a self-taught developer, I&apos;ve mastered Python,
          JavaScript, and frameworks like React to build modern, scalable
          applications. I&apos;m passionate about creating solutions that make a
          real impact.
        </p>
        <div className="mt-6">
          <a
            href="/about"
            className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600"
          >
            Read My Full Story
          </a>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Featured Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src="/project1.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Project 1</h3>
              <p className="mt-2 text-gray-600">
                Description of the project. What was the problem, and how did
                you solve it?
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/yourusername/project1"
                  className="text-pink-500 hover:text-pink-600"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Add more projects here */}
        </div>
      </section>

      <section className="mt-16 bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Let&apos;s Connect
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Interested in working together? I&apos;d love to hear from you.
        </p>
        <p className="mt-4 text-center text-lg text-gray-600">
          Let&apos;s discuss how I can help!
        </p>
        <div className="mt-6 text-center">
          <a
            href="/contact"
            className="bg-pink-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-pink-600"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
