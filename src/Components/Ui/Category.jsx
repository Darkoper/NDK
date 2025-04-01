import React from "react";
import Card from "./Card"; // Import the Card component

const Category = ({ title, data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">{title}</h1>

      {/* Cards Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            heading={card.heading}
            para={card.para}
            btn={card.btn}
            path={card.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
