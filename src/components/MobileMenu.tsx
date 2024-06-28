"use client";

import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-screen h-screen fixed top-0 left-0 bg-white flex flex-col justify-between px-4"
          style={{ zIndex: 1000000 }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="py-6 flex justify-end">
            <button
              className="w-10 h-10 flex items-center justify-center"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 256 256"
                className="w-8 h-8"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            <ul className="text-xl space-y-10">
              <li>
                <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  Features
                </button>
              </li>

              <li>
                <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  Community
                </button>
              </li>

              <li>
                <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  Resources
                </button>
              </li>

              <li>
                <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
                  Pricing
                </button>
              </li>

              <li>
                <button className="h-12 bg-black text-white px-[18px] py-[10px] rounded-lg hover:opacity-85 transition-all duration-300 ease-in-out font-medium text-lg inline-flex items-center justify-center">
                  Get started for free
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
