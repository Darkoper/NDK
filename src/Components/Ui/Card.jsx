import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({
  image,
  heading,
  para,
  btn,
  path,
  showArrow = true,
  onImageClick, // Image click handler
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
      {/* Standard Image with Click Handler */}
      <img
        className="w-full h-48 object-cover cursor-pointer"
        src={image}
        alt={heading}
        onClick={() => onImageClick && onImageClick(image)} // Trigger modal if handler is passed
      />

      {/* Content Section */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{heading}</h2>
        <p className="text-gray-600 text-base">{para}</p>
      </div>

      {/* Button Section */}
      <div className="px-6 pb-4">
        <NavLink to={path}>
          <button className="flex items-center space-x-2 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out group">
            <span>{btn}</span>
            {showArrow && (
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            )}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
