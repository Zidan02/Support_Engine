"use client";

import { useState } from "react";
import { featureTabs } from "./data";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

export default function Features() {
  const [activeTab, setActiveTab] = useState("incident");

  const activeData = featureTabs.find((t) => t.id === activeTab);

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Tabs active={activeTab} setActive={setActiveTab} tabs={featureTabs} />
        {activeData && (
          <TabContent content={activeData.content} image={activeData.image} />
        )}
      </div>
    </section>
  );
}
