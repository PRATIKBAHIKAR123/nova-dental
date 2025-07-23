// Example: app/services/tooth-extraction/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ToothExtractionPage() {
  return (
    <div className='flex flex-col items-center gap-4 bg-white'>
      <div className='details-page-header-section'>
        <Fade direction='up' duration={1000}>
          <h1>Tooth Extraction</h1>
        </Fade>
        <Fade direction='down' duration={1000}>
          <p>Tooth Extraction for Newark and East Orange, NJ | Nova Dental</p>
        </Fade>
      </div>

      <div className='details-page-desc-section'>
        <div className='image_section'>
          <div className='image_section-cover'>
            <Zoom cascade damping={0.3} duration={800}>
              <div className='main-image'>
                <img
                  src='/Images/banners/dentist-matching-colour-tooth-enamel-with-whitening-chart.jpg'
                  alt='Tooth Extraction Banner'
                />
              </div>
            </Zoom>
          </div>
        </div>

        <div className='desc-text-section'>
          <Fade cascade direction='up' delay={1000} duration={600}>
            <div className='desc-text-subtitle'>Tooth Extraction</div>
            <h3 className='desc-text-title'>About Tooth Extraction</h3>
            <p>
              While most dental procedures are noninvasive, some situations require oral surgery. If you’re looking for a skilled dentist near you, the experienced team at Nova Dental offers a range of oral surgery services, including tooth extractions. With two offices in Newark and one in East Orange, New Jersey, it’s easy to find a convenient location. Call today to schedule an appointment or book online.
            </p>
          </Fade>
        </div>
      </div>

      <div className='faq-section'>
        <h4 className='faq-title'>Tooth Extraction Q&A</h4>
        <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3', 'q4']} className='w-full space-y-5'>
          <AccordionItem value='q1'>
            <AccordionTrigger className='faq-qn'>What is tooth extraction?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>
                Tooth extraction, also called tooth removal, removes one or more of your permanent teeth. Your Nova Dental provider might recommend an extraction if you have gum disease (periodontitis), dental trauma, or wisdom teeth complications. Many people undergo wisdom teeth extractions, but you might also benefit if you have impacted teeth, a severely decaying tooth, or are preparing to undergo orthodontic treatment.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q2'>
            <AccordionTrigger className='faq-qn'>Why would you need a tooth extraction?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Your Nova Dental provider may recommend tooth extraction for any of the following reasons:</p>
              <ul className='list-disc list-inside mt-2 space-y-2'>
                <li>Decay</li>
                <li>Periodontal and gum disease</li>
                <li>Impaction</li>
                <li>Overcrowding</li>
                <li>Dental trauma</li>
              </ul>
              <p className='mt-3'>
                Teeth are often some of the first casualties in an accident. Whether it has to do with a sports injury or a car crash, sometimes dental emergencies can cause a tooth to become too damaged to save. When this is the case, tooth extraction is a necessary part of the recovery process.
              </p>
              <p className='mt-3'>
                Although saving your teeth is always desired, there are cases when teeth need to be removed. A tooth extraction might be the best option when a tooth cannot be repaired using a filling or crown.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q3'>
            <AccordionTrigger className='faq-qn'>What is the difference between oral surgery and tooth extraction?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Simple dental tooth extraction is the procedure of removing teeth that are easily accessible and visible. Whereas surgical dental extraction often involves an incision to access the tooth.</p>
              <p className='mt-3'>Sometimes, your Nova Dental provider may advise you that tooth extraction isn't necessary.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q4'>
            <AccordionTrigger className='faq-qn'>What are some common types of oral surgery besides tooth extraction?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>In addition to tooth extraction, Nova Dental offers various types of oral surgery, including:</p>
              <ul className='list-disc list-inside mt-2 space-y-2'>
                <li><strong>Dental implant placement:</strong> Prosthetics that replace missing natural teeth and provide a foundation for restorations.</li>
                <li><strong>Gum grafts:</strong> A surgical solution to restore gum tissue lost due to gingivitis or periodontitis.</li>
              </ul>
              <p className='mt-3'>Schedule a visit at Nova Dental by calling any of their three offices to find out if you're a good candidate for tooth extraction. Or book an appointment online today.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
