// Example: app/services/invisalign/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function InvisalignPage() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <ServiceSidebar />
      <main className='ml-72 flex-1 overflow-y-auto p-4'>
        <div className='flex flex-col items-center gap-4 bg-white'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Invisalign</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p>Invisalign for Newark and East Orange, NJ | Maple Dental</p>
            </Fade>
          </div>

          <div className='details-page-desc-section'>
            <div className='image_section'>
              <div className='image_section-cover'>
                <Zoom cascade damping={0.3} duration={800}>
                  <div className='main-image'>
                    <img
                      src='/Images/banners/Invisalign.jpg'
                      alt='Invisalign Banner'
                    />
                  </div>
                </Zoom>
              </div>
            </div>

            <div className='desc-text-section'>
              <Fade cascade direction='up' delay={1000} duration={600}>
                <div className='desc-text-subtitle'>Invisalign</div>
                <h3 className='desc-text-title'>About Invisalign</h3>
                <p>
                  Invisalign® is a popular alternative to traditional metal braces, offering a discreet way to straighten your teeth. If you’re looking for a dentist near you, the experienced team at Maple Dental proudly provides Invisalign to residents in Newark and East Orange, New Jersey. To learn more or get started, call the office or book an appointment online today.
                </p>
              </Fade>
            </div>
          </div>

          <div className='faq-section'>
            <h4 className='faq-title'>Invisalign Q&A</h4>
            <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3']} className='w-full space-y-5'>
              <AccordionItem value='q1'>
                <AccordionTrigger className='faq-qn'>What is Invisalign?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>Invisalign is an orthodontic treatment that uses a series of clear plastic aligner trays to create gentle pressure to move teeth. It’s a wonderful alternative to traditional metal braces, which use a series of affixed metal brackets and treatment wires to create pressure that shifts teeth.</p>
                  <p className='mt-3'>Many adults and teens love Invisalign because it offers the chance to correct alignment issues without a gleaming metallic smile. Once your aligners are in place, they blend seamlessly with your natural teeth. Many people won’t notice you’re wearing them.</p>
                  <p className='mt-3'>Invisalign also improves your smile with fewer office visits. That’s a big benefit for those who can’t afford to miss time from school, work, or family obligations.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q2'>
                <AccordionTrigger className='faq-qn'>What kinds of alignment issues can Invisalign improve?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>Invisalign can treat most of the same alignment problems as traditional metal braces. Some examples of treatable cases include:</p>
                  <ul className='list-disc list-inside mt-2 space-y-2'>
                    <li>Overbite</li>
                    <li>Underbite</li>
                    <li>Open bite</li>
                    <li>Crossbite</li>
                    <li>Mix of permanent and baby teeth</li>
                    <li>General misalignment</li>
                    <li>Gapped teeth</li>
                    <li>Crowded teeth</li>
                  </ul>
                  <p className='mt-3'>There are some cases in which metal braces offer the best solution. The metal brackets, wires, hooks, and elastics used in metal braces create forces that Invisalign cannot achieve. During your initial visit, your dentist explains the right approach for you.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q3'>
                <AccordionTrigger className='faq-qn'>What does Invisalign treatment involve?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>Once you get used to wearing your aligners, Invisalign treatment is a breeze. Your initial visit includes intraoral digital scanning, a quick and painless process that provides the dental lab with all the information needed to craft your custom-fitted aligners.</p>
                  <p className='mt-3'>When your first few sets of aligner trays arrive, you return to the office to learn how to place and remove them. You wear your aligners around the clock, taking them out only during meals and while brushing and flossing your teeth. This ensures your treatment progresses as planned.</p>
                  <p className='mt-3'>A degree of soreness is normal for a day or two after you switch to a new set of aligners. This is similar to the sensation that occurs after having a wire replaced with metal braces and simply means your teeth are shifting into improved alignment.</p>
                  <p className='mt-3'>Periodic office visits check on your progress and give your dentist a chance to adjust your treatment as needed. If you’d like to learn more about how Invisalign can transform your smile, call or click to schedule a visit.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
