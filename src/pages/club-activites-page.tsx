import { TextGenerateEffect } from "@/components/general/text-generator-effect";
import { motion } from "framer-motion";
import { FaBook, FaPaintBrush, FaMusic, FaCode } from "react-icons/fa";

const clubsAndActivities = [
  {
    id: 1,
    name: "Literature Club",
    description:
      "Explore and discuss various literary genres, participate in book readings, and more.",
    icon: <FaBook className="text-4xl text-rose-600" />,
  },
  {
    id: 2,
    name: "Art Club",
    description:
      "Engage in artistic activities including painting, sculpting, and craft workshops.",
    icon: <FaPaintBrush className="text-4xl text-red-500" />,
  },
  {
    id: 3,
    name: "Music Band",
    description:
      "Join the music band, practice various instruments, and perform at events.",
    icon: <FaMusic className="text-4xl text-rose-500" />,
  },
  {
    id: 4,
    name: "Coding Club",
    description:
      "Collaborate on coding projects, attend workshops, and participate in hackathons.",
    icon: <FaCode className="text-4xl text-rose-500" />,
  },
];

export const ClubAndActivitiesPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-rose-50 via-rose-50 to-yellow-gray">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 rose rose"
            fill="none"
            xmlns="http://www.w3.org/rose0/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="4"
            />
            <circle
              cx="150"
              cy="150"
              r="40"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </motion.div>

        {/* Introduction Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.h1
            className="text-4xl font-extrabold text-rose-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Clubs and Activities
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TextGenerateEffect
              black={true}
              words="Explore the diverse clubs and activities at our college. Whether
            you're interested in arts, music, literature, or coding, there's
            something for everyone to enjoy and participate in."
            />
          </motion.p>
        </motion.section>

        {/* Clubs and Activities Section */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clubsAndActivities.map((club) => (
            <motion.div
              key={club.id}
              className="relative p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer group overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-4">
                {club.icon}
                <h3 className="text-2xl font-semibold mt-2 text-rose-600">
                  {club.name}
                </h3>
              </div>
              <p className="text-gray-700 text-center">{club.description}</p>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-rose-rose via-rose-100 to-white opacity-30"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
