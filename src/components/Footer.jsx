import React from 'react'
import logo from "./navlogo.png";
import img5 from './calendly.png'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // official X (Twitter) logo

const Footer = () => {
  return (
    <div className='w-full border-t border-[#C6FD07] md:flex flex-col md:flex-row'>
      
      {/* Left Section: 1/3 width */}
      <div className="bg-[#00303C] flex justify-center items-center md:w-1/3 w-full p-6 border-b md:border-b-0 md:border-r border-[#C6FD07]">
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="HayViral Logo" className="w-28 mb-2" />
          <h1 className="text-xl font-semibold text-white">
            Book a Free Call For Consultation
          </h1>
          <p className="text-sm text-gray-300 font-light max-w-xs">
            Experienced team delivering exceptional digital solutions tailored to your brand.
          </p>
          <button className="mt-4 border bg-[#C6FD07] px-6 py-2 rounded-full font-semibold flex items-center gap-3 shadow-lg text-[#00303C] hover:scale-105 transition">
            Contact Us
            <img className="h-5" src={img5} alt="call-icon" />
          </button>
        </div>
      </div>

      {/* Right Section: 2/3 width */}
      <div className="bg-[#00303C] flex flex-col w-full md:w-2/3">
        
        {/* Social Handles */}
        <div className="flex flex-col justify-center items-center py-10 border-b border-[#C6FD07] space-y-4">
          <h2 className="text-white text-2xl font-semibold">Our Social Handles</h2>
          <div className="flex gap-6 text-2xl">
            <a href="https://linkedin.com/in/ajaygraphicdesigner" target="_blank" rel="noreferrer" className="border border-[#C6FD07] h-11 w-11 flex justify-center items-center rounded-lg text-white hover:text-[#0A66C2]">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="border border-[#C6FD07] h-11 w-11 flex justify-center items-center rounded-lg text-white hover:text-[#1a1717]">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="border border-[#C6FD07] h-11 w-11 flex justify-center items-center rounded-lg text-white hover:text-[#E4405F]">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom */}
       <div className="flex justify-between items-center h-12 md:h-16 w-full px-6">
  <span className="text-white text-sm font-semibold">HayViral Agency</span>
  <span className="text-white text-sm font-semibold">@2025, All RIGHTS RESERVED</span>
</div>


      </div>
    </div>
  )
}

export default Footer;
