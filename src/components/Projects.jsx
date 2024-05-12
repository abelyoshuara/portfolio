import { LuCode, LuExternalLink } from "react-icons/lu";
import { projects } from "../utils/placeholder-data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl text-center mb-14 font-semibold"
        >
          Projects
        </motion.h2>
        <div className="flex flex-col gap-y-10">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-wrap -mx-4 gap-y-5">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/4 px-4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full"
                />
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-3/4 px-4"
              >
                <div className="flex flex-wrap items-center mb-2 gap-x-5 gap-y-2">
                  <h6 className="font-semibold text-xl">{project.title}</h6>
                  <div className="flex gap-x-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="rounded-full bg-neutral-800 p-2 text-neutral-400"
                    >
                      <LuExternalLink />
                    </a>
                    {project.code !== undefined && (
                      <a
                        href={project.code}
                        target="_blank"
                        className="rounded-full bg-neutral-800 p-2 text-neutral-400"
                      >
                        <LuCode />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mb-4 text-neutral-400 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology, index) => (
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
