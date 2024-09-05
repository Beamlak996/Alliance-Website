import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export const ContactInfo = () => {
  return (
    <div className="bg-rose-500 text-white w-full lg:w-1/2 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="flex items-start mb-4">
        <FaMapMarkerAlt className="text-xl mr-3" />
        <div>
          <p className="font-semibold">Address:</p>
          <p>Alliance College, Ethiopia, Arbaminch</p>
        </div>
      </div>
      <div className="flex items-start mb-4">
        <FaPhone className="text-xl mr-3" />
        <div>
          <p className="font-semibold">Phone:</p>
          <p>+251 912 156 110</p>
        </div>
      </div>
      <div className="flex items-start">
        <FaEnvelope className="text-xl mr-3" />
        <div>
          <p className="font-semibold">Email:</p>
          <p>info@alliance.com</p>
        </div>
      </div>
    </div>
  );
};
