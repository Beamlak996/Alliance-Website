import { motion } from "framer-motion";
import { FaBusinessTime, FaCalculator } from "react-icons/fa";

export const PostGradPrograms = () => {
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
            Postgraduate Programs at Alliance College
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate your career with our specialized master's programs tailored
            to equip you with advanced knowledge and skills.
          </motion.p>
        </motion.section>

        {/* Programs Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* MBA Program */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaBusinessTime className="text-4xl text-rose-500" />
            <h3 className="text-2xl font-semibold text-rose-700">
              Master of Business Administration (MBA)
            </h3>
            <p className="text-gray-600">
              Gain comprehensive business management skills and strategic
              insights to lead and innovate in today's competitive environment.
            </p>
          </motion.div>

          {/* Master of Accounting and Finance Program */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaCalculator className="text-4xl text-rose-500" />
            <h3 className="text-2xl font-semibold text-rose-700">
              Master of Accounting and Finance
            </h3>
            <p className="text-gray-600">
              Develop advanced accounting and financial skills necessary for
              strategic decision-making and financial management.
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
            Ready to Advance Your Career?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our postgraduate programs and take the next step towards
            achieving your professional goals.
          </motion.p>
          {/* <Link to="/contact">
            <motion.a
              className="mt-6 inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Learn More
            </motion.a>
          </Link> */}
        </motion.section>
      </div>
    </div>
  );
};
