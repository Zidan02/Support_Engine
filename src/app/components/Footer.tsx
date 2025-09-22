"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  X,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-gray-700">
      <div className="section-container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4 text-center md:text-left">
            <Image
              src="/support-engine-logo-final.png"
              alt="SupportEngine Logo"
              width={160}
              height={50}
              priority
              className="mx-auto md:mx-0"
            />
            <p className="text-sm leading-relaxed">
              At Support Engine, we specialize in providing comprehensive
              solutions to optimize business operations and enhance service
              delivery across multiple departments. Our platform streamlines
              workflows, improves collaboration, and simplifies request
              management for IT, HR, Finance, Marketing, Sales, and more. With a
              focus on automation and seamless integration, we help businesses
              deliver exceptional service, boost productivity, and drive success
              in today’s fast-paced world. Partner with Support Engine to unlock
              efficiency and elevate your organization’s performance.
            </p>
          </div>

          {/* Column 2: Get in Touch + Useful Links */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800">Get in Touch</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>info@supportengine.io</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+6591311877</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Singapore</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-gray-800">Useful Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link
                  href="#WhyChooseUs"
                  className="hover:text-blue-600 transition">
                  Why SupportEngine
                </Link>
                <Link
                  href="#Departments"
                  className="hover:text-blue-600 transition">
                  Support
                </Link>
                <Link
                  href="#Features"
                  className="hover:text-blue-600 transition">
                  Features
                </Link>
                <Link
                  href="#IndustryExpertise"
                  className="hover:text-blue-600 transition">
                  Industries
                </Link>
                <Link
                  href="#Partners"
                  className="hover:text-blue-600 transition">
                  Partners
                </Link>
                <Link
                  href="#AboutIntro"
                  className="hover:text-blue-600 transition">
                  Company
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter & Follow Us */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-800">Newsletter Subscription</h4>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Subscribe Now
              </button>
            </div>

            <h4 className="font-bold text-gray-800">Follow Us</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-blue-500 ">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 ">
                <X className="h-6 w-6" />
              </a>
              <a href="#" className="text-red-600 ">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-700 ">
                <Linkedin className="h-6 w-6 " />
              </a>
              <a href="#" className="text-rose-600 ">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-blue-600 text-white py-6">
        <p className="text-center text-sm">
          © 2025 Copyright by Support Engine
        </p>
      </div>
    </footer>
  );
}
