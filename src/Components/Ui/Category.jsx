import React, { useState, useEffect } from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

const Category = ({ title, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const imagePromises = data.map((card) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages((prevLoaded) => [...prevLoaded, card.image]);
          resolve();
        };
        img.onerror = reject; // Handle potential image loading errors
        img.src = card.image;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, [data]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
        <span className="ml-3 text-gray-700">Loading Images...</span>
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title Section */}
      <motion.h1
        className="text-center text-4xl font-extrabold text-gray-900 mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h1>

      {/* Cards Grid Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.1 }}
      >
        {data.map((card, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Card
              image={card.image}
              heading={card.heading}
              para={card.para}
              btn={card.btn}
              path={card.path}
              showArrow={card.showArrow}
              onImageClick={handleImageClick}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Zoomed"
                className="max-w-[95vw] max-h-[95vh] rounded-lg shadow-xl"
              />
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-gray-800 font-semibold px-3 py-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Category;