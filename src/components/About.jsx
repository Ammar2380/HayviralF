import logo from './LogoW.png'
import insta from './insta.png'
import arrow from './Arrow.png'

export default function About() {
  return (
    <section id="about" className="bg-[#00303C] text-white  py-10 h-auto px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2  md:gap-19 items-start  md:p-10">
        
        {/* LEFT */}
        <div className="flex  flex-col gap-10 space-y-4">
          
          {/* About + Arrow */}
          <div className="flex items-start gap-11 h-10">
            <h2 className="  text-7xl md:text-8xl  font-outfit font-extrabold text-[#C6FD07] leading-none">
              About
            </h2>
            <div className="h-16 w-16 md:h-20 font-outfit md:w-20 rounded-full  border-[#C6FD07] flex items-center justify-center mt-4">
              <img src={arrow} alt="Arrow" className="h-13 md:w-21 md:h-21 mb-4" />
            </div>
          </div>

          {/* us | + Founder (inline) */}
          <div className="flex items-center h-20 md:h-30 gap-5 md:gap-12.5">
            {/* us | */}
            <div className="flex items-center gap-5 md:gap-9 text-center  ">
              <span className="text-7xl md:text-8xl font-outfit font-extrabold text-[#C6FD07] leading-none  h-28">us</span>
              <span className="text-7xl font-light text-[#C6FD07] inline-block scale-x-25 md:mb-0 mb-8">|</span>

            </div>

            {/* Founder Info inline */}
            <div className="flex items-center gap-3 justify-center ">
              <div className="h-10 w-10  md:h-13 md:w-13 rounded-full bg-[#C6FD07] flex items-center justify-center md:mb-0  mb-6 md:mt-2">
                <img src={logo} alt="Founder" className="md:h-16 md:w-16 h-10 object-contain" />
              </div>
              <div className="flex flex-col mb-6 md:mb-0 ">
                <h4 className="font-bold  text-sm md:text-xl ">Ajay Chauhan</h4>
                <p className="flex items-center gap-7 md:gap-9 text-[#ffff] text-xs md:text-sm ">
                  CEO & Founder 
                    <a 
                    href="https://www.instagram.com/ajaychauhan.designer?igsh=emN5bmt4aXVvbDNm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={insta} alt="Instagram" className="h-3 w-3 hover:scale-110 transition-transform" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-11 md:gap-8  relative bottom-10  items-center text-center">
            <div>
              <h3 className="text-2xl md:text-5xl font-bold text-[#C6FD07]">145+</h3>
              <p className="text-xs md:text-sm uppercase tracking-wide">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-5xl font-bold text-[#C6FD07]">76+</h3>
              <p className="text-xs md:text-sm uppercase tracking-wide">Clients</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-5xl font-bold text-[#C6FD07]">3+</h3>
              <p className="text-xs md:text-sm w-38  uppercase tracking-wide">Year Experience</p>
            </div>
          </div>
        </div>

        <span className='h-1 w-80 md:hidden scale-y-25 bg-[#C6FD07] mb-8'></span>
        {/* RIGHT */}
        <div className="  space-y-3 md:space-y-2  w-auto">
          <h2 className="text-3xl   md:text-3xl font-extrabold leading-tight">
           Helping entrepreneurs & their businesses Go Big Online 

          </h2>
          <h3 className="text-5sm md:text-2xl leading-tight font-medium text-gray-200">
            We’re your creative partner in building an online presence that doesn’t just look good it grows you online.
          </h3>
          <p className="text-5xs md:text-base w-auto text-gray-300 leading-5">
           At HayViral, we understand the unique challenges businesses face in today’s digital first world. That’s why we’re committed to providing affordable, customized solutions that make a real difference. From eye catching websites to strategies that drive traffic and sales, our mission is simple: help you compete and win online.
          </p>
        </div>
      </div>
    </section>
  )
}
