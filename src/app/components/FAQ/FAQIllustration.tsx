// src/app/components/FAQ/FAQIllustration.tsx

"use client";

import React from "react";
import Image from "next/image";

export default function FAQIllustration() {
  return (
    <div className="flex justify-center items-center h-full">
      <Image
        src="/faq.png"   
        alt="FAQ Illustration"
        width={500}
        height={800}
        className="rounded-lg"
      />
    </div>
  );
}
