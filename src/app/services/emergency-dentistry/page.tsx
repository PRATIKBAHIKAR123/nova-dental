
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function EmergencyDentistryPage() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <ServiceSidebar />
      <main className='ml-72 flex-1 overflow-y-auto p-4'>
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
                  <img
                    src="/Images/banners/s1.webp"
                    className="overlay-image"
                    alt="Overlay"
                  />
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
          <div className='faq-section'>
            <h4 className='text-secondary text-4xl text-center'>Emergency Dentistry Q&A</h4>
            <Accordion type="multiple" defaultValue={['q1', 'q2', 'q3', 'q4']} className="w-full space-y-5">

              <AccordionItem value="q1">
                <AccordionTrigger className='faq-qn'>What is emergency dentistry?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  Emergency dentistry provides rapid care for potentially serious but non-life-threatening oral health problems. If you lose a permanent tooth, develop a severe toothache, or damage a dental restoration, don’t wait to seek professional help. The sooner you make it to Maple Dental, the sooner you can minimize uncomfortable symptoms and restore your smile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2">
                <AccordionTrigger className='faq-qn'>What conditions can benefit from emergency dentistry?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
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

              <AccordionItem value="q3">
                <AccordionTrigger className='faq-qn'>What should I do if I need emergency dental care?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <strong>Severe toothache:</strong> Rinse your mouth with warm salt water and take over-the-counter pain medication. Be gentle while brushing and flossing. If pain persists over a day, contact Maple Dental.<br /><br />
                  <strong>Knocked-out tooth:</strong> Rinse the tooth (holding it by the crown) and place it back into your mouth. If not possible, place it in milk. Call Maple Dental immediately.<br /><br />
                  <strong>Damaged dental restoration:</strong> Collect all the broken pieces, clean them, and place them in a plastic bag. Call the office right away.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4">
                <AccordionTrigger className='faq-qn'>How can I preserve the health of my teeth and gums?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
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
      </main>
    </div>
  );
}