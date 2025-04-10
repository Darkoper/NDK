import React, { useState } from "react";
import Card from "./Card";

const Category = ({ title, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // This function handles image click
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

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
            showArrow={card.showArrow}
            onImageClick={handleImageClick} // ✅ pass image click handler
          />
        ))}
      </div>

      {/* Modal Section */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
