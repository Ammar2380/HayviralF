import { section } from 'framer-motion/client'
import React from 'react'
import logo from "./navlogo.png";
import img5 from './calendly.png'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // official X (Twitter) logo

const Footer = () => {
  return (
    <div className='h-90 w-full  border-t-1  border-[#C6FD07] md:flex  '>
     <div className="h-90  w-auto md:w-134  bg-[#00303C] md:border-r border-b border-[#C6FD07] flex justify-center items-center">
  <div className="flex flex-col items-start text-left px-6 space-y-4">
    {/* Logo */}
    <img src={logo} alt="HayViral Logo" className="w-28 mb-2" />

    {/* Heading */}
    <h1 className="text-xl font-semibold text-white">
      Book a Free Call For Consultation
    </h1>

    {/* Description */}
    <p className="text-sm text-gray-300 font-light max-w-xs">
      Experienced team delivering exceptional digital solutions tailored to your brand.
    </p>

    {/* Button */}
    <button className="mt-4 border border-[#00303C] bg-[#C6FD07] px-6 py-2 rounded-full font-semibold flex items-center gap-3 shadow-lg text-[#00303C] hover:scale-105 transition">
      Contact Us
      <img className="h-5" src={img5} alt="call-icon" />
    </button>
  </div>
</div>

      
      <div className='flex flex-col '>
      <div className="md:h-140 h-auto md:py-0 py-10 w-auto md:w-200 bg-[#00303C] border-b border-[#C6FD07] flex flex-col justify-center items-center space-y-4">
  {/* Heading */}
  <h2 className="text-white text-2xl font-semibold">Our Social Handles</h2>

  {/* Icons */}
  <div className="flex gap-6 text-2xl ">
<span className='border-1 border-[#C6FD07] h-11  w-11 rounded-lg justify-center flex items-center'>

   <a 
  href="https://linkedin.com/in/ajaygraphicdesigner" 
  target="_blank" 
  rel="noreferrer"
>
  <FaLinkedin className="text-white hover:text-[#0A66C2] rounded-lg " />
</a>

</span>
<span className='border-1 border-[#C6FD07] h-11  w-11 rounded-lg justify-center flex items-center'>

    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FaXTwitter className="text-white hover:text-[#1a1717] rounded-lg " />
    </a>
</span>
<span className='border-1 border-[#C6FD07]  h-11  w-11 rounded-lg justify-center flex items-center'>

    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram className="text-white hover:text-[#E4405F]  rounded-lg" />
    </a>
</span>

  </div>
</div>

     <div className=" h-10 md:h-50 w-auto md:w-200 bg-[#00303C] flex justify-center items-center">
  <p className="text-white text-sm flex gap-14 font-semibold md:gap-110">
    <span>HayViral Agency</span>
    <span>@2025, All RIGHTS RESERVED</span>
  </p>
</div>

      </div>
    </div>
  )
}

export default Footer