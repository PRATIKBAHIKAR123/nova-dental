"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import BookingModal from "../booking/bookingScreen";

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = useIsMobile();
    const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    { id: 1, title: "Emergency Dentistry", description: "Emergency dentistry provides 24/7 oral health care", image: "/Images/banners/div.elementor-widget-wrap (5).png", icon: "/Images/icons/Dental checkup.png", href: "/services/emergency-dentistry" },
    { id: 2, title: "Teeth Whitening", description: "Brighten your smile", image: "/Images/banners/div.elementor-widget-wrap (4).png", icon: "/Images/icons/tooth-whitening.png" , href: "/services/whitening-&-veneers" },
    { id: 3, title: "Dental Braces", description: "Orthodontic correction", image: "/Images/banners/div.elementor-widget-wrap (3).png", icon: "/Images/icons/braces.png", href: "/services/orthodontics" },
    { id: 4, title: "Root Canal", description: "Save infected teeth", image: "/Images/banners/div.elementor-widget-wrap (2).png", icon: "/Images/icons/root-canal (1).png" , href: "/services/root-canal" },
    { id: 5, title: "Dental Implants", description: "Permanent tooth replacement", image: "/Images/banners/div.elementor-widget-wrap (1).png", icon: "/Images/icons/implant.png", href: "/services/dental-implants" },
    { id: 6, title: "Oral Surgery", description: "Advanced procedures", image: "/Images/banners/div.elementor-widget-wrap.png", icon: "/Images/icons/oral surgery.png", href: "/services/oral-surgery" },
    { id: 12, title: "Tooth Extraction", description: "Safe tooth removal", image: "/Images/banners/Tooth Extraction_ homepage.jpg", icon: "/Images/icons/tooth-extraction.png", href: "/services/tooth-extraction" },
    { id: 14, title: "Dental Crowns", description: "Restore damaged teeth", image: "/Images/banners/dental crown_homepage.jpg", icon: "/Images/icons/dental-crown (1).png", href: "/services/crowns-and-bridges" },
    { id: 16, title: "Dental Fillings", description: "Repair cavities", image: "/Images/banners/Tooth filling.jpg", icon: "/Images/icons/tooth-filling.png", href: "/services/fillings" },
  ];

  const slidesPerView = isMobile?1:3;
  const maxSlides = Math.ceil(services.length / slidesPerView);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, maxSlides - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 10000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full mt-10 mx-auto px-4">
        <Fade delay={200}>
      <h2 className="text-center text-primary text-3xl md:text-5xl font-extrabold mb-10">
        Services We Offer
      </h2>
      </Fade>

      {/* Carousel Container */}
      <div className="relative overflow-hidden py-3">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: maxSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
                <Slide direction="right" delay={slideIndex + 1*200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services
                  .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                  .map((service) => (
                    <Slide key={service.id} direction="right" delay={slideIndex + 1*200}>
                    <div
                      
                      className="shadow-md rounded-[4px] hover:shadow-lg transition duration-300 overflow-hidden"
                    >
                      <div className="relative h-90 bg-gray-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        {/* <div className="absolute top-4 left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl">
                          {service.icon}
                        </div> */}
                        <div className="rounded-tr-sm absolute bottom-0 left-0 p-5 bg-white w-[270px]">
                        <h3 className="flex items-center gap-2 text-primary text-xl font-bold leading-tight mb-1">
                          <img src={service.icon} alt="icon" className="w-8 h-8" />{service.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {service.description}
                        </p>
                        <Link href={service.href} className="text-primary hover:text-blue-800 inline-flex items-center">
                          Learn More
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                      </div>
                      
                    </div>
                    </Slide>
                  ))}
              </div>
              </Slide>
            </div>
          ))}
        </div>

        {/* Arrows (positioned over the sides) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
          disabled={currentSlide === maxSlides - 1}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSlide === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <Fade delay={200}>
      <h2 className="text-center text-3xl md:text-5xl font-extrabold my-10">
        Are you in need of emergency dental work?
      </h2>
      </Fade>
      <Fade delay={500}>
      <h4 className="text-center text-md md:text-2xl font-bold mb-5">
        Book an appointment with us today!
      </h4>
      </Fade>
      <Fade delay={600}>
      <div className="text-center">
      <Button onClick={()=>setIsBookingOpen(true)} size={'lg'}>Book Appointment</Button>
      </div>
      </Fade>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
    </section>
  );
}
