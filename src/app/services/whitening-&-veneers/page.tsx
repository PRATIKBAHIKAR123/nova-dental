// Example: app/services/whitening-and-veneers/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function WhiteningAndVeneersPage() {
  return (
    <div className='flex flex-col items-center gap-4 bg-white'>
      <div className='details-page-header-section'>
        <Fade direction='up' duration={1000}>
          <h1>Whitening & Veneers</h1>
        </Fade>
        <Fade direction='down' duration={1000}>
          <p>Whitening & Veneers for Newark and East Orange, NJ | Maple Dental</p>
        </Fade>
      </div>

      <div className='details-page-desc-section'>
        <div className='image_section'>
          <div className='image_section-cover'>
            <Zoom cascade damping={0.3} duration={800}>
              <div className='main-image'>
                <img
                  src='/Images/banners/Whitening.jpg'
                  alt='Whitening & Veneers Banner'
                />
              </div>
            </Zoom>
          </div>
        </div>

        <div className='desc-text-section'>
          <Fade cascade direction='up' delay={1000} duration={600}>
            <div className='desc-text-subtitle'>Whitening & Veneers</div>
            <h3 className='desc-text-title'>About Whitening & Veneers</h3>
            <p>
              A bright, white smile is always appealing, but tooth discoloration is common over time. If you’re looking for a dentist near you, Maple Dental offers professional teeth whitening to help restore your smile’s brilliance. With two offices in Newark and one in East Orange, New Jersey, brighter teeth are just an appointment away. Call or book online today.
            </p>
          </Fade>
        </div>
      </div>

      <div className='faq-section'>
        <h4 className='faq-title'>Whitening & Veneers Q&A</h4>
        <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3']} className='w-full space-y-5'>
          <AccordionItem value='q1'>
            <AccordionTrigger className='faq-qn'>Why has my smile changed over time?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Several factors cause or contribute to tooth discoloration. Some of these are within your control, while others are not. The only part of your teeth that is naturally white is the outermost thin shell of enamel. Just beneath your enamel lies a thicker layer of dentin, which is naturally yellow. As the years pass, you lose some of your enamel, revealing more of the yellow dentin.</p>
              <p className='mt-3'>Some additional factors that cause discoloration include:</p>
              <ul className='list-disc list-inside mt-2 space-y-2'>
                <li>Food and drinks that stain, including red wine, berries, and potatoes</li>
                <li>Poor dental hygiene</li>
                <li>Exposure to high levels of fluoride</li>
                <li>Traumatic injury</li>
                <li>Certain medications</li>
                <li>Tobacco use</li>
              </ul>
              <p className='mt-3'>No matter why your smile has lost some of its gleam, professional teeth whitening offers a solution.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q2'>
            <AccordionTrigger className='faq-qn'>How does professional teeth whitening work?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>Maple Dental offers both in-office and at-home teeth whitening options. When you come in for your consultation, your dentist listens to your treatment goals and helps you choose the right approach.</p>
              <p className='mt-3'>In-office whitening uses a powerful solution to blast apart surface stains. Your dentist begins by isolating your tongue and other soft oral tissues before painting the solution onto the visible surfaces of your teeth. Some systems use a special light to activate the solution, while others simply need a few moments to whiten teeth. Your dentist then rinses away all traces of the solution, revealing your newly bright smile.</p>
              <p className='mt-3'>At-home whitening relies on custom-molded dental trays to hold the whitening solution against the surface of your teeth. You simply apply a thin line of whitening gel, pop the trays in, and go about your daily routine. With at-home whitening, you can control the brightness of your smile. Simply use the remaining gel to achieve a quick whitening boost any time you like.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='q3'>
            <AccordionTrigger className='faq-qn'>Can dental veneers improve the whitening of my teeth?</AccordionTrigger>
            <AccordionContent className='faq-ans'>
              <p>If you’re looking for a long-term way to achieve a white, bright smile, dental veneers are a good fit. Veneers cover the front portion of your teeth with a thin shell of porcelain.</p>
              <p className='mt-3'>In addition to creating a whiter smile, veneers correct irregularities in the size, shape, or alignment of teeth. They also protect chipped or cracked teeth. A new set of veneers can last 15-20 years with proper care.</p>
              <p className='mt-3'>When you’re ready to explore all of your cosmetic dentistry options, call or click to schedule a consultation.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
