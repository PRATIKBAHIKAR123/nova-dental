"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white shadow transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Images/nova-dental-logo.webp"
            alt="Nova Dental Logo"
            width={isScrolled ? 100 : 140}
            height={isScrolled ? 40 : 60}
            className="transition-all duration-300"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/providers">Providers</Link>
          <Link href="/services">Services</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="border border-primary text-primary rounded-lg px-4 py-1 hover:bg-blue-50 text-sm font-medium transition">
            Call Us
          </button>
          <button className="bg-primary text-white rounded-lg px-4 py-1 hover:bg-blue-700 text-sm font-medium transition">
            Book Online
          </button>
        </div>
      </div>
    </header>
  );
}
