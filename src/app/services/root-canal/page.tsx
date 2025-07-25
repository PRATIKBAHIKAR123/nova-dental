"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';

export default function RootCanalPage() {
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <ServiceSidebar />
            <main className='ml-1 flex-1 overflow-y-auto p-4'>
                <div className='flex flex-col items-center gap-4 bg-white'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Root Canal Treatment in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p>
                            Gentle Root Canals in Harrisburg | Maple Dental | Family & Cosmetic Dentist Near You
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
                src="/Images/banners/dentist-examining-female-patient-teeth.jpg"
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
          <div className='desc-text-subtitle'>Root Canal</div>
          <h3 className='desc-text-title'>About Root Canal</h3>
          <p>
            A root canal might sound intimidating, but at Maple Dental Harrisburg, it’s a routine, pain-free procedure that can save your natural tooth and relieve intense discomfort. If you’re dealing with a severe toothache or deep infection, our expert team uses modern techniques to ensure a comfortable and effective root canal experience. 
          </p>
          <p>
            We serve patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). Searching for “root canal near me”? We’re conveniently located and ready to help.
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
                      Why Choose Maple Dental for Root Canal Treatment?
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li>Comfort-Focused, Experienced Team  </li>
                        <li>Advanced Technology for Precision Treatment  </li>
                        <li>Same-Day Appointments Available  </li>
                        <li>Affordable Care with Insurance Accepted  </li>
                        <li>Central Harrisburg Location Near You</li>
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
                <h4 className='text-black text-4xl text-center mb-8'>Root Canal Q&A</h4>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        What is a root canal?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        A root canal is a dental procedure used to treat infection or damage in the pulp (the soft tissue inside the tooth). During the procedure, we remove the infected tissue, clean the root canal, and seal it to prevent future issues. This restores your tooth’s strength and function—without the need for extraction.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        When do I need a root canal?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        Common symptoms that may require root canal therapy include:
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Persistent toothache </li>
                          <li>Sensitivity to hot or cold</li>
                          <li>Swollen gums around the tooth</li>
                          <li>Darkening or discoloration of the tooth</li>
                          <li>A pimple-like bump on the gums</li>
                        </ul>
                        <p className="mt-2">If you're experiencing any of these signs, it’s important to seek care promptly to avoid complications</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Is a root canal painful?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          No. Thanks to modern dental technology and local anesthesia, root canals are no more uncomfortable than getting a filling. Most patients feel relief after the procedure since the source of pain—the infection—is removed.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        What happens after a root canal?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">After your root canal, we may place a crown over the treated tooth to protect it and restore full function. You may experience some mild sensitivity for a day or two, but this usually resolves quickly. We’ll give you complete care instructions for a smooth recovery.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        How can I avoid needing a root canal?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">To prevent infections that lead to root canals:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Brush and floss daily</li>
                          <li>Get regular dental checkups</li>
                          <li>Avoid sugary foods and drinks</li>
                          <li>Wear a mouthguard during sports</li>
                          <li>Don’t ignore small dental issues</li>
                          </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Pain-Free Root Canals in Harrisburg — Book Now
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          If you're experiencing tooth pain, don't wait. The team at Maple Dental Harrisburg offers gentle, effective root canal treatment designed to save your natural teeth and eliminate discomfort. Call us today to schedule your consultation and take the first step toward a healthier smile.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Pain-Free Root Canals in Harrisburg — Book Now
                                </h2>
                                <p className="features-description">
                                  If you're experiencing tooth pain, don't wait. The team at Maple Dental Harrisburg offers gentle, effective root canal treatment designed to save your natural teeth and eliminate discomfort. Call us today to schedule your consultation and take the first step toward a healthier smile.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}