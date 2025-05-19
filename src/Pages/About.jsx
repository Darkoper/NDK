import React from 'react';
import about from '../assets/about.png';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import Feature from '../Components/Ui/Feature';
import CatSec from '../Components/Ui/Catsec';
import Marquee from '../Components/Ui/Marquee';
 // Make sure the path is correct

const About = () => {
  const cards= [
    {
      image:"https://plus.unsplash.com/premium_photo-1661320859992-f6213b525d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading:"House-Keeping Essentials",
      btn: "View More",
      path: "/products/home-keeping",
    },
    {
      image:"https://images.unsplash.com/photo-1601598704991-eef6114775e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading:"Wholesale Products",
      btn: "View More",
      path: "/products/Wholesalers-store",
    },
    {
      image:"https://images.unsplash.com/photo-1601598852806-524f0060508e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading:"House-Keeping Essentials",
      btn: "View More",
      path: "/products/home-keeping",
    }
  ]
  return (
    <div className='h-full w-full'>
      {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden flex flex-col md:flex-row">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center -z-50"
    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
  />
  
  {/* Left Side - Full width on mobile, half on desktop */}
  <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-white bg-opacity-60 flex items-center justify-center p-6 md:p-8">
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, ease: "easeInOut" }}
      className="text-black max-w-md text-center md:text-left"
    >
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-roboto">
        50 Years of Excellence in<br />
        Wholesale Distribution
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8">
        Family-owned business serving quality cleaning supplies and household essentials since 1973
      </p>
    </motion.div>
  </div>

  {/* Right Side - Full width on mobile, half on desktop */}
  <div className="w-full md:w-1/2 h-1/2 md:h-full"></div>
</section>

      {/* Journey Timeline Section */}
      <section className="w-full pt-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey Through Time</h2>
            
          </motion.div>

          <div className="flex flex-wrap justify-center">
            <Feature  
              icon={<span className="text-4xl">🏢</span>}
              heading="Founded in Sadar Bazaar"
              para="Started our humble beginnings in a small shop in 1950"
            />
            <Feature
              icon={<span className="text-4xl">📦</span>}
              heading="Expanded Warehouse Operations"
              para="Grew our storage capacity to serve more customers in 1970"
            />
            <Feature
              icon={<span className="text-4xl">🚚</span>}
              heading="Pan-India Distribution Network"
              para="Established nationwide distribution by 1973"
            />
          </div>
        </div>
      </section>
      <section className='w-full bg-gray-50'>
        <div>
          <CatSec heading={"Our Product Categories"}
          cards={cards}
          />
        </div>

      </section>
      <section className='w-full bg-gray-300 py-16 px-4 sm:px-6 lg:px-8'>
  <div className='max-w-4xl mx-auto text-center'>
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8'
    >
      OUR MISSION
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className='text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto'
    >
      To deliver exceptional quality products that enhance cleanliness and comfort while maintaining sustainable practices and fostering long-term relationships with our clients
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <a href="https://www.google.com/maps/dir//Crockery+Market,+116%2F14A,+Narain+Market,+Sadar+Bazaar,+New+Delhi,+Delhi,+110006/@28.6573991,77.1329162,24622m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390cfd7216e92e03:0x498aa9d178363e5b!2m2!1d77.2153176!2d28.657424?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D" target='_blank'>
        <button className='bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg'>
          Visit Our Shop
        </button>
      </a>
      
    </motion.div>
  </div>
</section>
{/* Marquee Section */}
<section className="w-full bg-gray-50 overflow-hidden ">
  <div className="container px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text md:text-4xl font-bold text-gray-800 mt-8">Our Partners</h2>
      <div className="w-60 h-1 bg-green-600 mx-auto"></div>
    </motion.div>
    <Marquee />
  </div>
</section>
{/* Why Choose Us Section */}
<section className="w-full py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
      <div className="w-20 h-1 bg-green-600 mx-auto"></div>
    </motion.div>

    <div className="flex flex-wrap justify-center gap-20">
      <Feature
        icon={<span className="text-4xl">50+</span>}
        heading="Years Experience"
        para="Half a century of expertise in wholesale distribution"
      />
      <Feature
        icon={<span className="text-4xl">✓</span>}
        heading="Quality Assured"
        para="Rigorous quality control for all our products"
      />
      <Feature
        icon={<span className="text-4xl">❤</span>}
        heading="Customer First"
        para="Dedicated to exceeding customer expectations"
      />
    </div>
  </div>
</section>



    </div>
  )
}

export default About;