import { experiences } from "../utils/placeholder-data";
import { motion } from "framer-motion";

export default function Experiences() {
  return (
    <section id="experiences" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl text-center mb-14 font-semibold"
        >
          Experiences
        </motion.h2>
        <div className="flex flex-col gap-y-10">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-wrap">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-neutral-400 text-lg">
                  {experience.date}
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold text-xl">
                  {experience.role.join(" | ")} -{" "}
                  <span className="text-cyan-100">{experience.company}</span>
                </h6>
                <p className="mb-4 text-neutral-400 text-lg">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-900 px-2 py-1 font-medium text-cyan-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
