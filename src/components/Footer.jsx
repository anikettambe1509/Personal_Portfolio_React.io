import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-center text-gray-200">
      <p className="mb-4">
        Connect with me:{" "}
        <a
          href="https://www.linkedin.com/in/aniket-tambe-1ab278234/"
          className="text-blue-400 hover:text-blue-500 transition-colors"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/anikettambe1509"
          className="text-blue-400 hover:text-blue-500 transition-colors"
        >
          GitHub
        </a>
      </p>
      <p>© {new Date().getFullYear()} Aniket's Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
