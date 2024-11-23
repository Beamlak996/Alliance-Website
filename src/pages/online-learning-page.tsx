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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      {/* Top Section with Click Here Button */}
      <div className="relative bg-rose-700 text-white py-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Alliance College Online Learning
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Flexible, innovative education for a brighter future.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="https://alliance-elearning-client.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-rose-700 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 focus:ring focus:ring-offset-2 focus:ring-rose-700"
            >
              Explore Courses
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: <FaChalkboardTeacher className="text-5xl text-rose-500" />,
              title: "Expert Instructors",
              description:
                "Learn from experienced professionals dedicated to your success.",
            },
            {
              icon: <FaLaptop className="text-5xl text-rose-500" />,
              title: "Flexible Learning",
              description:
                "Access courses anytime, anywhere, and learn at your own pace.",
            },
            {
              icon: <FaBook className="text-5xl text-rose-500" />,
              title: "Comprehensive Resources",
              description:
                "Gain access to a wide range of materials to support your journey.",
            },
            {
              icon: <FaGraduationCap className="text-5xl text-rose-500" />,
              title: "Achieve Your Goals",
              description:
                "Earn certificates and qualifications to unlock new opportunities.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4 transform hover:scale-105 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-rose-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-12 text-center">
        <motion.h2
          className="text-3xl font-semibold text-rose-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Start Learning?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover your path to success with our online courses.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="https://alliance-elearning-client.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-rose-700 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-rose-600 transition-transform transform hover:scale-105 focus:ring focus:ring-offset-2 focus:ring-rose-700"
          >
            Start Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
