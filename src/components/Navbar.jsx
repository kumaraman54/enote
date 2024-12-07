import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
     
        <div className="text-2xl font-bold">Enote</div>

       
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

      
        <div
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent z-10`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 text-center lg:text-left">
            <li>
              <Link
                to="/"
                className={`hover:text-yellow-400 ${
                  location.pathname === "/" ? "text-yellow-400" : ""
                } block px-4 py-2 lg:p-0`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-yellow-400 ${
                  location.pathname === "/about" ? "text-yellow-400" : ""
                } block px-4 py-2 lg:p-0`}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="flex items-center space-x-2 px-4 py-2 lg:p-0">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
