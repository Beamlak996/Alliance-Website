import { BentoGrid, BentoGridItem } from "@/components/general/bento-grid";
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
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-rose-700 mb-8 flex items-center justify-center"
        >
          <TypewriterEffectSmooth
            words={words}
            className="text-black"
            cursorClassName="bg-rose-500"
          />
        </motion.h1>

        {/* Bento Grid */}
        <BentoGrid className="max-w-4xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = icons[index % icons.length]; 
            const isLarge = index % 4 === 0; 

            return (
              <BentoGridItem
                key={index}
                title={value.title}
                description={value.description}
                icon={<IconComponent className="text-3xl text-rose-500" />}
                className={isLarge ? "md:col-span-2 md:row-span-2" : ""}
              />
            );
          })}
        </BentoGrid>
      </div>
    </div>
  );
};
