import { FaAngular, FaBootstrap, FaLaravel, FaReact } from "react-icons/fa";
import { SiCodeigniter, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl text-center mb-14 font-semibold"
        >
          Technologies
        </motion.h2>
        <div className="flex flex-wrap gap-x-4 gap-y-5 justify-center">
          <motion.div
            variants={iconVariants(2.1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaReact className="text-7xl text-sky-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiTailwindcss className="text-7xl text-cyan-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaLaravel className="text-7xl text-red-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaBootstrap className="text-7xl text-purple-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMysql className="text-7xl text-blue-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiCodeigniter className="text-7xl text-orange-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaAngular className="text-7xl text-red-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
