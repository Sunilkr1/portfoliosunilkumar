import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJs } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-blue-400" />,
      level: "90%",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      level: "90%",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      level: "85%",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      level: "80%",
      color: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: "75%",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-500 dark:text-gray-200" />,
      level: "75%",
      color: "from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: "95%",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: "70%",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500" />,
      level: "85%",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Databases",
      icon: <FaDatabase className="text-gray-400" />,
      level: "70%",
      color: "from-gray-300 to-gray-500 dark:from-gray-500 dark:to-gray-700",
    },
  ];

  const categories = [
    {
      name: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Databases"],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
          />
        </svg>
      ),
    },
    {
      name: "Tools",
      skills: ["Git"],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
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
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Technical Skills
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Technologies I've mastered and use regularly to build exceptional
            applications
          </motion.p>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              <div className="h-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl rounded-xl p-8 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-5">
                  {skills
                    .filter((skill) => category.skills.includes(skill.name))
                    .map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-medium text-gray-700 dark:text-gray-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                            style={{ width: skill.level }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Also experienced with:
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              "JavaScript",
              "Node.js",
              "REST APIs",
              "Jest",
              "Docker",
              "AWS",
              "Firebase",
              "Figma",
              "Webpack",
              "CSS",
              "PostgreSQL",
              "HTML",
              "Redux",
              "GraphQL",
              "Sass",
              "CI/CD",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
