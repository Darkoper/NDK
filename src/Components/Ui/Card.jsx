import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ image, heading, para, btn, path }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white ">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={heading}
        loading="lazy"
      />

      {/* Content Section */}
      <div className="px-6 py-4">
        {/* Heading */}
        <h2 className="text-xl semibold text-gray-800 mb-2">{heading}</h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-base">{para}</p>
      </div>

      {/* Button Section */}
      <div className="px-6 pb-4">
        <NavLink to= {path} >
            <button className="flex items-center space-x-2  font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out group">
                <span>{btn}</span>
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
            </button>
        </NavLink>
            
      </div>
    </div>
  );
};

export default Card;