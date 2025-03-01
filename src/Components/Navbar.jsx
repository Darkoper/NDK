import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative shadow-lg py-4 px-4 md:px-16 z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="Bold text-black text-2xl">
          NDK
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-black hover:text-emerald-700 transition-all duration-300 ease-in-out
                after:content-[""] after:absolute after:left-0 after:bottom-0 
                after:h-[2px] after:bg-emerald-700 after:w-0 
                after:transition-all after:duration-300 after:ease-in-out
                hover:after:w-full
                ${isActive ? "text-emerald-700 font-semibold after:w-full" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative text-black hover:text-emerald-700 transition-all duration-300 ease-in-out
                after:content-[""] after:absolute after:left-0 after:bottom-0 
                after:h-[2px] after:bg-emerald-700 after:w-0 
                after:transition-all after:duration-300 after:ease-in-out
                hover:after:w-full
                ${isActive ? "text-emerald-700 font-semibold after:w-full" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-black hover:text-emerald-800 transition duration-300 focus:outline-none flex items-center"
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 16L6 10H18L12 16Z"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                <ul className="py-2">
                  <li>
                    <NavLink
                      to="/products/home-keeping"
                      onClick={() => setIsDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block  px-4 py-2 text-gray-800 hover:bg-blue-100 border border-b-black ${
                          isActive ? "font-bold bg-blue-100" : ""
                        }`
                      }
                    >
                      House Keeping Essentials
                      
                      
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/Wholesalers-store"
                      onClick={() => setIsDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block  px-4 py-2 text-gray-800 hover:bg-blue-100 border border-b-black ${
                          isActive ? "font-bold bg-blue-100" : ""
                        }`
                      }
                    >
                      Wholesalers Store
                      
                      
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative text-black hover:text-emerald-700 transition-all duration-300 ease-in-out
                after:content-[""] after:absolute after:left-0 after:bottom-0 
                after:h-[2px] after:bg-emerald-700 after:w-0 
                after:transition-all after:duration-300 after:ease-in-out
                hover:after:w-full
                ${isActive ? "text-emerald-700 font-semibold after:w-full" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="tel:+919876543210"
              className={({ isActive }) =>
                `relative text-black flex flex-col justify-center items-center hover:text-emerald-700 transition-all duration-300 ease-in-out
                after:content-[""] after:absolute after:left-0 after:bottom-0 
                after:h-[2px] after:bg-emerald-700 after:w-0 
                after:transition-all after:duration-300 after:ease-in-out
                hover:after:w-full
                ${isActive ? "text-emerald-700 font-semibold after:w-full" : ""}`
              }
            >
              <span>📞 Call now  </span>
              <span>+91 95602 27664</span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden  fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu}></div>
      )}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 text-xl font-bold text-gray-800 focus:outline-none"
        >
          ✕
        </button>
        <ul className="mt-16 p-4 space-y-4">
          <li>
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block text-black hover:text-emerald-700 ${
                  isActive ? "font-semibold text-emerald-700" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block text-black hover:text-emerald-700 ${
                  isActive ? "font-semibold text-emerald-700" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-black hover:text-emerald-700 focus:outline-none"
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 16L6 10H18L12 16Z"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <NavLink
                    to="/products/home-keeping"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      closeMobileMenu();
                    }}
                    className={({ isActive }) =>
                      `block text-gray-800 hover:text-emerald-700 ${
                        isActive ? "font-semibold text-emerald-700" : ""
                      }`
                    }
                  >
                    Home Keeping Essentials
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/products/Wholesalers-Store"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      closeMobileMenu();
                    }}
                    className={({ isActive }) =>
                      `block text-gray-800 hover:text-emerald-700 ${
                        isActive ? "font-semibold text-emerald-700" : ""
                      }`
                    }
                  >
                    Wholesalers Store
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block text-black hover:text-emerald-700 ${
                  isActive ? "font-semibold text-emerald-700" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="tel:+919560227664"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block text-black hover:text-emerald-700 ${
                  isActive ? "font-semibold text-emerald-700" : ""
                }`
              }
            >
                <span>Call now</span><br />
                <span>+91 95602 27664</span> 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;