"use client";
import React from "react";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const services = [
  {
    icon: "/Images/implant.png",
    price: "$65",
    title: "Dental Implant",
  },
  {
    icon: "/Images/teeth-whitening.png",
    price: "$135",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/braces.png.png",
    price: "$230",
    title: "Dental Crown",
  },
];

const features = [
  {
    icon: "/Images/doctor_9439268.png",
    title: "Expert Dentist",
    desc: "Our qualified dental professionals provide exceptional care with years of experience and advanced training.",
  },
  {
    icon: "/Images/dental-care.png",
    title: "24/7 Advance Care",
    desc: "Round-the-clock emergency dental services ensuring you receive immediate care when you need it most.",
  },
  {
    icon: "/Images/teeth-whitening.png",
    title: "Available Products",
    desc: "Comprehensive range of dental products and treatments to meet all your oral health needs.",
  },
];

const team = [
  {
    img: "/Images/dentist1.jpg",
    name: "Dr. David Costa",
    role: "General Dentist",
    time: "09 am - 12 pm",
    rating: 5.0,
  },
  {
    img: "/Images/dentist2.jpg",
    name: "Dr. Julia Smith",
    role: "Orthodontist",
    time: "10 am - 04 pm",
    rating: 4.9,
  },
  {
    img: "/Images/dentist3.jpg",
    name: "Dr. Thomas Albart",
    role: "Dental Surgeon",
    time: "09 am - 12 pm",
    rating: 4.8,
  },
  {
    img: "/Images/dentist4.jpg",
    name: "Dr. Rebeca Smith",
    role: "Cosmetic Dentist",
    time: "12 pm - 05 pm",
    rating: 5.0,
  },
];

const testimonials = [
  {
    img: "/Images/dental1.jpg",
    name: "Albert Rusho",
    service: "Root Canals",
    text: "The dental care I received was exceptional. The team maintained my healthy teeth with professional expertise, ensuring my comfort throughout the entire procedure. I couldn't be more satisfied with the results.",
  },
];

const partners = [
  {
    name: "PERELEX",
    icon: "/Images/dental-care.png",
  },
  {
    name: "DENTONIX",
    icon: "/Images/teeth-whitening.png",
  },
  {
    name: "SENOFEX",
    icon: "/Images/implant.png",
  },
  {
    name: "MEDILEX",
    icon: "/Images/braces.png.png",
  },
  {
    name: "ZELOMEX",
    icon: "/Images/tooth-insurance.png.png",
  },
];

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <Fade triggerOnce>
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="flex-1 space-y-6 md:pr-8">
            <span className="uppercase tracking-widest text-sm text-secondary font-semibold">Science 2005</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 leading-tight">
              Keep your <span className="text-secondary">Teeth</span> Clean &amp; Shine
            </h1>
            <p className="text-base text-muted-foreground max-w-xl">
              Dental care is the maintenance of healthy teeth and the practice of keeping the mouth and teeth clean. We pursue excellence rationally and encounter solutions that are extremely beneficial for your oral health.
            </p>
            <p className="text-secondary font-medium">
              You need to brush your teeth everyday for healthy teeth and smile.
            </p>
            <div className="flex gap-6 mt-4 items-center">
              <Button asChild className="bg-secondary text-white hover:bg-secondary/80">
                <a href="/booking">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  Book now
                </a>
              </Button>
              <a href="#video-tour" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-4 h-4 border-2 border-muted-foreground rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-l-muted-foreground border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
                </div>
                Video tour
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img 
              src="/Images/banners/doctor-presenting-something-isolated-white-background.jpg" 
              alt="Dentists with patient" 
              className="rounded-xl shadow-lg w-full max-w-md object-cover" 
            />
          </div>
        </section>
      </Fade>

      {/* Services/Pricing Section */}
      <Slide direction="up" triggerOnce>
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                <div className="text-lg font-semibold text-muted-foreground">{service.title}</div>
              </div>
            ))}
          </div>
        </section>
      </Slide>

      {/* Why Choose Us Section */}
      <Slide direction="right" triggerOnce>
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
            <img 
              src="/Images/banners/young-man-with-patient-bib-dental-chair-dentist-who-sits-him-he-looks-his-teeth-using-dental-microscope-holds-dental-bur-mirror.jpg" 
              alt="Dental procedure" 
              className="rounded-xl shadow-lg w-full max-w-md object-cover" 
            />
          </div>
          <div className="flex-1 md:pl-12">
            <span className="uppercase tracking-widest text-sm text-secondary font-semibold">Why we best</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary mt-2">People Choose Us because...</h2>
            <p className="text-base text-muted-foreground mb-6">
              Dental care is the maintenance of healthy teeth and the practice of keeping the teeth clean. We provide comprehensive solutions for optimal oral health.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Slide>

      {/* Team Section */}
      <Zoom triggerOnce>
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <span className="uppercase tracking-widest text-sm text-secondary font-semibold block text-center mb-2">Dentist</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary">Meet our Dentist qualified staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-secondary" />
                <h4 className="text-lg font-bold text-primary mb-1">{member.name}</h4>
                <span className="text-sm text-muted-foreground mb-2">{member.role}</span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <span className="text-secondary">♥</span>
                  <span className="font-semibold">{member.rating.toFixed(1)}</span>
                  <span>|</span>
                  <span>🕐</span>
                  <span>{member.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Zoom>

      {/* Call to Action Section */}
      <Fade direction="up" triggerOnce>
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Button asChild className="bg-secondary text-white h-16 text-lg font-semibold hover:bg-secondary/80">
              <a href="tel:+12345698741" className="flex items-center justify-between">
                <div>
                  <div>Call us for Booking</div>
                  <div className="text-2xl font-bold">+12345 698 741</div>
                </div>
                <div className="text-3xl">🦷</div>
              </a>
            </Button>
            <Button asChild className="bg-primary text-white h-16 text-lg font-semibold hover:bg-primary/80">
              <a href="/booking" className="flex items-center justify-between">
                <div>
                  <div>Book Now</div>
                  <div className="text-sm opacity-90">Click here for appointment</div>
                </div>
                <div className="text-3xl">👨‍⚕️</div>
              </a>
            </Button>
          </div>
        </section>
      </Fade>

      {/* Testimonials Section */}
      <Fade direction="up" triggerOnce>
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <span className="uppercase tracking-widest text-sm text-secondary font-semibold block mb-2">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-primary">Happy Patients with Satisfaction words</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex-1 max-w-2xl">
              <div className="bg-card rounded-lg p-8 shadow-lg relative">
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  &ldquo;{testimonials[0].text}&rdquo;
                </p>
                <div className="text-sm font-semibold text-primary">
                  {testimonials[0].name} ({testimonials[0].service})
                </div>
                <div className="absolute right-6 top-6 text-6xl text-secondary opacity-20">&ldquo;</div>
              </div>
              <div className="text-right mt-4">
                <span className="text-muted-foreground cursor-pointer hover:text-primary">Next →</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-32 h-32 border-2 border-dashed border-secondary rounded-full flex items-center justify-center relative">
                  <img src="/Images/dental1.jpg" alt="Patient" className="w-16 h-16 rounded-full object-cover" />
                  <img src="/Images/dental2.jpg" alt="Patient" className="w-16 h-16 rounded-full object-cover absolute -top-4 -right-4" />
                  <img src="/Images/dental3.jpg" alt="Patient" className="w-16 h-16 rounded-full object-cover absolute -bottom-4 -left-4" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-secondary opacity-60">&ldquo;</div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Partners Section */}
      <Slide direction="up" triggerOnce>
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img src={partner.icon} alt={partner.name} className="h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-semibold text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </section>
      </Slide>

      {/* Newsletter Section */}
      <Bounce triggerOnce>
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="bg-primary rounded-xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <span className="uppercase tracking-widest text-sm text-primary-foreground/80 font-semibold">Newsletter</span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Subscribe our Newsletter</h3>
                <p className="text-primary-foreground/80">Stay updated with the latest dental care tips and exclusive offers.</p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Input 
                  type="email" 
                  placeholder="Enter Your email address" 
                  className="bg-white text-primary placeholder:text-muted-foreground border-0"
                  required 
                />
                <Button type="submit" className="bg-secondary text-white hover:bg-secondary/80">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Bounce>
    </div>
  );
} 