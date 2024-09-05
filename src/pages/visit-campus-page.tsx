import { motion } from "framer-motion";
import {
  FaUniversity,
  FaBook,
  FaIndustry,
  FaGraduationCap,
} from "react-icons/fa";
import { TypewriterEffectSmooth } from "@/components/general/type-writing-effect";

const cards = [
  {
    id: 1,
    content: (
      <>
        <FaUniversity className="text-2xl mb-2" />
        <h3 className="text-lg font-semibold">Alliance College Campus</h3>
        <p className="text-sm">
          Our main campus with modern facilities and vibrant student life.
        </p>
      </>
    ),
    className: "bg-gray-100 col-span-2 row-span-2", // Larger item
    thumbnail: "/alliance-college.jpg",
  },
  {
    id: 2,
    content: (
      <>
        <FaBook className="text-2xl mb-2" />
        <h3 className="text-lg font-semibold">Alliance Library</h3>
        <p className="text-sm">
          A vast collection of books and resources for all your academic needs.
        </p>
      </>
    ),
    className: "bg-gray-100",
    thumbnail: "/alliance-library.jpg",
  },
  {
    id: 3,
    content: (
      <>
        <FaIndustry className="text-2xl mb-2" />
        <h3 className="text-lg font-semibold">Campus Facilities</h3>
        <p className="text-sm">
          Advanced facilities and infrastructure supporting academic excellence.
        </p>
      </>
    ),
    className: "bg-gray-100",
    thumbnail: "/alliance-plant-2.jpg",
  },
  {
    id: 4,
    content: (
      <>
        <FaGraduationCap className="text-2xl mb-2" />
        <h3 className="text-lg font-semibold">Graduation Ceremony</h3>
        <p className="text-sm">
          Celebrating the achievements of our students in a grand ceremony.
        </p>
      </>
    ),
    className: "bg-gray-100",
    thumbnail: "/allinace-grad.jpg",
  },
];

export const VisitCampusPage = () => {
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
            className="text-4xl font-extrabold text-rose-700 flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypewriterEffectSmooth
              words={[
                { text: "Visit" },
                { text: "Our" },
                {
                  text: "Campus.",
                  className: "text-rose-500 dark:text-blue-500",
                },
              ]}
              className="text-black"
              cursorClassName="bg-rose-500"
            />
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore the highlights of Alliance College through our campus
            gallery. Experience our state-of-the-art facilities and vibrant
            campus life.
          </motion.p>
        </motion.section>

        {/* Gallery Section */}
        <div className="relative w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${card.className}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={card.thumbnail}
                alt={`Thumbnail ${card.id}`}
                className="object-cover w-full h-full"
                layoutId={`image-${card.id}-image`}
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">{card.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
