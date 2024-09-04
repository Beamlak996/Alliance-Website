import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlus, FaTimes } from "react-icons/fa";
import { faqs } from "@/lib/data";

export const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-rose-500 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <motion.div
          ref={ref}
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-s-4 border-rose-500 bg-gray-50 p-6 rounded-lg"
            >
              <motion.details
                open={expandedIndex === index}
                className="group [&_summary::-webkit-details-marker]:hidden"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setExpandedIndex(expandedIndex === index ? null : index);
                  }}
                  className="flex cursor-pointer items-center justify-between gap-1.5"
                >
                  <h2 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h2>
                  <motion.span
                    className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    initial={false}
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedIndex === index ? (
                      <FaTimes className="text-xl" />
                    ) : (
                      <FaPlus className="text-xl" />
                    )}
                  </motion.span>
                </summary>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expandedIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 leading-relaxed text-gray-700"
                >
                  {faq.answer}
                </motion.p>
              </motion.details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
