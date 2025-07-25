"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';

export default function OralSurgeryPage() {
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <ServiceSidebar />
            <main className='ml-1 flex-1 overflow-y-auto p-4'>
                <div className='flex flex-col items-center gap-4 bg-white'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Oral Surgery in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p>
                            Tooth Extractions & Wisdom Teeth Removal | Maple Dental | Oral Surgeon Near You
                        </p>
                        </Fade>
                        {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
                    </div>
                    <div className='details-page-desc-section'>

      {/* Image Section */}
      <div className='image_section'>
        <div className="image_section-cover">
          <Zoom cascade damping={0.3} duration={800}>
            <div className="main-image">
              <img
                src="/Images/banners/dentist-assistant-surgery-dental-clinic.jpg"
                alt="Main Banner"
              />
            </div>
            {/* <img
              src="/Images/banners/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
          </Zoom>
        </div>
      </div>

      {/* Text Section with Fade-in after delay */}
      <div className='desc-text-section'>
        <Fade cascade direction="up" delay={1000} duration={600}>
          <div className='desc-text-subtitle'>Oral Surgery</div>
          <h3 className='desc-text-title'>About Oral Surgery</h3>
          <p>
           Oral surgery doesn't have to be stressful. At Maple Dental Harrisburg, we make it easy and comfortable for you. Whether you need a simple tooth pulled or wisdom teeth removed, we offer gentle and expert care in a safe environment. We proudly serve patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). Looking for a trusted oral surgeon or tooth extraction near you? You're in the right place.
          </p>
        </Fade>
      </div>
    </div>
    <div className='wcu-section'>         
        
                    <div className='wcu-text-section'>
                      <Fade cascade direction="up" delay={1000} duration={600}>
                        <div className='wcu-subtitle'>
                          Top Reasons
                        </div>
                        <div className='wcu-title'>
                          Why Choose Maple Dental for Oral Surgery?
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li>Gentle and safe extractions   </li>
                            <li>Wisdom teeth removal with sedation options</li>
                            <li>Modern technology for precise diagnosis</li>
                            <li>Insurance accepted and payment plans available</li>
                            <li>Friendly, experienced dental team</li>
                          </ul>
                        </div>
                      </Fade>
                    </div>
                    <div className='wcu-img-section'>
                      <Zoom cascade damping={0.3} duration={800}>
                        <img src="/Images/banners/doctor-presenting-something-isolated-white-background.jpg" alt="dental" />
                      </Zoom>
                    </div>
        
                  </div>
    <div className='faq-section'>
           <h4 className='text-black text-4xl text-center mb-8'>Oral Surgery Q&A</h4>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'>What is oral surgery?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Oral surgery includes procedures like:</p>
            <ul className='list-disc space-y-2 mt-2'>
            <p className="mt-2">Simple and surgical tooth extractions</p>
            <p className="mt-2">Wisdom teeth removal (including impacted cases) </p>
            <p className='mt-2'>Minor surgeries for infected gums or tissue</p>
            <p className='mt-2'>All procedures are done with patient comfort in mind</p>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'>When is a tooth extraction necessary?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>You may need a tooth pulled if it is:</p>
            <ul className='list-disc space-y-2 mt-2'>
            <p className="mt-2">Severely decayed or broken</p>
            <p className="mt-2">Causing crowding or bite issues</p>
            <p className='mt-2'>Affected by gum disease</p>
            <p className='mt-2'>Impacted or infected (like wisdom teeth)</p>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'>What is involved in wisdom teeth removal?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Wisdom teeth often don’t grow in properly. We offer safe, effective removal, whether the teeth are fully erupted or impacted under the gums. Sedation is available to keep you calm and pain-free</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'>Does oral surgery hurt?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                No — we use local anesthesia and sedation options to ensure your visit is painless. Our team is gentle and experienced with nervous patients.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5" className="faq-acc">
          <AccordionTrigger className='faq-qn'>How do I prepare for oral surgery?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Before surgery:
            </p>
            <ul className='list-disc space-y-2 mt-2'>
            <p className="mt-2">Eat light (if not sedated)</p>
            <p className="mt-2">Arrange for someone to drive you home (if sedated)</p>
            <p className='mt-2'>Avoid smoking or alcohol</p>
            <p className='mt-2'>Plan soft meals for after the procedure</p>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q6" className="faq-acc">
          <AccordionTrigger className='faq-qn'>What is the recovery like?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <ul className='list-disc space-y-2 mt-2'>
            <p className="mt-2">Minor swelling or soreness for 1–3 days</p>
            <p className="mt-2">Pain relief with over-the-counter meds</p>
            <p className='mt-2'>Most patients return to normal within a few days</p>
            <p className='mt-2'>We provide full post-op instructions to support healing</p>
            </ul>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Need an Oral Surgeon in Harrisburg?
                  </h2>
                  <p className="features-description">
                    If you’re looking for oral surgery near Harrisburg — whether it’s a tooth extraction, wisdom tooth removal, or other surgical dental care — Maple Dental is here for you.
                  </p>
                  <p className="features-description">
                    Call today to book your consultation.
 We proudly serve: Harrisburg, Colonial Park, Penbrook, Paxtang, Progress, Lawnton, and Linglestown.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}