import { useState, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { NavMenu } from "../navigation/nav-menu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "bg-white sticky top-0 z-50",
        isScrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <nav className="container mx-auto p-4 flex items-center justify-center relative">
        {/* Logo */}
        <div className="absolute left-4 flex items-center gap-2">
          <img
            src="/alem-hosptial-logo.jpg"
            alt="Alem Primary Hospital Logo"
            className="w-12 h-12 rounded-full"
          />
          <p className="font-bold hidden sm:block">Alem Primary Hospital</p>
        </div>

        {/* Centered Navigation Menu */}
        <div className="flex items-center gap-8 mr-6">
          <NavMenu />
        </div>

        {/* Contact Us Button */}
        <div className="absolute right-4">
          <Link to="/contact-us">
            <Button
              variant="expandIcon"
              Icon={ArrowRightIcon}
              iconPlacement="right"
              className="bg-sky-500 hover:bg-sky-600"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
