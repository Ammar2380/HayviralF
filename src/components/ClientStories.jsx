import React from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import video1 from "./video (1).mp4";
import video2 from "./video (2).mp4";
import video3 from "./video (3).mp4";
import bg from "./test_bg.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Added icons

const clients = [
  { name: "Ayesha Khan", role: "Founder, Glow Skincare" },
  { name: "Bilal Ahmed", role: "CEO, TechNova" },
  { name: "Sarah Malik", role: "Marketing Manager, Urban Wear" },
  { name: "Ali Raza", role: "CTO, WebSolutions" },
];

export default function ClientStories() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 30 } },
    },
  });

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="clientstories"
      className="px-6 md:px-20 py-10 bg-[#00303C] text-[#ffff] font-outfit text-xl scroll-m-10"
    >
      <div className="text-center mb-10 md:mb-16 space-y-1">
        <div className="text-center flex justify-center items-center ">
          <h1 className="border-1 border-[#C6FD07] text-lg font-semibold item-center text-center text-[#C6FD07] w-40 rounded-2xl">
            Testimonials
          </h1>
        </div>
        <h2 className="text-4xl md:text-5xl font-outfit font-bold">
          Real Stories. Real Results.
        </h2>
        <p className="text-[#ffff] max-w-xl md:w-130 md:text-lg opacity-59 leading-tight font-extralight mx-auto text-xl">
          Hear directly from our clients about how HayViral helped them grow,
          scale, and succeed.
        </p>
      </div>

      {/* ✅ Slider with Buttons */}
      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-2 md:left-6 z-20 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {clients.map((client, index) => (
            <div key={index} className="keen-slider__slide">
              <motion.div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg shadow-green-700/30">
                <motion.video
                  src={video1}
                  autoPlay
                  muted
                  loop
                  controls
                  className="absolute top-0 left-0 w-full h-full object-cover border-[#00303C] rounded-2xl border-2"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-green-100">
                  <h3 className="text-lg font-bold text-[#ffff]">
                    {client.name}
                  </h3>
                  <p className="text-sm">{client.role}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-2 md:right-6 z-20 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
