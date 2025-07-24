"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function FloatingPromo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Show notification after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 6000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

    useEffect(() => {
      const onScroll = () => {
        setIsVisible(true);
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Wait for animation to complete
  };

  const handleClaim = () => {
    // TODO: Handle claim action
    alert("Redirecting to booking page...");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-50 pb-[env(safe-area-inset-bottom)] transition-all duration-300 ease-in-out transform ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 max-w-80 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-primary px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Special Offer</span>
          </div>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors p-1"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
              <img src="/Images/Maple.png" alt="Whitening Icon" className="w-auto h-auto" />
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <div className="text-gray-800 font-bold text-base mb-1">
                $299 Teeth Whitening Special
              </div>
              <div className="text-gray-600 text-sm mb-2">
                Someone just claimed this offer
              </div>
              <div className="text-gray-400 text-xs mb-3">
                10 min ago
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}