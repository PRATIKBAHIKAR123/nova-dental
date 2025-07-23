
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';

export default function RootCanalPage() {
    return (
        <div className='flex flex-col items-center gap-4 bg-white'>
            <div className='details-page-header-section'>
                <Fade direction='up' duration={1000}>
                <h1>Root Canal Specialist</h1>
                </Fade>
                <Fade direction='down' duration={1000}>
                <p>
                    Root Canal for Newark and East Orange, NJ | Maple Dental | Cosmetic & Family Dentist
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
                src="/Images/banners/dentist-examining-female-patient-teeth.jpg"
                alt="Main Banner"
              />
            </div>
            {/* <img
              src="/Images/banners/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
          </Zoom>
        </div>
      </div>

      {/* Text Section with Fade-in after delay */}
      <div className='desc-text-section'>
        <Fade cascade direction="up" delay={1000} duration={600}>
          <div className='desc-text-subtitle'>Root Canal</div>
          <h3 className='desc-text-title'>About Root Canal</h3>
          <p>
            A painful, infected tooth can make it difficult to eat, sleep, and get through your day. A root canal can save your tooth and provide lasting relief. If you&aosp;re searching for a dentist near you, Maple Dental offers expert root canal therapy to help you feel at ease. To schedule an appointment at their Newark or East Orange, New Jersey locations, call the office or book online today. 
          </p>
        </Fade>
      </div>
    </div>
    <div className='why-us-section'>
        <div className='why-us-descritption'>
            <Fade cascade direction="up" delay={1000} duration={600}>
        <div className='desc-subtitle'>
         Top Reasons
        </div>
        <div className='desc-title'>
            Why Choose Us
        </div>
        <div className='desc-points'>
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
        <div className='why-us-img-section'>
            <Zoom cascade damping={0.3} duration={800}>
               <img src="/Images/banners/doctor-presenting-something-isolated-white-background.jpg" alt="dental" />
               </Zoom>
        </div>

    </div>
    <div className='faq-section'>
           <h4 className='faq-title'>Root Canal Q&A</h4>
            <Accordion type="multiple" defaultValue={['q1','q2','q3','q4']} className="w-full space-y-5">
        
        <AccordionItem value="q1">
          <AccordionTrigger className='faq-qn'>What is a root canal?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
           <p> A crack or opening in your tooth allows bacteria to infiltrate, so your tooth may become infected. A root canal procedure cleans out that infection and closes the tooth off to further bacteria buildup.
          </p>
          <p>
            A root canal refers to the pulp chamber inside your tooth that&aosp;s filled with nerves and pulp. Once an adult tooth is fully developed, the pulp is no longer needed for the tooth to survive.
          </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger className='faq-qn'>Why would I need a root canal?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            Maple Dental uses root canal therapy to treat damaged or infected tooth pulp. These issues occur for various reasons, including:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Deep decay due to an untreated cavity</li>
              <li>Fractures, chips, and other damage</li>
              <li>Undergoing extensive dental work</li>
              <li>Oral trauma</li>
            </ul>
            <p className="mt-2">Pulp problems don&aosp;t always present obvious symptoms. If your gums become red, swollen, or emit a sensation of warmth, make an appointment at Maple Dental right away.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger className='faq-qn'>What happens during a root canal procedure?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                First, your dentist takes X-rays and examines your tooth to ensure the infection hasn&aosp;t spread. It also gives them an idea about how your pulp chamber is shaped. Next, they administer local anesthesia to numb your mouth and place a protective sheet around your tooth to keep it dry.
            </p>
            <p className='mt-2'>
                After the anesthesia kicks in, they make a hole in the root canal and insert tiny instruments to remove all the pulp. Your dentist then sanitizes and seals the root canal and access hole with a filling-like material. 
                </p>
                <p className='mt-2'>
                    When the filling material dries, your provider takes impressions of your tooth. They send your impressions to a dental laboratory that uses them to design and manufacture a custom dental crown. Once the technicians finish your crown, you return to Maple Dental.
                </p>
                <p className='mt-2'>
                    Your provider once again administers a local anesthetic, bonds the crown in place, and polishes your tooth. 
                </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger className='faq-qn'>What is recovery like following root canal therapy?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Following root canal therapy, many people experience increased tooth sensitivity, mild swelling, and discomfort. To limit any pain, take an over-the-counter medication like Advil or Tylenol. For the first 48-72 hours following treatment, eat only soft foods like scrambled eggs or mashed potatoes. 
            </p>
            <p className='mt-2'>
                Continue to brush and floss as normal, but be gentle around your treated tooth. Avoid biting down on your new crown for at least 48 hours, to ensure the bonding material dries. 
            </p>
            <p className='mt-2'>
                If you need to schedule a root canal, call or use the online booking option to speak to the team at Maple Dental today.
            </p>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
        </div>
    );
}