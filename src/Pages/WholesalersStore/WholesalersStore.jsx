import React from 'react';
import Card from "../../Components/Ui/Card";
import { motion } from 'framer-motion'; // For animations

const WholesalersStore = () => {
  const cards = [
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557440/16_eanqly.jpg",
      heading: "Hanger",
      btn: "View More",
      path: "/products/Wholesalers-store/Hangers"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744534079/252_svacna.png",
      heading: "Wipers",
      btn: "View More",
      path: "/products/Wholesalers-store/Wipers"
    },
    {
      image: "https://i.ibb.co/v44WMtqN/246.jpg",
      heading: "Spray Bottles",
      btn: "View More",
      path: "/products/Wholesalers-store/SprayBottles"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744535624/155_hm7uqo.jpg",
      heading: "Toilet Brushes",
      btn: "View More",
      path: "/products/Wholesalers-store/ToiletBrushes"
    },
    {
      image: "https://i.ibb.co/bjwcN0sk/97.jpg",
      heading: "Mop",
      btn: "View More",
      path: "/products/Wholesalers-store/Mops"
    },
    {
      image: "https://i.ibb.co/ZRjRTBVn/32.jpg",
      heading: "Ropes",
      btn: "View More",
      path: "/products/Wholesalers-store/Ropes"
    },
    {
      image: "https://i.ibb.co/V0fWmSXN/214.jpg",
      heading: "Feather Brushes",
      btn: "View More",
      path: "/products/Wholesalers-store/CleaningBrushes"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744537167/Premier_1kg_Foil_qti8ue.jpg",
      heading: "Aluminium Foil",
      btn: "View More",
      path: "/products/Wholesalers-store/AluminiumFoil"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744539578/142_acs16r.jpg",
      heading: "Bottle Brush",
      btn: "View More",
      path: "/products/Wholesalers-store/BottleBrush"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744613199/255_ealrlu.png",
      heading: "Broom Sticks",
      btn: "View More",
      path: "/products/Wholesalers-store/BroomSticks"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744615034/270_iepdj4.png",
      heading: "Bucket Mops",
      btn: "View More",
      path: "/products/Wholesalers-store/BucketMops"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744615598/274_vlxeop.png",
      heading: "Butter Papers",
      btn: "View More",
      path: "/products/Wholesalers-store/ButterPapers"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744615940/156_bgeuls.jpg",
      heading: "Choke Remover",
      btn: "View More",
      path: "/products/Wholesalers-store/ChokeRemover"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744616644/279_ylbhnb.png",
      heading: "Cleaning Brush",
      btn: "View More",
      path: "/products/Wholesalers-store/CleaningBrush"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744617445/120_skqmh7.jpg",
      heading: "Clip Hangers", 
      btn: "View More",
      path: "/products/Wholesalers-store/ClipHangers"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744618408/102_owge3v.jpg",
      heading: "Cloth brush", 
      btn: "View More",
      path: "/products/Wholesalers-store/ClothBrush"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744619787/285_xvlmza.png",
      heading: "Cloth Clips", 
      btn: "View More",
      path: "/products/Wholesalers-store/ClothClips"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744623258/146_yc0cwl.jpg",
      heading: "Dust Pan", 
      btn: "View More",
      path: "/products/Wholesalers-store/DustPan"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744623675/60_qizlbt.jpg",
      heading: "Dye Brush", 
      showArrow: false,
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744624362/36_lupzse.jpg",
      heading: "Face tissue", 
      btn: "View More",
      path: "/products/Wholesalers-store/FaceTissue"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744625944/56_davfkn.jpg",
      heading: "Foot Scrubber", 
      btn: "View More",
      path: "/products/Wholesalers-store/FootScrubber"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744626665/304_mlsso0.png",
      heading: "Hooks", 
      btn: "View More",
      path: "/products/Wholesalers-store/Hooks"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744627815/314_wkrcrr.png",
      heading: "Jala Brushes", 
      btn: "View More",
      path: "/products/Wholesalers-store/JalaBrushes"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744628058/65_deqvwa.jpg",
      heading: "Kitchen Rolls", 
      btn: "View More",
      path: "/products/Wholesalers-store/KitchenRolls"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744628331/124_shafrv.jpg",
      heading: "Loofa", 
      btn: "View More",
      path: "/products/Wholesalers-store/Loofa"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744628771/Roto_pvu6ps.jpg",
      heading: "Magic Brushes", 
      btn: "View More",
      path: "/products/Wholesalers-store/MagicBrushes"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744629058/54_b2pzo0.jpg",
      heading: "Napkins", 
      btn: "View More",
      path: "/products/Wholesalers-store/Napkins"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744629335/IMG_20250327_162309_pddbzh.jpg",
      heading: "Napthalene balls", 
      showArrow: false
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744629584/30_bt9iwd.jpg",
      heading: "Odonil", 
      showArrow: false
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744629656/68_gf7msf.jpg",
      heading: "Scrubber", 
      btn: "View More",
      path: "/products/Wholesalers-store/Scrubber"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744629996/130_xegonu.jpg",
      heading: "Sink Brushes", 
      btn: "View More",
      path: "/products/Wholesalers-store/SinkBrushes"
    },
    {
      image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744634312/148_qqyw9n.jpg",
      heading: "TIle Brushes", 
      btn: "View More",
      path: "/products/Wholesalers-store/TileBrushes"
    },
    

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6">
        {/* Title Section with Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-extrabold text-blue-700 tracking-tight sm:text-5xl">
            Explore Our Wholesale Product Range
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Discover a comprehensive selection of quality products for your business needs.
          </p>
          <div className="inline-block w-24 h-1 mt-6 rounded-full bg-blue-500"></div>
        </motion.div>

        {/* Cards Grid Section with Animation */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card
                image={card.image}
                alt={card.heading}
                heading={card.heading}
                para={card.para}
                btn={card.btn}
                path={card.path}
                showArrow={card.showArrow}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WholesalersStore;