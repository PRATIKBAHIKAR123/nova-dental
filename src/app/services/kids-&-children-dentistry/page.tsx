// Example: app/services/invisalign/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function InvisalignPage() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <ServiceSidebar />
      <main className='ml-1 flex-1 overflow-y-auto p-4'>
        <div className='flex flex-col items-center gap-4 bg-white'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Kids & Children Dentistry</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p>Kids & Children Dentistry for Newark and East Orange, NJ | Maple Dental | Cosmetic & Family Dentist</p>
            </Fade>
          </div>

          <div className='details-page-desc-section'>
            <div className='image_section'>
              <div className='image_section-cover'>
                <Zoom cascade damping={0.3} duration={800}>
                  <div className='main-image'>
                    <img
                      src='/Images/banners/Children Denstiry.jpg'
                      alt='Invisalign Banner'
                    />
                  </div>
                </Zoom>
              </div>
            </div>

            <div className='desc-text-section'>
              <Fade cascade direction='up' delay={1000} duration={600}>
                <div className='desc-text-subtitle'>Kids & Children Dentistry</div>
                <h3 className='desc-text-title'>About Kids & Children Dentistry</h3>
                <p>
                  If you’re searching for a trusted kids’ dentist near you, look no further than Maple Dental. Their team of experienced cosmetic and family dentists provides gentle, high-quality care for children and adults alike. With two offices in Newark and one in East Orange, New Jersey, convenient care is always close by. Schedule an appointment online or call today to get started.
                </p>
              </Fade>
            </div>
          </div>

          <div className='faq-section'>
            <h4 className='faq-title'>Kids & Children Dentistry Q&A</h4>
            <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3']} className='w-full space-y-5'>
              <AccordionItem value='q1'>
                <AccordionTrigger className='faq-qn'>What is kids’ dentistry?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>Kids’ dentistry includes the full range of dental health needs for kids of all ages. Many parents are surprised to learn that babies need to begin seeing a pediatric dentist for early dental care visits as soon as that first tiny tooth begins to emerge.</p>
                  <p className='mt-3'>Pediatric dentistry focuses on preventive care. Routine dental exams check for signs of decay or disease, empowering parents to take action in the earliest possible stages when treatment is often most effective.</p>
                  <p className='mt-3'>When issues like cavities or gum disease arise, pediatric dentistry offers a range of solutions. Correcting the current set of symptoms is important, but your child’s dentist also focuses on educating and empowering kids to improve their dental hygiene habits to avoid future issues.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q2'>
                <AccordionTrigger className='faq-qn'>Why is kids’ dentistry so important?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>When kids grow up enjoying their early dental care visits, they’re more likely to continue to work with a dentist throughout adulthood. The team at NovaDental understands the importance of these early interactions and strives to make all pediatric dental visits as fun as possible.</p>
                  
                  <p className='mt-3'>Far too many parents believe that baby teeth are not important, since the permanent teeth will soon replace them. But the health of your child’s baby teeth has a substantial impact on their overall dental health and deserves professional care.</p>
                  <p className="mt-3">Taking great care of your teeth is something that’s learned, and based on habits established at a very early age. When you partner with a pediatric dentist at NovaDental, you have the support and guidance needed to start your little one on a path of excellent dental health.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q3'>
                <AccordionTrigger className='faq-qn'>What if my child is fearful of coming in for dental care?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p className='mt-3'>Some kids develop a substantial fear of coming in to see the dentist. This sometimes happens after kids see a movie or television show depicting dental care in a negative light. It can also occur after a negative experience in the dental chair.</p>
                  <p className='mt-3'>Sometimes, all it takes is hearing friends or family speak about dental visits in a way that seems frightening or stressful. One of the best ways to help your child feel more comfortable in a dental setting is to bring them with you during your next dental exam so they can see there’s nothing to fear.</p>
                  <p className='mt-3'>To schedule an appointment for your child, call the friendly NovaDental team today or spend a few moments on the online booking page.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
