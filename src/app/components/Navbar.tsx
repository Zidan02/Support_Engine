import Link from "next/link";
import Image from "next/image";
import { Search, Facebook, Youtube, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/support-engine-logo-final.png"
            alt="SupportEngine Logo"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6">
          <Link href="#why" className="hover:text-indigo-600">Why SupportEngine</Link>
          <Link href="#support" className="hover:text-indigo-600">Support</Link>
          <Link href="#features" className="hover:text-indigo-600">Features</Link>
          <Link href="#industries" className="hover:text-indigo-600">Industries</Link>
          <Link href="#partners" className="hover:text-indigo-600">Partners</Link>
          <Link href="#company" className="hover:text-indigo-600">Company</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          {/* Social Icons */}
          <div className="flex gap-3">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
            </Link>
          </div>

          {/* Get Started Button */}
          <Link
            href="#get-started"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
