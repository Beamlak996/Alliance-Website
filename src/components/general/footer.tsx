import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Alliance College</h2>
            <p className="text-gray-400">
              Empowering students to achieve their dreams through quality
              education and innovation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-6 space-x-4">
            <Link
              to="https://www.facebook.com/alliancecollege"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebookF size={24} />
              </motion.div>
            </Link>
            <Link
              to="https://twitter.com/alliancecollege"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter size={24} />
              </motion.div>
            </Link>
            <Link
              to="https://www.linkedin.com/company/alliancecollege"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedinIn size={24} />
              </motion.div>
            </Link>
            <Link
              to="https://www.instagram.com/alliancecollege"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram size={24} />
              </motion.div>
            </Link>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Alliance College. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
