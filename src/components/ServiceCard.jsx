// ---------------- Services Section ----------------
const Services = () => (
  <section id="services" className="px-6 md:px-20 py-16">
    {/* Row 1: Graphic Design (2/3) + Web Development (1/3) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Graphic Designing */}
      <div className="col-span-2">
        <SectionHeading title="Graphic Designing" subtitle="Awe-inspiring logo & brand experiences" />
        <div className="mt-4 bg-[#111018] p-6 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-semibold text-white text-lg">Logo Design</h3>
              <p className="text-gray-400 mt-2 leading-relaxed">
                Think exquisite logo designs that inspire—and convert. 
                We craft memorable visual identities that help your brand shine 
                in competitive markets.
              </p>
            </div>
            <div className="hidden md:block">
              <img src="/src/assets/graphic.jpg" alt="graphic design" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Web Development */}
      <div>
        <SectionHeading title="Web Development" subtitle="WordPress, Shopify, Custom" />
        <div className="mt-4 bg-[#111018] p-6 rounded-2xl h-full flex flex-col justify-between">
          <p className="text-gray-300 leading-relaxed">
            Build your dream website with Teqnite’s expert developers. 
            From ecommerce to corporate sites, we deliver powerful, scalable solutions.
          </p>
          <button className="mt-6 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition font-medium text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>

    {/* Row 2: Digital Marketing full width */}
    <div className="mt-12">
      <SectionHeading title="Digital Marketing" subtitle="SEO, Social, PPC, Lead Gen" />
      <div className="bg-[#111018] p-6 rounded-2xl">
        <p className="text-gray-300 leading-relaxed">
          Get found online with Teqnite’s strategic digital marketing. 
          Our data-driven campaigns amplify reach, engage audiences, 
          and deliver measurable growth for your business.
        </p>
      </div>
    </div>
  </section>
);
