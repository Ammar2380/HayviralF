import img from './why.png'
import tick from './tick.png'
import img2 from './whyimg.png'

export default function WhyChooseUs() {
  return (


  
    <section className="bg-[#00303C] text-white py-40 md:py-16 px-6 md:px-67 flex justify-center items-center flex-col " >
   
      <div className="text-center  ">
        <span className="inline-block px-4 py-1 font-outfit border border-[#C6FF00] text-[#C6FF00] rounded-full font-semibold  font-outfit   ">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-6">
          Big-Agency Skills. Small-Business Care.
        </h2>
        <p className="text-gray-300 mt-3">
          We’re not just another digital agency we’re a partner who gets it.
        </p>
      </div>

     <div className='  gap-10 w-80 h-80  min-sm:hidden  '
     style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
</div>
      <div className="space-y-2 h-50 px-11 w-screen bg-[#00303C] min-sm:hidden ">
          <div className="flex items-start gap-3 justify-center ">
            <span className="flex justify-center items-center h-13 "><img src={tick} alt="" /></span>
            <p className='leading-tight'>A creative team that treats your business like our own</p>
          </div>
          <div className="flex items-start gap-3 ">
 <span className=" flex justify-center items-center h-17 "><img src={tick} alt="" className='h-8 w-16' /></span>
            <p  className='leading-tight'  >
              Proven expertise across SEO, development, branding, and marketing
            </p>
          </div>
           <div className="space-y-5">
          <div className="flex items-start gap-3">
            <span className="  flex justify-center items-center h-11.5  "><img src={tick} className='h-9 w-16' alt="" /></span>
            <p className='leading-tight'  >Affordable, customized packages tailored for small businesses</p>
          </div>
          <div className="flex items-start gap-3">
 <span className="  flex justify-center items-center h-11.5 "><img src={tick} className='h-9 w-15' alt="" /></span>
            <p className='leading-tight'  >
              No confusing jargon just clear strategies and real results
            </p>
          </div>
        </div>
        </div>          

        
     
     
      <div className="grid md:grid-cols-3  gap-10 w-230 h-80 items-center max-sm:hidden " style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
       
       
        <div className="space-y-6 ">
          <div className="flex items-start gap-3 justify-center ">
            <span className="flex justify-center items-center h-13 "><img src={tick} alt="" /></span>
            <p>A creative team that treats your business like our own</p>
          </div>
          <div className="flex items-start gap-3 ">
 <span className=" flex justify-center items-center h-17 "><img src={tick} alt="" className='h-8 w-16' /></span>
            <p>
              Proven expertise across SEO, development, branding, and marketing
            </p>
          </div>
        </div>

     
        <div className="space-y-12 relative left-87">
          <div className="flex items-start gap-3">
            <span className="  flex justify-center items-center h-11.5  "><img src={tick} className='h-9 w-16' alt="" /></span>
            <p>Affordable, customized packages tailored for small businesses</p>
          </div>
          <div className="flex items-start gap-3">
 <span className="  flex justify-center items-center h-11.5 "><img src={tick} className='h-9 w-15' alt="" /></span>
            <p>
              No confusing jargon just clear strategies and real results
            </p>
          </div>
        </div>
      
      </div>

    </section>
  );
}
