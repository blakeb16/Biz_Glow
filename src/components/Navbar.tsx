"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image component
import { Button } from "@/components/ui/button";
import { ContactFormModal } from "@/components/ContactFormModal";
import { useState } from "react";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Biz Glow AI Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-white">Biz Glow AI</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => setIsModalOpen(true)} // Open modal on click
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Render the ContactFormModal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        defaultService="Customer Service Automation" // Default service
      />
    </>
  );
}
