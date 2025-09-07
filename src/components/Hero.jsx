import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 px-6 md:px-20 bg-[#FFFFFF] text-[#00303C]"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Turning Clicks into Customers 🚀
          </h1>
          <p className="mt-6 text-gray-600 max-w-xl">
            Digital solutions built for small businesses—because you deserve big
            results without the big-agency price tag.
          </p>
          <div className="mt-8 flex gap-4 items-center">
            <button className="bg-[#C6FF00] px-6 py-3 rounded-full font-semibold shadow-lg text-[#00303C] hover:scale-[1.02] transition">
              Book a Call
            </button>
          </div>
        </motion.div>

        {/* Right Content (Images) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-4 justify-center md:justify-end">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-48 h-72 bg-[#F5F5F5] rounded-2xl shadow-lg p-2 transform -rotate-6"
            >
              <img
                src="/src/assets/mock1.jpg"
                alt="mock1"
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="w-48 h-72 bg-[#F5F5F5] rounded-2xl shadow-lg p-2 transform rotate-3"
            >
              <img
                src="/src/assets/mock2.jpg"
                alt="mock2"
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="hidden md:block w-48 h-72 bg-[#F5F5F5] rounded-2xl shadow-lg p-2 transform rotate-6"
            >
              <img
                src="/src/assets/mock3.jpg"
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
