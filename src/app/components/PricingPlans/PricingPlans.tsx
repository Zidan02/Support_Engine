// src/app/components/PricingPlans/PricingPlans.tsx

"use client";

import PricingCard from "./PricingCard";
import { pricingPlans } from "./pricingData";

export default function PricingPlans() {
  return (
    <section id="PricingPlans" className="py-20 bg-white">
      <div className="section-container">
        {/* Title */}
        <h2 className="customTitle mb-2">
          Tailored Pricing Plans designed for you
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          All plans include 40+ advanced tools and features to boost your product.  
          Find the best plan to fit your needs.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
