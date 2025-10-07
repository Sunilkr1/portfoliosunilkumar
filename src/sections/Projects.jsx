import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";

const projects = [
  {
    title: "EcoNest",
    description:
      "EcoNest is a modern and responsive portfolio website built using HTML, CSS, and JavaScript. It features a clean, eco-friendly design, smooth animations, and a mobile-friendly layout — perfect for showcasing your work or personal brand.",
    tech: ["Html", "CSS", "Java Script"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://eco4nest.netlify.app/",
  },
  {
    title: "Friendship Circle",
    description:
      "Friend Circle is a simple and responsive website built using HTML, CSS, and JavaScript, designed to connect and celebrate friendships. With a clean layout and smooth interactions, it's perfect for showcasing memories, group photos, or shared events.",
    tech: ["Html", "Css", "Java Script"],
    github: "https://github.com/yourusername/news-app",
    demo: "https://friendshipcircle.netlify.app/",
  },
  {
    title: "Petrshop",
    description:
      "Petrshop is a stylish and responsive pet-selling website built using HTML, CSS, and JavaScript. Focused on dogs, it showcases pet profiles with images, breed info, and contact details — perfect for pet lovers and buyers looking for their ideal companion.",
    tech: ["Html", "Css", "Java Script"],
    github: "https://github.com/Sunilkr1/Petrshop",
    demo: "https://petrshop.netlify.app/",
  },
  {
    title: "Simon Says Game",
    description:
      "Simon Says is a classic memory game where you must follow a sequence of colors and sounds that the computer generates. Your task is to remember the sequence and repeat it back correctly. The game becomes progressively challenging as the sequence gets longer. How far can you go?",
    tech: ["Html", "Css", "Java Script"],
    github: "https://github.com/Sunilkr1/Simon-game",
    demo: "https://sunilkr1.github.io/Simon-game/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
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
            Featured{" "}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
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
            Here are some of my selected projects. Each one was built to solve
            specific problems and showcase different skills.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.15,
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="relative group"
            >
              {/* 🛠️ FIXED: pointer-events-none to make icons clickable */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

              <div className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-8">
                    <FiFolder className="text-blue-500 text-4xl" />
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <FaGithub className="text-2xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.05 * i }}
                          viewport={{ once: true }}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm px-4 py-1.5 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Sunilkr1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
