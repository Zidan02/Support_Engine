'use client';
import { FC } from "react";
import Link from "next/link";
import SplitText from "./UI/SplitText";

const Hero: FC = () => {
  return (
    // <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
    <section className="bg-white text-slate-600 py-20 px-6 text-center">
      
      <SplitText
        text="Empower high-performance teams with AI-driven service management"
        className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        
      />
      <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Businesses are launching and managing digital services faster than ever.
        Speed and efficiency matter.
      </p>

    </section>
  );
};

export default Hero;
