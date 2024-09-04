import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { MobileSidebarMenu } from "./mobile-sidebar-menu";

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
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/alliance-logo.jpg"
            alt="Alliance College"
            className="size-12"
          />
          <p className="font-bold hidden sm:block">Alliance College</p>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-4">
          <NavMenu />
          <Button
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
            className="bg-rose-500 hover:bg-rose-500"
          >
            Online Course
          </Button>
          <Button variant="secondary">Research</Button>
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <MobileSidebarMenu />
        </div>
      </nav>
    </div>
  );
};
