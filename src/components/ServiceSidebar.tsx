"use client"


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { services } from "@/app/services/serviceList";
import { Menu, MenuIcon, X } from "lucide-react";

interface Service {
  name: string;
  icon: string;
  link: string;
}

export default function ServiceSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

    useEffect(() => {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
    <>
      {/* Mobile Menu Toggle Button - Only visible on mobile */}
      {!isScrolled?<div className="lg:hidden fixed bottom-2 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="bg-[var(--primary)] text-white p-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-200"
          aria-label="Toggle services menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <span>{isScrolled?<MenuIcon/>:<span>Our Services</span>}</span>}
        </button>
      </div>:null}

      {/* Mobile Backdrop - Only visible when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16"
          onClick={closeMobileMenu}
        />
      )}

      {/* Main Sidebar - Your existing desktop design + mobile responsive */}
      <aside
        className={`
          sidebar-scrollbar bg-white shadow-lg flex flex-col overflow-y-auto
          
          /* Desktop styles (unchanged) */
          lg:sticky lg:top-20 lg:z-20 lg:h-[calc(100vh-80px)] lg:w-72
          
          /* Mobile styles (slide-out) */
          lg:translate-x-0 fixed top-16 left-0 z-40 h-[calc(100vh-80px)] w-80 max-w-[85vw]
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{ minWidth: 260, maxWidth: 320 }}
      >
        {/* Header - Your existing design with mobile close button */}
        <div className="p-6 border-b bg-[var(--primary)] sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-center font-bold text-white flex-1 lg:text-center">
              Our Services
            </h2>
            {/* Mobile close button - only visible on mobile */}
            <button
              onClick={closeMobileMenu}
              className="lg:hidden text-white hover:text-gray-200 transition-colors ml-2"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation - Your existing design unchanged */}
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-1">
            {services.map((service: Service) => (
              <li key={service.name}>
                <Link
                  href={service.link}
                  onClick={closeMobileMenu} // Close mobile menu when service is selected
                  className="flex items-center gap-2 rounded-xl py-2 px-4 border border-gray-200 shadow-sm bg-white transition-all duration-200 group hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] focus:bg-[var(--primary)] focus:text-white focus:border-[var(--primary)] w-full overflow-hidden"
                  style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.05)' }}
                >
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-4 h-4 ml-2 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                  <span className="font-medium text-base truncate group-hover:text-white transition-colors duration-200">
                    {service.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Optional: Mobile Service Tabs at Bottom - Alternative approach */}
      {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-30 overflow-x-scroll">
        <div className="flex px-4 py-2 gap-2 min-w-max">
          {services.map((service: Service) => ( 
            <Link
              key={service.name}
              href={service.link}
              className="flex items-center gap-1 border border-primary p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[80px]"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-5 h-5 object-contain"
              />
              <span className="text-xs font-medium text-center leading-tight text-gray-700">
                {service.name} 
              </span>
            </Link>
          ))}
        </div>
      </div> */}
    </>
  );
}