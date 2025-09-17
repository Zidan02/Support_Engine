// import { LucideIcon } from "lucide-react";

// interface CardProps {
//   icon: LucideIcon;
//   title: string;
//   points: string[];
// }

// export default function WhyChooseUsCard({ icon: Icon, title, points }: CardProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-md/20 p-6 transition transform hover:scale-105 hover:shadow-lg">
//       {/* Icon + Title */}
//       <div className="flex items-center gap-3 mb-4">
//         <Icon className="w-8 h-8 text-blue-600" />
//         <h3 className="text-lg font-bold text-blue-500 uppercase">{title}</h3>
//       </div>

//       {/* Bullet Points */}
//       <ul className="space-y-2 text-gray-700">
//         {points.map((point, i) => (
//           <li key={i} className="leading-relaxed">
//             • {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";

interface CardProps {
  icon: React.ReactNode;   // 👈 instead of LucideIcon
  title: string;
  points: string[];
  direction: "left" | "right";
}

export default function WhyChooseUsCard({ icon, title, points, direction }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-md p-6 transition transform hover:scale-105 hover:shadow-lg"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        {icon} {/* 👈 already rendered */}
        <h3 className="text-lg font-bold text-blue-600 uppercase">{title}</h3>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-2 text-gray-700">
        {points.map((point, i) => (
          <li key={i} className="leading-relaxed">
            • {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
