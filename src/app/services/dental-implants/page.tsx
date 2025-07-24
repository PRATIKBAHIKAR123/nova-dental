// Example: app/services/dental-implants/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function DentalImplantsPage() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <ServiceSidebar />
      <main className='ml-72 flex-1 overflow-y-auto p-4'>
        <div className='flex flex-col items-center gap-4 bg-white'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Dental Implants Specialist</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p>Dental Implants for Newark and East Orange, NJ | Maple Dental</p>
            </Fade>
          </div>

          <div className='details-page-desc-section'>
            <div className='image_section'>
              <div className='image_section-cover'>
                <Zoom cascade damping={0.3} duration={800}>
                  <div className='main-image'>
                    <img
                      src='/Images/banners/close-up-doctor-checking-man.jpg'
                      alt='Dental Implants Banner'
                    />
                  </div>
                </Zoom>
              </div>
            </div>

            <div className='desc-text-section'>
              <Fade cascade direction='up' delay={1000} duration={600}>
                <div className='desc-text-subtitle'>Dental Implants</div>
                <h3 className='desc-text-title'>About Dental Implants</h3>
                <p>
                  If you’ve lost some or all of your permanent teeth, dental implants can restore your smile and make everyday tasks like biting and chewing easier. If you’re searching for a trusted dentist near you, Maple Dental has years of experience placing dental implants with precision and care. To schedule an appointment at their Newark or East Orange, New Jersey locations, call the office or book online today.
                </p>
              </Fade>
            </div>
          </div>

          <div className='faq-section'>
            <h4 className='faq-title'>Dental Implants Q&A</h4>
            <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3', 'q4']} className='w-full space-y-5'>
              <AccordionItem value='q1'>
                <AccordionTrigger className='faq-qn'>What are dental implants?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>Dental implants are oral prosthetics that replace your permanent teeth. Unlike dentures, they don’t rest on top of your gums. Instead, your surgeon inserts them into your jaw during an outpatient procedure. Following placement, the implants integrate with your bone, creating a base for dental restorations like crowns, bridges, or implant-retained overdentures.</p>
                  <p className='mt-3'>Dental implants function like your natural teeth. With routine dental checkups and good oral hygiene, they often last decades.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q2'>
                <AccordionTrigger className='faq-qn'>What are the benefits of dental implants?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>Dental implants offer many benefits, including:</p>
                  <ul className='list-disc list-inside mt-2 space-y-2'>
                    <li>Easing biting and chewing</li>
                    <li>Improved oral hygiene</li>
                    <li>Confidence</li>
                    <li>Durability</li>
                    <li>Easier speaking</li>
                  </ul>
                  <p className='mt-3'>Dental implants are easy to clean and maintain. Instead of soaking them in a solution overnight like dentures, simply brush them twice daily.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q3'>
                <AccordionTrigger className='faq-qn'>Can anyone get dental implants?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>To qualify for dental implants, you need healthy gums and enough bone to anchor them. To determine if you’re a candidate, your provider conducts an oral exam and takes digital X-rays. If they detect any abnormalities, they might recommend a prerequisite procedure like gum disease treatment or a bone graft.</p>
                  <p className='mt-3'>If you’re living with a chronic condition like diabetes or heart disease, let your provider know. These ailments won’t prevent you from getting dental implants, but they can increase the risk of complications, so it’s important they’re stable.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q4'>
                <AccordionTrigger className='faq-qn'>What does getting dental implants involve?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>At Maple Dental, getting dental implants takes several appointments and a period of 6-12 months.</p>
                  <p className='mt-3'><strong>First appointment:</strong> If your provider determines you qualify for implants, they administer a local anesthetic and insert a series of titanium posts into your jaw. Following the procedure, your provider writes a prescription for pain medication and antibiotics and provides care instructions.</p>
                  <p className='mt-3'><strong>Second appointment:</strong> When the implants finish fusing with your jaw, 12-16 weeks later, you return to Maple Dental. Your provider takes impressions of your mouth with an intraoral scanner and sends them to a dental laboratory to create restorations.</p>
                  <p className='mt-3'><strong>Third appointment:</strong> When Maple Dental receives your restorations from the lab, you return to the office. Your provider administers a local anesthetic, bonds the restorations to your implants, and polishes them.</p>
                  <p className='mt-3'>To see if you’re a candidate for dental implants, make an appointment at Maple Dental by calling the office, or clicking the online booking tool today.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
