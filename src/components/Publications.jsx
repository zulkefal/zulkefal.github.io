import React from "react";
import { PUBLICATIONS } from "../constants";
import { motion } from "framer-motion";

const Publications = () => {
  if (!PUBLICATIONS.length) {
    return null;
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Publications
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {PUBLICATIONS.map((publication, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="flex h-full flex-col justify-center rounded-2xl border border-neutral-100 bg-neutral-900/30 p-6 text-left"
          >
            <p className="mb-2 text-sm text-neutral-400">
              Publication {index + 1}
            </p>
            <h6 className="mb-2 text-lg font-semibold text-yellow-500">
              {publication.title}
            </h6>
            {publication.description && (
              <p className="mb-4 text-slate-100">
                {publication.description}
              </p>
            )}
            <a
              href={publication.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              View Publication
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
