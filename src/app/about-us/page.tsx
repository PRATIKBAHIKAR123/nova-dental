"use client";
import React, { useState } from "react";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Link from "next/link";
import BookingModal from "../booking/bookingScreen";

const services = [
  {
    icon: "/Images/icons/implant.png",
    price: "1199",
    title: "Dental Implant",
  },
  {
    icon: "/Images/icons/tooth-whitening.png",
    price: "299",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/braces.png",
    price: "250",
    title: "Braces",
  },
];

const features = [
  {
    icon: "/Images/icons/emergency denstiry.png",
    title: "Experienced & Friendly Team",
    desc: "Our dentists bring years of clinical expertise and treat every patient like family.",
  },
  {
    icon: "/Images/icons/orthodontics.png",
    title: "Emergency Dental Care",
    desc: "We provide 24/7 advanced care for dental emergencies to ensure you're never left in pain",
  },
  {
    icon: "/Images/icons/dental-floss.png",
    title: "Full Range of Treatments",
    desc: "From cosmetic enhancements to restorative work and pediatric care — everything under one roof.",
  },
];

const team = [
  {
    img: "/Images/dentist1.jpg",
    name: "Bhavneet Singh",
    role: "Family Dentist",
    time: "09 am - 12 pm",
    rating: 5.0,
  },
  {
    img: "/Images/dentist2.jpg",
    name: "Joyce Lau",
    role: "Cosmetic Dentist",
    time: "10 am - 04 pm",
    rating: 4.9,
  },
  {
    img: "/Images/dentist3.jpg",
    name: "Sahiba Atwal-Purewal",
    role: "General Dentist",
    time: "09 am - 12 pm",
    rating: 4.8,
  },
  {
    img: "/Images/dentist2.jpg",
    name: "Egli Hajdarmataj",
    role: "Restorative Dentist",
    time: "12 pm - 05 pm",
    rating: 5.0,
  },
  {
    img: "/Images/dentist3.jpg",
    name: "Jimi Stewart",
    role: "Pediatric Dentist",
    time: "01 pm - 06 pm",
    rating: 4.7,
  },
  {
    img: "/Images/dentist3.jpg",
    name: "Joey Kim",
    role: "Orthodontist",
    time: "11 am - 03 pm",
    rating: 4.9,
  }
];

const testimonials = [
  {
    img: "/Images/dental1.jpg",
    name: "Albert Rusho",
    service: "Root Canals",
    text: "The dental care I received was exceptional. The team maintained my healthy teeth with professional expertise, ensuring my comfort throughout the entire procedure. I couldn't be more satisfied with the results.",
  },
];

export default function AboutUs() {
  const { ref, inView } = useInView();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex-1 space-y-4 sm:space-y-6 lg:pr-8 order-2 lg:order-1 w-full">
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-primary">Science 2005</span>

          <Fade delay={200}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-primary leading-tight">
              About Maple Dental Harrisburg
            </h2>
          </Fade>
          <Fade delay={500}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Whether you need a routine checkup or advanced cosmetic treatment, our expert team offers comprehensive services using the latest dental technology. From preventive care to smile makeovers, we tailor each treatment plan to your unique needs and goals.
            </p>
          </Fade>
          <Fade delay={700}>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              You need to brush your teeth everyday for healthy teeth and smile.
            </p>
          </Fade>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 items-start sm:items-center">
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-primary text-white hover:bg-secondary/80 w-full sm:w-auto"
            >
              Book Appointment
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <Slide direction="right">
            <img
              src="/Images/banners/doctor-presenting-something-isolated-white-background.jpg"
              alt="Dentists with patient"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
              loading="lazy"
            />
          </Slide>
        </div>
      </section>

      {/* Services/Pricing Section */}
      <Slide direction="left" triggerOnce>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  ref={ref}
                  className="bg-card rounded-lg p-4 sm:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" 
                    loading="lazy"
                  />

                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    ${inView ? (
                      <CountUp end={parseInt(service.price)} duration={1.5} separator="," />
                    ) : (
                      '0'
                    )}
                  </div>

                  <div className="text-base sm:text-lg font-semibold">
                    {service.title}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Slide>

      {/* Why Choose Us Section */}
      <Slide direction="right" triggerOnce>
        <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex-1 flex justify-center lg:justify-start mb-6 lg:mb-0 order-2 lg:order-1 w-full">
            <img
              src="/Images/banners/young-man-with-patient-bib-dental-chair-dentist-who-sits-him-he-looks-his-teeth-using-dental-microscope-holds-dental-bur-mirror.jpg"
              alt="Dental procedure"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 lg:pl-12 order-1 lg:order-2">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-primary">Why we best</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-primary mt-2">People Choose Us</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Each room is equipped with modern technology to ensure early diagnosis and minimally invasive procedures. We strive to make every visit as comfortable and efficient as possible, with a strong focus on patient education, preventative care, and long-term oral health.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-10 h-10 sm:w-12 sm:h-12 mt-1 flex-shrink-0" 
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary mb-1">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Slide>

      {/* Team Section */}
      <Zoom triggerOnce>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold block text-center mb-2 text-primary">Dentist</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6 sm:mb-10 text-primary">Meet our Dentist qualified staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Link 
                href={`/providers/${member.name.toString().toLowerCase().replace(/\s+/g, "-")}`} 
                key={index} 
                className="bg-card rounded-lg p-4 sm:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-primary" 
                  loading="lazy"
                />
                <h4 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-1">{member.name}</h4>
                <span className="text-xs sm:text-sm text-muted-foreground">{member.role}</span>
              </Link>
            ))}
          </div>
        </section>
      </Zoom>

      {/* Call to Action Section */}
      <Fade direction="left" triggerOnce>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="w-full flex flex-col border border-primary text-primary rounded-lg px-4 py-3 hover:opacity-50 text-xs sm:text-sm font-medium transition">
              <span className="text-sm sm:text-base">Call Us for Booking</span>
              717-745-2700
            </button>
            <button 
              onClick={() => setIsBookingOpen(true)} 
              className="w-full flex flex-col bg-primary text-white rounded-lg px-4 py-3 hover:bg-secondary text-xs sm:text-sm font-medium transition"
            >
              Book Online
              <span className="text-sm sm:text-base">Click Here for Appointment</span>
            </button>
          </div>
        </section>
      </Fade>

      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
} 