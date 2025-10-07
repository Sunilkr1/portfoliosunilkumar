import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

// ✅ Email validation function
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // 👀 Anti-bot hidden field
    const botField = form.current.bot_field?.value;
    if (botField) return;

    const email = form.current.user_email.value;

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_osox4xm",
        "template_hnl4upz",
        form.current,
        "A-xSzhfT3seDyB9-g"
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅");
          form.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 px-4 overflow-x-hidden"
    >
      <Toaster position="top-right" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Let's connect! Drop me a message or reach out directly.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 dark:text-gray-300"
          >
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-600 text-xl mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>sunilkr87800@email.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-blue-600 text-xl mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 84347 88080</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Bhopal, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-5 overflow-hidden"
          >
            {/* Hidden field for bot protection */}
            <input type="hidden" name="bot_field" />

            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
