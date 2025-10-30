import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { SiSolidity } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import { FaRust } from "react-icons/fa";

const iconsVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const textVariant = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [15, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Skills
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <div>
            <motion.div
              variants={iconsVariant(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(2.5)}
              initial="initial"
              animate="animate"
            >
              ReactJS
            </motion.h1>
          </div>
          <div>
            <motion.div
              variants={iconsVariant(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <DiJavascript1 className="text-7xl text-yellow-400	" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(3)}
              initial="initial"
              animate="animate"
            >
              Javascript
            </motion.h1>
          </div>
          <div>
            <motion.div
              variants={iconsVariant(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaNodeJs className="text-7xl text-green-400" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(5)}
              initial="initial"
              animate="animate"
            >
              NodeJS
            </motion.h1>
          </div>

          <div>
            <motion.div
              variants={iconsVariant(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <DiHtml5 className="text-7xl text-orange-400" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(3)}
              initial="initial"
              animate="animate"
            >
              HTML
            </motion.h1>
          </div>

          <div>
            <motion.div
              variants={iconsVariant(6)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiSolidity className="text-7xl text-gray-400" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(6)}
              initial="initial"
              animate="animate"
            >
              Solidity
            </motion.h1>
          </div>
          <div>
            <motion.div
              variants={iconsVariant(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiMongodb className="text-7xl text-green-400" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(4)}
              initial="initial"
              animate="animate"
            >
              MongoDb
            </motion.h1>
          </div>
          <div>
            <motion.div
              variants={iconsVariant(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaEthereum className="text-7xl text-gray-400" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(2.5)}
              initial="initial"
              animate="animate"
            >
              Ethereum
            </motion.h1>
          </div>
          <div>
            <motion.div
              variants={iconsVariant(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <DiCss3 className="text-7xl text-blue-400" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(4)}
              initial="initial"
              animate="animate"
            >
              Css
            </motion.h1>
          </div>
          <div>
            <motion.div
              variants={iconsVariant(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaRust className="text-7xl text-gray-400" />
            </motion.div>
            <motion.h1
              className="flex flex-wrap items-center justify-center gap-4"
              variants={textVariant(4)}
              initial="initial"
              animate="animate"
            >
              Rust
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
