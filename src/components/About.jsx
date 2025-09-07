import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-20 py-16 bg-[#FFFFFF]">
      <SectionHeading
        title="Helping Small Businesses Go Big Online"
        subtitle="We’re your creative partner in building an online presence that doesn’t just look good—it grows your business."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
        <img
          src="/src/assets/team.jpg"
          alt="HayViral Team"
          className="rounded-xl object-cover w-full h-64 border border-gray-200 shadow-md"
        />
        <div>
          <p className="text-gray-700 mb-4">
            At <span className="font-semibold">HayViral</span>, we know that
            small businesses are the heart of every community—but in today’s
            fast-paced, digital-first world, standing out is tougher than ever.
          </p>
          <p className="text-gray-700 mb-4">
            That’s why we go beyond just creating beautiful designs. We deliver
            <span className="font-semibold"> affordable, customized solutions</span>{" "}
            that turn your ideas into results. Whether it’s a stunning website,
            a powerful social media presence, or strategies that boost traffic
            and sales, our focus is simple: helping you compete—and win—online.
          </p>
          <p className="text-gray-700">
            With a team of passionate creators and digital experts by your side,
            we’ll make sure your brand doesn’t just look good—it grows, scales,
            and thrives in the online world.
          </p>
        </div>
      </div>
    </section>
  );
}
