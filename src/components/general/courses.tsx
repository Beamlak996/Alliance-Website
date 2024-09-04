import React from "react";
import { CourseCard } from "./course-card";
import { programs } from "@/lib/data";
import { motion } from "framer-motion";

export const CoursesComponent: React.FC = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {programs.map((program, idx) => (
        <motion.div
          key={idx}
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            {program.type}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.courses.map((course, index) => (
              <CourseCard
                key={index}
                name={course.name}
                lectures={course.lectures}
                icon={course.icon}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
