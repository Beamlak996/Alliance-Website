import { ImagesSlider } from "@/components/general/image-slider";
import { TextGenerateEffect } from "@/components/general/text-generator-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { stories } from "@/lib/data"; // Make sure your stories data is properly imported
import { TypewriterEffectSmooth } from "@/components/general/type-writing-effect";

export const OurStoriesPage = () => {
 const words = [
   {
     text: "Our",
   },
   {
     text: "Stories.",
     className: "text-rose-500 dark:text-blue-500",
   },
 ];

  return (
    <div className="min-h-screen p-6 space-y-12">
      <div className="text-center flex items-center justify-center w-full">
        <TypewriterEffectSmooth
          words={words}
          className="text-black"
          cursorClassName="bg-rose-500"
        />
      </div>
      <div className="max-w-7xl mx-auto space-y-16">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Slider with Child Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full h-full rounded-l-2xl overflow-hidden"
            >
              <ImagesSlider
                className="h-full rounded-l-2xl"
                images={story.images} // Dynamically loading the story images
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -80,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="z-50 flex flex-col justify-center items-center"
                >
                  <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    <span className="block text-2xl md:text-4xl mt-2">
                      {story.title} {/* Use the story title */}
                    </span>
                    <TextGenerateEffect words={story.description} />{" "}
                    {/* Use the story description */}
                  </motion.p>
                  <button className="px-4 py-2 backdrop-blur-sm border bg-rose-300/10 border-rose-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <Link to="/contact">
                      <span>Get Started →</span>
                    </Link>
                    <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-rose-500 to-transparent" />
                  </button>
                </motion.div>
              </ImagesSlider>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 p-6 bg-white shadow-lg rounded-r-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-rose-500">
                {story.title} {/* Story title */}
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                {story.description} {/* Story description */}
              </p>
              <Link to="/contact" className="text-rose-500 font-semibold">
                Learn More →
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
