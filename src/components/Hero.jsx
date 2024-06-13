import { FiDownload } from "react-icons/fi";
import { hero } from "../utils/placeholder-data";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 1,
    },
  },
});

export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <motion.img
            variants={container(0)}
            initial="hidden"
            animate="visible"
            src={hero.profile}
            alt="Abel Yoshuara"
            className="rounded-full mx-auto mb-12"
          />
          <motion.h1
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="mb-5 text-4xl md:text-5xl font-medium"
          >
            {hero.heading}
          </motion.h1>
          <motion.p
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-xl"
          >
            {hero.position.join(" | ")}
          </motion.p>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-5 text-justify text-neutral-400 text-lg"
          >
            {hero.description}
          </motion.p>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="inline-flex items-center px-5 py-2 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mx-auto"
          >
            <FiDownload size={20} />
            <span className="ms-2">Resume</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
