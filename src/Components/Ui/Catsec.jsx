import React from "react";
import Card from "./Card";

const CatSec = ({ heading, para, cards }) => {
  return (
    <div className="p-6 md:p-12 lg:p-20 bg-gray-50">
      {/* Heading and Paragraph Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{para}</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            heading={card.heading}
            para={card.para}
            btn={card.btn}
            path = {card.path}
          />
          
        ))}
        
      </div>
    </div>
  );
};

export default CatSec;