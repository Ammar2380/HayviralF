import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const faqs = [
    {
      q: "I’m just starting my business. Can you still help me?",
      a: "Absolutely! Many of our clients come to us at the very beginning of their journey. Whether you need branding, a website, or a full digital strategy, we’ll guide you step by step and create solutions that fit your budget and goals.",
    },
    {
      q: "How much do your services cost?",
      a: "We don’t believe in one-size-fits-all pricing. Every small business is unique, so we create customized packages based on your needs. The good news? We’re affordable and flexible—no big-agency price tags here.",
    },
    {
      q: "How long does it take to see results with SEO or marketing?",
      a: "SEO and digital marketing are long-term investments. While you may see some improvements within the first 2–3 months, sustainable growth typically happens over 6–12 months. That said, we use smart strategies to get you results as quickly as possible.",
    },
    {
      q: "Will I be involved in the process?",
      a: "Definitely. We believe in collaboration. You’ll always have a say in the creative direction, and we’ll keep you updated with clear reports and regular check-ins so you know exactly what’s happening.",
    },
    {
      q: "What makes HayViral different from other agencies?",
      a: "We specialize in helping small businesses—which means we understand your challenges, budget concerns, and goals. We cut the jargon, keep things simple, and focus on strategies that actually drive growth without unnecessary fluff.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="px-6 md:px-20 py-16 bg-[#F9F9F9]">
      <SectionHeading
        title="Got Questions? We’ve Got Answers."
        subtitle="Here are some of the most common things small businesses ask us before getting started."
      />

      <div className="mt-8 space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="font-semibold text-gray-800">{f.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {f.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
