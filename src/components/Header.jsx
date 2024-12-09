import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="text-xl font-bold"><span className="text-yellow-300">Aniket's</span> Portfolio</h1>
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-300 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden bg-yellow-300 text-black px-4 py-2 rounded-lg">
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Header;
