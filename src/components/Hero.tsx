"use client";

import { motion, stagger, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const bottomImageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: bottomImageScrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yTop = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const x2 = useTransform(scrollYProgress, [0.25, 1], [0, -120]);
  const x3 = useTransform(scrollYProgress, [0.5, 1], [0, 120]);
  const x4 = useTransform(scrollYProgress, [0.7, 1], [0, 120]);

  const scale = useTransform(bottomImageScrollY, [0, 1], [0.95, 1]);
  const yHeroImage = useTransform(bottomImageScrollY, [0, 1], [5, 0]);

  const staggerHeroTexts = stagger(0.1, { startDelay: 0.5 });

  return (
    <section ref={containerRef} className="mt-[60px] relative overflow-hidden">
      <motion.img
        src={"/incoming-calls.svg"}
        width={950.538}
        height={97.625}
        alt="incoming-calls"
        className="mx-auto hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        style={{ y: yTop, scale: 0.85 }}
      />

      <motion.img
        src={"/content.png"}
        width={359.86606}
        height={142.13631}
        alt="content"
        className="absolute -left-16 top-24 scale-75 hidden md:block"
        initial={{ x: -120 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        // whileHover={{ x: -60 }}
        style={{ x: x1, scale: 0.85 }}
      />

      <motion.img
        src={"/share-upload-files.png"}
        width={273.2562}
        height={373.56989}
        alt="share-upload-files"
        className="absolute -rotate-[2.421deg] top-60 -left-6 hidden md:block"
        initial={{ x: -120 }}
        animate={{
          x: 0,
          transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" }
        }}
        // whileHover={{
        //   x: -60,
        //   transition: { duration: 0.6, delay: 0, ease: "easeInOut" }
        // }}
        style={{ x: x2, scale: 0.85 }}
      />

      <div className="pt-16 md:pt-[100px] pb-16 md:pb-[115px] px-4 md:px-0">
        <div className="max-w-[647px] w-full mx-auto text-center">
          <motion.div
            className="text-[#475467] flex flex-col md:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Image
              src={"/avatar-group.png"}
              width={152}
              height={32}
              alt="avatar-group"
              priority
              // className="block md:hidden"
            />

            <p className="text-[15px]">
              Trusted by over 10,000 leading creators and teams worldwide
            </p>
          </motion.div>

          <div className="mt-5">
            <motion.h1 className="text-[32px] md:text-[46px] leading-none font-semibold tracking-[-2.25px] hidden md:block font-inter">
              <motion.span className="overflow-hidden block py-1">
                <motion.span
                  className="block"
                  initial={{ y: 80 }}
                  animate={{ y: [80, -10, 0] }}
                  transition={{ duration: 1, delay: staggerHeroTexts(0, 3) }}
                >
                  Experience the power of
                </motion.span>
              </motion.span>

              <motion.span className="overflow-hidden block py-1">
                <motion.span
                  className="block"
                  initial={{ y: 80 }}
                  animate={{ y: [80, -10, 0] }}
                  transition={{ duration: 1, delay: staggerHeroTexts(1, 3) }}
                >
                  seamless collaboration with our
                </motion.span>
              </motion.span>

              <motion.span className="overflow-hidden block relative py-1">
                <motion.span
                  className="block text-[#98A2B3]"
                  initial={{ y: 80 }}
                  animate={{ y: [80, -10, 0] }}
                  transition={{ duration: 1, delay: staggerHeroTexts(2, 3) }}
                >
                  game-changing features
                </motion.span>

                <div
                  className="w-full h-5 absolute -bottom-px"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(253, 253, 255, 0.00) 0%, #FFFFFF 81.62%)"
                  }}
                ></div>
              </motion.span>
            </motion.h1>

            <h1 className="text-[32px] md:text-[46px] leading-[40px] md:leading-[52px] font-bold tracking-[-2.25px] block md:hidden font-inter">
              <span className="block">Experience the power of</span>

              <span className="block">seamless collaboration with our</span>

              <span className="block text-[#98A2B3]">
                game-changing features
              </span>
            </h1>
          </div>

          <motion.p
            className="my-5 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Our comprehensive suite of features is crafted to empower digital
            creators, providing the tools you need to to transform your projects
            from concepts to completion.
          </motion.p>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.button className="h-12 bg-black text-white px-6 py-4 rounded-lg hover:opacity-85 transition-all duration-300 ease-in-out font-medium inline-flex items-center justify-center">
              Discover how it works
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div className="relative hidden md:block">
        <motion.img
          src={"/hero-image.png"}
          width={1062}
          height={331}
          alt="hero-image"
          className="mx-auto z-20 relative"
          style={{ scale, y: yHeroImage }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative block md:hidden">
        <Image
          src={"/hero-image.svg"}
          width={1062}
          height={331}
          alt="hero-image"
          className="mx-auto z-20 relative"
        />
      </div>

      <div className="scale-75 absolute -right-24 2xl:bottom-96 md:bottom-[410px] hidden md:block">
        <motion.img
          src={"/messages.png"}
          width={333}
          height={456}
          alt="messages"
          initial={{ x: 120 }}
          animate={{
            x: 0,
            transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" }
          }}
          style={{ rotate: -8.153, x: x3, scale: 0.9 }}
          // whileHover={{
          //   x: 60,
          //   transition: { duration: 0.6, delay: 0, ease: "easeInOut" }
          // }}
        />
      </div>

      <div className="scale-75 absolute -right-32 bottom-64 hidden md:block">
        <motion.img
          src={"/following-update.png"}
          width={309.8092}
          height={183.66411}
          alt="following-update"
          initial={{ x: 120 }}
          animate={{
            x: 0,
            transition: { delay: 0.9, duration: 0.6, ease: "easeInOut" }
          }}
          style={{ rotate: -13.972, x: x4 }}
          // whileHover={{
          //   x: 60,
          //   transition: { duration: 0.6, delay: 0, ease: "easeInOut" }
          // }}
        />
      </div>
    </section>
  );
};

export default Hero;
