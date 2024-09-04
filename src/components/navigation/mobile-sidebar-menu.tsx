import React, { useState } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router-dom";
import {
  aboutAlliance,
  academics,
  admissions,
  lifeInAlliance,
} from "@/lib/data";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About Alliance", items: aboutAlliance },
  { title: "Academics", items: academics },
  { title: "Admissions", items: admissions },
  { title: "Life in Alliance", items: lifeInAlliance },
  { title: "News", href: "#" },
];

export const MobileSidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (title: string) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="md:hidden pr-4 hover:opacity-75 transition"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-4 bg-white w-64">
        <nav className="flex flex-col space-y-4 pt-6">
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => handleMenuClick(item.title)}
                className="w-full text-gray-800 hover:bg-slate-100 p-2 rounded-md transition text-left flex items-center justify-between"
              >
                {item.title}
                {item.items && (
                  <span>
                    {activeMenu === item.title ? (
                      <ChevronUp className="size-4" />
                    ) : (
                      <ChevronDown className="size-4" />
                    )}
                  </span>
                )}
              </button>
              {item.items && activeMenu === item.title && (
                <ul className="ml-4 space-y-2">
                  {item.items.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        to={subItem.href}
                        className="block text-gray-800 hover:bg-slate-100 p-2 rounded-md transition"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
