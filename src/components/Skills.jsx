import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "TailwindCSS",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Express.js",
  "HTML & CSS",
  "ECMA Script",
  "Postman",
  
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">My Skills</h2>
        <p className="mt-4 text-gray-600">Here are some of the tools and technologies I work with:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg text-center text-gray-800 font-medium hover:bg-yellow-300 hover:text-black transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
