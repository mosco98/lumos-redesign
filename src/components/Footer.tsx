"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center pt-8 pb-6 px-4 text-center">
      <p className="text-black/80 text-sm">
        Redesigned with love{""}
        <motion.svg
          id="emoji"
          viewBox="0 0 72 72"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 inline-block align-middle"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            repeat: Infinity,
            duration: 0.7,
            ease: "easeInOut"
          }}
        >
          <g id="color">
            <path
              fill="red"
              d="M59.5,25c0-6.9036-5.5964-12.5-12.5-12.5c-4.7533,0-8.8861,2.6536-11,6.5598 C33.8861,15.1536,29.7533,12.5,25,12.5c-6.9036,0-12.5,5.5964-12.5,12.5c0,2.9699,1.0403,5.6942,2.7703,7.8387l-0.0043,0.0034 L36,58.5397l20.7339-25.6975l-0.0043-0.0034C58.4597,30.6942,59.5,27.9699,59.5,25z"
            />
          </g>
          <g id="hair" />
          <g id="skin" />
          <g id="skin-shadow" />
          <g id="line">
            <path
              fill="none"
              stroke="#000000"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={0}
              d="M59.5,25 c0-6.9036-5.5964-12.5-12.5-12.5c-4.7533,0-8.8861,2.6536-11,6.5598C33.8861,15.1536,29.7533,12.5,25,12.5 c-6.9036,0-12.5,5.5964-12.5,12.5c0,2.9699,1.0403,5.6942,2.7703,7.8387l-0.0043,0.0034L36,58.5397l20.7339-25.6975l-0.0043-0.0034 C58.4597,30.6942,59.5,27.9699,59.5,25z"
            />
          </g>
        </motion.svg>
        {""}
        by{" "}
        <a
          href="https://x.com/estherinontah_"
          target="_blank"
          className="underline underline-offset-1 font-medium"
        >
          Esther Inontah
        </a>{" "}
        and developed by{" "}
        <a
          href="https://x.com/meandchimso"
          target="_blank"
          className="underline underline-offset-1 font-medium"
        >
          Moses Enyinnaya
        </a>
      </p>
    </footer>
  );
};

export default Footer;
