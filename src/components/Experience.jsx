/* eslint-disable react/prop-types */
import { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FiBriefcase, FiChevronDown, FiChevronUp } from "react-icons/fi";

const PREVIEW_COUNT = 4;

const ExperienceCard = ({ experience, index }) => {
  const [expanded, setExpanded] = useState(false);
  const highlights = experience.highlights || [];
  const canToggle = highlights.length > PREVIEW_COUNT;
  const visible = expanded ? highlights : highlights.slice(0, PREVIEW_COUNT);
  const isCurrent = /present/i.test(experience.year);

  const isLeft = index % 2 === 0;

  return (
    <motion.li
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative pl-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0"
    >
      {/* timeline dot */}
      <span
        className={`absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border-2 lg:left-1/2 lg:-translate-x-1/2 ${
          isCurrent
            ? "border-purple-400 bg-purple-900/60 text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.6)]"
            : "border-neutral-700 bg-[#050a1f] text-neutral-400"
        }`}
      >
        <FiBriefcase className="text-sm" />
      </span>

      {/* date on the opposite side (desktop only) */}
      <div
        className={`hidden items-start pt-7 lg:flex ${
          isLeft ? "order-2 justify-start" : "order-1 justify-end"
        }`}
      >
        <span
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
            isCurrent ? "bg-purple-800/60 text-purple-100" : "bg-neutral-800 text-neutral-300"
          }`}
        >
          {experience.year}
        </span>
      </div>

      <div
        className={`rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 transition duration-300 hover:border-purple-500/50 ${
          isLeft ? "order-1" : "order-2"
        }`}
      >
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-white">{experience.role}</h3>
            <p className="text-sm font-medium text-yellow-300">{experience.company}</p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold lg:hidden ${
              isCurrent ? "bg-purple-800/60 text-purple-100" : "bg-neutral-800 text-neutral-300"
            }`}
          >
            {experience.year}
          </span>
        </div>

        <p className="mb-4 text-neutral-300">{experience.description}</p>

        {visible.length > 0 && (
          <ul className="mb-4 space-y-2 text-sm text-neutral-300">
            {visible.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {canToggle && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mb-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-purple-400 hover:text-purple-300"
          >
            {expanded ? (
              <>
                Show less <FiChevronUp />
              </>
            ) : (
              <>
                Show {highlights.length - PREVIEW_COUNT} more <FiChevronDown />
              </>
            )}
          </button>
        )}

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.li>
  );
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div className="mx-auto max-w-5xl">
        <ol className="relative space-y-10 before:absolute before:bottom-6 before:left-[18px] before:top-6 before:w-px before:bg-gradient-to-b before:from-purple-500 before:via-neutral-700 before:to-transparent lg:before:left-1/2 lg:before:-translate-x-1/2">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={experience.role + experience.company} experience={experience} index={index} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
