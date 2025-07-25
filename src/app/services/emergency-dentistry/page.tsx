"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React, { useState } from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import { CheckCircle } from 'lucide-react';

export default function EmergencyDentistryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <ServiceSidebar />
      <main className='ml-1 flex-1 overflow-y-auto p-4'>
        <div className='flex flex-col items-center gap-4 bg-white'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Emergency Dentistry Specialist</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p>
                Emergency Dentistry for Newark and East Orange, NJ | Maple Dental | Cosmetic & Family Dentist
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
                  Emergency dentistry provides 24/7 oral health care, ensuring you get the treatment you need when it matters most. If you&aosp;re looking for an emergency dentist near you, Maple Dental offers prompt care for patients of all ages. To schedule an appointment at their Newark or East Orange, New Jersey locations, call the office or book appointment today.
                </p>
              </Fade>
            </div>
          </div>
         
          <div className='w-full flex flex-col md:flex-row'>         

            <div className='flex-1 flex flex-col gap-3 items-center justify-center bg-primary p-5'>
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className='text-md text-white'>
                  Top Reasons
                </div>
                <div className='text-white text-5xl font-semibold'>
                  Why Choose Us
                </div>
                <div className='text-white text-lg font-semibold'>
                  <ul className='list-disc list-inside space-y-2'>
                    <li>Experienced & Gentle Dentists</li>
                    <li>State-of-the-Art Technology</li>
                    <li>Comprehensive Care</li>
                    <li>Convenient Locations</li>
                    <li>Flexible Scheduling</li>
                    <li>Insurance & Payment Options</li>
                  </ul>
                </div>
              </Fade>
            </div>
            <div className='flex-1'>
              <Zoom cascade damping={0.3} duration={800}>
                <img src="/Images/banners/doctor-presenting-something-isolated-white-background.jpg" alt="dental" className='w-full h-full object-cover' />
              </Zoom>
            </div>

          </div>
          <div className="bg-gray-50 w-full flex flex-col items-center justify-center py-12 px-4 md:px-12 mb-8" >
            <Fade direction="up" duration={1000}>
              <h2 className="text-3xl md:text-3xl font-bold text-center mb-4">Fast, Reliable Emergency Dental Care When You Need It Most</h2>
              <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 opacity-90">
                At Maple Dental Harrisburg, we understand that dental emergencies can strike at any time. Our dedicated team is here to provide swift and effective care that relieves pain and prevents complications. Whether you're dealing with a cracked tooth, lost filling, or severe toothache, we’re prepared to act fast—with expert care and a compassionate touch. Patients from Harrisburg and surrounding areas trust us for urgent dental care that makes a difference.<br />Here’s what sets our emergency dental services apart:
              </p>
            </Fade>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              {/* Card 1 */}
              <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-start">
                <div className="flex flex-col items-start mb-3">
                  <img
                    src="/Images/icons/dental-care.png" // ✅ Replace with your actual image name
                    alt="Immediate Pain Relief"
                    className="w-12 h-12 mb-2"
                  />
                  <h3 className="text-xl font-bold text-primary">Immediate Pain Relief & Comfort</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Dental pain can’t wait—and neither should you. At Maple Dental Harrisburg, we prioritize fast treatment to address
                  discomfort, swelling, or infection with modern solutions that put your comfort first.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Same-day emergency appointments
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Pain management and dental sedation options
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Treatment for abscesses, broken teeth, and swelling
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Gentle, patient-focused care for all ages
                  </li>
                </ul>
              </div>


              {/* Card 2 */}
              <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-start">
                <div className="flex flex-col items-start mb-3">
                  <img
                    src="/Images/icons/dental-care.png" // ✅ Replace with your actual image name
                    alt="Smart Treatment"
                    className="w-12 h-12 mb-2"
                  />
                  <h3 className="text-xl font-bold text-primary">Smart Treatment Decisions Under Pressure</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  When emergencies happen, smart and timely decisions can save your tooth and avoid long-term complications. Our skilled dentists guide you through every step with clear recommendations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Thorough diagnostics with digital imaging
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Emergency root canals and restorations
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Temporary and permanent crown solutions
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Tooth-saving procedures whenever possible
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-start">
                <div className="flex flex-col items-start mb-3">
                  <img
                    src="/Images/icons/dental-care.png" // ✅ Replace with your actual image name
                    alt="Serving Harrisburg"
                    className="w-12 h-12 mb-2"
                  />
                  <h3 className="text-xl font-bold text-primary">Serving Harrisburg & Nearby Communities</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  We are proud to be your trusted local emergency dental provider. Whether you're in Harrisburg (17110, 17109, 17111, 17112) or nearby in Colonial Park, Paxtang, Penbrook, Lawnton, Progress, or Linglestown—we're right around the corner when you need us most.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Convenient Harrisburg location
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Walk-ins and urgent same-day care
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Insurance accepted + flexible payment options
                  </li>
                  <li className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Top-rated emergency dentist near you
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className='faq-section'>
            <h4 className='text-black text-4xl text-center mb-8'>Emergency Dentistry Q&A</h4>
            <div className="w-full max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="bg-gray-50 rounded-md shadow-md border-0 px-2  transition-all w-full">
                  <AccordionTrigger className="faq-qn rounded-md">
                    What is emergency dentistry?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Emergency dentistry provides rapid care for potentially serious but non-life-threatening oral health problems. If you lose a permanent tooth, develop a severe toothache, or damage a dental restoration, don’t wait to seek professional help. The sooner you make it to Maple Dental, the sooner you can minimize uncomfortable symptoms and restore your smile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="bg-gray-50 rounded-md shadow-md border-0 px-2  transition-all w-full">
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
                <AccordionItem value="q3" className="bg-gray-50 rounded-md shadow-md border-0 px-2  transition-all w-full">
                  <AccordionTrigger className="faq-qn rounded-md">
                    What should I do if I need emergency dental care?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <strong>Severe toothache:</strong> Rinse your mouth with warm salt water and take over-the-counter pain medication. Be gentle while brushing and flossing. If pain persists over a day, contact Maple Dental.<br /><br />
                    <strong>Knocked-out tooth:</strong> Rinse the tooth (holding it by the crown) and place it back into your mouth. If not possible, place it in milk. Call Maple Dental immediately.<br /><br />
                    <strong>Damaged dental restoration:</strong> Collect all the broken pieces, clean them, and place them in a plastic bag. Call the office right away.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="bg-gray-50 rounded-md shadow-md border-0 px-2  transition-all w-full">
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
          <Fade direction="up" triggerOnce>
            <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
              <div className="hidden md:flex gap-3">
                <button className="w-full flex flex-col border border-primary text-primary rounded-lg px-4 py-3 hover:opacity-50 text-sm font-medium transition">
                  <span className="text-base">Call Us for Booking</span>
                  717-745-2700
                </button>
                <button onClick={() => setIsBookingOpen(true)} className="w-full flex flex-col bg-primary text-white rounded-lg px-4 py-3 hover:bg-secondary text-sm font-medium transition">
                  Book Online
                  <span className="text-base">Click Here for Appointment</span>
                </button>
              </div>
            </section>
          </Fade>
      </main>
    </div>
  );
}