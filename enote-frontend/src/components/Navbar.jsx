import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    // Close the menu when the route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-[#010101] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Enote</div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
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

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent z-10`}
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

          {/* Authentication Buttons */}
          {!localStorage.getItem("token") ? (
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2 px-4 py-2 lg:p-0">
              <Link
                to="/login"
                className="px-4 py-2 bg-[#f3644e] text-white rounded-lg hover:bg-[#f3644e] focus:ring-2 focus:ring-yellow-400"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-[#f3644e] text-white rounded-lg hover:bg-[#f3644e] focus:ring-2 focus:ring-yellow-400"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <button
              className="px-4 py-2 bg-[#f3644e] text-white rounded-lg hover:bg-[#f3644e] focus:ring-2 focus:ring-red-400"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
