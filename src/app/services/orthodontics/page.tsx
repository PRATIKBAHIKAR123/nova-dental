// Example: app/services/orthodontics/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function OrthodonticsPage() {
  return (
    <div className='flex flex-col items-center gap-4 bg-white'>
      <div className='details-page-header-section'>
        <Fade direction='up' duration={1000}>
          <h1>Orthodontics Specialist</h1>
        </Fade>
        <Fade direction='down' duration={1000}>
          <p>Orthodontics for Newark and East Orange, NJ | Nova Dental</p>
        </Fade>
      </div>

      <div className='details-page-desc-section'>
        <div className='image_section'>
          <div className='image_section-cover'>
            <Zoom cascade damping={0.3} duration={800}>
              <div className='main-image'>
                <img
                  src='/Images/banners/portrait-smiling-child-with-braces-dentist-s-office.jpg'
                  alt='Orthodontics Banner'
                />
              </div>
            </Zoom>
          </div>
        </div>

        <div className='desc-text-section'>
          <Fade cascade direction='up' delay={1000} duration={600}>
            <div className='desc-text-subtitle'>Orthodontics</div>
            <h3 className='desc-text-title'>About Orthodontics</h3>
            <p>
              If you’re experiencing discomfort from dental issues like crowding, crossbite, overbite, or underbite, you’re not alone. If you’re looking for an experienced dentist near you, Nova Dental offers proven orthodontic treatments to correct bites and straighten smiles. With locations in Newark and East Orange, New Jersey, the team is ready to help. Call the office or book an appointment online today.
            </p>
          </Fade>
        </div>
      </div>

      <div className='faq-section'>
        <h4 className='faq-title'>Orthodontics Q&A</h4>
        <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3', 'q4']} className='w-full space-y-5'>
          <AccordionItem value='q1'>
            <AccordionTrigger className='faq-qn'>What is orthodontics?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Orthodontics is a dentistry specialty that involves adjusting the alignment of your teeth and jaw. The team at Nova Dental helps patients of all ages gain their confidence back by diagnosing, preventing, and correcting misaligned teeth.</p>
              <p className='mt-3'>Orthodontists treat an array of oral issues associated with bite or jaw alignment, such as:</p>
              <ul className='list-disc list-inside mt-2 space-y-2'>
                <li>Crowding</li>
                <li>Spacing</li>
                <li>Crossbite</li>
                <li>Open Bite</li>
                <li>Overbite</li>
                <li>Underbite</li>
                <li>Overjet</li>
                <li>Abnormal eruption</li>
              </ul>
              <p className='mt-3'>Nova Dental treats both severe spacing issues and simple cosmetic adjustments with orthodontics.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q2'>
            <AccordionTrigger className='faq-qn'>What are my orthodontic treatment options?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>At Nova Dental, the dental team provides multiple options for braces, including:</p>
              <ul className='list-disc list-inside mt-2 space-y-2'>
                <li><strong>Traditional braces:</strong> Fixed brackets and wires that are tightened over time.</li>
                <li><strong>Clear braces:</strong> Ceramic brackets and white wires for a more subtle look.</li>
                <li><strong>Invisalign®:</strong> Clear, plastic retainers that adjust teeth gradually.</li>
                <li><strong>Lingual braces:</strong> Traditional braces placed behind the teeth.</li>
              </ul>
              <p className='mt-3'>While certain bite corrections require a specific type of braces, Nova Dental offers various choices to suit your preference and condition.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q3'>
            <AccordionTrigger className='faq-qn'>What precautions should I take with braces?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Cleaning can be difficult with braces. To stay proactive about your oral health:</p>
              <ul className='list-disc list-inside mt-2 space-y-2'>
                <li>Avoid sticky foods, sugars, and starches</li>
                <li>Brush at least twice a day and floss daily</li>
                <li>Be cautious around brackets while eating</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q4'>
            <AccordionTrigger className='faq-qn'>How do I start orthodontic treatment?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Call Nova Dental or schedule an online appointment today to begin your journey toward a more confident smile with professional orthodontic care.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
