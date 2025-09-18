import React from "react";

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  link: string;
  btnText: string;
}

const TabCard: React.FC<CardProps> = ({ icon: Icon, title, desc, link, btnText }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-t-6 border-blue-500 hover:border-indigo-500 hover:shadow-lg/15 transition">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-blue-600 shrink-0" />
      <h3 className="font-bold text-blue-600">{title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{desc}</p>
    <a href={link} className="text-blue-600 text-sm font-semibold hover:underline">
      {btnText} →
    </a>
  </div>
);

interface PSTabCardsProps {
  cards: CardProps[];
}

export default function PSTabCards({ cards }: PSTabCardsProps) {
  return (
    <div className="p-8 rounded-xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <TabCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}