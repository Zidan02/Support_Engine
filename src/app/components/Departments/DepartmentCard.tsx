"use client";

import { motion } from "framer-motion";

interface DepartmentCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
  direction: "left" | "right";
}

export default function DepartmentCard({ icon, title, desc, link, direction }: DepartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-lg shadow-md p-6 border-t-10 border-blue-500 hover:shadow-lg transition hover:border-indigo-500"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-bold text-blue-600">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{desc}</p>
      <a href={link} className="text-blue-600 text-sm font-semibold hover:underline">
        Get Support →
      </a>
    </motion.div>
  );
}
