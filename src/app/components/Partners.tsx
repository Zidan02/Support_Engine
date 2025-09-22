// src/app/components/Partners/Partners.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Partners() {
  return (
    <section id="Partners" className="py-20 bg-white">
      <div className="section-container space-y-16">

        <h2 className="customTitle">
              Partner with SupportEngine for IT Excellence
            </h2>
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            
            <p className="text-gray-700 leading-relaxed">
              SupportEngine collaborates with top-tier distributors, VARs, MSPs,
              SIs, consultants, and technology partners to deliver
              cutting-edge IT solutions. You understand your customers’
              IT priorities and business needs better than anyone, and we work
              alongside your sales and technical teams to unlock new opportunities
              and drive long-term success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a diverse suite of over 60 industry-leading products,
              SupportEngine covers enterprise service management, IT operations,
              unified endpoint management, identity and access management,
              IT security, and IT analytics. Our approach focuses on providing
              specialized, standalone solutions that seamlessly integrate to
              address broader IT challenges effectively.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As we expand our channel network, we are actively seeking partnerships
              with successful resellers and distributors to accelerate our market
              reach. If you&apos;re interested in joining the SupportEngine partner
              program or want to learn more, please fill out the form below.
            </p>

            <Link href="#ContactUs" className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 font-medium transition">
              Become a partner
            </Link>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src="/partner-top.jpg" 
              alt="Partner illustration"
              width={1000}
              height={800}
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
            className="flex justify-center"
          >
            <Image
              src="/partner-bottom.jpg" 
              alt="Partner handshake"
              width={500}
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
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-slate-600">
              Benefits of Becoming a SupportEngine Partner
            </h3>
            <p className="text-gray-800">Partnering with SupportEngine comes with exclusive advantages, including:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Special volume-based discounts</li>
              <li>Dedicated pre-sales and post-sales assistance</li>
              <li>Comprehensive training resources for both sales and technical teams</li>
              <li>Access to sales enablement materials</li>
              <li>Priority technical support for faster issue resolution</li>
              <li>Promotion of your company on our official website</li>
              <li>Exclusive access to the secure SupportEngine partner portal</li>
            </ul>

            <Link href="#ContactUs" className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 font-medium transition">
              Become a partner
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
