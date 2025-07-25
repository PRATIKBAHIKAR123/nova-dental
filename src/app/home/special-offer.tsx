import React, { useState } from 'react';
import { Phone, CheckCircle, Globe, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Bounce, Fade } from 'react-awesome-reveal';
import BookingModal from '../booking/bookingScreen';

const SpecialOffersSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const offers = [
    {
      id: 1,
      title: "Dental Emergency",
      price: "$55",
      originalPrice: "$120",
      features: [
        "Emergency consultation",
        "Pain relief treatment",
        "Immediate care"
      ],
      conditions: [
        "For new patients without insurance",
        "One time offer"
      ],
      badge: "Emergency",
      badgeColor: "bg-red-500",
      icon: "🚨"
    },
    {
      id: 2,
      title: "New Patient Special",
      price: "$130",
      originalPrice: "$280",
      features: [
        "Complete oral examination",
        "Digital X-rays",
        "Treatment consultation"
      ],
      conditions: [
        "Exams & X-Rays",
        "For new patients without insurance"
      ],
      badge: "Popular",
      badgeColor: "bg-green-500",
      icon: "⭐"
    }
  ];

  const languages = [
    "English", "Spanish", "Portuguese", "Creole", "Arabic", "Hindi"
  ];

  return (
    <section className="relative bg-primary py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <span className="text-3xl">🎉</span>
          </div> */}
          <h2 className="text-4xl font-bold text-white mb-4">
            <Bounce>
            Special Offers
            </Bounce>
          </h2>
          <Fade>
          <p className="text-3xl text-blue-100 max-w-2xl mx-auto">
            For Patients Without Insurance
          </p>
          </Fade>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {offers.map((offer) => (
            <div key={offer.id} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-md p-4 md:p-16 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                {/* Badge */}
                {/* <div className={`inline-flex items-center gap-2 ${offer.badgeColor} text-white px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                  <span>{offer.icon}</span>
                  {offer.badge}
                </div> */}

                {/* Title */}
                <h3 className="text-lg md:text-4xl font-normal text-gray-900 mb-4">
                  {offer.title}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl md:text-5xl font-bold text-primary">
                    {offer.price}
                  </span>
                  <span className="text-2xl text-gray-400 line-through">
                    {offer.originalPrice}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save {Math.round(((parseInt(offer.originalPrice.slice(1)) - parseInt(offer.price.slice(1))) / parseInt(offer.originalPrice.slice(1))) * 100)}%
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Conditions */}
                <div className="border-t pt-6 space-y-2">
                  {offer.conditions.map((condition, index) => (
                    <p key={index} className="text-sm text-gray-500 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {condition}
                    </p>
                  ))}
                </div>

                {/* CTA Button */}
                <div className='text-center mt-2'>
                <Button onClick={()=>setIsBookingOpen(true)} className='w-full'>Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Language Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-8 border border-white/20">
          <div className="text-center">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div> */}
            <h3 className="text-2xl font-bold text-white mb-4">
              Our staff speak 6 languages!
            </h3>
            
            {/* Language Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {languages.map((language, index) => (
                <span 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors duration-200"
                >
                  {language}
                </span>
              ))}
            </div>

            <p className="text-blue-100 text-lg mb-8">
              We are here to help you in your preferred language. Call us today!
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center gap-3 bg-white text-primary font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button onClick={()=>setIsBookingOpen(true)} className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors duration-200">
                <Users className="w-5 h-5" />
                Book Online
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
    </section>
  );
};

export default SpecialOffersSection;