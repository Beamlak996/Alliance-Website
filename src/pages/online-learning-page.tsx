import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const OnlineLearningPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen p-6 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl font-extrabold text-rose-700"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Alliance College Online Learning
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Embrace a new era of education with our flexible and innovative
            online learning platform.
          </motion.p>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaChalkboardTeacher className="text-4xl text-rose-500" />
            <h3 className="text-xl font-semibold text-rose-700">
              Expert Instructors
            </h3>
            <p className="text-gray-600">
              Learn from experienced professionals who are dedicated to helping
              you succeed.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaLaptop className="text-4xl text-rose-500" />
            <h3 className="text-xl font-semibold text-rose-700">
              Flexible Learning
            </h3>
            <p className="text-gray-600">
              Access courses anytime, anywhere, and learn at your own pace.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaBook className="text-4xl text-rose-500" />
            <h3 className="text-xl font-semibold text-rose-700">
              Comprehensive Resources
            </h3>
            <p className="text-gray-600">
              Gain access to a wide range of materials to support your learning
              journey.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaGraduationCap className="text-4xl text-rose-500" />
            <h3 className="text-xl font-semibold text-rose-700">
              Achieve Your Goals
            </h3>
            <p className="text-gray-600">
              Earn certificates and qualifications that open doors to new
              opportunities.
            </p>
          </motion.div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.h2
            className="text-3xl font-semibold text-rose-700"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our courses and begin your learning journey today!
          </motion.p>
          <motion.a
            href="#"
            className="mt-6 inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="https://alliance-elearning-client.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </Link>
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};
