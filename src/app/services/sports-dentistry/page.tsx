// Example: app/services/dental-implants/page.tsx

import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function SportsDentistryPage() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <ServiceSidebar />
      <main className='ml-72 flex-1 overflow-y-auto p-4'>
        <div className='flex flex-col items-center gap-4 bg-white'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Sports Dentistry</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p>Sports Dentistry for Newark and East Orange, NJ | Maple Dental | Cosmetic & Family Dentist</p>
            </Fade>
          </div>

          <div className='details-page-desc-section'>
            <div className='image_section'>
              <div className='image_section-cover'>
                <Zoom cascade damping={0.3} duration={800}>
                  <div className='main-image'>
                    <img
                      src='/Images/banners/Sports Dentistry.jpg'
                      alt='Dental Implants Banner'
                    />
                  </div>
                </Zoom>
              </div>
            </div>

            <div className='desc-text-section'>
              <Fade cascade direction='up' delay={1000} duration={600}>
                <div className='desc-text-subtitle'>Sports Dentistry</div>
                <h3 className='desc-text-title'>About Sports Dentistry</h3>
                <p>
                  Dental injuries are the most common type of orofacial injury in sports, yet many athletes are unaware of the serious health risks they pose. If you’re looking for a dentist near you, Maple Dental offers expert sports dentistry services to help prevent and manage dental injuries. Their knowledgeable team works with patients, athletes, and coaches to promote safety and oral health. With offices in Newark and East Orange, New Jersey, care is always close by. Call today to learn more or book an appointment online.
                </p>
              </Fade>
            </div>
          </div>

          <div className='faq-section'>
            <h4 className='faq-title'>Sports Dentistry Q&A</h4>
            <Accordion type='multiple' defaultValue={['q1', 'q2', 'q3', 'q4']} className='w-full space-y-5'>
              <AccordionItem value='q1'>
                <AccordionTrigger className='faq-qn'>What does sports dentistry do?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>If you or your child is active in sports, you have likely heard the term sports dentistry. Sports dentists work to prevent and manage orofacial injuries that result from playing sports, such as hard and soft tissue injuries to the bones and teeth.</p>
                  <p className='mt-3'>For instance, tooth intrusions and root fractures are examples of pediatric dental emergencies or kid dentistry that sports dentists handle.</p>
                  <p className='mt-3'>
Sports dentists also take care of oral diseases resulting from sports-related injuries. These injuries cause a broad range of dental issues, and the sports dentists at Maple Dental are with you every step of the way.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='q2'>
                <AccordionTrigger className='faq-qn'>Is sports dentistry necessary?</AccordionTrigger>
                <AccordionContent className='faq-ans'>
                  <p>Sports dentistry is very important if you or your child plays a contact sport. If your general dentist practices sports dentistry, they can outfit you with a custom-fitted mouthguard to prevent injuries. They can even recommend the proper dental care to go along with your activity level, which is critical in preventing injuries.</p>
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
