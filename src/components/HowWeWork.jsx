import SectionHeading from "./SectionHeading";
import { Search, FileText, Brush, TrendingUp } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      text: "We learn about your business, goals, and audience.",
    },
    {
      icon: FileText,
      title: "Plan",
      text: "We craft a digital strategy tailored to your needs.",
    },
    {
      icon: Brush,
      title: "Create",
      text: "Our team designs, builds, and launches your campaigns.",
    },
    {
      icon: TrendingUp,
      title: "Grow",
      text: "We track, optimize, and scale what works.",
    },
  ];

  return (
    <section id="howwework" className="px-6 md:px-20 py-16 bg-white">
      <SectionHeading
        title="A Simple Process for Big Results"
        subtitle="We keep things clear, transparent, and focused on your success."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative bg-[#F9F9F9] rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <step.icon className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">
                {i + 1}.
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-2">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
