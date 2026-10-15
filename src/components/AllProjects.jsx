/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES } from "../constants";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Chip = ({ children }) => (
  <span className="rounded bg-neutral-900 px-2 py-0.5 text-xs font-medium text-purple-400">
    {children}
  </span>
);

const Badge = ({ children }) => (
  <span className="inline-block rounded-full border border-yellow-500/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-yellow-400">
    {children}
  </span>
);

const LinkButtons = ({ links, size = "sm" }) =>
  links && links.length > 0 ? (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 rounded-md bg-blue-600 px-2 py-1 text-white hover:bg-blue-500 ${
            size === "sm" ? "text-xs" : "text-sm"
          }`}
        >
          {link.label}
          <FaExternalLinkAlt className="text-[10px]" />
        </a>
      ))}
    </div>
  ) : null;

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-700 bg-[#050a1f] p-6 text-left shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-neutral-400 hover:text-white"
        >
          <FaTimes />
        </button>
        <img src={project.image} alt={project.title} className="mb-4 w-full rounded-lg" />
        {project.badge && (
          <div className="mb-2">
            <Badge>{project.badge}</Badge>
          </div>
        )}
        <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-neutral-300">{project.description}</p>
        {project.highlights && (
          <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">
            {project.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <LinkButtons links={project.links} size="md" />
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, onOpen }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30"
  >
    <div
      className="group relative cursor-pointer"
      onClick={() => onOpen(project)}
      title="Click for details"
    >
      <img src={project.image} alt={project.title} className="w-full" />
      <div className="absolute inset-0 flex flex-col justify-center bg-[#02061a] p-5 opacity-0 transition duration-300 group-hover:opacity-100">
        {project.highlights ? (
          <ul className="list-disc space-y-2 pl-4 text-left text-sm leading-snug text-neutral-100">
            {project.highlights.slice(0, 3).map((point, i) => (
              <li key={i} className="line-clamp-2">
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className="line-clamp-5 text-left text-sm leading-snug text-neutral-100">
            {project.description}
          </p>
        )}
        <p className="mt-3 text-right text-xs font-semibold uppercase tracking-wide text-purple-400">
          Click for full details →
        </p>
      </div>
    </div>

    <div className="flex flex-1 flex-col p-4 text-left">
      {project.badge && (
        <div className="mb-2">
          <Badge>{project.badge}</Badge>
        </div>
      )}
      <h3 className="mb-1 text-base font-bold leading-tight text-white">{project.title}</h3>
      <p className="mb-3 line-clamp-3 text-sm text-neutral-400">{project.description}</p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
        {project.technologies.length > 4 && (
          <Chip>+{project.technologies.length - 4}</Chip>
        )}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="rounded-md border border-purple-500 px-2 py-1 text-xs text-purple-300 hover:bg-purple-800 hover:text-white"
        >
          Details
        </button>
        <LinkButtons links={project.links} />
      </div>
    </div>
  </motion.div>
);

const AllProjects = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredProjects =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === active);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-1 text-sm font-medium transition ${
              active === category
                ? "border-purple-400 bg-purple-800 text-white"
                : "border-neutral-700 bg-neutral-900/40 text-neutral-300 hover:border-purple-400 hover:text-purple-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} onOpen={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllProjects;
