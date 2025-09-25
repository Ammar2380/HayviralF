import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mockup1 from './mockup1.jpeg'
import mockup2 from './mockup2.jpeg'
import mockup3 from './mockup3.jpeg'
import img1 from './calendly.png'
import bg from './hero@3x.jpg'
import logo from "./navlogo.png";

const logos = [
  logo, // 👈 your custom logo
logo,logo,logo
];


export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-change logos every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen flex items-center pt-28 px-6 md:px-20 text-[#C6FD07]"
    >
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center w-85 flex justify-center md:justify-start items-center ">
            <h1 className="px-6 font-semibold mb-3 rounded-4xl py-1 text-sm border-1 border-[#C6FD07]">
              HayViral Digital Agency
            </h1>
          </div>

          <h1 className="text-center md:text-left md:text-5xl font-outfit text-4xl font-bold">
            Turning Clicks into Customers
          </h1>

          <p className="mt-3 text-center md:text-left text-white font-outfit leading-tight md:leading-normal text-xl">
            Digital solutions built for small businesses because you deserve big
            results without the big-agency price tag.
          </p>

          {/* CTA Button + Logos */}
          <div className="mt-6 flex flex-col gap-6 items-center md:items-start">
            <button className="border border-[#00303C] bg-[#C6FD07] px-5 py-2 rounded-full font-semibold flex flex-row justify-center items-center gap-3 shadow-lg text-[#00303C] hover:scale-[1.02] transition">
              <img className="h-5" src={img1} alt="" />
              Book a Free Discovery Call
            </button>

            {/* Fading Logo Carousel */}
          {/* CTA Button + Logos */}
<div className=" flex flex-col gap-6 items-center md:items-start">
  

  {/* Sliding Logos */}
  <div className="overflow-hidden w-90 mb-5 md:w-110">
    <motion.div
      className="flex gap-10"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
    >
      {[...logos, ...logos].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt="Client Logo"
          className="h-6 w-auto"
        />
      ))}
    </motion.div>
  </div>
</div>

          </div>
        </motion.div>

        {/* Right Content (Mockups) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-4 justify-center md:justify-end mb-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-48 h-72 bg-[#F5F5F5] rounded-2xl shadow-lg p-1 transform -rotate-6"
            >
              <img
                src={mockup1}
                alt="mock1"
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="w-48 h-72 bg-[#F5F5F5] rounded-2xl shadow-lg p-1 transform rotate-3"
            >
              <img
                src={mockup2}
                alt="mock2"
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="hidden md:block w-48 h-72 bg-[#F5F5F5] rounded-2xl shadow-lg p-1 transform rotate-6"
            >
              <img
                src={mockup3}
                alt="mock3"
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
