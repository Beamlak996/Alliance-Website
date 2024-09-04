import { Link } from "react-router-dom";
import { ImagesSlider } from "./image-slider";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./text-generator-effect";

export const Hero = () => {
  const word = "College";
  const letters = word.split("");

  return (
    <div className="h-[500px] relative overflow-hidden">
      <ImagesSlider
        className="h-full"
        images={[
          "/alliance-college.jpg",
          "/alliance-graduate.jpg",
          "/alliance-library.jpg",
        ]}
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
            Alliance{" "}
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className=""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.4,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <br />
            <TextGenerateEffect
              words="Empowering Tomorrow's Leaders Through Knowledge and Innovation."
            />
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-rose-300/10 border-rose-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <Link to="/contact">
              <span>Join now →</span>
            </Link>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-rose-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};
