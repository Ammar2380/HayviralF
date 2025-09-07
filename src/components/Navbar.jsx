import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "whychooseus", label: "Why Choose Us" },
  { id: "howwework", label: "How We Work" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const obsOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, obsOptions);

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
   <header className="w-full fixed top-0 z-50 shadow-lg">
  <div className="flex items-center justify-between px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md border-b border-green-500/20">

    {/* Left - Agency Name */}
    <h1 className="text-xl font-bold text-green-600 tracking-wide mr-12">
      HayViral
    </h1>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-6 text-sm font-normal text-gray-700">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => handleNavClick(s.id)}
          className={`relative transition-colors duration-300 ${
            active === s.id ? "text-green-600" : "hover:text-green-500"
          }`}
        >
          {s.label}
          {/* Underline */}
          <span
            className={`absolute left-0 bottom-[-3px] h-[2px] bg-green-500 transition-all duration-300 ${
              active === s.id ? "w-full" : "w-0"
            }`}
          />
        </button>
      ))}

      {/* Contact Button */}
      <button
        onClick={() => handleNavClick("contact")}
        className="ml-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full font-semibold shadow-md hover:scale-105 transition-transform text-sm"
      >
        Contact Us
      </button>
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen((s) => !s)}
      className="md:hidden text-green-600 p-2 rounded-md hover:bg-green-100 transition"
    >
      {open ? "✕" : "☰"}
    </button>
  </div>

  {/* Mobile Dropdown */}
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute right-4 top-20 bg-white/95 border border-green-300 p-6 rounded-2xl w-72 md:hidden shadow-lg backdrop-blur-lg flex flex-col gap-3"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleNavClick(s.id)}
            className={`text-left px-3 py-2 rounded-md transition-colors ${
              active === s.id
                ? "bg-green-100 text-green-600 font-semibold"
                : "text-gray-700 hover:bg-green-50 hover:text-green-500"
            }`}
          >
            {s.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick("contact")}
          className="mt-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full w-full font-semibold hover:scale-105 transition-transform"
        >
          Contact
        </button>
      </motion.div>
    )}
  </AnimatePresence>
</header>

  );
}
