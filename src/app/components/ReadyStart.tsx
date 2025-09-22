"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ReadyStart() {
  return (
    <section className="bg-slate-100 py-10 px-4 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600">Start your project</p>
            <Link href="#ContactUs" className="inline-flex items-center gap-2 mt-4 px-3 py-2 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
              Get Started
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Right Column: Sticky Image */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                rotate: 0.5,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="rounded-xl shadow-2xl"
            >
              <Image
                src="/Dashboard.webp"
                alt="SupportEngine Dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
