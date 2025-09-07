import React from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const clients = [
  {
    name: "Ayesha Khan",
    role: "Founder, Glow Skincare",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote: "HayViral transformed our online presence. Sales grew 3x within 3 months!",
  },
  {
    name: "Bilal Ahmed",
    role: "CEO, TechNova",
    video: "https://www.w3schools.com/html/movie.mp4",
    quote: "From branding to SEO, their team delivered beyond expectations!",
  },
  {
    name: "Sarah Malik",
    role: "Marketing Manager, Urban Wear",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote: "Professional, creative, and results-driven. HayViral feels like an extension of our team.",
  },
  {
    name: "Ali Raza",
    role: "CTO, WebSolutions",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote: "Their strategy brought us real results in just 2 months!",
  },
];

export default function ClientStories() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 30 } },
    },
  });

  return (
    <section className="px-6 md:px-20 py-24 bg-[#00303C] text-[#35f713]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Real Stories. Real Results.
        </h2>
        <p className="text-green-200 max-w-2xl mx-auto mt-4">
          Hear directly from our clients about how HayViral helped them grow, scale, and succeed.
        </p>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {clients.map((client, index) => (
          <div key={index} className="keen-slider__slide">
            <motion.div
              className="relative w-full h-[500px] rounded-2xl  overflow-hidden shadow-lg shadow-green-700/30"
            >
             
           <motion.video
  src={client.video}
  autoPlay
  muted
  loop
  controls
  className="absolute top-0 left-0 w-full h-full object-cover border-green-500 rounded-2xl border-2"
/>


        
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-green-100">
                <p className="italic mb-2">“{client.quote}”</p>
                <h3 className="text-lg font-bold text-green-400">{client.name}</h3>
                <p className="text-sm">{client.role}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
