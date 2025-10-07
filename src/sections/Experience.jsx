import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaCodeBranch } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Intern",
    company: "codesoft",
    duration: "Jan 2024 – Mar 2024",
    description:
      "Developed responsive web applications and optimized UI for a better user experience.",
    tags: ["React", "REST API", "Tailwind", "Teamwork"],
    icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
    current: false,
  },
  {
    role: "Freelance Developer",
    company: "Upwork & Clients",
    duration: "Apr 2024 – Jun 2024",
    description:
      "Delivered complete frontend solutions for client websites and dashboards.",
    tags: ["JavaScript", "Firebase", "Next.js", "Responsive Design"],
    icon: <FaBriefcase className="text-purple-500 text-2xl" />,
    current: false,
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "Jul 2024 – Present",
    description:
      "Contributed to frontend open-source projects by fixing bugs, improving UI and writing docs.",
    tags: ["Open Source", "Git", "Documentation"],
    icon: <FaCodeBranch className="text-green-500 text-2xl" />,
    current: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional experiences that shaped my skills and perspective
          </p>
        </motion.div>

        {/* Experience Cards - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl ${
                exp.current
                  ? "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/10"
                  : "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.duration}
                  </span>
                  {exp.current && (
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Connector (for visual flow) */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mt-12 mx-12 opacity-20"
        />
      </div>
    </section>
  );
};

export default Experience;
