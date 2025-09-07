import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  { id: 1, category: "Branding", image: "/src/assets/port1.jpg" },
  { id: 2, category: "Social Media Marketing", image: "/src/assets/port2.jpg" },
  { id: 3, category: "SEO", image: "/src/assets/port3.jpg" },
  { id: 4, category: "Website Development", image: "/src/assets/port4.jpg" },
  { id: 5, category: "Branding", image: "/src/assets/port5.jpg" },
  { id: 6, category: "Website Development", image: "/src/assets/port6.jpg" },
];

const categories = [
  "All",
  "Branding",
  "Social Media Marketing",
  "SEO",
  "Website Development",
];

const PortfolioItem = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative rounded-lg overflow-hidden bg-white border border-gray-200 shadow"
  >
    <img
      src={project.image}
      alt={project.category}
      className="object-cover w-full h-40"
    />
    <div className="absolute inset-0 bg-[#00303C]/70 opacity-0 hover:opacity-100 transition flex items-end p-4">
      <div>
        <div className="text-sm text-white font-semibold">
          {project.category}
        </div>
        <button className="mt-2 px-3 py-1 rounded-full text-xs bg-[#C6FF00] text-[#00303C]">
          View Case
        </button>
      </div>
    </div>
  </motion.div>
);

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="px-6 md:px-20 py-16 bg-[#F9F9F9]">
      <SectionHeading
        title="Proof That Our Work Works"
        subtitle="From local startups to growing small businesses, we’ve helped brands go from invisible to unforgettable."
      />
      <p className="text-gray-700 mt-4 max-w-3xl">
        Every project we take on is a chance to tell a story, solve a problem,
        and spark growth. Here’s a glimpse of how we’ve helped small businesses
        build strong brands, gain visibility, and connect with their customers
        online.
      </p>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mt-8 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-[#00303C] text-[#C6FF00] shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
