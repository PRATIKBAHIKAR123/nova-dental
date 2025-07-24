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
    price: "65",
    title: "Dental Implant",
  },
  {
    icon: "/Images/icons/tooth-whitening.png",
    price: "135",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/braces.png",
    price: "230",
    title: "Dental Crown",
  },
];

const features = [
  {
    icon: "/Images/icons/emergency denstiry.png",
    title: "Expert Dentist",
    desc: "Our qualified dental professionals provide exceptional care with years of experience and advanced training.",
  },
  {
    icon: "/Images/icons/orthodontics.png",
    title: "24/7 Advance Care",
    desc: "Round-the-clock emergency dental services ensuring you receive immediate care when you need it most.",
  },
  {
    icon: "/Images/icons/dental-floss.png",
    title: "Available Products",
    desc: "Comprehensive range of dental products and treatments to meet all your oral health needs.",
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

// const partners = [
//   {
//     name: "PERELEX",
//     icon: "/Images/dental-care.png",
//   },
//   {
//     name: "DENTONIX",
//     icon: "/Images/teeth-whitening.png",
//   },
//   {
//     name: "SENOFEX",
//     icon: "/Images/implant.png",
//   },
//   {
//     name: "MEDILEX",
//     icon: "/Images/braces.png.png",
//   },
//   {
//     name: "ZELOMEX",
//     icon: "/Images/tooth-insurance.png.png",
//   },
// ];

export default function AboutUs() {
  const { ref, inView } = useInView();
    const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="flex-1 space-y-6 md:pr-8">
            <span className="uppercase tracking-widest text-sm text-secondary font-semibold">Science 2005</span>

            <Fade delay={200}>
              <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                Keep your Teeth Clean &amp; Shine
              </h2>
            </Fade>
            <Fade delay={500}>
              <p className="text-lg ">
                Whether you need a routine checkup or advanced cosmetic treatment, our expert team offers comprehensive services using the latest dental technology. From preventive care to smile makeovers, we tailor each treatment plan to your unique needs and goals.
              </p>
            </Fade>
            <Fade delay={700}>
                                        <p className="text-base leading-relaxed">
                                            You need to brush your teeth everyday for healthy teeth and smile.
                                        </p>
                                    </Fade>

            <div className="flex gap-6 mt-4 items-center">
              <Button className="bg-primary text-white hover:bg-secondary/80">
                  Book Appointment
                
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Slide direction="right">
            <img
              src="/Images/banners/doctor-presenting-something-isolated-white-background.jpg"
              alt="Dentists with patient"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
            </Slide>
          </div>
        </section>

      {/* Services/Pricing Section */}
      <Slide direction="up" >
                     <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => {

        return (
          <div
            key={index}
            ref={ref}
            className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
            
            <div className="text-3xl font-bold text-primary mb-2">
              ${inView ? (
                <CountUp end={parseInt(service.price)} duration={1.5} separator="," />
              ) : (
                '0'
              )}
            </div>
            
            <div className="text-lg font-semibold">
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
            <p className="text-base mb-6">
              Each room is equipped with modern technology to ensure early diagnosis and minimally invasive procedures. We strive to make every visit as comfortable and efficient as possible, with a strong focus on patient education, preventative care, and long-term oral health.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{feature.title}</h3>
                    <p className="text-sm">{feature.desc}</p>
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
              <Link href={`/providers/${member.name.toString().toLowerCase().replace(/\s+/g, "-")}`} key={index} className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
              
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary" />
                <h4 className="text-lg font-bold text-primary mb-1">{member.name}</h4>
                <span className="text-sm mb-2">{member.role}</span>
                {/* <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <span className="text-secondary">♥</span>
                  <span className="font-semibold">{member.rating.toFixed(1)}</span>
                  <span>|</span>
                  <span>🕐</span>
                  <span>{member.time}</span>
                </div> */}
              </Link>
            ))}
          </div>
        </section>
      </Zoom>

      {/* Call to Action Section */}
      <Fade direction="up" triggerOnce>
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="hidden md:flex gap-3">
          <button className="w-full flex flex-col border border-primary text-primary rounded-lg px-4 py-3 hover:opacity-50 text-sm font-medium transition">
            <span className="text-base">Call Us for Booking</span>
            717-745-2700
          </button>
          <button onClick={()=>setIsBookingOpen(true)}  className="w-full flex flex-col bg-primary text-white rounded-lg px-4 py-3 hover:bg-secondary text-sm font-medium transition">
            Book Online
            <span className="text-base">Click Here for Appointment</span>
          </button>
        </div>
        </section>
      </Fade>

      {/* Testimonials Section */}
      {/* <Fade direction="up" triggerOnce>
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
      </Fade> */}

      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
    </div>
  );
} 