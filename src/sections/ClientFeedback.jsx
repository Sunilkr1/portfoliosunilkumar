import { motion } from "framer-motion";

const testimonials = [
  {
    name: "saurabh Shukla",
    role: "Freelance Client",
    image: "saurabh.jpg",
    message:
      "Sunil is a brilliant developer. He delivered our website on time with pixel-perfect precision. Highly recommended!",
  },
  {
    name: "Sunil Yadav",
    role: "Freelance Client",
    image: "sunil profile image.jpg",
    message:
      "Working with Sunil during his internship was fantastic. He is quick to learn, attentive to detail, and has great frontend skills.",
  },
  {
    name: "Khushi Kumari",
    role: "Freelance Client",
    image: "khushi.jpeg",
    message:
      "Sunil developed a custom dashboard for my logistics firm. His communication and execution were top-notch!",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Client{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Testimonials
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
            Here's what people I've worked with have to say about me.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
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
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              <div className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-xl p-8 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-5 mb-6">
                  <motion.div whileHover={{ scale: 1.1 }} className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {t.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {t.role}
                    </p>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-700 dark:text-gray-300 italic relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-500 before:rounded-full"
                >
                  "{t.message}"
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
