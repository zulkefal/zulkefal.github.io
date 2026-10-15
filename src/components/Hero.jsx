import React from "react";
import { HERO_CONTENT, HERO_TITLE, HERO_HIGHLIGHTS } from "../constants";
import { FiDownload, FiMail } from "react-icons/fi";
import profilePic from "../assets/frontZulkefal.jpeg";
import Zulkefal_CV from "../assets/Zulkefal_CV_BCB.pdf";

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
              className="bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {HERO_TITLE}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-lg leading-relaxed text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mb-8 flex max-w-xl flex-wrap gap-2"
            >
              {HERO_HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-purple-500/40 bg-purple-900/20 px-3 py-1 text-xs font-medium text-purple-200"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={container(1.4)}
            initial="hidden"
            animate="visible"
            className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={Zulkefal_CV}
              target="_blank"
              rel="noopener noreferrer"
              download="Zulkefal_CV.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition duration-300 hover:scale-105 hover:shadow-fuchsia-700/50"
            >
              <FiDownload className="text-lg transition group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="mailto:zulkefal.khan705@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-600 px-6 py-3 text-base font-medium text-neutral-200 transition duration-300 hover:border-purple-400 hover:text-purple-300"
            >
              <FiMail className="text-lg" />
              Get in touch
            </a>
          </motion.div>
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
