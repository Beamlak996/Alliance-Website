import { BackgroundBeamsWithCollision } from "@/components/general/background-beams-with-collision";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/general/contact-form";
import { ContactInfo } from "@/components/general/contact-info";

export const ContactPage = () => {
  return (
    <BackgroundBeamsWithCollision className="sm:min-h-screen h-[800px]" >
      <div className="flex justify-center items-center sm:min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};
