import { useState } from "react";
import { motion } from "framer-motion";
import ResumeRequestFormModal from "../assets/components/ResumeRequestFormModal";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
} from "react-icons/fa";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-800 to-indigo-600 text-white px-4 py-12 md:py-24">
      {showModal && (
        <ResumeRequestFormModal onClose={() => setShowModal(false)} />
      )}

      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-yellow-300">Sunil</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-6">
              Frontend Developer
            </h2>

            <p className="text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
              I specialize in building responsive, user-friendly web
              applications using React, Next.js, and modern JavaScript
              frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-800 rounded-lg font-semibold hover:bg-blue-100 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <FaFileDownload /> Request Resume
              </button>

              <a
                href="https://github.com/Sunilkr1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <FaGithub /> GitHub
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-5 mt-8">
              {[
                {
                  icon: <FaGithub />,
                  url: "https://github.com/Sunilkr1",
                },
                {
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/in/sunil-kumar27",
                },
                {
                  icon: <FaTwitter />,
                  url: "https://x.com/SunilYadav84347",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-yellow-300 transition-all transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mt-12 lg:mt-0"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative group">
              <img
                src="picofme.png"
                alt="Sunil Kumar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
            </div>

            <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-bold shadow-md flex items-center">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-xs sm:text-sm">Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
