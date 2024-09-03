import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";


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
        isScrolled ? "shadow-md" : ""
      )}
    >
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/alliance-logo.jpg" alt="Alliance College" className="size-12" />
          <p className="font-bold" >Alliance College</p>
        </div>
        <ul className="flex space-x-4">
          
        </ul>
        <div></div>
      </nav>
    </div>
  );
};

