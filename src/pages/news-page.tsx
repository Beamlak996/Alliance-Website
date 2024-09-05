import { motion } from "framer-motion";
import {
  FaUniversity,
  FaBook,
  FaIndustry,
  FaGraduationCap,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Alliance College Campus",
    description:
      "Our main campus with modern facilities and vibrant student life.",
    icon: <FaUniversity className="text-4xl mb-2 text-blue-600" />,
    thumbnail: "/alliance-college.jpg",
  },
  {
    id: 2,
    title: "Alliance Library",
    description:
      "A vast collection of books and resources for all your academic needs.",
    icon: <FaBook className="text-4xl mb-2 text-purple-600" />,
    thumbnail: "/alliance-library.jpg",
  },
  {
    id: 3,
    title: "Campus Facilities",
    description:
      "Advanced facilities and infrastructure supporting academic excellence.",
    icon: <FaIndustry className="text-4xl mb-2 text-green-600" />,
    thumbnail: "/alliance-plant-2.jpg",
  },
  {
    id: 4,
    title: "Graduation Ceremony",
    description:
      "Celebrating the achievements of our students in a grand ceremony.",
    icon: <FaGraduationCap className="text-4xl mb-2 text-red-600" />,
    thumbnail: "/alliance-graduate.jpg",
  },
];

export const NewsPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl font-extrabold text-rose-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Latest News and Updates
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest news and events happening around the
            campus. From new facilities to special ceremonies, find out what's
            new at our college.
          </motion.p>
        </motion.section>

        {/* News Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.a
              key={card.id}
              href="#"
              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-3">
                  {card.icon}
                  <h3 className="text-xl font-semibold ml-2 text-gray-800">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
