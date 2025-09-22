"use client";

import React, { useState } from "react";
import { faqs } from "./faqData";
import FAQItem from "./FAQItem";

export default function FAQList() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} activeId={activeId} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
}
