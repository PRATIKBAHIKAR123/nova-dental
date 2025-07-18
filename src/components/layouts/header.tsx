"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "@/app/booking/bookingScreen";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Close services submenu when toggling main menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Services submenu items
  const servicesItems = [
    { name: "General Dentistry", href: "/services/general" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Orthodontics", href: "/services/orthodontics" },
    { name: "Oral Surgery", href: "/services/oral-surgery" },
    { name: "Teeth Whitening", href: "/services/whitening" },
    { name: "Dental Implants", href: "/services/implants" },
  ];

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
            src="/Images/Maple MHA website header.png"
            alt="Nova Dental Logo"
            width={isScrolled ? 140 : 180}
            height={isScrolled ? 60 : 80}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/providers" className="hover:text-primary transition">
            Providers
          </Link>
          
          {/* Services with Desktop Dropdown */}
          <div className="relative group">
            <Link href="/services" className="hover:text-primary transition flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {/* Desktop Dropdown */}
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
              <div className="py-2">
                {servicesItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link href="/reviews" className="hover:text-primary transition">
            Reviews
          </Link>
          <Link href="/locations" className="hover:text-primary transition">
            Locations
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="border border-primary text-primary rounded-lg px-4 py-1 hover:bg-blue-50 text-sm font-medium transition">
            Call Us
          </button>
          <button onClick={()=>setIsBookingOpen(true)}  className="bg-primary text-white rounded-lg px-4 py-1 hover:bg-blue-700 text-sm font-medium transition">
            Book Online
          </button>
        </div>

        {/* Mobile Buttons and Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Action Buttons */}
          <button className="border border-primary text-primary rounded-lg px-3 py-1 hover:bg-blue-50 text-xs font-medium transition">
            Call Us
          </button>
          <button onClick={()=>setIsBookingOpen(true)} className="bg-primary text-white rounded-lg px-3 py-1 hover:bg-blue-700 text-xs font-medium transition">
            Book Online
          </button>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Image
              src="/Images/Maple MHA website header.png"
              alt="Nova Dental Logo"
              width={100}
              height={40}
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto">
            <div className="py-2">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/providers"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Providers
              </Link>

              {/* Services with Mobile Submenu */}
              <div className="border-b">
                <button
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Submenu */}
                {isServicesOpen && (
                  <div className="bg-gray-50">
                    <Link
                      href="/services"
                      className="block px-8 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition"
                      onClick={closeMobileMenu}
                    >
                      All Services
                    </Link>
                    {servicesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/reviews"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
              <Link
                href="/locations"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Locations
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
    </header>
  );
}