import SectionHeading from "./SectionHeading";
import { DollarSign, CheckCircle, Users, Rocket } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Affordable & Tailored",
    desc: "Customized packages built for small businesses—no overpriced fluff, just value.",
  },
  {
    icon: CheckCircle,
    title: "Clear & Simple",
    desc: "No confusing jargon—just straightforward strategies and measurable results.",
  },
  {
    icon: Users,
    title: "Creative Partners",
    desc: "We treat your business like our own, bringing passion and fresh ideas to every project.",
  },
  {
    icon: Rocket,
    title: "Proven Expertise",
    desc: "From SEO to branding, development, and marketing—we’ve got the skills that matter.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="px-6 md:px-20 py-16 bg-[#F9F9F9]">
      <SectionHeading
        title="Big-Agency Skills. Small-Business Care."
        subtitle="We’re not just another digital agency—we’re a partner who gets it."
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition"
          >
            <reason.icon className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                {reason.title}
              </h3>
              <p className="text-gray-600 mt-1">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
