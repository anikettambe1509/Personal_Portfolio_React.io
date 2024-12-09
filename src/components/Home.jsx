import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-yellow-300">Aniket's</span> Portfolio
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I craft stunning web experiences.
        </motion.p>
        <motion.a
          href="#contact"
          className="mt-8 inline-block bg-yellow-300 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-transform transform hover:scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default Home;



// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const roles = ["Front-end Web Developer", "Mechanical Engineer"];

// const Home = () => {
//   const [currentRole, setCurrentRole] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 4000); // Change role every 4 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center">
//       <div className="container mx-auto text-center px-6">
//         {/* Main Heading */}
//         <motion.h2
//           className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to My Portfolio
//         </motion.h2>

//         {/* Rotating Roles */}
//         <div className="mt-6 text-2xl md:text-3xl font-medium text-yellow-300 max-w-3xl mx-auto flex justify-center items-center">
//           <span className="text-yellow-300">I am a </span>
//           <span className="relative inline-block text-white font-bold">
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={currentRole}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//               >
//                 {roles[currentRole]}
//               </motion.span>
//             </AnimatePresence>
//           </span>
//         </div>

//         {/* Contact Button */}
//         <motion.a
//           href="#contact"
//           className="mt-10 inline-block bg-yellow-300 text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-transform transform hover:scale-110"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           Contact Me
//         </motion.a>
//       </div>
//     </section>
//   );
// };

// export default Home;