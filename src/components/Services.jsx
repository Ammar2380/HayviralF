import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "./Servicesbg.webp";
import img5 from "./calendly.png";
import video1 from './Services Section/Branding.mp4'
import video2 from './Services Section/Digital Marketing.mp4'
import video3 from './Services Section/SEO.mp4'
import video4 from './Services Section/ui design.mp4'


const servicesData = {
  development: {
    title: "Web Development",
    video:video1, 
    tabs: [
      {
        name: "Wordpress",
        heading: "Powerful CMS for Every Business",
        desc: "Build and manage dynamic websites with WordPress. Flexible, customizable, and scalable solutions for blogs, portfolios, and businesses.",
      },
      {
        name: "Shopify",
        heading: "Curated Delights for Discerning Shoppers",
        desc: "Empower your eCommerce business with premium Shopify solutions. High-performing, conversion-focused stores with seamless customer experiences.",
      },
      {
        name: "Squarespace",
        heading: "Creative Websites Made Simple",
        desc: "Design elegant and responsive websites effortlessly with Squarespace. Perfect for creatives, businesses, and online stores.",
      },
      {
        name: "Wix",
        heading: "Easy and Intuitive Website Building",
        desc: "Create beautiful websites with drag-and-drop ease using Wix. Ideal for individuals and small businesses looking to get online fast.",
      },
    ],
  },

  seo: {
    title: "SEO",
    video: video2,
    tabs: [
      {
        name: "Keyword Research",
        heading: "Target the Right Audience",
        desc: "Identify high-value keywords your customers are already searching for, ensuring maximum visibility and targeted traffic.",
      },
      {
        name: "On-Page SEO",
        heading: "Optimize Every Page",
        desc: "Structure your content, titles, and meta descriptions to boost rankings and user engagement.",
      },
      {
        name: "Technical SEO",
        heading: "Build for Search Engines",
        desc: "Improve website speed, mobile-friendliness, and crawlability to enhance search performance.",
      },
      {
        name: "Content Strategy",
        heading: "Content That Ranks",
        desc: "Plan and publish SEO-rich content to drive authority, traffic, and conversions.",
      },
    ],
  },

  branding: {
    title: "Branding",
    video: video3,
    tabs: [
      {
        name: "Identity",
        heading: "Build a Lasting Brand Identity",
        desc: "We create a complete identity system — logo, color palette, typography, brand voice — all crafted to communicate your essence and earn instant recognition and trust.",
      },
      {
        name: "Logo",
        heading: "Logos That Stand Out",
        desc: "Memorable, modern, and meaningful logos designed to instantly connect with your audience.",
      },
      {
        name: "Messaging",
        heading: "Shape Your Voice",
        desc: "From tagline to tone, we refine how your story resonates with your audience.",
      },
      {
        name: "Visuals",
        heading: "Define Your Style",
        desc: "Typography, colors, and imagery that set you apart and reinforce recognition.",
      },
    ],
  },

  social: {
    title: "Social Media Marketing",
    video:video4,
    tabs: [
      {
        name: "Content Creation",
        heading: "Engaging Content that Converts",
        desc: "We design posts, reels, and visuals that attract attention and spark engagement.",
      },
      {
        name: "Paid Ads",
        heading: "Maximize Your ROI",
        desc: "Run targeted ad campaigns on Facebook, Instagram, and LinkedIn to reach the right audience.",
      },
      {
        name: "Community Growth",
        heading: "Grow Loyal Communities",
        desc: "Authentic engagement strategies to build strong and lasting relationships with followers.",
      },
      {
        name: "Analytics",
        heading: "Data-Driven Strategies",
        desc: "Track, analyze, and refine campaigns with actionable insights.",
      },
    ],
  },
};

export default function ServicesPage() {
  const [activeTabs, setActiveTabs] = useState({
    development: 0,
    seo: 0,
    branding: 0,
    social: 0,
  });

  const handleTabClick = (serviceKey, index) => {
    setActiveTabs((prev) => ({ ...prev, [serviceKey]: index }));
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full text-white scroll-m-6"
      id="services"
    >
      <div className="relative">
        {/* 🔥 Title/Intro */}
        <div className="text-center pt-14">
          <div className="flex justify-center">
            <h1 className="border border-[#C6FD07] font-semibold text-[#C6FD07] rounded-2xl mb-4 px-4 py-1">
              Services
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
            Digital Services That Drive Growth
          </h2>
          <p className="mt-1 text-base sm:text-lg md:text-xl opacity-70 font-outfit text-[#c2c2c2] max-w-xl mx-auto leading-tight font-extralight">
            From first impressions to long-term engagement, we cover everything your business needs to succeed online.
          </p>
        </div>

        {/* 🔥 Services Sections */}
        <div className="px-6 md:px-20">
          {Object.entries(servicesData).map(([key, service]) => {
            const activeContent = service.tabs[activeTabs[key]];
            return (
              <section key={key} className="scroll-mt-55 relative pt-10 text-white">
                <div className="grid md:grid-cols-2 items-center bg-[#00303C] border border-[#C6FD07] rounded-2xl py-3">
                  
                  {/* Left Side */}
                  <div className="px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-5">
                      {service.title}
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3 mb-5 text-xs">
                      {service.tabs.map((tab, index) => (
                        <button
                          key={index}
                          onClick={() => handleTabClick(key, index)}
                          className={`md:px-6 px-4 md:py-2 py-1 rounded-full font-medium transition-all ${
                            activeTabs[key] === index
                              ? "bg-[#C6FD07] text-[#00303C]"
                              : "bg-purple-200 text-[#00303C] hover:bg-purple-300"
                          }`}
                        >
                          {tab.name}
                        </button>
                      ))}
                    </div>

                    {/* Heading & Description */}
                    <motion.div
                      key={activeContent.heading}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 leading-5">
                        {activeContent.heading}
                      </h3>
                      <p className="text-gray-200 text-base leading-tight mb-4">
                        {activeContent.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* 🎥 Right Side — Single Video */}
                  <motion.div
                    key={service.video}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden shadow-lg px-4"
                  >
                    <video
                      src={service.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[300px] object-cover border-4 border-[#FB6B03] rounded-2xl"
                    />
                  </motion.div>
                </div>
              </section>
            );
          })}
        </div>

        {/* 🔥 CTA Button */}
        <div className="p-8 flex justify-center">
          <button className="border border-[#00303C] bg-[#C6FD07] px-5 py-2 rounded-full font-semibold flex items-center gap-3 shadow-lg text-[#00303C] hover:scale-[1.02] transition">
            <img className="h-5" src={img5} alt="Calendly" />
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
