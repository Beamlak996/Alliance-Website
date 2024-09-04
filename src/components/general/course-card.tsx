import React from "react";
import { motion } from "framer-motion";

interface CourseCardProps {
  name: string;
  lectures: number;
  icon: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  name,
  lectures,
  icon,
}) => {
  return (
    <motion.div
      className="bg-gray-800 p-4 cursor-pointer rounded-lg shadow-md text-white flex flex-col items-center relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gray-800  opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-30"
        layoutId="hoverBackground"
      />
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-400">{lectures} Lectures</p>
      </div>
    </motion.div>
  );
};
