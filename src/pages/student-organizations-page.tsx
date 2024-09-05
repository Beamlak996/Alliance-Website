import { TextGenerateEffect } from "@/components/general/text-generator-effect";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaChalkboardTeacher,
  FaUsers,
  FaFootballBall,
} from "react-icons/fa";

const organizations = [
  {
    id: 1,
    name: "Student Council",
    description:
      "The Student Council represents the voice of the students and organizes campus-wide events.",
    icon: <FaUniversity className="text-3xl text-rose-500" />,
  },
  {
    id: 2,
    name: "Academic Clubs",
    description:
      "Clubs dedicated to various academic disciplines and interests.",
    icon: <FaChalkboardTeacher className="text-3xl text-rose-500" />,
  },
  {
    id: 3,
    name: "Cultural Groups",
    description:
      "Groups that celebrate and promote cultural diversity and heritage.",
    icon: <FaUsers className="text-3xl text-red-500" />,
  },
  {
    id: 4,
    name: "Sports Teams",
    description:
      "Teams participating in various sports and representing the college in competitions.",
    icon: <FaFootballBall className="text-3xl text-yellow-500" />,
  },
];

export const StudentOrganizationsPage = () => {
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
            className="text-4xl font-extrabold text-rose-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Student Organizations
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TextGenerateEffect
            black={true}
            className="text-white"
              words="Discover the vibrant student organizations at our college. Engage
            with diverse groups, participate in events, and enhance your college
            experience."
            />
          </motion.p>
        </motion.section>

        {/* Organizations Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizations.map((org) => (
            <motion.div
              key={org.id}
              className="relative p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer group hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-4">
                {org.icon}
                <h3 className="text-xl font-semibold mt-2">{org.name}</h3>
              </div>
              <p className="text-gray-700">{org.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
