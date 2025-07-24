
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function CosmeticDentistryPage() {
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <ServiceSidebar />
            <main className='ml-72 flex-1 overflow-y-auto p-4'>
                <div className='flex flex-col items-center gap-4 bg-white'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Cosmetic Dentistry Specialist
</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p>
                            Cosmetic Dentistry for Newark and East Orange, NJ | Maple Dental | Cosmetic & Family Dentist
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
                src="/Images/banners/dentists-treat-patients-teeth.jpg"
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
          <div className='desc-text-subtitle'>Cosmetic Dentistry</div>
          <h3 className='desc-text-title'>About Cosmetic Dentistry</h3>
          <p>
            If you have crooked, stained, or damaged teeth, cosmetic dentistry can enhance your smile and boost your oral health. If you’re searching for a skilled dentist near you, Maple Dental offers a range of cosmetic services, including veneers, teeth whitening, and cosmetic bonding. To schedule an appointment at their Newark or East Orange, New Jersey locations, call the office or book online today.
          </p>
        </Fade>
      </div>
    </div>
    <div className='why-us-section'>
        <div className='why-us-descritption px-20 text-center'>
            <Fade cascade direction="up" delay={1000} duration={600}>
        {/* <div className='desc-subtitle'>
         Top Reasons
        </div> */}
        <div className='desc-title'>
            Cosmetic Dentistry at Maple Dental
        </div>
        <div className='desc-points'>
            <p>
                At Maple Dental, we believe every smile should reflect confidence, health, and beauty. Our Cosmetic Dentistry services are designed to enhance the appearance of your teeth, gums, and overall smile—whether you're looking for a subtle touch-up or a full smile makeover.
            </p>
        </div>
        </Fade>
        </div>
        <div className='why-us-img-section'>
            <Zoom cascade damping={0.3} duration={800}>
               <img src="/Images/banners/dentist-s-office-interior-with-modern-chair-special-dentisd-equipment-interior-stomatology-clinic.jpg" alt="dental" />
               </Zoom>
        </div>

    </div>
    <div className='faq-section'>
           <h4 className='faq-title'>Cosmetic Dentistry Q&A</h4>
            <Accordion type="multiple" defaultValue={['q1','q2','q3','q4']} className="w-full space-y-5">
        
        <AccordionItem value="q1">
          <AccordionTrigger className='faq-qn'>What is oral surgery?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            Oral surgery uses specialized tools and treatment techniques to address problems affecting the teeth, gums, tongue, lips, or jaw. Dentists who perform oral surgery undergo four years of traditional dental school, followed by an additional two or three years of specialty training in surgical procedures.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger className='faq-qn'>What is cosmetic dentistry?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Cosmetic dentistry uses whitening treatments, restorations, and oral prosthetics to improve the appearance of your teeth and smile. Though many of these treatments are elective, they provide the added benefit of optimal oral health. By replacing or repairing missing or damaged teeth, it’s possible to reduce the risk of gum recession, loose teeth, and bone decay.</p>
            <p className="mt-3">
                We use the most effective systems for cosmetic dentistry
                </p>
                <img src={`/Images/banners/2773621.webp`} alt="Cosmetic Dentistry" className='mt-3' />
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger className='faq-qn'>What services fall under the umbrella of cosmetic dentistry?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Maple Dental offers a variety of cosmetic dentistry services, including:</p>
            <ul className="mt-2 space-y-2">
              <li><strong>Dental implants</strong>
              <p>Dental implants are oral prosthetics that replace missing teeth. Instead of resting on your gums like dentures, they’re inserted into your jaw during an outpatient procedure. Dental implants provide a base for restorations, including crowns, bridges, and implant-retained overdentures.</p>
              </li>
              <li><strong>Veneers</strong>
                <p>
Veneers are thin porcelain coverings bonded to your natural teeth. They cover up minor imperfections like tooth stains, gaps, or unusually shaped teeth. Veneers make your smile appear balanced and symmetrical. With good oral hygiene, they often last 15-20 years.
                </p>
              </li>
              <li>
                <strong>
                    Crowns and bridges
                </strong>
                <p>
                    Crowns and bridges are dental restorations that repair or replace damaged or missing teeth. A crown is a cap that covers a chipped or cracked tooth, while a bridge features an artificial tooth and fills a gap in your smile. 
                </p>
              </li>
              <li>
                <strong>
                    Teeth whitening
                </strong>
                <p>
                    Teeth whitening uses FDA-approved solutions like carbamide peroxide or hydrogen peroxide to eliminate stains from the surface of your teeth. Maple Dental offers several types of teeth-whitening treatment, including in-office whitening and take-home teeth whitening trays.
                </p>
              </li>
                <li>
                    <strong>
                        Cosmetic bonding
                    </strong>
                    <p>
                        Cosmetic bonding repairs tooth damage caused by trauma or decay. During a bonding procedure, your provider applies an enamel-colored resin to your teeth. Once the material dries, it restores your damaged tooth to its near-original size and shape.
                    </p>
                    </li>
                    <li>
                <strong>
                    Cosmetic gum contouring
                </strong>
                <p>
                    If you have excess tissue that results in a “gummy smile,” your provider might recommend cosmetic gum contouring. During this procedure, your Maple Dental provider uses specialized tools to reshape your gums, improving their cosmetic appearance.
                </p>
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