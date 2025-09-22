"use client";

import React from "react";

interface AboutTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  tabs: { id: string; title: string }[];
}

const AboutTabs: React.FC<AboutTabsProps> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex flex-col gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-lg text-sm font-medium transition ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default AboutTabs;
