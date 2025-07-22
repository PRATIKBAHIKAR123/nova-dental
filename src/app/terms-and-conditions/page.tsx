"use client";
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import FloatingButton from "@/components/ui/floatingButton";

const termsSections = [
  {
    title: "Acceptance of Terms",
    icon: "/Images/dental-care.png",
    content: `By accessing and using Nova Dental's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
  },
  {
    title: "Use License",
    icon: "/Images/teeth-whitening.png",
    content: `Permission is granted to temporarily download one copy of the materials (information or software) on Nova Dental's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.`,
  },
  {
    title: "Medical Disclaimer",
    icon: "/Images/implant.png",
    content: `The information provided on this website is for general informational purposes only and should not be considered as medical advice. Always consult with a qualified dental professional for proper diagnosis and treatment. Nova Dental is not responsible for any decisions made based on the information provided on this website.`,
  },
  {
    title: "Privacy Policy",
    icon: "/Images/braces.png.png",
    content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you agree to the collection and use of information in accordance with our Privacy Policy.`,
  },
  {
    title: "Appointment Cancellation",
    icon: "/Images/tooth-insurance.png.png",
    content: `We require 24 hours notice for appointment cancellations. Late cancellations or no-shows may result in a cancellation fee. We understand emergencies happen and will work with you to reschedule when possible.`,
  },
  {
    title: "Payment Terms",
    icon: "/Images/dental-care.png",
    content: `Payment is due at the time of service unless other arrangements have been made. We accept most major insurance plans and offer flexible payment options. All fees and charges are subject to change without notice.`,
  },
];

const importantPoints = [
  "All dental procedures carry inherent risks and benefits",
  "Emergency dental care is available 24/7",
  "We maintain strict confidentiality of patient records",
  "Insurance coverage varies by plan and procedure",
  "We follow all HIPAA guidelines for patient privacy",
  "Treatment plans are customized for each patient",
];

const contactInfo = {
  phone: "973-604-1600",
  email: "info@novadental.com",
  address: "539 Bloomfield Avenue, Suite 3, Newark, NJ 07107",
  hours: "Monday - Friday: 9:00 AM - 7:00 PM, Saturday: 9:00 AM - 3:00 PM",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Fade triggerOnce>
        <section className="bg-primary text-white py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="uppercase tracking-widest text-xs sm:text-sm text-secondary font-semibold mb-2 block">
              Legal Information
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
              Terms & <span className="text-secondary">Conditions</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 max-w-2xl mx-auto px-4 leading-relaxed">
              Please read these terms and conditions carefully before using our services. 
              Your continued use of our website and services constitutes acceptance of these terms.
            </p>
          </div>
        </section>
      </Fade>

      {/* Last Updated Section */}
      <Slide direction="up" triggerOnce>
        <section className="py-4 sm:py-6 md:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </section>
      </Slide>

      {/* Terms Sections */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8">
            {termsSections.map((section, index) => (
              <Fade key={index} triggerOnce delay={index * 100}>
                <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-border">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <img 
                        src={section.icon} 
                        alt={section.title} 
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-4">
                        {section.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Important Points */}
      <Zoom triggerOnce>
        <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
                Important <span className="text-secondary">Points</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Key information you should know about our services and policies
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {importantPoints.map((point, index) => (
                <div key={index} className="bg-card rounded-lg p-4 sm:p-6 shadow-lg border border-border">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-muted-foreground">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Zoom>

      {/* Contact Information */}
      <Slide direction="up" triggerOnce>
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-border">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
                  Questions About Our <span className="text-secondary">Terms?</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  If you have any questions about these terms and conditions, please contact us
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white text-lg sm:text-xl">📞</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white text-lg sm:text-xl">✉️</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white text-lg sm:text-xl">📍</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Address</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{contactInfo.address}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white text-lg sm:text-xl">🕐</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Hours</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{contactInfo.hours}</p>
                </div>
              </div>
              
              <div className="text-center mt-6 sm:mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                  <a href="/contact-us">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Slide>

      {/* Disclaimer */}
      <Fade direction="up" triggerOnce>
        <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-border">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Legal <span className="text-secondary">Disclaimer</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                These terms and conditions are subject to change without notice. We reserve the right to modify 
                these terms at any time. Continued use of our services after changes constitutes acceptance of 
                the new terms. For the most current version, please check this page regularly.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>Note:</strong> This document is for informational purposes only and does not constitute 
                legal advice. Please consult with a legal professional for specific legal guidance.
              </p>
            </div>
          </div>
        </section>
      </Fade>

      {/* Floating Scroll to Top Button */}
      <FloatingButton />
    </div>
  );
} 