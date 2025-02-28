import React from 'react'

const Feature = ({ icon, heading, para }) => (
  <div className="w-full sm:w-1/2 lg:w-1/4 p-4 group hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 group-hover:border-blue-500">
      <div className="mb-4 group-hover:text-blue-500 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
        {heading}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
        {para}
      </p>
    </div>
  </div>
);
export default Feature
