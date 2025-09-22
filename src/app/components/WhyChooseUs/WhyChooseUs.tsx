import { features } from "./whyChooseUsData";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <section id="WhyChooseUs" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="customTitle mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <WhyChooseUsCard
              key={idx}
              icon={<feature.icon className="w-8 h-8 text-blue-600" />} // 👈 rendered here
              title={feature.title}
              points={feature.points}
              direction={idx % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
