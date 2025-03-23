import { div, section } from 'motion/react-client'
import React from 'react'
import about from '../assets/about.png';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"; // Corrected import for motion


const About = () => {
  return (
    <div className='h-full w-full'>
      <section className="h-screen w-full relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-50"
          style={{ backgroundImage: `url(${about})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-40"></div>
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
          <NavLink to="/products/home-keeping">
            <button 
              className="mt-8 px-6 py-2 bg-black hover:bg-blue-700 rounded-lg text-sm md:text-base"
            >
              Explore Collections
            </button>
          </NavLink>
        </motion.div>
      </section>
    </div>
  )
}

export default About
