"use client";

import { motion } from "framer-motion";

interface HighlightCardProps {
  value: string;
  text: string;
  direction: "left" | "right";
}

export default function HighlightCard({ value, text, direction }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-50 rounded-md p-4 shadow-sm hover:shadow-md transition"
    >
      <p className="text-2xl font-bold text-blue-600">{value}</p>
      <p className="text-gray-700">{text}</p>
    </motion.div>
  );
}
