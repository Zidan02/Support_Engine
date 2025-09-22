"use client";

import React from "react";

export default function ReadyNewProject() {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="Section-container text-center rounded-xl py-5 bg-transparent">
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">
          Are You Ready To Start
        </h3>
        <h2
          className="text-5xl md:text-6xl font-extrabold text-transparent mt-5"
          style={{ WebkitTextStroke: "1px white" }}>
          New Project With Us?
        </h2>

        <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
          Whether you&apos;re aiming to streamline operations, improve user
          experiences, or implement cutting-edge technologies, SupportEngine is
          your reliable partner for achieving success.
        </p>
        <button className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </section>
  );
}
