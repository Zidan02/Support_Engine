"use client";

import React from "react";
import {
  Cpu,
  Stethoscope,
  Factory,
  GraduationCap,
  Building2,
  DollarSign,
} from "lucide-react";

interface IndustryCardProps {
  icon: React.ElementType;
  title: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, title }) => (
  <div className="group relative bg-slate-100 rounded-lg p-6 md:p-8 flex flex-col items-center justify-center h-full w-full transition overflow-hidden hover:shadow-lg">
 
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center">
      <Icon className="w-12 h-12 text-blue-600 group-hover:text-cyan-400 transition-colors duration-300" strokeWidth={2} />
      <h3 className="mt-4 text-gray-700 font-medium text-center group-hover:text-cyan-900 transition-colors duration-300">{title}</h3>
    </div>
  </div>
);

export default function IndustryExpertise() {
  return (
    <section id="IndustryExpertise" className="bg-white py-16">
      <div className="section-container">
        {/* Section title */}
        <h2 className="customTitle mb-2">
          Industry Expertise
        </h2>
        <p className="text-gray-600 text-center mb-10">
          We have experience in developing innovative solutions for a variety of
          domains – find yours!
        </p>

        {/* Gapless Grid */}
        <div className="grid grid-cols-3 gap-2">
          {/* IT Industry - Tall */}
          <div className="col-span-1 row-span-2">
            <IndustryCard icon={Cpu} title="IT Industry" />
          </div>

          {/* Health-Care - Normal */}
          <div className="col-span-1">
            <IndustryCard icon={Stethoscope} title="Health-Care" />
          </div>

          {/* Manufacturing - Normal */}
          <div className="col-span-1">
            <IndustryCard icon={Factory} title="Manufacturing" />
          </div>

          {/* Education - Wide */}
          <div className="col-span-2">
            <IndustryCard icon={GraduationCap} title="Education" />
          </div>

          {/* Real Estate - Normal */}
          <div className="col-span-1">
            <IndustryCard icon={Building2} title="Real Estate" />
          </div>

          {/* Financial - Wide */}
          <div className="col-span-2">
            <IndustryCard icon={DollarSign} title="Financial" />
          </div>
        </div>
      </div>
    </section>
  );
}
