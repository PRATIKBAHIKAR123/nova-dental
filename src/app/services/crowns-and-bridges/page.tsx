// Example: app/services/crowns-bridges/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function CrownsBridgesPage() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <ServiceSidebar />
      <main className='ml-72 flex-1 overflow-y-auto p-4'>
        <div className='flex flex-col items-center gap-4 bg-white'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Crowns and Bridges Specialist</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p>Crowns and Bridges for Newark and East Orange, NJ | Maple Dental</p>
            </Fade>
          </div>

          <div className='details-page-desc-section'>
            <div className='image_section'>
              <div className='image_section-cover'>
                <Zoom cascade damping={0.3} duration={800}>
                  <div className='main-image'>
                    <img
                      src='/Images/banners/div.elementor-widget-wrap (5).png'
                      alt='Crowns and Bridges Banner'
                    />
                  </div>
                </Zoom>
              </div>
            </div>

            <div className='desc-text-section'>
              <Fade cascade direction='up' delay={1000} duration={600}>
                <div className='desc-text-subtitle'>Crowns and Bridges</div>
                <h3 className='desc-text-title'>About Crowns and Bridges</h3>
                <p>
                  If you have decayed or damaged teeth that make eating, speaking, or smiling uncomfortable, a dental crown or bridge could restore your smile. If you’re searching for a trusted dentist near you, Maple Dental provides expert restorative care to help you regain confidence and comfort. With offices in Newark and East Orange, New Jersey, scheduling is convenient. Call today or book your appointment online.
                </p>
              </Fade>
            </div>
          </div>

          <div className='faq-section'>
            <h4 className='faq-title'>Crowns and Bridges Q&A</h4>
            <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3', 'q4']} className='w-full space-y-5'>
              <AccordionItem value='q1'>
                <AccordionTrigger className='faq-qn'>What are dental crowns?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>A dental crown is a fitted cap that covers dental implants or individual teeth. You may be a candidate for a dental crown if you have any of the following:</p>
                  <ul className='list-disc list-inside mt-2 space-y-2'>
                    <li>Decayed teeth</li>
                    <li>Broken teeth</li>
                    <li>Oversized cavity</li>
                  </ul>
                  <p className='mt-3'>You may also need a crown if you grind your teeth. Crowns restore function and prevent further decay. Materials include porcelain, ceramic, or metal like gold.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q2'>
                <AccordionTrigger className='faq-qn'>What are dental bridges?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>A dental bridge replaces one or more missing teeth by connecting an artificial tooth to surrounding teeth or implants. This prevents surrounding teeth from shifting and maintains alignment.</p>
                  <p className='mt-3'>Bridges are typically made of porcelain or a mix of porcelain and metal to resemble natural teeth.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q3'>
                <AccordionTrigger className='faq-qn'>What is the process for getting a dental crown?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>First, a dental impression is taken. Then, the affected tooth is filed down and the crown is secured with dental cement. The dentist checks your bite and makes final adjustments to ensure comfort.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q4'>
                <AccordionTrigger className='faq-qn'>What is the process for getting a dental bridge?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>The process usually involves two or three appointments. After crowns are placed on adjacent teeth, impressions are taken to ensure the bridge fits perfectly. A follow-up ensures the restoration is successful.</p>
                  <p className='mt-3'>To schedule a consultation about crowns or bridges, call Maple Dental or use the online booking tool.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
