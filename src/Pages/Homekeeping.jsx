import React from "react";
import { motion } from "framer-motion";

const housekeepingProducts = [
  {
    name: "soap dispenser",
    image: "https://imgs.search.brave.com/yWHLKBhNTZ_Ro4IcVxNfCWp3WXstbeGZgLG8BnzUn4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rdWlz/aGkuY29tL2Nkbi9z/aG9wL2ZpbGVzL0Js/YWNrLVNvYXAtRGlz/cGVuc2VyLmpwZz92/PTE3Mzk4NzgwMDAm/d2lkdGg9NDgw"
  },
  {
    name: "soap case",
    image: "https://imgs.search.brave.com/z326U47vdpUtJ227lSO68PpAcw1RO8YDrFgOxUvWbhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFFakZ6OUVZUUwu/anBn"
  },
  {
    name: "cloth drying stand",
    image: "https://imgs.search.brave.com/B3K_CshdtQwrEWs-bhf97sspvao6P0lvDEtte5rTE28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWlsdG9uLmluL2Nk/bi9zaG9wL2ZpbGVz/LzUwLTMtbGF5ZXJz/LWNsb3RoLWRyeWlu/Zy1zdGFuZC1hcXVh/LWdyZWVuLXNwb3R6/ZXJvLWJ5LW1pbHRv/bi0zLW9yaWdpbmFs/LWltYWd1Mzlucmp0/aGpzeXAud2VicD92/PTE3MzY5MzQ5MTcm/d2lkdGg9MTA4MA"
  },
  {
    name: "bathroom set",
    image: "https://imgs.search.brave.com/znC8SRu2YAzYUPAjogP-nhT7LLVgWtYhCKWi3pAww24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuemFyYWhvbWUu/bmV0L2Fzc2V0cy9w/dWJsaWMvYjhjMy85/ZmMwL2M4ZmM0NTQ1/YTU4NC80NThjNDli/OWNmNmQvNDI1Mjgw/MDAyNTBaSElJLWYv/NDI1MjgwMDAyNTBa/SElJLWYuanBnP3Rz/PTE3Mjc4NTcyMTAw/ODcmZj1hdXRv"
  },
  {
    name: "carpet brush",
    image: "https://m.media-amazon.com/images/I/61lB2KfEgSL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "car duster",
    image: "https://m.media-amazon.com/images/I/71HIk7MOefL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "shoe duster",
    image: "https://m.media-amazon.com/images/I/81nLQiDoGxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "coat brush",
    image: "https://m.media-amazon.com/images/I/71ABBchWKJL._SX466_.jpg"
  },
  {
    name: "lint remover",
    image: "https://m.media-amazon.com/images/I/61hQgMl+8iL._AC_UL320_.jpg"
  },
  {
    name: "cloth clips",
    image: "https://m.media-amazon.com/images/I/71JRzwjjkQL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "clip holder hangers",
    image: "https://imgs.search.brave.com/wuQ5JwypWmPFuCbV9-oHWsV27SnIofV6Xa0f0HqDK0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM3Njg4NTY1L3Iv/aWwvZDJmNjYwLzQz/MTc5OTg5ODcvaWxf/MzQweDI3MC40MzE3/OTk4OTg3X2JnYjQu/anBn"
  },
  {
    name: "stick hooks",
    image: "https://m.media-amazon.com/images/I/51SbNCf5j6L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "plastic baskets",
    image: "https://m.media-amazon.com/images/I/71Tfupws1ZL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "plastic dusters",
    image: "https://m.media-amazon.com/images/I/61j-Vrt5hpL._AC_UL320_.jpg"
  },
  {
    name: "hand scrubbing brush",
    image: "https://imgs.search.brave.com/eMuUfuYkmH7TI3zVm7nEuPRvSaWYNzoeEr2imRmeYt4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFrR3BMVHdFQ0wu/anBn"
  },
  {
    name: "Standing Tall Broom",
    image: "https://m.media-amazon.com/images/I/71fnxMFARcL._AC_SX679_.jpg"
  },
  {
    name: "pocha",
    image: "https://imgs.search.brave.com/egBJAnvxHP6mDorEr1Bo8K_HQXDP7KAuCV4PqYvcW4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFXY1lseXpXdUwu/anBn"
  }
];


const Homekeeping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Premium Housekeeping Essentials
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          High-quality cleaning tools for a spotless home
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {housekeepingProducts.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              // variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/500x300?text=Product+Image";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">In Stock</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Homekeeping;