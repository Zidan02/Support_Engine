"use client";

import React, { useState } from "react";
import AboutTabs from "./AboutTabs";
import { aboutTabs } from "./aboutData";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);
  const currentContent = aboutTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="section-container grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_0.7fr] gap-10 items-start">
        {/* Left Column */}
        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-4">
            Take Charge, No Matter Your Role
          </h3>
          <p className="text-gray-600 mb-6">
            Whether you’re managing daily IT operations or planning long-term IT strategies,{" "}
            <span className="font-semibold">SupportEngine</span> empowers you with the tools to
            stay in control and drive efficiency.
          </p>
        </div>

        {/* Middle Column (tab content) */}
        <div className="order-2 lg:order-none">
          {currentContent && (
            <p className="text-gray-600">{currentContent.description}</p>
          )}
        </div>

        {/* Right Column (tab buttons) */}
        <div className="order-1 lg:order-none">
          <AboutTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={aboutTabs.map(({ id, title }) => ({ id, title }))}
          />
        </div>
      

        {/* ✅ Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {aboutTabs.map((tab) => (
            <div key={tab.id} className="border rounded-lg p-4">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left font-medium ${
                  activeTab === tab.id ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {tab.title}
              </button>
              {activeTab === tab.id && (
                <p className="mt-2 text-gray-600">{tab.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
