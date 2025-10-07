import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket, FaUserTie } from "react-icons/fa";

const About = () => {
  const principles = [
    {
      icon: <FaCode className="text-blue-600 dark:text-blue-400" />,
      title: "Clean Code",
      description: "Readable, maintainable, and well-documented",
    },
    {
      icon: <FaRocket className="text-green-600 dark:text-green-400" />,
      title: "Performance",
      description: "Optimized for speed and efficiency",
    },
    {
      icon: <FaUserTie className="text-purple-600 dark:text-purple-400" />,
      title: "User-Centric",
      description: "Accessible and intuitive interfaces",
    },
    {
      icon: <FaLightbulb className="text-yellow-500 dark:text-yellow-400" />,
      title: "Continuous Learning",
      description: "Always evolving with technology",
    },
  ];

  const stats = [
    { value: "3+ Years", label: "Development Experience" },
    { value: "50+ Projects", label: "Completed" },
    { value: "UI/UX Focused", label: "Development Approach" },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white dark:bg-gray-900 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
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
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
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
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            My journey in web development and what drives me to create
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 space-y-8"
          >
            <motion.div
              className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                I'm a passionate{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  Frontend Developer
                </span>{" "}
                with expertise in building modern, responsive web applications.
                My focus is on creating intuitive user interfaces that combine
                aesthetic appeal with seamless functionality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                With a strong foundation in computer science and years of
                hands-on experience, I specialize in the React ecosystem and
                modern JavaScript frameworks. I believe in writing clean,
                maintainable code that stands the test of time while delivering
                exceptional performance.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                What sets me apart is my ability to bridge the gap between
                design and technology. I don't just implement designs - I
                enhance them with thoughtful interactions and optimized user
                flows that elevate the overall experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg"
              >
                <p className="italic">
                  "I'm committed to continuous learning and staying at the
                  forefront of web technologies to deliver solutions that are
                  not just functional, but exceptional."
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                When I'm not coding, you'll find me contributing to open-source
                projects, exploring new design patterns, or mentoring aspiring
                developers. My goal is to create digital experiences that make a
                real difference.
              </motion.p>
            </motion.div>

            {/* Experience Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"
              >
                Core Principles
              </motion.h3>

              <ul className="space-y-5">
                {principles.map((principle, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="flex-shrink-0 mt-1 p-2 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/10"
                    >
                      {principle.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {principle.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
