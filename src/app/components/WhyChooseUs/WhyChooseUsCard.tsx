import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export default function WhyChooseUsCard({ icon: Icon, title, points }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition transform hover:scale-105 hover:shadow-lg">
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
        <h3 className="text-lg font-bold text-blue-500 uppercase">{title}</h3>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-2 text-gray-700">
        {points.map((point, i) => (
          <li key={i} className="leading-relaxed">
            • {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
