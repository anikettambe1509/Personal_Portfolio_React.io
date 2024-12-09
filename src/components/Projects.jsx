import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spotify Clone",
    description: "A spotify clone app built with React and TailwindCSS.",
    link: "https://github.com/anikettambe1509/SpotifyClone.io",
  },
  {
    title: "Tours & Travels Website",
    description: "Made the travelling and booking platform built with React and API integration.",
    link: "https://github.com/anikettambe1509/Tours-Travels.io",
  },
  {
    title: "Blogging Platofrm Website",
    description: "An interactive blogging platform in which user can see, add, edit and delete the posts. Project is made by using React, TailwindCSS, and Chart.js.",
    link: "https://github.com/anikettambe1509/Blogging_Platform.io",
  },
  {
    title: "User's Management Dashboard",
    description: "An interactive users management admin panel using React, TailwindCSS, and Chart.js.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
        <p className="mt-4 text-gray-600">
          Here are some of the projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
