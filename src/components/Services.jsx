import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "./SMM.jpg";
import img2 from "./SEO.jpg";
import img3 from "./branding.jpg";
import img4 from "./web dev.jpg";
import img5 from "./calendly.png";
import bg from "./Services bg.png";
import { section } from "framer-motion/m";

// Data for all services
const servicesData = {
  development: {
    title: "Web Development",
    tabs: [
      {
        name: "Wordpress",
        heading: "Powerful CMS for Every Business",
        desc: "Build and manage dynamic websites with WordPress. Flexible, customizable, and scalable solutions for blogs, portfolios, and businesses.",
        image: img4,
      },
      {
        name: "Shopify",
        heading: "Curated Delights for Discerning Shoppers",
        desc: "Empower your eCommerce business with premium Shopify solutions. Well-customized, high-performing Shopify stores ensure seamless customer experiences and maximum conversions.",
        image: "https://source.unsplash.com/800x500/?shopify,ecommerce",
      },
      {
        name: "Squarespace",
        heading: "Creative Websites Made Simple",
        desc: "Design elegant and responsive websites effortlessly with Squarespace. Perfect for creatives, businesses, and online stores.",
        image: "https://source.unsplash.com/800x500/?squarespace,design",
      },
      {
        name: "Wix",
        heading: "Easy and Intuitive Website Building",
        desc: "Create beautiful websites with drag-and-drop ease using Wix. Ideal for individuals and small businesses looking to get online fast.",
        image: "https://source.unsplash.com/800x500/?wix,web",
      },
    ],
  },
  seo: {
    title: "SEO",
    tabs: [
      {
        name: "Keyword Research",
        heading: "Target the Right Audience",
        desc: "Identify high-value keywords your customers are already searching for, ensuring maximum visibility and targeted traffic.",
        image: img2,
      },
      {
        name: "On-Page SEO",
        heading: "Optimize Every Page",
        desc: "Structure your content, titles, and meta descriptions to boost rankings and user engagement.",
        image: "https://source.unsplash.com/800x500/?seo,onpage",
      },
      {
        name: "Technical SEO",
        heading: "Build for Search Engines",
        desc: "Improve website speed, mobile-friendliness, and crawlability to enhance search performance.",
        image: "https://source.unsplash.com/800x500/?seo,technical",
      },
      {
        name: "Content Strategy",
        heading: "Content That Ranks",
        desc: "Plan and publish SEO-rich content to drive authority, traffic, and conversions.",
        image: "https://source.unsplash.com/800x500/?seo,content",
      },
    ],
  },
  branding: {
    title: "Branding",
    tabs: [
      {
        name: "Identity",
        heading: "Build a Lasting Brand Identity",
        desc: "We craft cohesive brand systems that define how your audience remembers and trusts you.",
        image: img3,
      },
      {
        name: "Logo",
        heading: "Logos That Stand Out",
        desc: "Memorable, modern, and meaningful logos designed to instantly connect with your audience.",
        image: "https://source.unsplash.com/800x500/?logo,design",
      },
      {
        name: "Messaging",
        heading: "Shape Your Voice",
        desc: "From tagline to tone, we refine how your story resonates with your audience.",
        image: "https://source.unsplash.com/800x500/?brand,messaging",
      },
      {
        name: "Visuals",
        heading: "Define Your Style",
        desc: "Typography, colors, and imagery that set you apart and reinforce recognition.",
        image: "https://source.unsplash.com/800x500/?visual,design",
      },
    ],
  },
  social: {
    title: "Social Media Marketing",
    tabs: [
      {
        name: "Content Creation",
        heading: "Engaging Content that Converts",
        desc: "We design posts, reels, and graphics that attract attention and spark engagement.",
        image: img1,
      },
      {
        name: "Paid Ads",
        heading: "Maximize Your ROI",
        desc: "Run targeted ad campaigns on Facebook, Instagram, and LinkedIn to reach the right audience.",
        image: "https://source.unsplash.com/800x500/?ads,campaign",
      },
      {
        name: "Community Growth",
        heading: "Grow Loyal Communities",
        desc: "Authentic engagement strategies to build strong and lasting relationships with followers.",
        image: "https://source.unsplash.com/800x500/?community,growth",
      },
      {
        name: "Analytics",
        heading: "Data-Driven Strategies",
        desc: "Track, analyze, and refine campaigns with actionable insights.",
        image: "https://source.unsplash.com/800x500/?analytics,social",
      },
    ],
  },
};

export default function ServicesPage() {
  // store tab state for each service separately
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
    backgroundSize: "cover",       // ✅ fill whole section
    backgroundPosition: "center",  // ✅ keep centered
    // backgroundRepeat: "no-repeat", // ✅ no tiling
  }}
  className="w-full text-white scroll-m-6 " id="services"
>


  
  <div className="relative">
    {/* 🔥 Title/Intro */}
    <div className="text-center pt-14 ">
      <div className="text-center flex justify-center items-center  ">

        <h1 className="border-1 border-[#C6FD07] font-semibold item-center text-center text-[#C6FD07] w-35 rounded-2xl mb-4">Services</h1>
        </div>
      <h2 className="text-2xl px-6 sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
        Helping Small Businesses Go Big Online
      </h2>
      <p className="mt-1 text-base sm:text-lg md:text-xl opacity-70 font-outfit text-[#c2c2c2] max-w-2xl mx-auto leading-tight font-extralight">
        We’re your creative partner in building an online presence that
        doesn’t just look good it grows your business.
      </p>
    </div>

    {/* 🔥 Services Sections */}
    <div className=" px-6 md:px-20">
      {Object.entries(servicesData).map(([key, service]) => {
        const activeContent = service.tabs[activeTabs[key]];
        return (
          <section
            key={key}
            className="scroll-mt-55 relative pt-10 text-white"
          >
            <div className="grid md:grid-cols-2 items-center bg-[#00303C] border border-[#C6FD07] rounded-2xl p-3 ">
              {/* Left Side */}
              <div className="px-6">
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
                  <h3 className="text-xl md:text-2xl font-semibold md:mb-2 mb-3 leading-5  ">
                    {activeContent.heading}
                  </h3>
                  <p className="text-gray-200 text-base  leading-tight md:mb-0 mb-4">
                    {activeContent.desc}
                  </p>
                </motion.div>
              </div>

              {/* Right Side */}
              <motion.div
                key={activeContent.image}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={activeContent.image}
                  alt={activeContent.name}
                  className="w-full h-[300px] object-cover"
                />
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>

    {/* 🔥 Button Section */}
    <div className="p-8 flex justify-center items-center">
      <button className="border border-[#00303C] bg-[#C6FD07] px-5 py-2 rounded-full font-semibold flex flex-row justify-center items-center gap-3 shadow-lg text-[#00303C] hover:scale-[1.02] transition">
        <img className="h-5" src={img5} alt="" />
        Book a Free Discovery Call
      </button>
    </div>
  </div>
</section>

  );
}
