import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

const ResumeRequestFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tempEmailDomains = [
    "tempmail.com",
    "mailinator.com",
    "10minutemail.com",
    "guerrillamail.com",
    "yopmail.com",
    "maildrop.cc",
    "temp-mail.org",
    "fakeinbox.com",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isTempEmail = (email) => {
    const domain = email.split("@")[1]?.toLowerCase();
    return tempEmailDomains.some((tempDomain) => domain?.includes(tempDomain));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isTempEmail(formData.email)) {
      toast.error(
        "Please use a permanent email address. Temporary emails are not accepted."
      );
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_lxtgamb",
        "template_snk3zcq",
        {
          name: formData.name,
          to_email: "sunikr87800@gmail.com",
          email: formData.email,
          message: formData.reason,
        },
        "MH2oMryVXGgPGwsXQ"
      );
      setSubmitted(true);
      toast.success("Request sent successfully!");
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white dark:bg-gray-800 w-full max-w-md rounded-xl shadow-2xl p-6 relative border border-gray-200 dark:border-gray-700"
        >
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 text-2xl"
          >
            &times;
          </motion.button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                Request Sent Successfully!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Your request has been received. I will review it and get back to
                you via email.
              </p>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
              >
                Close
              </motion.button>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                  Request Resume
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Please fill out this form to request my resume
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email (No temporary emails)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <textarea
                    name="reason"
                    required
                    placeholder="Why do you want to download my resume?"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors font-medium flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </motion.button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeRequestFormModal;
