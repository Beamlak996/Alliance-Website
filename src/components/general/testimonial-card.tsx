import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  index: number;
  expandedIndex: number | null;
  onToggleExpand: (index: number) => void;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  index,
  expandedIndex,
  onToggleExpand,
}) => {
  const isExpanded = expandedIndex === index;

  return (
    <motion.li
      className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-gray-700 bg-gray-800 px-8 py-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(31,41,55,1), rgba(17,24,39,1))",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <blockquote>
        <div
          aria-hidden="true"
          className="user-select-none absolute inset-0 h-full w-full pointer-events-none"
        ></div>
        <AnimatePresence>
          <motion.p
            className="relative text-sm leading-6 text-gray-100 font-normal transition-all duration-300"
            style={{
              maxHeight: isExpanded ? "none" : "80px",
              overflow: isExpanded ? "visible" : "hidden",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: isExpanded ? "auto" : "80px" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {quote}
          </motion.p>
        </AnimatePresence>
        <button
          onClick={() => onToggleExpand(index)}
          className="text-blue-400 mt-2 text-sm hover:underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        <div className="relative mt-6 flex items-center">
          <span className="flex flex-col gap-1">
            <span className="text-sm leading-6 text-gray-400 font-normal">
              {name}
            </span>
            <span className="text-sm leading-6 text-gray-400 font-normal">
              {title}
            </span>
          </span>
        </div>
      </blockquote>
    </motion.li>
  );
};
