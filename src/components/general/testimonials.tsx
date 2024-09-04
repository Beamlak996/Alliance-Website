import React from "react";
import { InfiniteScrollingTestimonials } from "./infinite-scrolling-testomnials";
import { TypewriterEffectSmooth } from "./type-writing-effect";
import { sampleTestimonials } from "@/lib/data";


export const Testimonials: React.FC = () => {
  const words = [
    {
      text: "What",
    },
    {
      text: "Our",
    },
    {
      text: "Students",
      className: "text-rose-500 dark:text-blue-500",
    },
    {
      text: "Say.",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 mx-auto flex items-center justify-center w-full">
          <TypewriterEffectSmooth
            words={words}
            className="text-black"
            cursorClassName="bg-rose-500"
          />
        </h2>
        <InfiniteScrollingTestimonials
          items={sampleTestimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

