import React from "react";
import { VOLUNTEERING } from "../constants";
import { motion } from "framer-motion";

const Volunteering = () => {
  if (!VOLUNTEERING.length) {
    return null;
  }

  return (
    <div className="border-b border:neutral-100 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Volunteering
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {VOLUNTEERING.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="flex h-full flex-col items-start justify-center rounded-2xl border border-neutral-100 bg-neutral-900/30 p-6 text-left"
          >
            <p className="mb-1 text-sm text-neutral-400">{item.date}</p>
            <h6 className="mb-3 text-lg font-semibold text-yellow-500">
              {item.title}
            </h6>
            {item.highlights && (
              <ul className="mb-4 list-disc space-y-2 pl-5 text-neutral-300">
                {item.highlights.map((point, highlightIndex) => (
                  <li key={highlightIndex}>{point}</li>
                ))}
              </ul>
            )}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                View
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
