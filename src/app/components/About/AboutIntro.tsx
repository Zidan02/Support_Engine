"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section id="AboutIntro" className="py-20 bg-white">
      <div className="section-container space-y-16">
        <h2 className="customTitle">
          About SupportEngine
        </h2>
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-600">
              For Sysadmins and IT Managers
            </h3>
            <p className="text-gray-700 leading-relaxed">
              SupportEngine simplifies IT management with a powerful,
              user-friendly, and easily integrable solution. Our feature-rich
              platform accelerates digital transformation, enables seamless
              remote work, and strengthens enterprise security, giving you
              complete control over your IT operations.
            </p>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center">
            <Image
              src="/aboutus-crtve1.svg"
              alt="Partner illustration"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center">
            <Image
              src="/aboutus-crtve2.svg"
              alt="Partner handshake"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-600">
              For senior-level IT Executives
            </h3>
            <p className="text-gray-700 leading-relaxed">
              SupportEngine ensures the stability of your business by being a
              trusted, long-term partner in IT management. With expertise, we
              remain committed to supporting your IT needs for as long as
              technology drives your success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
