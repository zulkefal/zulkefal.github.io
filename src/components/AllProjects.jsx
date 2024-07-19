import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { GrView } from "react-icons/gr";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dapps");

  const filteredProjects = PROJECTS.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h1>
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center">
            <div className=" bg-gray-500 rounded-2xl">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-100">
                {["Dapps", "Smart Contracts", "ReactJS"].map((category) => (
                  <li className="me-2" key={category}>
                    <a
                      className={`inline-block px-4 py-3 rounded-lg ${
                        selectedCategory === category
                          ? "text-white bg-purple-800"
                          : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <div className="w-full flex justify-center">
                <img
                  src={project.image}
                  width={400}
                  height={400}
                  alt={project.title}
                  className="mb-6 rounded transition duration-300 ease-in-out hover:scale-150 cursor-pointer"
                />
              </div>
              <div className="text-center max-w-[400px]">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-white-500">{project.description}</p>
                {project.technologies.map((technique, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {technique}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-600 p-1 rounded-md justify-center mt-4 text-white hover:text-black cursor-pointer"
                >
                  <span className="ml-2">View</span>
                  <GrView className="m-1"/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProjects;
