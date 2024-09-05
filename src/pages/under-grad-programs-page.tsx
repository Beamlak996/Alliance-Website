import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMoneyBillWave,
  FaNetworkWired,
  FaCodeBranch,
} from "react-icons/fa";

export const UnderGradProgramsPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Introduction Section */}
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
            Undergraduate Programs at Alliance College
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our diverse range of undergraduate programs designed to
            provide you with comprehensive knowledge and practical skills for
            your future career.
          </motion.p>
        </motion.section>

        {/* Programs Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {/* Information Technology and Management */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaLaptopCode className="text-4xl text-rose-500" />
            <h3 className="text-2xl font-semibold text-rose-700">
              Information Technology and Management
            </h3>
            <p className="text-gray-600">
              Equip yourself with knowledge in IT and management to excel in
              various technological and business environments.
            </p>
          </motion.div>

          {/* Accounting and Finance */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaMoneyBillWave className="text-4xl text-rose-500" />
            <h3 className="text-2xl font-semibold text-rose-700">
              Accounting and Finance
            </h3>
            <p className="text-gray-600">
              Develop a strong foundation in accounting and finance to manage
              financial records and make informed decisions.
            </p>
          </motion.div>

          {/* Networking and Cybersecurity */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaNetworkWired className="text-4xl text-rose-500" />
            <h3 className="text-2xl font-semibold text-rose-700">
              Networking and Cybersecurity
            </h3>
            <p className="text-gray-600">
              Gain expertise in networking and cybersecurity to protect and
              manage information systems in today's digital age.
            </p>
          </motion.div>

          {/* Software Development */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaCodeBranch className="text-4xl text-rose-500" />
            <h3 className="text-2xl font-semibold text-rose-700">
              Software Development
            </h3>
            <p className="text-gray-600">
              Learn to design and develop software applications with a
              comprehensive curriculum focused on programming and software
              engineering.
            </p>
          </motion.div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.h2
            className="text-3xl font-semibold text-rose-700"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Enroll in Our Undergraduate Programs?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our undergraduate programs and take the first step toward
            your future career with comprehensive and hands-on education.
          </motion.p>
          <motion.a
            href="#"
            className="mt-6 inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn More
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};
