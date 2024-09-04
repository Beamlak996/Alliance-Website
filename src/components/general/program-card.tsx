import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform"
      whileHover={{ rotate: 3, opacity: 0.9 }}
      whileTap={{ rotate: -2, opacity: 0.8 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 flex flex-col items-center">
        <div className="text-4xl text-rose-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </motion.div>
  );
};
