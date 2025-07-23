"use client";
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import MapSection from './components/MapSection'
// import PartnerLogos from './components/PartnerLogos'
// import NewsletterSection from './components/NewsletterSection'
import FloatingButton from '@/components/ui/floatingButton'

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Contact Us Section */}
      <Fade triggerOnce>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
              Contact Us
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Contact</span> <span className="text-primary">Information</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feel free to contact us any time. We will get back to you as soon as we can!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Slide direction="left" triggerOnce>
              <ContactForm />
            </Slide>
            <Slide direction="right" triggerOnce>
              <ContactInfo />
            </Slide>
          </div>
        </section>
      </Fade>

      {/* Map Section */}
      <Zoom triggerOnce>
        <MapSection />
      </Zoom>

      {/* Partner Logos */}
      {/* <Slide direction="up" triggerOnce>
        <PartnerLogos />
      </Slide> */}

      {/* Newsletter Section */}
      <Fade direction="up" triggerOnce>
        {/* <NewsletterSection /> */}
      </Fade>

      {/* Floating Scroll to Top Button */}
      <FloatingButton />
    </div>
  )
} 