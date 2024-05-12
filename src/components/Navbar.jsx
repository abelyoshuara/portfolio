import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="py-6">
      <div className="container flex items-center justify-between">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-4xl font-bold"
        >
          Ay
        </motion.a>
        <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4 text-3xl">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            href="https://www.linkedin.com/in/abelyoshuara"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            href="https://github.com/abelyoshuara"
            target="_blank"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            href="https://www.instagram.com/abelyoshuara"
            target="_blank"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
