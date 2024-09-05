import { TypewriterEffectSmooth } from "@/components/general/type-writing-effect";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb } from "react-icons/fa"; // Icons for mission and vision

export const MissionAndVisionsPage = () => {
  const words = [
    {
      text: "Missions",
      className: "text-rose-500 dark:text-blue-500",
    },
    {
      text: "&",
    },
    {
      text: "Visions.",
      className: "text-rose-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-rose-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-rose-700 flex items-center justify-center"
        >
          <TypewriterEffectSmooth
            words={words}
            className="text-black"
            cursorClassName="bg-rose-500"
          />
        </motion.h1>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden"
        >
          {/* Mission Icon */}
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-gradient-to-r from-rose-100 to-white py-12">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center text-rose-700"
            >
              <FaBullseye className="text-7xl" />
            </motion.div>
          </div>

          {/* Mission Text */}
          <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-semibold text-rose-700"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-700"
            >
              At Alliance College, our mission is to inspire, educate, and
              empower students by fostering innovation, excellence, and
              leadership. We aim to provide a transformative learning experience
              that prepares our students to thrive in a rapidly changing world.
            </motion.p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden"
        >
          {/* Vision Text */}
          <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-semibold text-rose-700"
            >
              Our Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-700"
            >
              To be a globally recognized institution for excellence in
              education, research, and community impact. We envision a future
              where our graduates lead the way in solving real-world challenges,
              fostering innovation, and contributing to a sustainable, inclusive
              society.
            </motion.p>
          </div>

          {/* Vision Icon */}
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-gradient-to-r from-white to-rose-100 py-12">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center text-rose-700"
            >
              <FaLightbulb className="text-7xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
