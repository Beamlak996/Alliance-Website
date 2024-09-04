import { BackgroundBeamsWithCollision } from "@/components/general/background-beams-with-collision";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/general/contact-form";
import { ContactInfo } from "@/components/general/contact-info";

export const ContactPage = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex justify-center items-center min-h-screen w-[800px]">
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex w-full max-w-4xl"
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
