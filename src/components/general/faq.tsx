import { faqs } from "@/lib/data";
import { motion } from "framer-motion";

export const FAQ = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-rose-500 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group border-s-4 border-rose-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden border rounded-md"
            >
              <details>
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h2>
                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};