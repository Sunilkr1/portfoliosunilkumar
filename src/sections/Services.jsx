import {
  FaCode,
  FaRocket,
  FaBug,
  FaPaintBrush,
  FaFileCode,
  FaTools,
  FaMobileAlt,
  FaLaptopCode,
  FaCogs,
  FaUserTie,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-blue-600 text-3xl" />,
      title: "Frontend Development",
      description:
        "Responsive and dynamic websites using HTML, CSS, JavaScript, React, and modern frameworks.",
    },
    {
      icon: <FaRocket className="text-green-600 text-3xl" />,
      title: "Website Optimization",
      description:
        "Improve speed, SEO, accessibility, and mobile responsiveness for better user experience.",
    },
    {
      icon: <FaBug className="text-red-500 text-3xl" />,
      title: "Bug Fixing & Debugging",
      description:
        "Fix layout issues, responsive design bugs, and JavaScript/React errors efficiently.",
    },
    {
      icon: <FaPaintBrush className="text-pink-500 text-3xl" />,
      title: "Landing Page Development",
      description:
        "Build stunning, modern landing pages with animations and interactivity for portfolios or products.",
    },
    {
      icon: <FaFileCode className="text-purple-600 text-3xl" />,
      title: "UI to Code Conversion",
      description:
        "Convert Figma/Adobe XD designs into clean, pixel-perfect, production-ready code.",
    },
    {
      icon: <FaTools className="text-yellow-500 text-3xl" />,
      title: "Custom Web Forms",
      description:
        "Develop forms with validations, EmailJS/Firebase integration, and automation features.",
    },
    {
      icon: <FaMobileAlt className="text-indigo-500 text-3xl" />,
      title: "One Page Portfolio Setup",
      description:
        "Create fast, modern one-page personal websites tailored to showcase your brand and skills.",
    },
    {
      icon: <FaLaptopCode className="text-teal-500 text-3xl" />,
      title: "API Integration",
      description:
        "Connect and integrate REST APIs, Firebase, or third-party services for dynamic functionality.",
    },
    {
      icon: <FaCogs className="text-gray-600 text-3xl" />,
      title: "Resume Website Development",
      description:
        "Interactive resume website with auto-download, OTP protection, and contact functionality.",
    },
    {
      icon: <FaUserTie className="text-orange-500 text-3xl" />,
      title: "Branding & Freelance Consultation",
      description:
        "Help students/freelancers design portfolios, optimize GitHub, and start freelance journeys.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12 tracking-wide">
          Services I Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-blue-50 dark:bg-blue-900/40 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition duration-300 ease-in-out"
              >
                Hire Me
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
