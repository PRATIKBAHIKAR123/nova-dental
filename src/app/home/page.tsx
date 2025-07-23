'use client';


import React, { useState, useEffect } from 'react';
import ServicesSection from './services';
import InsuranceSection from './accepted-insurance';
import SpecialOffersSection from './special-offer';
import { Button } from '@/components/ui/button';
import LocationTabs from './addresses';
import { Fade, Slide } from 'react-awesome-reveal';
import FloatingFormButton from '@/components/ui/floatingButton';
import FloatingTextForm from '@/components/ui/floatingButton';
import { InfoIcon, MessageCircle, Stethoscope, User } from 'lucide-react';
import Link from 'next/link';



const banners = [
    {
        image: '/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg',
        title: 'Welcome to Maple Dental',
        subtitle: 'Your smile, our passion.',
    },
    {
        image: '/Images/banners/senior-woman-having-dental-treatment-dentist-s-office-woman-is-being-treated-teeth.jpg',
        title: 'Expert Dental Care',
        subtitle: 'Modern solutions for healthy teeth.',
    },
        {
        image: '/Images/banners/Banner_4.jpg',
        title: 'Expert Dental Care',
        subtitle: 'Modern solutions for healthy teeth.',
    },
        {
        image: '/Images/banners/Banner_3.jpg',
        title: 'Expert Dental Care',
        subtitle: 'Modern solutions for healthy teeth.',
    },
];

export default function HomePage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
                {banners.map((banner, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'z-0'
                            }`}
                    >
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-full object-fit"
                        />
                        {/* <div className='carousel-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[100%] text-left text-primary'>
                            <h4 className='text-3xl md:text-5xl font-semibold mb-2'>
                                Welcome to Maple Dental Harrisburg
                            </h4>
                            <h2 className='text-2xl md:text-md font-medium'>
                                Your Trusted Cosmetic & Family Dentist in Harrisburg and Surrounding Areas
                            </h2>
                        </div> */}
                        <div className="carousel-texts absolute bottom-20 flex flex-col gap-4 justify-center items-center text-center text-primary">
                            <h4 className='text-3xl md:text-5xl font-semibold'>
                                Welcome to Maple Dental Harrisburg
                            </h4>
                            <h2 className='text-2xl md:text-md font-medium'>
                                Your Trusted Cosmetic & Family Dentist in Harrisburg and Surrounding Areas
                            </h2>
                            <img src="/Images/Maple MHA Logo.png" alt="logo" className='h-[58px] w-auto' />
                            <div className='flex gap-2 align-center justify-center'>
                                {banners.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrent(idx)}
                                        className={`w-5 h-2 rounded-none cursor-pointer ${idx === current ? 'bg-[#abc]' : 'bg-gray/50'
                                            } border border-[#abc]`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
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

            <section className='w-full flex flex-col md:flex-row gap-3'>
                <Slide direction='right' className='flex-1 h-120 w-full'>
                    <img src="/Images/banners/close-up-man-carrying-young-woman-his-back.jpg" alt="dental-banner" className='h-full w-full' />
                </Slide>
                <div className='flex-1 flex items-center'>
                    <div className='text-center flex flex-col gap-5 items-center justify-center px-8 md:px-38 text-left'>
                        <Fade delay={200}>
                        <div className='text-4xl md:text-[3.3rem] font-normal'>
                            About Maple Dental

                        </div>
                        </Fade>
                        <Fade delay={500}>
                        <div className='text-[1.3rem]'>
                            Cosmetic & Family Dentist located in Newark and East Orange, NJ
                        </div>
                        </Fade>
                        <Fade delay={700}>
                        <div>
                            Cosmetic & Family Dentist located in Newark and East Orange, NJ
                            If you’re looking for a dentist near you, Maple Dental provides comprehensive oral health care to people of all ages living in and around Newark, East Orange, and throughout Essex County, New Jersey. Maple Dental provides affordable, complete care in a welcoming, upscale environment. Each
                        </div>
                        </Fade>
                    </div>
                    <div>

                    </div>
                </div>

            </section>
            <ServicesSection />

            <InsuranceSection />

            <SpecialOffersSection />

            <section className='w-full flex flex-col md:flex-row gap-3'>
                <Slide direction='left' className='flex-1 '>
                <div className='h-120 w-full'>
                    <img src="/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg" alt="dental-banner" className='h-full w-full' />
                </div>
                </Slide>
                <div className='flex-1 flex items-center'>
                    <div className='text-center flex flex-col gap-5 items-center justify-center px-9 md:px-38 text-left'>
                        <div className='text-4xl md:text-[3.3rem] font-normal'>
                            <Fade delay={200}>
                            No Insurance? No Problem.
                            </Fade>

                        </div>
                        <div className='text-[1.3rem]'>
                            <Fade delay={400}>
                            Please call our office to discuss your financing options.
                            </Fade>
                        </div>
                        <div>
                            <Fade delay={600}>
                            We believe quality dental care should be accessible to all. That’s why we offer:
                            </Fade>
                            <ul className='list-disc gap-3 mt-2'>
                                <li><Fade delay={800}>$55 Emergency Dental Visit (Includes Exam & X-ray)</Fade></li>
                                <li><Fade delay={1000}>$79 New Patient Special (Exam , Cleaning + X-rays)</Fade></li>
                                <li><Fade delay={1200}>Interest-Free Financing Available (Up to 12 Months)</Fade></li>
                                <li><Fade delay={1200}>Senior Discounts During Special Hours</Fade></li>
                            </ul>
                        </div>
                        <div>
                            <Button>CALL TODAY!</Button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </section>
            <LocationTabs/>
            <FloatingTextForm />
        </div>
    );
}


 function HomepageSections() {
  const sections = [
    { label: 'About Us', icon: <InfoIcon />, bg: 'bg-primary', href: '/about-us' },
    { label: 'Our Providers', icon: <User />, bg: 'bg-primary', href: '/about-us' },
    { label: 'Our Services', icon: <Stethoscope />, bg: 'bg-primary', href: '/services' },
    { label: 'Contact Us', icon: <MessageCircle />, bg: 'bg-primary', href: '/contact-us' },
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
