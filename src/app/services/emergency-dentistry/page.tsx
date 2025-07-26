"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React, { useState } from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import { CheckCircle } from 'lucide-react';
import BookCallBtn from '../book-call-btn';

export default function EmergencyDentistryPage() {

  const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief & Comfort.png",
    title: "Immediate Pain Relief & Comfort",
    description: "Dental pain can’t wait—and neither should you. At Maple Dental Harrisburg, we prioritize fast treatment to address discomfort, swelling, or infection with modern solutions that put your comfort first.",
    points: [
      "Same-day emergency appointments",
      "Pain management and dental sedation options",
      "Treatment for abscesses, broken teeth, and swelling",
      "Gentle, patient-focused care for all ages",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Smart Treatment Decisions Under Pressure",
    description:
      "When emergencies happen, smart and timely decisions can save your tooth and avoid long-term complications. Our skilled dentists guide you through every step with clear recommendations.",
    points: [
      "Thorough diagnostics with digital imaging",
      "Emergency root canals and restorations",
      "Temporary and permanent crown solutions",
      "Tooth-saving procedures whenever possible",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg & Nearby Communities.png",
    title: "Serving Harrisburg & Nearby Communities",
    description:
      "We are proud to be your trusted local emergency dental provider. Whether you're in Harrisburg (17110, 17109, 17111, 17112) or nearby in Colonial Park, Paxtang, Penbrook, Lawnton, Progress, or Linglestown—we're right around the corner when you need us most.",
    points: [
      "Convenient Harrisburg location",
      "Walk-ins and urgent same-day care",
      "Insurance accepted + flexible payment options",
      "Top-rated emergency dentist near you",
    ],
  },
];

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <ServiceSidebar />
      <main className='bg-white ml-1 flex-1 overflow-y-auto p-0 md:p-4'>
        <div className='flex flex-col items-center gap-4 bg-white'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Emergency Dentistry in Harrisburg, PA</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p>
                Urgent Dental Care in Harrisburg | Maple Dental | Family & Cosmetic Dentist Near You
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
                      src="/Images/banners/l1.webp"
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
                <div className='desc-text-subtitle'>Emergency Dentistry</div>
                <h3 className='desc-text-title'>About Emergency Dentistry</h3>
                <p>
                  Dental emergencies can happen anytime—and they often require quick action to avoid further complications. That’s why Maple Dental Harrisburg provides fast, gentle, and professional emergency dental care to patients of all ages.
                </p>
                <p>
                  Whether it’s a chipped tooth, a knocked-out crown, or intense pain, our team is here to help. We proudly serve patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112)—so if you’re searching for an emergency dentist near me, we’re nearby and ready to help.
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
                  Why Choose Maple Dental for Emergency Dental Care?
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li>Gentle, Experienced Dentists</li>
                    <li>Advanced Technology for Immediate Care</li>
                    <li>Same-Day & Walk-In Appointments Available</li>
                    <li>Central Location in Harrisburg, PA</li>
                    <li>Insurance Accepted & Affordable Payment Plans</li>
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
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Fast, Reliable Emergency Dental Care When You Need It Most
              </h2>
              <p className="features-description">
                At Maple Dental Harrisburg, we understand that dental emergencies can strike at any time. Our dedicated team is here to provide swift and effective care that relieves pain and prevents complications. Whether you're dealing with a cracked tooth, lost filling, or severe toothache, we’re prepared to act fast—with expert care and a compassionate touch. Patients from Harrisburg and surrounding areas trust us for urgent dental care that makes a difference.
              </p>
              <p className="features-description">
                Here’s what sets our emergency dental services apart:
              </p>
            </Fade>

            <div className="features-grid">
              {features.map((service, idx) => (
                <div className="feature-card" key={idx}>
                  <div className="flex flex-col items-start mb-3">
                    <img src={service.icon} alt={service.title} className="w-12 h-12 mb-2" />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="feature-list">
                    {service.points.map((point, i) => (
                      <li key={i} className="feature-list-item">
                        <CheckCircle /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='faq-section'>
            <h4 className='text-black text-4xl text-center mb-8'>Emergency Dentistry Q&A</h4>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    What is emergency dentistry?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Emergency dentistry provides rapid care for potentially serious but non-life-threatening oral health problems. If you lose a permanent tooth, develop a severe toothache, or damage a dental restoration, don’t wait to seek professional help. The sooner you make it to Maple Dental, the sooner you can minimize uncomfortable symptoms and restore your smile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    What conditions can benefit from emergency dentistry?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Maple Dental uses emergency dentistry to treat a variety of conditions, including:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Chipped and cracked teeth</li>
                      <li>Knocked-out teeth</li>
                      <li>Severe toothaches</li>
                      <li>Oral abscesses</li>
                      <li>Cuts and lacerations that won’t stop bleeding</li>
                      <li>Foreign objects lodged between teeth</li>
                      <li>Damaged dental restorations</li>
                      <li>Damaged orthodontic appliances</li>
                    </ul>
                    <p className="mt-2">You might also benefit from emergency dentistry if you experience oral trauma due to a car accident, sports injury, or slip-and-fall.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    What should I do if I need emergency dental care?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <strong>Severe toothache:</strong> Rinse your mouth with warm salt water and take over-the-counter pain medication. Be gentle while brushing and flossing. If pain persists over a day, contact Maple Dental.<br /><br />
                    <strong>Knocked-out tooth:</strong> Rinse the tooth (holding it by the crown) and place it back into your mouth. If not possible, place it in milk. Call Maple Dental immediately.<br /><br />
                    <strong>Damaged dental restoration:</strong> Collect all the broken pieces, clean them, and place them in a plastic bag. Call the office right away.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    How can I preserve the health of my teeth and gums?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    The most effective way to preserve your teeth and gums is by:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Brushing and flossing daily</li>
                      <li>Visiting the dentist twice a year for cleanings and exams</li>
                      <li>Wearing a mouthguard while playing sports</li>
                      <li>Avoiding habits like nail-biting and opening items with your teeth</li>
                    </ul>
                    <p className="mt-2">If you need emergency care, call Maple Dental, walk in, or book appointment today.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Call to Action Section */}

        </div>
        <div className="features-section">
                        <Fade direction="up" duration={1000}>
                          <h2 className="features-heading">
                            Need Emergency Dental Help in Harrisburg?
                          </h2>
                          <p className="features-description">
                            If you’re dealing with sudden dental pain or injury, don’t wait. Our expert emergency dental team is just a phone call away. Maple Dental Harrisburg is here to treat you with urgency, compassion, and care.
                          </p>
                          <BookCallBtn/>
                        </Fade>
                      </div>
          
      </main>
    </div>
  );
}