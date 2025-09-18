"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { highlights } from "./caseStudyData";
import HighlightCard from "./HighlightCard";

export default function CaseStudy() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/teamwork.webp" // 👈 replace with your illustration
            alt="SupportEngine Case Study"
            width={600}
            height={500}
            className="rounded-lg"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">SupportEngine</h3>
          <p className="text-gray-700 mb-6">
            We needed to adopt a more customer-focused approach to ITSM. SupportEngine 
            enabled us to achieve our goals while optimizing time and reducing costs.
          </p>

          {/* Stats Grid */}
          <div className="space-y-4">
            {highlights.map((item, idx) => (
              <HighlightCard
                key={idx}
                value={item.value}
                text={item.text}
                direction={idx % 2 === 0 ? "left" : "right"} // 👈 same as WhyChooseUs
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
<div className="section-container mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
  {/* Left: Text Content */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-center md:text-left"
  >
    <h3 className="text-xl font-bold text-blue-600 mb-4">
      SupportEngine scales with you
    </h3>
    <p className="text-gray-700 max-w-lg mb-6">
      Whether you’re part of a small team or a big enterprise, we have a plan for you.
      Choose only the features you need.
    </p>

    {/* CTA Button */}
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
    >
      Discover Plans
    </motion.button>
  </motion.div>

  {/* Right: Pricing Image */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex justify-center"
  >
    <Image
      src="/SubscriptionPlanDialog.webp"
      alt="Subscription Plan"
      width={600}
      height={400}
      className="rounded-lg shadow-lg"
    />
  </motion.div>
</div>

    </section>
  );
}
