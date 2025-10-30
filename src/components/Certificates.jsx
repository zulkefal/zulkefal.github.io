import React from "react";
import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2">
        {CERTIFICATES.map((certificate, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="flex h-full flex-col items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-900/30 p-6 text-center"
          >
            <p className="mb-2 text-sm text-neutral-400">{certificate.date}</p>
            <h6 className="mb-2 font-semibold text-yellow-300">
              {certificate.organization}
            </h6>
            <h6 className="mb-4 text-lg font-semibold text-neutral-100">
              {certificate.name}
            </h6>
            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Verify Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
