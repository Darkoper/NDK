import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import main from '../assets/main.png';
function Contact() {
  // Reference for form
  const formRef = useRef();

  // State for form submission status
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your actual service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // Replace with your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setError(false);
          formRef.current.reset(); // Reset form fields after submission
        },
        (error) => {
          console.log("FAILED...", error);
          setError(true);
        }
      );
  };

  return (
    <div className="relative z-0 flex justify-center items-center min-h-screen overflow-x-hidden bg-cover" style={{ backgroundImage: `url(${main})` }}>
      <div className="bg-[#F9F9F9] shadow-lg rounded-lg p-8 w-full max-w-2xl z-10">
        {/* Heading Section */}
        <div className="text-center text-black mb-8">
          <p className="text-xl">GET IN TOUCH</p>
          <h2 className="text-2xl font-bold mt-4">Contact Us for Any Query</h2>
          <p className="mt-4">
            We’re here to answer your questions and listen to your suggestions.
          </p>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-gray-700 font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />

          <label className="block text-gray-700 font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />

          <label className="block text-gray-700 font-semibold">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold p-3 rounded-md hover:bg-[#17495a] hover:text-[#d0e7ee] transition"
          >
            Send Message
          </button>
        </form>

        {/* Success & Error Messages */}
        {submitted && (
          <p className="text-center text-green-500 mt-4">
            ✅ Your message has been sent successfully!
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 mt-4">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
