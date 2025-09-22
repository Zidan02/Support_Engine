"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TabsProps {
  active: string;
  setActive: (id: string) => void;
  tabs: { id: string; title: string }[];
}

export default function Tabs({ active, setActive, tabs }: TabsProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-3 mb-10 justify-center relative">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          onMouseEnter={() => setHovered(tab.id)}
          onMouseLeave={() => setHovered(null)}
          className={`relative flex-1 py-2 rounded-full bg-slate-200 text-sm transition z-10 ${
            active === tab.id ? "text-blue-600" : "text-gray-600"
          }`}
        >
          {/* Hover Background */}
          <AnimatePresence>
            {hovered === tab.id && (
              <motion.span
                layoutId="pill-hover"
                className="absolute inset-0 bg-blue-100 border border-blue-600 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              />
            )}
          </AnimatePresence>

          {/* Active Background (persistent) */}
          {active === tab.id && (
            <span className="absolute inset-0 bg-blue-100 border border-blue-600 rounded-full z-0" />
          )}

          {/* Text */}
          <span className="relative z-20">{tab.title}</span>
        </button>
      ))}
    </div>
  );
}
