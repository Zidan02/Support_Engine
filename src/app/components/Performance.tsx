"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Performance() {
  const performanceStats = [
    {
      value: "$10.5 B",
      label: "Market value in 2023",
    },
    {
      value: "$22.1 B",
      label: "Projected to reach by 2028",
    },
    {
      value: "15.9%",
      label: "Compound Annual Growth Rate",
    },

  ];

  const StatCard = ({ value, label, className }: { value: string; label: string; className?: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-white rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-300 shadow-sm hover:shadow-lg ${className}`}
    >
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="mt-2 text-sm font-medium">{label}</p>
    </motion.div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Illustration */}
        <div className="flex justify-center">
          <Image
            src="/HR-attrition-analytics.png"
            alt="SupportEngine Case Study"
            width={600}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Right Side Content with Tiles */}
        <div className="space-y-6">
          <h2 className="customTitle !text-left !md:text-left">
            Performance and impact by the numbers
          </h2>
          
          <div className="grid grid-cols-2 gap-4 text-gray-500">
            {performanceStats.map((stat, idx) => (
              <StatCard key={idx} value={stat.value} label={stat.label} className={idx === 2 ? 'col-span-2' : ''} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
