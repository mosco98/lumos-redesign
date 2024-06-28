"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="py-6 md:py-7 fixed w-full left-0 top-0 bg-white z-50">
        <div className="md:container px-4 md:px-[56px] flex items-center justify-between">
          <div className="flex items-center gap-[82px]">
            <h1 className="text-2xl font-bold">Lumos</h1>

            <div className="items-center gap-8 text-[#475467] text-[15px] hidden md:flex">
              <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
                Features
              </button>
              <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
                Community
              </button>
              <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
                Resources
              </button>
              <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
                Pricing
              </button>
            </div>
          </div>

          <button className="h-11 bg-black text-white px-[18px] py-[10px] rounded-lg hover:opacity-85 transition-all duration-300 ease-in-out font-medium text-[15px] hidden md:inline-flex items-center justify-center">
            Get started for free
          </button>

          <button
            className="w-10 h-10 flex md:hidden items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 256 256"
              className="w-8 h-8"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
