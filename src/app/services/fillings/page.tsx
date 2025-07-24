
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function FillingsPage() {
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <ServiceSidebar />
            <main className='ml-1 flex-1 overflow-y-auto p-4'>
                <div className='flex flex-col items-center gap-4 bg-white'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Fillings Specialist
</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p>
                            Fillings for Newark and East Orange, NJ | Maple Dental | Cosmetic & Family Dentist
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
                    src="/Images/banners/woman-patient-dentist (1).jpg"
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
              <div className='desc-text-subtitle'>Fillings</div>
              <h3 className='desc-text-title'>About Fillings</h3>
              <p>
                It’s estimated that 92% of American adults have fillings. These restorative treatments help prevent further tooth decay and preserve your smile for years to come. If you’re looking for a dentist near you, Maple Dental offers tooth-colored fillings to keep your teeth healthy and strong. To schedule an appointment at their Newark or East Orange, New Jersey locations, call the office or book online today.
              </p>
            </Fade>
          </div>
        </div>
        
        <div className='faq-section'>
               <h4 className='faq-title'>Fillings Q&A</h4>
                <Accordion type="multiple" defaultValue={['q1','q2','q3','q4']} className="w-full space-y-5">
            
            <AccordionItem value="q1">
              <AccordionTrigger className='faq-qn'>What are fillings?</AccordionTrigger>
              <AccordionContent className='faq-ans'>
                <p>Fillings are a restorative dentistry procedure that repairs tooth enamel damaged by decay. There are several types of fillings, but Maple Dental administers tooth-colored ones. Tooth-colored fillings match the shade and light-reflecting properties of your natural enamel, ensuring they blend in with your surrounding teeth.</p>
                <p className="mt-3">
                    Getting a filling is a quick and virtually pain-free procedure. There’s no recovery period, so as soon as the restoration cures, you can return to work, exercise, and other routine activities right away.
                    </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger className='faq-qn'>What does getting a filling involve?</AccordionTrigger>
              <AccordionContent className='faq-ans'>
                <p>At Maple Dental, getting a filling often takes less than an hour. Before recommending a filling, your provider does an oral exam and takes X-rays to assess your affected tooth. Next, they administer a local anesthetic and carefully remove the decaying portion of tooth enamel. </p>
                <p className="mt-3">
                    After removing the damaged portion of your tooth, your provider sterilizes it with an antiseptic solution. Then, they apply a thin layer of composite resin to the top of your tooth. The solution sits for several minutes and your provider points a blue wavelength light at it. The light causes the resin to harden and cure.
                    </p>
                    <p className='mt-3'>
                        Your provider repeats these same steps multiple times until your tooth is in its near-original shape and size. Afterward, your provider polishes the tooth, removes any excess resin, and provides care instructions.
                    </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger className='faq-qn'>Are fillings painful?</AccordionTrigger>
              <AccordionContent className='faq-ans'>
                <p>Getting fillings is a quick, pain-free procedure. Once the anesthesia wears off, it’s normal to experience some increased tooth sensitivity, but that should subside within a week. To minimize any discomfort, Maple Dental recommends:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>
                  Avoiding extremely hot or cold foods
                  </li>
                  <li>
                    Avoiding spicy foods
                  </li>
                  <li>
                    Using a desensitizing toothpaste
                  </li>
                  <li>
                   Taking over-the-counter pain medication
                  </li>
                  
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger className='faq-qn'>Who qualifies for cosmetic dentistry?</AccordionTrigger>
              <AccordionContent className='faq-ans'>
                <p>
                    Anyone who’s unhappy with the color, condition, or aesthetic appearance of their teeth and smile qualifies for cosmetic dentistry.
                </p>
                <p className='mt-2'>
                    Following an oral exam and a discussion of what you like and don’t like about your smile, your Maple Dental provider can design a treatment plan that aligns with your budget and goals.
                </p>
                <p className='mt-2'>
To learn more about cosmetic dentistry, make an appointment at Maple Dental by calling the office or clicking the online booking tool today.
                </p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
                </div>
            </main>
        </div>
    );
}