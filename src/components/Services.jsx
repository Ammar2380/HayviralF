import React, { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Search, Code2, Share2 } from "lucide-react";
import img from './img.jpg'
const servicesData = {
  branding: {
    title: "Branding",
    icon: PenTool,
    tabs: ["Identity", "Logo", "Messaging", "Visuals"],
    content: [
      {
        title: "Complete Brand Identity",
        desc: "Your brand is more than a logo—it’s how people remember you. We craft consistent brand systems that build trust and recognition.",
        image: "https://source.unsplash.com/800x500/?brand,identity",
      },
      {
        title: "Logo Design",
        desc: "Memorable, modern, and meaningful logos designed to make your business stand out instantly.",
        image: "https://source.unsplash.com/800x500/?logo,design",
      },
      {
        title: "Brand Messaging",
        desc: "From tagline to tone of voice—we shape how your audience hears and feels your story.",
        image: "https://source.unsplash.com/800x500/?marketing,voice",
      },
      {
        title: "Visual Language",
        desc: "Colors, typography, and imagery that define your unique style and spark recognition.",
        image: "https://source.unsplash.com/800x500/?visual,design",
      },
    ],
  },
  seo: {
    title: "Search Engine Optimization (SEO)",
    icon: Search,
    tabs: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
    content: [
      {
        title: "Keyword Research",
        desc: "Identify high-value keywords that your audience is already searching for.",
        image: "https://source.unsplash.com/800x500/?seo,keywords",
      },
      {
        title: "On-Page SEO",
        desc: "Optimize your site structure, titles, and content for maximum visibility.",
        image: "https://source.unsplash.com/800x500/?seo,onpage",
      },
      {
        title: "Technical SEO",
        desc: "Improve website speed, mobile performance, and crawlability to boost rankings.",
        image: "https://source.unsplash.com/800x500/?seo,technical",
      },
      {
        title: "Content Strategy",
        desc: "Plan and publish SEO-rich content that drives traffic and authority.",
        image: "https://source.unsplash.com/800x500/?seo,content",
      },
    ],
  },
  web: {
    title: "Website Design & Development",
    icon: Code2,
    tabs: ["Design", "Development", "E-Commerce", "Optimization"],
    content: [
      {
        title: "Modern UI/UX Design",
        desc: "Clean, creative, and user-friendly website designs that make lasting first impressions.",
        image: "https://source.unsplash.com/800x500/?website,design",
      },
      {
        title: "Custom Development",
        desc: "We build fast, scalable, and mobile-friendly websites tailored to your business.",
        image: "https://source.unsplash.com/800x500/?web,development",
      },
      {
        title: "E-Commerce Stores",
        desc: "From Shopify to custom builds, we create online stores that convert visitors into buyers.",
        image: "https://source.unsplash.com/800x500/?ecommerce,website",
      },
      {
        title: "Performance Optimization",
        desc: "Speed, security, and conversion-focused enhancements that drive results.",
        image: "https://source.unsplash.com/800x500/?web,speed",
      },
    ],
  },
  social: {
    title: "Social Media Marketing",
    icon: Share2,
    tabs: ["Content Creation", "Paid Ads", "Community Growth", "Analytics"],
    content: [
      {
        title: "Content Creation",
        desc: "Engaging graphics, reels, and posts designed to capture attention and spark engagement.",
        image: "https://source.unsplash.com/800x500/?social,content",
      },
      {
        title: "Paid Campaigns",
        desc: "Targeted ad campaigns on Instagram, Facebook, and LinkedIn to maximize reach and ROI.",
        image: "https://source.unsplash.com/800x500/?ads,campaign",
      },
      {
        title: "Community Growth",
        desc: "Grow loyal followers through authentic engagement and brand storytelling.",
        image: "https://source.unsplash.com/800x500/?community,growth",
      },
      {
        title: "Analytics & Insights",
        desc: "Track performance, analyze trends, and refine campaigns with real data.",
        image: "https://source.unsplash.com/800x500/?analytics,social",
      },
    ],
  },
};

export default function Services() {
  const [activeService, setActiveService] = useState("branding");
  const [activeTab, setActiveTab] = useState(0);

  const service = servicesData[activeService];
  const activeContent = service.content[activeTab];

  return (
    <section className="relative px-6 md:px-20 py-24 bg-[#00303C] text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0ce40c]">
          Digital Services That Drive Growth
        </h2>
        <p className="text-[#ffff] max-w-2xl mx-auto mt-4">
          From first impressions to long-term engagement, we cover everything your business needs to succeed online.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Left Side - Services & Tabs */}
        <div>
          <div className="flex flex-col gap-4">
            {Object.keys(servicesData).map((key) => {
              const Icon = servicesData[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveService(key);
                    setActiveTab(0);
                  }}
                  className={`flex items-center gap-4 px-6 py-5 rounded-xl text-left transition-all font-semibold text-lg ${
                    activeService === key
                      ? "bg-[#0ce40c] text-white shadow-lg scale-[1.02]"
                      : "bg-green-100 border border-green-200 text-green-700 hover:bg-green-200"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  {servicesData[key].title}
                </button>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mt-6">
            {service.tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === index
                    ? "bg-[#0ce40c] text-white shadow"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        
        <motion.div
          key={activeContent.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0ce40c] border border-green-200 rounded-2xl overflow-hidden shadow-lg"
        >
         <img
  src={img}  // use the imported image
  alt={activeContent.title}
  className="w-126.5 m-1.5 rounded-xl h-69 object-cover border-b text-[#00303C] border-green-700"
/>

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-[#00303C]">
              {activeContent.title}
            </h3>
            <p className="text-[#00303C] font-bold mb-6">{activeContent.desc}</p>
            <button className="px-6 py-3 bg-green-700 hover:bg-green-600   font-semibold rounded-lg shadow transition-all duration-300">
              Learn More →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
