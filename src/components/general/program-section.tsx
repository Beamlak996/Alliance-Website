import { ProgramCard } from "./program-card";
import { FaBriefcase, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FlipWords } from "./flip-words";

const programs = [
  {
    title: "Technical and Vocational Education and Training (TVET)",
    description:
      "We pride ourselves on providing quality education and training in different TVET programs, including Accounting, Information Technology, and Human Resource Management.",
    icon: <FaBriefcase />,
  },
  {
    title: "Undergraduate Program",
    description:
      "We offer three programs: Information Technology, Management, and Accounting and Finance.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Postgraduate Program",
    description:
      "We offer two programs: Masters of Business Administration (MBA) and Masters of Accounting and Finance.",
    icon: <FaChalkboardTeacher />,
  },
];

export const ProgramsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-3xl font-semibold">Programs We Provide</p>

          <FlipWords words={["Undergraduate", "Postgraduate", "TVET"]} />
        </motion.h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={ref}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProgramCard
                title={program.title}
                description={program.description}
                icon={program.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
