import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <section id="contacts" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl text-center mb-14 font-semibold"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.a
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            href="mailto:abelyoshuara@gmail.com"
            className="text-center bg-neutral-900 rounded-lg py-14 group"
          >
            <FiMail size={30} className="block text-center w-full mb-3" />
            <span className="text-lg text-neutral-400 group-hover:underline group-hover:text-blue-400">
              abelyoshuara@gmail.com
            </span>
          </motion.a>
          <motion.a
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            href="tel:+6282145363402"
            className="text-center bg-neutral-900 rounded-lg py-14 group"
          >
            <FiPhone size={30} className="block text-center w-full mb-3" />
            <span className="text-lg text-neutral-400 group-hover:underline group-hover:text-blue-400">
              +6282145363402
            </span>
          </motion.a>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center bg-neutral-900 rounded-lg py-14"
          >
            <FiMapPin size={30} className="block text-center w-full mb-3" />
            <span className="text-lg text-neutral-400">
              Denpasar, Bali, Indonesia.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
