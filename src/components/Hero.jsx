import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/frontZulkefal.jpeg";
import Zulkefal_Resume from '../assets/Zulkefal_Resume.pdf';

import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Zulkefal Khan
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              // variants={container(0.5)}
              // initial="hidden"
              // animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Blockchain Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
          

          <div className="mb-4">
          <a
            href={Zulkefal_Resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Zulkefal_Resume.pdf"
          >
            <span className="p-2 text-white font-bold text-xl rounded-s-sm bg-purple-800 hover:text-yellow-500 border ">
              Resume
            </span>
          </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              src={profilePic}
              alt="profilePic"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
