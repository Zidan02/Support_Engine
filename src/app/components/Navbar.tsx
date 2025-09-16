"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Facebook, Youtube, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/support-engine-logo-final.png"
            alt="SupportEngine Logo"
            width={160}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 ml-3">
          <Link href="#why" className="hover:text-blue-600">Why SupportEngine</Link>
          <Link href="#support" className="hover:text-blue-600">Support</Link>
          <Link href="#features" className="hover:text-blue-600">Features</Link>
          <Link href="#industries" className="hover:text-blue-600">Industries</Link>
          <Link href="#partners" className="hover:text-blue-600">Partners</Link>
          <Link href="#company" className="hover:text-blue-600">Company</Link>
        </div>

        {/* Actions (always visible) */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          {/* Social Icons */}
          <div className="hidden md:flex gap-3">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-800" />
            </Link>
          </div>

          {/* Get Started Button (hidden on small screens) */}
          <Link
            href="#get-started"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <Link href="#why" className="block hover:text-blue-600">Why SupportEngine</Link>
          <Link href="#support" className="block hover:text-blue-600">Support</Link>
          <Link href="#features" className="block hover:text-blue-600">Features</Link>
          <Link href="#industries" className="block hover:text-blue-600">Industries</Link>
          <Link href="#partners" className="block hover:text-blue-600">Partners</Link>
          <Link href="#company" className="block hover:text-blue-600">Company</Link>

          {/* Social Icons on Mobile */}
          <div className="flex gap-4 mt-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-800" />
            </Link>
          </div>

          {/* Get Started Button on Mobile */}
          <Link
            href="#get-started"
            className="mt-4 text-center bg-blue-600 text-white px-3 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
