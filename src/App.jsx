import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlaySquare, BarChart3, PenTool } from "lucide-react";
import "./app.css";
import Footer from './components/Footer';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import SectionHeading from "./components/SectionHeading";
import ClientStories from "./components/ClientStories";









// ---------------- CTA Section ----------------
const CTASection = () => (
  <section className="px-6 md:px-20 py-16 bg-[#FFFFFF] text-center">
    <h2 className="text-3xl font-bold">Ready to Grow Your Business Online?</h2>
    <p className="text-gray-600 mt-2">Let’s build a digital strategy that works for you.</p>
    <button className="mt-6 bg-[#C6FF00] px-6 py-3 rounded-full font-semibold text-[#00303C] hover:scale-[1.02] transition">
      Book a Free Strategy Call
    </button>
  </section>
);





// ---------------- Main Landing Page ----------------
export default function HayviralLanding() {
  return (
    <div className="font-sans">
   
      
      <Navbar />
      <Hero />
       <ClientStories />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <HowWeWork />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
