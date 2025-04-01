import React, { lazy } from 'react';
import main from '../assets/main.png'; // Import the image
import { motion } from "framer-motion"; // Corrected import for motion
import { NavLink } from 'react-router-dom';
import Feature from '../Components/Ui/Feature';
import Catsec from '../Components/Ui/Catsec'
const Home = () => {
  const cards= [
    {
      image:"https://imgur.com/pZTtbq4.png",
      heading:"Hanger",
      btn: "View More",
    
    },
    {
      image:"https://imgur.com/XagbAfO.png",
      heading:"Hanger",
      btn: "View More",
    
    },
    {
      image:"https://imgur.com/vWD9luE.png",
      heading:"Hanger",
      para: "use for hanging cloths(Shirts, Tshirts, coats or pants )",
      btn: "View More",
    },
    
  ]
  
  const cards1 = [
    {
      image: "https://media.istockphoto.com/id/510693044/photo/house-cleaning-product-on-wood-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dgz3K3T6OSNxS2ciy7Voo8ASkkHyEzWYKQy1qUfu14w=",
      heading: "Home Keeping Essentials",
      para: "Housekeeping essentials include cleaning sprays, sponges, brushes, and detergents for a spotless and fresh home.",
      btn: "Explore More",
      path: "/products/home-keeping"  
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aHJvb20lMjBlc3NlbnRpYWxzfGVufDB8fDB8fHww",
      heading: "Wholesaler's Store",
      para: "Bulk hygiene solutions for businesses, ensuring cleanliness and convenience at wholesale prices",
      btn: "Explore More",
      path: "/products/Wholesalers-store"
    },
    {
      image: "https://images.unsplash.com/photo-1640294418596-1534299b1291?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNla2VlcGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      heading: "Home Keeping Essentials",
      para: "Housekeeping essentials include cleaning sprays, sponges, brushes, and detergents for a spotless and fresh home.",
      btn: "Explore More",
      path: "/products/home-keeping"
    }
  ];
  return (
    <div className='h-full w-full'>
      <section className="h-screen w-full relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-50"
          style={{ backgroundImage: `url(${main})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, ease: "easeInOut" }}
          className="relative z-10 text-white text-center flex flex-col justify-center items-center h-full px-4"
        >
          <h1 className="Bold text-4xl md:text-5xl lg:text-6xl">
            Discover Quality Household Products
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl max-w-2xl">
            Elevate your living space with our curated collection of premium household essentials
          </p>
          <NavLink to="/products/Wholesalers-store">
            <button
              className="mt-8 px-6 py-2 bg-black hover:bg-blue-700 rounded-lg text-sm md:text-base"
            >
              Explore Collections
            </button>
          </NavLink>
        </motion.div>
      </section>
      <motion.section 
       initial={{ y: 25, opacity: 0 }}
       whileInView={{ y:0 , opacity: 1 }}
       transition={{ delay: 0.1, ease: "easeInOut" }}
      className="p-6 bg-[#f9f9f9] md:p-12 lg:p-20 flex flex-wrap  justify-center gap-6 md:gap-10 text-left">
        <Feature 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          }
          heading="Quality Services" 
          para="We encourage our colleagues to commit themselves to provide customer care, adopt to vibrant technology to maintain our top position in the field." 
        />
        <Feature 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          }
          heading="Customer Focus" 
          para="Our primary focus is customer satisfaction. We strive to provide top-notch services tailored to meet customer expectations." 
        />
        <Feature 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
          heading="Innovation in Housekeeping" 
          para="We constantly innovate in housekeeping practices, using advanced tools and eco-friendly solutions to deliver exceptional cleanliness and comfort." 
        />
      </motion.section>
      <section>
        <Catsec heading="Featured Categories"
        para="Explore our featured categories and discover the best products and services tailored to your needs."
        cards={cards1} 
        
        />
      </section>    
      <section >
        <Catsec heading="Featured Products"
        para="Explore our featured categories and discover the best products and services tailored to your needs."
        cards={cards} 
        
        />
      </section>

      <address className='w-full overflow-hidden h-0 pb-[30%] relative' >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.639597380419!2d77.2127426752035!3d28.657428682950208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7216e92e03%3A0x498aa9d178363e5b!2sNarain%20Dass%20Khanna%20%26%20Co.!5e1!3m2!1sen!2sin!4v1742676248823!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='b-0 h-full w-full absolute left-0 top-0'></iframe>
      </address>    
    </div>
    
  );
};

export default Home;
    