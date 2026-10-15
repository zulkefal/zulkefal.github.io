import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaEthereum, FaPython } from "react-icons/fa";
import {
  SiSolidity,
  SiTypescript,
  SiNestjs,
  SiLangchain,
  SiOpenzeppelin,
  SiGraphql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SKILL_GROUPS } from "../constants";

const ICONS = [
  { label: "Solidity", Icon: SiSolidity, color: "text-gray-300", duration: 6 },
  { label: "Ethereum", Icon: FaEthereum, color: "text-gray-400", duration: 2.5 },
  { label: "NodeJS", Icon: FaNodeJs, color: "text-green-400", duration: 5 },
  { label: "TypeScript", Icon: SiTypescript, color: "text-blue-400", duration: 3 },
  { label: "NestJS", Icon: SiNestjs, color: "text-red-500", duration: 4 },
  { label: "GraphQL", Icon: SiGraphql, color: "text-pink-400", duration: 3.5 },
  { label: "Python", Icon: FaPython, color: "text-yellow-300", duration: 4.5 },
  { label: "LangChain", Icon: SiLangchain, color: "text-emerald-300", duration: 3 },
  { label: "OpenZeppelin", Icon: SiOpenzeppelin, color: "text-sky-300", duration: 5 },
  { label: "ReactJS", Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
  { label: "C#", Icon: TbBrandCSharp, color: "text-purple-400", duration: 4 },
];

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
          {ICONS.map(({ label, Icon, color, duration }) => (
            <div key={label}>
              <motion.div
                variants={iconsVariant(duration)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <Icon className={`text-7xl ${color}`} />
              </motion.div>
              <motion.h1
                className="flex flex-wrap items-center justify-center gap-4 text-sm"
                variants={textVariant(duration)}
                initial="initial"
                animate="animate"
              >
                {label}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="mt-20 grid gap-6 md:grid-cols-2"
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5"
            >
              <h6 className="mb-3 font-semibold text-yellow-400">{group.title}</h6>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
