import React from "react";
import { HONORS_AND_AWARDS } from "../constants";
import { motion } from "framer-motion";

const Honors = () => {
  if (!HONORS_AND_AWARDS.length) {
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
        Honors &amp; Awards
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {HONORS_AND_AWARDS.map((honor, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="flex h-full flex-col justify-between rounded-2xl border border-neutral-100 bg-neutral-900/30 p-6"
          >
            <div>
              <p className="mb-1 text-sm text-neutral-400">{honor.date}</p>
              <h6 className="mb-3 text-lg font-semibold text-yellow-500">
                {honor.title}
              </h6>
                <h6 className="mb-3 text-lg font-semibold text-green-300">
                {honor.institute}
              </h6>
              <p className="text-sm text-neutral-100">{honor.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Honors;
