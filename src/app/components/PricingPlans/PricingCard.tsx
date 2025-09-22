"use client";
import Link from "next/link";

interface PricingCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  highlight?: string;
  price: string;
  period: string;
  description: string;
  subText?: string;
  badge?: string;
  features: string[];
  buttonText: string;
  
}

export default function PricingCard({
  icon: Icon,
  title,
  highlight,
  price,
  period,
  description,
  subText,
  badge,
  features,
  buttonText,
  
}: PricingCardProps) {
  return (
    <div className="flex flex-col border rounded-xl shadow-lg hover:shadow-lg/30 hover:border-blue-500 transition p-6 text-center">
      <div className="mb-auto">
        {/* Badge */}
        <div className="text-right">
          <span className="text-right mb-2 px-3 py-1 text-xs font-semibold text-blue-600 rounded-full">
          {badge}
        </span>
        </div>
        

        {/* Icon */}
        <Icon className="mt-auto w-12 h-12 mx-auto text-blue-600 mb-4" />

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-700">{title}<span className="text-blue-700 font-medium">{highlight}</span></h3>
        <p className="text-gray-500 mb-4">{description}</p>

        {/* Price */}
        <div className="text-3xl font-bold text-gray-800">
          {price}
          <span className="text-base font-medium text-gray-500">{period}</span>
        </div>
        <p className="text-sm text-gray-500">{subText}</p>

        {/* Features */}
        <ul className="mt-6 space-y-2 text-gray-600 text-left">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {/* Button */}
      <Link href="#ContactUs"
        className= "mt-6 px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold transition">
        {buttonText}
      </Link>
    </div>
  );
}
