"use client";

import { useState } from "react";
import { PSTabs } from "./productSolutionData";
import Tabs from "./PSTabs";
import TabContent from "./PSTabContent";
import PSTabCards from "./PSTabCards";

export default function ProductSolution() {
  const [activeTab, setActiveTab] = useState("itsm");

  const activeData = PSTabs.find((t) => t.id === activeTab);

  const isContentTab = (tab: typeof activeData): tab is { id: string; type: "content"; title: string; content: any[]; image: string; actions: { text: string; style: "primary" | "secondary"; link: string; }[] } => {
    return tab?.type === "content";
  };
  
  const isCardsTab = (tab: typeof activeData): tab is { id: string; type: "cards"; title: string; cards: any[] } => {
    return tab?.type === "cards";
  };

  return (
    <section id="features" className="py-16 bg-white">
      <div className="section-container">
        <Tabs active={activeTab} setActive={setActiveTab} tabs={PSTabs} />
        {activeData && isContentTab(activeData) ? (
          <TabContent
            title={activeData.title}
            content={activeData.content}
            image={activeData.image}
            actions={activeData.actions}
          />
        ) : activeData && isCardsTab(activeData) ? (
          <PSTabCards cards={activeData.cards} />
        ) : null}
      </div>
    </section>
  );
}