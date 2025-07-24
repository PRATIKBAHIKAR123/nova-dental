'use client';


import React, { useState, useEffect } from 'react';
import ServicesSection from './services';
import InsuranceSection from './accepted-insurance';
import SpecialOffersSection from './special-offer';
import { Button } from '@/components/ui/button';
import LocationTabs from './addresses';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import FloatingFormButton from '@/components/ui/floatingButton';
import FloatingTextForm from '@/components/ui/floatingButton';
import { InfoIcon, MessageCircle, Stethoscope, User } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import FloatingPromo from '@/components/ui/promo-popup';



const banners = [
    {
        image: '/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg',
        title: 'Welcome to Maple Dental Harrisburg',
        subtitle: 'Your Trusted Cosmetic & Family Dentist in Harrisburg and Surrounding Areas',
        image2: '/Images/banners/woman-patient-dentist (1).jpg',
    },
    {
        image: '/Images/banners/senior-woman-having-dental-treatment-dentist-s-office-woman-is-being-treated-teeth.jpg',
        title: 'Expert Dental Care',
        subtitle: 'Modern solutions for healthy teeth.',
        image2: '/Images/banners/Whitening.jpg',
    },
    {
        image: '/Images/banners/Banner_4.jpg',
        title: 'Expert Dental Care',
        subtitle: 'Modern solutions for healthy teeth.',
        image2: '/Images/banners/Tooth filling.jpg',
    },
    {
        image: '/Images/banners/Banner_3.jpg',
        title: 'Expert Dental Care',
        subtitle: 'Modern solutions for healthy teeth.',
        image2: '/Images/banners/woman-patient-dentist.jpg',
    },
];

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

export default function HomePage() {
    const [current, setCurrent] = useState(0);
    const { ref, inView } = useInView();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <section className="relative w-full h-[100vh] md:h-[92vh] overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-secondary">

                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Curved Shape */}
                    <div className="absolute top-0 right-0 w-2/3 h-full">
                        <svg
                            viewBox="0 0 800 600"
                            className="absolute inset-0 w-full h-full"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M300,0 Q400,100 450,200 Q500,300 480,400 Q460,500 400,600 L800,600 L800,0 Z"
                                fill="rgba(255,255,255,0.05)"
                            />
                            <path
                                d="M350,0 Q450,120 500,220 Q550,320 530,420 Q510,520 450,600 L800,600 L800,0 Z"
                                fill="rgba(255,255,255,0.03)"
                            />
                        </svg>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-16 left-12">
                        <div className="grid grid-cols-4 gap-2">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-white/30 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Medical Cross */}
                    <div className="absolute top-24 left-32 text-white/25 text-4xl font-light">+</div>

                    {/* Tooth Icon */}
                    <div className="absolute top-32 left-16 text-white/20">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1 4.5 2 6.5 1 2 2 4.5 2 6.5v1h4v-1c0-2-1-4.5-2-6.5-1-2-2-4-2-6.5 0-3.5 2.5-6 6-6s6 2.5 6 6c0 2.5-1 4.5-2 6.5-1 2-2 4.5-2 6.5v1h4v-1c0-2 1-4.5 2-6.5 1-2 2-4 2-6.5 0-3.5-2.5-6-6-6z" />
                        </svg>
                    </div>

                    {/* Additional decorative dots */}
                    <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="absolute top-40 left-8 w-4 h-4 bg-white/15 rounded-full"></div>
                    <div className="absolute bottom-48 left-40 w-2 h-2 bg-white/25 rounded-full"></div>
                </div>

                {/* Banner Content */}
                {banners.map((banner, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <div className="container mx-auto px-6 h-full flex items-center">
                            <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">

                                {/* Left Content */}
                                <div className="flex-1 text-white z-20">
                                    <Fade cascade direction='up' delay={1000} duration={600}>
                                        <div className="max-w-lg">
                                            <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-6 leading-tight">
                                                {banner.title}
                                            </h1>
                                            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed opacity-95">
                                                {banner.subtitle}
                                            </p>

                                            {/* Logo Placeholder */}
                                            {/* <div className="mt-8 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-2 inline-block border border-white/20">
                      <span className="text-white font-semibold text-md">Lorem</span>
                    </div>
                  </div> */}

                                            {/* Call to Action */}
                                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                                <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold text-md hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                                    Book Appointment
                                                </button>
                                                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-md hover:bg-white hover:text-cyan-600 transition-all duration-300">
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                                {/* Right Content - Image */}
                                <div className="flex-1 relative z-20">
                                    <div className="relative max-w-full mx-auto">
                                        {/* Image Container with curved background */}
                                        <Zoom cascade damping={0.3} duration={800}>
                                            <div className="relative">
                                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-0 shadow-2xl border border-white/20">
                                                    <img
                                                        src={banner.image}
                                                        alt={banner.title}
                                                        className="w-full h-64 md:h-104 lg:h-120 object-cover rounded-xl shadow-lg"
                                                    />
                                                </div>

                                                {/* Special Offer Badge */}
                                                <div className="absolute -top-20 -right-28 z-5">
                                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-0 shadow-2xl border border-white/20">
                                                        <img
                                                            src={banner.image2}
                                                            alt={banner.title}
                                                            className="w-32 md:w-56 h-42 md:h-58 lg:h-74 object-cover rounded-xl shadow-lg"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Decorative elements around image */}
                                                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                                                <div className="absolute -top-2 left-8 w-4 h-4 bg-white/25 rounded-full"></div>

                                            </div>
                                        </Zoom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="flex gap-3">
                        {banners.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`transition-all duration-300 rounded-full ${idx === current
                                        ? 'w-12 h-3 bg-white shadow-lg'
                                        : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                {/* <button
        onClick={() => setCurrent(current === 0 ? banners.length - 1 : current - 1)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrent((current + 1) % banners.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
            </section>
            {/* <div className='h-20 w-full flex'>
                <div className='flex-1 bg-primary flex flex-col text-center items-center justify-center'>
                    <a className='text-white text-md md:text-2xl font-semibold'>
                        About Us
                    </a>

                </div>
                <div className='flex-1 bg-primary/90 flex flex-col text-center items-center justify-center'>
                    <a className='text-white text-md md:text-2xl font-semibold'>
                        Our Providers
                    </a>

                </div>
                <div className='flex-1 bg-primary/70 flex flex-col text-center items-center justify-center'>
                    <a className='text-white text-md md:text-2xl font-semibold'>
                        Our Services
                    </a>

                </div>
                <div className='flex-1 bg-primary flex flex-col text-center items-center justify-center'>
                    <a className='text-white text-md md:text-2xl font-semibold'>
                        Contact Us
                    </a>

                </div>

            </div> */}
            <HomepageSections />

            <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">

                    {/* Left Side - Image */}
                    <Slide direction="right" className="w-full md:w-1/2 h-120">
                        <img
                            src="/Images/banners/close-up-man-carrying-young-woman-his-back.jpg"
                            alt="dental-banner"
                            className="rounded-xl w-full h-full object-cover shadow-md"
                        />
                    </Slide>

                    {/* Right Side - Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <Fade delay={200}>
                            <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                                About Maple Dental
                            </h2>
                        </Fade>

                        <Fade delay={500}>
                            <p className="text-lg ">
                                Your Trusted Cosmetic & Family Dentist in Harrisburg and Surrounding Areas
                            </p>
                        </Fade>

                        <Fade delay={700}>
                            <p className="text-base leading-relaxed">
                                Looking for a reliable dentist near you in Harrisburg, PA? At Maple Dental Harrisburg, we’re committed to delivering high-quality, affordable dental care in a comfortable and welcoming environment. Located at 2017 Eg Drive, Suite 200, our practice proudly serves patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112) – helping families and individuals maintain healthy, confident smiles.
                            </p>
                        </Fade>

                        <Fade delay={800}>
                            <Link
                                href="/about-us"
                                className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-sm font-medium transition"
                            >
                                Learn More
                            </Link>
                        </Fade>
                    </div>
                </div>

            </section>

                  <Slide direction="up" triggerOnce>
                     <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => {
        // const { ref, inView } = useInView({
        //   threshold: 0.1,
        // });

        return (
          <div
            key={index}
            ref={ref}
            className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
            
            <div className="text-3xl font-bold text-primary mb-2">
              {inView ? (
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

            <ServicesSection />

            <InsuranceSection />

            <SpecialOffersSection />


            <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">

                    {/* Left Side - Image */}
                    <Slide direction="right" className="w-full md:w-1/2 h-120">
                        <img
                            src="/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg"
                            alt="dental-banner"
                            className="rounded-xl w-full h-full object-cover shadow-md"
                        />
                    </Slide>

                    {/* Right Side - Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <Fade delay={200}>
                            <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                               No Insurance? No Problem.
                            </h2>
                        </Fade>

                        <Fade delay={500}>
                            <p className="text-lg ">
                                Please call our office to discuss your financing options.
                            </p>
                        </Fade>

                        <Fade delay={700}>
                            <p className="text-base leading-relaxed">
                                <ul className='list-disc gap-3 mt-2'>
                                <li><Fade delay={800}>$55 Emergency Dental Visit (Includes Exam & X-ray)</Fade></li>
                                <li><Fade delay={1000}>$79 New Patient Special (Exam , Cleaning + X-rays)</Fade></li>
                                <li><Fade delay={1200}>Interest-Free Financing Available (Up to 12 Months)</Fade></li>
                                <li><Fade delay={1200}>Senior Discounts During Special Hours</Fade></li>
                            </ul>
                            </p>
                        </Fade>

                        <Fade delay={800}>
                            <Button>CALL TODAY!</Button>
                        </Fade>
                    </div>
                </div>

            </section>
            <LocationTabs />
            <FloatingTextForm />
            <FloatingPromo/>
        </div>
    );
}


function HomepageSections() {
    const sections = [
        { label: 'About Us', icon: <InfoIcon />, bg: 'bg-primary', href: '/about-us' },
        { label: 'Our Providers', icon: <User />, bg: 'bg-primary/70', href: '/about-us' },
        { label: 'Our Services', icon: <Stethoscope />, bg: 'bg-secondary', href: '/services' },
        { label: 'Contact Us', icon: <MessageCircle />, bg: 'bg-secondary/70', href: '/contact-us' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {sections.map((section, idx) => (
                <Link href={section.href} key={idx}
                    className={`rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-white ${section.bg} flex flex-col items-center justify-center p-6 text-center`}
                >
                    <div className="text-4xl mb-2">{section.icon}</div>
                    <div className="text-lg md:text-xl font-semibold">{section.label}</div>
                </Link>
            ))}
        </div>
    );
}
