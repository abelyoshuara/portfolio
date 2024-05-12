import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-14">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-neutral-400"
        >
          Created by <span className="text-neutral-200">Abel Yoshuara</span>{" "}
          using React, Tailwind, Framer Motion, and Vercel hosting.
        </motion.p>
      </div>
    </footer>
  );
}
