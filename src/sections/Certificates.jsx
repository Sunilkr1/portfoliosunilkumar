import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Css",
    platform: "HackerRank",
    image: "Css.png",
    link: "https://www.hackerrank.com/certificates/2a760b67b4b3",
  },
  {
    title: "JavaScript Intermediate",
    platform: "HackerRank",
    image: "javascript.png",
    link: "https://www.hackerrank.com/certificates/bf45e7778ebf",
  },
  {
    title: "Sql (Advanced)",
    platform: "HackerRank",
    image: "Sql.png",
    link: "https://www.hackerrank.com/certificates/ea9765d7bbcb",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
          >
            My{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Certifications
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-blue-600 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            These certifications validate my skills and learning from top
            platforms.
          </motion.p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.15,
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="relative group block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              <div className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden h-48"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <motion.span
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white font-medium"
                    >
                      {cert.platform}
                    </motion.span>
                  </div>
                </motion.div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-lg font-bold text-gray-800 dark:text-white line-clamp-2"
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </motion.span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2">
                      View Certificate
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
