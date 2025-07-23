// Example: app/services/dental-emergencies/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function DentalEmergenciesPage() {
  return (
    <div className='flex flex-col items-center gap-4 bg-white'>
      <div className='details-page-header-section'>
        <Fade direction='up' duration={1000}>
          <h1>Dental Emergencies</h1>
        </Fade>
        <Fade direction='down' duration={1000}>
          <p>Dental Emergencies for Newark and East Orange, NJ | Nova Dental</p>
        </Fade>
      </div>

      <div className='details-page-desc-section'>
        <div className='image_section'>
          <div className='image_section-cover'>
            <Zoom cascade damping={0.3} duration={800}>
              <div className='main-image'>
                <img
                  src='/Images/banners/Tooth Extraction1.jpg'
                  alt='Dental Emergencies Banner'
                />
              </div>
            </Zoom>
          </div>
        </div>

        <div className='desc-text-section'>
          <Fade cascade direction='up' delay={1000} duration={600}>
            <div className='desc-text-subtitle'>Dental Emergencies</div>
            <h3 className='desc-text-title'>About Dental Emergencies</h3>
            <p>
              Dental emergencies can happen when you least expect them and often require immediate care. If you need an emergency dentist near you, the team at Nova Dental offers 24/7 emergency dentistry for patients of all ages. With two offices in Newark and one in East Orange, New Jersey, you can easily find a location close to home. Call to schedule an appointment or use the fast and easy online booking tool today.
            </p>
          </Fade>
        </div>
      </div>

      <div className='faq-section'>
        <h4 className='faq-title'>Dental Emergencies Q&A</h4>
        <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3']} className='w-full space-y-5'>
          <AccordionItem value='q1'>
            <AccordionTrigger className='faq-qn'>What are dental emergencies?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Dental emergencies refer to potentially serious but non-life-threatening oral health problems. If you develop a severe toothache, lose a permanent tooth, or damage a dental restoration, don’t wait to seek professional help. The sooner you make it to Nova Dental, the sooner you can minimize uncomfortable symptoms and restore your smile.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q2'>
            <AccordionTrigger className='faq-qn'>What are the most common dental emergencies?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Some of the most common dental emergencies include:</p>
              <ul className='list-disc list-inside mt-2 space-y-2'>
                <li>Toothache</li>
                <li>Chipped or broken teeth</li>
                <li>Knocked out tooth</li>
                <li>Lost crown or filling</li>
                <li>Broken orthodontics</li>
                <li>Damaged restorations</li>
                <li>Foreign objects stuck between teeth</li>
                <li>Oral abscess</li>
                <li>Cuts or lacerations</li>
              </ul>
              <p className='mt-3'>If you experience oral trauma due to a sports injury, car accident, or fall, or if you have pain and bleeding after a tooth extraction, call Nova Dental right away.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q3'>
            <AccordionTrigger className='faq-qn'>How can dental emergencies be prevented?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>While not all dental emergencies can be prevented, using basic precautions can significantly reduce your risk:</p>
              <ul className='list-disc list-inside mt-2 space-y-2'>
                <li><strong>Mouthguard:</strong> Wear one during sports to protect against trauma.</li>
                <li><strong>Eating Habits:</strong> Avoid hard candies and chewy meats. Eat carefully.</li>
                <li><strong>Foreign Objects:</strong> Don’t use your teeth to open packaging or chew on pens/nails.</li>
                <li><strong>Oral Hygiene:</strong> Brush and floss daily. Visit your dentist twice a year.</li>
              </ul>
              <p className='mt-3'>Despite precautions, emergencies can still occur. If you or a loved one need urgent dental care, make an appointment at Nova Dental by calling the office, walking in, or booking online today.</p>
              <p className='mt-2 italic'>*If you or a loved one is experiencing a life-threatening emergency, call 911 or go to the nearest hospital.*</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
