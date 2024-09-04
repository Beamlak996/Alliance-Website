import { Link } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { ImagesSlider } from "./image-slider";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./text-generator-effect";

export const Cta = () => {

  return (
    <BackgroundBeamsWithCollision>
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-rose-500 md:text-3xl animate-bounce">
              Unlock Your Future at Alliance College!
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block animate-fade-in">
              At Alliance College, we’re dedicated to empowering students with
              the skills and knowledge they need to succeed in today's world.
              Join us and start your journey towards excellence!
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="#"
                className="inline-block rounded bg-rose-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-rose-600 focus:outline-none focus:ring focus:ring-yellow-400 animate-pulse"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <ImagesSlider
          className="h-full rounded-l-2xl"
          images={[
            "/alliance-rwanda.jpg",
            "/alliance-ceo.jpg",
            "/alliance-sultan.jpg",
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
              
              <span className="block text-2xl md:text-4xl mt-2">
                Empower Your Future with Us
              </span>
              <TextGenerateEffect words="Seize the Opportunity for Excellence and Innovation." />
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-rose-300/10 border-rose-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <Link to="/contact">
                <span>Get Started →</span>
              </Link>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-rose-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      </section>
    </BackgroundBeamsWithCollision>
  );
};
