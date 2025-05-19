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
  },
  {
    name: "Kitchen Rolls",
    image: "https://imgs.search.brave.com/5BpA0WWW_bH8-jateVdIXd75FhVrh99IN4h9R3dveo4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFOSm1tVUhHM0wu/anBn"
  },
  {
    name: "Toilet Roll",
    image: "https://imgs.search.brave.com/ggNqg1Uh39y9jaZVe_bhJYIPz8diVk6vM5zmgNXlUVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDU1/MjM3OTIxL3Bob3Rv/L3RvaWxldC1wYXBl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RlRmYV83MFRV/Vl9Hci1FeWdpZ2dn/bTBSVkdVbm9QODZt/cHhtY3pxZUtqZz0"
  },
  {
    name: "Broom (Bhuari, Seekh, Plastic, etc.)",
    image: "https://imgs.search.brave.com/UGHDxpypTNQke12g-B9DXBmGwdgU4pUmFomVFEHx6gE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/dXN0LXBhbi1icm9v/bV8xMzM5LTU4OTYu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA"
  },
  {
    name: "Wet Mops",
    image: "https://imgs.search.brave.com/cF6wvWgwcjdcUuGYG8USzMwamZ3cX-ldEDHav0angTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFGdE95ZFV2K0wu/anBn"
  },
  {
    name: "Dry Mops",
    image: "https://imgs.search.brave.com/DPUNNevQO6ItRHynO1WWYs-CDfndJqbAdMTSxMk_hD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhkc3RhdGlj/LmNvbS9wcm9kdWN0/SW1hZ2VzL2EyNTE4/ZDUzLTk4N2YtNDdj/Zi04MzQ1LWMxZTkz/MmU3ODQ5Yy9zdm4v/cnViYmVybWFpZC1j/b21tZXJjaWFsLXBy/b2R1Y3RzLWR1c3Qt/bW9wcy0xODg3MDgy/LTY0XzYwMC5qcGc"
  },
  {
    name: "Aluminium Foil",
    image: "https://imgs.search.brave.com/G4bipTGVdcn29z9-J4QecrvXjuw4ixWyzX0mnfYZON0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFRU1krR2NoT0wu/anBn"
  },
  {
    name: "Cling Foil",
    image: "https://imgs.search.brave.com/855BrPUME45FSDvIkeXq3DQYtTpE2hgQSvYY-2_-qa0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxRHFCUjBMUDJM/LmpwZw"
  },
  {
    name: "Butter Paper",
    image: "https://imgs.search.brave.com/v09pZfVo_azD47JJqu_j05P3RrcHTdFvSMd6VnGAvcA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFrZXNoYWtlLmNv/LmluL2ltYWdlL2Nh/Y2hlL2NhdGFsb2cv/cHJvZHVjdHMvQnV0/dGVyJTIwUGFwZXIt/NTUweDU1MC5qcGc"
  },
  {
    name: "Hit, Mosquito Coil, Allout, Goodnight, etc. (Mosquito Repellent)",
    image: "https://imgs.search.brave.com/YR3EBq8WpBHQ8MdLGsWqZcqmpIyCScdkELUNmareifE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFSQnYtalBhaEwu/anBn"
  },
  {
    name: "Steel Wool, Scotch Brite, Wonder Wipes, Kitchen Cleaners, etc.",
    image: "https://imgs.search.brave.com/gsd56jnJhVMA3xKQR9RsLWJ7R6c-RcUoQuZgnJ5CtKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxNXAzVGdMSy1M/LmpwZw"
  },
  {
    name: "Surf (Vim, Fena, Surf Excel, etc.)",
    image: "https://imgs.search.brave.com/Ef85R9yNFzJeWSDhfKoludYh10fNLq7LVbUM6jlkRoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFJeEdOQzN4UEwu/anBn"
  },
  {
    name: "Gloves, Shower Cap, Toothbrush, etc. (Entire Washroom Kit)",
    image: "https://imgs.search.brave.com/9jtl8yOMqZkaJSOLs0MILDK1beisNmkye12ZHZzE2QY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzEx/NjEvOTYzNi9maWxl/cy9wZXJzb24td2lw/aW5nLXRoZS13YWxs/c18xMDI0eDEwMjQu/anBnP3Y9MTYyODgx/OTg5Mw"
  },
  {
    name: "Wringer Trolley",
    image: "https://imgs.search.brave.com/rX9WZmTkFV0UOmkr4NI-N2bR3qJSdUmIVzEvmdMApYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFhYVlOa0FiREwu/anBn"
  },
  {
    name: "Lobby Dust Pan",
    image: "https://imgs.search.brave.com/95D6h7fqk81zQ7-JvZuTEkWWYx2spzZo8mnbOtPcPww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxNTNnRmRUOHBM/LmpwZw"
  },
  {
    name: "Dust Pan",
    image: "https://imgs.search.brave.com/1NMwJLV4z7orgqy5mhKcT0Xy5PKX_D4azqHtuKC-Piw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTI2/Mzc5Nzg2L3Bob3Rv/L2R1c3RwYW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU5o/cWRVVXQ2d1ZtMkdB/M0MyNHJ5OTl1eTVv/S1BTbF9DVEZEWmZi/QWhxRkk9"
  },
  {
    name: "Choke Plunger",
    image: "https://imgs.search.brave.com/aZpkT2H4qy91qH5ZVmZFtUUd6TzH1nevT4Sqz_nfYXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vc2J1/cm5zLmNvbS9jZG4v/c2hvcC9maWxlcy9h/OWM4LTYzMWEzMzM4/NmY0ZTEuanBnP3Y9/MTcyODYyMjMzNiZ3/aWR0aD0xNDQ1"
  },
  {
    name: "Fan Dsuter",
    image: "https://m.media-amazon.com/images/I/41yVSOAs1mL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "Wall Duster",
    image: "https://imgs.search.brave.com/hKbHwI4TOUhKXETthK4Eu8Xzh6RZWLX5h5xtbWNw96g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFDOCswV3hVUUwu/anBn"
  },
  {
    name: "Glass Wiper",
    image: "https://imgs.search.brave.com/fVkrfFF7t2mZb1DV7cotIN6qes0FQGci-n4Ba54uzIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFpbHVRbFJSUUwu/anBn"
  },
  {
    name: "Plastic Baskets",
    image: "https://imgs.search.brave.com/RRB0vMzCGbY1z_BddqSmhR4C1Fz0_PzJohbgOO9mVv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFmSlp0UGx4dUwu/anBn"
  },
  {
    name: "Plastic Dustbins (all sizes)",
    image: "https://imgs.search.brave.com/yMfKuRd1nkSAO9QTH1raFZUdFvW2nXcZBZQ4YJqRTtc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWlt/Zy50aXN0YXRpYy5j/b20vZnAvMC8wMjkv/cGxhc3RpYy1kdXN0/Ymlucy0zMTguanBn"
  },
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