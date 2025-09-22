import React from "react";
import FAQList from "./FAQList";
import FAQIllustration from "./FAQIllustration";

export default function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="section-container mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="customTitle mb-16">
          Browse through these FAQs to find answers to commonly asked questions.
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Illustration */}
          <FAQIllustration />
          {/* Right FAQ List */}
          <FAQList />
        </div>
      </div>
    </section>
  );
}
