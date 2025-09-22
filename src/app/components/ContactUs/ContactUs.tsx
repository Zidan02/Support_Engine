"use client";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <section id="ContactUs" className="bg-slate-50 py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="section-container">
        {/* Left = 1fr, Right = 2fr */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-white p-8 rounded-xl shadow-lg">
          {/* Left Column */}
          <div className="md:col-span-1">
            <ContactInfo />
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
