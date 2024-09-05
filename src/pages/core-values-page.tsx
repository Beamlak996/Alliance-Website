import { TypewriterEffectSmooth } from "@/components/general/type-writing-effect";
import { values } from "@/lib/data";
import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaStar,
  FaRocket,
  FaPeopleCarry,
  FaChalkboardTeacher,
} from "react-icons/fa";

export const CoreValuesPage = () => {
  const words = [
    {
      text: "Our",
    },
    {
      text: "Core",
    },
    {
      text: "Values.",
      className: "text-rose-500 dark:text-blue-500",
    },
  ];

  const icons = [
    FaHandHoldingHeart,
    FaStar,
    FaRocket,
    FaPeopleCarry,
    FaChalkboardTeacher,
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

        {/* Core Values List */}
        <div className="space-y-8">
          {values.map((value, index) => {
            const IconComponent = icons[index % icons.length]; // Cycle through icons

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-2xl p-6 flex items-start space-x-4"
              >
                <motion.div
                  className="text-rose-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="text-3xl" />
                </motion.div>
                <div className="flex-1">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl font-semibold text-rose-700"
                  >
                    {value.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-700"
                  >
                    {value.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
