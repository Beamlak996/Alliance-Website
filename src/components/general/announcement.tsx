import { PhoneCall, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const Announcement = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-gray-500 text-white py-2 px-4">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <PhoneCall className="size-4" />
            <p>+251 912 156 110</p>
          </div>
          <div className="flex items-center gap-2">
            <Send className="size-4" />
            <p className="hover:underline transition hover:cursor-pointer">
              info@alliance.com
            </p>
          </div>
        </div>
        <p className="text-sm text-center mx-auto">
          👋 Welcome, to <span className="font-bold">Alliance College.</span>{" "}
        </p>
        <Link to={"/contact"}>
          <Button variant="ghost" className="rounded-3xl">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};
