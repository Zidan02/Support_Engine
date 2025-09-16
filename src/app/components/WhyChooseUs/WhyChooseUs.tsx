import { features } from "../WhyChooseUs/whyChooseUsData";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-12">
          Why Choose Us?
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <WhyChooseUsCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              points={feature.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
