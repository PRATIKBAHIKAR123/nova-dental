
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function OralSurgeryPage() {
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <ServiceSidebar />
            <main className='ml-72 flex-1 overflow-y-auto p-4'>
                <div className='flex flex-col items-center gap-4 bg-white'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Oral Surgery Specialist</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p>
                            Oral Surgery for Newark and East Orange, NJ | Maple Dental | Cosmetic & Family Dentist
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
                src="/Images/banners/dentist-assistant-surgery-dental-clinic.jpg"
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
          <div className='desc-text-subtitle'>Oral Surgery</div>
          <h3 className='desc-text-title'>About Oral Surgery</h3>
          <p>
            While most dental procedures are noninvasive, some situations require oral surgery. If you&aosp;re looking for a trusted dentist near you, Maple Dental provides a range of oral surgery services, including extractions, root canals, and dental implant placements. To schedule an appointment at their Newark or East Orange, New Jersey locations, call the office or book online today.
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
           <h4 className='faq-title'>Oral Surgery Q&A</h4>
            <Accordion type="multiple" defaultValue={['q1','q2','q3','q4']} className="w-full space-y-5">
        
        <AccordionItem value="q1">
          <AccordionTrigger className='faq-qn'>What is oral surgery?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            Oral surgery uses specialized tools and treatment techniques to address problems affecting the teeth, gums, tongue, lips, or jaw. Dentists who perform oral surgery undergo four years of traditional dental school, followed by an additional two or three years of specialty training in surgical procedures.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger className='faq-qn'>What are some common types of oral surgery?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Maple Dental offers various types of oral surgery, including:</p>
            <ul className='space-y-2 mt-2'>
                <strong>Teeth extractions</strong>
            <p className="mt-2">You might also benefit from emergency dentistry if you experience oral trauma due to a car accident, sports injury, or slip-and-fall.</p>
            <strong>Root canal therapy</strong>
            <p className="mt-2">Root canal therapy removes damaged or infected pulp from the center of a tooth. By removing the pulp, it’s possible to limit the pain, prevent the spread of infection, and preserve your natural tooth. Following the removal of the pulp, your provider covers your tooth with a dental crown. </p>
            <strong>Dental implant placement</strong>
            <p className='mt-2'>Dental implants are prosthetics that replace missing natural teeth. They’re inserted into your jaw during an outpatient procedure, fuse with your bone, and provide a foundation for dental restorations like crowns, bridges, or implant-retained overdentures.</p>
            <strong>Gum grafts</strong>
            <p className='mt-2'>If you have gum disease, like gingivitis or periodontitis, and it's caused your gum tissue to recede, your Maple Dental provider might recommend a gum graft. During this type of oral surgery, your provider removes a piece of healthy tissue from another part of your mouth and stitches it over your receding gums. </p>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger className='faq-qn'>Will oral surgery benefit me?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>To determine if you’re a candidate for oral surgery, your Maple Dental provider does an oral exam, reviews your dental health history, and asks about your symptoms, including when they started and if any activities like biting or chewing make them worse. Afterward, they order a series of oral X-rays to assess parts of your mouth invisible to the naked eye.</p>
            <p className="mt-2">Once your provider gathers the necessary information, they can make recommendations and design a custom surgical treatment plan.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger className='faq-qn'>Is oral surgery safe?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Oral surgery is safe and usually well-tolerated. To ensure your comfort during treatment, your provider administers a local anesthetic. If you experience dental anxiety or have a low pain threshold, they can also provide sedation dentistry. Sedation dentistry uses prescription medication to help you relax while undergoing dental treatment. 
            </p>
            <p className='mt-2'>
                To see if you’re a candidate for oral surgery, make an appointment at Maple Dental by calling the office, or clicking the online booking tool today.
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