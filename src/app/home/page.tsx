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



const banners = [
    {
        image: '/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg',
        title: 'Welcome to Nova Dental',
        subtitle: 'Your smile, our passion.',
    },
    {
        image: '/Images/banners/senior-woman-having-dental-treatment-dentist-s-office-woman-is-being-treated-teeth.jpg',
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
                            className="w-full h-full object-cover"
                        />
                        <div className="carousel-texts absolute bottom-0 flex flex-col gap-4 justify-center items-center text-center text-white">
                            <img src="/Images/nova-dental-logo.webp" alt="logo" className='h-[110px] w-auto' />
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
            <div className='h-20 w-full flex'>
                <div className='flex-1 bg-primary flex flex-col text-center items-center justify-center'>
                    <a className='text-white text-2xl font-semibold'>
                        About Us
                    </a>

                </div>
                <div className='flex-1 bg-primary/90 flex flex-col text-center items-center justify-center'>
                    <a className='text-white text-2xl font-semibold'>
                        Our Providers
                    </a>

                </div>
                <div className='flex-1 bg-primary/70 flex flex-col text-center items-center justify-center'>
                    <a className='text-white text-2xl font-semibold'>
                        Our Services
                    </a>

                </div>
                <div className='flex-1 bg-primary flex flex-col text-center items-center justify-center'>
                    <a className='text-white text-2xl font-semibold'>
                        Contact Us
                    </a>

                </div>

            </div>

            <section className='w-full flex'>
                <Slide direction='right' className='flex-1 h-120 w-full'>
                    <img src="/Images/banners/close-up-man-carrying-young-woman-his-back.jpg" alt="dental-banner" className='h-full w-full' />
                </Slide>
                <div className='flex-1 flex items-center'>
                    <div className='text-center flex flex-col gap-5 items-center justify-center px-38 text-left'>
                        <Fade delay={200}>
                        <div className='text-[3.3rem] font-normal'>
                            About Nova Dental

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
                            If you’re looking for a dentist near you, Nova Dental provides comprehensive oral health care to people of all ages living in and around Newark, East Orange, and throughout Essex County, New Jersey. Nova Dental provides affordable, complete care in a welcoming, upscale environment. Each
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

            <section className='w-full flex'>
                <Slide direction='left' className='flex-1 '>
                <div className='h-120 w-full'>
                    <img src="/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg" alt="dental-banner" className='h-full w-full' />
                </div>
                </Slide>
                <div className='flex-1 flex items-center'>
                    <div className='text-center flex flex-col gap-5 items-center justify-center px-38 text-left'>
                        <div className='text-[3.3rem] font-normal'>
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
                            We help fit dentistry into your budget:
                            </Fade>
                            <ul className='list-disc gap-3'>
                                <li><Fade delay={800}>Interest-free financing for up to 12 months!</Fade></li>
                                <li><Fade delay={1000}>Senior Discounts & Select Hours for Senior Safety!</Fade></li>
                                <li><Fade delay={1200}>$130 Exam & X-rays and discounted prices for treatment.</Fade></li>
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