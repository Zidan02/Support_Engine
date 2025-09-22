"use client";

import React from "react";
import { FAQItem as FAQItemType } from "./faqData";

interface FAQItemProps {
  faq: FAQItemType;
  activeId: string | null;
  toggleFAQ: (id: string) => void;
}

export default function FAQItem({ faq, activeId, toggleFAQ }: FAQItemProps) {
  return (
    <div className="bg-blue-50/50 rounded-xl shadow-sm overflow-hidden border border-blue-100">
      {/* Question */}
      <button
        onClick={() => toggleFAQ(faq.id)}
        className="w-full flex justify-between items-center py-4 px-6 text-left transition-colors duration-200 hover:bg-blue-100/50 focus:outline-none"
      >
        <p className="text-base font-semibold text-gray-800">{faq.question}</p>
        <span className="text-xl font-bold text-gray-600 transition-transform duration-300">
          {activeId === faq.id ? "-" : "+"}
        </span>
      </button>

      {/* Answer */}
      <div
        className={`px-6 transition-all duration-300 ease-in-out ${
          activeId === faq.id ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
      </div>
    </div>
  );
}
