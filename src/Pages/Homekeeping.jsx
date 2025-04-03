import React from "react";
import { motion } from "framer-motion";

const housekeepingProducts = [
  // Cleaning Tools
  { name: "Soap Dispenser", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Soap Case", image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Cloth Drying Stand", image: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Bathroom Set", image: "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Carpet Brush", image: "https://images.pexels.com/photos/4439458/pexels-photo-4439458.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Car Duster", image: "https://images.pexels.com/photos/7534602/pexels-photo-7534602.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Shoe Brush", image: "https://images.pexels.com/photos/5592324/pexels-photo-5592324.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Coat Brush", image: "https://images.unsplash.com/photo-1551909496-d9d4a69d4acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Lint Remover", image: "https://images.pexels.com/photos/5592346/pexels-photo-5592346.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Cloth Clips", image: "https://images.pexels.com/photos/8313422/pexels-photo-8313422.jpeg?auto=compress&cs=tinysrgb&w=500" },
  
  // Brushes
  { name: "Cloth Brush", image: "https://images.pexels.com/photos/5591585/pexels-photo-5591585.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Cloth Holder Hanger", image: "https://images.pexels.com/photos/4740584/pexels-photo-4740584.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Toilet Brush", image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Hook Hanger for Clothes", image: "https://images.pexels.com/photos/5591630/pexels-photo-5591630.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Stick Hooks", image: "https://images.pexels.com/photos/6969809/pexels-photo-6969809.jpeg?auto=compress&cs=tinysrgb&w=500" },
  
  // Containers & Holders
  { name: "Plastic Baskets", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Plastic Dusters", image: "https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Hand Scruffing Brush", image: "https://images.pexels.com/photos/8176141/pexels-photo-8176141.jpeg?auto=compress&cs=tinysrgb&w=500" },
  
  // Cleaning Equipment
  { name: "Standing Tall Broom", image: "https://images.unsplash.com/photo-1603050215677-984e416ee8e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Room Freshener", image: "https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Magic Brush (Roller/Rots)", image: "https://images.pexels.com/photos/4050360/pexels-photo-4050360.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Tile Brush", image: "https://images.pexels.com/photos/8192052/pexels-photo-8192052.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Loofa Cleaning Sponge", image: "https://images.pexels.com/photos/6806360/pexels-photo-6806360.jpeg?auto=compress&cs=tinysrgb&w=500" },
  
  // More items continued...
  { name: "Bottle Brush", image: "https://images.pexels.com/photos/5591658/pexels-photo-5591658.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Microfiber Duster", image: "https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "All Housekeeping Essentials", image: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Napkin", image: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "All Essential Toiletries", image: "https://images.pexels.com/photos/3737594/pexels-photo-3737594.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Face Towel", image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Kitchen Roll", image: "https://images.pexels.com/photos/4239026/pexels-photo-4239026.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Toilet Roll", image: "https://images.unsplash.com/photo-1584556812952-905ffd5b0a96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Broom (Various Types)", image: "https://images.pexels.com/photos/4108833/pexels-photo-4108833.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Dry Mop (Dust Control)", image: "https://images.pexels.com/photos/4108750/pexels-photo-4108750.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Wet Mop (Various Types)", image: "https://images.unsplash.com/photo-1585932094919-f151cc40f34c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Aluminum Foil", image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Cling Foil", image: "https://images.pexels.com/photos/5591640/pexels-photo-5591640.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Butter Paper", image: "https://images.pexels.com/photos/9246067/pexels-photo-9246067.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Mosquito Repellent", image: "https://images.pexels.com/photos/10366522/pexels-photo-10366522.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Steel Wool & Cleaners", image: "https://images.pexels.com/photos/6032280/pexels-photo-6032280.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Detergents", image: "https://images.pexels.com/photos/4440543/pexels-photo-4440543.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Washroom Kit", image: "https://images.pexels.com/photos/2796105/pexels-photo-2796105.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Winger Trolley", image: "https://images.pexels.com/photos/4108719/pexels-photo-4108719.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Lobby Dust Pan", image: "https://images.pexels.com/photos/4618507/pexels-photo-4618507.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Caddy", image: "https://images.pexels.com/photos/5591654/pexels-photo-5591654.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Dust Bin", image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { name: "Choke Plunger", image: "https://images.pexels.com/photos/6195651/pexels-photo-6195651.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Feather Brush", image: "https://images.pexels.com/photos/4108727/pexels-photo-4108727.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Fan Duster", image: "https://images.pexels.com/photos/4108713/pexels-photo-4108713.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Wall Duster", image: "https://images.pexels.com/photos/4108834/pexels-photo-4108834.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Glass Wiper", image: "https://images.pexels.com/photos/5591544/pexels-photo-5591544.jpeg?auto=compress&cs=tinysrgb&w=500" }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5
    }
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: { duration: 0.2 }
  }
};

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
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Homekeeping;