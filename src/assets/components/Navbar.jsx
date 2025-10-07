import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "https://portfoliosunilkumar.netlify.app/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Sunilkr1" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sunil-kumar27/",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/SunilYadav84347?t=IyfGH6xiDRoEdPsgsO5F1w&s=09",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = (href) => {
    setOpen(false);
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#home" className="flex items-center" aria-label="Home">
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                className="fill-blue-600 dark:fill-blue-500"
              />
              <path
                d="M30 30 L70 30 L80 50 L70 70 L30 70 L20 50 Z"
                className="fill-white dark:fill-gray-900"
              />
              <text
                x="50"
                y="55"
                fontFamily="Arial"
                fontSize="24"
                fontWeight="bold"
                className="fill-blue-600 dark:fill-blue-500"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                S
              </text>
            </svg>

            <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
              <Typewriter
                words={["Sunil Kumar"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-gray-800 dark:text-gray-200 font-medium">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2 + index * 0.1,
                }}
              >
                <a
                  href={link.href}
                  className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="border-l border-gray-300 dark:border-gray-700 h-6 mx-2"></div>

          <motion.div
            className="flex gap-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-lg"
                aria-label={`${
                  social.href.split("//")[1].split(".")[0]
                } profile`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-2xl cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  className="w-full text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => handleMobileLinkClick(link.href)}
                    className="block py-3 text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 w-full px-4"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}

              <div className="flex gap-6 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 

